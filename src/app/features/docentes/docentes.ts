import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DocentesService, Docente } from '../../services/docentes';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './docentes.html',
  styleUrl: './docentes.css'
})
export class Docentes implements OnInit {
  displayedColumns = ['id', 'nome', 'siape'];
  dataSource: Docente[] = [];

  constructor(private docentesService: DocentesService) {}

  ngOnInit(): void {
    this.docentesService.listar().subscribe(data => {
      this.dataSource = data;
    });
  }
}
