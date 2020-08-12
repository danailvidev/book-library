import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookComponent } from './new-book.component';
import { BookFormModule } from '../book-form/book-form.module';

@NgModule({
  declarations: [NewBookComponent],
  imports: [CommonModule, BookFormModule]
})
export class NewBookModule {}
