import media1 from "../assets/Mídia 1.jpeg";
import media2 from "../assets/Mídia 2.jpeg";
import media3 from "../assets/Mídia 3.jpeg";
import media4 from "../assets/Mídia 4.jpeg";
import media5 from "../assets/Mídia 5.jpeg";
import media6 from "../assets/Mídia 6.jpeg";

const projects = [
  {
    title: "Fufu das Águas | ERP/POS Fullstack",
    status: "Projeto real entregue e em produção",
    role: "Fullstack (projeto prático)",
    summary:
      "Sistema ERP/POS completo para distribuidora de bebidas, finalizado e entregue ao cliente, com operação em nuvem e foco em produtividade no dia a dia da equipe.",
    challenge:
      "Centralizar pedidos, clientes, estoque, pagamentos e indicadores em uma única plataforma acessível por qualquer dispositivo.",
    solution:
      "Arquitetura desacoplada com frontend em Vercel, API Node/Express no Render e banco MongoDB Atlas, incluindo fluxo completo de pedidos e dashboard executivo.",
    media: [media1, media2, media3, media4, media5, media6],
    impact: [
      "Projeto entregue com sucesso e operando em produção (Vercel + Render)",
      "Controle operacional em tempo real",
      "Redução de retrabalho com automações de fluxo",
      "Visão de faturamento, lucro e ticket médio para decisão rápida",
    ],
    security: [
      "Autenticação JWT e criptografia com bcryptjs",
      "Validação de payload com Joi",
      "Rate limiting, CORS por whitelist e permissões por role",
    ],
    stack: [
      "React 18",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "MUI",
      "Recharts",
    ],
    links: [
      {
        label: "Ver Projeto",
        url: "https://www.linkedin.com/posts/lucasmacedodev_nodejs-react-mongodb-activity-7444879528881070081-m05c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiQcgoBRKHF7j7_-2vSGb8f4jfjWeFzgek",
      },
    ],
  },
  {
    title: "Spotify UI | Frontend React",
    status: "Projeto de portfólio",
    role: "Frontend",
    summary:
      "Interface inspirada no Spotify com foco em componentização, responsividade e navegação fluida para catálogo musical.",
    stack: ["React", "JavaScript", "CSS", "Componentização"],
    links: [
      {
        label: "Ver Projeto",
        url: "https://github.com/Lucasntj/Projeto-Spotify",
      },
    ],
  },
  {
    title: "Chatbot IA | Next.js",
    status: "Projeto de estudo aplicado",
    role: "Frontend + Integração",
    summary:
      "Chatbot com IA em Next.js, com prompts customizados e respostas em tempo real para experiências conversacionais.",
    stack: ["Next.js", "React", "APIs de IA", "UX conversacional"],
    links: [
      {
        label: "Ver Projeto",
        url: "https://github.com/Lucasntj/nextjs-ai-chatbot",
      },
    ],
  },
  {
    title: "Mercado Livre UI | React + Node.js",
    status: "Projeto de estudo aplicado",
    role: "Fullstack (estudo aplicado)",
    summary:
      "Aplicação inspirada no Mercado Livre, com foco em usabilidade e organização de catálogo, utilizando React para frontend e Node.js para backend.",
    stack: ["JavaScript", "Node.js", "Frontend", "Regras de negócio"],
    links: [
      {
        label: "Ver Projeto",
        url: "https://www.linkedin.com/posts/lucasmacedodev_javascript-nodejs-fullstack-activity-7354553345220427777-3P1H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiQcgoBRKHF7j7_-2vSGb8f4jfjWeFzgek",
      },
    ],
  },
];

export default projects;
