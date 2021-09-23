// Write a function to Remove adjacent duplicates in a string.
//  ```
 

// <!-- Sample Input :  Helllo -->
// <!-- Sample Output : Helo -->
// ```

function removeDuplicates(string){
    if(string.length ==0)
    return "";
    if(string[string.length-1]==string[string.length-2]){
        string=string.substr(0,string.length-2);
    }
     return removeDuplicates(String(string).substr(0,string.length-1))+string.substr(string.length-1);
 }

 console.log(removeDuplicates('Helllo'))
