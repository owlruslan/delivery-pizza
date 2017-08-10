import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Pizza } from '../services/Pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  items$: Observable<Pizza[]>;

  terms: string;
  private searchTermStream = new Subject<string>();

  constructor(protected pizzaService: PizzaService) { }

  ngOnInit() {
    const searchSource = this.searchTermStream
      .debounceTime(1000)
      .distinctUntilChanged()
      .map(searchTerm => {
        this.terms = searchTerm;
        return {search: searchTerm};
      });

    const source = searchSource
      .startWith({search: this.terms})
      .switchMap((params: {search: string}) => {
        return this.pizzaService.list(params.search);
      })
      .share();

      this.items$ = source.pluck('items');
  }

  search(terms: string) {
    this.searchTermStream.next(terms);
  }
}
