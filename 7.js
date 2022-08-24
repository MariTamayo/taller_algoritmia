const prompt = require("prompt-sync")({sigint: true})

let litros = prompt("Ingresa la cantidad de los litros de leche: ")
let precio = prompt("Ingresa el valor del precio de la leche: ")
let pedido = prompt("Ingresa el valor del pedido en galones: ")
let pedidoLitros = pedido * 3.78541
let total = pedidoLitros * precio

console.log("El valor de los litros de leche producidos en el dia de hoy es: ", litros * precio)
console.log("El valor del pedido en litros es: ", pedidoLitros)
console.log("El valor total del pedido es: ", total)


