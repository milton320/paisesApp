import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  
  termino:string='';
  hayError:boolean = false;
  capitales: Country[]=[];

  constructor( private countreuServicio: CountryService) { }
  buscar( termino : string){
    console.log(this.termino);
    this.termino= termino;

    this.countreuServicio.buscarCapital(this.termino)
      .subscribe((capitales)=>{
        console.log(capitales)
        this.capitales=capitales;
      }, (err)=>{
          this.hayError = true;
          this.capitales = [];
      });
  }
  ngOnInit(): void {
  }
  sugerencias(termino:string){
    this.hayError=false;
  }
  placheHolder(){
    
  }
}
