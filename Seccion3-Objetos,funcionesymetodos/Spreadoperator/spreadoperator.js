
//Spread operator  operador de expancion 

const agregarnum = (a,b,c) =>{
    console.log(a+b+c);
}

let num4 = ["150","0","500","2"];

agregarnum(...num4)

///
const palabras = ["aventura","facil","zoo","toilet"];

const palabras2 = ["hola","palanca","accion"];

palabras.push(...palabras2)

console.log(palabras)

///

const num = ["150","0","500","2"];


const num1 = [...num];

console.log(num1);



const num3 = ["1","0","5","2"];
const num5 = ["150","0","500","2"];

let concat = [...num3,...num5];
console.log(concat)


const num6 = ["150","0","500","2","2","500"];

console.log(Math.max(...num6));

console.log(...new Set(num6));

