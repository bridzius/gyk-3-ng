import { JsonPipe } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  template: ` <div><button (click)="selectA()">Rinkis A</button></div>
    <div><button (click)="selectB()">Rinkis B</button></div>

    <h2>Value: {{ selectedValue() }}</h2>`,
})
export class LinkedSignalComponent {
  valueA = signal('Reikšmė is A');
  valueB = signal('Reikšmė is B');

  selectedSource = signal('Ai, nu ok');

  selectedValue = linkedSignal(() => this.selectedSource().toUpperCase());

  selectA() {
    this.selectedSource.set(this.valueA());
  }

  selectB() {
    this.selectedSource.set(this.valueB());
  }
}
