import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StephanieFunComponent } from './stephanie-fun.component';

describe('StephanieFunComponent', () => {
  let component: StephanieFunComponent;
  let fixture: ComponentFixture<StephanieFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StephanieFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StephanieFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
