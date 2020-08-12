import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrarySharedModule } from '@shared/library';

import { NewBookModule } from './new-book/new-book.module';
import { BookEditModule } from './book-edit/book-edit.module';
import { BookFormModule } from './book-form/book-form.module';
import { LibraryRoutingModule } from './library.routing';
import { BookListModule } from './book-list/book-list.module';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NewBookModule,
    BookEditModule,
    BookListModule,
    BookFormModule,
    LibrarySharedModule
  ]
})
export class LibraryModule {}
