import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ManifestacoesService, Manifestacao } from '../../services/manifestacoes';

@Component({
  selector: 'app-manifestacoes',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  templateUrl: './manifestacoes.html',
  styleUrl: './manifestacoes.css'
})
export class Manifestacoes implements OnInit {
  displayedColumns = ['id', 'disciplina', 'turnoPreferido', 'status', 'selecionado'];;
  dataSource: Manifestacao[] = [];

  constructor(private manifestacoesService: ManifestacoesService) {}

  ngOnInit(): void {
    this.manifestacoesService.listar().subscribe(data => {
      this.dataSource = data;
    });
  }

  onCheckboxChange(element: Manifestacao, event: any) {
    element.selecionado = event.checked;
  }
}
