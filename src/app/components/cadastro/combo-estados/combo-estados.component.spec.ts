import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboEstadosComponent } from './combo-estados.component';

describe('ComboEstadosComponent', () => {
  let component: ComboEstadosComponent;
  let fixture: ComponentFixture<ComboEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboEstadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
