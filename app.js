let pig = document.getElementById("pig")

const cont = document.getElementById("contenedor")


const fraseRandom = ()=>{ return Math.round((Math.random() * (230 - 1) + 1))}

function crearModal  (){
    let cajaF = document.createElement("DIV");
    cajaF.classList.add("contenedor-modal")
    let fraseT = document.createElement("H3")
    fraseT.textContent= cFrase.frases[fraseRandom()].frase
    fraseT.classList.add("frase")
    cajaF.appendChild(fraseT)
    return cajaF
}

const ups = ()=>{
    let upsImg = document.createElement("IMG")
    upsImg.setAttribute("src","img/ups.png") 
    upsImg.classList.add("ups")
   
    return upsImg
}


// const btnX =()=>{
    
// }
// btnX()
{/* <i class="fas fa-times-circle"></i> */}
pig.addEventListener("click",()=>{
    pig.setAttribute("src","img/pigEnojado.png")
    cont.append(ups())
    setTimeout(function(){
        cont.appendChild(crearModal())
        

        let btn = document.createElement("I")
        btn.setAttribute("class","fas fa-times-circle btn")
        cont.appendChild(btn)
        btn.addEventListener("click",()=>{
            location.reload();

        })
    }, 1500)
})

