/** TIPOS BÁSISCO, SIMPLES E PRIMITIVOS DE DADOS */

//String - valores de texto
let nome:string = "Arthur";

//Number - números interos e valores de ponto flutuante
let idade:number = 30;

//Boolean - Valores verdadeiros (true) ou falsos (false)
let ativo: boolean = true;

//undefined (indefinido)
let escabau: undefined = undefined;

//null (nulo)
let nada: null = null;

/* Ao criar uma variável, há duas maneiras principais de o TypeScript atribuir um tipo:
- Explícito
- Implícito
 */

/*TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração.*/
let sobrenome: string = "gorges";
//sobrenome = 30 //TypeScript aponta erro

/*TIPO IMPLÍCITO - Quando o TypeScript irá "adivinhar" (inferir) o tipo com base no valor atribuído. */
let profissao = "Programador";
//profissao = 100 //TipeScript aponta um erro