import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboEventosComponent } from './combo-eventos.component';

describe('ComboEventosComponent', () => {
  let component: ComboEventosComponent;
  let fixture: ComponentFixture<ComboEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
