var tabela = document.getElementById("teste");
var dados = JSON.parse(localStorage.getItem("Evento"));

function Eventos() {
  const inputLocal = document.getElementById("local").value;
  if (inputLocal == "--Selecione a opção") return;

  tabela.innerHTML = "";

  var header = document.createElement("tr");

  var th1 = document.createElement("th");
  th1.textContent = "Esporte";
  header.append(th1);

  var th2 = document.createElement("th");
  th2.textContent = "Local";
  header.append(th2);

  var th3 = document.createElement("th");
  th3.textContent = "Data";
  header.append(th3);

  var th4 = document.createElement("th");
  th4.textContent = "Horário";
  header.append(th4);

  var th5 = document.createElement("th");
  th5.textContent = "ID";
  header.append(th5);

  tabela.append(header);

  for (var i = 0; i < dados.length; i++) {
    const evento = dados[i];

    if (inputLocal == evento.local) {
      var tr = document.createElement("tr");

      for (j = 0; j < 5; j++) {
        var td = document.createElement("td");
        var texto = evento[Object.keys(evento)[j]];

        td.textContent = texto;
        tr.append(td);
      }

      tabela.append(tr);
    }
  }
}

function excluir() {
  //  criar verificação pra saber se: 1 - é numero, 2 - id existe
  const idEventoExcluido = prompt("Qual o ID do evento que você quer excluir?");

  const eventoQueSeraExcluido = dados.find(
    (evento) => evento.id == idEventoExcluido
  );

  const dadosSemEventoExcluido = dados.filter(
    (evento) => evento != eventoQueSeraExcluido
  );

  dados = dadosSemEventoExcluido;

  localStorage.setItem("Evento", JSON.stringify(dadosSemEventoExcluido));
}
