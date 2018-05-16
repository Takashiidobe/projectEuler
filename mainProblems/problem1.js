//the problem wants all numbers that are multiples of 
//3 or 5 below 1000, and the sum of all those nums

//original question
function sumUnder1000() {
  const array = [];
  for (i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }
  return array.reduce((a, b) => a + b);
}

console.log(sumUnder1000());

//for any number
function sumUnder(number) {
  const array = [];
  for (i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }
  return array.reduce((a, b) => a + b);
}

console.log(sumUnder(125121));