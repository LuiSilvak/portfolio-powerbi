document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove classe ativa de todos os botões e seções
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Ativa o botão clicado e mostra a seção correspondente
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
