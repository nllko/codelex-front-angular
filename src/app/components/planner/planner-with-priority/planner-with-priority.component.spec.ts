import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithPriorityComponent } from './planner-with-priority.component';

describe('PlannerWithPriorityComponent', () => {
  let component: PlannerWithPriorityComponent;
  let fixture: ComponentFixture<PlannerWithPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
