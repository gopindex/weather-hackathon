function calcpyramid(){
    let num="1";
    let numvalue=1;
    let sp = "        ";
    let j = 1;
    //console.log(sp+(Number("1"))+" * 8 + "+(1)+" = "+8);
    for(let i =1;i<8;){
        sp = sp.slice(1,sp.length);
        cal = (Number(num) * 8) + Number(j);
        j=j+1;
        numvalue = Number(i+num);
        console.log(sp+(Number(num))+" * 8 + "+(i)+" = "+cal);
        num = num+String(i+1);
        i = i + 1;
    }
    return '';
}
console.log(calcpyramid());