// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
const fromEuroToDollar= function(valueInEuro){
    let valueInDollar= valueInEuro*1.2
    return valueInDollar
}
const fromDollarToYen= function(valueInDollar){
    let valueInYen= valueInDollar*106.6
    return valueInYen
}
const fromYenToPound= function(valueInYen){
    let valueInPound= valueInYen*159.9
    return valueInPound
}

module.exports = { sum, 
fromEuroToDollar,
fromDollarToYen,
fromYenToPound
};
