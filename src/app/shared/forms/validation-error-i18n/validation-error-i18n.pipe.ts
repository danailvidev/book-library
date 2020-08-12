import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({ name: 'chValidationErrorI18N' })
export class ValidationErrorI18nPipe implements PipeTransform {
  private errors: any = {
    required: () => 'Required field'
  };

  constructor() {}

  public transform(errors: ValidationErrors): string {
    let message = '';

    Object.entries(errors || {}).map((e) => {
      if (message) {
        return;
      }

      if (e[1]) {
        message = this.errors[e[0]](e[1]);
      }
    });

    return message;
  }
}
