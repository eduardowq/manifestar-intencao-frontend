import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NucleosService, Nucleo } from '../../services/nucleos';

@Component({
  selector: 'app-nucleos',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './nucleos.html',
  styleUrl: './nucleos.css'
})
export class Nucleos implements OnInit {
  displayedColumns = ['id', 'nome'];
  dataSource: Nucleo[] = [];

  constructor(private nucleosService: NucleosService) {}

  ngOnInit(): void {
    this.nucleosService.listar().subscribe(data => {
      this.dataSource = data;
    });
  }
}
