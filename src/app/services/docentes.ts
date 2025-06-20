import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Docente {
  id: number;
  nome: string;
  siape: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  private apiUrl = 'http://localhost:8080/docentes'; // ajuste a URL conforme seu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.apiUrl);
  }
}
