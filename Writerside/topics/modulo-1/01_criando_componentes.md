# Criando componentes no Angular


Criamos os componentes usando a CLI, os components são os blocos de construção da aplicação. 
Podemos dizer que são as partes de um tudo, assim podemos ter uma manutenção e controle melhor da aplicação.

> Tudo no Angular é um componente

## Criando
O comando utilizado é: `ng generate component <nome-componente>`

> O Angular usa o `selector` para usar os componentes dentro dos componentes

- Exemplo: `ng generate component components/first-component`
  - Com isso criamos um componente chamado `first-component` dentro da pasta `components`
    - Assim, temos uma organização melhor dos componentes
 
## Perai
Se formos criar na mão um componente, o que é possivel, mas geraria mais trabalho já que alem de criarmos os 4 arquivos importantes para um componente (TS, HTML, CSS, Teste) 
  - Teríamos que incluir o componente dentro do arquivo `app.modules` no `@NgModule` para que a aplicação tenha acesso aos componentes criados.

## Uso
Para usarmos, devemos usar o formato de tags, seguinto o nome do selector do compoenente -> sendo que este selector está dentro do arquivo `.ts` do arquivo

- Exemplo |> meu componente tem o selector > `first-component`
  - Logo deve usar dentro do html que vou colocar o componente: 
    - `<app-first-component></<app-first-component>`
  
> Vai ser **sempre** |> `app-nomeDoComponente` | está é uma obrigatoriedade do Angular