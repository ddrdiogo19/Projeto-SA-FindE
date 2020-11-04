function Eventos() {

  const inputLocal = document.getElementById("local").value;

  let listacompleta = ''
    dados = JSON.parse(localStorage.getItem("Evento"));

        for (i=0; i < dados.length; i++){
          const esporte = dados[i].esporte;
          const local = dados[i].local;
          const dataFormatada = dados[i].dataFormatada;
          const horario = dados[i].horario;
          
  if (local == inputLocal) {
    const evento = `Esporte: ${esporte}, Local: ${local}, Dia: ${dataFormatada}, Hora: ${horario}`
  
    listacompleta += evento + '<br> <br>'
    }
}
        document.getElementById("resposta").innerHTML = listacompleta

  } 
   