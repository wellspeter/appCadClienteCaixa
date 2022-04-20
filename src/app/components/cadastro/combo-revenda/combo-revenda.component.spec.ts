import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboRevendaComponent } from './combo-revenda.component';

describe('ComboRevendaComponent', () => {
  let component: ComboRevendaComponent;
  let fixture: ComponentFixture<ComboRevendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboRevendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboRevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
