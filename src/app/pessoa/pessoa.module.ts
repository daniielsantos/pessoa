import { RouterModule } from '@angular/router';
import { PessoaService } from './services/pessoa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa/lista-pessoa.component';
import { FormsModule } from '@angular/forms';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';



@NgModule({
  declarations: [
    ListaPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [],
  providers: [PessoaService]
})
export class PessoaModule { }
