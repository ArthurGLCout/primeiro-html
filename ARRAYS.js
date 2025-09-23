/* ARRAYS 
valores em uma variavel. diferente dos 00] que funcionam 
com propriedades ou "nomes" que você der os itens dentro dele,
os arrays não possuem propriedades que tem dentro dele 
é encontrado pela posição 

imagine um array como uma lista de itens, com colunas e ordem de posição dentro dele. 


forma 1:
ex: const lista = ["arroz", "feijão","macarrão"]
forma 2: 
const lista = [
     "arroz"   ,  [0]
     "feijão"  ,  [1] 
     "macarrão",  [2] 
     "leite"   ,  [3]
 
]
     console.log(lista);
*/

// array e objeto 

const pessoa =["joão", "oliveira", 25]; // array
const pessoa1 =(nome: "joão", sobrenome:"oliveira", 25, "programador"); // objeto

//alert(pessoa.length +1); 

pessoa.push("front end") 
console.log(pessoa)
alert(pessoa[3])
//alert(array.jsarray(pessoal)); verificar se é uma matrix 
 

