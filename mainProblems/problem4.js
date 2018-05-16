//find the largest product of two three digit numbers
function palindromeProduct() {
  for (i = 999; i > 800; i--) {
    for (j = 999; j > 800; j--) {
      var product = i * j;
      if (product === parseInt(product.toString().split('').reverse().join(''))) {
        return product;
            }
        }
    }
}

//answer is 906609