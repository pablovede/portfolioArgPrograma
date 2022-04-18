import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPComponent } from './proyectos-p.component';

describe('ProyectosPComponent', () => {
  let component: ProyectosPComponent;
  let fixture: ComponentFixture<ProyectosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
