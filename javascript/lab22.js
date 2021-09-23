// Method2(Using loop logic and counter):
// Sample Input  1 : (2, 3)
// Sample Output 1 : -1
// Sample Input  2 : (5, 3)
// Sample Output 2 :  2
// Sample Input  3 : (1, 1)
// Sample Output 3 :  0
// ```

function subtract(x,y){
    let count=0;
    for(let i = y;y<x&&i<x;i++){
        count++;
    }
    if(count>0)
    return count;
    count=0;
    for(let i = x;x<y&&i<y;i++){
        count++;
    }
    if(count>0)
    return "-"+String(count);
}

console.log(subtract(2,3));