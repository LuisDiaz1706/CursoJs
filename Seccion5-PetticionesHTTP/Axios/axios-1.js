



// button.addEventListener('click', () => {
//     axios({
//         method: 'Get',
//         url:'https://jsonplaceholder.typicode.com/users',
        
//     }).then(res=>{
//         const list = document.getElementById('list')
//         const fragment = document.createDocumentFragment()
//         for (const userInfo of res.data) {
//             const listItem = document.createElement('LI')
//             listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//             fragment.appendChild(listItem)
//         }
//         list.appendChild(fragment)
//     }).catch(err => console.log(err))
// })

button.addEventListener('click', () => {
    axios({
        method: 'Post',
        url:'https://jsonplaceholder.typicode.com/users',
        data:{
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
})


