import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DeliveryHomeComponent } from './delivery-home/delivery-home.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaService } from './services/pizza.service';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

const menuRoutes: Routes = [
  { path: 'menu', component: DeliveryHomeComponent },
  { path: 'menu/card/:id', component: PizzaCardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      menuRoutes,
    )
  ],
  declarations: [
    DeliveryHomeComponent,
    PizzaListComponent,
    PizzaCardComponent,
  ],
  providers: [ PizzaService ]
})
export class MenuModule { }
