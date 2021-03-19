import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormulaireTrajetComponent } from './formulaire-trajet/formulaire-trajet.component';
import { HeaderComponent } from './header/header.component';
import { ResultatsContainerComponent } from './resultats-container/resultats-container.component';
import { ResultatsItemComponent } from './resultats-item/resultats-item.component';
import { SelectComponent } from './select/select.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    FormulaireTrajetComponent,
    HeaderComponent,
    ResultatsContainerComponent,
    ResultatsItemComponent,
    SelectComponent,
    MeteoComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    FormulaireTrajetComponent,
    HeaderComponent,
    ResultatsContainerComponent,
    MeteoComponent,
    MapComponent
  ]
})
export class ComponentsModule { }
