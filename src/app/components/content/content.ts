import { Component, signal, WritableSignal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  public country = signal<Country>({
    name: 'Argentina',
    capital: 'Buenos Aires',
    region: 'Americas',
    population: 45000000,
    flag: 'https://flagcdn.com/w320/ar.png'
  })
}
