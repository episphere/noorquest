console.log(`noorquest.js loaded at ${Date()}`)

noorUI=(div="noorQuestDiv")=>{
    if(typeof(div)=='string'){
        div=document.getElementById(div)
    }
    console.log('some NickMarvelousThing happens in the right div',div)
}


noorUI()