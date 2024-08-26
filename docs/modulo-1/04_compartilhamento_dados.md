# Compartilhamento de Dados
No Angular podemos fazer com que o **componente pai** compartilhe dados com o **componente filho**

Para tal vamos disponibilizar na chamada do componente o nome do dado que será recebido, na seguinte sintaxe: `[dado]`

E no código `.ts` do componente filho usamos o decorator `@input` que serve para entregar o dado para o **template**

