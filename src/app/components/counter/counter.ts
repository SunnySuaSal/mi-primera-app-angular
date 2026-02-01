import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter', //this is the etiquete name for calling this component in the main index.html
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = signal(0);
  //Que en version larga seria
  //public counter: WritableSignal<number> = signal<number>(0);

  increment(): void {
    //podriamos usar
    //this.counter.set(this.counter() + 1);
    //pero como estamos actualizando mas que definiendo es mas adecuado usar
    this.counter.update(current => current + 1);
  }

  decrement(): void {
    this.counter.update(current => current - 1);
  }

  reset(): void {
    //como vamos a asignar un valor, aqui si conviene usar set
    this.counter.set(0);
  }


}
