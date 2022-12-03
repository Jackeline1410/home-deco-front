import { Component, OnInit } from '@angular/core';
import { ClienteResponse } from 'src/app/models/cliente-response';
import { ClienteService } from 'src/app/services/cliente.service';

declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {

  misClientes : ClienteResponse[]=[];
  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.LoadClientes();
  }
  Eliminar(id:String){
    this.clienteService.DeleteRecord(id).subscribe((result)=>{
      $('#clientes').DataTable().clear().destroy();
      this.LoadClientes();
    });
  }
  async LoadClientes(){
    let jq=this;
    await this.clienteService.ViewRecords().then((result)=>{
      this.misClientes=result;
      $(document).ready( function () {
        $('#clientes').DataTable(
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
