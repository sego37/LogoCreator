class Car {
    // properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


    // methods
    startEngine() {
        console.log('Starting engine...');
    }
    drive() {
        console.log('Driving...');
    }

    stopEngine() {
        console.log('Stopping engine...');
    }

    describe() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
    }
}

const car1 = new Car("Ford", "Mustang", 1964)
// const car1 = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1964
// }

const car2 =new Car("Tesla", "Model X", 2017)

car1.describe()
car2.describe()

// console.log(car1)
// console.log(car2)