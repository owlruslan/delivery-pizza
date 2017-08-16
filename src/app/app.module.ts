import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeliveryHeaderComponent } from './delivery-header/delivery-header.component';
import { DeliveryHomeComponent } from './delivery-home/delivery-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeliveryInteractivePizzaComponent } from './delivery-interactive-pizza/delivery-interactive-pizza.component';
import { PizzaViewerComponent } from './pizza-viewer/pizza-viewer.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { PizzaSummaryComponent } from './pizza-summary/pizza-summary.component';
import { PizzaSizeComponent } from './pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaService } from './services/pizza.service';

const appRoutes: Routes = [
  {
    path: 'menu',
    component: DeliveryHomeComponent,
  },
  { path: 'interactive', component: DeliveryInteractivePizzaComponent },
  { path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DeliveryHeaderComponent,
    DeliveryHomeComponent,
    PageNotFoundComponent,
    DeliveryInteractivePizzaComponent,
    PizzaViewerComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSummaryComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ PizzaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
