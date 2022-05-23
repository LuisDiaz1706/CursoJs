// Expresiones regulares:
// Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente 
//utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions



const text =  document.getElementById('text').textContent
const regEx = /lorem/gi
const regEx1 = new RegExp('lorem','gi')
const regEx2 = new RegExp('/lorem/',gi)



console.log(regEx.test(text))


