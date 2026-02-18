import { Component, signal, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Controls } from '../../components/controls/controls';
import { CountryCard } from '../../components/country-card/country-card';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-home-page',
  imports: [Controls, CountryCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  countryService = inject(CountryService);

  public countries = signal<Country[]>([]);

  orderByName(): void {
    this.countries.update( countries =>
      [...countries].sort((a,b) =>
      a.name.localeCompare(b.name))
    );
  }

  orderbyPopulation(): void {
    this.countries.update(
      countries =>
      [...countries].sort((a,b) => b.population - a.population)
    );
  }

}
