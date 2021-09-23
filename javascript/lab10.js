// Write an Algorithm to Swap two numbers.
// #### Test Cases :
// ```
// Sample Input 1 :  5 , 8
// Sample Output 1 : 8, 5

//  ```

function swap(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    //b = b + a;
    return console.log(a,b);
}
swap(11,5);