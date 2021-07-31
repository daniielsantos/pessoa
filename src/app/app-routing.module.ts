import { ListaPessoaComponent } from './pessoa/lista-pessoa/lista-pessoa/lista-pessoa.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas/listar',
    pathMatch: 'full'
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar'
  },
  {
    path: 'pessoas/listar',
    component: ListaPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
