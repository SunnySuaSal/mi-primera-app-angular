import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

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
    name: new FormControl('', [Validators.required]), //Default value and validation array
    capital: new FormControl('', [Validators.required]), //Si un campo requerido no se llena, su propiedad valid cambia a false
    region: new FormControl('Americas', [Validators.required]), //Con que un campo no sea valid, todo le form es invalido
    population: new FormControl('', [Validators.required]), //otro tipo de validaciones son una longitud minima o maxima
    flag: new FormControl('', [Validators.required]), //que sea un email, fecha o que cumpla con una expresion regular
  })

  submit(): void {
    console.log("Formulario activado");

    const { name, capital, region, population, flag } = this.form.value; //a esto se le llama destructuracion de objetos
    if(this.form.valid){
      console.log("Formulario valido");

      //creacion del elemento
      const newCountry : Country = {
        name,
        capital,
        region,
        population,
        flag
      }

      console.log("Agregando nuevo elemento...", newCountry);
    }
  }

}
