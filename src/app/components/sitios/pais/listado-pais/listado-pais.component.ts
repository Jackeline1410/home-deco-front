import { Component, OnInit } from '@angular/core';
import { PaisResponse } from 'src/app/models/pais-response';
import { PaisService } from 'src/app/services/pais.service';

declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-listado-pais',
  templateUrl: './listado-pais.component.html',
  styleUrls: ['./listado-pais.component.scss']
})
export class ListadoPaisComponent implements OnInit {
  misPaises : PaisResponse[]=[];
  constructor(private paisSer : PaisService) { }

  ngOnInit(): void {
    this.LoadPaises();
  }
  Eliminar(id:String){
    this.paisSer.DeleteRecord(id).subscribe((result)=>{
      $('#paises').DataTable().clear().destroy();
      this.LoadPaises();
    });
  }
  async LoadPaises(){
    let jq=this;
    await this.paisSer.ViewRecords().then((result)=>{
      this.misPaises=result;
      $(document).ready( function () {
        $('#paises').DataTable(
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