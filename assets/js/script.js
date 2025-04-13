import projetos from './projetos.js';

let idiomaAtual = 'pt';

// Traduções fixas
const traducoes = {
  pt: {
    tabs: {
      todos: '🔷 Todos',
      iniciante: '✅ Iniciante',
      intermediario: '📊 Intermediário',
      avancado: '🧠 Avançado'
    },
    searchPlaceholder: '🔍 Pesquisar projeto...',
    destaques: '✨ Destaques',
    projetoBtn: 'Ver Projeto',
    tituloPrincipal: 'Projetos Power BI',
    descricaoPrincipal: 'Confira abaixo os projetos organizados por nível de complexidade:',
    contato: 'Contato',
    repositorios: 'Repositórios',
    cidade: 'São Luís – MA'
  },
  en: {
    tabs: {
      todos: '🔷 All',
      iniciante: '✅ Beginner',
      intermediario: '📊 Intermediate',
      avancado: '🧠 Advanced'
    },
    searchPlaceholder: '🔍 Search project...',
    destaques: '✨ Highlights',
    projetoBtn: 'View Project',
    tituloPrincipal: 'Power BI Projects',
    descricaoPrincipal: 'See below the projects organized by complexity level.',
    contato: 'Contact',
    repositorios: 'Repositories',
    cidade: 'São Luís – MA'
  }
};

// Renderiza os cards dinamicamente
function renderCards(lista, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = '';

  lista.forEach(projeto => {
    const card = document.createElement('div');
    const classes = `card check ${projeto.nivel}` + (projeto.destaque ? ' destaque' : '');
    card.className = classes.trim();

    if (projeto.imagem && projeto.imagem.trim() !== '') {
      const img = document.createElement('img');
      img.src = projeto.imagem;
      img.alt = projeto.titulo;
      img.className = 'miniatura';
      img.onerror = () => img.remove();
      card.appendChild(img);
    }

    const titulo = document.createElement('h3');
    titulo.textContent = idiomaAtual === 'en' ? projeto.titulo_en || projeto.titulo : projeto.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = idiomaAtual === 'en' ? projeto.descricao_en || projeto.descricao : projeto.descricao;

    const link = document.createElement('a');
    link.href = projeto.link || '#';
    link.target = '_blank';
    link.textContent = traducoes[idiomaAtual].projetoBtn;

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Aplica filtragem por nível e busca
function filtrar(nivel = 'todos', busca = '') {
  const destaques = projetos.filter(p => p.destaque);
  const listaFiltrada = projetos.filter(p => {
    const porNivel = nivel === 'todos' || p.nivel === nivel;
    const titulo = idiomaAtual === 'en' ? p.titulo_en || p.titulo : p.titulo;
    const porBusca = titulo.toLowerCase().includes(busca.toLowerCase());
    return porNivel && porBusca;
  });

  renderCards(destaques, '.destaques-grid');
  renderCards(listaFiltrada, '.card-grid');
}

// Executa após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const searchInput = document.getElementById('searchInput');
  const modoBtn = document.getElementById('modoBtn');
  const langBtn = document.getElementById('langToggleBtn');

  // Alternância entre abas (níveis)
  tabs.forEach(button => {
    button.addEventListener('click', () => {
      tabs.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const nivel = button.dataset.nivel;
      const busca = searchInput?.value || '';
      filtrar(nivel, busca);
    });
  });

  // Filtro por texto da busca
  searchInput?.addEventListener('input', e => {
    const nivel = document.querySelector('.tab.active')?.dataset.nivel || 'todos';
    filtrar(nivel, e.target.value);
  });

  // Alternância entre temas claro/escuro
  modoBtn?.addEventListener('click', () => {
    document.body.classList.toggle('claro');
  });

  // Alternância de idioma
  langBtn?.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    langBtn.textContent = idiomaAtual === 'pt' ? '🌐 English' : '🌐 Português';

    // Tradução das tabs
    tabs.forEach(tab => {
      const key = tab.dataset.nivel;
      tab.innerHTML = traducoes[idiomaAtual].tabs[key];
    });

    // Placeholder da busca
    if (searchInput) {
      searchInput.placeholder = traducoes[idiomaAtual].searchPlaceholder;
    }

    // Destaques título
    const tituloDestaques = document.querySelector('.destaques-titulo');
    if (tituloDestaques) tituloDestaques.textContent = traducoes[idiomaAtual].destaques;

    // Cabeçalho e descrição principal
    const tituloProjetos = document.querySelector('.main h2');
    const descricaoProjetos = document.querySelector('.main p');
    if (tituloProjetos) tituloProjetos.textContent = traducoes[idiomaAtual].tituloPrincipal;
    if (descricaoProjetos) descricaoProjetos.textContent = traducoes[idiomaAtual].descricaoPrincipal;

    // Sidebar
    document.querySelectorAll('.sidebar ul li').forEach(li => {
      if (li.textContent.includes('Contato') || li.textContent.includes('Contact')) {
        li.innerHTML = `<ion-icon name="mail-outline"></ion-icon>${traducoes[idiomaAtual].contato}`;
      }
      if (li.textContent.includes('Repositórios') || li.textContent.includes('Repositories')) {
        li.innerHTML = `<ion-icon name="logo-github"></ion-icon>${traducoes[idiomaAtual].repositorios}`;
      }
      if (li.textContent.includes('São Luís')) {
        li.innerHTML = `<ion-icon name="location-outline"></ion-icon>${traducoes[idiomaAtual].cidade}`;
      }
    });

    // Reaplica filtros com idioma atualizado
    const nivelAtual = document.querySelector('.tab.active')?.dataset.nivel || 'todos';
    const buscaAtual = searchInput?.value || '';
    filtrar(nivelAtual, buscaAtual);
  });

  // Carregamento inicial
  filtrar('todos');
});
