const prompt = require("prompt-sync")({sigint:true})

let medidas = +prompt("ingrese las medidas en metros que requiere: ")
let b = medidas * 39.3701

console.log("Los metros son: ", medidas, "En pulgadas son: ", b)