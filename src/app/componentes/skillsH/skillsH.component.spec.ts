import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHComponent } from './skillsH.component';

describe('SkillsHComponent', () => {
  let component: SkillsHComponent;
  let fixture: ComponentFixture<SkillsHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
