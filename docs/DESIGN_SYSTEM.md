# Design system

Tokens e regras de UI (aprox. do mock).

## Tokens iniciais

| Token      | Valor    | Uso                    |
|------------|----------|------------------------|
| background | `#F8F8F9`| Fundo do app           |
| brand      | `#2F684D`| Header / marca         |
| card       | `#FFFFFF`| Fundo de cards         |
| radius     | `16px`   | Border radius de cards |

Variáveis CSS em `app/globals.css`: `--background`, `--brand`, `--card`, `--radius`.

## Regras

- **Spacing:** base 8px (ex.: 8, 16, 24, 32).
- **Tap target:** mínimo 44px de altura/largura em elementos clicáveis.
- **Largura máxima do app:** 430px (container centralizado no desktop).
