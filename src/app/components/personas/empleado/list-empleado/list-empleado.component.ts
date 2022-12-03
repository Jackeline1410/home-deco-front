import { Component, OnInit } from '@angular/core';
import { EmpleadoResponse } from 'src/app/models/empleado-response';
import { EmpleadoService } from 'src/app/services/empleado.service';

declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.scss']
})

export class ListEmpleadoComponent implements OnInit {

  misEmpleados : EmpleadoResponse[]=[];
  constructor(private empleadoSer : EmpleadoService) { }

  ngOnInit(): void {
    this.LoadEmpleados();
  }
  Eliminar(id:String){
    this.empleadoSer.DeleteRecord(id).subscribe((result)=>{
      $('#empleados').DataTable().clear().destroy();
      this.LoadEmpleados();
    });
  }
  async LoadEmpleados(){
    let jq=this;
    await this.empleadoSer.ViewRecords().then((result)=>{
      this.misEmpleados=result;
      $(document).ready( function () {
        $('#empleados').DataTable(
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
