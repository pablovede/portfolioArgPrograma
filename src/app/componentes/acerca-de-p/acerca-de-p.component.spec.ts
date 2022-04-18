import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePComponent } from './acerca-de-p.component';

describe('AcercaDePComponent', () => {
  let component: AcercaDePComponent;
  let fixture: ComponentFixture<AcercaDePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
