import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ManifestacoesService, Manifestacao } from '../../services/manifestacoes';

@Component({
  selector: 'app-manifestacoes',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './manifestacoes.html',
  styleUrl: './manifestacoes.css'
})
export class Manifestacoes implements OnInit {
  displayedColumns = ['id', 'docente', 'turma', 'turnoPreferido', 'status'];
  dataSource: Manifestacao[] = [];

  constructor(private manifestacoesService: ManifestacoesService) {}

  ngOnInit(): void {
    this.manifestacoesService.listar().subscribe(data => {
      this.dataSource = data;
    });
  }
}
