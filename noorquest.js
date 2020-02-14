console.log(`noorquest.js loaded at ${Date()}`)

noorUI=async (divId='noorQuestDiv',url='https://episphere.github.io/quest/questionnaires/demo2.txt')=>{
    if(typeof(divId)=='string'){
        noorUI.div=document.getElementById(divId)
    }else{
         noorUI.div=divId
    }
    if(!noorUI.div){
        error('div not found')
    }
    console.log('some NickMarvelousThing happens in the right div',noorUI.div)
    noorUI.txt = await (await fetch(url)).text()
    noorUI.div.innerHTML=marvelousNick(noorUI.txt)
}

noorUI()
