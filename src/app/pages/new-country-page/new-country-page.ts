import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-country-page',
  imports: [ReactiveFormsModule],
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

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    region: new FormControl(),
    population: new FormControl(),
    flag: new FormControl(),
  })

  submit(): void {
    console.log("Formulario activado");
    console.log(this.form);
  }

}
