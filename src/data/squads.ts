export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  frameworks: string[];
  personality: string;
  color: string;
  initials: string;
  isChief?: boolean;
  photo?: string;
  bio?: string;
}

export interface Task {
  id: string;
  name: string;
  filename: string;
  command: string;
}

export interface WorkflowStep {
  agent: string;
  agentId: string;
  action: string;
  output: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  duration: string;
  command: string;
  steps: WorkflowStep[];
}

export interface Squad {
  slug: string;
  name: string;
  version: string;
  icon: string;
  description: string;
  tags: string[];
  accent: string;
  agents: Agent[];
  tasks: Task[];
  workflows: Workflow[];
}

export const squads: Squad[] = [
  {
    slug: "advisory-board",
    name: "Advisory Board",
    version: "v1.0.0",
    icon: "Crown",
    description: "Board de 11 conselheiros estrategicos — Ray Dalio, Charlie Munger, Naval Ravikant, Peter Thiel, Reid Hoffman, Simon Sinek, Brene Brown, e mais.",
    tags: ["strategy", "investment", "leadership", "mental-models", "scaling", "purpose", "entrepreneurship"],
    accent: "#E8C547",
    agents: [
      { id: "board-chair", name: "Board Chair", role: "Orquestrador Estrategico", specialty: "Sintese de sabedoria e facilitacao de decisoes", description: "Inteligencia facilitadora que conecta 10 conselheiros de classe mundial. Diagnóstico, roteamento e síntese de perspectivas múltiplas.", frameworks: ["Diagnóstico Estratégico", "Síntese Multi-perspectiva", "Tensão Produtiva"], personality: "Analítico, facilitador, sintetizador", color: "#E8C547", initials: "BC", isChief: true , bio: "Orquestrador estratégico do conselho consultivo. Facilita sessões entre 10 conselheiros de classe mundial, sintetizando perspectivas múltiplas em recomendações acionáveis para decisões complexas de negócio."},
      { id: "ray-dalio", name: "Ray Dalio", role: "Principios & Ciclos", specialty: "Princípios sistemáticos e ciclos econômicos", description: "Construtor do maior hedge fund do mundo. Meritocracy de ideias, transparência radical e pensamento peso-por-credibilidade.", frameworks: ["5-Step Process", "Principled Decision-Making", "Radical Transparency"], personality: "Sistemático, transparente, baseado em princípios", color: "#34D399", initials: "RD" , photo: "https://unavatar.io/wikipedia/Ray_Dalio", bio: "Fundador da Bridgewater Associates, o maior hedge fund do mundo com $150B+ sob gestão. Autor de \"Principles\", defende transparência radical e meritocracy de ideias como base para organizações de alto desempenho."},
      { id: "charlie-munger", name: "Charlie Munger", role: "Modelos Mentais", specialty: "Modelos mentais multidisciplinares e vieses cognitivos", description: "Arquiteto intelectual que construiu o framework analítico da Berkshire. Inversão antes de construção, análise de vieses.", frameworks: ["Inversão", "Latticework of Models", "Psychology of Misjudgment"], personality: "Intelectual, mordaz, multidisciplinar", color: "#60A5FA", initials: "CM" , photo: "https://unavatar.io/wikipedia/Charlie_Munger", bio: "Vice-chairman da Berkshire Hathaway por mais de 40 anos ao lado de Warren Buffett. Arquiteto intelectual por trás de bilhões em decisões de investimento, famoso por seus modelos mentais multidisciplinares e abordagem de inversão."},
      { id: "naval-ravikant", name: "Naval Ravikant", role: "Riqueza & Leverage", specialty: "Criação de riqueza, leverage e happiness", description: "Angel investor em 200+ empresas incluindo Twitter e Uber. Conhecimento específico + leverage + julgamento.", frameworks: ["Specific Knowledge", "Leverage Types", "Happiness Framework"], personality: "Filosófico, direto, minimalista", color: "#A78BFA", initials: "NR" , photo: "https://unavatar.io/wikipedia/Naval_Ravikant", bio: "Co-fundador da AngelList e angel investor em mais de 200 empresas incluindo Twitter, Uber e Notion. Filósofo-empreendedor conhecido por seus insights sobre criação de riqueza, leverage e felicidade."},
      { id: "peter-thiel", name: "Peter Thiel", role: "Zero-to-One", specialty: "Monopólio, segredos e pensamento zero-para-um", description: "Filósofo que se tornou empreendedor. Seven Questions para avaliar startups, teoria mimética de Girard.", frameworks: ["Seven Questions", "Mimetic Theory", "Power Law", "Monopoly Strategy"], personality: "Contrário, profundo, provocador", color: "#F87171", initials: "PT" , photo: "https://unavatar.io/wikipedia/Peter_Thiel", bio: "Co-fundador do PayPal e Palantir, primeiro investidor externo do Facebook. Autor de \"Zero to One\", defende a construção de monopólios criativos e o pensamento contrário como vantagem competitiva."},
      { id: "reid-hoffman", name: "Reid Hoffman", role: "Redes & Blitzscaling", specialty: "Efeitos de rede e blitzscaling", description: "Oráculo das Redes. Fundou LinkedIn. ABZ planning, análise de network effects.", frameworks: ["ABZ Planning", "Blitzscaling", "Network Effects"], personality: "Estratégico, conectado, expansivo", color: "#22D3EE", initials: "RH" , photo: "https://unavatar.io/wikipedia/Reid_Hoffman", bio: "Co-fundador do LinkedIn e sócio da Greylock Partners. Autor de \"Blitzscaling\", é o maior especialista mundial em efeitos de rede e escalabilidade de startups."},
      { id: "simon-sinek", name: "Simon Sinek", role: "Propósito & Liderança", specialty: "Liderança orientada por propósito e mindset infinito", description: "3o TED Talk mais assistido com 60M+ views. Golden Circle, jogo infinito.", frameworks: ["Golden Circle", "Infinite Game", "Leaders Eat Last"], personality: "Inspirador, acessível, orientado ao propósito", color: "#FBBF24", initials: "SS" , photo: "https://unavatar.io/wikipedia/Simon_Sinek", bio: "Autor de \"Start with Why\" e palestrante com o 3º TED Talk mais assistido da história (60M+ views). Defende liderança orientada por propósito e o conceito de jogo infinito nos negócios."},
      { id: "brene-brown", name: "Brené Brown", role: "Vulnerabilidade & Coragem", specialty: "Vulnerabilidade, coragem e liderança empática", description: "Pesquisadora qualitativa com 1.280+ entrevistas sobre vulnerabilidade. Wholehearted living.", frameworks: ["Shame Resilience", "Wholehearted Living", "Dare to Lead"], personality: "Empática, corajosa, autêntica", color: "#FB7185", initials: "BB" , photo: "https://unavatar.io/wikipedia/Bren%C3%A9_Brown", bio: "Pesquisadora da Universidade de Houston com 1.280+ entrevistas sobre vulnerabilidade e coragem. Autora de 6 bestsellers #1 do New York Times, incluindo \"Dare to Lead\" e \"The Gifts of Imperfection\"."},
      { id: "patrick-lencioni", name: "Patrick Lencioni", role: "Saude Organizacional", specialty: "Saúde organizacional e dinâmica de equipes", description: "Convenceu o mundo de que teamwork é a vantagem definitiva. Team dysfunction model.", frameworks: ["5 Dysfunctions", "Working Genius", "Organizational Health"], personality: "Prático, narrativo, focado em times", color: "#4ADE80", initials: "PL" , photo: "https://unavatar.io/wikipedia/Patrick_Lencioni", bio: "Autor de \"The Five Dysfunctions of a Team\" e fundador do The Table Group. Seus livros venderam mais de 7 milhões de cópias, revolucionando como empresas pensam sobre saúde organizacional e trabalho em equipe."},
      { id: "derek-sivers", name: "Derek Sivers", role: "Minimalismo Empreendedor", specialty: "Minimalismo, simplicidade e empreendedorismo contrário", description: "Fundador-filósofo que bootstrapou CD Baby no maior distribuidor independente. Hell Yeah or No.", frameworks: ["Hell Yeah or No", "Useful Not True", "Simplicity First"], personality: "Contrário, minimalista, reflexivo", color: "#C084FC", initials: "DS" , photo: "https://unavatar.io/wikipedia/Derek_Sivers", bio: "Fundador da CD Baby, que se tornou o maior distribuidor independente de música online. Vendeu a empresa por $22M e doou todo o lucro para caridade. Autor de \"Anything You Want\" e \"Hell Yeah or No\"."},
      { id: "yvon-chouinard", name: "Yvon Chouinard", role: "Missao & Impacto", specialty: "Negócios orientados por missão e ativismo ambiental", description: "Doou a empresa inteira. A Terra agora é o único acionista. Anti-crescimento, responsabilidade radical.", frameworks: ["Anti-Growth", "Radical Responsibility", "Purpose Over Profit"], personality: "Rebelde, autêntico, orientado à missão", color: "#F472B6", initials: "YC" , photo: "https://unavatar.io/wikipedia/Yvon_Chouinard", bio: "Fundador da Patagonia que em 2022 doou 100% da empresa para combater as mudanças climáticas. Pioneiro do anti-crescimento e responsabilidade ambiental corporativa, provou que propósito e lucro coexistem."},
    ],
    tasks: [
      { id: "convene-board", name: "Convene Board", filename: "convene-board.md", command: "*convene-board" },
      { id: "diagnose", name: "Diagnose", filename: "diagnose.md", command: "*diagnose" },
      { id: "evaluate-scaling", name: "Evaluate Scaling", filename: "evaluate-scaling.md", command: "*evaluate-scaling" },
      { id: "get-founder-counsel", name: "Get Founder Counsel", filename: "get-founder-counsel.md", command: "*get-founder-counsel" },
      { id: "resolve-culture-crisis", name: "Resolve Culture Crisis", filename: "resolve-culture-crisis.md", command: "*resolve-culture-crisis" },
      { id: "review", name: "Review", filename: "review.md", command: "*review" },
      { id: "seek-investment-counsel", name: "Seek Investment Counsel", filename: "seek-investment-counsel.md", command: "*seek-investment-counsel" },
    ],
    workflows: [
      {
        id: "wf-board-meeting", name: "Reuniao do Conselho Consultivo", description: "Workflow estruturado de reuniao do conselho onde uma questao estrategica e apresentada a multiplos conselheiros, cada um contribui com sua expertise de dominio, e o presidente do conselho sintetiza uma recomendacao unificada.",
        duration: "1-2 hours", command: "*board-meeting",
        steps: [
          { agent: "Board Chair", agentId: "board-chair", action: "convene-board", output: "agenda" },
          { agent: "Conselheiros", agentId: "advisors", action: "counsel", output: "perspectives" },
          { agent: "Board Chair", agentId: "board-chair", action: "synthesize", output: "recommendation" },
        ],
      },
      {
        id: "wf-decision-framework", name: "Framework de Decisao", description: "Aplicar um framework estruturado de decisao combinando modelos mentais (Munger), principios (Dalio), pensamento contrario (Thiel) e raciocinio por primeiros principios (Naval) para chegar a uma decisao de alta qualidade.",
        duration: "45-90 minutes", command: "*decision-framework",
        steps: [
          { agent: "Board Chair", agentId: "board-chair", action: "frame-decision", output: "decision_context" },
          { agent: "Charlie Munger", agentId: "charlie-munger", action: "mental-models", output: "model_analysis" },
          { agent: "Ray Dalio", agentId: "ray-dalio", action: "principles", output: "principles_analysis" },
          { agent: "Peter Thiel", agentId: "peter-thiel", action: "contrarian", output: "contrarian_view" },
          { agent: "Board Chair", agentId: "board-chair", action: "synthesize", output: "final_decision" },
        ],
      },
    ],
  },
  {
    slug: "copy-squad",
    name: "Copy Squad",
    version: "v1.0.0",
    icon: "Pen",
    description: "Squad de elite com 23 agentes de copywriting — 22 copywriters lendarios + 1 orquestrador. Gary Halbert, Eugene Schwartz, David Ogilvy e mais.",
    tags: ["copywriting", "direct-response", "sales-letter", "email", "vsl", "headlines", "persuasion"],
    accent: "#F87171",
    agents: [
      { id: "cyrus", name: "Cyrus", role: "Copy Chief", specialty: "Orquestração e direção criativa", description: "Analítico, decisivo, estratégico — não escreve, dirige. Roteamento estratégico, controle de qualidade, coordenação multi-agente.", frameworks: ["Strategic Routing", "Quality Control", "Multi-Agent Coordination"], personality: "Analítico, decisivo, estratégico", color: "#E8C547", initials: "CY", isChief: true , bio: "Orquestrador e diretor criativo do Copy Squad. Não escreve copy — dirige os 22 copywriters lendários, roteando projetos para o especialista ideal e garantindo controle de qualidade em cada entrega."},
      { id: "gary-halbert", name: "Gary Halbert", role: "Direct Mail Legend", specialty: "Storytelling emocional bruto, marketing direto", description: "O príncipe do print. Cartas de vendas, direct mail, identificação de públicos famintos. Irreverente, apaixonado, honesto.", frameworks: ["Boron Letters", "Hungry Crowd", "A-Pile Mail"], personality: "Irreverente, apaixonado, honesto", color: "#F87171", initials: "GH" , photo: "https://unavatar.io/wikipedia/Gary_C._Halbert", bio: "Considerado o maior copywriter de direct mail de todos os tempos. Sua \"Coat of Arms Letter\" gerou mais de $7B em vendas. Autor das \"Boron Letters\", escritas da prisão para seu filho, ensinando os fundamentos do marketing direto."},
      { id: "eugene-schwartz", name: "Eugene Schwartz", role: "Market Awareness Strategist", specialty: "Diagnóstico de consciência de mercado, headlines", description: "Intelectual, analítico, preciso. Frameworks sistemáticos para navegação de sofisticação de mercado.", frameworks: ["5 Levels of Awareness", "Market Sophistication", "Breakthrough Advertising"], personality: "Intelectual, analítico, preciso", color: "#A78BFA", initials: "ES" , photo: "https://unavatar.io/wikipedia/Eugene_Schwartz", bio: "Autor de \"Breakthrough Advertising\" (1966), a bíblia do copywriting que chega a valer $3.000 usada. Criador dos 5 Níveis de Consciência do Mercado, framework usado por toda geração moderna de copywriters."},
      { id: "claude-hopkins", name: "Claude Hopkins", role: "Scientific Advertising Pioneer", specialty: "Publicidade científica, resposta direta", description: "Pragmático, sem opinião — apenas resultados. Testes, medição, copy baseado em razões.", frameworks: ["Scientific Advertising", "Test Everything", "Reason-Why Copy"], personality: "Pragmático, baseado em dados", color: "#60A5FA", initials: "CH" , photo: "https://unavatar.io/wikipedia/Claude_C._Hopkins", bio: "Autor de \"Scientific Advertising\" (1923), o livro que David Ogilvy disse que ninguém deveria trabalhar em publicidade sem ler 7 vezes. Pioneiro de cupons, testes A/B e copy baseado em razões antes da era digital."},
      { id: "gary-bencivenga", name: "Gary Bencivenga", role: "Persuasion Scientist", specialty: "Elementos de prova, equação de persuasão", description: "Confiante tranquilo, metodológico, humilde. Controle absoluto, copy sofisticado direto.", frameworks: ["Persuasion Equation", "Proof Elements", "Control Beating"], personality: "Metódico, humilde, confiante", color: "#34D399", initials: "GB" , photo: "https://unavatar.io/wikipedia/Gary_Bencivenga", bio: "Considerado o maior copywriter vivo por muitos pares. Aposentou-se invicto após décadas criando controles que ninguém conseguia bater. Famoso pela \"Persuasion Equation\" e uso meticuloso de elementos de prova."},
      { id: "robert-collier", name: "Robert Collier", role: "Emotional Connection Master", specialty: "Conexão emocional, princípio da conversa", description: "Caloroso, empático, conversacional. Sequências de acompanhamento, filmes mentais.", frameworks: ["Conversation Principle", "Mental Movies", "Follow-up Sequences"], personality: "Caloroso, empático, conversacional", color: "#FBBF24", initials: "RC" , photo: "https://unavatar.io/wikipedia/Robert_Collier_(author)", bio: "Autor de \"The Robert Collier Letter Book\" (1931), vendeu mais de 300.000 cópias. Pioneiro das sequências de follow-up e do princípio de \"entrar na conversa que já existe na mente do prospect\"."},
      { id: "john-carlton", name: "John Carlton", role: "Sales Detective", specialty: "Detecção de ângulos de venda, copy freelancer", description: "Irreverente, divertido, franco — mentor streetwise. Processo de detetive de vendas.", frameworks: ["Sales Detective Process", "Simple Writing System", "Kick-Ass Copywriting"], personality: "Irreverente, divertido, franco", color: "#FB7185", initials: "JC" , photo: "https://unavatar.io/wikipedia/John_Carlton", bio: "Um dos copywriters freelancers mais bem pagos da história. Criador do \"Sales Detective Process\" e mentor de uma geração inteira de copywriters. Famoso pelo estilo irreverente e por desvendar ângulos de venda ocultos."},
      { id: "jim-rutz", name: "Jim Rutz", role: "Format Innovator", specialty: "Inovação de formato, combate ao tédio", description: "Espirituoso, surpreendente, eticamente consciencioso. Magalogs, bookalogs.", frameworks: ["Magalog", "Bookalog", "Anti-Boredom"], personality: "Espirituoso, surpreendente", color: "#22D3EE", initials: "JR" , photo: "https://unavatar.io/wikipedia/Jim_Rutz", bio: "Inventor do formato magalog e bookalog — formatos que revolucionaram o direct mail misturando editorial com venda. Autor de \"Open Me Now\", guia prático para combater o tédio em peças de marketing."},
      { id: "dan-kennedy", name: "Dan Kennedy", role: "Info-Marketing Strategist", specialty: "Estratégia de ofertas, sistemas de info-marketing", description: "Blunt, confrontacional, sem desculpas. Cartas de vendas, direct mail, geração de leads.", frameworks: ["Magnetic Marketing", "No B.S.", "Info-Marketing"], personality: "Direto, confrontacional", color: "#C084FC", initials: "DK" , photo: "https://unavatar.io/wikipedia/Dan_S._Kennedy", bio: "Autor de mais de 30 livros da série \"No B.S.\" e criador do Magnetic Marketing. Considerado o milionário maker — mais empreendedores atribuem seu sucesso a Dan Kennedy do que a qualquer outro mentor de marketing."},
      { id: "frank-kern", name: "Frank Kern", role: "Intent-Based Branding", specialty: "Branding baseado em intenção, lançamento", description: "Casual exterior, mente estratégica. Resposta dinâmica comportamental, sequências de webinário.", frameworks: ["Intent-Based Branding", "Behavioral Dynamic Response", "Mass Control"], personality: "Casual, estratégico, generoso", color: "#4ADE80", initials: "FK" , photo: "https://unavatar.io/wikipedia/Frank_Kern", bio: "Pioneiro do Intent-Based Branding e Behavioral Dynamic Response. Criador do \"Mass Control\", um dos lançamentos de info-produto mais lucrativos da história. Aparência casual, mas mente estratégica de alto calibre."},
      { id: "russell-brunson", name: "Russell Brunson", role: "Funnel Architect", specialty: "Arquitetura de funis, Value Ladders", description: "Energético, inspirador, estratégico visual. Scripts de webinário, Hook-Story-Offer.", frameworks: ["Hook-Story-Offer", "Value Ladder", "Perfect Webinar"], personality: "Energético, inspirador", color: "#F472B6", initials: "RB" , photo: "https://unavatar.io/wikipedia/Russell_Brunson", bio: "Co-fundador da ClickFunnels (empresa de $100M+ ARR) e autor de \"DotCom Secrets\", \"Expert Secrets\" e \"Traffic Secrets\". Responsável por popularizar o conceito de funis de venda no marketing digital."},
      { id: "todd-brown", name: "Todd Brown", role: "Big Idea Architect", specialty: "Grandes ideias de marketing, mecanismos únicos", description: "Intenso, estruturado, orientado ao ensino. Método E5, arquitetura de campanha.", frameworks: ["E5 Method", "Unique Mechanism", "Big Idea Marketing"], personality: "Intenso, estruturado", color: "#38BDF8", initials: "TB" , photo: "https://unavatar.io/wikipedia/Todd_Brown_(marketer)", bio: "Criador do E5 Method e especialista em \"Big Ideas\" de marketing. Consultor de campanhas de 8 e 9 dígitos. Conhecido por seu framework de Unique Mechanism que transforma ofertas commoditizadas em propostas únicas."},
      { id: "stefan-georgi", name: "Stefan Georgi", role: "VSL Systematizer", specialty: "Metodologia de copy sistemático, VSLs", description: "Engenheiro sistemático, confiante, generoso. Método RMBC, pesquisa profunda.", frameworks: ["RMBC Method", "Deep Research", "Rapid Production"], personality: "Sistemático, confiante, generoso", color: "#E879F9", initials: "SG" , photo: "https://unavatar.io/wikipedia/Stefan_Georgi", bio: "Criador do Método RMBC (Research, Mechanism, Brief, Copy). Já escreveu mais de $700M em vendas diretas de copy. Um dos copywriters de resposta direta mais produtivos e sistemáticos da era moderna."},
      { id: "jon-benson", name: "Jon Benson", role: "VSL & NLP Pioneer", specialty: "Criação de VSL, técnicas de PNL", description: "Convicção declarativa, contraintuitivo — salvador relutante. Mecanismos únicos, framework EPIC.", frameworks: ["VSL Creation", "EPIC Email", "NLP Techniques"], personality: "Contraintuitivo, declarativo", color: "#FCA5A1", initials: "JB" , photo: "https://unavatar.io/wikipedia/Jon_Benson", bio: "Inventor do Video Sales Letter (VSL) e criador do framework EPIC Email. Pioneiro no uso de técnicas de PNL em copywriting. Suas inovações de formato mudaram como toda uma indústria vende online."},
      { id: "ry-schwartz", name: "Ry Schwartz", role: "Launch Email Specialist", specialty: "Sequências de email de lançamento, crenças", description: "Quente, psicologicamente preciso, anti-hype. Coaching The Conversion.", frameworks: ["Coaching The Conversion", "Belief Transformation", "Maximum Tension"], personality: "Quente, preciso, anti-hype", color: "#86EFAC", initials: "RS" , photo: "https://unavatar.io/wikipedia/Ry_Schwartz", bio: "Criador do \"Coaching The Conversion\", framework de email de lançamento focado em transformação de crenças. Especialista em sequências de email que usam tensão psicológica precisa sem recorrer a hype."},
      { id: "ben-settle", name: "Ben Settle", role: "Daily Email Strategist", specialty: "Estratégia de email diária, copy personalizado", description: "Irreverente, polarizador, anti-establishment. Infotainment, relacionamentos de subscriber.", frameworks: ["Daily Email", "Infotainment", "Anti-Establishment"], personality: "Irreverente, polarizador", color: "#FDE047", initials: "BS" , photo: "https://unavatar.io/wikipedia/Ben_Settle", bio: "O rei do email diário. Envia emails todo dia há mais de 15 anos e construiu um negócio de 7 dígitos com zero redes sociais. Autor de \"Email Players\" e defensor do infotainment como estratégia de relacionamento."},
      { id: "andre-chaperon", name: "Andre Chaperon", role: "Email Storyteller", specialty: "Storytelling de email, Soap Opera Sequences", description: "Tranquilo, pensativo, intimista. Open loops, Sphere of Influence.", frameworks: ["Soap Opera Sequences", "Open Loops", "Sphere of Influence"], personality: "Tranquilo, pensativo, intimista", color: "#67E8F9", initials: "AC" , photo: "https://unavatar.io/wikipedia/Andre_Chaperon", bio: "Criador das Soap Opera Sequences e do conceito de Sphere of Influence. Mestre do storytelling por email, com estilo intimista e pensativo. Seus open loops mantêm leitores engajados por sequências inteiras."},
      { id: "dan-koe", name: "Dan Koe", role: "One-Person Business", specialty: "Modelo one-person, conteúdo short-form", description: "Direto, filosófico, provocador. Estratégia de newsletter, branding pessoal.", frameworks: ["One-Person Business", "Digital Economics", "Personal Branding"], personality: "Direto, filosófico, provocador", color: "#D8B4FE", initials: "DKo" , photo: "https://unavatar.io/wikipedia/Dan_Koe", bio: "Creator com 2M+ seguidores construindo o modelo One-Person Business. Combina filosofia, branding pessoal e estratégia digital para demonstrar que uma pessoa pode construir um negócio de 7 dígitos com conteúdo."},
      { id: "joe-sugarman", name: "Joe Sugarman", role: "Slippery Slide Master", specialty: "Fluxo slippery slide, gatilhos psicológicos", description: "Inteligente, conversacional, inventivo. Publicidade impressa, copy curiosidade.", frameworks: ["Slippery Slide", "Psychological Triggers", "Seed of Curiosity"], personality: "Inteligente, conversacional", color: "#FDA4AF", initials: "JS" , photo: "https://unavatar.io/wikipedia/Joseph_Sugarman", bio: "Autor de \"The Adweek Copywriting Handbook\" e criador do conceito \"Slippery Slide\" — cada frase existe para fazer você ler a próxima. Pioneiro da venda direta por anúncios impressos com BluBlocker Sunglasses."},
      { id: "david-ogilvy", name: "David Ogilvy", role: "Brand Architecture Master", specialty: "Arquitetura de marca, pesquisa criativa", description: "Elegante, autoridade, wit britânico. Big Idea, copy longo factual, posicionamento.", frameworks: ["Big Idea", "Research-First", "Long Copy Factual"], personality: "Elegante, autoridade, wit britânico", color: "#93C5FD", initials: "DO" , photo: "https://unavatar.io/wikipedia/David_Ogilvy_(businessman)", bio: "Fundador da Ogilvy & Mather, considerado o \"Pai da Publicidade\". Revolucionou a indústria com copy longo factual, pesquisa rigorosa e a crença de que \"o consumidor não é um idiota, ele é sua esposa\"."},
      { id: "clayton-makepeace", name: "Clayton Makepeace", role: "Emotional Selling Expert", specialty: "Venda emocional, Four-Legged Stool", description: "Caloroso, direto, emocionalmente inteligente. Copy finanças/saúde, empilhamento de prova.", frameworks: ["Four-Legged Stool", "Dominant Emotion", "Proof Stacking"], personality: "Caloroso, direto, emocional", color: "#FCA5A1", initials: "CMk" , photo: "https://unavatar.io/wikipedia/Clayton_Makepeace", bio: "Um dos copywriters mais bem pagos da história do direct response, especialista em mercados de finanças e saúde. Criador do \"Four-Legged Stool\" e mestre em copy que vende através de emoção dominante."},
      { id: "parris-lampropoulos", name: "Parris Lampropoulos", role: "Fascination Bullet Master", specialty: "Fascination bullets, batida de controle", description: "Privado, preciso, seletivo — mestre silencioso. Pesquisa exaustiva.", frameworks: ["Fascination Bullets", "Control Beating", "Exhaustive Research"], personality: "Privado, preciso, seletivo", color: "#A3E635", initials: "PL" , photo: "https://unavatar.io/wikipedia/Parris_Lampropoulos", bio: "Um dos copywriters de controle mais letais do direct mail americano. Extremamente privado e seletivo, conhecido por pesquisa exaustiva e fascination bullets que vendem milhões em suplementos e newsletters financeiras."},
      { id: "david-deutsch", name: "David Deutsch", role: "CopyTHINKING Pioneer", specialty: "CopyTHINKING, big ideas, fascination", description: "Preciso, intelectualmente humilde, craft-obsessed. Técnicas de ficção para não-ficção.", frameworks: ["CopyTHINKING", "Fiction Techniques", "Big Idea Generation"], personality: "Preciso, humilde, craft-obsessed", color: "#FCD34D", initials: "DD" , photo: "https://unavatar.io/wikipedia/David_Deutsch_(copywriter)", bio: "Criador do CopyTHINKING — método que aplica técnicas de ficção para gerar Big Ideas em non-fiction. Um dos primeiros a sistematizar a geração de conceitos criativos no copywriting de resposta direta."},
    ],
    tasks: [
      { id: "write-sales-letter", name: "Write Sales Letter", filename: "write-sales-letter.md", command: "*write-sales-letter" },
      { id: "write-vsl", name: "Write VSL Script", filename: "write-vsl.md", command: "*write-vsl" },
      { id: "write-email-sequence", name: "Write Email Sequence", filename: "write-email-sequence.md", command: "*write-email-sequence" },
      { id: "generate-headlines", name: "Generate Headlines", filename: "generate-headlines.md", command: "*generate-headlines" },
      { id: "write-hooks", name: "Write Hooks", filename: "write-hooks.md", command: "*write-hooks" },
      { id: "audit-copy", name: "Audit Copy", filename: "audit-copy.md", command: "*audit-copy" },
      { id: "write-landing-page", name: "Write Landing Page", filename: "write-landing-page.md", command: "*write-landing-page" },
      { id: "fascination-bullets", name: "Fascination Bullets", filename: "fascination-bullets.md", command: "*fascination-bullets" },
      { id: "write-advertorial", name: "Write Advertorial", filename: "write-advertorial.md", command: "*write-advertorial" },
      { id: "awareness-diagnosis", name: "Awareness Diagnosis", filename: "awareness-diagnosis.md", command: "*awareness-diagnosis" },
      { id: "daily-email", name: "Daily Email", filename: "daily-email.md", command: "*daily-email" },
      { id: "soap-opera-sequence", name: "Soap Opera Sequence", filename: "soap-opera-sequence.md", command: "*soap-opera-sequence" },
      { id: "webinar-script", name: "Webinar Script", filename: "webinar-script.md", command: "*webinar-script" },
    ],
    workflows: [
      {
        id: "wf-sales-letter", name: "Pipeline de Sales Letter", description: "Workflow completo de criação de sales letter passando por diagnóstico de mercado, construção de Big Idea, escrita de copy e revisão final.",
        duration: "2-4 hours", command: "*sales-letter-pipeline",
        steps: [
          { agent: "Cyrus", agentId: "cyrus", action: "diagnose-market", output: "market_analysis" },
          { agent: "Eugene Schwartz", agentId: "eugene-schwartz", action: "awareness-level", output: "awareness_map" },
          { agent: "Gary Halbert", agentId: "gary-halbert", action: "write-letter", output: "draft" },
          { agent: "David Ogilvy", agentId: "david-ogilvy", action: "review-brand", output: "final_copy" },
        ],
      },
      {
        id: "wf-email-launch", name: "Pipeline de Email Launch", description: "Sequência completa de emails de lançamento combinando storytelling, urgência e conversão.",
        duration: "1-2 hours", command: "*email-launch-pipeline",
        steps: [
          { agent: "Andre Chaperon", agentId: "andre-chaperon", action: "story-arc", output: "narrative_arc" },
          { agent: "Ry Schwartz", agentId: "ry-schwartz", action: "belief-shift", output: "belief_sequence" },
          { agent: "Ben Settle", agentId: "ben-settle", action: "daily-hooks", output: "email_hooks" },
          { agent: "Cyrus", agentId: "cyrus", action: "assemble", output: "launch_sequence" },
        ],
      },
    ],
  },
  {
    slug: "hormozi-squad",
    name: "Hormozi Squad",
    version: "v1.0.0",
    icon: "Star",
    description: "16 agentes implementando os frameworks de Alex Hormozi. Offers, leads, pricing, sales, content, hooks, launch, retention, scaling.",
    tags: ["hormozi", "offers", "leads", "pricing", "scaling", "sales", "content"],
    accent: "#FBBF24",
    agents: [
      { id: "hormozi-chief", name: "Hormozi Chief", role: "Orquestrador", specialty: "Diagnóstico de problemas e roteamento", description: "Orquestrador principal do squad. Diagnostica problemas e roteia para o especialista certo.", frameworks: ["All Hormozi Frameworks", "Business Diagnostics"], personality: "Analítico, decisivo", color: "#FBBF24", initials: "HC", isChief: true , bio: "Orquestrador principal do Hormozi Squad. Diagnostica problemas de negócio e roteia para o especialista certo dentre os 15 agentes especializados nos frameworks de Alex Hormozi."},
      { id: "hormozi-advisor", name: "Hormozi Advisor", role: "Consultor Estrategico", specialty: "Estratégia de negócios e gargalos", description: "Consultor estratégico com filosofia e frameworks de Hormozi aplicados ao negócio.", frameworks: ["Business Strategy", "Bottleneck Analysis"], personality: "Estratégico, direto", color: "#E8C547", initials: "HA" , bio: "Consultor estratégico que aplica a filosofia e frameworks de Alex Hormozi — \"$100M Offers\" e \"$100M Leads\" — para diagnosticar gargalos e acelerar negócios."},
      { id: "hormozi-offers", name: "Hormozi Offers", role: "Grand Slam Offer Architect", specialty: "Ofertas irresistíveis", description: "Constrói ofertas tão valiosas que os prospects se sentem estúpidos dizendo não.", frameworks: ["Value Equation", "Bonus Stacking", "Guarantee Engineering"], personality: "Ousado, baseado em valor", color: "#F87171", initials: "HO" , bio: "Especialista em construção de Grand Slam Offers usando a Value Equation de Hormozi. Cria ofertas tão valiosas que os prospects se sentem irracionais ao recusar."},
      { id: "hormozi-leads", name: "Hormozi Leads", role: "Lead Generation Specialist", specialty: "Geração de leads, Core 4", description: "Especialista nos 4 canais core de aquisição: warm outreach, cold outreach, content, paid ads.", frameworks: ["Core 4 Framework", "Lead Magnets", "Acquisition Channels"], personality: "Metódico, expansivo", color: "#34D399", initials: "HL" , bio: "Domina os 4 canais core de aquisição de Hormozi: warm outreach, cold outreach, content e paid ads. Especialista em lead magnets e estratégias de volume."},
      { id: "hormozi-pricing", name: "Hormozi Pricing", role: "Pricing Strategist", specialty: "Precificação baseada em valor", description: "Posicionamento premium. Preço como fração do valor entregue.", frameworks: ["Value Equation", "Price-to-Value Discrepancy", "Premium Positioning"], personality: "Confiante, baseado em números", color: "#60A5FA", initials: "HP" , bio: "Estrategista de precificação que posiciona ofertas no premium. Usa a Value Equation para garantir que o preço seja sempre uma fração do valor percebido pelo cliente."},
      { id: "hormozi-copy", name: "Hormozi Copy", role: "Direct Copywriter", specialty: "Copy direto estilo Hormozi", description: "Frases curtas. Números específicos. Claims ousados apoiados por provas.", frameworks: ["Hormozi Voice", "Value-Driven Messaging", "Proof-Based Copy"], personality: "Direto, específico, ousado", color: "#A78BFA", initials: "HCo" , bio: "Copywriter especializado no estilo direto de Hormozi — frases curtas, números específicos, claims ousados apoiados por provas concretas. Sem floreios, só resultados."},
      { id: "hormozi-ads", name: "Hormozi Ads", role: "Ads Strategist", specialty: "ROAS e creative testing", description: "Otimização de ROAS, testes de criativos, estratégia de plataforma.", frameworks: ["Acquisition Framework", "Ad Funnel Design", "Creative Testing"], personality: "Analítico, otimizador", color: "#22D3EE", initials: "HAd" , bio: "Estrategista de anúncios focado em ROAS e creative testing. Otimiza campanhas usando o Acquisition Framework para maximizar retorno em cada plataforma."},
      { id: "hormozi-content", name: "Hormozi Content", role: "Content Machine", specialty: "Sistemas de conteúdo e authority", description: "Máquina de conteúdo. Hook-Retain-Reward, estratégia multi-plataforma.", frameworks: ["Hook-Retain-Reward", "Content Repurposing", "Authority Building"], personality: "Prolífico, estratégico", color: "#FB7185", initials: "HCn" , bio: "Máquina de conteúdo que implementa Hook-Retain-Reward em escala. Cria sistemas de repurposing multi-plataforma para construir autoridade e gerar leads orgânicos."},
      { id: "hormozi-hooks", name: "Hormozi Hooks", role: "Attention Engineer", specialty: "Headlines e pattern interrupts", description: "Engenheiro de atenção. Captura em 1-3 segundos. Headlines, subject lines.", frameworks: ["Attention Capture", "Pattern Interrupt", "1-3 Second Rule"], personality: "Criativo, provocador", color: "#4ADE80", initials: "HHk" , bio: "Engenheiro de atenção especializado em capturar interesse em 1-3 segundos. Cria headlines, subject lines e aberturas usando pattern interrupts e a regra dos 3 segundos."},
      { id: "hormozi-launch", name: "Hormozi Launch", role: "Launch Strategist", specialty: "Product launches e market entry", description: "Lançamentos, entrada em mercado, pré-vendas. MVO - Minimum Viable Offers.", frameworks: ["MVO", "Market Validation", "Pre-Sale Strategy"], personality: "Ágil, focado em validação", color: "#F472B6", initials: "HLa" , bio: "Estrategista de lançamento focado em MVO (Minimum Viable Offers) e validação de mercado. Testa antes de escalar, usando pré-vendas como prova de conceito."},
      { id: "hormozi-closer", name: "Hormozi Closer", role: "Sales Specialist", specialty: "CLOSER Framework", description: "Grande venda é grande diagnóstico. Framework CLOSER, fechamento baseado em convicção.", frameworks: ["CLOSER Framework", "Conviction Closing", "Diagnostic Selling"], personality: "Empático, confiante, diagnóstico", color: "#C084FC", initials: "HCl" , bio: "Especialista em vendas usando o CLOSER Framework de Hormozi. Acredita que a grande venda é um grande diagnóstico — fechamento vem da convicção, não da pressão."},
      { id: "hormozi-workshop", name: "Hormozi Workshop", role: "Workshop Designer", specialty: "Design de workshops", description: "Workshops são trabalho, não entretenimento. Método VAM.", frameworks: ["VAM Method", "Workshop Design", "Value Delivery"], personality: "Estruturado, orientado a resultado", color: "#38BDF8", initials: "HW" , bio: "Designer de workshops que trata eventos como trabalho, não entretenimento. Implementa o Método VAM para garantir que participantes saiam com resultados tangíveis."},
      { id: "hormozi-retention", name: "Hormozi Retention", role: "Retention Engineer", specialty: "Churn reduction e LTV", description: "Engenheiro de retenção. LTGP arms race, sistemas de engajamento.", frameworks: ["LTGP Arms Race", "Engagement Systems", "Churn Prevention"], personality: "Analítico, proativo", color: "#FDE047", initials: "HR" , bio: "Engenheiro de retenção focado em redução de churn e maximização de LTV. Implementa sistemas de engajamento proativo usando o framework LTGP Arms Race."},
      { id: "hormozi-scale", name: "Hormozi Scale", role: "Scaling Architect", specialty: "Delegação e systems building", description: "4 estágios: Improvise → Stabilize → Systematize → Operationalize.", frameworks: ["4-Stage Scaling", "Delegation Framework", "Breaking Plateaus"], personality: "Sistemático, visionário", color: "#E879F9", initials: "HS" , bio: "Arquiteto de escalação que guia negócios pelos 4 estágios: Improvise, Stabilize, Systematize e Operationalize. Especialista em delegação e construção de sistemas."},
      { id: "hormozi-models", name: "Hormozi Models", role: "Business Model Designer", specialty: "Revenue architecture e unit economics", description: "$100M Money Models Framework. Arquitetura de receita.", frameworks: ["$100M Money Models", "Unit Economics", "Revenue Architecture"], personality: "Matemático, estratégico", color: "#A3E635", initials: "HM" , bio: "Designer de modelos de negócio usando o $100M Money Models Framework. Arquiteta revenue streams, otimiza unit economics e desenha estruturas financeiras escaláveis."},
      { id: "hormozi-audit", name: "Hormozi Audit", role: "Business Auditor", specialty: "Avaliação e diagnóstico de negócios", description: "Framework 6M para auditoria completa de negócios. Análise de gargalos.", frameworks: ["6M Framework", "Bottleneck Analysis", "Business Diagnostics"], personality: "Investigativo, objetivo", color: "#FDA4AF", initials: "HAu" , bio: "Auditor de negócios usando o Framework 6M para diagnóstico completo. Identifica gargalos, ineficiências e oportunidades perdidas em cada área do negócio."},
    ],
    tasks: [
      { id: "create-offer", name: "Create Grand Slam Offer", filename: "create-offer.md", command: "*create-offer" },
      { id: "lead-magnet", name: "Create Lead Magnet", filename: "lead-magnet.md", command: "*lead-magnet" },
      { id: "price-offer", name: "Price Offer", filename: "price-offer.md", command: "*price-offer" },
      { id: "write-ad", name: "Write Ad", filename: "write-ad.md", command: "*write-ad" },
      { id: "hook-generator", name: "Hook Generator", filename: "hook-generator.md", command: "*hook-generator" },
      { id: "launch-plan", name: "Launch Plan", filename: "launch-plan.md", command: "*launch-plan" },
      { id: "sales-script", name: "Sales Script", filename: "sales-script.md", command: "*sales-script" },
      { id: "retention-audit", name: "Retention Audit", filename: "retention-audit.md", command: "*retention-audit" },
      { id: "business-audit", name: "Business Audit", filename: "business-audit.md", command: "*business-audit" },
      { id: "scale-plan", name: "Scale Plan", filename: "scale-plan.md", command: "*scale-plan" },
    ],
    workflows: [
      {
        id: "wf-offer-creation", name: "Pipeline de Criacao de Oferta", description: "Pipeline automatizado que passa por estrategista, arquiteto de ofertas, copywriter e precificador para criar uma Grand Slam Offer completa.",
        duration: "1-2 hours", command: "*offer-pipeline",
        steps: [
          { agent: "Hormozi Advisor", agentId: "hormozi-advisor", action: "diagnose", output: "business_context" },
          { agent: "Hormozi Offers", agentId: "hormozi-offers", action: "architect", output: "offer_structure" },
          { agent: "Hormozi Copy", agentId: "hormozi-copy", action: "write", output: "offer_copy" },
          { agent: "Hormozi Pricing", agentId: "hormozi-pricing", action: "price", output: "final_offer" },
        ],
      },
      {
        id: "wf-business-restructure", name: "Reestruturacao de Negocio", description: "Auditoria completa seguida de plano de reestruturação com foco em offers, leads, retention e scaling.",
        duration: "2-3 hours", command: "*restructure-pipeline",
        steps: [
          { agent: "Hormozi Audit", agentId: "hormozi-audit", action: "full-audit", output: "audit_report" },
          { agent: "Hormozi Models", agentId: "hormozi-models", action: "model-design", output: "revenue_model" },
          { agent: "Hormozi Scale", agentId: "hormozi-scale", action: "scale-plan", output: "scaling_blueprint" },
        ],
      },
    ],
  },
  {
    slug: "brand-squad",
    name: "Brand Squad",
    version: "v1.0.0",
    icon: "Diamond",
    description: "O squad definitivo de estrategia de marca — 10 pensadores lendarios de branding clonados como agentes de IA, mais 4 especialistas funcionais e 1 orquestrador.",
    tags: ["branding", "brand-strategy", "positioning", "identity", "naming", "archetypes"],
    accent: "#A78BFA",
    agents: [
      { id: "brand-chief", name: "Brand Chief", role: "Squad Orchestrator", specialty: "Diagnóstico de marca e roteamento", description: "Inteligência de roteamento estratégico. Diagnóstico de desafios de marca e coordenação de especialistas.", frameworks: ["Brand Diagnostics", "Specialist Routing", "Tension Resolution"], personality: "Analítico, facilitador", color: "#A78BFA", initials: "BC", isChief: true , bio: "Orquestrador do Brand Squad. Diagnostica desafios de marca e coordena os 14 especialistas para entregar soluções de branding integradas e estratégicas."},
      { id: "david-aaker", name: "David Aaker", role: "Brand Equity Architect", specialty: "Brand equity e identity", description: "Medição de brand equity, modelagem de identidade, estratégia de portfólio.", frameworks: ["Brand Identity Model", "Brand Architecture", "Category Innovation"], personality: "Acadêmico, estruturado", color: "#60A5FA", initials: "DA" , photo: "https://unavatar.io/wikipedia/David_Aaker", bio: "Professor emérito de UC Berkeley e autor de 18 livros sobre marca. Considerado o pai do branding moderno, criou o Brand Identity Model e os frameworks de brand equity que a indústria inteira usa."},
      { id: "kevin-keller", name: "Kevin Lane Keller", role: "Brand Equity Scientist", specialty: "Pyramid-structured brand building", description: "Pirâmide CBBE, POPs/PODs, Brand Value Chain.", frameworks: ["CBBE Pyramid", "POPs/PODs", "Brand Value Chain"], personality: "Científico, metódico", color: "#34D399", initials: "KK" , photo: "https://unavatar.io/wikipedia/Kevin_Lane_Keller", bio: "Professor de Marketing em Dartmouth e autor de \"Strategic Brand Management\", o textbook mais adotado no mundo sobre marcas. Criador da Pirâmide CBBE e do Brand Value Chain."},
      { id: "jean-noel-kapferer", name: "Jean-Noël Kapferer", role: "Identity & Luxury Architect", specialty: "Identidade de marca e luxo", description: "Brand Identity Prism com 6 facetas, 24 anti-laws do luxo.", frameworks: ["Brand Identity Prism", "24 Anti-Laws", "Brand DNA"], personality: "Sofisticado, preciso", color: "#F472B6", initials: "JK" , photo: "https://unavatar.io/wikipedia/Jean-No%C3%ABl_Kapferer", bio: "Professor em HEC Paris e maior autoridade europeia em branding de luxo. Criador do Brand Identity Prism com 6 facetas e das 24 Anti-Laws do marketing de luxo."},
      { id: "al-ries", name: "Al Ries", role: "Positioning Pioneer", specialty: "Positioning e category creation", description: "22 Leis do Marketing, teoria de posicionamento, estratégia de guerra.", frameworks: ["22 Laws", "Positioning Theory", "Marketing Warfare"], personality: "Direto, categórico", color: "#FBBF24", initials: "AR" , photo: "https://unavatar.io/wikipedia/Al_Ries", bio: "Co-autor de \"Positioning: The Battle for Your Mind\" com Jack Trout — o livro que definiu uma era no marketing. Também co-autor das \"22 Immutable Laws of Marketing\"."},
      { id: "byron-sharp", name: "Byron Sharp", role: "Marketing Scientist", specialty: "Growth baseado em dados", description: "Mental/physical availability, Double Jeopardy, crescimento por penetração.", frameworks: ["Mental Availability", "Physical Availability", "Double Jeopardy"], personality: "Científico, iconoclasta", color: "#22D3EE", initials: "BS" , photo: "https://unavatar.io/wikipedia/Byron_Sharp", bio: "Diretor do Ehrenberg-Bass Institute e autor de \"How Brands Grow\". Revolucionou o marketing com evidências empíricas, desafiando décadas de sabedoria convencional sobre segmentação e lealdade."},
      { id: "marty-neumeier", name: "Marty Neumeier", role: "Brand Strategist", specialty: "Diferenciação radical e design thinking", description: "Brand Gap, Zag principle, Onlyness Statement.", frameworks: ["Brand Gap", "Zag", "Onlyness Statement", "Five Disciplines"], personality: "Criativo, visual, provocador", color: "#F87171", initials: "MN" , photo: "https://unavatar.io/wikipedia/Marty_Neumeier", bio: "Autor de \"The Brand Gap\", \"Zag\" e \"The Brand Flip\". Criador do Onlyness Statement. Ponte entre estratégia de negócios e design, ensina que marca é o que as pessoas sentem sobre você."},
      { id: "donald-miller", name: "Donald Miller", role: "Messaging Strategist", specialty: "Narrativa e clareza de mensagem", description: "SB7 Framework, BrandScript, funnels baseados em história.", frameworks: ["SB7 Framework", "BrandScript", "Story-Driven Funnels"], personality: "Narrativo, claro, acessível", color: "#4ADE80", initials: "DM" , photo: "https://unavatar.io/wikipedia/Donald_Miller_(author)", bio: "Autor de \"Building a StoryBrand\" (bestseller #1 NYT) e CEO da StoryBrand. Criou o framework SB7 que simplifica mensagens de marca usando a estrutura narrativa do herói."},
      { id: "denise-yohn", name: "Denise Lee Yohn", role: "Brand-Culture Fusion", specialty: "Alinhamento interno e operacionalização", description: "7 princípios de brand-building, 9 tipos de marca, operacionalização de cultura.", frameworks: ["7 Principles", "9 Brand Types", "Culture Operationalization"], personality: "Prática, orientada a operações", color: "#FB7185", initials: "DY" , photo: "https://unavatar.io/wikipedia/Denise_Lee_Yohn", bio: "Autora de \"What Great Brands Do\" e \"FUSION\". Ex-VP da Sony Electronics e Jack in the Box. Especialista em alinhar cultura interna com promessa de marca externa."},
      { id: "emily-heyward", name: "Emily Heyward", role: "Startup Brand Builder", specialty: "Early-stage brand building, DTC", description: "Brand from Day One, escada funcional-para-emocional, community building.", frameworks: ["Brand from Day One", "Functional-to-Emotional", "Community Building"], personality: "Empática, orientada a startups", color: "#C084FC", initials: "EH" , photo: "https://unavatar.io/wikipedia/Emily_Heyward", bio: "Co-fundadora da Red Antler, agência que criou as marcas da Casper, Allbirds e Brandless. Autora de \"Obsessed\", sobre como construir marcas que as pessoas amam desde o dia um."},
      { id: "alina-wheeler", name: "Alina Wheeler", role: "Identity Process Architect", specialty: "Visual identity systems", description: "Five-Phase Process, Nine Ideals, standards de identidade visual.", frameworks: ["Five-Phase Process", "Nine Ideals", "Visual Standards"], personality: "Processual, detalhista", color: "#E8C547", initials: "AW" , photo: "https://unavatar.io/wikipedia/Alina_Wheeler", bio: "Autora de \"Designing Brand Identity\", o guia definitivo de identidade visual com 5 edições. Seu Five-Phase Process é usado por agências e brand managers no mundo inteiro."},
      { id: "archetype-consultant", name: "Archetype Consultant", role: "Brand Personality Specialist", specialty: "Arquétipos e personalidade de marca", description: "12 arquétipos junguianos, dimensões de personalidade de marca, guidelines de voz.", frameworks: ["12 Jungian Archetypes", "Brand Personality Dimensions", "Voice Guidelines"], personality: "Psicológico, intuitivo", color: "#38BDF8", initials: "AQ" , bio: "Especialista em arquétipos junguianos aplicados a marcas. Mapeia personalidades de marca usando os 12 arquétipos universais para criar conexões emocionais autênticas com públicos-alvo."},
      { id: "naming-strategist", name: "Naming Strategist", role: "Brand Naming Specialist", specialty: "Linguística e naming", description: "Fonossemântica, screening de trademark, considerações multilíngues.", frameworks: ["Phonosemantics", "Trademark Screening", "Linguistic Analysis"], personality: "Criativo, linguístico", color: "#FDE047", initials: "NS" , bio: "Especialista em linguística e naming de marcas. Analisa fonossemântica, faz screening de trademark e avalia considerações multilíngues para criar nomes que ressoam e são legalmente protegíveis."},
      { id: "domain-scout", name: "Domain Scout", role: "Digital Naming Specialist", specialty: "Estratégia de domínio e handles", description: "TLD evaluation, consistência de social handles, estratégia de aquisição.", frameworks: ["Domain Strategy", "TLD Evaluation", "Handle Consistency"], personality: "Investigativo, digital", color: "#A3E635", initials: "DS" , bio: "Especialista em estratégia digital de naming. Avalia TLDs, verifica consistência de social handles e desenvolve estratégias de aquisição de domínios para presença digital coesa."},
      { id: "miller-sticky-brand", name: "Miller Sticky Brand", role: "StoryBrand Implementer", specialty: "Implementação StoryBrand", description: "Execução de framework, criação de assets, construção de funil.", frameworks: ["BrandScript Creation", "Website Design", "Email Sequences"], personality: "Executor, orientado a assets", color: "#FDA4AF", initials: "MS" , bio: "Implementador do framework StoryBrand. Executa BrandScripts, cria assets de marca, constrói websites e sequências de email baseados na metodologia de Donald Miller."},
    ],
    tasks: [
      { id: "brand-audit", name: "Brand Audit", filename: "brand-audit.md", command: "*brand-audit" },
      { id: "brand-identity", name: "Brand Identity", filename: "brand-identity.md", command: "*brand-identity" },
      { id: "positioning", name: "Positioning", filename: "positioning.md", command: "*positioning" },
      { id: "brand-naming", name: "Brand Naming", filename: "brand-naming.md", command: "*brand-naming" },
      { id: "brand-archetype", name: "Brand Archetype", filename: "brand-archetype.md", command: "*brand-archetype" },
      { id: "brand-story", name: "Brand Story", filename: "brand-story.md", command: "*brand-story" },
      { id: "visual-identity", name: "Visual Identity", filename: "visual-identity.md", command: "*visual-identity" },
      { id: "brand-script", name: "BrandScript", filename: "brand-script.md", command: "*brand-script" },
      { id: "domain-search", name: "Domain Search", filename: "domain-search.md", command: "*domain-search" },
    ],
    workflows: [
      {
        id: "wf-brand-creation", name: "Pipeline de Criacao de Marca", description: "Workflow completo de criação de marca do zero — identidade, posicionamento, naming, arquétipos e sistema visual.",
        duration: "3-5 hours", command: "*brand-creation-pipeline",
        steps: [
          { agent: "Brand Chief", agentId: "brand-chief", action: "diagnose", output: "brand_brief" },
          { agent: "Al Ries", agentId: "al-ries", action: "positioning", output: "position_map" },
          { agent: "Marty Neumeier", agentId: "marty-neumeier", action: "differentiation", output: "onlyness" },
          { agent: "Naming Strategist", agentId: "naming-strategist", action: "naming", output: "brand_name" },
          { agent: "Alina Wheeler", agentId: "alina-wheeler", action: "visual-system", output: "identity_system" },
        ],
      },
      {
        id: "wf-rebrand", name: "Pipeline de Rebranding", description: "Rebranding estratégico com auditoria de marca existente, reposicionamento e nova identidade.",
        duration: "4-6 hours", command: "*rebrand-pipeline",
        steps: [
          { agent: "David Aaker", agentId: "david-aaker", action: "equity-audit", output: "equity_report" },
          { agent: "Kevin Lane Keller", agentId: "kevin-keller", action: "cbbe-analysis", output: "cbbe_map" },
          { agent: "Brand Chief", agentId: "brand-chief", action: "rebrand-plan", output: "rebrand_strategy" },
        ],
      },
    ],
  },
  {
    slug: "traffic-masters",
    name: "Traffic Masters",
    version: "v1.0.0", icon: "Zap",
    description: "Squad de 16 agentes especialistas em trafego pago. Facebook, YouTube, Google Ads, media buying, creative analysis, scaling, tracking.",
    tags: ["traffic", "ads", "facebook", "google", "youtube", "scaling", "tracking"],
    accent: "#60A5FA",
    agents: [
      { id: "traffic-chief", name: "Traffic Chief", role: "Orquestrador", specialty: "Diagnóstico e roteamento", description: "Diagnostica se o problema é plataforma, criativo, targeting, orçamento ou funil.", frameworks: ["ROAS Analysis", "CPA Diagnostics", "Funnel Stages"], personality: "Analítico, diagnóstico", color: "#60A5FA", initials: "TC", isChief: true , bio: "Orquestrador do Traffic Masters. Diagnostica se o problema é plataforma, criativo, targeting, orçamento ou funil, e roteia para o especialista certo entre os 15 agentes."},
      { id: "molly-pittman", name: "Molly Pittman", role: "Meta Ads Strategist", specialty: "Facebook/Meta e sistemas de tráfego", description: "VP DigitalMarketer aos 24. $16M+ em anúncios rentáveis.", frameworks: ["Ad Grid", "Traffic Engine", "Customer Value Journey"], personality: "Energética, didática", color: "#FB7185", initials: "MP" , photo: "https://unavatar.io/wikipedia/Molly_Pittman", bio: "Tornou-se VP da DigitalMarketer aos 24 anos, gerenciando $16M+ em anúncios rentáveis. Criadora do Ad Grid e Traffic Engine, frameworks que sistematizam a criação e otimização de campanhas em Meta Ads."},
      { id: "ralph-burns", name: "Ralph Burns", role: "Full-Funnel Performance", specialty: "Performance marketing full-funnel", description: "Fundou Tier 11. $100M-200M+ em spend gerenciado.", frameworks: ["nCAC", "MER", "Five Levels of Traffic", "Creative Lab"], personality: "Analítico, data-driven", color: "#34D399", initials: "RB" , photo: "https://unavatar.io/wikipedia/Ralph_Burns_(marketer)", bio: "Fundador da Tier 11, agência que gerencia $100M-200M+ em spend anual. Criador do framework nCAC e Five Levels of Traffic, com foco em performance marketing full-funnel e creative testing em escala."},
      { id: "depesh-mandalia", name: "Depesh Mandalia", role: "Meta Scaling Expert", specialty: "Escalação Facebook/Meta", description: "Escalou Lost My Name de $800K para $26.5M em 18 meses.", frameworks: ["BPM Method", "AC-4 Scoring", "5W Avatars"], personality: "Metódico, escalador", color: "#FBBF24", initials: "DM" , photo: "https://unavatar.io/wikipedia/Depesh_Mandalia", bio: "Escalou a startup Lost My Name de $800K para $26.5M em receita em apenas 18 meses usando Facebook Ads. Criador do BPM Method e AC-4 Scoring para escalação metódica de campanhas."},
      { id: "nicholas-kusmich", name: "Nicholas Kusmich", role: "High-ROI Facebook", specialty: "Facebook de alto ROI, Give-Give-Give-Ask", description: "ROI pico de 30.973%. $1B+ em vendas totais de clientes.", frameworks: ["Contextual Congruence", "4% Rule", "Targeting Trifecta"], personality: "Generoso, estratégico", color: "#A78BFA", initials: "NK" , photo: "https://unavatar.io/wikipedia/Nicholas_Kusmich", bio: "Alcançou ROI pico de 30.973% e mais de $1B em vendas totais para clientes. Criador do Give-Give-Give-Ask, Contextual Congruence e a 4% Rule para Facebook Ads de alto retorno."},
      { id: "tom-breeze", name: "Tom Breeze", role: "YouTube Ads Expert", specialty: "YouTube Ads", description: "Fundou Viewability. Agência YouTube performance mais gasta globalmente.", frameworks: ["ADUCATE Formula", "Three-Act Ad", "Choose Your Own Adventure"], personality: "Criativo, storyteller", color: "#F87171", initials: "TBr" , photo: "https://unavatar.io/wikipedia/Tom_Breeze", bio: "Fundador da Viewability, a agência de YouTube Ads performance mais gasta globalmente. Criador da fórmula ADUCATE e do Three-Act Ad, frameworks específicos para anúncios em vídeo."},
      { id: "kasim-aslam", name: "Kasim Aslam", role: "Google Ads Master", specialty: "Google Ads e Performance Max", description: "Fundou Solutions 8. $100M+ anuais gerenciados. Saída de 8 dígitos.", frameworks: ["Performance Max", "Adversarial Optimization", "Traffic-First"], personality: "Adversarial, otimizador", color: "#22D3EE", initials: "KA" , photo: "https://unavatar.io/wikipedia/Kasim_Aslam", bio: "Fundador da Solutions 8, gerenciando $100M+ anuais em Google Ads. Exit de 8 dígitos. Especialista em Performance Max e otimização adversarial, tratando o algoritmo como adversário a ser superado."},
      { id: "pedro-sobral", name: "Pedro Sobral", role: "Gestor de Trafego BR", specialty: "Meta Ads para mercado brasileiro", description: "Pioneiro 'gestor de tráfego'. 40.000+ alunos. R$350M+ em spend.", frameworks: ["Campaign Structure", "Creative Testing", "Audience Strategy"], personality: "Didático, prático", color: "#4ADE80", initials: "PS" , photo: "https://unavatar.io/wikipedia/Pedro_Sobral_(marketer)", bio: "Pioneiro do conceito \"gestor de tráfego\" no Brasil com mais de 40.000 alunos formados. Responsável por mais de R$350M em spend gerenciado. Referência nacional em Meta Ads com abordagem prática e didática."},
      { id: "ad-midas", name: "Ad Midas", role: "Creative Strategist", specialty: "Estratégia criativa e desenvolvimento", description: "Desenvolvimento de criativos, conceitos e estratégias visuais para ads.", frameworks: ["Creative Strategy", "Visual Concepts", "Ad Development"], personality: "Criativo, visual", color: "#E8C547", initials: "AM" , bio: "Estrategista criativo especializado em desenvolvimento de conceitos visuais e criativos para anúncios. Transforma briefings em peças publicitárias que capturam atenção e geram conversões."},
      { id: "media-buyer", name: "Media Buyer", role: "Campaign Executor", specialty: "Execução multi-plataforma", description: "Execução de campanhas em múltiplas plataformas.", frameworks: ["Multi-Platform", "Campaign Execution", "Budget Management"], personality: "Executor, detalhista", color: "#F472B6", initials: "MB" , bio: "Executor de campanhas multi-plataforma. Gerencia budget allocation, configuração de campanhas e otimizações diárias em Facebook, Google, YouTube e outras plataformas de mídia paga."},
      { id: "performance-analyst", name: "Performance Analyst", role: "Data Analyst", specialty: "Análise de dados e relatórios", description: "Análise de performance, dashboards, relatórios de métricas.", frameworks: ["Performance Analysis", "Dashboard Design", "KPI Reporting"], personality: "Analítico, visual", color: "#C084FC", initials: "PA" , bio: "Analista de dados especializado em performance de campanhas. Cria dashboards, relatórios de métricas e análises de KPIs para informar decisões de otimização e escalação."},
      { id: "creative-analyst", name: "Creative Analyst", role: "Creative Performance", specialty: "Performance de criativos e padrões", description: "Análise de performance criativa, identificação de padrões vencedores.", frameworks: ["Creative Scoring", "Pattern Recognition", "Winner Analysis"], personality: "Analítico-criativo", color: "#38BDF8", initials: "CA" , bio: "Analista de performance criativa que identifica padrões vencedores em criativos. Usa scoring de criativos e reconhecimento de padrões para maximizar o impacto de cada peça publicitária."},
      { id: "scale-optimizer", name: "Scale Optimizer", role: "Scaling Specialist", specialty: "Escalação rentável", description: "Escalação de campanhas mantendo ROAS. Break-even e beyond.", frameworks: ["Scaling Framework", "ROAS Protection", "Budget Scaling"], personality: "Metódico, cauteloso", color: "#FDE047", initials: "SO" , bio: "Especialista em escalação rentável de campanhas. Gerencia o equilíbrio entre volume e ROAS, implementando frameworks de budget scaling e proteção de margem durante crescimento."},
      { id: "pixel-specialist", name: "Pixel Specialist", role: "Tracking Expert", specialty: "Tracking, CAPI e atribuição", description: "Implementação de pixels, CAPI, atribuição correta de conversões.", frameworks: ["Pixel Setup", "CAPI", "Attribution Models"], personality: "Técnico, preciso", color: "#E879F9", initials: "PX" , bio: "Expert em tracking e atribuição. Implementa pixels, CAPI (Conversions API) e modelos de atribuição para garantir que cada conversão seja corretamente medida e atribuída."},
      { id: "ads-analyst", name: "Ads Analyst", role: "Account Auditor", specialty: "Auditoria de contas e otimização", description: "Auditoria completa de contas de anúncios e plano de otimização.", frameworks: ["Account Audit", "Optimization Plan", "Waste Reduction"], personality: "Investigativo, detalhista", color: "#A3E635", initials: "AA" , bio: "Auditor de contas de anúncios que investiga ineficiências e oportunidades. Conduz auditorias completas e cria planos de otimização focados em redução de desperdício e aumento de performance."},
      { id: "fiscal", name: "Fiscal", role: "Budget Manager", specialty: "Orçamento e gestão financeira", description: "Gestão de orçamento, alocação de budget, controle de gastos.", frameworks: ["Budget Allocation", "Spend Control", "Financial Planning"], personality: "Conservador, preciso", color: "#FDA4AF", initials: "FI" , bio: "Gestor financeiro de operações de tráfego. Controla orçamentos, alocação de budget entre plataformas e campanhas, e garante saúde financeira das operações de mídia paga."},
    ],
    tasks: [
      { id: "campaign-audit", name: "Campaign Audit", filename: "campaign-audit.md", command: "*campaign-audit" },
      { id: "create-ad", name: "Create Ad", filename: "create-ad.md", command: "*create-ad" },
      { id: "targeting-strategy", name: "Targeting Strategy", filename: "targeting-strategy.md", command: "*targeting-strategy" },
      { id: "creative-brief", name: "Creative Brief", filename: "creative-brief.md", command: "*creative-brief" },
      { id: "scaling-plan", name: "Scaling Plan", filename: "scaling-plan.md", command: "*scaling-plan" },
      { id: "pixel-setup", name: "Pixel Setup", filename: "pixel-setup.md", command: "*pixel-setup" },
      { id: "budget-plan", name: "Budget Plan", filename: "budget-plan.md", command: "*budget-plan" },
      { id: "youtube-ad", name: "YouTube Ad Script", filename: "youtube-ad.md", command: "*youtube-ad" },
      { id: "google-ads-setup", name: "Google Ads Setup", filename: "google-ads-setup.md", command: "*google-ads-setup" },
    ],
    workflows: [
      { id: "wf-campaign-launch", name: "Pipeline de Lancamento de Campanha", description: "Do zero ao lançamento: auditoria, estratégia, criativos, setup de pixel e go-live.", duration: "2-3 hours", command: "*campaign-launch", steps: [
        { agent: "Traffic Chief", agentId: "traffic-chief", action: "diagnose", output: "traffic_plan" },
        { agent: "Molly Pittman", agentId: "molly-pittman", action: "strategy", output: "ad_strategy" },
        { agent: "Ad Midas", agentId: "ad-midas", action: "create", output: "creatives" },
        { agent: "Pixel Specialist", agentId: "pixel-specialist", action: "setup", output: "tracking" },
      ]},
      { id: "wf-scale-campaign", name: "Pipeline de Escalacao", description: "Análise de performance, otimização de criativos e escalação controlada.", duration: "1-2 hours", command: "*scale-campaign", steps: [
        { agent: "Performance Analyst", agentId: "performance-analyst", action: "analyze", output: "performance_report" },
        { agent: "Creative Analyst", agentId: "creative-analyst", action: "audit", output: "creative_insights" },
        { agent: "Scale Optimizer", agentId: "scale-optimizer", action: "scale", output: "scaling_plan" },
      ]},
    ],
  },
  {
    slug: "c-level-squad",
    name: "C-Level Squad",
    version: "v1.0.0", icon: "Building",
    description: "C-suite virtual completa — CEO, COO, CMO, CTO, CIO, CAIO e CFO. Todos os executivos que seu negocio precisa.",
    tags: ["c-suite", "strategy", "operations", "marketing", "technology", "finance"],
    accent: "#34D399",
    agents: [
      { id: "vision-chief", name: "Vision Chief", role: "CEO - Vision Architect", specialty: "Visão estratégica e direção empresarial", description: "Inteligência estratégica central. Visão de 3-5 anos com planos de execução de 90 dias.", frameworks: ["3-5 Year Vision", "90-Day Execution", "Culture Design"], personality: "Visionário, inspirador", color: "#34D399", initials: "VC", isChief: true , bio: "CEO virtual e arquiteto de visão estratégica. Define direção empresarial de 3-5 anos com planos de execução de 90 dias, cultura organizacional e alinhamento de stakeholders."},
      { id: "coo-orchestrator", name: "COO Orchestrator", role: "COO - Operations", specialty: "Excelência operacional e escalabilidade", description: "Constrói a máquina que constrói o produto. Sistemas, processos, KPIs.", frameworks: ["Operational Systems", "Process Design", "OKRs/KPIs"], personality: "Sistemático, eficiente", color: "#60A5FA", initials: "CO" , bio: "COO virtual focado em excelência operacional. Constrói a máquina que constrói o produto — sistemas, processos, KPIs e OKRs para escalabilidade sustentável."},
      { id: "cmo-architect", name: "CMO Architect", role: "CMO - Marketing", specialty: "Estratégia de marketing e go-to-market", description: "Ponte entre produto e mercado. Marca, posicionamento, geração de demanda.", frameworks: ["Go-to-Market", "Demand Gen", "Brand Strategy"], personality: "Criativo-estratégico", color: "#FB7185", initials: "CM" , bio: "CMO virtual que faz a ponte entre produto e mercado. Estratégia de go-to-market, geração de demanda, posicionamento de marca e stack de marketing integrado."},
      { id: "cto-architect", name: "CTO Architect", role: "CTO - Technology", specialty: "Visão tecnológica e arquitetura", description: "Transforma complexidade técnica em vantagem estratégica.", frameworks: ["Build vs Buy", "Tech Debt Management", "Architecture Decisions"], personality: "Pragmático, técnico", color: "#A78BFA", initials: "CT" , bio: "CTO virtual que transforma complexidade técnica em vantagem estratégica. Decisões de build vs buy, gestão de tech debt e arquitetura de sistemas escaláveis."},
      { id: "cio-engineer", name: "CIO Engineer", role: "CIO - Information", specialty: "Arquitetura empresarial e compliance", description: "Garante que o ecossistema de informação é um habilitador estratégico.", frameworks: ["Enterprise Architecture", "SOC2/GDPR/HIPAA", "Vendor Management"], personality: "Risk-aware, governança", color: "#FBBF24", initials: "CI" , bio: "CIO virtual focado em arquitetura empresarial e compliance. Garante que o ecossistema de informação seja habilitador estratégico com SOC2, GDPR e HIPAA."},
      { id: "caio-architect", name: "CAIO Architect", role: "CAIO - AI Strategy", specialty: "Estratégia de IA e implementação responsável", description: "Transforma potencial de IA em realidade. Pipelines ML, integração de LLMs.", frameworks: ["AI Use Case Matrix", "Data Readiness", "Ethical Governance"], personality: "Inovador, responsável", color: "#22D3EE", initials: "CA" , bio: "CAIO virtual que transforma potencial de IA em realidade. Pipelines de ML, integração de LLMs, governança ética de IA e priorização de use cases."},
      { id: "cfo-strategist", name: "CFO Strategist", role: "CFO - Finance", specialty: "Estratégia financeira e unit economics", description: "Modelagem financeira, fundraising, M&A, cash flow management.", frameworks: ["Financial Modeling", "Unit Economics", "Cash Flow Management"], personality: "Analítico, conservador, preciso", color: "#E8C547", initials: "CF" , bio: "CFO virtual especializado em modelagem financeira, fundraising, M&A e cash flow management. Transforma dados financeiros em decisões estratégicas para crescimento sustentável."},
    ],
    tasks: [
      { id: "strategic-plan", name: "Strategic Plan", filename: "strategic-plan.md", command: "*strategic-plan" },
      { id: "okr-design", name: "OKR Design", filename: "okr-design.md", command: "*okr-design" },
      { id: "gtm-strategy", name: "Go-to-Market Strategy", filename: "gtm-strategy.md", command: "*gtm-strategy" },
      { id: "tech-audit", name: "Tech Audit", filename: "tech-audit.md", command: "*tech-audit" },
      { id: "ai-strategy", name: "AI Strategy", filename: "ai-strategy.md", command: "*ai-strategy" },
      { id: "financial-model", name: "Financial Model", filename: "financial-model.md", command: "*financial-model" },
      { id: "fundraising-plan", name: "Fundraising Plan", filename: "fundraising-plan.md", command: "*fundraising-plan" },
    ],
    workflows: [
      { id: "wf-quarterly-review", name: "Quarterly Review", description: "Review trimestral completo com todos os C-levels avaliando suas áreas.", duration: "2-3 hours", command: "*quarterly-review", steps: [
        { agent: "Vision Chief", agentId: "vision-chief", action: "vision-check", output: "vision_status" },
        { agent: "COO Orchestrator", agentId: "coo-orchestrator", action: "ops-review", output: "ops_report" },
        { agent: "CFO Strategist", agentId: "cfo-strategist", action: "financial-review", output: "financial_report" },
      ]},
      { id: "wf-startup-setup", name: "Startup C-Suite Setup", description: "Configuração completa de C-suite para startup com visão, operações e finanças.", duration: "3-4 hours", command: "*startup-csuite", steps: [
        { agent: "Vision Chief", agentId: "vision-chief", action: "define-vision", output: "company_vision" },
        { agent: "CTO Architect", agentId: "cto-architect", action: "tech-stack", output: "tech_plan" },
        { agent: "CMO Architect", agentId: "cmo-architect", action: "gtm", output: "marketing_plan" },
        { agent: "CFO Strategist", agentId: "cfo-strategist", action: "financial-plan", output: "financial_model" },
      ]},
    ],
  },
  {
    slug: "design-squad", name: "Design Squad", version: "v1.0.0", icon: "Palette",
    description: "Squad de design operations — Brad Frost, Dan Mall, Dave Malouf + UX Designer, System Architect, Visual Generator e UI Engineer.",
    tags: ["design-systems", "ux", "ui", "atomic-design", "design-ops"],
    accent: "#FB7185",
    agents: [
      { id: "design-chief", name: "Design Chief", role: "Design Ops Orchestrator", specialty: "Coordenação de design operations", description: "Centro de comando conectando 7 agentes de design especializados.", frameworks: ["Design Challenge Assessment", "Specialist Routing"], personality: "Coordenador, visual", color: "#FB7185", initials: "DC", isChief: true , bio: "Orquestrador de Design Operations. Centro de comando que conecta 7 agentes especializados em design, coordenando desde atomic design até implementação pixel-perfect."},
      { id: "brad-frost", name: "Brad Frost", role: "Atomic Design Pioneer", specialty: "Atomic Design e Design Systems", description: "Autor de Atomic Design. Criador do Pattern Lab. Co-criador de design tokens.", frameworks: ["Atomic Design", "Pattern Lab", "Design Tokens"], personality: "Metódico, educador", color: "#60A5FA", initials: "BF" , photo: "https://unavatar.io/wikipedia/Brad_Frost_(web_developer)", bio: "Autor de \"Atomic Design\" e criador do Pattern Lab. Pioneiro na metodologia de design atômico que revolucionou como equipes constroem e mantêm design systems escaláveis."},
      { id: "dan-mall", name: "Dan Mall", role: "Design Systems at Scale", specialty: "Design Systems escaláveis", description: "Autor de Design That Scales. Ensinou design systems no Meta, Google, Netflix, Amazon.", frameworks: ["Design System Scaling", "Organizational Adoption", "Governance"], personality: "Estratégico, escalador", color: "#34D399", initials: "DM" , photo: "https://unavatar.io/wikipedia/Dan_Mall", bio: "Autor de \"Design That Scales\" e consultor de design systems para Meta, Google, Netflix e Amazon. Especialista em fazer design systems serem adotados organizacionalmente em grande escala."},
      { id: "dave-malouf", name: "Dave Malouf", role: "DesignOps Pioneer", specialty: "DesignOps e gestão de times de design", description: "Cunhou 'DesignOps'. Co-fundador da IxDA. Autor do DesignOps Handbook.", frameworks: ["DesignOps Practices", "Design Culture", "Agile Integration"], personality: "Líder, organizador", color: "#FBBF24", initials: "DMa" , photo: "https://unavatar.io/wikipedia/Dave_Malouf", bio: "Cunhou o termo \"DesignOps\" e co-fundou a IxDA (Interaction Design Association). Autor do DesignOps Handbook, pioneiro na profissionalização da gestão de times e operações de design."},
      { id: "ux-designer", name: "UX Designer", role: "User Experience Research", specialty: "Research, IA, wireframes", description: "Advogado do usuário. Pesquisa, IA, design de interação, testes de usabilidade.", frameworks: ["User Research", "Information Architecture", "Usability Testing"], personality: "Empático, investigativo", color: "#A78BFA", initials: "UX" , bio: "Advogado do usuário especializado em pesquisa, arquitetura de informação e testes de usabilidade. Transforma insights de pesquisa em wireframes e fluxos que equilibram necessidades do usuário com objetivos do negócio."},
      { id: "design-system-architect", name: "Design System Architect", role: "Component Library Expert", specialty: "Tokens e APIs de componentes", description: "Ponte entre intenção de design e código. Define tokens, APIs e documentação.", frameworks: ["Design Tokens", "Component APIs", "Storybook"], personality: "Técnico, preciso", color: "#F87171", initials: "SA" , bio: "Ponte entre intenção de design e código. Define design tokens, APIs de componentes e documentação técnica que garante consistência entre design e implementação."},
      { id: "visual-generator", name: "Visual Generator", role: "Visual Asset Creator", specialty: "Assets visuais e prompts de IA", description: "Cérebro visual. Conceitos brand-aligned, prompts de IA para imagens, sistemas de ícones.", frameworks: ["AI Image Prompts", "Visual Identity", "Icon Systems"], personality: "Criativo, visual", color: "#E8C547", initials: "VG" , bio: "Cérebro visual do squad. Cria conceitos brand-aligned, prompts de IA para geração de imagens, sistemas de ícones e assets visuais que mantêm identidade de marca."},
      { id: "ui-engineer", name: "UI Engineer", role: "Frontend UI Implementation", specialty: "Implementação pixel-perfect", description: "Transforma specs de design em código production-ready. Fidelidade pixel-perfect.", frameworks: ["React Components", "CSS/Tailwind", "Responsive", "Accessibility"], personality: "Perfeccionista, técnico", color: "#22D3EE", initials: "UI" , bio: "Engenheiro de interface que transforma specs de design em código production-ready. Fidelidade pixel-perfect com React, Tailwind, responsividade e acessibilidade WCAG."},
    ],
    tasks: [
      { id: "design-system", name: "Design System", filename: "design-system.md", command: "*design-system" },
      { id: "ux-research", name: "UX Research", filename: "ux-research.md", command: "*ux-research" },
      { id: "wireframe", name: "Wireframe", filename: "wireframe.md", command: "*wireframe" },
      { id: "ui-component", name: "UI Component", filename: "ui-component.md", command: "*ui-component" },
      { id: "visual-identity", name: "Visual Identity", filename: "visual-identity.md", command: "*visual-identity" },
      { id: "icon-system", name: "Icon System", filename: "icon-system.md", command: "*icon-system" },
      { id: "design-tokens", name: "Design Tokens", filename: "design-tokens.md", command: "*design-tokens" },
      { id: "accessibility-audit", name: "Accessibility Audit", filename: "accessibility-audit.md", command: "*accessibility-audit" },
    ],
    workflows: [
      { id: "wf-design-system", name: "Pipeline de Design System", description: "Criação completa de design system com atomic design, tokens e componentes.", duration: "4-6 hours", command: "*design-system-pipeline", steps: [
        { agent: "Brad Frost", agentId: "brad-frost", action: "atomic-structure", output: "atomic_hierarchy" },
        { agent: "Design System Architect", agentId: "design-system-architect", action: "tokens", output: "design_tokens" },
        { agent: "UI Engineer", agentId: "ui-engineer", action: "implement", output: "component_library" },
      ]},
      { id: "wf-ux-audit", name: "Auditoria de UX", description: "Auditoria completa de experiência do usuário com research, análise e recomendações.", duration: "2-3 hours", command: "*ux-audit", steps: [
        { agent: "UX Designer", agentId: "ux-designer", action: "research", output: "ux_findings" },
        { agent: "Design Chief", agentId: "design-chief", action: "synthesize", output: "ux_recommendations" },
      ]},
    ],
  },
  {
    slug: "data-squad", name: "Data Squad", version: "v1.0.0", icon: "BarChart3",
    description: "Squad de 7 estrategistas data-driven — Avinash Kaushik, Peter Fader, Sean Ellis, David Spinks, Nick Mehta, Wes Kao.",
    tags: ["analytics", "growth", "customer-success", "community", "clv", "retention"],
    accent: "#22D3EE",
    agents: [
      { id: "datum", name: "Datum", role: "Chief Data Officer", specialty: "Orquestração de dados", description: "CDO e Orquestrador do Data Squad. Roteia baseado na questão de negócio.", frameworks: ["Data Strategy", "Business Question Routing"], personality: "Analítico, orquestrador", color: "#22D3EE", initials: "DT", isChief: true , bio: "CDO e orquestrador do Data Squad. Roteia questões de negócio para o especialista certo entre analytics, CLV, growth, educação, customer success e comunidade."},
      { id: "avinash-kaushik", name: "Avinash Kaushik", role: "Web Analytics Evangelist", specialty: "Web Analytics e marketing digital", description: "Digital Marketing Evangelist por 15+ anos. See-Think-Do-Care.", frameworks: ["See-Think-Do-Care", "So What? Analysis", "Actionable KPIs"], personality: "Provocador, prático", color: "#60A5FA", initials: "AK" , photo: "https://unavatar.io/wikipedia/Avinash_Kaushik", bio: "Digital Marketing Evangelist do Google por mais de 15 anos. Criador do framework See-Think-Do-Care e autor de \"Web Analytics 2.0\". Evangelista de métricas acionáveis contra vanity metrics."},
      { id: "peter-fader", name: "Peter Fader", role: "CLV Scientist", specialty: "Customer Lifetime Value", description: "Professor de Marketing em Wharton. Modelos probabilísticos de comportamento.", frameworks: ["CLV Models", "Customer-Based Valuation", "Probabilistic Models"], personality: "Acadêmico, rigoroso", color: "#34D399", initials: "PF" , photo: "https://unavatar.io/wikipedia/Peter_Fader", bio: "Professor de Marketing em Wharton e co-fundador da Zodiac (adquirida pela Nike). Pioneiro em modelos probabilísticos de Customer Lifetime Value que transformaram como empresas valorizam clientes."},
      { id: "sean-ellis", name: "Sean Ellis", role: "Growth Hacking Pioneer", specialty: "Growth Hacking e Product-Market Fit", description: "Cunhou 'growth hacking' em 2010. Pirate Metrics AARRR.", frameworks: ["AARRR", "North Star Metric", "40% Test", "ICE Scoring"], personality: "Experimental, ágil", color: "#FBBF24", initials: "SE" , photo: "https://unavatar.io/wikipedia/Sean_Ellis_(entrepreneur)", bio: "Cunhou o termo \"growth hacking\" em 2010. Primeiro Head of Growth do Dropbox, LogMeIn e Eventbrite. Criador das Pirate Metrics (AARRR) e do teste de 40% para product-market fit."},
      { id: "wes-kao", name: "Wes Kao", role: "Cohort Education Expert", specialty: "Educação cohort-based e audience", description: "Co-fundadora da Maven. Cursos cohort-based, spiky POV.", frameworks: ["Cohort Design", "Spiky POV", "Audience Building"], personality: "Rigorosa, criativa", color: "#A78BFA", initials: "WK" , photo: "https://unavatar.io/wikipedia/Wes_Kao", bio: "Co-fundadora da Maven, plataforma líder em cursos cohort-based. Criadora do conceito \"Spiky POV\" — pontos de vista afiados que diferenciam creators e educadores no mercado."},
      { id: "nick-mehta", name: "Nick Mehta", role: "Customer Success CEO", specialty: "Customer Success e retenção", description: "CEO da Gainsight. Definiu Customer Success como disciplina.", frameworks: ["Health Scores", "NRR", "Customer Journey Mapping"], personality: "Customer-obsessed", color: "#F87171", initials: "NM" , photo: "https://unavatar.io/wikipedia/Nick_Mehta", bio: "CEO da Gainsight, a empresa que definiu Customer Success como disciplina de negócio. Autor de \"Customer Success\" e evangelista de Net Revenue Retention como métrica norte-estrela."},
      { id: "david-spinks", name: "David Spinks", role: "Community Strategist", specialty: "Estratégia de comunidade", description: "Fundador da CMX. Maior rede de profissionais de comunidade.", frameworks: ["SPACES Model", "Community-Led Growth", "Community ROI"], personality: "Comunitário, estratégico", color: "#FB7185", initials: "DSp" , photo: "https://unavatar.io/wikipedia/David_Spinks", bio: "Fundador da CMX, a maior rede mundial de profissionais de comunidade. Criador do SPACES Model para estratégia de comunidade e pioneiro do conceito Community-Led Growth."},
    ],
    tasks: [
      { id: "analytics-setup", name: "Analytics Setup", filename: "analytics-setup.md", command: "*analytics-setup" },
      { id: "clv-analysis", name: "CLV Analysis", filename: "clv-analysis.md", command: "*clv-analysis" },
      { id: "growth-audit", name: "Growth Audit", filename: "growth-audit.md", command: "*growth-audit" },
      { id: "community-strategy", name: "Community Strategy", filename: "community-strategy.md", command: "*community-strategy" },
      { id: "retention-analysis", name: "Retention Analysis", filename: "retention-analysis.md", command: "*retention-analysis" },
      { id: "cohort-design", name: "Cohort Design", filename: "cohort-design.md", command: "*cohort-design" },
      { id: "north-star", name: "North Star Metric", filename: "north-star.md", command: "*north-star" },
    ],
    workflows: [
      { id: "wf-growth-audit", name: "Growth Audit Pipeline", description: "Auditoria completa de growth com analytics, CLV, retenção e community.", duration: "2-3 hours", command: "*growth-audit-pipeline", steps: [
        { agent: "Avinash Kaushik", agentId: "avinash-kaushik", action: "analytics-audit", output: "analytics_report" },
        { agent: "Sean Ellis", agentId: "sean-ellis", action: "growth-assessment", output: "growth_gaps" },
        { agent: "Nick Mehta", agentId: "nick-mehta", action: "retention-check", output: "retention_report" },
      ]},
      { id: "wf-data-strategy", name: "Data Strategy Pipeline", description: "Estratégia completa de dados: métricas, CLV, growth experiments.", duration: "1-2 hours", command: "*data-strategy", steps: [
        { agent: "Datum", agentId: "datum", action: "assess", output: "data_landscape" },
        { agent: "Peter Fader", agentId: "peter-fader", action: "clv-model", output: "clv_framework" },
        { agent: "Sean Ellis", agentId: "sean-ellis", action: "experiment-plan", output: "growth_experiments" },
      ]},
    ],
  },
  {
    slug: "storytelling-squad", name: "Storytelling Squad", version: "v1.0.0", icon: "BookOpen",
    description: "Squad de 12 mestres do storytelling. Mitologia, screenwriting, narrativa pessoal, business storytelling, improviso, pitching.",
    tags: ["storytelling", "narrative", "screenplay", "pitching", "mythology", "presentation"],
    accent: "#F472B6",
    agents: [
      { id: "story-chief", name: "Story Chief", role: "Narrative Orchestrator", specialty: "Orquestração narrativa", description: "Coordenador do squad. Diagnóstico de necessidade narrativa e roteamento.", frameworks: ["Narrative Diagnostics", "Story Routing"], personality: "Narrativo, intuitivo", color: "#F472B6", initials: "SC", isChief: true , bio: "Orquestrador narrativo do Storytelling Squad. Diagnostica necessidades narrativas e roteia para o especialista ideal entre os 11 mestres do storytelling."},
      { id: "joseph-campbell", name: "Joseph Campbell", role: "Mythologist", specialty: "Mitologia e Jornada do Herói", description: "O mestre da Jornada do Herói. Monomito, arquétipos mitológicos.", frameworks: ["Hero's Journey", "Monomyth", "Mythological Archetypes"], personality: "Sábio, profundo", color: "#E8C547", initials: "JCa" , photo: "https://unavatar.io/wikipedia/Joseph_Campbell", bio: "Mitologista e autor de \"O Herói de Mil Faces\" (1949), obra que identificou o monomito — a Jornada do Herói presente em todas as culturas. Influenciou diretamente George Lucas na criação de Star Wars."},
      { id: "robert-mckee", name: "Robert McKee", role: "Story Structure Master", specialty: "Estrutura de roteiro e narrativa", description: "Autor de Story. Estrutura, beats, arcos narrativos.", frameworks: ["Story Structure", "Scene Beats", "Gap Theory"], personality: "Rigoroso, exigente", color: "#60A5FA", initials: "RM" , photo: "https://unavatar.io/wikipedia/Robert_McKee", bio: "Autor de \"Story: Substance, Structure, Style and the Principles of Screenwriting\", considerado a bíblia da narrativa. Seu seminário formou 60+ vencedores do Oscar e 200+ vencedores do Emmy."},
      { id: "nancy-duarte", name: "Nancy Duarte", role: "Presentation Storyteller", specialty: "Apresentações e storytelling visual", description: "Sparkline, ressonância, storytelling para apresentações.", frameworks: ["Sparkline", "Resonate", "Visual Storytelling"], personality: "Visual, inspiradora", color: "#34D399", initials: "ND" , photo: "https://unavatar.io/wikipedia/Nancy_Duarte", bio: "CEO da Duarte Inc, que criou o slide deck do \"An Inconvenient Truth\" de Al Gore. Autora de \"Resonate\" e criadora do Sparkline, framework que transforma apresentações em narrativas cativantes."},
      { id: "donald-miller-story", name: "Donald Miller", role: "Business Storyteller", specialty: "StoryBrand e business narrative", description: "Framework SB7 aplicado a negócios. Clareza de mensagem.", frameworks: ["SB7", "StoryBrand", "Business Narrative"], personality: "Claro, prático", color: "#FBBF24", initials: "DMs" , photo: "https://unavatar.io/wikipedia/Donald_Miller_(author)", bio: "Autor de \"Building a StoryBrand\" (bestseller #1 NYT). Criou o framework SB7 que ajuda empresas a clarificar suas mensagens usando a estrutura narrativa universal do herói e seu guia."},
      { id: "kindra-hall", name: "Kindra Hall", role: "Personal Story Expert", specialty: "Narrativa pessoal e stories that stick", description: "Stories that Stick. Quatro tipos de história que todo negócio precisa.", frameworks: ["4 Story Types", "Stories That Stick", "Strategic Storytelling"], personality: "Calorosa, envolvente", color: "#A78BFA", initials: "KH" , photo: "https://unavatar.io/wikipedia/Kindra_Hall", bio: "Autora de \"Stories That Stick\" e presidente da Steller Collective. Identificou os 4 tipos de história que todo negócio precisa: valor, fundador, propósito e cliente. Campeã nacional de storytelling."},
      { id: "keith-johnstone", name: "Keith Johnstone", role: "Improv Master", specialty: "Improvisação e espontaneidade", description: "Pai da improvisação moderna. Status, espontaneidade, aceitar ofertas.", frameworks: ["Status Games", "Yes And", "Spontaneity"], personality: "Espontâneo, playful", color: "#F87171", initials: "KJ" , photo: "https://unavatar.io/wikipedia/Keith_Johnstone", bio: "Pai da improvisação moderna e autor de \"Impro\" (1979). Criador dos conceitos de status, espontaneidade e \"aceitar ofertas\" que revolucionaram teatro improvisacional e influenciam comunicação empresarial."},
      { id: "oren-klaff", name: "Oren Klaff", role: "Pitch Master", specialty: "Pitching e persuasão narrativa", description: "Pitch Anything. Neurofinance, frame control, intriga.", frameworks: ["STRONG Method", "Frame Control", "Neurofinance"], personality: "Intenso, estratégico", color: "#FB7185", initials: "OK" , photo: "https://unavatar.io/wikipedia/Oren_Klaff", bio: "Autor de \"Pitch Anything\" e levantou mais de $400M em capital usando neurofinance. Criador do STRONG Method e do conceito de frame control para pitches de alto impacto."},
      { id: "carmine-gallo", name: "Carmine Gallo", role: "TED-Style Storyteller", specialty: "Apresentações estilo TED", description: "Talk Like TED. Técnicas dos melhores apresentadores do mundo.", frameworks: ["Talk Like TED", "Rule of Three", "Jaw-Dropping Moments"], personality: "Energético, didático", color: "#22D3EE", initials: "CG" , photo: "https://unavatar.io/wikipedia/Carmine_Gallo", bio: "Autor de \"Talk Like TED\" e colunista da Forbes. Analisou centenas de TED Talks para extrair as técnicas dos melhores apresentadores do mundo, incluindo a Rule of Three e Jaw-Dropping Moments."},
      { id: "annette-simmons", name: "Annette Simmons", role: "Trust Storyteller", specialty: "Stories que constroem confiança", description: "Whoever Tells the Best Story Wins. Seis tipos de história.", frameworks: ["Six Story Types", "Trust Building", "Influence Narratives"], personality: "Autêntica, empática", color: "#4ADE80", initials: "AS" , photo: "https://unavatar.io/wikipedia/Annette_Simmons", bio: "Autora de \"Whoever Tells the Best Story Wins\" e \"The Story Factor\". Identificou 6 tipos de história para construir confiança e influência, usados em negociações e liderança."},
      { id: "matthew-dicks", name: "Matthew Dicks", role: "Moth Storyteller", specialty: "Storytelling pessoal e competitivo", description: "54x Moth StorySLAM champion. Storyworthy. Homework for Life.", frameworks: ["Storyworthy", "Homework for Life", "5-Second Moment"], personality: "Vulnerável, envolvente", color: "#C084FC", initials: "MD" , photo: "https://unavatar.io/wikipedia/Matthew_Dicks", bio: "54x campeão do Moth StorySLAM e autor de \"Storyworthy\". Criador do exercício \"Homework for Life\" e do conceito \"5-Second Moment\" — a transformação interna que torna qualquer história memorável."},
      { id: "christopher-vogler", name: "Christopher Vogler", role: "Writer's Journey Expert", specialty: "Adaptação da Jornada do Herói para escrita", description: "The Writer's Journey. Adaptação prática de Campbell para roteiristas.", frameworks: ["Writer's Journey", "Character Archetypes", "Story Structure"], personality: "Prático, estruturado", color: "#E879F9", initials: "CV" , photo: "https://unavatar.io/wikipedia/Christopher_Vogler", bio: "Autor de \"The Writer's Journey\", adaptação prática da Jornada do Herói de Campbell para roteiristas. Seu memo de 7 páginas na Disney mudou como Hollywood desenvolve histórias."},
    ],
    tasks: [
      { id: "brand-story-create", name: "Create Brand Story", filename: "brand-story.md", command: "*brand-story" },
      { id: "pitch-deck", name: "Pitch Deck Narrative", filename: "pitch-deck.md", command: "*pitch-deck" },
      { id: "origin-story", name: "Origin Story", filename: "origin-story.md", command: "*origin-story" },
      { id: "case-study", name: "Case Study", filename: "case-study.md", command: "*case-study" },
      { id: "presentation-script", name: "Presentation Script", filename: "presentation.md", command: "*presentation" },
      { id: "customer-story", name: "Customer Story", filename: "customer-story.md", command: "*customer-story" },
      { id: "content-narrative", name: "Content Narrative", filename: "content-narrative.md", command: "*content-narrative" },
      { id: "video-script", name: "Video Script", filename: "video-script.md", command: "*video-script" },
    ],
    workflows: [
      { id: "wf-brand-narrative", name: "Pipeline de Narrativa de Marca", description: "Construção completa da narrativa de marca com mitologia, estrutura e implementação.", duration: "2-4 hours", command: "*brand-narrative", steps: [
        { agent: "Joseph Campbell", agentId: "joseph-campbell", action: "mythic-structure", output: "mythic_framework" },
        { agent: "Robert McKee", agentId: "robert-mckee", action: "story-structure", output: "narrative_arc" },
        { agent: "Donald Miller", agentId: "donald-miller-story", action: "brand-script", output: "brand_story" },
      ]},
      { id: "wf-pitch-creation", name: "Pipeline de Pitch", description: "Criação de pitch com storytelling, estrutura narrativa e elementos persuasivos.", duration: "1-2 hours", command: "*pitch-pipeline", steps: [
        { agent: "Oren Klaff", agentId: "oren-klaff", action: "frame-design", output: "pitch_frame" },
        { agent: "Nancy Duarte", agentId: "nancy-duarte", action: "visual-story", output: "presentation_arc" },
        { agent: "Carmine Gallo", agentId: "carmine-gallo", action: "ted-polish", output: "final_pitch" },
      ]},
    ],
  },
  {
    slug: "cybersecurity-squad", name: "Cybersecurity Squad", version: "v1.0.0", icon: "Shield",
    description: "Squad de 15 agentes de ciberseguranca. Pentest, red team, blue team, AppSec, incident response, recon, exploitation — tudo com framework etico.",
    tags: ["pentesting", "red-team", "blue-team", "appsec", "incident-response", "recon"],
    accent: "#4ADE80",
    agents: [
      { id: "sec-chief", name: "Security Chief", role: "CISO Orchestrator", specialty: "Orquestração de segurança", description: "CISO virtual. Diagnóstico, roteamento e coordenação de operações de segurança.", frameworks: ["Security Diagnostics", "Threat Assessment", "Team Routing"], personality: "Cauteloso, estratégico", color: "#4ADE80", initials: "SC", isChief: true , bio: "CISO virtual e orquestrador de operações de segurança. Coordena diagnósticos, roteamento e resposta entre 14 agentes especializados em diferentes domínios de cibersegurança."},
      { id: "recon-agent", name: "Recon Agent", role: "Reconnaissance Specialist", specialty: "OSINT e reconhecimento", description: "Coleta de inteligência, OSINT, footprinting, enumeração.", frameworks: ["OSINT", "Footprinting", "Enumeration", "Passive Recon"], personality: "Investigativo, silencioso", color: "#60A5FA", initials: "RA" , bio: "Especialista em reconhecimento e OSINT (Open Source Intelligence). Coleta inteligência sobre superfície de ataque através de footprinting, enumeração e reconhecimento passivo."},
      { id: "red-team-lead", name: "Red Team Lead", role: "Offensive Security", specialty: "Red team operations", description: "Líder de operações ofensivas. Simulação de adversários, TTPs.", frameworks: ["MITRE ATT&CK", "Kill Chain", "Adversary Simulation"], personality: "Adversarial, criativo", color: "#F87171", initials: "RT" , bio: "Líder de operações ofensivas de segurança. Simula adversários reais usando MITRE ATT&CK, Kill Chain e técnicas de adversary simulation para encontrar vulnerabilidades antes dos atacantes."},
      { id: "blue-team-lead", name: "Blue Team Lead", role: "Defensive Security", specialty: "Blue team e defesa", description: "Líder de defesa. Detection, response, hardening.", frameworks: ["Defense in Depth", "SIEM", "Incident Detection"], personality: "Vigilante, metódico", color: "#34D399", initials: "BT" , bio: "Líder de defesa e segurança defensiva. Implementa Defense in Depth, configura SIEM e sistemas de detecção de incidentes para proteger ativos digitais proativamente."},
      { id: "appsec-engineer", name: "AppSec Engineer", role: "Application Security", specialty: "Segurança de aplicações", description: "OWASP Top 10, SAST/DAST, code review de segurança.", frameworks: ["OWASP Top 10", "SAST/DAST", "Secure SDLC"], personality: "Detalhista, orientado a código", color: "#A78BFA", initials: "AS" , bio: "Engenheiro de segurança de aplicações focado em OWASP Top 10. Conduz SAST/DAST, code reviews de segurança e implementa Secure SDLC para prevenir vulnerabilidades desde o desenvolvimento."},
      { id: "pentester", name: "Pentester", role: "Penetration Tester", specialty: "Testes de penetração", description: "Testes manuais e automatizados de penetração. Web, API, infra.", frameworks: ["PTES", "Web Pentesting", "API Security Testing"], personality: "Curioso, persistente", color: "#FBBF24", initials: "PT" , bio: "Testador de penetração para web, API e infraestrutura. Conduz testes manuais e automatizados seguindo PTES para identificar vulnerabilidades exploráveis em sistemas."},
      { id: "incident-responder", name: "Incident Responder", role: "IR Specialist", specialty: "Resposta a incidentes", description: "Coordenação de resposta, contenção, erradicação e recovery.", frameworks: ["NIST IR", "Containment", "Forensics", "Recovery"], personality: "Calmo sob pressão", color: "#FB7185", initials: "IR" , bio: "Especialista em resposta a incidentes seguindo NIST IR Framework. Coordena contenção, erradicação, forensics e recovery para minimizar impacto de breaches de segurança."},
      { id: "malware-analyst", name: "Malware Analyst", role: "Malware Research", specialty: "Análise de malware", description: "Análise estática e dinâmica, reverse engineering, IOC extraction.", frameworks: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering"], personality: "Analítico, paciente", color: "#22D3EE", initials: "MA" , bio: "Analista de malware que conduz análise estática e dinâmica, reverse engineering e extração de IOCs. Decodifica comportamento malicioso para informar defesa e resposta."},
      { id: "cloud-security", name: "Cloud Security", role: "Cloud Security Architect", specialty: "Segurança em nuvem", description: "AWS/GCP/Azure security, IAM, compliance cloud.", frameworks: ["CIS Benchmarks", "Cloud Security Posture", "IAM Best Practices"], personality: "Arquiteto, cloud-native", color: "#E8C547", initials: "CS" , bio: "Arquiteto de segurança em nuvem para AWS, GCP e Azure. Implementa CIS Benchmarks, Cloud Security Posture Management e IAM Best Practices para ambientes multi-cloud."},
      { id: "network-security", name: "Network Security", role: "Network Defense", specialty: "Segurança de rede", description: "Firewalls, IDS/IPS, segmentação, zero trust.", frameworks: ["Zero Trust", "Network Segmentation", "IDS/IPS"], personality: "Infraestrutura, vigilante", color: "#C084FC", initials: "NS" , bio: "Especialista em segurança de rede que implementa Zero Trust, segmentação de rede e IDS/IPS. Protege o perímetro e a comunicação interna contra ameaças laterais."},
      { id: "social-engineer", name: "Social Engineer", role: "Human Hacking Expert", specialty: "Engenharia social", description: "Phishing, pretexting, awareness training. Teste de fator humano.", frameworks: ["Social Engineering Framework", "Phishing Campaigns", "Awareness Training"], personality: "Persuasivo, ético", color: "#F472B6", initials: "SE" , bio: "Expert em engenharia social ético. Conduz campanhas de phishing, pretexting e awareness training para testar e fortalecer o fator humano da segurança organizacional."},
      { id: "crypto-analyst", name: "Crypto Analyst", role: "Cryptography Expert", specialty: "Criptografia e PKI", description: "Análise criptográfica, PKI, TLS, key management.", frameworks: ["PKI", "TLS Analysis", "Key Management", "Crypto Best Practices"], personality: "Matemático, preciso", color: "#38BDF8", initials: "CR" , bio: "Especialista em criptografia e PKI. Analisa implementações TLS, gerencia chaves criptográficas e garante que dados sensíveis estejam protegidos com as melhores práticas."},
      { id: "compliance-officer", name: "Compliance Officer", role: "Security Compliance", specialty: "Compliance e auditoria", description: "SOC2, ISO 27001, GDPR, HIPAA, PCI-DSS.", frameworks: ["SOC2", "ISO 27001", "GDPR", "PCI-DSS"], personality: "Rigoroso, documentador", color: "#FDE047", initials: "CO" , bio: "Oficial de compliance de segurança para SOC2, ISO 27001, GDPR, HIPAA e PCI-DSS. Documenta, audita e garante conformidade com frameworks regulatórios."},
      { id: "threat-intel", name: "Threat Intelligence", role: "Threat Intel Analyst", specialty: "Inteligência de ameaças", description: "CTI, IOC tracking, threat landscape analysis.", frameworks: ["CTI", "Diamond Model", "IOC Analysis"], personality: "Investigativo, proativo", color: "#E879F9", initials: "TI" , bio: "Analista de inteligência de ameaças (CTI). Rastreia IOCs, analisa threat landscape usando Diamond Model e informa estrategicamente sobre ameaças emergentes."},
      { id: "devsecops", name: "DevSecOps", role: "Security Automation", specialty: "DevSecOps e pipeline security", description: "CI/CD security, container security, IaC scanning.", frameworks: ["Pipeline Security", "Container Security", "IaC Scanning"], personality: "Automatizador, ágil", color: "#A3E635", initials: "DO" , bio: "Especialista em automação de segurança no pipeline DevOps. Implementa CI/CD security, container security e IaC scanning para shift-left na segurança."},
    ],
    tasks: [
      { id: "pentest", name: "Pentest", filename: "pentest.md", command: "*pentest" },
      { id: "security-audit", name: "Security Audit", filename: "security-audit.md", command: "*security-audit" },
      { id: "incident-response", name: "Incident Response", filename: "incident-response.md", command: "*incident-response" },
      { id: "threat-assessment", name: "Threat Assessment", filename: "threat-assessment.md", command: "*threat-assessment" },
      { id: "compliance-audit", name: "Compliance Audit", filename: "compliance-audit.md", command: "*compliance-audit" },
      { id: "appsec-review", name: "AppSec Review", filename: "appsec-review.md", command: "*appsec-review" },
      { id: "cloud-audit", name: "Cloud Security Audit", filename: "cloud-audit.md", command: "*cloud-audit" },
      { id: "phishing-test", name: "Phishing Test", filename: "phishing-test.md", command: "*phishing-test" },
      { id: "red-team-op", name: "Red Team Operation", filename: "red-team-op.md", command: "*red-team-op" },
    ],
    workflows: [
      { id: "wf-security-audit", name: "Auditoria de Seguranca Completa", description: "Auditoria completa: recon, pentest, appsec, compliance.", duration: "4-8 hours", command: "*full-security-audit", steps: [
        { agent: "Recon Agent", agentId: "recon-agent", action: "reconnaissance", output: "attack_surface" },
        { agent: "Pentester", agentId: "pentester", action: "pentest", output: "vulnerabilities" },
        { agent: "AppSec Engineer", agentId: "appsec-engineer", action: "code-review", output: "code_findings" },
        { agent: "Compliance Officer", agentId: "compliance-officer", action: "compliance-check", output: "compliance_report" },
      ]},
      { id: "wf-incident-response", name: "Resposta a Incidente", description: "Pipeline de resposta: detecção, contenção, erradicação e recovery.", duration: "1-4 hours", command: "*incident-pipeline", steps: [
        { agent: "Blue Team Lead", agentId: "blue-team-lead", action: "detect", output: "detection_report" },
        { agent: "Incident Responder", agentId: "incident-responder", action: "contain", output: "containment" },
        { agent: "Malware Analyst", agentId: "malware-analyst", action: "analyze", output: "malware_report" },
        { agent: "Security Chief", agentId: "sec-chief", action: "remediate", output: "remediation_plan" },
      ]},
    ],
  },
  {
    slug: "movement-squad", name: "Movement Squad", version: "v1.0.0", icon: "Users",
    description: "Squad de 7 agentes para construcao de movimentos. Fenomenologia, identidade, manifestos, ciclos de crescimento, medicao de impacto.",
    tags: ["movement", "community", "social-impact", "identity", "manifesto"],
    accent: "#C084FC",
    agents: [
      { id: "movement-chief", name: "Movement Chief", role: "Movement Orchestrator", specialty: "Orquestração de movimentos", description: "Coordenador do squad. Diagnóstico e roteamento para construção de movimentos.", frameworks: ["Movement Diagnostics", "Phase Assessment"], personality: "Inspirador, estratégico", color: "#C084FC", initials: "MC", isChief: true , bio: "Orquestrador de construção de movimentos. Diagnostica a fase do movimento e coordena 6 especialistas em fenomenologia, identidade, manifestos, crescimento, impacto e comunidade."},
      { id: "phenomenologist", name: "Phenomenologist", role: "Cultural Analyst", specialty: "Fenomenologia e análise cultural", description: "Análise fenomenológica de tendências, movimentos e zeitgeist cultural.", frameworks: ["Phenomenological Analysis", "Cultural Mapping", "Zeitgeist Reading"], personality: "Profundo, observador", color: "#E8C547", initials: "PH" , bio: "Analista cultural que aplica fenomenologia para ler o zeitgeist. Mapeia tendências culturais, identifica tensões sociais e descobre o timing ideal para lançamento de movimentos."},
      { id: "identity-architect", name: "Identity Architect", role: "Movement Identity", specialty: "Identidade de movimento", description: "Criação de identidade coletiva, símbolos, linguagem compartilhada.", frameworks: ["Collective Identity", "Symbol Creation", "Shared Language"], personality: "Simbólico, unificador", color: "#60A5FA", initials: "IA" , bio: "Arquiteto de identidade coletiva para movimentos. Cria símbolos, linguagem compartilhada e elementos visuais que unificam membros e diferenciam o movimento no cenário cultural."},
      { id: "manifesto-writer", name: "Manifesto Writer", role: "Manifesto Creator", specialty: "Escritor de manifestos", description: "Manifestos que inspiram ação. Declarações de princípios, calls to action.", frameworks: ["Manifesto Structure", "Principle Declaration", "Call to Action"], personality: "Apaixonado, eloquente", color: "#F87171", initials: "MW" , bio: "Escritor de manifestos que inspiram ação. Declara princípios, articula visão de mundo e cria calls to action que mobilizam pessoas em torno de uma causa compartilhada."},
      { id: "growth-catalyst", name: "Growth Catalyst", role: "Movement Growth", specialty: "Ciclos de crescimento de movimentos", description: "Estratégias de crescimento orgânico, viralidade e escala de movimentos.", frameworks: ["Growth Cycles", "Viral Mechanics", "Movement Scaling"], personality: "Energético, expansivo", color: "#34D399", initials: "GC" , bio: "Catalisador de crescimento de movimentos. Desenvolve estratégias de viralidade orgânica, mecânicas de compartilhamento e escalação que respeitam a essência do movimento."},
      { id: "impact-measurer", name: "Impact Measurer", role: "Impact Analyst", specialty: "Medição de impacto", description: "Métricas de impacto social, KPIs de movimento, relatórios de progresso.", frameworks: ["Impact Metrics", "Movement KPIs", "Progress Reporting"], personality: "Analítico, orientado a dados", color: "#FBBF24", initials: "IM" , bio: "Analista de impacto social que define métricas, KPIs de movimento e relatórios de progresso. Transforma impacto qualitativo em dados quantificáveis para decisões estratégicas."},
      { id: "community-weaver", name: "Community Weaver", role: "Community Builder", specialty: "Tecelagem de comunidade", description: "Conexão entre membros, rituais comunitários, senso de pertencimento.", frameworks: ["Community Rituals", "Belonging Design", "Member Connection"], personality: "Empático, conector", color: "#A78BFA", initials: "CW" , bio: "Tecelão de comunidade que fortalece conexões entre membros. Desenha rituais comunitários, cria senso de pertencimento e facilita a construção de relacionamentos significativos."},
    ],
    tasks: [
      { id: "movement-strategy", name: "Movement Strategy", filename: "movement-strategy.md", command: "*movement-strategy" },
      { id: "write-manifesto", name: "Write Manifesto", filename: "write-manifesto.md", command: "*write-manifesto" },
      { id: "identity-design", name: "Identity Design", filename: "identity-design.md", command: "*identity-design" },
      { id: "growth-plan", name: "Growth Plan", filename: "growth-plan.md", command: "*growth-plan" },
      { id: "impact-report", name: "Impact Report", filename: "impact-report.md", command: "*impact-report" },
      { id: "community-plan", name: "Community Plan", filename: "community-plan.md", command: "*community-plan" },
      { id: "cultural-analysis", name: "Cultural Analysis", filename: "cultural-analysis.md", command: "*cultural-analysis" },
    ],
    workflows: [
      { id: "wf-movement-creation", name: "Pipeline de Criacao de Movimento", description: "Do zero ao movimento: análise cultural, identidade, manifesto e estratégia de crescimento.", duration: "3-5 hours", command: "*create-movement", steps: [
        { agent: "Phenomenologist", agentId: "phenomenologist", action: "analyze-culture", output: "cultural_analysis" },
        { agent: "Identity Architect", agentId: "identity-architect", action: "design-identity", output: "movement_identity" },
        { agent: "Manifesto Writer", agentId: "manifesto-writer", action: "write-manifesto", output: "manifesto" },
        { agent: "Growth Catalyst", agentId: "growth-catalyst", action: "growth-strategy", output: "growth_plan" },
      ]},
    ],
  },
  {
    slug: "product-squad", name: "Product Squad", version: "v1.0.0", icon: "Cog",
    description: "O squad que falta em todo lugar — Product Manager, SEO Architect, CFO Strategist e AI Ethics Guardian. Os pilares invisiveis do crescimento.",
    tags: ["product", "seo", "finance", "ai-ethics", "strategy"],
    accent: "#38BDF8",
    agents: [
      { id: "product-manager", name: "Product Manager", role: "Product Strategist", specialty: "Discovery, delivery e roadmaps", description: "Inspirado em Marty Cagan e Melissa Perri. Continuous discovery, OKRs, product-market fit.", frameworks: ["Inspired", "Continuous Discovery", "OKRs", "Product-Market Fit"], personality: "Estratégico, empático, data-driven", color: "#38BDF8", initials: "PM", isChief: true , bio: "Product Manager inspirado em Marty Cagan e Melissa Perri. Conduz continuous discovery, define OKRs, busca product-market fit e prioriza roadmaps baseados em dados e empatia."},
      { id: "seo-architect", name: "SEO Architect", role: "Organic Search Expert", specialty: "SEO técnico, conteúdo e autoridade", description: "Arquitetura de SEO completa. Technical SEO, content strategy, link building, E-E-A-T.", frameworks: ["Technical SEO", "Content Clusters", "E-E-A-T", "Link Building"], personality: "Técnico, paciente, estratégico", color: "#4ADE80", initials: "SE" , bio: "Arquiteto de SEO que domina technical SEO, content clusters, E-E-A-T e link building. Constrói a fundação orgânica que gera tráfego sustentável e autoridade de domínio."},
      { id: "cfo-product", name: "CFO Strategist", role: "Financial Architect", specialty: "Unit economics e modelagem financeira", description: "Modelagem financeira, fundraising, M&A, cash flow. Cada decisão de produto tem impacto financeiro.", frameworks: ["Unit Economics", "Financial Modeling", "Fundraising", "Cash Flow"], personality: "Analítico, conservador, preciso", color: "#FBBF24", initials: "CF" , bio: "CFO estratégico focado em unit economics e modelagem financeira de produtos. Garante que cada decisão de produto tenha viabilidade financeira e contribua para crescimento sustentável."},
      { id: "ai-ethics-guardian", name: "AI Ethics Guardian", role: "Responsible AI Expert", specialty: "Ética de IA e governança", description: "Governança de IA responsável. Bias detection, fairness, transparência, compliance.", frameworks: ["AI Ethics Framework", "Bias Detection", "Fairness Metrics", "Responsible AI"], personality: "Ético, cauteloso, principled", color: "#A78BFA", initials: "AE" , bio: "Guardião de ética em IA responsável. Conduz bias detection, avalia fairness metrics, garante transparência e compliance em implementações de inteligência artificial."},
    ],
    tasks: [
      { id: "product-discovery", name: "Product Discovery", filename: "product-discovery.md", command: "*product-discovery" },
      { id: "seo-audit", name: "SEO Audit", filename: "seo-audit.md", command: "*seo-audit" },
      { id: "financial-model-product", name: "Financial Model", filename: "financial-model.md", command: "*financial-model" },
      { id: "ai-ethics-review", name: "AI Ethics Review", filename: "ai-ethics-review.md", command: "*ai-ethics-review" },
      { id: "content-strategy", name: "Content Strategy", filename: "content-strategy.md", command: "*content-strategy" },
      { id: "roadmap", name: "Product Roadmap", filename: "roadmap.md", command: "*roadmap" },
    ],
    workflows: [
      { id: "wf-product-launch", name: "Pipeline de Lancamento de Produto", description: "Discovery, validação financeira, SEO e review de ética antes do launch.", duration: "2-4 hours", command: "*product-launch", steps: [
        { agent: "Product Manager", agentId: "product-manager", action: "discovery", output: "product_spec" },
        { agent: "CFO Strategist", agentId: "cfo-product", action: "financial-validation", output: "financial_viability" },
        { agent: "SEO Architect", agentId: "seo-architect", action: "seo-plan", output: "seo_strategy" },
        { agent: "AI Ethics Guardian", agentId: "ai-ethics-guardian", action: "ethics-review", output: "ethics_clearance" },
      ]},
      { id: "wf-seo-strategy", name: "SEO Strategy Pipeline", description: "Estratégia completa de SEO com auditoria técnica, content clusters e link building.", duration: "1-2 hours", command: "*seo-strategy", steps: [
        { agent: "SEO Architect", agentId: "seo-architect", action: "technical-audit", output: "tech_seo_report" },
        { agent: "SEO Architect", agentId: "seo-architect", action: "content-plan", output: "content_clusters" },
        { agent: "Product Manager", agentId: "product-manager", action: "prioritize", output: "seo_roadmap" },
      ]},
    ],
  },
];

// Helper functions
export function getSquadBySlug(slug: string): Squad | undefined {
  return squads.find(s => s.slug === slug);
}

export function getAllAgents(): (Agent & { squadName: string; squadSlug: string })[] {
  return squads.flatMap(squad =>
    squad.agents.map(agent => ({ ...agent, squadName: squad.name, squadSlug: squad.slug }))
  );
}

export function getTotalStats() {
  return {
    squads: squads.length,
    agents: squads.reduce((acc, s) => acc + s.agents.length, 0),
    tasks: squads.reduce((acc, s) => acc + s.tasks.length, 0),
    workflows: squads.reduce((acc, s) => acc + s.workflows.length, 0),
  };
}
