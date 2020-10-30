let esporte;
let local;
let data;
let horario;
let dados = [] 

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
  
  //dataFormatada = localStorage.setItem("dia", JSON.stringify(dados));// 

console.log(dataFormatada);

}

// function formataData() {
// pegarData(diaEvento);

// formatar mês;
// formatar dia;
// formatar ano;

//     let dataFormatada = ((diaEvento.getDate() )) + "/" + ((diaEvento.getMonth() + 1)) + "/" + diaEvento.getFullYear(); 
    
//     console.log(dataFormatada);

// }

function pegarHorario() {
  const hora = document.getElementById("inputHora").value;
  const minuto = document.getElementById("inputMinuto").value;

  horario = `${hora}:${minuto}`;
  console.log(horario)
}

function criarObjeto(){

}

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


  /*function editar(){

    dados.esporte = esporte.value
    dados.local = local.value
    dados.data = data.value
    dados.horario = horario.value

     swal("Dados atualizados com sucesso!")
     localStorage.setItem("Evento", JSON.stringify(dados))

} */

function excluir(){
  let exclusao = esporte.value
   dados = JSON.parse(localStorage.getItem("Eventos"))

    for(i=0; i < dados.length; i++){

      if(dados[i].esporte == exclusao) {

          dados.splice(i, 1)

      }
      
}}




