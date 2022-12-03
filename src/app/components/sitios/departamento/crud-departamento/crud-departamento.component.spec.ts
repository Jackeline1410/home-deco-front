import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDepartamentoComponent } from './crud-departamento.component';

describe('CrudDepartamentoComponent', () => {
  let component: CrudDepartamentoComponent;
  let fixture: ComponentFixture<CrudDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
