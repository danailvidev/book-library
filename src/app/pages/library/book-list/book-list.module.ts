import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { SearchInputModule } from '@shared/input/search-input';

import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, SearchInputModule, NzGridModule, NzTableModule, NzPaginationModule],
  exports: [BookListComponent],
  providers: []
})
export class BookListModule {}
