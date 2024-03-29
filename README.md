# Ignite - Projeto Transações

## RF

- [x] O usuário deve criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única

## RN

- [x] Atransação pode ser do tipo crédito que somará ao valor total ou débito que subtrairá;
- [] Deve possível identificarmos o usuário entre as requisições;
- [] O usuário só pode visualizar transações o qual ele criou; 

## Tecnologias
- Fastify
- Node
- Typescript
- SQLITE
- Knex
- Zod
- Dotenv

## Comandos usados

Cria migration:
```bash
npm run knex -- migrate:create <nome-tabela>
```

Roda última migration:
```bash
npm run knex -- migrate:latest 
```

Sobe server:
```bash
npm run dev 
```