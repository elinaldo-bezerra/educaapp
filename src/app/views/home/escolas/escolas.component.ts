import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Escola } from 'src/app/models/escola';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})

export class EscolasComponent implements OnInit {

  escola = {} as Escola;
  escolas: Escola[] = [];


  constructor(private escolaService: EscolaService) { }

  ngOnInit(): void {
    this.getEscolas();
  }


    // Chama o serviço para obtém todas as escolas
  getEscolas() {
        this.escolaService.getEscolas().subscribe((escolas: Escola[]) => {
          this.escolas = escolas;
        });
  }

  // defini se uma escola será criada ou atualizada
  saveEscola(form: NgForm) {
      this.escolaService.saveEscola(this.escola).subscribe(() => {
        this.cleanForm(form);
      });

  }

  // deleta uma escola
  deleteEscola(escola: Escola) {
    this.escolaService.deleteEscola(escola).subscribe(() => {
      this.getEscolas();
    });
  }

  // copia a escola para ser editada.
  editEscola(escola: Escola) {
    this.escola = { ...escola };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getEscolas();
    form.resetForm();
    this.escola = {} as Escola;
  }

}
