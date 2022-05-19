const perosn = {
    name:'juan',
    age:'56',
    sons:['laura','diego']
}

// console.log(perosn['name']);

// for (const key in perosn){
//     console.log(key);
// }

// for(const key in perosn){
//     console.log(perosn[key]);
// }

// for (const son of perosn.sons){
//     console.log(son);
// }


console.log(`Hola ${perosn.name}, tienes ${perosn.age}años y tus hijos se llaman ${perosn.sons.join(', ')}`);