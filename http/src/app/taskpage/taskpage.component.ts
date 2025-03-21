import { Component, inject } from '@angular/core';
import { Task } from '../types';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-taskpage',
  imports: [UpperCasePipe, DatePipe, AsyncPipe],
  template: `
    @if (task$ | async; as task) {
    <p>{{ task.id }}</p>
    <p>{{ task.text | uppercase }}</p>
    <p>{{ task.date | date }}</p>
    }
  `,
})
export class TaskpageComponent {
  private service = inject(TasksService);
  private activatedRoute = inject(ActivatedRoute);
  task$: Observable<Task>;
  id: string = this.activatedRoute.snapshot.params['id'];

  constructor() {
    this.task$ = this.service.getTaskById(this.id);
  }
}
