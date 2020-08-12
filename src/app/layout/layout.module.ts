import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { LayoutComponents, LayoutRouting } from './layout.routing';

@NgModule({
  declarations: [LayoutComponents.components],
  imports: [
    CommonModule,
    LayoutRouting,

    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzDropDownModule
  ]
})
export class LayoutModule {}
