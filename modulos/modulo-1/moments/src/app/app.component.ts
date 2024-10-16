import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import {FirstComponentComponent} from "./components/first-component/first-component.component";
import {ParentDataComponent} from "./components/parent-data/parent-data.component";
import { EventosComponent } from './components/eventos/eventos.component';
import { EmtitterComponent } from './components/emtitter/emtitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, FirstComponentComponent, ParentDataComponent, EventosComponent, EmtitterComponent, ListRenderComponent, PipeOperatorComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName : string = "Punk da Silva";
  title = 'moments';
}
