import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BikeService, BIKESTATION_BASE_URL } from './bike.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    BikeService,
    {
      provide: BIKESTATION_BASE_URL, useValue: 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations'
    }
  ]
})
export class ServicesModule { }
