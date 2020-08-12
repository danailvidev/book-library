import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { FormsModule as SharedFormsModule } from '@shared/forms';
import { SearchInputModule } from '@shared/input/search-input';
import { TextInputModule } from '@shared/input/text-input';

import { BookFormComponent } from './book-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchInputModule,
    SharedFormsModule,
    TextInputModule,

    NzGridModule,
    NzFormModule,
    NzModalModule,
    NzButtonModule,
    NzMessageModule,
    NzSkeletonModule
  ],
  declarations: [BookFormComponent],
  exports: [BookFormComponent]
})
export class BookFormModule {}
