import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelOverviewComponent } from './michael-overview.component';

describe('MichaelOverviewComponent', () => {
  let component: MichaelOverviewComponent;
  let fixture: ComponentFixture<MichaelOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MichaelOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
