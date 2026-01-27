# Changelog

## [Unreleased]

### Home: Pix icon atualizado (4 losangos) (2025-01-27)

- Pix nas Quick Actions usa PixIcon local com 4 losangos (rects rotacionados 45° em 2×2); viewBox 0 0 24 24, stroke currentColor, fill none; tamanho h-7 w-7, cor igual aos demais.

### Bugfix UI: carrosséis não clipam sombra dos cards (2025-01-27)

- PromoCarousel e BannerCarousel: container com `overflow-x-auto overflow-y-visible`, `py-2` para não clipar sombra; scrollbar continuando escondida com `[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`. Nenhum overflow-hidden no wrapper pai.

### UI: header full-bleed, conteúdo limitado a 430px (2025-01-27)

- Header verde full-bleed (`sticky top-0 z-20 w-full bg-[var(--color-brand)]`); conteúdo interno em wrapper `mx-auto max-w-[430px] px-5 pt-[calc(env(safe-area-inset-top)+14px)] pb-5` (nome/CPF/botões).

### UI: remove fake status bar do header (2025-01-27)

- Removido bloco “09:03” e ícones de sinal/wifi/bateria do header; mantidos apenas nome/CPF + botões.

### Pixel pass final: modules grid + badges + bottom padding (2025-01-27)

- **ModuleTile:** removido aspect-square; tile `relative h-[108px] w-full rounded-2xl bg-white border border-black/5 shadow-sm p-3`; layout interno `h-full flex flex-col items-center justify-between`; ícone size 22, strokeWidth 2, `text-[var(--color-brand)]`, mt-0.5; label `text-sm leading-tight text-center` line-clamp-2, pb-0.5.
- **BadgePill:** `absolute top-2 right-2`, `text-[10px] font-semibold px-2 py-[2px] rounded-full bg-[#2F6BFF] text-white`; tile com `relative` para badge não flutuar.
- **Padding-bottom:** container principal `pb-[calc(120px+env(safe-area-inset-bottom))]` para Consultor + banners não ficarem atrás do BottomNav.

### Pixel pass: modules grid + badges + bottom padding (2025-01-27)

- **ModuleTile:** altura fixa trocada por `aspect-square`; tile `aspect-square rounded-2xl bg-white border border-black/5 shadow-sm p-3`; conteúdo `flex flex-col items-center justify-between`; ícone `mt-1` size 22–24 (h-6 w-6), strokeWidth 2, cor brand; label `text-sm leading-tight text-center pb-1` line-clamp-2.
- **BadgePill:** `absolute top-2 right-2`, `text-[11px] font-semibold px-2 py-0.5 rounded-full`, `bg-[#2F6BFF] text-white`; badge fora do fluxo para não empurrar o ícone.
- **Padding-bottom:** container principal mantém `pb-[calc(96px+env(safe-area-inset-bottom))]` para scroll não ficar atrás do BottomNav.

### Promo carousel increment (2025-01-27)

- PromoCarousel passa a usar lista `promos` (Cartão Mais Limite, Venda online, Ver.../Crie...) e renderização via map.
- Container: `flex gap-4 overflow-x-auto snap-x snap-mandatory px-4` + classes para esconder scrollbar (`[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`).
- Spacer no final do carrossel: `<div className="w-4 shrink-0" />` para peek.
- Cada PromoCard: `w-[320px] shrink-0 snap-start rounded-2xl bg-white shadow-sm p-4 flex items-center gap-3`; ícone verde `text-[var(--color-brand)]` ~20–22px; title `font-semibold`, subtitle `text-sm text-muted-foreground`.
- Ícone Link2 para “Venda online”.

### PR4 — Home mock scrolado: sticky header, scrollbar hide, consultor, banners (2025-01-27)

- **Header sticky:** `sticky top-0 z-20 bg-brand`, mantém status bar e botões no fluxo.
- **Padding-bottom conteúdo:** container principal `pb-[calc(96px+env(safe-area-inset-bottom))]` para não ficar atrás da BottomNav.
- **Carrosséis sem scrollbar:** PromoCarousel e BannerCarousel com `[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`.
- **SalesCard refresh:** botão quadrado arredondado `rounded-xl bg-[#EFEFEF] p-3`, ícone centralizado (igual mock).
- **ModulesGrid:** após “Reserva” adicionados Maquininhas, Open Finance (badge Ofertas), Catálogo (badge Novo), Relatórios, Ajuda; badges top-2 right-2 pill azul.
- **ConsultorCard:** card branco rounded-2xl shadow-sm, avatar placeholder bg-[#E6E6E6] rounded-full h-16 w-16, “Consultor Stone” muted, “Willian S” bold, descrição muted, chevron à direita.
- **BannerCarousel:** carrossel horizontal 2 banners w-[340px]; banner 1 gradiente verde “Samsung até 80% OFF” + CTA “Saiba mais”; banner 2 placeholder verde escuro “Link de pagamento...”.
- docs/DESIGN_SYSTEM.md: ConsultorCard, BannerCarousel, BannerCard.

### PR3 — Home below fold (2025-01-27)

- **SalesCard:** “Vendas dos últimos 7 dias”, valor R$ 0,00, chevron items-start; divider -mx-4 border-black/10; “Não há vendas no período”, “Atualizado às 09:00”, botão refresh rounded-xl bg-[#EFEFEF] RefreshCw.
- **DeviceCard:** ícone maquininha (Smartphone) em círculo bg-[#EFEFEF], “Você possui” / “1 maquininha”, botão “Gerenciar” bg-[#EFEFEF] rounded-xl.
- **ModulesGrid:** grid-cols-3 gap-3; ModuleTile branco h-[110px] rounded-2xl shadow-sm p-3, ícone verde ~24px no topo, label text-sm line-clamp-2; BadgePill “Novo” em “Venda por Assinatura” (top-2 right-2, bg azul, text branco).
- Módulos (ordem do print): Taxas e tarifas, Simulador de vendas, Criação de Boletos, Venda por Assinatura (Novo), Link de Pagamento, Tap to Pay no iPhone, Venda Digitada, Cartões, Funcionários, Seguros, Equipe, Reserva.
- Conteúdo com pb-28 para não ficar atrás da BottomNav; espaçamento entre cards space-y-3, padding px-4.

### PR2 — Home (mock) estática (2025-01-27)

- `components/home/home-screen.tsx`: HomeScreen com subcomponentes locais (TopBar, BalanceCard, QuickActions, PromoCard, ReceivablesCard, BottomNav, IconButton, Card).
- Ícones via lucide-react (Eye, User, ChevronRight, Zap, Wallet, CreditCard, Store, Home, FileText, Receipt).
- Layout mobile-first: header brand, saldo, Reserva Stone, quick actions, Cartão Mais Limite, card Recebimentos, bottom nav fixa.
- Dados mockados: nome/CPF truncados, saldo R$ 110,67, recebimentos mês R$ 104,77, futuros R$ 99,92, datas “(1 jan, 2026 até 28 jul, 2027)”, pills “18 qua” e “R$ 99,92”.
- `app/page.tsx` passa a renderizar `<HomeScreen />`.
- docs/DESIGN_SYSTEM.md: seção “Home components” com lista dos componentes.

### PR2 — Pixel pass 1 (estrutura igual ao mock) (2025-01-27)

- Header: full width bg brand; padding px-5, pt calc(safe-area + 14px), pb-5; nome text-2xl font-semibold text-white truncate; CPF text-sm text-white/75; botões rounded-2xl bg-white/10.
- Card principal único (Saldo + Reserva + Ações): um card branco rounded-2xl shadow-sm com (A) linha Saldo (label cinza, valor text-4xl, chevron), (B) linha Reserva (“Reserva Stone” + subtitle “Deixe o dinheiro trabalhar para você”, CTA “Conhecer” brand), (C) border-t, (D) quick actions em 4 colunas (círculos h-16 w-16 bg-muted, labels abaixo). Removidos blocos separados.
- Card Cartão Mais Limite: horizontal alinhado à esquerda, ícone círculo cinza, título font-semibold, subtexto text-muted-foreground, chevron à direita.
- Card Recebimentos: top row (label+valor | CTA “Receba na conta Stone” max-w 140px 2 linhas + ícone + chevron); seção Recebimentos futuros (label+chevron mesma linha, valor e datas abaixo); bottom row (2 pills bg-muted rounded-full, “Conferir tudo” pill/button à direita com chevron).
- Espaçamento: mx-4, mt-4 entre cards, sem “buracão”.

### PR2 — Pixel pass 2 (micro-layout + carrossel) (2025-01-27)

- Header: StatusBar no topo (09:03 à esquerda; sinal, wifi, bateria + 71 à direita, SVG inline); abaixo nome "Pedro Menezes Ribeiro d..." (truncate) e CPF 146.400.487-00; botões olho/perfil h-12 w-12 rounded-2xl bg-white/10.
- Main card: bloco Saldo com label + chevron alinhados ao topo (items-start), valor na linha de baixo; divider -mx-4 para largura interna; área das ações em container bg-black/[0.02] py-4 -mx-4 px-4; círculos bg-[#ECECEC], ícones text-zinc-900 strokeWidth 2 size ~28px.
- Promo: carrossel horizontal (overflow-x-auto snap-x snap-mandatory px-4), cards w-[320px] shrink-0 snap-start rounded-2xl bg-white shadow-sm; card 1 "Cartão Mais Limite" com ícone verde à esquerda e texto "Guarde a partir de R$100 e tenha limite de crédito"; card 2 placeholder "Ver..." / "Crie...".
- Recebimentos: top row CTA com ícone verde e texto preto "Receba na\nconta Stone" + chevron à direita; divider entre mês e Recebimentos futuros; valor futuros em tom muted; bottom row esquerda retângulo bg-[#EFEFEF] rounded-2xl com caixinha interna (bg-white border rounded-xl) "18\nqua" + "R$ 99,92"; direita retângulo bg-[#EFEFEF] "Conferir tudo" text-muted + chevron.

### Bugfix — MainCard sobrepondo header (2025-01-27)

- Removido `-mt-2` e `mx-4` do MainCard (evitar overlap com o header).
- Header com `pb-6`; conteúdo da home em `<main className="space-y-4 px-4 pt-4">`; MainCard, PromoCarousel e ReceivablesCard dentro do main sem margin negativa/translate. PromoCarousel sem `mt-4`; ReceivablesCard sem `mx-4 mt-4`.

### PR1 — Foundations (2025-01-27)

- Next.js (App Router) + Tailwind + shadcn/ui inicializados.
- shadcn init com CSS variables (style new-york).
- Tokens em `globals.css`: background `#F8F8F9`, brand `#2F684D`, card `#FFFFFF`, radius `16px`.
- AppShell no layout: container `max-w-[430px]`, padding com `env(safe-area-inset-*)`, background do app.
- Página inicial placeholder: “Base pronta — PR2: Home”.
- Exemplo de env Supabase em `docs/ENV_EXAMPLE.md` (não commitar `.env.local`).
- Docs: README (como rodar + scripts), DESIGN_SYSTEM (tokens + regras), DECISIONS_AND_GAPS, CHANGELOG.
