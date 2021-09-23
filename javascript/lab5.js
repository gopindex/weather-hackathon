// # Check Palindrome
// Given a string, check whether or not it is a palindrome.
// Problem Statement #
// Write a function that takes a variable testVariable, which contains a string, and checks whether or not it is a palindrome.

// What is a “Palindrome”? #
// A Palindrome is a string that reads the same backward and forwards. For example madam, pop, etc.
// All strings with length 1 are considered palindromes.

// Remember, lower case letters are different from upper case letters, therefore, Ada is not a palindrome.

// Input #
// A variable testVariable containing a string.

// Output #
// true if the input string is a palindrome. false if the string is not a palindrome.

// Sample Input #
// "madam"
// Sample Output #
// true

// ```
function isPalindrome(testVariable) {
    if(testVariable.length <=1)
    return "palindrome";
    if(String(testVariable[0])==String(testVariable[testVariable.length-1])){
        
    }
    else {
        return "not palindrome";
    }

    return isPalindrome(String(testVariable.substr(1,testVariable.length-2)));
 }
// ```
console.log(isPalindrome("madam"));