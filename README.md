# Sunrose Backoffice

Aplicação completa de backoffice fictício para a empresa **Sunrose Beach & Resort Wear**, construída com **Next.js 14**, **React 18** e **Node.js** (rotas `app/api`). O projeto foi desenhado para reproduzir as telas fornecidas, incluindo login, menu principal, relatórios individuais e visão consolidada dos indicadores financeiros.

## Principais recursos

- Autenticação fictícia usando base de usuários em memória (`/api/login`).
- Conjunto de rotas de API (`/api/reports`, `/api/transactions`) que expõem métricas, séries históricas e transações.
- Painéis responsivos que replicam exatamente o visual compartilhado, com tipografia, cores e componentes reutilizáveis.
- Gráficos interativos construídos com `react-chartjs-2` e `chart.js`.
- Destaques dinâmicos de transações consumindo os dados via fetch no frontend.
- Layout componentizado (`AppShell`, `DashboardHeader`, `SidebarMenu`) e estilos com CSS Modules.

## Requisitos

- Node.js 18 ou superior
- npm, pnpm ou yarn

## Instalação e uso

```bash
npm install
npm run dev
```

Em seguida acesse `http://localhost:3000`.

> Para implantar na Vercel basta importar este diretório como um projeto Next.js padrão.

### Credenciais fictícias

Qualquer usuário cadastrado em `lib/data.ts` pode ser utilizado. Exemplo:

- **E-mail**: `ana.costa@sunrose.com`
- **Senha**: `sunrose123`

## Estrutura de pastas

- `app/` – Rotas, layouts e páginas do Next.js.
- `app/api/` – Rotas API em Node.js com dados fictícios.
- `components/` – Componentes reutilizáveis (layout, UI, dashboard).
- `lib/` – Dados em memória e utilitários de agregação.
- `public/` – Recursos estáticos (texturas, ícones).

## Dados fictícios

Todos os datasets (usuários, transações, séries temporais) estão versionados em `lib/data.ts`. Os métodos de agregação usados tanto pelas páginas quanto pelas APIs ficam em `lib/reports.ts`.

## Scripts disponíveis

- `npm run dev` – Ambiente de desenvolvimento.
- `npm run build` – Build de produção.
- `npm run start` – Servidor de produção.
- `npm run lint` – Lint com ESLint.

## Observações

- A camada de autenticação utiliza `localStorage` apenas para persistência simplificada. Em ambiente real substitua por uma solução segura (JWT, NextAuth, etc.).
- Os gráficos e métricas são baseados em dados estáticos porém fornecidos via rotas API, facilitando a futura integração com um banco real.
- Todos os textos, cores e espaçamentos foram ajustados para espelhar as telas de referência.
