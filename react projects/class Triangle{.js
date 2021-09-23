class Triangle{
    constructor(base, height){
        let area = (base * height)/2;
        console.log(area);
    }
}
Triangle.prototype.perimeter(a,b,c) {
    let semi = (a+b+c)/2;
    let peri = semi*(semi-a)*(semi-b)*(semi-c)
    peri = peri ** 2;
}
Triangle(10,15);