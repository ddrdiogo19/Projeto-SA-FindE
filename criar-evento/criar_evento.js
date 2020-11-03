let esporte;
let local;
let data;
let horario;
let dados = []
let arrayInformações = {
  esporte: '', local: '', data: '', horario: ''
}

function pegarEsporte() {
  const selectEsporte = document.getElementById("esportesSelect").value;

  esporte = selectEsporte;
  console.log(esporte)
}

function pegarLocal() {
  const selectLocal = document.getElementById("local").value;
  
  local = selectLocal
  console.log(local)
}

function pegarData() {
  
  let diaEvento = document.getElementById('dia').value.split('-'),
  dataFormatada = ((`${diaEvento[2]}-${diaEvento[1]}-${diaEvento[0]}`))
  
  // dataFormatada = localStorage.setItem("dia", JSON.stringify(dados));

  console.log(dataFormatada);

}


function pegarHorario() {
  const hora = document.getElementById("inputHora").value;
  const minuto = document.getElementById("inputMinuto").value;

  horario = `${hora}:${minuto}`;
  console.log(horario)
}

// function criarObjeto(){

// }

function pegarDadosNoLocalStorage() {
  dados = JSON.parse(localStorage.getItem("Evento")) 
}

function salvarDadosNoLocalStorage(){
  pegarDadosNoLocalStorage();
  //  dados.push(objeto)
  localStorage.setItem("Evento", JSON.stringify(dados));
}

function cadastrar(){
  pegarEsporte();
  pegarLocal();
  pegarData();
  pegarHorario();
  criarObjeto();
  salvarDadosNoLocalStorage();

  function Evento (esporte, local, data, horario){
     
    this.esporte = esporte 
    this.local = local
    this.data = data
    this.horario = horario  
}

dados = JSON.parse(localStorage.getItem("Evento")) 

       if (dados == null){

        dados = []
        add = new Evento (esporte, local, data, horario)
        dados.push(add)
        localStorage.setItem("Evento", JSON.stringify(dados))
         alert ("Seu evento foi cadastrado com sucesso")

     } else{

        add = new Evento (esporte, local, data, horario)
         dados.push(add)
         localStorage.setItem("Evento", JSON.stringify(dados))
        alert ("Seu evento foi cadastrado com sucesso")

     }
  }


// // function editar(){
  
//     eventosCadastrados[indicepesquisa].selectEsporte = selectEsporte.value
//     eventosCadastrados[indicepesquisa].selectLocal = selectLocal.value
//     eventosCadastrados[indicepesquisa].diaEvento = diaEvento.value
//     eventosCadastrados[indicepesquisa].horaEvento = horaEvento.value
 

//           dados.splice(i, 1)

//       }
      
// }}




