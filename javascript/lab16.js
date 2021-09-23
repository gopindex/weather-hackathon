// Implement a function that takes a string testVariable and returns the length of the string.
//  ```
 
function recursiveLength(testVariable) {
	// Write your code here
    if(testVariable.length==0)
    return "";
    return Number(1) + Number(recursiveLength(testVariable.substr(0,testVariable.length-1)));
}
console.log(recursiveLength('Helllo'))

// <!-- Sample Input :  Helllo -->
// <!-- Sample Output :  6-->
// ```
