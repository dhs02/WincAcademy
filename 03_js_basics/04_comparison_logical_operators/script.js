const age = 31;
const firstName = 'Bram';
const totalAmount = 100;
// const isFemale = true;
// const driverStatus = 'bob';

if (age >= 18) {
    console.log('You can enter the pub.');
} else {
    console.log('You are too young to enter the pub. Please stay outside.');
}

if (age >= 18 && age <= 25) {
    console.log('You get 50% off!')
} else {
    console.log('You don\'t get 50% off.')
}

if (firstName === 'Bram' || firstName === 'Sarah') {
    console.log('You get a free beer!');
} else {
    console.log('No free beer for you!');
}

if (totalAmount >= 100) {
    console.log('You get a free bottle of champagne!');
} else if (totalAmount >= 50) {
    console.log('You get a free portion of nachos!');
} else if (totalAmount >= 25) {
    console.log('You get a free portion of veggie bitterballen!');
} else {
    console.log('No anniversary discount for you!');
}

// if (isFemale) {
//     console.log('You are female, so you can enter.');
// } else {
//     console.log('You aren\'t female, so you can\'t enter.');
// }

// if (driverStatus == 'bob') {
//     console.log('You have the bob status and are allowed to drive.');
// } else {
//     console.log('You don\'t have the bob status and are therefore not allowed to drive.');
// }