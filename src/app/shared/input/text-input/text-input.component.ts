import {
  Host,
  Input,
  OnInit,
  Optional,
  SkipSelf,
  Component,
  ViewChild,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';

import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  DefaultValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'ch-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild(DefaultValueAccessor, { static: false }) private valueAccessor: DefaultValueAccessor;

  @Input() public id: string;
  @Input() public type = 'text';
  @Input() public prefixIcon: string;
  @Input() public placeholder: string;
  @Input() public formControlName: string;

  public control: AbstractControl;

  constructor(
    @Host() @SkipSelf() @Optional() private controlContainer: ControlContainer,
    private changeDetector: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    if (this.controlContainer) {
      this.control = this.controlContainer.control.get(this.formControlName);
    }
  }

  public writeValue(value: string) {
    this.changeDetector.detectChanges();
    this.valueAccessor.writeValue(value);
  }

  public registerOnChange(fn: (_: string) => void) {
    this.changeDetector.detectChanges();
    this.valueAccessor.registerOnChange(fn);
  }

  public registerOnTouched(fn: () => void) {
    this.changeDetector.detectChanges();
    this.valueAccessor.registerOnTouched(fn);
  }

  public setDisabledState(isDisabled: boolean) {
    this.changeDetector.markForCheck();
    this.valueAccessor.setDisabledState(isDisabled);
  }
}
