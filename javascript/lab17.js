// Implement a function that takes a variable testVariable, which contains a string of digits, and prints the sum of those digits.
//  ```

function sumDigits(testVariable) {
    // Write your code here
    if(testVariable.length==0)
    return 0;
    return Number(testVariable[0]) + sumDigits(testVariable.substr(1))
    // return null;
   }
   console.log(sumDigits("345"));

// <!-- Sample Input :  345 -->
// <!-- Sample Output :  12-->
// ```
