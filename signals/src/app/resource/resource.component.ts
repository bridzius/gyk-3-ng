import {
  Component,
  computed,
  inject,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { HttpService } from './http.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-resource',
  imports: [],
  template: ` <h1>resource</h1>
    <button (click)="reload()">Reload</button>
    <h2>User: {{ firstUser() }}</h2>`,
})
export class ResourceComponent {
  #service = inject(HttpService);

  reloadSignal = signal(0);

  user = resource({
    loader: () => this.#service.fetchUsers(),
    request: () => this.reloadSignal(),
  });

  firstUser = computed(() => {
    if (this.user.status() === ResourceStatus.Loading) return 'Loading...';
    if (this.user.status() === ResourceStatus.Error) return 'Error...';
    return Object.values(this.user.value()?.[0].name).join(' ');
  });

  reload() {
    this.reloadSignal.set(this.reloadSignal() + 1);
  }
}
