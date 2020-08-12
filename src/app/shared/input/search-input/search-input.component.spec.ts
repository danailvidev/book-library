import { By } from '@angular/platform-browser';
import { tick, fakeAsync } from '@angular/core/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NzInputModule,
        NzButtonModule,
        NzIconModule
      ],
      declarations: [ SearchInputComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    component.placeholder = '::placeholder::';
    component.delay = 5;
    component.minInputLength = 3;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the input placeholder', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('::placeholder::');
  });

  it('should handle input change', fakeAsync(() => {
    const cases = [
      {
        in: 'v',
        want: undefined
      },
      {
        in: 'va',
        want: undefined
      },
      {
        in: 'value',
        want: 'value'
      },
      {
        in: '',
        want: ''
      }
    ];

    cases.map(c => {
      const input = fixture.debugElement.query(By.css('input'));
      const event = {
        target: { value: c.in },
        stopPropagation: jasmine.createSpy('stopPropagation')
      };

      let got: string;

      component.input.subscribe((value: string) => {
        got = value;
      });

      input.triggerEventHandler('input', event);

      tick(10);

      expect(got).toEqual(c.want);
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  }));
});
