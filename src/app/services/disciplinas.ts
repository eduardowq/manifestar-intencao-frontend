import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Disciplina {
  id: number;
  nome: string;
  cargaHoraria: number;
}

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  private apiUrl = 'http://localhost:8080/disciplinas';  // Ajuste o endpoint conforme seu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }
}
