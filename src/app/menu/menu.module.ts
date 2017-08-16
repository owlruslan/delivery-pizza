import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';

const menuRoutes: Routes = [
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      menuRoutes,
    )
  ],
  declarations: [
    TestComponent
  ],
})
export class MenuModule { }
