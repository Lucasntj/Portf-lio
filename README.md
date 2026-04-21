# Portfólio | Lucas Macedo

Portfólio profissional em React focado em candidatura para vagas de Desenvolvedor Fullstack Júnior.

## Objetivo

Apresentar projetos reais e de estudo aplicado com foco em:

- Clareza para recrutadores;
- Boa experiência visual (landing page);
- Acesso rápido a currículo e contato.

## Stack

- React 18
- React Router
- CSS (estilos customizados)

## Estrutura principal

```
react-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   └── projects.js
│   ├── pages/
│   │   └── Home.jsx
│   └── styles/
│       └── main.css
└── package.json
```

## Como rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Inicie em modo desenvolvimento:

```bash
npm run dev
```

3. Gere build de produção:

```bash
npm run build
```

## Onde editar conteúdo

- Projetos e links: `src/data/projects.js`
- Texto da landing: `src/pages/Home.jsx`
- Estilo visual: `src/styles/main.css`

## Checklist de envio para recrutadores

Antes de enviar o link, valide:

1. `npm run build` sem erros.
2. Link do currículo funcionando (`public/curriculo.pdf`).
3. Links de LinkedIn, GitHub, WhatsApp e e-mail funcionando.
4. Primeira dobra da página com título e posicionamento corretos.
5. Case principal com imagens abrindo no lightbox.

## Licença

MIT.
