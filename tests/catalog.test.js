import assert from 'node:assert/strict';
import {catalog,initialSelection,getQuote,buildMessage} from '../src/catalog.js';
assert.deepEqual(catalog.map(p=>p.options.map(o=>o.price)),[[175,220,260,290,340],[65,80],[110],[35,45,95],[65,120,220],[50,100,200]]);
assert.deepEqual(catalog[0].options.map(o=>o.yieldText),['10 a 16 fatias','20 a 26 fatias','30 a 32 fatias','40 a 44 fatias','50 a 60 fatias']);
assert.deepEqual(catalog[2].masses,['Massa branca']);assert.equal(catalog[2].fillings.length,6);assert.equal(catalog[1].options[0].layers,1);
for(const [i,total] of [55,75,135].entries()){let s={...initialSelection('pmg'),index:i,extras:['Brigadeiros','Morangos']};assert.equal(getQuote(s).subtotal,total);}
let s={...initialSelection('promo'),top:'Adicionar topo — consultar valor',delivery:'Entrega',payment:'Cartão de crédito'};let q=getQuote(s);assert.equal(q.subtotal,110);assert.equal(q.pending.length,3);
s={...initialSelection(),fillings:['Ninho','Chocolate belga'],theme:'Flores',colors:'Lilás',inscription:'Ana',date:'2026-12-20',travel:'Sim'};let msg=buildMessage(s);for(const t of ['Ninho + Chocolate belga','Flores','Lilás','Ana','20/12/2026','Estrutura para viagem','175,00'])assert.ok(msg.includes(t),t);
assert.equal(initialSelection('gourmet').fillings.length,0);assert.equal(initialSelection('promo').extras.length,0);console.log('OK: preços de todas as categorias, rendimentos, restrições, adicionais P/M/G, custos a consultar e mensagem.');

