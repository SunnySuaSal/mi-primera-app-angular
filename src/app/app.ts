import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 // public username: WritableSignal<string> = signal<string>("John Doe");
 // es lo mismo que
 // username = signal("John Doe");
 // Simplemente una es más corta que la otra por inferencia del traductor.
  username = signal("John Doe");

  counter = signal(0);
  //Que en version larga seria
  //public counter: WritableSignal<number> = signal<number>(0);

  increment(): void {
    //podriamos usar
    //this.counter.set(this.counter() + 1);
    //pero como estamos actualizando mas que definiendo es mas adecuado usar
    this.counter.update(current => current + 1);
  }


}
