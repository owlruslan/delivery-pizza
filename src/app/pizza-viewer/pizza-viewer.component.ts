import { Component, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-viewer',
  templateUrl: './pizza-viewer.component.html',
  styleUrls: ['./pizza-viewer.component.scss']
})
export class PizzaViewerComponent {
  @Input()
  pizzas: FormArray;

  @Input()
  activePizza: number;
}
