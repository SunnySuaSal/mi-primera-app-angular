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

  public countries = this.countryService.countries;

  orderByName(): void {
    console.log("Evento en el padre");
    this.countryService.orderByName();
  }

  orderByPopulation(): void {
    this.countryService.orderByPopulation();
  }

}
