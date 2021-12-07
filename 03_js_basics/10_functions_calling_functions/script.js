// 1. Hey kiddo
const isEighteenOrHigher = age => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const isAdultAge = age => {
    if (isEighteenOrHigher(age)) {
        return 'Hello there';
    } else {
        return 'Hey kiddo';
    }
};

console.log(isAdultAge(17));
console.log(isAdultAge(18));
console.log(isAdultAge(31));

// 2. VAT calculations
// VAT exercise 1
const calculateVat = (basePrice, vatPercentage) => {
    return basePrice * (vatPercentage / 100);
};

const calculatePriceIncludingVat = (basePrice, vatPercentage) => {
    return basePrice + calculateVat(basePrice, vatPercentage);
};

console.log(calculatePriceIncludingVat(1000, 21));
console.log(calculatePriceIncludingVat(2, 9));
console.log(calculatePriceIncludingVat(15, 21));

// VAT exercise 2
const calculateVat2 = (priceIncludingVat, vatPercentage) => {
    return priceIncludingVat - (priceIncludingVat / ((vatPercentage / 100) + 1));
};

const calculatePriceAndVat = (priceIncludingVat, vatPercentage) => {
    let arr = [];
    let vatAmount = calculateVat2(priceIncludingVat, vatPercentage);
    let basePrice = priceIncludingVat - vatAmount;
    arr.push(basePrice);
    arr.push(vatAmount);
    return arr;
};

console.log(calculatePriceAndVat(1210, 21));
console.log(calculatePriceAndVat(2.18, 9));
console.log(calculatePriceAndVat(18.15, 21));