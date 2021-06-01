import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolasComponent } from './views/home/escolas/escolas.component';
import { HomeComponent } from './views/home/home.component';
import { AlunosComponent } from './views/home/alunos/alunos.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'escola', component: EscolasComponent },
    // path: 'Anos Letivos', component: SignupComponent },
    // path: 'Turmas', component: MasterComponent },
    // path: 'Disciplinas', component: HomeComponent },
    // path: 'Avaliações', component: ReportsComponent },
    {path: 'alunos', component: AlunosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
