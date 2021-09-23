// ### Lab 21 :-
// Write an Algorithm to compute x^y using WHILE loop where x and y are input parameters of the Function.
// #### Test Cases :
// ```
// Sample Input  1 : (2, 2)
// Sample Output 1 : 4

// Sample Input  2 : (3, 4)
// Sample Output 2 : 81
// ```

function xpowery(x,y){
    let power =1;
    while(y>0)
    {
        power=power * x;
        y--;
    }
    return power;
}
console.log(xpowery(3,4));
