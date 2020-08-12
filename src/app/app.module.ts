import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { IconsProviderModule } from './icons-provider.module';
import { environment } from 'src/environments/environment';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: environment, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
