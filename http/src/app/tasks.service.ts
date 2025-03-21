import { inject, Injectable } from '@angular/core';
import { Task } from './types';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private http = inject(HttpClient);

  tasksUrl = 'http://localhost:3000/tasks';

  getTasks() {
    return this.http.get<Required<Task>[]>(this.tasksUrl);
  }

  addTask(task: Task) {
    return this.http.post(this.tasksUrl, {
      ...task,
      id: Math.random().toString(),
    });
  }

  getTaskById(id: string) {
    return this.http.get<Task>(`${this.tasksUrl}/${id}`);
  }
}
