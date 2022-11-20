import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CardComponent } from './componentes/card/card.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CadastradosComponent } from './paginas/cadastrados/cadastrados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngularModule } from './material/material.module';
import { AppRoutingModule } from './router/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CardComponent,
    RegistroComponent,
    CadastradosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    AppRoutingModule,
    ReactiveFormsModule, // = formbiulder //pra que escute o que esta sendo inserido dentro do formulario eu preciso usar o ReactivFormsModule
    HttpClientModule // fazer uma requisição em uma api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
