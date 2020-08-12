import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { HeaderComponent } from './header';
import { FormItemComponent } from './form-item';
import { MarkFormTouchedDirective } from './form-group-helper/mark-form-touched.directive';

@NgModule({
  declarations: [FormItemComponent, HeaderComponent, MarkFormTouchedDirective],
  imports: [CommonModule, NzFormModule, NzPageHeaderModule, NzTagModule],
  exports: [FormItemComponent, HeaderComponent, MarkFormTouchedDirective]
})
export class FormsModule {}
