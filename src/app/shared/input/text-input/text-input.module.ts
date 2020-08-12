import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

import { TextInputComponent } from './text-input.component';
import { ValidationErrorI18NModule } from '../../forms/validation-error-i18n';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    ValidationErrorI18NModule
  ],
  exports: [ TextInputComponent ],
  declarations: [ TextInputComponent ]
})
export class TextInputModule { }
