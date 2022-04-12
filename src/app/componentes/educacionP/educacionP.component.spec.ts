import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionPComponent } from './educacionP.component';

describe('EducacionComponent', () => {
  let component: EducacionPComponent;
  let fixture: ComponentFixture<EducacionPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
