import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionHComponent } from './educacionH.component';

describe('EducacionIndividualComponent', () => {
  let component: EducacionHComponent;
  let fixture: ComponentFixture<EducacionHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
