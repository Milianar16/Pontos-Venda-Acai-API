import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMunicipio, IUf } from '../interfaces/dados';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(
    private http: HttpClient
  ) { }


  private readonly baseUrlUf:string ='https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

  private readonly baseUrlMunicipio:string ="https://servicodados.ibge.gov.br/api/v1/localidades/estados/"

  buscarUf(){
    return this.http.get<IUf[]>(this.baseUrlUf)
  }

  buscarMunicipio(siglaUf: string){
    return this.http.get<IMunicipio[]>(`${this.baseUrlMunicipio}${siglaUf}/municipios`)
  }
}
