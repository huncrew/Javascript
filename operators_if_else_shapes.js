let side1 = 150;
let angle1 = 130;
let side2 = 100;
let angle2 = 50;
let side3 = 150;
let angle3 = 130;
let side4 = 100;
let angle4 = 50;

let sideEquals = false;
let ninetyAngles = false;
let oppositeEqualSides = false;
let oppositeAnglesEqual = false;
let oppositeAnglesLessThanNinety = false;
let oppositeAnglesMoreThanNinety = false;

if (side1 == side2 && side1 == side3 && side1 == side4) {
    sideEquals = true;
}
if (angle1 == 90 && angle2 == 90 && angle3 == 90 && angle4 == 90) {
    ninetyAngles = true;
}
if (side1 == side3 && side2 == side4 && side1 != side2 && side3 != side4) {
    oppositeEqualSides = true;
}
if (angle1 == angle3 && angle2 == angle4 && angle1 != angle2 && angle3 != angle4) {
    oppositeAnglesEqual = true;
}
if (angle1 && angle3 < 90 || angle2 && angle4 < 90 ) {
    oppositeAnglesLessThanNinety = true;
}
if (angle1 && angle3 > 90 || angle2 && angle4 > 90 ) {
    oppositeAnglesMoreThanNinety = true;
}
// square
if (sideEquals && ninetyAngles ) {
    console.log('its a square');
}
// rectangles
else if (oppositeEqualSides && ninetyAngles){
    console.log('its a rectangle');
}
// rhombus
else if (sideEquals && oppositeAnglesEqual && oppositeAnglesLessThanNinety && oppositeAnglesMoreThanNinety) {
    console.log('rhombus');
}
//parallelogram
else if (oppositeEqualSides && oppositeAnglesEqual && oppositeAnglesLessThanNinety && oppositeAnglesMoreThanNinety) {
    console.log('parralelogram');
}
else {
    console.log('Unknown shape!');
}