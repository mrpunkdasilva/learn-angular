import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name  : string = "Punk";
  idade : number =  19;
  comidasFav : Array<string> = [ "Pure", "Batata Frita", "Macarrão com almondegas e bastante queijo ralado", "Salada", "Grão de Bico" ]
  minhasRedes = {
    linkedin: "https://www.linkedin.com/in/dev-punk-da-silva/",
    xuitter: "https://twitter.com/mrpunksama",
    github: "https://github.com/mrnullus",
    devto: "https://dev.to/punk-sama",
    insta: "https://www.instagram.com/punk.da.silva/",
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
