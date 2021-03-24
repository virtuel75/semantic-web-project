import { NgModule } from '@angular/core';

import { InterceptorsModule } from './interceptors/interceptors.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [],
  exports: [
    ServicesModule,
    InterceptorsModule
  ]
})
export class CoreModule { }
