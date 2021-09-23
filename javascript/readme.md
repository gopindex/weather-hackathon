# AAGAM_COHORTC_2021
# THSCohortC2021-AAGAM
## General info
Coding problems for lab hours.
## Coding Language:
Javascript.

## Problem Statements :
### Lab 1 :-
```
Write two functions that finds the factorial of any number.
One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  return answer;
}

function findFactorialIterative(number) {
  //code here
  return answer;
}

```

### Lab 2 :-
```
Write a function that finds the Reverse a string.
One should use recursive.

function reverseStringRecursive(str) {
  //code here
  return ;
}

```

### Lab3 :- 


# Implement a function that takes two numbers, testVariable1 and testVariable2 and returns their greatest common divisor.
What is the Greatest Common Divisor? #
The Greatest Common Divisor of two or more integers is the largest positive integer that divides each of the integers.

For example, take two numbers 42 and 56.

42 can be completely divided by 1, 2, 3, 6, 7, 14, 21 and 42.

56 can be completely divided by 1, 2, 4, 7, 8, 14, 28 and 56.

Therefore, the greatest common divisor of 42 and 56 is 14.

Input #
Two variables testVariable1 and testVariable2 containing numbers.

Output #
The greatest common divisor of testVariable1 and testVariable2.

Sample Input #
6, 9

Sample Output #
3

```
function gcd(testVariable1, testVariable2) {
  // Write your code here
  return null;
}
```

### Lab4 :- 

# Convert Decimal Number to Binary Number
Problem Statement #
Write a function that takes a number testVariable and returns a string that is its equivalent binary number.

Input #
A variable testVariable containing the decimal number.

Output #
String variable that contains the equivalent binary number of the input number.

Sample Input #

11

Sample Output #

"1011"

```
function decimalToBinary(testVariable) {
  // Write your code here
  return null;
}
```

### Lab 5 :- 

# Check Palindrome
Given a string, check whether or not it is a palindrome.
Problem Statement #
Write a function that takes a variable testVariable, which contains a string, and checks whether or not it is a palindrome.

What is a “Palindrome”? #
A Palindrome is a string that reads the same backward and forwards. For example madam, pop, etc.
All strings with length 1 are considered palindromes.

Remember, lower case letters are different from upper case letters, therefore, Ada is not a palindrome.

Input #
A variable testVariable containing a string.

Output #
true if the input string is a palindrome. false if the string is not a palindrome.

Sample Input #
"madam"
Sample Output #
true

```
function isPalindrome(testVariable) {
  // Write your code here
  return null;
}
```

### Lab 6 :- 

Write a Function that accepts the range to Find Odd Numbers between the input range.
##### Test Cases :
```
Sample Input 1 :  1, 10
Sample Output 1 : 1, 3, 5, 7, 9
Sample Input 2 :  50, 58
Sample Output 2 : 51, 53, 55, 57
```

### Lab 7 :-
Write a Function which prints the sum of 1-N numbers when N is input.[n(n+1)/2].
#### Test Cases :
```
Sample Input 1 : 1, 6
Sample Output 1 : 21
Sample Input 2 : 20, 24
Sample Output 2 : 110
```
### Lab 8:-
Print N Fibonacci numbers in one line where is N is a function input parameter.
#### Test Cases :
```
Sample Input 1 : 10
Sample Output 1 : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
Sample Input 2 : 5
Sample Output 2 : 0, 1, 1, 2, 3,
```
### Lab 9:-
Write an Algorithm to validate the given input Number N is Prime or Not.
#### Test Cases :
```
Sample Input 1 :  55
Sample Output 1 : 55 is not a prime number
Sample Input 2 :  7
Sample Output 2 : 7 is a prime number
 ```

 
### Lab 10:-
Write an Algorithm to Swap two numbers.
#### Test Cases :
```
Sample Input 1 :  5 , 8
Sample Output 1 : 8, 5

 ```

 ### Lab 11:-
Write an Algorithm to implement selection sort.

 ### Lab 12:-
Write an Algorithm to implement bubble sort.

 ### Lab 13:-
Write an Algorithm to implement insertion sort.


 ### Lab 14:-
Write an Algorithm to implement merge sort.

 ### Lab 15:-
Write a function to Remove adjacent duplicates in a string.
 ```
 
function removeDuplicates(string){


    return string; 
}

console.log(removeDuplicates('Helllo'))

<!-- Sample Input :  Helllo -->
<!-- Sample Output : Helo -->
```

 ### Lab 16:-
Implement a function that takes a string testVariable and returns the length of the string.
 ```
 
function recursiveLength(testVariable) {
	// Write your code here
	return null;
}
console.log(recursiveLength('Helllo'))

<!-- Sample Input :  Helllo -->
<!-- Sample Output :  6-->
```

 ### Lab 17:-
Implement a function that takes a variable testVariable, which contains a string of digits, and prints the sum of those digits.
 ```

function sumDigits(testVariable) {
    // Write your code here
    return null;
  }
console.log(sumDigits('345'))

<!-- Sample Input :  345 -->
<!-- Sample Output :  12-->
```

 ### Lab 18:-
 Replace all Negative Numbers with Zero.
 An array can contain negative numbers. 
Our task is to replace all instances of negative numbers with 00 starting from a given index of the array.
 ```

function replace(array, currentIndex) {

 return;
}
replace([2,-3,4,-1,-7,8] , 0)

<!-- Sample Input :  [2,-3,4,-1,-7,8] -->
<!-- Sample Output :   [2,0,4,0,0,8]-->
```

### Lab 19 :-
Pattern 1
#### Test Case for Pattern 1:
```
       0 * 9 + 8 = 8
       9 * 9 + 7 = 88
      98 * 9 + 6 = 888
     987 * 9 + 5 = 8888
    9876 * 9 + 4 = 88888
   98765 * 9 + 3 = 888888
  987654 * 9 + 2 = 8888888
 9876543 * 9 + 1 = 88888888
98765432 * 9 + 0 = 888888888
```
### Lab 20 :-
Pattern 2
#### Test Case for Pattern 2 :
```
         1 x 8 + 1 =  9
        12 x 8 + 2 =  98
       123 x 8 + 3 =  987
      1234 x 8 + 4 =  9876
     12345 x 8 + 5 =  98765
    123456 x 8 + 6 =  987654
   1234567 x 8 + 7 =  9876543
  12345678 x 8 + 8 =  98765432
 123456789 x 8 + 9 =  987654321
```

### Lab 21 :-
Write an Algorithm to compute x^y using WHILE loop where x and y are input parameters of the Function.
#### Test Cases :
```
Sample Input  1 : (2, 2)
Sample Output 1 : 4

Sample Input  2 : (3, 4)
Sample Output 2 : 81
```

### Lab 22 :- 
Write an Algorithm to subtract two integers without using "minus(-)" operator
#### Test Cases :
```
Method1(Using negation operator in a function):
Sample Input  1 : (2, 3)
Sample Output 1 : -1
Sample Input  2 : (5, 3)
Sample Output 2 :  2

Method2(Using loop logic and counter):
Sample Input  1 : (2, 3)
Sample Output 1 : -1
Sample Input  2 : (5, 3)
Sample Output 2 :  2
Sample Input  3 : (1, 1)
Sample Output 3 :  0
```

### Lab 23:-
Write a function which accepts an array as input and splits the array into number array and string array.
### Test Cases:
```
Sample Input   : [21, 11,'asma', '😅', 45, '😂', 99, '😛', '🧐', 88, '😍']
Sample Output  : 
[ 'asma', '😅', '😂', '😛', '🧐', '😍' ]
[ 21, 11, 45, 99, 88 ]
```

### Lab 24:-
Defang IPv4 and Validate

### Test Cases :
```
Input  1 :  255.64.12.11
Output 1 : 255.64.12.11
valid IP
Defanged IP: 255[.]64[.]12[.]11

Input  2 : 255.642.32.11
Output 2 : 255.642.32.11
Invalid IP
``` 


### Lab 25:-
Write a function to check number is Armstrong or not.
#### Test Cases :
```
Input 1: 153
Output: The 153 is Armstrong.

Input 2: 11
Output: The 11 is not Armstrong.

```

### Lab 26:-
Write an Algorithm to convert 24 hours format time into 12 hours format time
### Test Cases :
```
Input  1 : 18:00
Output 1 :  6:00 PM

Input  2 : 10:30
Output 2 : 10:30 AM  
```

### Lab 27:-
Write a function that prepends a zero to single digit numbers
### Test Cases :
```
Input  1 : [5, 17, 3, 9, 98]
Output 1 : [ '05', 17, '03', '09', 98 ]

Input  2 : [54, 1, 0, 96, 8]
Output 2 : [ 54, '01', '00', 96, '08' ]
```

### Lab 28:-
Write a function that creates Even array elements which accepts N as input. Push the numbers "less than or equal to N" to the Even Array if "N" is an even number.
#### Test Cases :
```
Sample Input  1: 10 
Sample Output 1: [2, 4, 6, 8, 10]

Sample Input  1: 20 
Sample Output 1: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

### Lab 29 :- 
Split the array and add the first part to the end. There is a given array and split it from a specified position, and move the first part of array add to the end. Write a function that accepts an array and index position to split as arguments. 

#### Test Cases :
```
Sample Input  : arr = [12, 10, 5, 6, 52, 36], index position to split = 2
Sample Output : [5, 6, 52, 36, 12, 10]
```

### Lab 30:-
Write an algorithm(Function) that receives an input string. Split the given Input String into two strings based on even and odd indexes. Pad left side with '000' string and right side with '111' string.
#### Test Cases :
```
Sample Input1: 
code.in
Sample Output1: 
000cd.n111
000oei111

Sample Input 2 :
Hello there
Sample Output 2 :
000Hlotee111
000el hr111
```

### Lab 31 :-
Write a Function that accepts the range to Find Odd Numbers between the input range.
##### Test Cases :
```
Sample Input 1 : ( 1, 10)
Output :
1
3
5
7
9
Sample Input 2 : (15, 20)
Output : 
15
17
19 
```