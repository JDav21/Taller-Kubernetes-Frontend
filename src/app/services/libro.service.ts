import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Crear interfaz para tipado fuerte
export interface Libro {
  idLibro: number;
  titulo: string;
  autor: string;
}

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url = 'http://localhost:8084/taller-kubernetes-backend';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.url}/libro/listar`);
  }
}