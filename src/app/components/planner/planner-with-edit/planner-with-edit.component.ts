import {Component} from '@angular/core';
import {v4 as getId} from 'uuid';

interface PlannerTask {
  id: string;
  text: string;
  done: boolean;
  inEdit: boolean;
}

enum PlannerFilterEnum {
  All,
  InProgress,
  Completed
}

@Component({
  selector: 'app-planner-with-edit',
  templateUrl: './planner-with-edit.component.html',
  styleUrls: ['./planner-with-edit.component.scss']
})
export class PlannerWithEditComponent {

  tasks: PlannerTask[] = [
    {
      id: getId(),
      text: 'Task1',
      done: true,
      inEdit: false
    }
  ];
  inputValue: string = '';
  newValue: string = '';
  plannerTaskFilter = PlannerFilterEnum.All;
  plannerTaskFilterEnum = PlannerFilterEnum;

  addTask(): void {
    if (this.inputValue) {
      const newTask = {id: getId(), text: this.inputValue, done: false, inEdit: false}
      this.tasks.push(newTask);
      this.inputValue = '';
    }
  }

  editTask(id: string): void {
    if (this.newValue){
      this.tasks[this.getIndex(id)].text = this.newValue;
      this.tasks[this.getIndex(id)].inEdit = false;
      this.newValue = '';
    }
  }

  toggleTaskDone(event: Event, id: string): void {
    const eventTarget = event.target as HTMLInputElement;
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        return {...task, done: eventTarget.checked};
      } else {
        return task;
      }
    });
  }

  setTaskFilter(filter: PlannerFilterEnum): void {
    this.plannerTaskFilter = filter;
  }

  get filteredTasks(): PlannerTask[] {
    if (this.plannerTaskFilter === PlannerFilterEnum.All) {
      return this.tasks;
    } else if (this.plannerTaskFilter === PlannerFilterEnum.InProgress) {
      return this.tasks.filter(task => !task.done);
    } else {
      return this.tasks.filter(task => task.done);
    }
  }

  get progressProcent(): number {
    return this.tasks.filter(task => task.done).length / this.tasks.length * 100
  }

  getIndex(id: string): number {
    return this.tasks.map(task => task.id).indexOf(id)
  }

  deleteTask(id: string): void {
    this.tasks.splice(this.getIndex(id), 1)
  }

  checkCanEdit():boolean {
    return this.tasks.filter(task => task.inEdit).length === 0
  }
}
