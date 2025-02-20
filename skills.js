// function to convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// function to convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Driver code to test the function
let celsius = 37;
let fahrenheit = -7;

let convertToCelsius = fahrenheitToCelsius(fahrenheit);
let convertToFahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + "°C is " + convertToFahrenheit + "°F");
console.log(fahrenheit + "°F is " + convertToCelsius + "°C");  