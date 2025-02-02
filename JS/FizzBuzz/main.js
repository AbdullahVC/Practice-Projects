// FizzBuzz
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let count = 1; count <= 100; count++) {
  if (count % 15 === 0) {
    console.log("FizzBuzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else if (count % 5) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}
