import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {

  @Input()
  parent: FormGroup;

  @Output()
  submit = new EventEmitter<any>();

  onSubmit(event) {
    event.stopPropagation();
    this.submit.emit(this.parent);
  }
}
