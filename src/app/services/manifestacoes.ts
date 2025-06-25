import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Manifestacao {
  id: number;
  disciplina: { nome: string };
  turma: { id: number };
  turnoPreferido: string;
  status: string;
  selecionado?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ManifestacoesService {
  private apiUrl = 'http://localhost:8080/manifestacoes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Manifestacao[]> {
    return this.http.get<Manifestacao[]>(this.apiUrl);
  }
}
