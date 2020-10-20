let selectEsporte = document.getElementById("esportesSelect").value;

let selectLocal = document.getElementById("local").value;

let diaEvento = document.getElementById("dia").value;

let horaEvento = document.getElementById("hora").value;

let eventos = [];

function Evento (selectEsporte, selectLocal, diaEvento, horaEvento){
     
    this.selectEsporte = selectEsporte 
    this.selectLocal = selectLocal
    this.diaEvento = diaEvento
    this.horaEvento = horaEvento  
}

function cadastrarEvento(){

    eventos = JSON.parse(localStorage.getItem("Evento")) 
    add = new Evento (selectEsporte.value, selectLocal.value, diaEvento.value, horaEvento.value)
    eventos.push(add)
    localStorage.setItem("Evento", JSON.stringify(eventos))
    console.log(add)
    
}



// function pular {


// }

// function editar {


// }


// let dados = []

