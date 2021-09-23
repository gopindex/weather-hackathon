class Vehicle {
    constructor(seating){
        this.seating = seating;
        console.log(Number(this.seating * 100));
        return Number(this.seating) * 100;
    }
}
class Car extends Vehicle {
    constructor(seating){
        let fare = super(seating);
        let calc = (fare.seating * 100);
        fare = calc + Math.floor(calc*.10);
        console.log(fare);
    }
}
class Truck extends Vehicle {
    constructor(seating){
        let fare = super(seating);
        let calc = (fare.seating * 100);
        fare = calc + Math.floor(calc*.15);
        console.log(fare);
    }
}

let myval = new Car(4);
console.log(myval);