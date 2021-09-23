// Write an Algorithm to implement insertion sort.

function insertion(a){
    let temp,value;
    for(let j=1;j<a.length;j++){
        value = a[j];
        temp = j;
        while(temp>0&&a[temp-1]>value){
            a[temp] = a[temp-1];
            temp = temp - 1;
        }
        a[temp]=value;
    }
    return a;
}

console.log(insertion([6,2,4,8,1]));
