// src/app/formularios-tipos/formularios-tipos.component.ts

import { Component, OnInit } from '@angular/core';
import { TiposExpedienteService } from '../services/tipos-expediente.service';
import { TiposExpediente } from '../models/tipos-expediente.model';

@Component({
  selector: 'app-formularios-tipos',
  templateUrl: './formularios-tipos.component.html',
  styleUrls: ['./formularios-tipos.component.css']
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
      this.tipos.push(result);
      this.materia = '';
    });
  }
}
