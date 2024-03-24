import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiposExpediente } from '../models/formularios-tipos.model';


@Injectable({
  providedIn: 'root'
})
export class TiposExpedienteService {

  private apiUrl = 'http://localhost:8101/tipos_expediente';

  constructor(private http: HttpClient) { }

  consultarTipos(): Observable<TiposExpediente[]> {
    return this.http.get<TiposExpediente[]>(`${this.apiUrl}/consultar`);
  }

  insertarTipo(materia: string): Observable<TiposExpediente> {
    let nuevoTipo = new TiposExpediente(undefined, materia);
    return this.http.post<TiposExpediente>(`${this.apiUrl}/insertar/${materia}`, nuevoTipo);
  }
}
