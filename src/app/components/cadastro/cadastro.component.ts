import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientePF } from 'src/app/models/ClientePF';
import { Eventos } from 'src/app/models/Eventos';
import { ParceriaCaixa } from 'src/app/models/ParceriaCaixa';
import { ClientePfService } from 'src/app/services/clientepf.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  //clientepfForm!: FormGroup;
  public clientepf!:ClientePF;
  public eventos!: Observable<Eventos[]>;
  
  constructor(
    private clienteService: ClientePfService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*
    this.clientepfForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      cpfClientePF: new FormControl('', [Validators.required]),
      nomeClientePF: new FormControl('', [Validators.required]),
      municipioClientePF: new FormControl('', [Validators.required]),
      emailClientePF: new FormControl('', [Validators.required, Validators.email]),
      teleClientePF: new FormControl('', [Validators.required])
    }); */
  
  }
/*
  get cpfClientePF(){
    return this.clientepfForm.get('cpfClientePF')!;
  }
  
  get nomeClientePF(){
    return this.clientepfForm.get('nomeClientePF')!;
  }
  get municipioClientePF(){
    return this.clientepfForm.get('municipioClientePF')!;
  }
  get emailClientePF(){
    return this.clientepfForm.get('emailClientePF')!;
  }
  get teleClientePF(){
    return this.clientepfForm.get('teleClientePF')!;
  }
*/

  //form cliente PF
  //cpfFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  //preencher material 
  listEnquadramentoCliente: string[] = ['RONAF', 'PRONAMP', 'DEMAIS'];
  listParceriaCaixaNoEvento: ParceriaCaixa[] = [
    {id: 'sim', nome: 'SIM - O expositor encaminhou propostas para serem avaliadas pelo VAREJO.'},
    {id: 'nao', nome: 'Não - Pois os produtos não são financiados pela CAIXA, ou não são público alvo no momento.'},
    {id: 'negado', nome: 'Não - Sem Abertura pelo cliente.'},
  ];
  //controle das regras de interface e negocio
  enquadramentoDoCliente: string = '';
  parceriaCaixaNoEvento: string = '';
  isOrcamentoCliente: string = '';
  isOrcamentoClientePF: string = '';
  isRevendaCaixa: string = '';
  tipoCliente: string = "";

  selectTipoPessoa(e: string):void{
    this.tipoCliente = e;
  }

  validandoDadosCliente():void{

  }

  salvar():void{
    this.router.navigate(['/confirmacao']);
    //this.clienteService.cadastra(this.clientepf)
  }

  submitPessoaFisica(){
    /* if(this.clientepfForm.invalid){
      return
    } */
    
    console.log("foi o  cadastro de pessoa fisica")
  }
}