import { Component, signal, WritableSignal, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.html',
  styleUrl: './country-card.css',
})
export class CountryCard {
  country = input.required<Country>();
}
