function indexofvalue(array,value){
for(let i = 0;i<=array.length;i++){
if(array[i]==value){
    return i;
}
if(array[i]<value&&array[i+1]>value){
    return i+1;
}
if(i==array.length){
return array.length
}
}
}
console.log(indexofvalue([2,4,6,8],7));