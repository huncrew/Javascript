/*
Takes temperature type and amount input and intended convert type, uses a switch statement to gauge input, then converts the amount and prints back to the user.
The program is in serious need of error handling.
*/
let tempStartType = prompt('In which metric is the temperature you are converting? \nC - Celsius\nF - Fahrenheit\nK - Kelvin');
let numberConversion = Number(prompt('Which number would you like to convert?'));
let conversionTempType = prompt('To which metric would you like to convert the temperature? \nC - Celsius\nF - Fahrenheit\nK - Kelvin')
let convertedTemperature = 0
switch (tempStartType) {
    case 'C':
      if(conversionTempType == 'F') {
        convertedTemperature = numberConversion * 9/5 + 32;
        console.log(`${convertedTemperature} is OK`);
      }
      else if(conversionTempType == 'K') {
        convertedTemperature = numberConversion + 273.15;
        console.log(`${convertedTemperature} is OK`);
      }
      break;
    case 'F':
        if(conversionTempType == 'C') {
            convertedTemperature = numberConversion - 32;
            convertedTemperature = convertedTemperature * 5 / 9;
            console.log(`${convertedTemperature} is OK`);
          }
          else if(conversionTempType == 'K') {
            convertedTemperature = numberConversion + 459.67;
            convertedTemperature = convertedTemperature * 5 / 9;
            console.log(`${convertedTemperature} is OK`);
          }
      break;
    case 'K':
        if(conversionTempType == 'F') {
            convertedTemperature = numberConversion * 9/5 - 459.67;
            console.log(`${convertedTemperature} is OK`);
          }
          else if(conversionTempType == 'C') {
            convertedTemperature = numberConversion - 273.15;
            console.log(`${convertedTemperature} is OK`);
          }
      break;
}