# Onfinances - Backend

## Estrutura do Projeto

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

## Rotas para Entradas (Entries)

- Listar todas as entradas: GET http://localhost:3000/api/entries
- Obter uma entrada por ID: GET http://localhost:3000/api/entries/:id
- Criar uma nova entrada: POST http://localhost:3000/api/entries
- Atualizar uma entrada por ID: PUT http://localhost:3000/api/entries/:id
- Deletar uma entrada por ID: DELETE http://localhost:3000/api/entries/:id

## Rotas para Contas a Pagar (Expenses)

- Listar todas as contas a pagar: GET http://localhost:3000/api/expenses
- Obter uma conta a pagar por ID: GET http://localhost:3000/api/expenses/:id
- Criar uma nova conta a pagar: POST http://localhost:3000/api/expenses
- Atualizar uma conta a pagar por ID: PUT http://localhost:3000/api/expenses/:id
- Deletar uma conta a pagar por ID: DELETE http://localhost:3000/api/expenses/:id

## Rota de Pesquisa

- Pesquisar entradas e contas a pagar por ID ou descrição: GET http://localhost:3000/api/search?term={termo_de_pesquisa}
- Substitua {termo_de_pesquisa} pelo termo que deseja buscar.
