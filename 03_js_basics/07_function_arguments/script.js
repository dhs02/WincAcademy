const paintWall = function (side, color) {
    console.log('The', side, 'wall has been painted', color);
};

paintWall('north', 'orange');
paintWall('south-east', 'grey');

// What happens if we call the function without an argument? Output: undefined
paintWall();

// Does the order of the arguments matter when calling the function? Yes.
// What happens if you switch them in the function definition? The arguments won't be shown in the correct way.
paintWall('grey', 'south-east');

// What happens if you change the order of the arguments in the function definition and when calling the function? The arguments will be output correctly.
const paintWall2 = function (color, side) {
    console.log('The', side, 'wall has been painted', color);
};

paintWall2('grey', 'north');