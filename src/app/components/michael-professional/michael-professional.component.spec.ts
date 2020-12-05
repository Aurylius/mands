import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelProfessionalComponent } from './michael-professional.component';

describe('MichaelProfessionalComponent', () => {
  let component: MichaelProfessionalComponent;
  let fixture: ComponentFixture<MichaelProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MichaelProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
