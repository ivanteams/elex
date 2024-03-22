import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulariosTiposComponent } from './formularios-tipos/formularios-tipos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormulariosTiposComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elex_angular17';
}
