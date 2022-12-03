import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUbicacionComponent } from './crud-ubicacion.component';

describe('CrudUbicacionComponent', () => {
  let component: CrudUbicacionComponent;
  let fixture: ComponentFixture<CrudUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
