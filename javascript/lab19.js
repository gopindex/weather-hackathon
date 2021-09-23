function calcpyramid(){
    let num="9";
    let numvalue=1;
    let sp = "        ";
    let j = 7;
    console.log(sp+(Number("0"))+" * 9 + "+(8)+" = "+8);
    for(let i =7;i>1;){
        sp = sp.slice(1,sp.length);
        cal = (Number(num) * 9) + Number(j);
        j=j-1;
        numvalue = Number(i+num);
        console.log(sp+(Number(num))+" * 9 + "+(i)+" = "+cal);
        num = num+String(i+1);
        i = i - 1;
    }
    return '';
}
console.log(calcpyramid());