import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  template: `<h1>signal</h1>
    <button (click)="increment()">Increment Count</button>
    <h2>Count: {{ count() }}</h2>`,
})
export class SignalComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
