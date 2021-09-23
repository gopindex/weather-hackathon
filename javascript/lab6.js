 // Write a Function that accepts the range to Find Odd Numbers between the input range.
// ##### Test Cases :
// ```
// Sample Input 1 :  1, 10
// Sample Output 1 : 1, 3, 5, 7, 9
// Sample Input 2 :  50, 58
// Sample Output 2 : 51, 53, 55, 57
// ```

function oddnumberinrange(x,n){
    let str = "";
    for(let i =x; i<n;i++){
        if(i%2==1){
            str = str + i + " ";
        }
    }
    return str;
}
console.log(oddnumberinrange(50,58));