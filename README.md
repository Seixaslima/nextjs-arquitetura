# Next.js Arquitetura

Monorepo de estudo focado em arquitetura escalável de front-end: um app Next.js que consome pacotes internos compartilhados (design system e utilitários) via Yarn Workspaces, com configuração de lint, testes e TypeScript centralizada.

## 🔗 Links

- GitHub: [Seixaslima/nextjs-arquitetura](https://github.com/Seixaslima/nextjs-arquitetura)

## ✨ Features

- **Monorepo com Yarn Workspaces** - `packages/*`, `projects/*` e `setup/*` publicados como pacotes internos (`@seixas/*`) e consumidos entre si via `workspace:*`
- **Design System isolado** - pacote `@seixas/design-system` com componentes estilizados em Styled Components, testado e versionado independentemente da aplicação
- **Pacote de utilitários** - `@seixas/utils` com funções compartilhadas entre projetos
- **App Next.js consumindo os pacotes** - `projects/web-public` importa `@seixas/design-system` e `@seixas/utils` como dependências normais
- **Configuração centralizada** - lint (ESLint), TypeScript e testes (Jest) padronizados via pacotes `*-commons` em `setup/`

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14.0.1 | Framework React (app `web-public`) |
| React | 18.2 | UI library |
| TypeScript | 5.2.2 | Tipagem estática em todo o monorepo |
| Styled Components | 6.1 | Estilização do design system |
| Yarn Workspaces | - | Gerenciamento do monorepo |
| ESLint + Prettier | - | Padronização de código |
| Jest | - | Testes dos pacotes internos |

## 📁 Project Structure

```
nextjs-arquitetura/
├── packages/
│   ├── design-system/        # @seixas/design-system - componentes de UI
│   └── utils/                 # @seixas/utils - funções compartilhadas
├── projects/
│   └── web-public/            # @seixas/web-public - app Next.js
└── setup/
    ├── eslint-commons/        # config compartilhada de lint
    ├── tsconfig-commons/      # config compartilhada de TypeScript
    └── test-commons/          # config compartilhada de testes (Jest)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Yarn (Classic ou Berry, conforme o `yarn.lock` do projeto)

### Installation

```bash
# Clone the repository
git clone https://github.com/Seixaslima/nextjs-arquitetura.git
cd nextjs-arquitetura

# Instala as dependências de todos os workspaces
yarn install
```

### Rodando o app

```bash
yarn dev:web-public
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos úteis

```bash
yarn build:web-public   # build de produção do app
yarn lint:web-public     # lint do app
yarn test:design-system  # testes do design system
yarn test:utils          # testes do pacote utils
```

## 💡 What I Learned

- Estruturar um monorepo com Yarn Workspaces separando `packages` (bibliotecas internas) de `projects` (aplicações)
- Publicar e consumir pacotes internos (`@seixas/*`) sem precisar de um registry externo
- Centralizar configuração (ESLint, TypeScript, Jest) em pacotes `*-commons` para evitar duplicação entre pacotes
- Integrar um design system próprio, versionado à parte, dentro de uma aplicação Next.js

## 🎯 Future Improvements

**High Priority**
- Adicionar um README por pacote (`packages/design-system`, `packages/utils`) explicando a API pública de cada um
- Pipeline de CI (GitHub Actions) rodando lint/test em todos os workspaces
- Storybook para documentar visualmente os componentes do design system

**Medium Priority**
- Versionamento automatizado dos pacotes internos (ex: Changesets)
- Deploy do `web-public` (Vercel) com link ao vivo

**Nice to Have**
- Migrar de Yarn Classic para Yarn Berry (PnP) ou avaliar Turborepo/Nx para cache de build
- Testes end-to-end no app

## 👨‍💻 Author

- GitHub: [@Seixaslima](https://github.com/Seixaslima)
- Email: lucasseixaslima2@gmail.com
