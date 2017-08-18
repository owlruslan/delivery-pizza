import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from '../services/Pizza';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {

  @Input()
  pizza: Pizza;

  @Output()
  order = new EventEmitter<any>();

  toggled: boolean;

  constructor() { }

  ngOnInit() {
  }

  onOrder($event: Event): void {
    this.order.emit(this.pizza.id);
    $event.stopPropagation();
  }
}
