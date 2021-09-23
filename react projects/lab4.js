class Shape {
    constructor(color,isFilled){
        this.color = color;
        this.isFilled = isFilled;
    }
}

class Square extends Shape {
    constructor(color,isFilled){
        super();
        console.log("Square created");
    }
    getPerimeter = function(a,b) {
        return "getPerimeter of Square";
    } 
    getArea = function(a,b) {
        return "getArea of Square";
    }
}
class Rectangle extends Shape {
    constructor(color,isFilled) {
        super();
        console.log("Rectangle created");
    }
    getPerimeter = function(a,b) {
        return "getPerimeter of Rectangle";
    } 
    getArea = function(a,b) {
        return "getArea of Rectangle";
    }
}
let myval = new Rectangle("blue",true);
console.log(myval.getArea(1,2));