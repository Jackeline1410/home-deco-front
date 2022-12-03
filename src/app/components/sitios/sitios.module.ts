import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais/pais.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CrudCiudadComponent } from './ciudad/crud-ciudad/crud-ciudad.component';
import { ListadoCiudadComponent } from './ciudad/listado-ciudad/listado-ciudad.component';
import { CrudDepartamentoComponent } from './departamento/crud-departamento/crud-departamento.component';
import { ListadoDepartamentoComponent } from './departamento/listado-departamento/listado-departamento.component';
import { CrudPaisComponent } from './pais/crud-pais/crud-pais.component';
import { ListadoPaisComponent } from './pais/listado-pais/listado-pais.component';
import { SitiosComponent } from './sitios.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaisComponent,
    DepartamentoComponent,
    CiudadComponent,
    CrudCiudadComponent,
    ListadoCiudadComponent,
    CrudDepartamentoComponent,
    ListadoDepartamentoComponent,
    CrudPaisComponent,
    ListadoPaisComponent,
    SitiosComponent
  ],
  exports:[
    PaisComponent,
    DepartamentoComponent,
    CiudadComponent,
    CrudCiudadComponent,
    ListadoCiudadComponent,
    CrudDepartamentoComponent,
    ListadoDepartamentoComponent,
    CrudPaisComponent,
    ListadoPaisComponent,
    SitiosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class SitiosModule { }
