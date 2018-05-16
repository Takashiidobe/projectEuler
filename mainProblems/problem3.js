//finds if a number is prime and returns
//its first factor if not prime
//largest prime factor of 600851475143
function isPrime(number) {
  if (number < 2) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number > 2) {
    for (i = 3; i < Math.sqrt(number); i+=2) {
      if (number % i === 0) {
        return `no, ${number} is divisible by ${i}`;
      }
    }
  }
  return true;
}

function countPrimes() {
  const primeArray = [];
  for (i = 3; i < Math.sqrt(600851475143); i+=2) {
    if (600851475143 % i === 0) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

var x = [71, 839, 1471, 6857, 59569, 104441, 486847];
//answer is 6857
//count if a number is divisble by any other in the array;

//splices out non-prime numbers
for (i = 1; i < x.length; i++) {
  for (j = 0; j < i; j++) {
    if (x[i] % x[j] === 0) {
      x.splice(i, i + 1);
    }
  }
}
console.log(x);