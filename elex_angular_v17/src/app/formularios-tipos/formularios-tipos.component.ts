import { Component, OnInit } from '@angular/core';
import { TiposExpedienteService } from './services/formularios-tipos.service';
import { TiposExpediente } from './models/formularios-tipos.model';


@Component({
  selector: 'app-formularios-tipos',
  standalone: false,
  templateUrl: './formularios-tipos.component.html',
  styleUrl: './formularios-tipos.component.css'
})
export class FormulariosTiposComponent implements OnInit {
  tipos: TiposExpediente[] = [];
  materia: string = '';

  constructor(private tiposExpedienteService: TiposExpedienteService) { }

  ngOnInit(): void {
    this.cargarTipos();
  }

  cargarTipos(): void {
    this.tiposExpedienteService.consultarTipos().subscribe(data => {
      this.tipos = data;
    });
  }

  onSubmit(): void {
    this.tiposExpedienteService.insertarTipo(this.materia).subscribe(result => {
      console.log('Resultado del servidor:', result);
      if (result && result.id) {
        this.obtenerTiposExpediente(); // Llama a la actualización de la lista solo después de una inserción exitosa
      } 
      this.materia = '';
    });
  }

  obtenerTiposExpediente(): void {
    this.tiposExpedienteService.consultarTipos().subscribe({
      next: (tipos: TiposExpediente[]) => {
        this.tipos = tipos;
      },
      error: (error: any) => {
        console.error('Error al obtener los tipos de expediente:', error);
      }
    });
  }
}

