
/*

OPERADORES DE COMPARACIÓN
==
!=
<
>
>=
<=

*/

function verificarEdad() {
    let m_e = 18;
    let edad = document.getElementById('num1').value;

    let comparacion = Number(edad) >= m_e;
    console.log(comparacion);

    if ( Number(edad) >= m_e) {
        alert("Eres mayor de edad")
    } else {
        alert("No eres mayor de edad, no puedes ingresar")
    }
}




function sumar(n1, n2) {

    document.getElementById('resultado').value = '0';

    if( isNaN(n1) ){
        // N1 NO ES NÚMERO
        alert("El primer número ingreso es incorrecto")
    }else{
        // N1 ES NÚMERO
        if( isNaN(n2) ){
            // N2 NO ES NÚMERO
            alert("El segundo número ingreso es incorrecto")
        }else{
            // N2 ES NÚMERO 
            document.getElementById('resultado').value = Number(n1) + Number(n2);
        }
    }    
}

function restar(n1, n2) {
    if( isNaN(n1) ){
        alert("N1 NO ES NÚMERO")
        return
    }
    if( isNaN(n2) ){
        alert("N2 NO ES NÚMERO")
        return
    }
    document.getElementById('resultado').value = Number(n1) - Number(n2);
}

function multiplicar(n1, n2) {
    document.getElementById('resultado').value = Number(n1) * Number(n2);
}

function dividir(n1, n2) {
    document.getElementById('resultado').value = Number(n1) / Number(n2);
}
