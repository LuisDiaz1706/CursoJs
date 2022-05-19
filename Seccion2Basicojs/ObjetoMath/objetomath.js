let num = 5;

//Math.abs(x)
console.log(Math.abs(num))

//Math.ceil(x)

console.log(Math.ceil(num))

//Math.floor(x)

console.log(Math.floor(num))

//Math.pow(x)

console.log(Math.pow(num))

//Math.random(x)

console.log(Math.round(Math.random()*5))

//Math.round(x)

console.log(Math.round(Math.random()*(100-50)+50))

//Math.sign(x) 

console.log(Math.sign(0))


//condicionales

let nun = 20 ;
let nun2 = 5;

//if(nun >0) console.log(`${nun} es mayor a 0`)

//condicional compuesto 

// if(nun>0){
//     console.log(`${nun} es mayor a 0`)
// }else{
//     console.log(`${nun} es menor a 0`)
// }


//condicional multiple

// if(nun>0){
//     console.log(`${nun} es mayor a 0`)
// }else if(num<0){
//     console.log(`${nun} es menor a 0`)
// }else{
//     console.log(`${nun} es igual a 0`)
// }

//operadores logicos

let word = '   Lorem ipsum dolor, sit amet consectetur adip'

if(word.length>4){
    console.log(`${word} tiene mas de cuatro letras`)
}else if(word.length<4){
console.log(`${word} tiene menos de cuatro letras`)
}else{
    console.log(`${word} tiene cuatro letras`)
}


let resp = false

if(resp) console.log("Es verdad")
if(!resp)console.log("Es falso")


//Switch 

let nun3 = 14;

switch(nun3){
    case 1: console.log(`Num tiene el valor de 1`)
      break;
      case 2: console.log(`Num tiene el valor de 2`)
      break;
      default: console.log(`Num  no tiene el valor de 1 ni de 2`) 
}

//Operador Ternario 

let num4 = 3;

(num4 %2 == 0 ) ? console.log(`${num4} es par`) : console.log(`${num4} es impar`); 

//Array 

let numeros = [1,2,3,4,5,6];


let palabras = ["Lorem" ,"ipsum" ,"dolor", "sit","consectetur"];

let booleans = [true,true,true,false];

console.log(numeros[0]+numeros[5]);

console.log(`la palabra "${palabras[3]}" tiene ${palabras[3].length}letras`);

//console.log(numeros);

//array 

//  console.log(numeros)
// let arrayString = numeros.join("")
//  console.log(numeros.join('-'));


//console.log(numeros);
// numeros.splice(3)
//numeros.slice(2,2);
//numeros.splice(2,2,10,54);
//numeros.splice(2,0,10,54);


// let newnumbers= numeros.slice();
// console.log(numeros);
// console.log(newnumbers);

// let newnumbers= numeros.slice(2);
// console.log(numeros);
// console.log(newnumbers);

let newnumbers= numeros.slice(2,4);
console.log(numeros);
console.log(newnumbers);


//Bucles 

//Bucle while 
let pass = "";

// while(pass != "hola"){
//         pass=prompt("introdusca la password")
// }
// console.log("fin")
//Bucle do while

// do{
//     pass=prompt("introdusca la password");
// }while(pass != "hola")

//For 

for(let i =0;i<=10;i++){
    console.log(i);
}


for(let i =10;i>=0;i--){
    if(i!=5){
        console.log(i)
    }
}


let numbers1 = [0,56,28,31,49,95,86];

for(let i =0;i<numbers1.length;i++){
    console.log(`i vale ${i} y el valor en esa poscion en el array es ${numbers1[i]}`);
}

//for of 

let nombres = ["paco","pedro","jose"]

for(let names of nombres){
    console.log(names)
    //console.log(names.indexOf(nombres))
}



//for in

for(let index in nombres){
    console.log(index);
}


