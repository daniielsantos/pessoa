import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model.ts';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  pessoas: Pessoa[] = []

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listarTodos()
  }

  listarTodos() {
    return this.pessoaService.listarTodos().subscribe((pessoa) => {
      this.pessoas = pessoa
    })
  }

  inserir() {

  }

  buscarPorId() {
  }

  alterar(pessoa: Pessoa) {
    console.log('pessoa', pessoa)
  }

  remover(id: number) {
    this.pessoaService.remover(id).subscribe((result) => {
      this.listarTodos()
    })
  }
}
