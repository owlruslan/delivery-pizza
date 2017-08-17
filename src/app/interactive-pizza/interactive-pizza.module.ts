import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryInteractivePizzaComponent } from './delivery-interactive-pizza/delivery-interactive-pizza.component';
import { PizzaViewerComponent } from './pizza-viewer/pizza-viewer.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { PizzaSummaryComponent } from './pizza-summary/pizza-summary.component';
import { PizzaSizeComponent } from './pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { ReactiveFormsModule } from '@angular/forms';

const interactiveRoutes: Routes = [
  { path: 'interactive', component: DeliveryInteractivePizzaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      interactiveRoutes,
    )
  ],
  declarations: [
    PizzaViewerComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSummaryComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    DeliveryInteractivePizzaComponent,
  ],
})
export class InteractivePizzaModule { }
