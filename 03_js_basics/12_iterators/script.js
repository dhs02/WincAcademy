let colors = ['yellow', 'blue', 'red', 'orange'];

let x = 0;
while (x < colors.length) {
    console.log(colors[x]);
    x++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(el => console.log(el));

const person = {
    name: 'Dave',
    age: 31,
    favoriteColor: 'green',
    favoriteFood: 'sushi',
    favoriteAnimal: 'cat'
}

for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`)
}

/*
How many lines does my for loop and my while loop take?
--For-loop: 3 lines
While-loop: 5 lines

How many lines does my forEach method take?
-1 line

What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why?
-It's more concise
-Makes the code more readable
-Less prone to errors and typo's

Can you use an array method on an object? The answer is no. Suppose you have an object with 45 properties. Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. Try this piece of code and use an object with 5 properties for it. Are you iterating now?
-You can iterate using a for...in-loop, see example above.
*/