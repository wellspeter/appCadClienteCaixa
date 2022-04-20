import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientePF } from '../models/ClientePF';

@Injectable({
  providedIn: 'root'
})
export class ClientePfService {

  private API_CLIENTE_PRO = 'https://appcaixacad.herokuapp.com/clientepf'
  private API_CLIENTE_DES = 'http://127.0.0.1:3000/clientepf'

  constructor(private http: HttpClient) { }

  cadastra(cliente:ClientePF){
    this.http.post(this.API_CLIENTE_DES + '/cadastrar', cliente).subscribe(
      resultado => alert('Cliente foi cadastrado'),
      (err) => console.log('erro ao cadastrar o cliente')
    );
  }

  cadastrarFake(cliente:ClientePF){
    return this.API_CLIENTE_DES;
  }
}
