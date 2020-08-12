import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library.routing';
import { BookListModule } from './book-list/book-list.module';
import { LibrarySharedModule } from '../../shared/library';

@NgModule({
  imports: [CommonModule, LibraryRoutingModule, BookListModule, LibrarySharedModule]
})
export class LibraryModule {}
