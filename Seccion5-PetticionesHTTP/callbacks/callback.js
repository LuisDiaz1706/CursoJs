//Un callback es una función que se ejecuta a través de otra función


//Los callbacks no son asíncronos



// const getUser = (id, cb) => {
//     const user = {
//         name: 'Luis',
//         id

//     }
//     if(id==2){
//     cb( `el usuario no existe`)
//     }else{
//         cb(null,user)
//     }
// }


// getUser(1,(error,user)=>{
// if(error) return console.log(error)
// console.log(`el usuario es ${user.name}`)
// });

//

const users = [
    {
        id: 1,
        name: 'Joaquin'

    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'jqoan@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

 const getUsers=(id,cb)=>{
     const user = users.find(user => user.id==id)
     if(!user){ 
         cb(`no existe este usario con esta id ${id}`)

     }else{
         cb(null,user)
     }
 }

 


 const getEmail = (users,cb) =>{

    const email = emails.find(email => email.id==users.id)
    if(!email){ 
        cb(` Este usario no tiene email ${users.name}`)

    }else cb(null, {
        id:users.id,
        name:users.name,
        email:email.email
    })
 }

 getUsers(3,(err,users)=>{
    if(err)
        return console.log(err)

      getEmail(users,(err,res)=>{
       if(err)
       return console.log(err)
       console.log(res);
      })
    
})