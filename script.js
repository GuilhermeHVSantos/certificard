function alterarTema() {
  document.body.classList.toggle("dark");
  var botao = document.querySelector("button");
  if (botao.innerText === "dark") {
    botao.innerText = "light";
  } else if (botao.innerText === "light") {
    botao.innerText = "dark";
  }
}