// Write a Function which prints the sum of 1-N numbers when N is input.[n(n+1)/2].
// #### Test Cases :
// ```
// Sample Input 1 : 1, 6
// Sample Output 1 : 21
// Sample Input 2 : 20, 24
// Sample Output 2 : 110
// ```
function sumofnumbers(number){
    let sum = 0;
    for (let i =0;i<number.length;i++){
        sum = (number[i]*(number[i]+1))/2
    }
    return sum;
}
console.log(sumofnumbers([1,6]));