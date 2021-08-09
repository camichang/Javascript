var valor = 0;
var total = 0;

valor = prompt("Digie um numero");

if (valor ==0){
    document.write("0! = 1");
}else
    total = valor;
    document.write(valor, `! = ${valor} X ` );
    for(i = 1;i < valor;i ++){
    total *= valor - i;
        if (i != valor -1) document.write(valor-i, "X");
    else document.write (valor-1, "=");
}
document.write(total);