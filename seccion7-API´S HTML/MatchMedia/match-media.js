/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

const applyMatchMedia = mql =>{
    mql.matchMedia ?
title.classList.add('class')

 //   document.body.style.backgroundColor='red'
    :
    title.classList.add('class')
    //document.body.style.backgroundColor='blue'

}

addEventListener('resize',()=> applyMatchMedia(mql))
addEventListener('DOMContentLoaded',()=> applyMatchMedia(mql))
applyMatchMedia(mql)