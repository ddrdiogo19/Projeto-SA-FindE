var regiaoSelecionada = document.getElementsByClassName("eventos");



function Evento() {

  let listacompleta = ''
  armazenados = JSON.parse(localStorage.getItem("livros"))

      for (i=0; i < armazenados.length; i++){

          listacompleta += (Object.values(armazenados[i]).join(' , ')) + '<br>'

      }

      document.getElementById("Resultado").innerHTML = listacompleta
  
} 

function Evento() {


}

function Voltar() {

  
}