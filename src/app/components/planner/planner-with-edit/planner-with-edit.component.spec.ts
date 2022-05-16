import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithEditComponent } from './planner-with-edit.component';

describe('PlannerWithEditComponent', () => {
  let component: PlannerWithEditComponent;
  let fixture: ComponentFixture<PlannerWithEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
