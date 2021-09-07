import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-tabla',
  templateUrl: './country-tabla.component.html',

})
export class CountryTablaComponent implements OnInit {
  @Input() paises: Country[] = [];
  termino: string="";

  constructor( ) { }
  
  ngOnInit(): void {
  }

}
