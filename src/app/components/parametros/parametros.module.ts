import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { CrudUbicacionComponent } from './ubicacion/crud-ubicacion/crud-ubicacion.component';
import { ListUbicacionComponent } from './ubicacion/list-ubicacion/list-ubicacion.component';



@NgModule({
  declarations: [
    UbicacionComponent,
    CrudUbicacionComponent,
    ListUbicacionComponent
  ],
  exports: [
    UbicacionComponent,
    CrudUbicacionComponent,
    ListUbicacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ParametrosModule { }
