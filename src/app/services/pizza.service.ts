import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Pizza } from './Pizza';
import { ListResult } from './list-result.interface';
import { database } from './data';

@Injectable()
export class PizzaService {
  pizzas: Pizza[] = database;

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<Pizza>> {
    let pizzaResult = this.pizzas.filter(function(pizza: Pizza) {
      return (search) ? pizza.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    return Observable.of({items: pizzaResult}).delay(100);
  }
}