import { Component, signal } from '@angular/core';
import { InputsChildComponent } from '../inputs-child/inputs-child.component';

@Component({
  selector: 'app-inputs-parent',
  imports: [InputsChildComponent],
  template: `<h1>inputs</h1>
    <button (click)="increment()">Increment count</button>
    <h2>Parent count {{ count() }}</h2>
    <app-inputs-child
      (rendered)="increment()"
      [count]="count()"
    ></app-inputs-child>`,
})
export class InputsParentComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
