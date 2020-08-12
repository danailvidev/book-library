import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookModule } from './new-book/new-book.module';
import { BookEditModule } from './book-edit/book-edit.module';
import { LibraryRoutingModule } from './library.routing';
import { BookListModule } from './book-list/book-list.module';
import { LibrarySharedModule } from '../../shared/library';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NewBookModule,
    BookEditModule,
    BookListModule,
    LibrarySharedModule
  ]
})
export class LibraryModule {}
