// # Convert Decimal Number to Binary Number
// Problem Statement #
// Write a function that takes a number testVariable and returns a string that is its equivalent binary number.

// Input #
// A variable testVariable containing the decimal number.

// Output #
// String variable that contains the equivalent binary number of the input number.

// Sample Input #

// 11

// Sample Output #

// "1011"

// ```
 function decimalToBinary(testVariable) {
   // Write your code here
   let str="";
   while(Number(testVariable)>0 || Number(testVariable)>1){
       testVariable=Math.floor(Number(testVariable)/2);
       str = str + testVariable%2;
   }
   return str;
 }

 console.log(decimalToBinary(3));
// ```