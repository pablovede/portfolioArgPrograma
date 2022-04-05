import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIndividualComponent } from './skill-individual.component';

describe('SkillIndividualComponent', () => {
  let component: SkillIndividualComponent;
  let fixture: ComponentFixture<SkillIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
