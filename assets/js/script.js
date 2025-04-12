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
  });
});
