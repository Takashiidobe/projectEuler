//use this to calculate the number of digits
function digits(number) {
  return number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number)) + 1);
}

//doesn't work well with decimals
function digits(number) {
  return number.toString().length;
}