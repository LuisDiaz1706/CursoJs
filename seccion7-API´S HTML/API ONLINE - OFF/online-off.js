const alert = document.getElementById('alert')


addEventListener('online',(e)=>{
setAlert(1)
})

addEventListener('offline',(e)=>{
    setAlert(0)
})

const setAlert = (status )=>{
alert.classList.remove('alert--online')
alert.classList.remove('alert--ofline')

    status === 0 ? 
    setTimeout(()=>{
        alert.textContnet = 'Estas desconectado'
        alert.classList.add('alert--ofline')
    },100)
    :
    setTimeout(()=>{
        alert.textContnet = 'Estas devuelta'
        alert.classList.add('alert--online')
    },100);
}