import { Component, computed, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  template: `<h1>computed</h1>
    <button (click)="increment()">Increment Count</button>
    <button (click)="incrementZero()">Increment Zero</button>
    <h2>Count: {{ count() }}</h2>
    <h2>Zero: {{ zero() }}</h2>
    <h2>Double Count: {{ doubleCount() }}</h2>`,
})
export class ComputedComponent {
  count = signal(0);
  zero = signal(0);

  doubleCount = computed(() => untracked(() => this.zero()) + this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }

  incrementZero() {
    this.zero.set(this.zero() + 1);
  }
}
