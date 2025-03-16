# Compartilhamento de Dados

No Angular podemos fazer com que o **componente pai** compartilhe dados com o **componente filho**

Para tal vamos disponibilizar na chamada do componente o nome do dado que será recebido, na seguinte sintaxe: `[dado]`

E no código `.ts` do componente filho usamos o decorator `@input` que serve para entregar o dado para o **template**

## Uso
- **Devemos criar o atributo na classe pai:**
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponentComponent} from "./components/first-component/first-component.component";
import {ParentDataComponent} from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName : string = "Punk da Silva";
  title = 'moments';
}
```

- **Definindo o dado que será passado no componente pai:**
  - devemos seguir o seguinte para isso: `[nomeDoDado]="nomeDoDadoQueEstaNoPai"`
  - Não necessita de os dois nomes serem iguais, mas é uma boa prática
- 
```angular2html
<h1>Hello World</h1>

<app-first-component></app-first-component>
<app-parent-data [name]="userName"></app-parent-data>
```

- **Passar o dado para o componente filho com o `@Input`:**
```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {

  @Input() name : string = "";

  constructor() {}

  ngOnInit() {}
}
```

> :warning: Para o Angular é necessario inicializarmos o dado com algum valor, para que ele preencha.
> Ou podemos também dizer para o TypeScript que o dado vindo do `@Input` vai ser inicializado, mas não agora, usando a exclamação na frente do nome do dado: `@Input() name! : string;`
