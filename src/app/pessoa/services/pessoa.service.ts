import { Pessoa } from './../../shared/models/pessoa.model.ts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const LS_CHAVE: string = 'pessoas'
const URL = 'http://localhost:3000/pessoa'
@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  constructor(private http: HttpClient) {
  }

  listarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(URL)
  }

  inserir(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(URL, pessoa)
  }

  buscaPorId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${URL}/${id}`)
  }

  atualizar(id: number, pessoa: Pessoa): Observable<any> {
    const novaPessoa: Pessoa = {
      nome: pessoa.nome,
      email: pessoa.email,
      idade: pessoa.idade
    }
    return this.http.patch<any>(`${URL}/${id}`, novaPessoa)
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${URL}/${id}`)
  }




}
