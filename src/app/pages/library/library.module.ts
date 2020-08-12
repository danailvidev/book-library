import { NgModule } from '@angular/core';

import { LibraryRoutingModule } from './library.routing';

import { LibraryComponent } from './library.component';


@NgModule({
  imports: [LibraryRoutingModule],
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule { }
