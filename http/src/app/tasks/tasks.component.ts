import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../types';
import { TasksService } from '../tasks.service';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class TasksComponent implements OnInit {
  private tasksService = inject(TasksService);
  private destroyRef = inject(DestroyRef);
  taskai: Observable<Task[]> = this.tasksService.tasks$;

  ngOnInit(): void {
    this.tasksService
      .getTasks()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  pridek() {
    this.tasksService
      .addTask({
        text: 'Naujas taskas',
        date: new Date(),
      })
      .pipe(take(1))
      .subscribe();
  }
}
