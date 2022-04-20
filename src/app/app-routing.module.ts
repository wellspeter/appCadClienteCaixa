import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ConfirmacaoCadastroComponent } from './components/confirmacao/confirmacao-cadastro/confirmacao-cadastro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'login'},
  {path:'cadastro', component:CadastroComponent},
  {path:'login', component:LoginComponent},
  {path:'confirmacao', component:ConfirmacaoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
