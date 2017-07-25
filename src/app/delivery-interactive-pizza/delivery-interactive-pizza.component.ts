import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-interactive-pizza',
  templateUrl: './delivery-interactive-pizza.component.html',
  styleUrls: ['./delivery-interactive-pizza.component.css']
})
export class DeliveryInteractivePizzaComponent implements OnInit {

  activePizza = 0;
  total = '0';

  prices = {
    small: { base: 9.99, toppings: 0.69 },
    medium: { base: 12.99, toppings: 0.99 },
    large: { base: 16.99, toppings: 1.29 }
  };

  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.minLength(3)]]
    }),
    pizzas: this.fb.array([
      this.createPizza()
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createPizza() {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

}
