# Luana Carla Doceria

Site em React + Vite com catálogo e montagem de encomendas, baseado nas nove páginas do cardápio fornecido pela doceria. Publicação: https://luana-carla-doceria.pages.dev

## Rodar e publicar

Node.js 24. Execute `npm install` e `npm run dev`. Para publicar, `npm run build` gera a pasta `dist`. No Cloudflare Pages: build `npm run build`, saída `dist` e variável `NODE_VERSION=24`.

## Conteúdo

- `src/catalog.js`: preços, tamanhos, rendimentos, massas, recheios, adicionais e orientações, com a página de origem de cada categoria.
- `src/Configurator.jsx`: escolhas da encomenda, resumo e mensagem para WhatsApp.
- `src/main.jsx`: apresentação, catálogo, galeria e informações de atendimento.
- `src/style.css`: layout responsivo.
- `public/cardapio.pdf`: PDF original completo, com nove páginas.
- `public/images`: fotos reais otimizadas em WebP.

## Regras do cardápio

Bolos de 15–30 cm: R$ 175/220/260/290/340. Bolos de 10 cm: R$ 65 com uma camada (4 fatias) ou R$ 80 com duas (6 fatias). Promocional: 13 cm por R$ 110, massa branca, seis recheios disponíveis e decoração simples sem topo. Bolos P/M/G: R$ 35/45/95; brigadeiros e morangos custam, cada adicional, R$ 10/15/20 conforme o tamanho. Brigadeiros personalizados (25/50/100): R$ 65/120/220. Gourmet (25/50/100): R$ 50/100/200.

A escolha de recheios respeita o limite de uma ou duas camadas. As orientações gerais de duas camadas foram aplicadas às categorias de bolo, com a exceção explícita do bolo de 10 cm de R$ 65. O cardápio não define divisão ou limite de sabores para brigadeiros nem sabores dos personalizados; esses detalhes ficam para consulta. Os nomes dos sabores gourmet mantêm a grafia do PDF.

Topo especial, flores naturais, acréscimo do cartão, estrutura para viagem e taxa de entrega não possuem preço tabelado e nunca entram como valor inventado. O subtotal é apenas dos itens tabelados. O cliente revisa e envia a mensagem no WhatsApp; não existe pagamento nem confirmação automática. Dados Pix são os informados na página 9, com orientação de confirmar a encomenda antes de pagar.

As fotos da galeria mostram trabalhos e decoração. Não há atribuição de sabor, diâmetro ou preço a uma foto sem essa informação no cardápio.

Contato: +55 79 98837-9956. Não usa banco de dados ou servidor de aplicação.
