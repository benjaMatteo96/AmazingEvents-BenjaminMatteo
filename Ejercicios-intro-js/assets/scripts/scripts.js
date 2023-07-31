/* 1) Crear una variable llamada miNombre y guardar en ella su primer nombre.*/

let miNombre = "Benjamin";

/* 2) Crear una variable llamada miApellido y guardar en ella su apellido. */

let miApellido = "Matteo";

/* 3) Crear una variable llamada miEdad y guardar en ella su edad. */

let miEdad = 26;

/* 4) Crear una variable llamada miMascota y guardar en ella el nombre de su mascota */

let miMascota = "Luna";

/* 5) Crear una variable llamada edadMascota y guardar en ella la edad de la mascota */
let edadMascota = 7;

/* 6) Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
 */
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

/* 7) Crear una variable llamada nombreCompleto y guardar en ella la concatenación de 
miNombre y miApellido. */

let nombreCompleto = miNombre + " " + miApellido

/* 8) Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento */

let textoPresentacion = `Hola mi nombre es ${miNombre} ${miApellido} tengo ${miEdad} años y tengo una mascota que se llama ${miMascota} de ${edadMascota} años.` 
console.log(textoPresentacion)

/* 9) Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y 
calcular sus respectivas operaciones con las variables miEdad y edadMascota.
 */
let sumaEdades = miEdad + edadMascota;

let restaEdades = miEdad - edadMascota;

let productoEdades = miEdad * edadMascota;

let divisionEdades = miEdad / edadMascota;

/* 10) Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho 
objeto utilizando console.table( ) y también mostrar cada una de las propiedades del 
objeto por separado. */

let alumno = {
  nombre: "Benjamin",
  apellido: "Matteo",
  edad: 26,
  hobbies:["leer", "programar", "pesas", "cine", "musica"],
  cohort: 50
}

console.table(alumno);
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.hobbies)
console.log(alumno.cohort)

/* 11) Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho 
objeto utilizando console.table( ) y también mostrar cada una de las propiedades del 
objeto por separado. */

let mascota = {
  nombre: "Luna",
  edad: 7,
  humanoFavorito:"Benjamin",
  comidaFavorita:"Jurel",
  hobbies: "Dormir"
};

console.table(mascota);
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.humanoFavorito)
console.log(mascota.comidaFavorita)
console.log(mascota.hobbies)

/* 12) Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el 
array completo y cada uno de los elementos por separado */
let frutas = ["banana", "mango", "manzana verde", "sandia", "naranja"];

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

/* 13) Compare su edad ingresada por pantalla con prompt( ) con el número 18 y guardarlo 
en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: 
Soy mayor de edad y el valor de la variable. */

/* comparar mi edad con 18*/
/* mi edad debe ser obtenida con prompt */
/* Guardar la comparacion de mi edad con 18 en una variable llamada soyMayorDeEdad */

// let edad = Number(prompt("Escriba su edad"))

let soyMayorDeEdad= Number(prompt("Escriba su edad")) >= 18;

console.log(`Soy mayor de edad ${soyMayorDeEdad}`)

/* 14) Crear un array llamado numeros con un mínimo de 5 elementos y mostrar por consola 
el array completo y cada uno de los elementos por separado.
 */

let numeros = [22,26,0.4,NaN,33]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

/* 15) Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el 
array completo y cada uno de los elementos por separado. */

let familia = [
  {nombre: "Kattalina", edad: 28, parentesco:"Hermana"},
  {nombre: "Ines", edad: 60, parentesco:"Mama"},
  {nombre: "Aldo", edad: 58, parentesco:"Papa"},
  {nombre: "Bastian", edad: 34, parentesco:"Hermano"},
  {nombre: "Lucas", edad: 6, parentesco:"Sobrino"}
]

console.log (familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])

/* 16) Crear una variable llamada textoAleatorio formando una frase con el segundo 
elemento del array del punto 12, el cuarto elemento del punto 14 y el quinto objeto del 
array del punto 15 */

let textoAleatorio = "A mi sobrino " +  familia[4].nombre + " Le gusta comer " + frutas[1] + " cada " +  numeros[0] + " dias"
console.log(textoAleatorio)
/* let textoAleatorio = `${frutas[1]} ${numeros[3]} ${familia[4]}` */

/* 17) Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar 
por consola los resultados de comparar los valores y guardarlos en variables llamadas 
por ejemplo: edadesIguales, soyMayor, soyMenor, etc. y mostrar mensajes en consola 
como los siguientes:
a. Mi edad es igual a la de mi compañero: false
b. Mi edad es mayor a la de mi compañero: true
c. Mi edad es menor a la de mi compañero: false */

let mi_edad = Number(prompt("Ingresa tu edad"));
let edad_companiero = Number(prompt("Ingresa la edad de tu companiero"));

console.log(mi_edad)
console.log(edad_companiero)

let edadesIguales = mi_edad === edad_companiero;
let soyMayor = miEdad > edad_companiero;
let soyMenor = miEdad < edad_companiero;

console.log("Mi edad es igual a la de mi companiero" + " " + edadesIguales)
console.log("Mi edad es mayor a la de mi companiero" + " " + soyMayor)
console.log("Mi edad es menor a la de mi companiero" + " " + soyMenor)

/* 18) Introducir por pantalla la edad y la altura de una persona y guardarlas en variables
separadas y en una variable llamada puedeSubir el resultado de la operación
resultante de si la persona es mayor de 6 años y además tiene una altura mínima de
120 cm y mostrar por consola un mensaje como el siguiente: Puede subir a la
atracción y el valor de la variable resultante. */

let edad_persona = Number(prompt("Ingrese la edad de la persona"))
let altura_persona = Number(prompt("Ingrese la altura de la persona en cm"))
let puedeSubir = edad_persona > 6 && altura_persona >=120;

console.log("puede surbir a la atraccion" + " " + puedeSubir)

/* 19) Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o
“LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable
llamada puedePasar guardar el resultado de la operación resultante de si la persona
tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La
persona puede pasar y el resultado de la variable. */

let pase = prompt("Ingrese el tipo de pase 'VIP', 'NORMAL', 'LIMITADO'");
let saldo = Number(prompt("Ingrese su saldo"));
let puedePasar = pase === "VIP" || saldo > 1000;