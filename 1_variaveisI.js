//Criando uma variável
var nome = "Rodrigo";
console.log(nome);



//Let pertence exclusivamente a um bloco de execução. É possível usar a mesma variável em blocos diferentes
if(true){
    let cumprimento = "bom dia"
    console.log(cumprimento)
}

if(true){
    let cumprimento="boa noite"
    console.log(cumprimento)
}



//Const não permite alterar a variável no futuro
const noome = "Rodrigo"
noome="Vito" //Dá erro.
console.log(noome)