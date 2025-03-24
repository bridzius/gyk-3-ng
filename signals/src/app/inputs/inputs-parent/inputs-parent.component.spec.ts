import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsParentComponent } from './inputs-parent.component';

describe('InputsParentComponent', () => {
  let component: InputsParentComponent;
  let fixture: ComponentFixture<InputsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
