# Onfinances

## Estrutura do Projeto

Onfinances/
├── .env
├── package.json
└── src/
├── app.js
├── db/
│ └── config.js
├── controllers/
│ ├── entryController.js
│ ├── expenseController.js
│ └── searchController.js
├── middlewares/
│ └── errorHandler.js
├── models/
│ ├── Entry.js
│ └── Expense.js
├── repositories/
│ ├── entryRepository.js
│ └── expenseRepository.js
├── routes/
│ ├── entryRoutes.js
│ ├── expenseRoutes.js
│ ├── index.js
│ └── searchRoutes.js
└── utils/
└── db.js


### Visão Geral

- **.env**: Variáveis de ambiente.
- **package.json**: Dependências e scripts do projeto.
- **src/**: Pasta principal do código fonte.
  - **app.js**: Arquivo principal da aplicação.
  - **db/**: Configuração do banco de dados.
    - **config.js**: Configurações do banco de dados.
  - **controllers/**: Controladores da aplicação.
    - **entryController.js**: Lida com operações relacionadas a entradas.
    - **expenseController.js**: Lida com operações relacionadas a despesas.
    - **searchController.js**: Lida com operações de busca.
  - **middlewares/**: Funções middleware.
    - **errorHandler.js**: Middleware de tratamento de erros.
  - **models/**: Modelos do banco de dados.
    - **Entry.js**: Modelo de entrada.
    - **Expense.js**: Modelo de despesa.
  - **repositories/**: Camada de acesso a dados.
    - **entryRepository.js**: Repositório de entradas.
    - **expenseRepository.js**: Repositório de despesas.
  - **routes/**: Rotas da aplicação.
    - **entryRoutes.js**: Rotas para operações de entrada.
    - **expenseRoutes.js**: Rotas para operações de despesa.
    - **index.js**: Roteador principal.
    - **searchRoutes.js**: Rotas para operações de busca.
  - **utils/**: Funções utilitárias.
    - **db.js**: Funções utilitárias para o banco de dados.
