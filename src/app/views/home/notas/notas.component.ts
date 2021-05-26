import { Component, OnInit } from '@angular/core';

export interface NotasAva {
  'Avaliação': string;
  'Peso': number;
  '1º Bimestre': string;
  '2º Bimestre': string;
  '3º Bimestre': string;
  '4º Bimestre': string;
  'Média': string;
}

const NOTA_DATA: NotasAva[] = [
  { 'Avaliação': 'Participação em sala de aula', 'Peso': 1.5, '1º Bimestre': '5,00', '2º Bimestre': '7,50','3º Bimestre': '9,00', '4º Bimestre': '5,00', 'Média': '5.00'},
  { 'Avaliação': 'Entrega das tarefas', 'Peso': 2.5,          '1º Bimestre': '5,00', '2º Bimestre': '7,00','3º Bimestre': '8,25', '4º Bimestre': '9,00', 'Média': '6.00'},
  { 'Avaliação': 'Trabalho bimestral', 'Peso': 3,             '1º Bimestre': '3,00', '2º Bimestre': '6,50','3º Bimestre': '10,00','4º Bimestre': '5,25', 'Média': '8.00'},
  { 'Avaliação': 'Prova bimestral', 'Peso': 3,                '1º Bimestre': '9,00', '2º Bimestre': '9,75','3º Bimestre': '5,00', '4º Bimestre': '8,00', 'Média': '4.00'},
  { 'Avaliação': 'Média Bimestral', 'Peso': 3,                '1º Bimestre': '7,00', '2º Bimestre': '4,00','3º Bimestre': '5,00', '4º Bimestre': '2,50', 'Média': '5.00'},
];

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit {
  displayedColumns: string[] = ['Avaliação', 'Peso', '1º Bimestre' , '2º Bimestre', '3° Bimestre', '4° Bimestre', 'Média' ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: NotasAva[] = NOTA_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
