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

  remover($event: any, pessoa: Pessoa) {
    $event.preventDefault();
    if (confirm("Deseja realmente remover a pessoa :" + pessoa.nome + " ?")) {
      this.pessoaService.remover(pessoa.id!).subscribe((result) => {
        this.listarTodos()
      })
    }
  }
}
