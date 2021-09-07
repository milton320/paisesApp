import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string="https://restcountries.eu/rest/v2";
  get httpParams(){
    return new HttpParams().set(' fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor( private htpp: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    return this.htpp.get<Country[]>(url, {params: this.httpParams} );
  }
  buscarCapital(termino: string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${termino}`;
    return this.htpp.get<Country[]>(url, {params: this.httpParams})
  }
  getPaisPorAlpha(id: string):Observable<Country>{
    const url =`${this.apiUrl}/alpha/${id}`;
    return this.htpp.get<Country>(url)
  }
  getRegion(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`
    return this.htpp.get<Country[]>(url, {params: this.httpParams})
  }
}
