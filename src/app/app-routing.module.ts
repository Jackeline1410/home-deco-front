import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PersonasComponent } from './components/personas/personas.component';
import { ClienteComponent } from './components/personas/cliente/cliente.component';
import { EmpleadoComponent } from './components/personas/empleado/empleado.component';
import { ProveedorComponent } from './components/personas/proveedor/proveedor.component';
import { CrudClienteComponent } from './components/personas/cliente/crud-cliente/crud-cliente.component';
import { ListClienteComponent } from './components/personas/cliente/list-cliente/list-cliente.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { PaisComponent } from './components/sitios/pais/pais.component';
import { CiudadComponent } from './components/sitios/ciudad/ciudad.component';
import { DepartamentoComponent } from './components/sitios/departamento/departamento.component';
import { CrudPaisComponent } from './components/sitios/pais/crud-pais/crud-pais.component';
import { ListadoPaisComponent } from './components/sitios/pais/listado-pais/listado-pais.component';
import { CrudCiudadComponent } from './components/sitios/ciudad/crud-ciudad/crud-ciudad.component';
import { ListadoCiudadComponent } from './components/sitios/ciudad/listado-ciudad/listado-ciudad.component';
import { CrudDepartamentoComponent } from './components/sitios/departamento/crud-departamento/crud-departamento.component';
import { ListadoDepartamentoComponent } from './components/sitios/departamento/listado-departamento/listado-departamento.component';
import { CrudEmpleadoComponent } from './components/personas/empleado/crud-empleado/crud-empleado.component';
import { ListEmpleadoComponent } from './components/personas/empleado/list-empleado/list-empleado.component';
import { CrudProveedorComponent } from './components/personas/proveedor/crud-proveedor/crud-proveedor.component';
import { ListProveedorComponent } from './components/personas/proveedor/list-proveedor/list-proveedor.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'inicio',component:InicioComponent,
    children: [
      {path:'personas',component:PersonasComponent,
        children: [
        {path:'cliente',component:ClienteComponent,
          children:[
            {path:'crudcliente',component:CrudClienteComponent},
            {path:'listcliente',component:ListClienteComponent},
            {path:'**',pathMatch:'full',redirectTo:'crudcliente'}
          ]
        },
        {path:'empleado',component:EmpleadoComponent,
          children:[
            {path:'crudempleado',component:CrudEmpleadoComponent},
            {path:'listempleado',component:ListEmpleadoComponent},
            {path:'**',pathMatch:'full',redirectTo:'crudempleado'}
          ]
        },
        {path:'proveedor',component:ProveedorComponent,
          children:[
            {path:'crudproveedor',component:CrudProveedorComponent},
            {path:'listproveedor',component:ListProveedorComponent},
            {path:'**',pathMatch:'full',redirectTo:'crudproveedor'}
        ]
        },
        {path:'**',pathMatch:'full',redirectTo:'cliente'}
      ]
      },
      {path:'sitios',component:SitiosComponent,
        children:[
          {path:'paises',component:PaisComponent,
            children:[
              {path:'crudpais',component:CrudPaisComponent},
              {path:'listadopais',component:ListadoPaisComponent},
              {path:'**',pathMatch:'full',redirectTo:'crudpais'}
            ]
          },
          {path:'ciudades',component:CiudadComponent,
            children:[
                {path:'crudciudad',component:CrudCiudadComponent},
                {path:'listadociudad',component:ListadoCiudadComponent},
                {path:'**',pathMatch:'full',redirectTo:'crudciudad'}
            ]
          },
          {path:'departamentos',component:DepartamentoComponent,
            children:[
                {path:'cruddepartamento',component:CrudDepartamentoComponent},
                {path:'listadodepartamento',component:ListadoDepartamentoComponent},
                {path:'**',pathMatch:'full',redirectTo:'cruddepartamento'}
              ]
          }
        ]
      }
    ]
  },
  {path:'**',pathMatch:'full',redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
