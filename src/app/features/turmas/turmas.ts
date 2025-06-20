import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TurmasService, Turma } from '../../services/turmas';

@Component({
  selector: 'app-turmas',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './turmas.html',
  styleUrl: './turmas.css'
})
export class Turmas implements OnInit {
  displayedColumns = ['id', 'ano', 'semestre'];
  dataSource: Turma[] = [];

  constructor(private turmasService: TurmasService) {}

  ngOnInit(): void {
    this.turmasService.listar().subscribe(data => {
      this.dataSource = data;
    });
  }
}
