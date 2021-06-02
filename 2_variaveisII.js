//Alterando o valor de uma variável

let nome = "Rodrigo";
nome = "Vitor";
console.log(nome);


//Demonstrando que o Let apenas vê o que está dentro do seu bloco (Apesar de ter 2 "let nome" ele vê cada um separadamente)
if(true){
    let nome = "João"
    console.log(nome)
}


