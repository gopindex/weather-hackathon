// ### Lab 30:-
// Write an algorithm(Function) that receives an input string. Split the given Input String into two strings based on even and odd indexes. Pad left side with '000' string and right side with '111' string.
// #### Test Cases :
// ```
// Sample Input1: 
// code.in
// Sample Output1: 
// 000cd.n111
// 000oei111

// Sample Input 2 :
// Hello there
// Sample Output 2 :
// 000Hlotee111
// 000el hr111
// ```
function evencharwithpadding(str){
    let value = "";
    for(i=0;i<str.length;i++){
        if(i%2==0){
            value += str[i];
        }
    }
    return "000"+value+111;
}
console.log(evencharwithpadding("code.in"));
console.log(evencharwithpadding("Hello there"));