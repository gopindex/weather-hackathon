// Write an Algorithm to implement bubble sort.
function bubble(x){
    for(let j=0;j<x.length;j++){
     for(let i=0;i<x.length;i++){
        if(x[i]>x[i+1]){
            [x[i],x[i+1]] = [x[i+1],x[i]];
        }
     }       
    }
    return x;
}

console.log(bubble([8,4,5,3,2]));