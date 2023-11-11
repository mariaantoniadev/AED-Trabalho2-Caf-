// cria referência aos elementos da página 
const frm = document.querySelector("form")
const imagem = document.querySelector("#capa")
const spanTotal = document.querySelector("#spanTotal")

let preco = 30
let quant = 1

// adiciona "ouvinte" de eventos ao programa
frm.selCesta.addEventListener("change", () => {
  preco = 30
  if (frm.selCesta.value == "cafe1") {
    imagem.src = "acompanhamento1.jpg"
  } else if (frm.selCesta.value == "cafe2") {
    imagem.src = "acompanhamento2.jpg"
  } else if (frm.selCesta.value == "cesta1") {
    imagem.src = "cesta1.png"
    preco = 112
  } else if (frm.selCesta.value == "cesta2") {
    imagem.src = "cesta2.png"
    preco = 100
  }  else if (frm.selCesta.value == "cesta3") {
    imagem.src = "cesta3.png"
    preco = 90
  } else if (frm.selCesta.value == "cesta4") {
    imagem.src = "cesta4.png"
    preco = 95
  } 
  mostrarTotal()
})

function mostrarTotal() {
  const total = quant * preco
  // muda o conteúdo de uma parte da página
  spanTotal.innerText = 
      total.toLocaleString("pt-br", {minimumFractionDigits: 2})
}

// quando a página é carregada
window.addEventListener("load", () => {
  mostrarTotal()
})

frm.selQuant.addEventListener("change", () => {
  quant = Number(frm.selQuant.value)
  mostrarTotal()
})