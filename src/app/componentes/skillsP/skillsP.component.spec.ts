import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPComponent } from './skillsP.component';

describe('SkillsPComponent', () => {
  let component: SkillsPComponent;
  let fixture: ComponentFixture<SkillsPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
