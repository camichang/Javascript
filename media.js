var qtd = 0;
var valor = 0;
var media = valor;
var positivo = valor;
var negativo = valor;

qtd = parseInt (prompt("Digite a quantidade de execuções: "));

for(i=1; i<=qtd; i++){
    valor =  parseInt (prompt("digite o valor: " +i))
    media += valor / qtd;
    if(valor > 0)
    positivo = i;
    negativo = i - positivo;
}

document.write("Média dos valores: ", media, "<br>");
document.write("Positivos: ", positivo,'<br>' );
document.write("Negativos: ", negativo, "<br>");

