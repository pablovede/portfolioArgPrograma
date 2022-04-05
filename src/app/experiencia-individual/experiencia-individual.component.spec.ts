import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaIndividualComponent } from './experiencia-individual.component';

describe('ExperienciaIndividualComponent', () => {
  let component: ExperienciaIndividualComponent;
  let fixture: ComponentFixture<ExperienciaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
