const projetos = [
  {
    titulo: "Dashboard de Vendas Simples no Power BI",
    descricao: "Indicadores básicos de vendas segmentados por período.",
    imagem: "./assets/images/vendas-simples.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Controle de Gastos Pessoais no Power BI",
    descricao: "Análise de gastos mensais com filtros dinâmicos.",
    imagem: "./assets/images/gastos-pessoais.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Painel de Desempenho de Alunos no Power BI",
    descricao: "Análise por escola, série, disciplina e média geral.",
    imagem: "./assets/images/alunos-desempenho.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Análise de Chamados de Suporte Técnico no Power BI",
    descricao: "Acompanhamento de tickets por tipo e tempo de resposta.",
    imagem: "./assets/images/chamados-suporte.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Acompanhamento de Treinamentos no Power BI",
    descricao: "Indicadores de presença, nota e status de conclusão.",
    imagem: "./assets/images/treinamentos.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Análise de Produção e Desempenho de Fábrica",
    descricao: "KPIs de produtividade e eficiência por turno.",
    imagem: "./assets/images/producao-fabrica.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Dashboard de Vendas e Logística de E-commerce",
    descricao: "Análise integrada de vendas e entregas.",
    imagem: "./assets/images/ecommerce-logistica.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Despesas e Orçamento Público",
    descricao: "Visão de gastos, metas e execução orçamentária.",
    imagem: "./assets/images/orcamento-publico.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Painel de Indicadores de Desempenho de Funcionários",
    descricao: "Acompanhamento de metas e produtividade individual.",
    imagem: "./assets/images/desempenho-funcionarios.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Eficiência de Transportes e Logística Pública",
    descricao: "Tempo médio de entrega e custo por rota.",
    imagem: "./assets/images/logistica-publica.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Desempenho de Marketing Digital",
    descricao: "Indicadores de campanhas, leads e conversões.",
    imagem: "./assets/images/marketing-digital.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Indicadores de Atendimento em Call Centers",
    descricao: "Métricas de atendimento e satisfação dos clientes.",
    imagem: "./assets/images/callcenter.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Sustentabilidade em Empresas",
    descricao: "Indicadores ambientais e metas de ESG.",
    imagem: "./assets/images/sustentabilidade.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Indicadores Estratégicos Corporativos",
    descricao: "Métricas consolidadas de alta gestão e painéis executivos.",
    imagem: "./assets/images/estrategico.jpg",
    link: "#",
    nivel: "avancado"
  },
  {
    titulo: "Integração de Múltiplas Fontes Governamentais em Power BI",
    descricao: "Fonte cruzada com dados de portais e APIs públicas.",
    imagem: "./assets/images/fontes-governamentais.jpg",
    link: "#",
    nivel: "avancado"
  }
];

function carregarProjetos() {
  const container = document.getElementById("grid-projetos");
  container.innerHTML = "";

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.className = `card check ${projeto.nivel}`;
    card.innerHTML = `
      <img src="${projeto.imagem}" alt="Miniatura do projeto" onerror="this.style.display='none'" />
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", carregarProjetos);
