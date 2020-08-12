import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookEditComponent } from './book-edit.component';
import { BookFormModule } from '../book-form/book-form.module';

@NgModule({
  declarations: [BookEditComponent],
  imports: [CommonModule, BookFormModule]
})
export class BookEditModule {}
