function multiplicacion (n1, n2) {
    if (n1 == 0 || n2 == 0){
        console.log ("uno de los numeros es 0");
    } else {
        console.log (n1 * n2);
    }
}

function suma (n1, n2) {
        console.log (n1 + n2);
}

function resta (n1, n2) {
    console.log (n1 - n2);
}

module.exports = {
    multiplicacion, 
    suma, 
    resta
}
