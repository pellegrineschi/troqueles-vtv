import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTroqueles } from './resumen-troqueles';

describe('ResumenTroqueles', () => {
  let component: ResumenTroqueles;
  let fixture: ComponentFixture<ResumenTroqueles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumenTroqueles],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenTroqueles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
