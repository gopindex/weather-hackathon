
function selection(a,n){
    for(let i=0;i<n;i++)
    {
        for(let j=i;j<n;j++){
            if(a[i]>a[j]){
                let temp = 0;
                temp = a[i];
                a[i] = a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}

console.log(selection([3,2,7,9,1],5))