import { Component, OnInit } from '@angular/core';
import { ProveedorResponse } from 'src/app/models/proveedor-response';
import { ProveedorService } from 'src/app/services/proveedor.service';


declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.scss']
})

export class ListProveedorComponent implements OnInit {

  misProveedores : ProveedorResponse[]=[];
  
  constructor(private proveedorSer : ProveedorService) { }

  ngOnInit(): void {
    this.LoadProveedores();
  }
  Eliminar(id:String){
    this.proveedorSer.DeleteRecord(id).subscribe((result)=>{
      $('#proveedores').DataTable().clear().destroy();
      this.LoadProveedores();
    });
  }
  async LoadProveedores(){
    let jq=this;
    await this.proveedorSer.ViewRecords().then((result)=>{
      this.misProveedores=result;
      $(document).ready( function () {
        $('#proveedores').DataTable(
          {
            retrieve: true,
            pageLength: 3,
            pagingType: 'full_numbers',
            language: {
              url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
            }
          });
        });
    }).catch((error)=>{
      console.log(`Error en la data ${JSON.stringify(error)}`);
    })
  }

}
