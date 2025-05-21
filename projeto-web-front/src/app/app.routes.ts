import { Routes } from '@angular/router';
import { ListagemComponent } from './paciente/listagem/listagem.component';
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { EdicaoComponent } from './paciente/edicao/edicao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },

  { path: 'listagem', component: ListagemComponent },

  { path: 'cadastro', component: CadastroComponent },

  { path: 'edicao/:id', component: EdicaoComponent },
];
