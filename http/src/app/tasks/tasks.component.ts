import { Component, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../types';
import { TasksService } from '../tasks.service';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, RouterLink, AsyncPipe],
  template: `
    <h1>Mano šiandienos užduotys:</h1>
    <button (click)="pridek()">Pridek naują task</button>
    <ul>
      @for (taskas of taskai | async; track $index) {
      <li>
        <a routerLink="/tasks/{{ taskas.id }}"
          ><app-task [task]="taskas"></app-task
        ></a>
      </li>
      }
    </ul>
  `,
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  taskai: Observable<Task[]> = this.tasksService.getTasks();

  pridek() {
    this.tasksService
      .addTask({
        text: 'Naujas taskas',
        date: new Date(),
      })
      .subscribe();
    this.taskai = this.tasksService.getTasks();
  }
}
