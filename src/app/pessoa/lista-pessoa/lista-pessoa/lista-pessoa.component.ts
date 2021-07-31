import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {

  }

  listarTodos() {
  }

  inserir() {
  }

  buscarPorId() {
  }

  alterar() {
  }

  remover() {
  }
}
