import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login/login.module'
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PessoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
