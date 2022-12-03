import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmpleadoComponent } from './crud-empleado.component';

describe('CrudEmpleadoComponent', () => {
  let component: CrudEmpleadoComponent;
  let fixture: ComponentFixture<CrudEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
