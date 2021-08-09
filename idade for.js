//  Peça ao usuário para digitar 10 idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.


// maior de idade >= 18 
// menor de idade 0> e < 18

var menor = 0;
var maior = 0;
var idade = 0;



for(i=0;i<10;i++){
    idade = (prompt("Digite a idade: "));

    if(parseInt(idade) >=18){
        maior++;
    }else{
        menor++;
    }
}
document.write("Maiores de idade: ", maior, " - Menores de idade: ", menor);
