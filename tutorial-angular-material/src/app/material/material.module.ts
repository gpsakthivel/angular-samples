import { NgModule } from '@angular/core';
// Video No - 2: Getting started
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
