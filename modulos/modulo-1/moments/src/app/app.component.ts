import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponentComponent} from "./components/first-component/first-component.component";
import {ParentDataComponent} from "./components/parent-data/parent-data.component";
import { EventosComponent } from './components/eventos/eventos.component';
import { EmtitterComponent } from './components/emtitter/emtitter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, EventosComponent, EmtitterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName : string = "Punk da Silva";
  title = 'moments';
}
