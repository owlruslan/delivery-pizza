import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Pizza } from '../services/Pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  items$: Observable<Pizza[]>

  terms: string = '';
  private searchTermStream = new Subject<string>();

  constructor(protected pizzaService: PizzaService) { }

  ngOnInit() {
  }

  search(terms: string) {
    this.searchTermStream.next(terms);
  }
}
