import { Directive, Self, HostListener } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: 'form[formGroup]'
})
export class MarkFormTouchedDirective {
  @HostListener('submit')
  onSubmit() {
    this.container.control.markAllAsTouched();
  }

  constructor(@Self() private container: ControlContainer) {}
}
