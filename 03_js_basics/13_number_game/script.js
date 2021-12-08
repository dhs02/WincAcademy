const generateRandomNumber = (number1, number2) => {
    let smallNumber = parseInt(number1);
    let largeNumber = parseInt(number2);
    let randomNumber = Math.floor(Math.random() * (largeNumber - smallNumber)) + smallNumber;
    return randomNumber;
};

const isEqual = (number1, number2) => {
    if (parseInt(number1) === parseInt(number2)) {
        return true;
    } else {
        return false;
    }
};

let userName = prompt("Welcome! What is your name?");
alert(`Hey ${userName}`);

let min = prompt("Which is the smallest number to guess?");
let max = prompt("Which is the largest number to guess?");
let chosenNumber = generateRandomNumber(min, max);
let tries = 5;

let userInput = prompt(`Enter a number between ${min} and ${max} to start guessing...`);
while (tries > 0) {
    if (isEqual(userInput, chosenNumber)) {
        alert("Congratulations, you have won the game!");
        break;
    } else {
        alert("Unfortunately, that is not correct!");
    }
    tries--;
    if (tries > 0) {
        userInput = prompt(`${tries} tries left. Enter a number between ${min} and ${max}...`);
    } else {
        alert(`You have run out of tries. The correct number was ${chosenNumber}!`);
    }
}
alert(`Bye ${userName}, see you!`);