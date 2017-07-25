import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeliveryHeaderComponent } from './delivery-header/delivery-header.component';
import { DeliveryHomeComponent } from './delivery-home/delivery-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeliveryInteractivePizzaComponent } from './delivery-interactive-pizza/delivery-interactive-pizza.component';
import { PizzaViewerComponent } from './pizza-viewer/pizza-viewer.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';

const appRoutes: Routes = [


  {
    path: 'menu',
    component: DeliveryHomeComponent,
    data: { title: 'Heroes List' }
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
    PizzaFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
