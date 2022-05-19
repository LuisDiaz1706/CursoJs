// .from convierte el array  en un elemento iterable 

let word = "HOla Mundo"; 
const letras = ["a","f","z","t"];
// 

//sort  ordernar los elementos de un array alfameticamente 


console.log(letras.sort());
const num1 = ["150","0","500","2"];
console.log(num1.sort((a,b)=>a-b));
//console.log(num1.sort((a,b)=>a+b));

//forEach ejcuta la funcion inidicada una vez por cada elemento

const num2 = ["160","10","400","21"];

num2.forEach((e)=> console.log(e))
num2.forEach((e,index)=> console.log(e,index))

//some comprueba si al menos un elemento cumple una condicion 

const palabras1 = ["aventura","facil","zoo","toilet"];

console.log(palabras1.some(e => e.length>10));

//every comprueba si todos los elementos cumple una condicion 

const palabras = ["aventura","facil","zoo","toilet"];

console.log(palabras.every(e => e.length>2));

//map transforma toodos los elemntos del array y devueleve uno nuevo 

const num3 = ["150","0","500","2"];

const numbers = num3.map((num => num*2))

console.log(numbers)

//filter filtra todos los elementos del array y devuelve un nuevo

const num4 = ["150","0","500","2"];

const numbers2 = num4.filter((num => num>200))

console.log(numbers2)

// reduce reduce todos los elementos del array a un unico valor

const num5 = ["1","0","5","2"];

console.log(num5.reduce((a,b)=>a+b))

const user = [
    {
        name:"user1",
        online: true,
    },{
        name:"user2",
        online: false,
    },{
        name:"user3",
        online: true,
    },{
        name:"user4",
        online: false,
    },{
        name:"user5",
        online: true,
    },{
        name:"user6",
        online: true,
    }
]

const userOnline = user.reduce((cont,user)=> {
    if(user.online) cont++
    return cont
},0)
console.log(`Hay ${userOnline} usuarios conectados`);