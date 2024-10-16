# Importancia das Interfaces no Angular

> Toda classe que vai ser trabalhada no Angular devemos primeiro ter uma interface ou cria depois, mas deve se ter

Isso facilida a manutenção e padroniza o código

- Exemplo:
```typescript
interface Animal {
  name: string;
  age: number
  type: string
}
```

Assim criado basta apenas usar: 
```typescript
animals : Animal[] = [
  {name: "Anubis", type: "Cat", age: 12},
  {name: "Dino", type: "Jacare", age: 2},
  {name: "Creeper", type: "Mob", age: 19}
];
```