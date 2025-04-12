// Ativa tab de filtro por nível
document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const nivel = button.dataset.nivel;
    filtrarProjetos(nivel, document.getElementById("pesquisa").value.trim().toLowerCase());
  });
});

// Ativa pesquisa por texto
document.getElementById("pesquisa").addEventListener("input", () => {
  const nivel = document.querySelector('.tab.active').dataset.nivel;
  const termo = document.getElementById("pesquisa").value.trim().toLowerCase();
  filtrarProjetos(nivel, termo);
});

// Função para aplicar filtro de nível + texto
function filtrarProjetos(nivel, termo) {
  document.querySelectorAll('.card').forEach(card => {
    const correspondeNivel = nivel === "todos" || card.classList.contains(nivel);
    const correspondeTexto = termo === "" || card.textContent.toLowerCase().includes(termo);
    card.style.display = (correspondeNivel && correspondeTexto) ? "block" : "none";
  });
}

// Modo Claro/Escuro
const toggleBtn = document.getElementById("modo-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  toggleBtn.innerText = document.body.classList.contains("claro")
    ? "🌙 Modo Escuro"
    : "☀️ Modo Claro";
});
