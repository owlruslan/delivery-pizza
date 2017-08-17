import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuModule } from './menu/menu.module';
import { DeliveryHeaderComponent } from './delivery-header/delivery-header.component';
import { InteractivePizzaModule } from './interactive-pizza/interactive-pizza.module';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DeliveryHeaderComponent
  ],
  imports: [
    MenuModule,
    InteractivePizzaModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
