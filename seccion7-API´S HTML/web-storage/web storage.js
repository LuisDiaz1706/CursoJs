


const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    // const person = {
    //     name: 'Luis',
    //     emil: 'luis@gmail.com'
    //  }

    // sessionStorage.setItem('person',JSON.stringify(person))

    sessionStorage.setItem(form.key.value,form.value.value)

    keys.innerHTML=`<option>${form.key.value} </option>`

    form.reset()
})

keys.addEventListener('change',(e)=>{
    document.getElementById('infoValue').textContent =
    sessionStorage.getItem(keys[keys.selectedIndex].textContent)

})