import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  template: `<h1>effect (look into console)</h1>
    <button (click)="increment()">Increment Count</button>
    <h2>Count: {{ count() }}</h2>`,
})
export class EffectComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Count:', this.count());
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }
}
