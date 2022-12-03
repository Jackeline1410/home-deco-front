import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOrdenProdComponent } from './crud-orden-prod.component';

describe('CrudOrdenProdComponent', () => {
  let component: CrudOrdenProdComponent;
  let fixture: ComponentFixture<CrudOrdenProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudOrdenProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOrdenProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
