import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRangoTroquel } from './formulario-rango-troquel';

describe('FormularioRangoTroquel', () => {
  let component: FormularioRangoTroquel;
  let fixture: ComponentFixture<FormularioRangoTroquel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioRangoTroquel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioRangoTroquel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
