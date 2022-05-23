
//Una promesa es un objeto con 2 callbacks internos


const users = [{ id: 1, name: 'Joaquin' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'jqoan@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUsers = (id) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => {
        if (!user) {
            reject(`no existe este usario con esta id ${id}`)
        } else {
            resolve(user)
        }
    })
}


const getEmail = (users) => {

    const email = emails.find(email => email.id == users.id)
    return promise = new Promise((resolve, reject) => {
        if (!email) {
            reject(` Este usario no tiene email ${users.name}`)

        } else
            resolve({
                id: users.id,
                name: users.name,
                email: email.email
            })
    })
}


//     getUsers(3)
//     .then(user => getEmail(user))
// .then(res => console.log(res))
// .catch(err => console.log(err))


getUsers(3)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)
