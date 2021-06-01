import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  aluno = {} as Aluno;
  alunos: Aluno[] = [];


  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAlunos();
  }


    // Chama o serviço para obtém todas os alunos
    getAlunos() {
        this.alunoService.getAlunos().subscribe((alunos: Aluno[]) => {
          this.alunos = alunos;
        });
  }

  // defini se um aluno será criado ou atualizado
  saveAluno(form: NgForm) {
      this.alunoService.saveAluno(this.aluno).subscribe(() => {
        this.cleanForm(form);
      });

  }

  // deleta um aluno 
  deleteAluno(aluno: Aluno) {
    this.alunoService.deleteAluno(aluno).subscribe(() => {
      this.getAlunos();
    });
  }

  // copia o aluno para ser editado.
  editAluno(aluno: Aluno) {
    this.aluno = { ...aluno };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getAlunos();
    form.resetForm();
    this.aluno = {} as Aluno;
  }

}
