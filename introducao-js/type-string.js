/* variáveis no js são globais. CUIDADO!!!!                                                           */
/* const --> sempre tem o mesmo valor                                                                 */
/* var --> pode mudar o valor                                                                         */
/* let --> pode mudar o valor(let fica no escopo{}, não é global)                                     */

/* especificação --> precisa fazer algo daquele jeito, EX: primeiroTexto é diferente de PrimeiroTexto */
/* js usa bastante camelCase                                                                          */
/* js pode usar '' ou "", ambos funcionam                                                             */
/* js o ; é facultativo                                                                               */

const primeiroTexto = 'Olá,';
const segundoTexto = "Mundo";

console.log(primeiroTexto + ' ' + segundoTexto);

console.log(`${primeiroTexto} ${segundoTexto}`);