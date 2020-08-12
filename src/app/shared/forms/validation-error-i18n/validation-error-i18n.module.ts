import { NgModule } from '@angular/core';

import { ValidationErrorI18nPipe } from './validation-error-i18n.pipe';

@NgModule({
    exports: [ ValidationErrorI18nPipe ],
    declarations: [ ValidationErrorI18nPipe ]
})
export class ValidationErrorI18NModule {}
