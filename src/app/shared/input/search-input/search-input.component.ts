import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ch-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  private value = new Subject<string>();

  @Input() public delay: number;
  @Input() public placeholder: string;
  @Input() public minInputLength: number;

  @Output() public input = new EventEmitter<string>();

  public onInput(e: Event) {
    e.stopPropagation();

    this.value.next((<HTMLInputElement>e.target).value);
  }

  public ngOnInit() {
    this.value
      .pipe(
        debounceTime(this.delay),
        filter((input) => input.length > this.minInputLength || input.length === 0),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.input.emit(value);
      });
  }

  onIconClick(event: HTMLInputElement) {
    this.input.emit(event.value);
  }
}
