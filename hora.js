const { cursos } = require("./cursos")

var date = new Date()

var hora = date.getHours()
var min = date.getMinutes()

function calc(hora, min, prazo){
    prazoEntrega = min + prazo
    if(prazoEntrega >= 60){
        while(prazoEntrega >= 60){
            hora = hora + 1
            prazoEntrega = prazoEntrega - 60
            
            min = prazoEntrega
        }
    }else {
        min = prazoEntrega
    }
    return`${hora}:${min<10?'0'+min : min}`
}

console.log(calc(hora, min, 126))
