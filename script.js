function trailingZeros(n) {
  //your JS code here. If required.
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
function trailingZeros(n) {
  let count = 0;

  // Count how many times 5 divides the factorial
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

// Taking input via prompt and displaying output via alert
let userInput = prompt("Enter a non-negative integer:");
let num = parseInt(userInput);

if (Number.isInteger(num) && num >= 0) {
  let zerosCount = trailingZeros(num);
  alert("Number of trailing zeros: " + zerosCount);
} else {
  alert("Please enter a valid non-negative integer.");
}
