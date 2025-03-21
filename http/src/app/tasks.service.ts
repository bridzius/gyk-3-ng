import { inject, Injectable } from '@angular/core';
import { Task } from './types';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private http = inject(HttpClient);

  tasksUrl = 'http://localhost:3000/tasks';

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  getTasks() {
    return this.http
      .get<Required<Task>[]>(this.tasksUrl)
      .pipe(tap((tasks) => this.tasksSubject.next(tasks)));
  }

  addTask(task: Task) {
    return this.http
      .post(this.tasksUrl, {
        ...task,
        id: Math.random().toString(),
      })
      .pipe(switchMap(() => this.getTasks()));
  }

  getTaskById(id: string) {
    return this.http.get<Task>(`${this.tasksUrl}/${id}`);
  }
}
