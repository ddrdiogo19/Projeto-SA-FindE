function eventos() {

    let listacompleta = ''
      dados = JSON.parse(localStorage.getItem("Evento"))
    
          for (i=0; i < dados.length; i++){
    
              listacompleta += (Object.values(dados[i]).join(' , ')) + '<br>'
              i = local.value
            }
    
          document.getElementById("resposta").innerHTML = listacompleta
      
    } 