import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMateriaPrimaComponent } from './crud-materia-prima.component';

describe('CrudMateriaPrimaComponent', () => {
  let component: CrudMateriaPrimaComponent;
  let fixture: ComponentFixture<CrudMateriaPrimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMateriaPrimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
