

// const getName = async () =>{
//     return new Promise((res,rej)=>{
//         setTimeout(() =>{
//             res('Luis')
//         },1800)
//     })
// }

// //getName().then(name=> console.log(name))

// const Saluda = async () =>{
//     const name = await getName()
//     return `Hola ${name}`
// }

// //console.log(Saluda())

// Saluda().then( res => console.log(res))


const users = [{ id: 1, name: 'Joaquin' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'joaqun@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
        if (!user)  throw new Error(`Doesn't exist an user with id ${id}`)
        else return user
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
        if (!email) throw new Error(`${user.name} hasn't email`)
        else return({
            id: user.id,
            name: user.name,
            email: email.email
        })
}

const getInfo = async (id) =>{
        try{
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email es ${res.email}`
        }catch(error){
            console.log(error)
        }
}

getInfo(3).then( res => console.log(res))
