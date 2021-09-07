import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import {switchMap, tap} from 'rxjs/operators' 
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
    paises!: Country ;
    constructor( 
      private activatedRoute: ActivatedRoute,
      private countryService: CountryService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap((params)=> this.countryService.getPaisPorAlpha( params.id)),
      tap( console.log )
    )
    .subscribe( paises =>this.paises = paises);       
    


    /* this.actiatedRoute.params
      .subscribe( ({id})=>{
        console.log( id );
        this.countryService.getPaisPorAlpha( id )
          .subscribe( country=>{
            console.log(country)
          })  
      }) */
  }

}
