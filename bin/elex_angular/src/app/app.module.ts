// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormulariosTiposComponent } from './formularios-tipos/formularios-tipos.component';
import { TiposExpedienteService } from './services/tipos-expediente.service';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosTiposComponent  // Asegúrate de incluir tu componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Importar FormsModule
    HttpClientModule  // Importar HttpClientModule para realizar peticiones HTTP
  ],
  providers: [
    TiposExpedienteService  // Añadir el servicio aquí, aunque no es estrictamente necesario con providedIn: 'root'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
