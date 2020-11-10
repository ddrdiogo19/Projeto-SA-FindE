let esporte;
let local;
let dia;
let mes;
let ano;
let horario;
let dados = []; //  [{"esporte": esporte, "local": local, ...}];

function pegarEsporte() {
  const selectEsporte = document.getElementById("esportesSelect").value;

  esporte = selectEsporte;
  console.log(esporte);
}

function pegarLocal() {
  const selectLocal = document.getElementById("local").value;

  local = selectLocal;
  console.log(local);
}

function pegarData() {
  let dia = document.getElementById("inputDia").value;
  let mes = document.getElementById("inputMes").value;
  let ano = document.getElementById("inputAno").value;

  dataFormatada = `${dia}-${mes}-${ano}`;
  console.log(dataFormatada);
}

function pegarHorario() {
  const hora = document.getElementById("inputHora").value;
  const minuto = document.getElementById("inputMinuto").value;

  horario = `${hora}:${minuto}`;
  console.log(horario);
}

function pegarDadosNoLocalStorage() {
  dados = JSON.parse(localStorage.getItem("Evento"));
}

function salvarDadosNoLocalStorage() {
  pegarDadosNoLocalStorage();
  localStorage.setItem("Evento", JSON.stringify(dados));
}

function cadastrar() {
  pegarEsporte();
  pegarLocal();
  pegarData();
  pegarHorario();
  salvarDadosNoLocalStorage();

  function Evento(esporte, local, dataFormatada, horario) {
    this.esporte = esporte;
    this.local = local;
    this.dataFormatada = dataFormatada;
    this.horario = horario;
  }

  dados = JSON.parse(localStorage.getItem("Evento"));

  if (dados == null) {
    dados = [];
    add = new Evento(esporte, local, dataFormatada, horario);
    dados.push(add);
    localStorage.setItem("Evento", JSON.stringify(dados));
    alert("Seu evento foi cadastrado com sucesso");
  } else {
    add = new Evento(esporte, local, dataFormatada, horario);
    dados.push(add);
    localStorage.setItem("Evento", JSON.stringify(dados));
    alert("Seu evento foi cadastrado com sucesso");
  }
}
