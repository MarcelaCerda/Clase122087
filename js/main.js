console.log("bienvenidos a Javascript en la consola")
document.write("<h1>Bienvenidos a JavaScript</h1>")
console.log(2);
console.log(2+2);
console.log("edad:", 25) ;  // este es un ejemmpplksks
console.log("Marcela"," ","Cerda")  
console.log("Marcela"+" "+"Cerda"); 
console.log(2+2)

//alert("S.O.S.")

//nombre=prompt("Ingrese su nombre:")
//document.write("<h1>Hola"+" " +nombre +"</h1>")
//var edad = parseInt(prompt('Ingrese su edad:'));
//console.log(edad);  // 23
console.log(Number.isNaN("A"))
// Obtenemos un número al azar entre [0, 1) con 16 decimales
let x = Math.random();
// Multiplicamos dicho número por el valor máximo que buscamos (5)
x = x * 6;
// Redondeamos inferiormente, quedándonos sólo con la parte entera
x = Math.floor(x)+1;
console.log(x)