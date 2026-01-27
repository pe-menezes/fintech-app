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

## Home components

Componentes locais em `components/home/home-screen.tsx`:

- **TopBar** — Header verde (brand) com nome truncado, CPF abaixo e dois botões ícone (olho, perfil).
- **BalanceCard** — Card “Saldo da Conta” com valor grande e chevron à direita.
- **QuickActions** — Quatro ícones em círculo + labels: Pix, Transferir, Pagar, Vender.
- **PromoCard** — “Cartão Mais Limite” com ícone e descrição.
- **ReceivablesCard** — Recebimentos do mês, CTA “Receba na conta Stone”, recebimentos futuros, pills (“18 qua”, “R$ 99,92”), botão “Conferir tudo”.
- **BottomNav** — Nav fixa: Início (ativo), Extrato, Recebimentos, Vendas.
- **IconButton** — Botão ícone pill/quadrado arredondado (tap target 44px).
- **Card** — Wrapper de card com fundo card e radius do design system.
- **SalesCard** — “Vendas dos últimos 7 dias”: valor, divider, “Não há vendas no período”, “Atualizado às 09:00”, botão refresh (RefreshCw).
- **DeviceCard** — “Você possui 1 maquininha”: ícone em círculo bg-[#EFEFEF], textos, botão “Gerenciar”.
- **ModulesGrid** — Grid 3 colunas (grid-cols-3 gap-3) de tiles de módulos.
- **ModuleTile** — Tile branco rounded-2xl shadow-sm h-[110px], ícone verde no topo, label em baixo (text-sm, máx. 2 linhas).
- **BadgePill** — Pill absoluta top-2 right-2 (Novo/Ofertas), bg azul, texto branco text-xs.
- **ConsultorCard** — Card “Consultor Stone”: avatar circular placeholder bg-[#E6E6E6] h-16 w-16, “Consultor Stone” muted, “Willian S” bold, descrição muted, chevron à direita.
- **BannerCarousel** — Carrossel horizontal de banners (w-[340px]), scrollbar oculta; BannerCard com gradiente/mock “Samsung até 80% OFF” + CTA “Saiba mais”, segundo placeholder “Link de pagamento...”.
