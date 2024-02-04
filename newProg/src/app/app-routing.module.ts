import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './mycomp/todos/todos.component';
import { AboutComponent } from './mycomp/about/about.component';
import { PricingComponent } from './mycomp/pricing/pricing.component';

const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
