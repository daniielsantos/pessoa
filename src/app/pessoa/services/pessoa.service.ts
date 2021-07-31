import { Pessoa } from './../../shared/models/pessoa.model.ts';
import { Injectable } from '@angular/core';

const LS_CHAVE: string = 'pessoas'

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  constructor() {
  }

  listarTodos(): Pessoa[] {
    const pessoas: string = localStorage[LS_CHAVE]
    return pessoas ? JSON.parse(pessoas) : []
  }

  inserir(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarTodos()
    pessoa.id = new Date().getTime()
    pessoas.push(pessoa)
    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }

  buscaPorId(id: number): Pessoa {
    const pessoas: Pessoa[] = this.listarTodos()
    return pessoas.find(p => p.id === id) ?? {}
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarTodos()
    pessoas.forEach((obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa
      }
    })
    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }

  remover(id: number): void {
    let pessoas: Pessoa[] = this.listarTodos()
    pessoas = pessoas.filter(pessoa => pessoa.id !== id)

    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }




}
