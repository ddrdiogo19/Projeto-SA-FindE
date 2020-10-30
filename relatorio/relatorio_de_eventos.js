function Eventos() {

    let listacompleta = ''
      dados = JSON.parse(localStorage.getItem("Evento"))
    
          for (i=0; i < dados.length; i++){
    
              listacompleta += (Object.values(dados[i]).join(' , ')) + '<br>'
            }
    
          document.getElementById("resposta").innerHTML = listacompleta
      
    } 
