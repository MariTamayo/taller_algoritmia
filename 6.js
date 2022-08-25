const prompt = require("prompt-sync")({sigint: true})

let R = prompt("Ingresa el valor del radio: ")
let H = prompt("Ingresa el valor de la hipotenusa: ")

if(R<H){
    let radio_2 = R*R
    let hipotenusa_2 = H*H
    
    let adyacente = Math.sqrt(hipotenusa_2 - radio_2)
    
    areaTriangulo = Math.pow((adyacente*R)/2, 2)
    areaSemicirculo = (Math.PI * radio_2)/2
    
    console.log("El area total es: ", areaTriangulo + areaSemicirculo)
}else{
    console.error("El radio no puede ser mayor que la hipotenusa")
}