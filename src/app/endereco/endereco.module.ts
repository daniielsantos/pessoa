import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnderecoService } from './services/endereco.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEnderecoComponent } from './lista-endereco/lista-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';



@NgModule({
  declarations: [
    ListaEnderecoComponent,
    InserirEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[EnderecoService]
})
export class EnderecoModule { }
