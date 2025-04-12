document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove todas as abas e seções ativas
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Ativa a aba clicada e mostra a seção correspondente
      tab.classList.add("active");
      const selected = tab.getAttribute("data-tab");
      document.getElementById(selected).classList.add("active");
    });
  });
});
