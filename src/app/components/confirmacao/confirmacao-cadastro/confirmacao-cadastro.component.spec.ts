import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro.component';

describe('ConfirmacaoCadastroComponent', () => {
  let component: ConfirmacaoCadastroComponent;
  let fixture: ComponentFixture<ConfirmacaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacaoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
