function carregar(){
    let msg = document.querySelector("#msg")
    let img = document.querySelector("#imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML =  `Agora sao ${hora} horas`
    
    if (hora >= 0 && hora < 12){
       //BOM DIA 
       img.src = "fundomanha.png" 
       document.body.style.background = "#fdb41c"
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = "fundotarde.png"
        document.body.style.background = "#fddfbd"
    } else {
        //BOA NOITE
        img.src = "fundonoite.png"
        document.body.style.background = "#2a3a59"
    }
}
