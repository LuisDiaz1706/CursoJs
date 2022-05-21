

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')



 
const itemlist = document.createElement("li")
itemlist.textContent='Lunes'

daysList.appendChild(itemlist)

title.innerHTML = ("<span>Crear e insertar elementos I<span>")

console.log(itemlist)


const fragment = document.createDocumentFragment("")

for(const day of days){
    const itemlist = document.createElement("li")
itemlist.textContent= day
fragment.appendChild(itemlist)

console.log(fragment)
}

daysList.appendChild(fragment)


for(const day of days){
    const selectitem = document.createElement('option')
    selectitem.setAttribute('value',day.toLocaleLowerCase())
    selectitem.textContent=day
    fragment.appendChild(selectitem)
}

selectDays.appendChild(fragment);