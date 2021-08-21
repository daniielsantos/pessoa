import { Endereco } from './../../shared/models/endereco.model';
import { EnderecoService } from './../services/endereco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css']
})
export class ListaEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {

    this.enderecoService.listarTodos().subscribe(enderecos => {
      this.enderecos = enderecos
    })
  }

  remover($event: any, endereco: Endereco) {

  }

}
