import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPaisComponent } from './crud-pais.component';

describe('CrudPaisComponent', () => {
  let component: CrudPaisComponent;
  let fixture: ComponentFixture<CrudPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
