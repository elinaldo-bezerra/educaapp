import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

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
    AnosletivosComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
