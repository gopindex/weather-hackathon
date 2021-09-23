// Write a Function that accepts the range to Find Odd Numbers between the input range.
// ##### Test Cases :
// ```
// Sample Input 1 : ( 1, 10)
// Output :
// 1
// 3
// 5
// 7
// 9
// Sample Input 2 : (15, 20)
// Output : 
// 15
// 17
// 19 
// ```
function oddnumberrange(start,end){
    for(let i =start;i<end;i++){
        if(!(i%2==0)){
            console.log(i);
        }
    }
    return "";
}
oddnumberrange(15,20);
oddnumberrange(1, 10);