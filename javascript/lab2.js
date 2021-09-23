// Write a function that finds the Reverse a string.
// One should use recursive.

function reverseStringRecursive(str) {
if(str.length ==0)
  return str;
  str[0]=String(str).substring(str.length);
  return reverseStringRecursive(str.substring(1,str.length)) + str[0];
 
}

console.log(reverseStringRecursive("reflective"));