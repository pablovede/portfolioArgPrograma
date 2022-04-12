import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPComponent } from './experienciaP.component';

describe('ExperienciaComponent', () => {
  let component: ExperienciaPComponent;
  let fixture: ComponentFixture<ExperienciaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
