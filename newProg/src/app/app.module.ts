import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosComponent } from './mycomp/todos/todos.component';
import { TodosItemComponent } from './mycomp/todos/todos-item/todos-item.component';
import { AddtodoComponent } from './mycomp/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycomp/about/about.component';
import { PricingComponent } from './mycomp/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent,
    AddtodoComponent,
    AboutComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
