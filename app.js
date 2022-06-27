// Funciones

// const fromEuroToDollar = function(valueInEuro){
//     // convertimos el valor a dolares
//     let valueInDollar = valueInEuro * 1.2;
//     // retornamos el valor
//     return valueInDollar;
// }

function fromEuroToDollar (euro){
    return (euro*1.2);
}


function fromDollarToYen(dollar){
    let euro = dollar/1.2;
    return euro*127.9;
}



function fromYanToPound(yan){
    let euro = yan/127.9;
    return euro*0.8;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };


