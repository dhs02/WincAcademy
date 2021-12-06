const age = 31;
const isFemale = true;
const driverStatus = 'bob';

if (age >= 18) {
    console.log('You can enter the pub.');
} else {
    console.log('You are too young to enter the pub. Please stay outside.');
}

if (isFemale) {
    console.log('You are female, so you can enter.');
} else {
    console.log('You aren\'t female, so you can\'t enter.');
}

if (driverStatus == 'bob') {
    console.log('You have the bob status and are allowed to drive.');
} else {
    console.log('You don\'t have the bob status and are therefore not allowed to drive.');
}