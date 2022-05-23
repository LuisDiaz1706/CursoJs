

//   if (window.fetch != undefined) console.log('FETCH OK')
//   else console.log('FETCH NOT WORKS!')



const button = document.getElementById('button')

button.addEventListener("click",()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.ok ? Promise.resolve(resp) : Promise.reject(resp))
        .then(resp => resp.json())
            .then(resp => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of resp) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
    })