# Emitir Eventos
Podemos comunicar com um componente pai por um componente filho
- Para isso precisamos do `@Outpu` que vai fazer a saída do evento do componente filho

Na tag de invocação do componente no template, escolhemos um método para executar quando o evento for emitido
- Exemplo: 
```
(emit)="onEmit()"
```

```angular
(click)="algumaAção()"
```

> Devemos usar os parentes

Essas ações ficam nas classes dos componentes
