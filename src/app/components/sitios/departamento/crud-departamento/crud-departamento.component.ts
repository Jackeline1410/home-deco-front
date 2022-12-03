import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-departamento',
  templateUrl: './crud-departamento.component.html',
  styleUrls: ['./crud-departamento.component.scss']
})
export class CrudDepartamentoComponent implements OnInit {
  
  frRegistro: FormGroup;

  validationMessage = {
    id : [
      { type : 'required', message:'El id del departamento es requerido'}
    ],
    nombre : [
      { type : 'required', message:'El nombre del departamento es obligatorio'}
    ],
    id_pais_dep_fk : [
      { type : 'required', message:'Seleccione un pais'}
    ]
  };

  constructor(private fb: FormBuilder) {
    this.frRegistro = this.fb.group({
      id: new FormControl('',Validators.compose([Validators.required])),
      nombre: new FormControl('',Validators.compose([Validators.required])),
      id_pais_dep_fk: new FormControl('',Validators.compose([Validators.required]))
    });
   }

  ngOnInit(): void {
    
  }

}
