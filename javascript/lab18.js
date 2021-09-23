// Replace all Negative Numbers with Zero.
// An array can contain negative numbers. 
// Our task is to replace all instances of negative numbers with 00 starting from a given index of the array.
// ```

function replace(array, currentIndex) {
for(let i = currentIndex; i < array.length; i++){
    if(array[i]<0){
        array[i]=00;
    }
}
return array;
}
console.log(replace([2,-3,4,-1,-7,8] , 0));

// <!-- Sample Input :  [2,-3,4,-1,-7,8] -->
// <!-- Sample Output :   [2,0,4,0,0,8]-->
// ```