
const factorial = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product *= i;
    }
    return product;
  };

// Expressed as a recursive function, only one line of code is needed!
const factorial = number => {
    return number < 2 ? 1 : number * factorial(number - 1);
  };