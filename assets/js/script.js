import projetos from './projetos.js';

// Renderiza os cards dinamicamente
function renderCards(lista, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = '';

  lista.forEach(projeto => {
    const card = document.createElement('div');
    const classes = `card check ${projeto.nivel}` + (projeto.destaque ? ' destaque' : '');
    card.className = classes.trim();

    if (projeto.imagem) {
      const img = document.createElement('img');
      img.src = projeto.imagem;
      img.alt = projeto.titulo;
      img.className = 'miniatura';
      card.appendChild(img);
    }

    const titulo = document.createElement('h3');
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = projeto.descricao;

    const link = document.createElement('a');
    link.href = projeto.link || '#';
    link.target = '_blank';
    link.textContent = 'Ver Projeto';

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(link);

    container.appendChild(card);
  });
}

function filtrar(nivel = 'todos', busca = '') {
  const destaques = projetos.filter(p => p.destaque);
  const listaFiltrada = projetos.filter(p => {
    const porNivel = nivel === 'todos' || p.nivel === nivel;
    const porBusca = p.titulo.toLowerCase().includes(busca.toLowerCase());
    return porNivel && porBusca;
  });

  renderCards(destaques, '.destaques-grid');
  renderCards(listaFiltrada, '.card-grid');
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const searchInput = document.getElementById('searchInput');
  const modoBtn = document.getElementById('modoBtn');
  const langBtn = document.getElementById('langToggleBtn');

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

  // Alternância de idioma
  langBtn?.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    langBtn.textContent = idiomaAtual === 'pt' ? '🌐 English' : '🌐 Português';

    const tituloDestaques = document.querySelector('#destaques h2');
    const tituloProjetos = document.querySelector('#projetos h2');
    const descricaoProjetos = document.querySelector('#projetos p');

    if (tituloDestaques) tituloDestaques.textContent = idiomaAtual === 'pt' ? '✨ Destaques' : '✨ Highlights';
    if (tituloProjetos) tituloProjetos.textContent = idiomaAtual === 'pt' ? 'Projetos Power BI' : 'Power BI Projects';
    if (descricaoProjetos) descricaoProjetos.textContent =
      idiomaAtual === 'pt'
        ? 'Confira abaixo os projetos organizados por nível de complexidade:'
        : 'See below the projects organized by complexity level.';
  });

  // Carregamento inicial
  let idiomaAtual = 'pt';
  filtrar('todos');
});
