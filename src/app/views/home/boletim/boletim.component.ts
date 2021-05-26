import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  avaliacao: string;
  peso: number;
  primeiro_bimeste: string;
  segundo_bimeste: string;
  terceiro_bimeste: string;
  quarto_bimeste: string;
  media_bimeste: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {avaliacao: 'Participação em sala de aula', peso: 1.5, primeiro_bimeste: '5,00', segundo_bimeste: '7,50',terceiro_bimeste: '9,00',quarto_bimeste: '5,00', media_bimeste: '5.00'},
  {avaliacao: 'Entrega das tarefas', peso: 2.5,  primeiro_bimeste: '5,00', segundo_bimeste: '7,00',terceiro_bimeste: '8,25',quarto_bimeste: '9,00', media_bimeste: '6.00'},
  {avaliacao: 'Trabalho bimestral', peso: 3,  primeiro_bimeste: '3,00', segundo_bimeste: '6,50',terceiro_bimeste: '10,00',quarto_bimeste: '5,25', media_bimeste: '8.00'},
  {avaliacao: 'Prova bimestral', peso: 3,  primeiro_bimeste: '9,00', segundo_bimeste: '9,75',terceiro_bimeste: '5,00',quarto_bimeste: '8,00', media_bimeste: '4.00'},
  {avaliacao: 'Média Bimestral', peso: 3,  primeiro_bimeste: '7,00', segundo_bimeste: '4,00',terceiro_bimeste: '5,00',quarto_bimeste: '2,50', media_bimeste: '5.00'},
];

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})

export class BoletimComponent implements OnInit {
  displayedColumns: string[] = ['avaliacao', 'peso', 'primeiro_bimeste' , 'segundo_bimeste', 'terceiro_bimeste', 'quarto_bimeste', 'media_bimeste' ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;


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
