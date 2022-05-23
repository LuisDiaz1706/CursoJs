

const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

pendingTasks.addEventListener('dragstart',(e)=>{
   // console.log(e.dataTransfer)

   e.dataTransfer.setData('text-plan',e.target.id)
   console.log(e.dataTransfer.getData('text-plan'))
})

pendingTasks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')
})


pendingTasks.addEventListener('drag',(e)=>{
    e.target.classList.remove('active')
})

finishedTasks.addEventListener('dragover',(e)=>{
    e.preventDefault()
})


finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})