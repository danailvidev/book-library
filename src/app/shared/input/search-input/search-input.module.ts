import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { SearchInputComponent } from './search-input.component';

@NgModule({
  imports: [CommonModule, NzInputModule, NzButtonModule, NzIconModule],
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent]
})
export class SearchInputModule {}
