function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.querySelector("#txtano")
    let res = document.querySelector("#res")

    if (fAno.value.length == 0 || fAno.value > ano){
        alert("Verifique os dados e tente novamente!")
    } else{
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fAno.value)
        let genero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imagens/bebe-m.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "imagens/jovem-m.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imagens/homem.jpg")
            } else {
                //idoso
                img.setAttribute("src", "imagens/idoso.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imagens/bebe-f.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "imagens/jovem-f.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imagens/mulher.jpg")
            } else {
                //idoso
                img.setAttribute("src", "imagens/idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}