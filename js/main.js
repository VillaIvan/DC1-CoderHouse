alert("CODERHOUSE - DESAFIO COMPLEMENTARIO");

// EJEMPLO 1
alert("Ejemplo 1 - Calculadora ");
let numero1 = parseFloat(prompt("ingrese un numero"));
let resultado = numero1;
if (parseFloat(numero1)) {
  for (let i = 1; i < 5; i++) {
    let numero2 = parseFloat(
      prompt("ingrese otro numero para sumarle al primer numero ingresado")
    );
    resultado = numero1 + numero2;
    alert(
      "El resultado del intento " +
        i +
        " entre " +
        numero1 +
        " y " +
        numero2 +
        " es " +
        resultado
    );
    console.log(resultado);
  }
} else {
  alert("usted no ingreso un numero");
}

// EJEMPLO 2
alert("Ejemplo 2 - Concatenar textos (Para salir escribir ESC)");
let texto = prompt("ingrese un texto");
let final = texto;
let textoSiguiente = " ";

while (textoSiguiente != "ESC") {
  textoSiguiente = prompt("ingresa un texto para concatenar al anterior");
  if (textoSiguiente === "ESC") {
    textoSiguiente = "*final del texto*";
    final = final + " " + textoSiguiente;
    alert(final);
    break;
  }
  final = final + " " + textoSiguiente;
  alert(final);
}

// EJEMPLO 3
alert("Ejemplo 3 - Saludos utilizando ciclo for");
do {
  let entrada = prompt("Ingrese la cantidad de saludos que desea recibir");

  for (let i = 1; i <= entrada; i++) {
    alert(i + ") Hola! Este es el saludo numero " + i + " del dia de hoy");
    console.log(
      i + ") Hola! Este es el saludo numero " + i + " del dia de hoy"
    );
  }
} while (parseInt(entrada));
