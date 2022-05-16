import {Component,} from '@angular/core';
import {v4 as getId} from 'uuid';

interface PlannerTask {
  id: string;
  text: string;
  done: boolean;
  inEdit: boolean;
  priority: string;
}

enum PlannerFilterEnum {
  All,
  InProgress,
  Completed
}


@Component({
  selector: 'app-planner-with-priority',
  templateUrl: './planner-with-priority.component.html',
  styleUrls: ['./planner-with-priority.component.scss']
})
export class PlannerWithPriorityComponent{

  tasks: PlannerTask[] = [
    {
      id: getId(),
      text: 'Task1',
      done: true,
      inEdit: false,
      priority: "High"
    }
  ];

  options = [
    {
      name: "High",
    },
    {
      name: "Medium",
    },
    {
      name: "Low",
    }
  ]

  priorityFilter = [
    {
      name: "High",
      status: false
    },
    {
      name: "Medium",
      status: false
    },
    {
      name: "Low",
      status: false
    }
  ]

  inputValue: string = '';
  newValue: string = '';
  selectedOption: string = 'High';
  plannerTaskFilter = PlannerFilterEnum.All;
  plannerTaskFilterEnum = PlannerFilterEnum;

  get priorityFilteredTasks() {
    let filteredTasks:PlannerTask[] = [];
    for (let priority of this.priorityFilter) {
      if (priority.status) {
        for (let task of this.tasks) {
          if (task.priority===priority.name){
            filteredTasks.push(task)
          }
        }
      }
    }
    return filteredTasks;
  }

  addTask(): void {
    if (this.inputValue) {
      const newTask = {id: getId(), text: this.inputValue, done: false, inEdit: false ,priority: this.selectedOption}
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
      return this.priorityFilteredTasks;
    } else if (this.plannerTaskFilter === PlannerFilterEnum.InProgress) {
      return this.priorityFilteredTasks.filter(task => !task.done);
    } else {
      return this.priorityFilteredTasks.filter(task => task.done);
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
