import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { CrudClienteComponent } from './cliente/crud-cliente/crud-cliente.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CrudEmpleadoComponent } from './empleado/crud-empleado/crud-empleado.component';
import { ListEmpleadoComponent } from './empleado/list-empleado/list-empleado.component';
import { CrudProveedorComponent } from './proveedor/crud-proveedor/crud-proveedor.component';
import { ListProveedorComponent } from './proveedor/list-proveedor/list-proveedor.component';
import { PersonasComponent } from './personas.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ClienteComponent,
    EmpleadoComponent,
    ProveedorComponent,
    CrudClienteComponent,
    ListClienteComponent,
    CrudEmpleadoComponent,
    ListEmpleadoComponent,
    CrudProveedorComponent,
    ListProveedorComponent,
    PersonasComponent,
  ],
  exports:[
    ClienteComponent,
    EmpleadoComponent,
    ProveedorComponent,
    CrudClienteComponent,
    ListClienteComponent,
    CrudEmpleadoComponent,
    ListEmpleadoComponent,
    CrudProveedorComponent,
    ListProveedorComponent,
    PersonasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class PersonasModule { }
