import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { OrdenProduccionComponent } from './orden-produccion/orden-produccion.component';
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component';
import { CrudInventarioComponent } from './inventario/crud-inventario/crud-inventario.component';
import { ListInventarioComponent } from './inventario/list-inventario/list-inventario.component';
import { CrudMateriaPrimaComponent } from './inventario/crud-materia-prima/crud-materia-prima.component';
import { ListMateriaPrimaComponent } from './inventario/list-materia-prima/list-materia-prima.component';
import { CrudOrdenProdComponent } from './inventario/crud-orden-prod/crud-orden-prod.component';
import { ListOrdenProdComponent } from './inventario/list-orden-prod/list-orden-prod.component';
import { CrudProductoComponent } from './inventario/crud-producto/crud-producto.component';
import { ListProductoComponent } from './inventario/list-producto/list-producto.component';


@NgModule({
  declarations: [
    ProductosComponent,
    InventarioComponent,
    OrdenProduccionComponent,
    MateriaPrimaComponent,
    CrudInventarioComponent,
    ListInventarioComponent,
    CrudMateriaPrimaComponent,
    ListMateriaPrimaComponent,
    CrudOrdenProdComponent,
    ListOrdenProdComponent,
    CrudProductoComponent,
    ListProductoComponent,
    
  ],
  exports:[
    ProductosComponent,
    InventarioComponent,
    OrdenProduccionComponent,
    MateriaPrimaComponent,
    CrudInventarioComponent,
    ListInventarioComponent,
    CrudMateriaPrimaComponent,
    ListMateriaPrimaComponent,
    CrudOrdenProdComponent,
    ListOrdenProdComponent,
    CrudProductoComponent,
    ListProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodegaModule { }
