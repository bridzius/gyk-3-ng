import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-inputs-child',
  imports: [],
  template: `<h1>inputs-child</h1>
    <h2>Child count {{ count() }}</h2>`,
})
export class InputsChildComponent implements OnInit {
  count = input.required<number>();
  rendered = output();

  ngOnInit() {
    this.rendered.emit();
  }
}
