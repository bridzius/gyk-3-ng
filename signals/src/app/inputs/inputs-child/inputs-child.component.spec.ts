import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsChildComponent } from './inputs-child.component';

describe('InputsChildComponent', () => {
  let component: InputsChildComponent;
  let fixture: ComponentFixture<InputsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
