import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AlunosComponent } from './views/home/alunos/alunos.component';
import { DisciplinasComponent } from './views/home/disciplinas/disciplinas.component';
import { TurmasComponent } from './views/home/turmas/turmas.component';
import { NotasComponent } from './views/home/notas/notas.component';
import { EscolasComponent } from './views/home/escolas/escolas.component';
import { AnosletivosComponent } from './views/home/anosletivos/anosletivos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlunosComponent,
    DisciplinasComponent,
    TurmasComponent,
    NotasComponent,
    EscolasComponent,
    AnosletivosComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
