/* Strings */

let cadena = "Adios Mundo" 

//Devulve la longitud de una cadena length

console.log(cadena.length)

//Devuelve una cadena a mayuscula toUpperCase() 

console.log(cadena.toUpperCase)

//Devuelve una cadena a minusculas toLowerCase()

console.log(cadena.toLowerCase)

//devuelve la primera coincidencia indexOf

console.log(cadena.indexOf('A'))


//Remplaza el fragmento de la cadena y pone el valor nuevo replace

console.log(cadena.replace('Adios','Hola'))

//Extrae los caracteres desde el inicio hasta el final substring

console.log(cadena.substring(3))
console.log(cadena.substring(3,10))

//slice acpeta negativos 

console.log(cadena.slice(-3))
console.log(cadena.slice(3))
console.log(cadena.slice(0,-2))

//trim() elimina los espacios al final e inicio de la cadena. 

let cadena2 =  "    ipsum dolor sit amet consectetur adipisicing elit     ";

console.log(cadena2.trim())

//startsWith para saber si la cadena empieza con un valor. 

console.log(cadena.startsWith('A'))
console.log(cadena2.startsWith('i'))

//endsWith para saber si la cadena termina con ese valor. 

console.log(cadena.endsWith('o'))
console.log(cadena.endsWith('a',4))
console.log(cadena.endsWith('n',8))
console.log(cadena.endsWith('Mundo'))

//includes devuelve true o false

console.log(cadena.includes('n'))
console.log(cadena.includes('a',5))


//Template String 

let nombre="Karla";
 let apellido="Mendez";
 let edad= 55;

 console.log(`Que tal ${nombre}  ${apellido} cual es tu ${edad}`)