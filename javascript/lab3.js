
// # Implement a function that takes two numbers, testVariable1 and testVariable2 and returns their greatest common divisor.
// What is the Greatest Common Divisor? #
// The Greatest Common Divisor of two or more integers is the largest positive integer that divides each of the integers.

// For example, take two numbers 42 and 56.

// 42 can be completely divided by 1, 2, 3, 6, 7, 14, 21 and 42.

// 56 can be completely divided by 1, 2, 4, 7, 8, 14, 28 and 56.

// Therefore, the greatest common divisor of 42 and 56 is 14.

// Input #
// Two variables testVariable1 and testVariable2 containing numbers.

// Output #
// The greatest common divisor of testVariable1 and testVariable2.

// Sample Input #
// 6, 9

// Sample Output #
// 3

// ```
function gcd(testVariable1, testVariable2) {
let value=0;
for(let i = 0; i< testVariable1; i++){
    for(let j= 0; j < testVariable2;j++){

    if((testVariable1%i==0)&&(testVariable2%j==0)){
        value=i;
    }
    }
}

   return value;
}

console.log(gcd(6,9));
