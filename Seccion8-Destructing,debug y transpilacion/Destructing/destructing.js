
/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/


const person ={
    name: 'luis',
    age: 24,
    email:'luis@gmail.com'
}

// const name = person.name
// const age = person.age
// const email = person.email

const{name:nombre,age:edad,email} = person

const num = [1,2,3,4] 

const [primerapos]=num


const printPerson=()=>{
    console.log(person)
}

printPerson(person)


const getUsers = async () =>{
    const{data:users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}

getUsers()