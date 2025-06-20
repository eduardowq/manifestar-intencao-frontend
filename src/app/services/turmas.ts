import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Turma {
  id: number;
  ano: number;
  semestre: number;
}

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  private apiUrl = 'http://localhost:8080/turmas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.apiUrl);
  }
}
