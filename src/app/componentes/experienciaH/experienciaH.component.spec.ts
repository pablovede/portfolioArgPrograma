import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaHComponent } from './experienciaH.component';

describe('ExperienciaHComponent', () => {
  let component: ExperienciaHComponent;
  let fixture: ComponentFixture<ExperienciaHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
