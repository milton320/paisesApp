import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = ''; 
  hayError : boolean = false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[]; 
  mostrarSugerencias: boolean = false;
 
  constructor( private conutryService: CountryService) { }
  buscar(termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
  

    this.conutryService.buscarPais(this.termino)
      .subscribe((paises) =>{
        this.paises = paises;
      }, (err)=>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.conutryService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises,
        (err)=>this.paisesSugeridos=[]          
      )
  }

  buscarSugerido(termino: string){
      this.buscar( termino );
      
  }

  ngOnInit(): void {
  }

}
