import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from  '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule , ReactiveFormsModule, FormGroup} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule} from '@angular/material/select';
import { ComboEventosComponent } from './components/cadastro/combo-eventos/combo-eventos.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ComboRevendaComponent } from './components/cadastro/combo-revenda/combo-revenda.component';
import { ComboEstadosComponent } from './components/cadastro/combo-estados/combo-estados.component'
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MessagensComponent } from './components/messagens/messagens.component';
import { ConfirmacaoCadastroComponent } from './components/confirmacao/confirmacao-cadastro/confirmacao-cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ComboEventosComponent,
    ComboRevendaComponent,
    ComboEstadosComponent,
    MessagensComponent,
    ConfirmacaoCadastroComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,

    NgxMaskModule.forRoot(),
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerWhenStable:30000' }),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
