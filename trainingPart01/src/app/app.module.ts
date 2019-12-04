import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exo1Component } from './exercices/exo1/exo1.component';
import { Exo2Component } from './exercices/exo2/exo2.component';
import { Exo3Component } from './exercices/exo3/exo3.component';
import { Exo4Component } from './exercices/exo4/exo4.component';
import { Exo5Component } from './exercices/exo5/exo5.component';
import { Exo6Component } from './exercices/exo6/exo6.component';
import { Exo7Component } from './exercices/exo7/exo7.component';
import { Exo8Component } from './exercices/exo8/exo8.component';
import { Exo9Component } from './exercices/exo9/exo9.component';
import { Exo10Component } from './exercices/exo10/exo10.component';

@NgModule({
  declarations: [
    AppComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo4Component,
    Exo5Component,
    Exo6Component,
    Exo7Component,
    Exo8Component,
    Exo9Component,
    Exo10Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
