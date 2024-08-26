# Interpolação de Dados

<!-- TOC -->
* [Interpolação de Dados](#interpolação-de-dados)
  * [O que seria](#o-que-seria)
  * [Como fazer](#como-fazer)
<!-- TOC -->

## O que seria
A interpolação de dados é usada para exibir os dados para o usuário, ou seja, exibir um dado que esteja na parte da lógica (TS) para a parte de visualização do usuário (HTML)

```
+-------------------+
   |  Dados na Lógica  |
   |       (TS)        |
   +-------------------+
           |
           v
   +-------------------+
   |  Interpolação de  |
   |      Dados        |
   +-------------------+
           |
           v
   +-------------------+
   | Exibição dos Dados|
   |   no HTML (Template)|
   +-------------------+
 ```


## Como fazer
Criamos as variáveis e atributos dentro da classe do componente

Em seguida teremos que acessar os dados no HTML (**Template**) para tal usamos |> `{{ dado }}`

**No `.ts`:**
```typescript
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
```

**No HTML:**
```angular2html
<h1>
  Nome: {{ name }}
  Idade: {{ idade }}
</h1>

<hr>

<h2>
  Comidas favoritas:
</h2>
<ul>
  <li>{{ comidasFav[0] }}</li>
  <li>{{ comidasFav[1] }}</li>
  <li>{{ comidasFav[2] }}</li>
  <li>{{ comidasFav[3] }}</li>
  <li>{{ comidasFav[4] }}</li>
</ul>

<hr>

<h2>
  Minhas Redes:
</h2>
<ul>
  <li>{{ minhasRedes.linkedin }}</li>
  <li>{{ minhasRedes.xuitter }}</li>
  <li>{{ minhasRedes.github }}</li>
  <li>{{ minhasRedes.devto }}</li>
  <li>{{ minhasRedes.insta }}</li>
</ul>
```