import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-new-country-page',
  imports: [],
  templateUrl: './new-country-page.html',
  styleUrl: './new-country-page.css',
})
export class NewCountryPage {
  regions: Country['region'][] = [
    'Americas',
    'Europe',
    'Asia',
    'Oceania',
    'Africa'
  ];
}
