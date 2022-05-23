const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

const Formvalido = {
    name: false,
    gender:false,
    email:false,
    terms:false
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()


})

 const validaForm = () =>{
     const val = Object.values(Formvalido)
     const valid = val.findIndex(value => value == true)
     if(valid == -1 ) form.submit()
     else alert ('Formulario vacio')
 }


name.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) Formvalido.name = true
})

gender.addEventListener('change', (e) => {
    if(e.target.checked == true ) Formvalido.gender = true
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) Formvalido.email = true
})


terms.addEventListener('change', (e) => {
    Formvalido.terms = e.target.checked
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
})