// ### Lab 25:-
// Write a function to check number is Armstrong or not.
// #### Test Cases :
// ```
// Input 1: 153
// Output: The 153 is Armstrong.

// Input 2: 11
// Output: The 11 is not Armstrong.

// ```

function Armstrong(number){
    let digit=0;
    for(i=0;i<number.length;i++){
        digit += Number(number[i]*number[i]*number[i]);
    }
    if(digit == number){
        return "Armstrong";
    }
    else{
        return "not Armstrong";
    }
}
console.log(Armstrong("153"));
