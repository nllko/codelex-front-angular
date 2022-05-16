import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithProgressComponent } from './planner-with-progress.component';

describe('PlannerWithProgressComponent', () => {
  let component: PlannerWithProgressComponent;
  let fixture: ComponentFixture<PlannerWithProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
