import { Observable } from 'rxjs';
import { Endereco } from './../../shared/models/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/endereco'
@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(URL)
  }

  inserir(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(URL, endereco)
  }

  buscaPorId(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${URL}/${id}`)
  }

  atualizar(id: number, endereco: Endereco): Observable<any> {
    const novoEndereco: Endereco = {
      rua: endereco.rua,
      bairro: endereco.bairro,
      cep: endereco.cep,
      cidade: endereco.cidade,
      complemento: endereco.complemento,
      estado: endereco.estado,
      numero: endereco.numero
    }
    return this.http.patch<any>(`${URL}/${id}`, novoEndereco)
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${URL}/${id}`)
  }
}
