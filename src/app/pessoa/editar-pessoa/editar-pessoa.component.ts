import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model.ts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa
  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pessoaService.buscaPorId(id).subscribe(pessoa => {
      this.pessoa = pessoa
    })
  }

  alterar (id: number) {
    const pessoa = this.pessoa
    this.pessoaService.atualizar(id, pessoa).subscribe(pessoa => {
      this.router.navigate(['/pessoas'])
    })
  }

}
