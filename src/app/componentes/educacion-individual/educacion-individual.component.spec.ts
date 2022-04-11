import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionIndividualComponent } from './educacion-individual.component';

describe('EducacionIndividualComponent', () => {
  let component: EducacionIndividualComponent;
  let fixture: ComponentFixture<EducacionIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
