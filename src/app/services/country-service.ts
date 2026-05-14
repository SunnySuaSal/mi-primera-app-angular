import { Injectable, signal } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  title = signal("Hola mundo");

  private _countries = signal<Country[]>([]);

  public countries = this._countries.asReadonly(); //Para leer

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
