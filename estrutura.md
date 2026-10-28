meu-projeto/                            # Raiz do projeto (repositório Git)
│
├── .gitignore
├── .editorconfig
├── README.md
├── iniciar.bat                         # Script para rodar backend + frontend (Windows)
│
├── docs/                               # Documentação do projeto
│   ├── publico/                        # Vai pro GitHub
│   │   ├── 00_estrutura_pastas.md
│   │   ├── 01_boot_minimo.md
│   │   └── arquitetura.md
│   └── privado/                        # NÃO vai pro GitHub (.gitignored)
│       ├── estado_atual.md
│       ├── decisoes.md
│       └── credenciais.md
│
├── backend/                            # API (Python + Flask)
│   ├── app.py                          # Application Factory (create_app)
│   ├── wsgi.py                         # Entry point para produção (Gunicorn)
│   ├── requirements.txt                # Dependências de produção
│   ├── requirements-dev.txt            # Dependências de dev (pytest)
│   ├── .env                            # Variáveis locais (NÃO vai pro Git)
│   ├── .env.example                    # Template das variáveis (vai pro Git)
│   │
│   ├── instance/                       # Banco SQLite (NÃO vai pro Git)
│   │   └── banco de dados.db
│   │
│   ├── config/                         # Configurações da aplicação
│   │   ├── settings.py                 # Config (versão, caminhos, etc.)
│   │   ├── imports_rotas.py            # Registra os Blueprints no Flask
│   │   ├── imports_tabelas.py          # Cria/migra todas as tabelas
│   │   └── seed.py                     # Seed inicial (dados padrão)
│   │
│   ├── models/                         # Definição das tabelas (SQL puro)
│   │   └── <feature>/                  # Uma pasta por domínio
│   │       ├── __init__.py
│   │       └── tabela.py
│   │
│   ├── routes/                         # Rotas da API (Blueprints)
│   │   ├── __init__.py
│   │   │
│   │   ├── <dominio>/                  # Feature transversal (auth, health)
│   │   │   ├── __init__.py
│   │   │   ├── routes.py               # Endpoints
│   │   │   ├── service.py              # Regra de negócio
│   │   │   ├── queries.py              # SQL puro
│   │   │   └── formatters.py           # Formata dicionários para JSON
│   │   │
│   │   └── <dominio-raiz>/             # Domínio com várias camadas (ex: laudo)
│   │       ├── __init__.py
│   │       ├── routes.py
│   │       ├── service.py
│   │       ├── queries.py
│   │       ├── formatters.py
│   │       └── <camada>/               # Sub-feature (ex: dados_gerais)
│   │           ├── __init__.py
│   │           ├── routes.py
│   │           ├── service.py
│   │           ├── queries.py
│   │           └── formatters.py
│   │
│   ├── utils/                          # Ferramentas reutilizáveis
│   │   ├── database/
│   │   │   ├── __init__.py
│   │   │   └── db.py                   # Conexões SQLite (direta e via request)
│   │   ├── logger.py                   # Logger padronizado
│   │   └── responses.py                # Helpers de resposta (ok / erro)
│   │
│   ├── tests/                          # Testes automatizados (pytest)
│   │   ├── __init__.py
│   │   └── conftest.py
│   │
│   └── venv/                           # Ambiente virtual Python (NÃO vai pro Git)
│
└── frontend/                           # UI (React + TypeScript + Vite)
    ├── package.json
    ├── vite.config.ts                  # Proxy da API (/api → :5000)
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── index.html                      # HTML base do Vite
    ├── .env                            # Variáveis locais (NÃO vai pro Git)
    ├── .env.example                    # Template das variáveis (vai pro Git)
    ├── .eslintrc.cjs
    ├── .prettierrc
    │
    ├── node_modules/                   # Dependências Node (NÃO vai pro Git)
    │
    └── src/
        ├── main.tsx                    # Ponto de entrada do React
        ├── App.tsx                     # Componente raiz e configuração de rotas
        ├── vite-env.d.ts
        │
        ├── api/
        │   ├── client.ts               # Configuração do Axios (baseURL: '/api')
        │   └── endpoints.ts            # Constantes de URL (opcional)
        │
        ├── styles/
        │   ├── global.css              # Reset e estilos globais
        │   └── variables.css           # Design tokens (cores, fontes)
        │
        ├── routes/                     # (Opcional) Rotas protegidas
        │   └── ProtectedRoute.tsx
        │
        ├── components/                 # Componentes reutilizáveis
        │   ├── ui/                     # Primitivos (Button, Input, Modal)
        │   │   └── <Componente>/
        │   │       ├── <Componente>.tsx
        │   │       └── <Componente>.module.css
        │   └── layout/                 # Estrutura (Header, Sidebar, Footer)
        │       └── <Componente>/
        │           ├── <Componente>.tsx
        │           └── <Componente>.module.css
        │
        ├── hooks/                      # Hooks globais (useDebounce, etc.)
        │   └── .gitkeep
        │
        ├── lib/                        # Helpers puros (datas, strings, etc.)
        │   └── .gitkeep
        │
        ├── types/                      # Tipos globais
        │   └── index.ts
        │
        └── features/                   # O QUÊ o sistema faz (uma pasta por feature)
            └── <feature>/
                ├── api.ts              # Chamadas axios
                ├── types.ts            # Tipagens TypeScript
                ├── hooks.ts            # (Opcional) Hooks específicos da feature
                ├── components/         # Componentes da feature
                │   └── <Componente>.tsx
                └── pages/              # Páginas (telas) da feature
                    ├── <Pagina>.tsx
                    └── <Pagina>.module.css