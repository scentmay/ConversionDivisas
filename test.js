test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("10 dolares son 1065.8333333333335 ", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(10)).toBe(1065.8333333333335);
})

test("127.9 YEN son 1065.8333333333335 ", function(){
    // importo la funcion desde app.js
    const { fromYanToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYanToPound(127.9)).toBe(0.8);
})