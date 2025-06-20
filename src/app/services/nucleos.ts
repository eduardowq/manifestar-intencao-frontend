import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Nucleo {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class NucleosService {
  private apiUrl = 'http://localhost:8080/nucleos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Nucleo[]> {
    return this.http.get<Nucleo[]>(this.apiUrl);
  }
}
