import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../../../../services/pais.service';
import { PaisResponse } from '../../../../models/pais-response';

declare var $: any;
declare var jQuery: any;
declare var dt : 'datatables.net';

@Component({
  selector: 'app-crud-pais',
  templateUrl: './crud-pais.component.html',
  styleUrls: ['./crud-pais.component.scss']
})
export class CrudPaisComponent implements OnInit {
  frmRegistro: FormGroup;
  codPais:String='';
  estadoProceso:number=-1;
  estadoBuscar:number=0;
  miPais:PaisResponse={
    id : '',
    nombre : ''
  }
  palabraClave:String='';

  validationMessage = {
    id : [
      { type : 'required', message:'El id es obligatorio'}
    ],
    nombre : [
      { type : 'required', message:'El nombre es obligatorio'}
    ]
  };
  constructor(private fb : FormBuilder,private paisSer : PaisService) {
    this.frmRegistro = this.fb.group({
      id: new FormControl('',Validators.compose([Validators.required])),
      nombre: new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
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
    $("#idPais").focus();
  }
  guardarReg(){
    $("#idPais").prop('disabled', true);
    $("#btnGuardar").hide();
    $("#btnEditar").show();
    $("#btnEliminar").show();
    $("#btnCancelar").show();
    $("#nombrePais").focus();
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
  onSubmitData() {
    let jQueryInstance = this;
    if (this.frmRegistro.valid) {
      this.paisSer.InsertRecord(this.frmRegistro.value).subscribe((result)=>{
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

      this.paisSer.UpdateRecord(this.frmRegistro.value,this.codPais).subscribe((result)=>{
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
    this.paisSer.DeleteRecord(this.codPais).subscribe(res=>{
      this.estadoProceso=2;
    })
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      jQueryInstance.cancelarRegistro();
    },3000);
  }
  InitFrm()
  {
    this.frmRegistro.reset({
      id  : '',
      nombre:''
    });
  }
  ActbuscarReg(){
    $("#nombrePais").prop('disabled', false);
    $("#btnNuevo").hide();
    $("#btnEditar").show();
    $("#btnEliminar").show();
    $("#btnCancelar").show();
    $("#nombrePais").focus();
  }
  async LoadPaises(){
    let jq=this;
    await this.paisSer.ViewRecord(this.palabraClave).then((result)=>{
      this.miPais=result;
      this.frmRegistro.setValue({
        id : this.miPais.id,
        nombre : this.miPais.nombre
      });
      this.estadoBuscar=1;
      this.estadoProceso=3;
      this.ActbuscarReg();
      setTimeout(function(){
        jq.estadoProceso=-1;
      },2500);
    }).catch((error)=>{
      jq.estadoBuscar=-2;
      setTimeout(function(){
        jq.estadoBuscar=0;
        jq.estadoProceso=-1;
        jq.palabraClave='';
        jq.cancelarRegistro();
        jq.InitFrm();
      },2500);
      this.estadoProceso=-2;
    })
  }
}