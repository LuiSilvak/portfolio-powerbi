// Filtro por Nível de Projeto (Tabs)
document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const nivel = button.dataset.nivel;

    document.querySelectorAll('.card').forEach(card => {
      if (nivel === 'todos' || card.classList.contains(nivel)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Atualiza resultado da busca após filtro
    document.getElementById('searchInput').dispatchEvent(new Event('input'));
  });
});

// Barra de Pesquisa (Filtro por texto)
document.getElementById('searchInput').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  const nivelAtivo = document.querySelector('.tab.active').dataset.nivel;

  document.querySelectorAll('.card').forEach(card => {
    const titulo = card.querySelector('h3').textContent.toLowerCase();
    const correspondeBusca = titulo.includes(termo);
    const correspondeNivel = nivelAtivo === 'todos' || card.classList.contains(nivelAtivo);

    card.style.display = (correspondeBusca && correspondeNivel) ? 'block' : 'none';
  });
});

// Alternância de Tema Claro/Escuro
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
