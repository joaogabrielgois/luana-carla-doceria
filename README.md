# Luana Carla Doceria

Site em React + Vite, com layout responsivo, fotos reais, galeria filtrável, cardápio em PDF e encomendas pelo WhatsApp. Não usa banco de dados, API, login ou servidor de aplicação.

## Rodar no computador

Instale Node.js 22.12+ ou 24+. Na pasta do projeto:

```sh
npm install
npm run dev
```

## Gerar o site para publicação

```sh
npm run build
```

A pasta `dist` contém o site estático. Pode ser publicada em uma hospedagem estática. Configuração: comando de build `npm run build`; diretório de saída `dist`. Não há variáveis de ambiente.

## Editar

- `src/main.jsx`: textos, produtos, WhatsApp e Instagram.
- `src/style.css`: cores e layout.
- `public/images`: fotos otimizadas em WebP.
- `public/cardapio.pdf`: cardápio público com as oito páginas de apresentação e produtos; a página final de dados bancários foi omitida.

Contato confirmado: +55 79 98837-9956. O formulário apenas prepara uma mensagem para o WhatsApp, sem armazenar dados. O cliente revisa e envia a mensagem no próprio WhatsApp. Pagamento, disponibilidade e confirmação são tratados diretamente com a doceria.

As fotos e informações foram fornecidas pela pessoa solicitante. Valores do cardápio devem ser confirmados no atendimento. A cidade e o endereço não foram informados e não foram inventados.
