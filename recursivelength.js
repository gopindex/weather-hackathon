function recursivelength(string){
    let length =0;
    if(string==""){
        return 0;
    }
    length = length + recursivelength(string.substr(1)) + 1;
    return length;
}
console.log(recursivelength("simple"));