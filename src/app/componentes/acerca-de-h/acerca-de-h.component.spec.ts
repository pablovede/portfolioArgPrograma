import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeHComponent } from './acerca-de-h.component';

describe('AcercaDeComponent', () => {
  let component: AcercaDeHComponent;
  let fixture: ComponentFixture<AcercaDeHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
