let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (valueInDollars) => {
    let valueInYen = (valueInDollars/oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return valueInYen
}

const fromYenToGbp = (valueInYen) => {
    let valueInGbp = (valueInYen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return valueInGbp
}

module.exports = {  fromEuroToDollar,fromDollarToYen,fromYenToGbp };
