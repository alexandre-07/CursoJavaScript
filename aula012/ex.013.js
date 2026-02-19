var agora = new Date()
var diaSem = agora.getDay()
var resultado = ""


/*
    0  Domingo
    1  Segunda
    2  Terça
    3  Quarta
    4  Quinta
    5  Sexta
    6  Sábado
*/


switch(diaSem) {
    case 0:
        resultado = (`Domingo`)
        break
    case 1:
        resultado = (`Segunda`)
        break
    case 2:
        resultado = (`Terça`)
        break
    case 3:
        resultado = (`Quarta`)
        break
    case 4:
        resultado = (`Quinta`)
        break
    case 5:
        resultado = (`Sexta`)
        break
    case 6:
        resultado = (`Sabado`)
        break
    default:
        resultado = (`[Erro] Dia Invalido!`)
        break
}

console.log(`Hoje é ${resultado}`)