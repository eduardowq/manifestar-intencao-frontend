import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DisciplinasService, Disciplina } from '../../services/disciplinas';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  templateUrl: './disciplinas.html',
  styleUrl: './disciplinas.css',
  imports: [CommonModule, MatTableModule],
})
export class Disciplinas implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cargaHoraria'];
  dataSource: Disciplina[] = [];

  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit() {
    this.disciplinasService.listar().subscribe(data => {
      this.dataSource = data;
    });
  }
}
