import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListaEnderecoComponent } from './endereco/lista-endereco/lista-endereco.component';
import { ListaPessoaComponent } from './pessoa/lista-pessoa/lista-pessoa/lista-pessoa.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';

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
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent
  },
  {
    path: 'enderecos',
    component: ListaEnderecoComponent
  },
  {
    path: 'endereco/novo',
    component: InserirEnderecoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
