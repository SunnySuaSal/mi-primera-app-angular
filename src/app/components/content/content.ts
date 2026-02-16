import { Component, signal, WritableSignal } from '@angular/core';
import { CountryCard } from '../country-card/country-card';
import { Country } from '../../interfaces/country.interface';
import { Controls } from '../controls/controls';

@Component({
  selector: 'app-content',
  imports: [CountryCard, Controls],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
