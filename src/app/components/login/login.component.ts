import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  alteracaoSenha: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
}

}
