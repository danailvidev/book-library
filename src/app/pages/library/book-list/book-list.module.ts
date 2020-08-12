import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { SearchInputModule } from '@shared/input/search-input';

import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    SearchInputModule,

    NzGridModule,
    NzTableModule,
    NzPaginationModule,
    NzButtonModule,
    NzIconModule,
    NzDrawerModule
  ],
  exports: [BookListComponent]
})
export class BookListModule {}
