function acao(event) {
  const nome = document.getElementById("nome").value;
  const menssagem = document.getElementById("menssagemss").value;
  const fone = "5563992077518";

  const texto = `Olá! Me chamo ${nome}, ${menssagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${fone}/?text=${msgFormatada}`;
  window.open(url, "_blamk");
}

// Adiciona funcionalidade ao botão hamburguer
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
  this.querySelector("i").classList.toggle("fa-times");
  this.querySelector("i").classList.toggle("fa-bars");
});
