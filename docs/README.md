# Docs — Fintech App

## Como rodar

1. Instalar dependências:
   ```bash
   npm i
   ```
2. Rodar em desenvolvimento:
   ```bash
   npm run dev
   ```
3. Build para produção:
   ```bash
   npm run build
   npm run start
   ```

## Scripts

| Script   | Comando       | Descrição                    |
|----------|----------------|------------------------------|
| dev      | `npm run dev`  | Servidor de desenvolvimento  |
| build    | `npm run build` | Build de produção            |
| start    | `npm run start` | Servidor após build          |
| lint     | `npm run lint` | ESLint                       |

## Quality gates

- `npm run lint` — ESLint
- `npm run build` — build de produção (deve passar antes de merge)

## Supabase

Exemplo de variáveis de ambiente para Supabase está em [ENV_EXAMPLE.md](./ENV_EXAMPLE.md). Copie para `.env.local` (não commitar).
