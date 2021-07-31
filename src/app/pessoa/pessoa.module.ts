import { PessoaService } from './services/pessoa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa/lista-pessoa.component';



@NgModule({
  declarations: [
    ListaPessoaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [PessoaService]
})
export class PessoaModule { }
