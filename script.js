// Espera o DOM estar carregado
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active de todos os botões e seções
      buttons.forEach(btn => btn.classList.remove("active"));
      sections.forEach(sec => sec.classList.remove("active"));

      // Adiciona active ao botão clicado
      button.classList.add("active");

      // Mostra a seção correspondente
      const page = button.getAttribute("data-page");
      const targetSection = document.getElementById(page);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});

