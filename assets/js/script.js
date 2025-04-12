document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    // Remove classe ativa de todos os botões
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    // Adiciona classe ativa ao botão clicado
    button.classList.add('active');

    const nivel = button.dataset.nivel;

    // Mostra ou oculta os cards de acordo com o nível
    document.querySelectorAll('.card').forEach(card => {
      if (nivel === 'todos' || card.classList.contains(nivel)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
