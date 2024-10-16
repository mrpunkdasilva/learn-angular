# Pipe Operators
Funções que o Angular oferece para trabalhar com strings no template
- Podemos fazer deste modo: `{{ dado | algumPipeOperator }}`

Antes precisa primeiro importar a classe o pipe operator para usar:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  standalone: true,
  imports: [PipeOperatorComponent],
  templateUrl: './pipe-operator.component.html',
  styleUrl: './pipe-operator.component.css'
})
export class PipeOperatorComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
```