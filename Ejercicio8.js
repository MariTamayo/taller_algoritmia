const prompt = require("prompt-sync")({sigint:true})

let x1 = +prompt("ingrese punto x1: ")
let x2 = +prompt("ingrese punto x2: ")
let y1 = +prompt("ingrese punto y1: ")
let y2 = +prompt("ingrese punto y2: ")
let distancia = 0

if(x1 !== x2 && y1 !== y2 ){
    distancia=Math.sqrt(x2-1)*2 + (y2-y1)*2
}else if(x1 === x2){
    distancia = y1-y2
}else{
    distancia = x1 - x2
}
console.log("La distancia entre los dos punto es: ",distancia)



