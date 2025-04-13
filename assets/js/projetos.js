const projetos = [
  {
    titulo: "Dashboard de Vendas Simples no Power BI",
    titulo_en: "Simple Sales Dashboard in Power BI",
    descricao: "Indicadores básicos de vendas segmentados por período.",
    descricao_en: "Basic sales indicators segmented by period.",
    imagem: "./assets/images/vendas-simples.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZmZkMDhiNWMtNTRiNS00ZGFkLTk3MDAtODM4NmZjZWU0MmJlIiwidCI6ImVjNmU0N2QyLWEwNGMtNGQ2Yy1iZjhmLWQ4ZWQyNzg1NzQ5YiJ9",
    nivel: "iniciante",
    destaque: true
  },
  {
    titulo: "Controle de Gastos Pessoais no Power BI",
    titulo_en: "Personal Expense Control in Power BI",
    descricao: "Painel de gastos mensais com filtros dinâmicos.",
    descricao_en: "Monthly expense dashboard with dynamic filters.",
    imagem: "./assets/images/gastos-pessoais.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Painel de Desempenho de Alunos no Power BI",
    titulo_en: "Student Performance Dashboard in Power BI",
    descricao: "Análise por escola, série, disciplina e média geral.",
    descricao_en: "Analysis by school, grade, subject, and average score.",
    imagem: "./assets/images/alunos.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Análise de Chamados de Suporte Técnico no Power BI",
    titulo_en: "IT Support Ticket Analysis in Power BI",
    descricao: "Acompanhamento de tickets por tipo e tempo de resposta.",
    descricao_en: "Monitoring of tickets by type and response time.",
    imagem: "./assets/images/suporte.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Acompanhamento de Treinamentos no Power BI",
    titulo_en: "Training Tracking in Power BI",
    descricao: "Indicadores de presença, nota e status de conclusão.",
    descricao_en: "Indicators of attendance, grade, and completion status.",
    imagem: "./assets/images/treinamentos.jpg",
    link: "#",
    nivel: "iniciante"
  },
  {
    titulo: "Análise de Produção e Desempenho de Fábrica",
    titulo_en: "Factory Production and Performance Analysis",
    descricao: "KPIs de produtividade e eficiência por turno.",
    descricao_en: "KPIs of productivity and efficiency by shift.",
    imagem: "./assets/images/fabrica.jpg",
    link: "#",
    nivel: "intermediario",
    destaque: true
  },
  {
    titulo: "Dashboard de Vendas e Logística de E-commerce",
    titulo_en: "E-commerce Sales and Logistics Dashboard",
    descricao: "Análise integrada de vendas e entregas.",
    descricao_en: "Integrated analysis of sales and deliveries.",
    imagem: "./assets/images/ecommerce.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Despesas e Orçamento Público",
    titulo_en: "Public Budget and Expense Analysis",
    descricao: "Visão de gastos, metas e execução orçamentária.",
    descricao_en: "View of expenses, goals, and budget execution.",
    imagem: "./assets/images/orcamento.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Painel de Indicadores de Desempenho de Funcionários",
    titulo_en: "Employee Performance Indicators Dashboard",
    descricao: "Acompanhamento de metas e produtividade individual.",
    descricao_en: "Tracking of goals and individual productivity.",
    imagem: "./assets/images/funcionarios.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Eficiência de Transportes e Logística Pública",
    titulo_en: "Public Logistics and Transportation Efficiency Analysis",
    descricao: "Tempo médio de entrega e custo por rota.",
    descricao_en: "Average delivery time and cost per route.",
    imagem: "./assets/images/logistica.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Desempenho de Marketing Digital",
    titulo_en: "Digital Marketing Performance Analysis",
    descricao: "Indicadores de campanhas, leads e conversões.",
    descricao_en: "Campaign, lead, and conversion indicators.",
    imagem: "./assets/images/marketing.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Indicadores de Atendimento em Call Centers",
    titulo_en: "Call Center Service Indicators Analysis",
    descricao: "Métricas de atendimento e satisfação dos clientes.",
    descricao_en: "Service and customer satisfaction metrics.",
    imagem: "./assets/images/callcenter.jpg",
    link: "#",
    nivel: "intermediario"
  },
  {
    titulo: "Análise de Sustentabilidade em Empresas",
    titulo_en: "Sustainability Analysis in Companies",
    descricao: "Indicadores ambientais e metas de ESG.",
    descricao_en: "Environmental indicators and ESG goals.",
    imagem: "./assets/images/sustentabilidade.jpg",
    link: "#",
    nivel: "intermediario",
    destaque: true
  },
  {
    titulo: "Análise de Indicadores Estratégicos Corporativos",
    titulo_en: "Corporate Strategic Indicator Analysis",
    descricao: "Métricas consolidadas de alta gestão e painéis executivos.",
    descricao_en: "Consolidated metrics for senior management and executive dashboards.",
    imagem: "./assets/images/estrategico.jpg",
    link: "#",
    nivel: "avancado",
    destaque: true
  },
  {
    titulo: "Integração de Múltiplas Fontes Governamentais em Power BI",
    titulo_en: "Integration of Multiple Government Sources in Power BI",
    descricao: "Fonte cruzada com dados de portais e APIs públicas.",
    descricao_en: "Cross-referenced data from portals and public APIs.",
    imagem: "./assets/images/governo.jpg",
    link: "#",
    nivel: "avancado"
  },
  {
    titulo: "Análise e Previsão de Demanda de Produtos",
    titulo_en: "Product Demand Forecasting and Analysis",
    descricao: "Previsão de demanda com séries temporais para estoque e logística.",
    descricao_en: "Demand forecasting with time series for inventory and logistics.",
    link: "#",
    nivel: "avancado",
    destaque: true
  },
  {
    titulo: "Análise de Riscos e Oportunidades em Investimentos",
    titulo_en: "Investment Risks and Opportunities Analysis",
    descricao: "Modelagem e visualização de risco-retorno em carteira de ativos.",
    descricao_en: "Modeling and visualization of risk-return in asset portfolios.",
    link: "#",
    nivel: "avancado"
  },
  {
    titulo: "Análise de Indicadores de Sustentabilidade",
    titulo_en: "Sustainability Indicator Analysis",
    descricao: "Monitoramento de KPIs ambientais e metas de ESG em indústria.",
    descricao_en: "Monitoring of environmental KPIs and ESG goals in industry.",
    link: "#",
    nivel: "avancado"
  },
  {
    titulo: "Análise de Desempenho em Marketing Digital e E-commerce",
    titulo_en: "Performance Analysis in Digital Marketing and E-commerce",
    descricao: "Avaliação de campanhas, funil de vendas e canais de aquisição.",
    descricao_en: "Evaluation of campaigns, sales funnel, and acquisition channels.",
    link: "#",
    nivel: "avancado"
  },
  {
    titulo: "Análise de Desempenho Operacional em Indústria 4.0",
    titulo_en: "Operational Performance Analysis in Industry 4.0",
    descricao: "Painel com sensores IoT, produção em tempo real e alertas inteligentes.",
    descricao_en: "Dashboard with IoT sensors, real-time production, and smart alerts.",
    link: "#",
    nivel: "avancado"
  }
];

export default projetos;
