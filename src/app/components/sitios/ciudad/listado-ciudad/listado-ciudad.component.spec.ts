import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCiudadComponent } from './listado-ciudad.component';

describe('ListadoCiudadComponent', () => {
  let component: ListadoCiudadComponent;
  let fixture: ComponentFixture<ListadoCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
