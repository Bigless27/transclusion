import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodontsComponent } from './todonts/todonts.component';
import { DefaultComponent } from './default/default.component';
import { NoContentDirective } from './no-content.directive'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodontsComponent,
    DefaultComponent,
    NoContentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
