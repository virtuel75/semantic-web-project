import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing font awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontsModule {
  constructor(public library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

}
