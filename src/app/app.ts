import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public title: WritableSignal<string> = signal<string>("Helou usando signals");

  public titulo: string = "Hellou mundo remasterizado";

}
