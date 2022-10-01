var entrada = require('readline-sync')

var nomes = []
var idades = []
var sexos = []
var contador = 0
var opcao = -1


while (opcao !== 0) {
    console.log("0, 1, 2 ou 3: ")
    opcao = parseInt(entrada.question("Opcao: "))
    if (opcao !== "") {
        if (opcao === 0) {
            console.log("Encerrou...")
        } else if (opcao === 1) {
            var nome = entrada.question("Nome? ")
            //...dados completos
            if (nome !== "") {
                nomes[contador] = nome
                contador++
            } else {
                console.log("O nome é obrigatório")
            }
        } else if (opcao === 2) {
            if (nomes.length > 0) {
                var nomeConsulta = entrada.question("Consulta: ")
                if (nomeConsulta !== "") {
                    var indice = -1
                    var achou = false
                    for (var i = 0; i < nomes.length; i++) {
                        if (nomeConsulta === nomes[i]) {
                            indice = i
                            achou = true
                        }
                    }
                    if (achou === true) {
                        console.log(nomes[indice])
                    } else {
                        console.log("Usuário nao encontrado")
                    }
                } else {
                    console.log("Informe um nome para consulta")
                }
            } else {
                console.log("Nao ha usuarios")
            }
        } else if (opcao === 3) {
            if (nomes.length > 0) {
                for (var i = 0; i < nomes.length; i++) {
                    console.log(nomes[i])
                }
            } else {
                console.log("Não há usuarios cadastrados")
            }
        } else {
            console.log("opcao inválida...")
        }
    } else {
        console.log("A opcao não pode ser vazia...")
    }
}