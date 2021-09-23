var readlineSync = require('readline-sync');

function diagonal(array){
    console.log("1.diagonal difference");
    console.log("2.sum of all diagonal elements both d1 and d2");
    console.log("3.diagonal abs difference");
    let choice = readlineSync.question('Enter your choice? ');
    let sumd1=0;
    let sumd2=0;
    let diff = 0;
    for(i=0;i<array.length;i++){
        let m = array.length-1;
        for(j=0;j<array[i].length;j++){
            let n = array[i].length-1;
            if(i==j){
                sumd1 += array[i][j];
            }
            if(Math.abs((m-i)+(n-j))==2)
            {
                sumd2 += array[i][j];
                //console.log(array[n-i][n-j]);
            }
        }
    }
    diff= sumd1-sumd2;
    if(choice == "1"){
        //console.log(sumd1,sumd2,diff);
        return diff;
    }
    if(choice=="2"){
        let sum=0;
        sum = sumd1 + sumd2
        return sum;
    }
    if(choice=="3"){
        return Math.abs(diff);
    }
}

console.log(diagonal([[11,2,3],[4,5,6],[7,8,9]]));