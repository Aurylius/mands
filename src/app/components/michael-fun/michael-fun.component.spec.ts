import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelFunComponent } from './michael-fun.component';

describe('MichaelFunComponent', () => {
  let component: MichaelFunComponent;
  let fixture: ComponentFixture<MichaelFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MichaelFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
