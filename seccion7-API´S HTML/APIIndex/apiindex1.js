const indexedB = window.indexedDB

if(indexedB){
    let db 
    const request = indexedB.open('taskList',1)
    request.onsuccess=()=>{
        db=request.result
        console.log('Open',db)
    }
request.onupgradeneeded=()=>{
db=request.result
console.log('Create',db)
const objStore= db.createObjectStore("task")
}
request.onerror=(error)=>{
    console.log('Error',error)
}
    }



