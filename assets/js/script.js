import projetos from './projetos.js';

// Renderiza os cards dinamicamente
function renderCards(lista) {
  const container = document.querySelector('.card-grid');
  if (!container) return;

  container.innerHTML = '';

  lista.forEach(projeto => {
    const card = document.createElement('div');
    card.className = `card check ${projeto.nivel}`;

    const titulo = document.createElement('h3');
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = projeto.descricao;

    const link = document.createElement('a');
    link.href = projeto.link;
    link.target = '_blank';
    link.textContent = 'Ver Projeto';

    // miniatura
    if (projeto.imagem) {
      const img = document.createElement('img');
      img.src = projeto.imagem;
      img.alt = '';
      img.className = 'miniatura';
      card.appendChild(img);
    }

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(link);

    container.appendChild(card);
  });
}

function filtrar(nivel = 'todos', busca = '') {
  const listaFiltrada = projetos.filter(projeto => {
    const porNivel = nivel === 'todos' || projeto.nivel === nivel;
    const porBusca = projeto.titulo.toLowerCase().includes(busca.toLowerCase());
    return porNivel && porBusca;
  });

  renderCards(listaFiltrada);
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const searchInput = document.getElementById('searchInput');
  const modoBtn = document.getElementById('modoBtn');

  // Filtro por tab
  tabs.forEach(button => {
    button.addEventListener('click', () => {
      tabs.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const nivel = button.dataset.nivel;
      const busca = searchInput?.value || '';
      filtrar(nivel, busca);
    });
  });

  // Pesquisa
  searchInput?.addEventListener('input', e => {
    const nivel = document.querySelector('.tab.active')?.dataset.nivel || 'todos';
    filtrar(nivel, e.target.value);
  });

  // Modo claro/escuro
  modoBtn?.addEventListener('click', () => {
    document.body.classList.toggle('claro');
  });

  // Carregamento inicial
  filtrar('todos');
});