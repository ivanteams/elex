// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormulariosTiposComponent } from './formularios-tipos/formularios-tipos.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FormulariosTiposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])  // Agrega esto si no tienes rutas específicas
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
