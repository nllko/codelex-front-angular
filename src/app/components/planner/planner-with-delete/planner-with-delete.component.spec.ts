import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithDeleteComponent } from './planner-with-delete.component';

describe('PlannerWithDeleteComponent', () => {
  let component: PlannerWithDeleteComponent;
  let fixture: ComponentFixture<PlannerWithDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
