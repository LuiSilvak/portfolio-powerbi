import projetos from './projetos.js';

let idiomaAtual = 'pt';

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
      img.onerror = () => img.remove(); // Remove imagem se não carregar
      card.appendChild(img);
    }

    const titulo = document.createElement('h3');
    titulo.textContent = idiomaAtual === 'en' ? projeto.titulo_en || projeto.titulo : projeto.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = idiomaAtual === 'en' ? projeto.descricao_en || projeto.descricao : projeto.descricao;

    const link = document.createElement('a');
    link.href = projeto.link || '#';
    link.target = '_blank';
    link.textContent = idiomaAtual === 'en' ? 'View Project' : 'Ver Projeto';

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
    const titulo = idiomaAtual === 'en' ? p.titulo_en || p.titulo : p.titulo;
    const porBusca = titulo.toLowerCase().includes(busca.toLowerCase());
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
  const pdfBtn = document.getElementById('pdfBtn');

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
    const tituloProjetos = document.querySelector('.main h2');
    const descricaoProjetos = document.querySelector('.main p');

    if (tituloDestaques) tituloDestaques.textContent = idiomaAtual === 'pt' ? '✨ Destaques' : '✨ Highlights';
    if (tituloProjetos) tituloProjetos.textContent = idiomaAtual === 'pt' ? 'Projetos Power BI' : 'Power BI Projects';
    if (descricaoProjetos) {
      descricaoProjetos.textContent = idiomaAtual === 'pt'
        ? 'Confira abaixo os projetos organizados por nível de complexidade:'
        : 'See below the projects organized by complexity level.';
    }

    const nivelAtual = document.querySelector('.tab.active')?.dataset.nivel || 'todos';
    const buscaAtual = searchInput?.value || '';
    filtrar(nivelAtual, buscaAtual);
  });

  // Exportar PDF
  pdfBtn?.addEventListener('click', () => {
    // Mostra todos os projetos antes de capturar
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    const todosBtn = document.querySelector('[data-nivel="todos"]');
    todosBtn?.classList.add('active');
  
    filtrar('todos');
  
    setTimeout(() => {
      const mainContent = document.querySelector('.main');
  
      const opt = {
        margin: [40, 40, 40, 40], // Espaçamento (top, left, bottom, right)
        filename: 'portfolio-luis-silva.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          scrollY: 0,
          useCORS: true
        },
        jsPDF: {
          unit: 'pt',
          format: 'a4',
          orientation: 'portrait'
        },
        pagebreak: {
          mode: ['css', 'avoid-all', 'legacy'],
          before: '.page-break'
        }
      };
  
      html2pdf().set(opt).from(mainContent).save();
    }, 600);
  });    

  // Carregamento inicial
  filtrar('todos');
});
