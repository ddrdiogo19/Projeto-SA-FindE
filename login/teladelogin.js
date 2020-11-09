const element = document.querySelector("form");
const data = JSON.parse(localStorage.getItem("Pessoa"));
let isAuthorized = false;

element.addEventListener("submit", (event) => {
  //    previne atualização da página
  event.preventDefault();
  login();
});

//  função que recebe login e senha como parametros e busca eles no array de logins
function validateLogin(username, password) {
  data.find((user, index) => {
    if (user.usuario == username && user.senha == password) {
      isAuthorized = true;
      console.log("Login authorized!");
    }
  });
}

function login() {
  const user = document.getElementById("usuario").value;
  const password = document.getElementById("senha").value;

  validateLogin(user, password);

  if (isAuthorized)
    document.location.href = "../relatorio/relatorio_de_eventos.html";
  else alert("Usuário ou senha inválidos");
}
