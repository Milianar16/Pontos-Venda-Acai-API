import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMunicipio, IUf } from 'src/app/interfaces/dados';
import { IbgeService } from 'src/app/services/ibge.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private ibgeService:IbgeService
  ) { }

  ufs: IUf[]=[];
  municipios: IMunicipio[]=[];

  ngOnInit(): void {
    this.ibgeService.buscarUf().subscribe((ufRetornado)=>{
      this.ufs = ufRetornado  
     })
  }

 

  formulario: FormGroup = this.formBuilder.group({
    nome: ["", [Validators.required]],
    local: ["", [Validators.required]],
    cidade: ["", [Validators.required]],
    estado: ["", [Validators.required]],
    inicio: ["", [Validators.required]],
    termino: ["", [Validators.required]],

  })

  adicionarLocalVenda(evento:any){
    evento.stopPropagation();
    evento.preventDefault();

    const nome = this.formulario.get("nome")?.value
    const local = this.formulario.get("local")?.value;
    const cidade = this.formulario.get("cidade")?.value;
    const estado = this.formulario.get("estado")?.value;
    const inicio = this.formulario.get("inicio")?.value;
    const termino = this.formulario.get("termino")?.value;
  }

  procurarMunicipio(evento:any){
   const siglaUf= evento.target.value
   this.ibgeService.buscarMunicipio(siglaUf).subscribe((municipioRetornado)=>{
    this.municipios = municipioRetornado;
   })
  }
}
