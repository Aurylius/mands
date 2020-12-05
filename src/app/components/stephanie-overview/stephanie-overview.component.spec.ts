import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StephanieOverviewComponent } from './stephanie-overview.component';

describe('StephanieOverviewComponent', () => {
  let component: StephanieOverviewComponent;
  let fixture: ComponentFixture<StephanieOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StephanieOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StephanieOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
