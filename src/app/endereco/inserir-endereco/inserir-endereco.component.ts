import { Router } from '@angular/router';
import { EnderecoService } from './../services/endereco.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})
export class InserirEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit(): void {
    this.endereco = new Endereco()
  }

  inserir() {
    console.log("entrou endereco ", this.endereco)
    this.enderecoService.inserir(this.endereco).subscribe(endereco => {
      this.router.navigate(["/enderecos"])
    })
  }
}
