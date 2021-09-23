function mergesort(a){
    if(a.length==1){
        return a;
    }
    let mid = Math.floor(a.length/2);
    let left = a.slice(0,mid);
    let right = a.slice(mid);
    return merge(mergesort(left),mergesort(right));
}
function merge(left,right){

    let leftindex = 0, rightindex = 0;
    let result = [];
    while(leftindex<left.length&&rightindex<right.length){
        if(left[leftindex]<right[rightindex]){
            result.push(left[leftindex]);
            leftindex++;
        }
        else {
            result.push(right[rightindex]);
            rightindex++;
        }
    }
    return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
}

console.log(mergesort([6,4,1,5]));