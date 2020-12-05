import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StephanieProfessionalComponent } from './stephanie-professional.component';

describe('StephanieProfessionalComponent', () => {
  let component: StephanieProfessionalComponent;
  let fixture: ComponentFixture<StephanieProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StephanieProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StephanieProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
