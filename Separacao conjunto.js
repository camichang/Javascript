var conj1 = 0;
var conj2 = 0;
var conj3 = 0;
var conj4 = 0;




for(i=0;i<10;i++){
    conjunto = parseInt (prompt("Digite um numero: "));

    if(conjunto >0 && conjunto <=25){
        conj1++;
    }
    else
    if(conjunto >26 && conjunto <=50){
        conj2++;
    }
    else
    if(conjunto >51 && conjunto <=75){
        conj3++;
    }
    else
    if(conjunto  >76 && conjunto <=100){
        conj4++;
    }
    else
    if((conjunto) < 0 ){
        alert ("Numero Negativo"); 
    }
}
 
document.write("Conjunto 1: ", conj1, "<br>", "Conjunto 2: ", conj2, "<br>", "Conjunto 3: ", conj3, "<br>", "Conjunto 4: ", conj4)
