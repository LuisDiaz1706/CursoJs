const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')


// input.addEventListener("keyup",(e)=>{
//     console.log(e.explicitOriginalTarget.attributes[0].nodeValue);
// })

// addEventListener("click" , (e)=>{
//     console.log(e);

// })


button.addEventListener("click",(e)=>{
    console.log(e.target);
})
