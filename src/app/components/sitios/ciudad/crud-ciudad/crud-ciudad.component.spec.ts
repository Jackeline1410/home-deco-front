import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCiudadComponent } from './crud-ciudad.component';

describe('CrudCiudadComponent', () => {
  let component: CrudCiudadComponent;
  let fixture: ComponentFixture<CrudCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
