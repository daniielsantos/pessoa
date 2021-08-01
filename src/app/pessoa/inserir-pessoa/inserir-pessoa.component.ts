import { PessoaService } from './../services/pessoa.service';
import { Pessoa } from './../../shared/models/pessoa.model.ts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})

export class InserirPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa

  constructor(
    private pessoaServise: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa()
  }

  inserir(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaServise.inserir(this.pessoa).subscribe((pessoa) => {
        this.router.navigate(['/pessoas'])
      })
    }
  }
}
