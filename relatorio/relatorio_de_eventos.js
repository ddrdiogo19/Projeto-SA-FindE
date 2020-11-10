var tabela = document.getElementById("teste");
var dados = JSON.parse(localStorage.getItem("Evento"));

function Eventos() {
  const inputLocal = document.getElementById("local").value;

  tabela.innerHTML = "";

  if (inputLocal != "--Selecione a opção") {
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

    tabela.append(header);
  }

  for (var i = 0; i < dados.length; i++) {
    const evento = dados[i];

    if (inputLocal == evento.local) {
      var tr = document.createElement("tr");

      for (j = 0; j < 4; j++) {
        var td = document.createElement("td");
        var texto = evento[Object.keys(evento)[j]];

        td.textContent = texto;
        tr.append(td);
      }

      tabela.append(tr);
    }
  }
}
