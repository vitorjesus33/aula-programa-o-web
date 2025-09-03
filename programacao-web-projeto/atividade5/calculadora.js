const conta = 250.75
const taxaGorjeta = 12
const pessoas = 3

const gorjeta = conta * (taxaGorjeta / 100)
const total = conta + gorjeta
const porPessoa = total / pessoas

console.log(`Conta: R$${conta.toFixed(2)}`)
console.log(`Gorjeta (${taxaGorjeta}%): R$${gorjeta.toFixed(2)}`)
console.log(`Total a pagar: R$${total.toFixed(2)}`)
console.log(`Valor por pessoa (${pessoas}): R$${porPessoa.toFixed(2)}`)
