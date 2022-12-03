import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisResponse } from '../../../../models/pais-response';
import { CiudadResponse } from '../../../../models/ciudad-response';
import { DepartamentoResponse } from '../../../../models/departamento-response';
import { CiudadService } from '../../../../services/ciudad.service';
import { PaisService } from '../../../../services/pais.service';
import { DepartamentoService } from 'src/app/services/departamento.service';

declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-crud-ciudad',
  templateUrl: './crud-ciudad.component.html',
  styleUrls: ['./crud-ciudad.component.scss']
})
export class CrudCiudadComponent implements OnInit {
  frmRegistro: FormGroup;
  misPaises : PaisResponse[]=[];
  codPais : String = '';
  misDeps : DepartamentoResponse[]=[];
  codDep : String = ''
  estadoProceso:number=-1;
  estadoBuscar:number=0;
  palabraClave:String='';
  miCiudad : CiudadResponse={
    id : '',
    nombre : '',
    idDepFk:''
  }
  validationMessage={
    id : [
      {type:'required',message:'El id es requerido'}
    ],
    nombre : [
      {type:'required',message:'El nombre de la ciudad es rquerido'}
    ],
    idDepFk:[
      {type:'required',message:'Seleccione un departamento'}
    ]
  }
  constructor(private fb : FormBuilder,private ciudadSer:CiudadService,
    private paisSer:PaisService, private depSer : DepartamentoService) {
    this.frmRegistro = this.fb.group({
      id: new FormControl('',Validators.compose([Validators.required])),
      nombre: new FormControl('',Validators.compose([Validators.required])),
      idDepFk:new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.LoadPaises();
    $(document).ready(function() {
      $('#frmDataRegistro').find('input, textarea, select').attr('disabled', 'disabled');
      $("#btnGuardar").hide();
      $("#btnEditar").hide();
      $("#btnEliminar").hide();
      $("#btnCancelar").hide();
    });
  }
  nuevoRegistro(){
    this.InitFrm();
    $('#frmDataRegistro').find('input, textarea, select').removeAttr('disabled');
    $("#btnGuardar").show();
    $("#btnEditar").hide();
    $("#btnEliminar").hide();
    $("#btnNuevo").hide();
    $("#btnCancelar").show();
    $("#idciu").focus();
    $("#iddep").prop('disabled',true);
  }
  guardarReg(){
    $("#idciu").prop('disabled', true);
    $("#idpais").prop('disabled', false);
    $("#iddep").prop('disabled', false);
    $("#btnGuardar").hide();
    $("#btnEditar").show();
    $("#btnEliminar").show();
    $("#btnCancelar").show();
    $("#nombreciu").focus();
  }
  cancelarRegistro(){
    $('#frmDataRegistro').find('input, textarea, select').attr('disabled','disable');
    $("#btnGuardar").hide();
    $("#btnEditar").hide();
    $("#btnEliminar").hide();
    $("#btnNuevo").show();
    $("#btnCancelar").hide();
    this.palabraClave='';
    this.estadoBuscar=0;
    this.InitFrm();
  }
  InitFrm()
  {
    this.frmRegistro.reset({
      id  : '',
      nombre:'',
      idDepFk:''
    });
  }
  onSubmitData() {
    let jQueryInstance = this;
    if (this.frmRegistro.valid) {
      this.ciudadSer.InsertRecord(this.frmRegistro.value).subscribe((result)=>{
        this.guardarReg();
        this.codPais= this.frmRegistro.get('id')?.value;
        // this.miPais=result;
        // this.codPais=this.miPais.nombre;
        this.estadoProceso=0;
      });
      setTimeout(function(){
        jQueryInstance.estadoProceso=-1;
      },3000);
    } else {
      Object.keys(this.frmRegistro.controls).forEach(field => {
        const control: any = this.frmRegistro.get(field);
        // handle if basic FormControl
        // tslint:disable-next-line:no-string-literal
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        } else {
            // tslint:disable-next-line:no-string-literal
            const QFormArray = control['controls'];
            QFormArray.forEach((subcCtrlGp: { [x: string]: {}; get: (arg0: string) => any; }) => {
              // tslint:disable-next-line:no-string-literal
              Object.keys(subcCtrlGp['controls']).forEach(subField => {
                const nestedControl = subcCtrlGp.get(subField);
                nestedControl.markAsTouched({ onlySelf: true });
              });
            });
          }
      });
    }
  }
  onEditData() {
    let jQueryInstance = this;
    console.log(this.frmRegistro.value);
    if (this.frmRegistro.valid) {

      this.ciudadSer.UpdateRecord(this.frmRegistro.value,this.codPais).subscribe((result)=>{
          this.estadoProceso=1;
      });
      setTimeout(function(){
        jQueryInstance.estadoProceso=-1;
      },3000);
    } else {
      Object.keys(this.frmRegistro.controls).forEach(field => {
        const control: any = this.frmRegistro.get(field);
        // handle if basic FormControl
        // tslint:disable-next-line:no-string-literal
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        } else {
            // tslint:disable-next-line:no-string-literal
            const QFormArray = control['controls'];
            QFormArray.forEach((subcCtrlGp: { [x: string]: {}; get: (arg0: string) => any; }) => {
              // tslint:disable-next-line:no-string-literal
              Object.keys(subcCtrlGp['controls']).forEach(subField => {
                const nestedControl = subcCtrlGp.get(subField);
                nestedControl.markAsTouched({ onlySelf: true });
              });
            });
          }
      });
    }
  }
  onDeleteData() {
    let jQueryInstance = this;
    this.ciudadSer.DeleteRecord(this.codPais).subscribe(res=>{
      this.estadoProceso=2;
    })
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      jQueryInstance.cancelarRegistro();
    },3000);
  }
  async LoadPaises(){
    let jq=this;
    await this.ciudadSer.ViewRecords().then((result)=>{
      this.misPaises=result;
    }).catch((error)=>{
      console.log(`Error en la data ${JSON.stringify(error)}`);
    })
  }
  selectPais(event:any){
    this.LoadDeps(event?.target.value);
  }

  async LoadDeps(idPais : String){
    let jq=this;
    await this.depSer.ViewRecordByPais(idPais).then((result)=>{
      this.misDeps=result;
      if(this.misDeps.length>0){
        $("#iddep").prop('disabled',false);
      }else{
        $("#iddep").prop('disabled',true);
      }
    }).catch((error)=>{
      console.log(`Error en la data ${JSON.stringify(error)}`);
    })
  }
      
}

