import {NgModule} from '@angular/core';
import {
  MdIconModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdCardModule,
  MdChipsModule, MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdSnackBarModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdSnackBarModule
  ]
})
export class MaterialModule {}
