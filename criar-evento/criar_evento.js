// let selectEsporte = document.getElementById("esportesSelect");
// let selectLocal = document.getElementById("local");
// let diaEvento = document.getElementById("dia").valueAsDate;
// let horaEvento = document.getElementById("hora").valueAsNumber;

// let eventosCadastrados = []

// function Evento (selectEsporte, selectLocal, diaEvento, horaEvento){
     
//     this.selectEsporte = selectEsporte 
//     this.selectLocal = selectLocal
//     this.diaEvento = diaEvento
//     this.horaEvento = horaEvento  
// }

// function cadastrarEvento(){

//     eventosCadastrados = JSON.parse(localStorage.getItem("Evento")) 
//     add = new Evento (selectEsporte.value, selectLocal.value, diaEvento, horaEvento)
//     eventosCadastrados.push(add)
//     localStorage.setItem("Evento", JSON.stringify(eventosCadastrados))
//     // console.log(add)
//     alert(selectEsporte)
// }



// function pular {


// }

// function editar {


// }


// let dados = []



// date 

// var today = new Date(); //Gravo a data atual na variavel
// today.setDate(today.getDate() + 7); //Adiciono 7 dias 
// today = today.toISOString().split('T')[0]; //Formato a data

// var hoje = new Date();
//   if (agendamento <= hoje) {
//     alert('Por favor, insira uma data válida!');

// date

// var input = document.getElementById('ultimoDiaTrab');
// input.addEventListener('change', function() {
//   var agora = new Date();
//   var escolhida = new Date(this.value);
//   if (escolhida < agora) this.value = [agora.getFullYear(), agora.getMonth() + 1, agora.getDate()].map(v => v < 10 ? '0' + v : v).join('-');
// });

// Neste caso this.value = [agora.getFullYear(), agora.getMonth() + 1, agora.getDate()].map(v => v < 10 ? '0' + v : v).join('-'); repoõe a data escolhida com a data atual, se quiseres somente apagar podes fazer this.value = '';