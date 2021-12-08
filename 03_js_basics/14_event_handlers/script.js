// Part 1: Add a click event to a button
const btn = document.querySelector('#mybutton');
btn.addEventListener('click', () => {
    alert('button clicked');
});

// Part 2: Change background
const btn2 = document.querySelector('#mybutton2');
const body = btn2.parentElement;

// const changeColor = () => {
//     body.classList.add('red-background');
// };

// btn2.addEventListener('click', changeColor);

// Part 3: Toggle
const toggleColor = () => {
    body.classList.toggle('red-background');
};

btn2.addEventListener('click', toggleColor);