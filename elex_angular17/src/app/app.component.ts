import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulariosTiposComponent } from './formularios-tipos/formularios-tipos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            FormulariosTiposComponent,
            HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elex_angular17';
  constructor(private http: HttpClient) {  // Inyectar HttpClient aquí
    // Puedes usar 'http' para realizar solicitudes HTTP
  }
}
