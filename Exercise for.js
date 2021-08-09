var menor = 0;
var maior = 0;

for (i = 1; i <= 15; i++){
    msg = "Digite a altura do individuo: "+ i;
    altura = prompt (msg);
    if (i == 1)
        menor = altura;
    if (altura < menor)
        menor = altura;
    if (altura > maior)
        maior = altura;
}
document.write("maior", maior, "menor", menor)


