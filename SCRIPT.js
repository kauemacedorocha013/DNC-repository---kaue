var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")

function rolarparadireita(){
    bruna.style = "display:none"
    samanta.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}
function rolarparaesquerda(){
    samanta.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:felx"
    setaEsquerda.style = "display:none"
}