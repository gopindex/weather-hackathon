// ### Lab 29 :- 
// Split the array and add the first part to the end. There is a given array and split it from a specified position, and move the first part of array add to the end. Write a function that accepts an array and index position to split as arguments. 

// #### Test Cases :
// ```
// Sample Input  : arr = [12, 10, 5, 6, 52, 36], index position to split = 2
// Sample Output : [5, 6, 52, 36, 12, 10]
// ```
function arraysplitandjoin(arr,indx){
    //arr.map(arr);
    let joined = [];
    let n = Array(arr.length);
     joined = Array(arr.splice(0,indx));
     console.log(arr);
     arr = Array(arr) + joined;
    return Array(arr);
}
console.log(arraysplitandjoin([12, 10, 5, 6, 52, 36],2));