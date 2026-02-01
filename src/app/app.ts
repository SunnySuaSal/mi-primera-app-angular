import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter], //Aqui agregas las clases (comienzan con mayuscula) de los componentes que quieres importar
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 // public username: WritableSignal<string> = signal<string>("John Doe");
 // es lo mismo que
 // username = signal("John Doe");
 // Simplemente una es más corta que la otra por inferencia del traductor.
  username = signal("John Doe");


}
