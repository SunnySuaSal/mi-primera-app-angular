import { Injectable, signal } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient);

  title = signal("Hola mundo");

  private _countries = signal<Country[]>([]);

  public countries = this._countries.asReadonly(); //Para leer

  fetchCountries(): void {
    this.http.get()
  }

  public orderByName(): void {
    this._countries.update( countries =>
      [...countries].sort((a,b) =>
      a.name.localeCompare(b.name))
    );
  }

  public orderByPopulation(): void {
    this._countries.update(
      countries =>
      [...countries].sort((a,b) => b.population - a.population)
    );
  }

  public addCountry(country : Country):void {
    this._countries.update(
      countries => [
        ...countries, country
      ]
    );
  }

}
