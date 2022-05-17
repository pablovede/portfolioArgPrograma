import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSpringComponent } from './prueba-spring.component';

describe('PruebaSpringComponent', () => {
  let component: PruebaSpringComponent;
  let fixture: ComponentFixture<PruebaSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaSpringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
