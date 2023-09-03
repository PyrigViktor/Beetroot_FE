// Min

/*
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:

Метод, який виводить на екран інформацію про автомобіль.

Додавання ім’я водія у список

Перевірка водія на наявність його ім’я у списку

Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

let userCar = {
    make: "Toyota",
    model: "AE86",
    year:  1983,
    averageSpeed: 120,
    fuelTank: 50,
    averageFuelConsumption: 8.2,
    driver: ["John" , "Alex", "Denis"],
    allInfo: function () {
        console.log("Manufacturer -", this.make);
        console.log("Model -", this.model);
        console.log("Year -", this.year);
        console.log("Average speed -", this.averageSpeed);
        console.log("Fuel Tank -", this.fuelTank);
        console.log("Average fuel consumption -", this.averageFuelConsumption);
        console.log("Drivers -", this.driver.join(", "));
    },
    addDriver: function (driverName) {
        this.driver.push(driverName);
    },
    hasDriver: function(driverName) {
        return this.driver.includes(driverName);
    },
};

function travelInfo (distance) {
    let fullTravelDistance = 0;
    let fullFuelConsumption = 0;
    let hoursPerBreak = 4;
    let breakTime = 1;
    while (distance > 0) {
        let travelTimeWithoutBreak = distance / userCar.averageSpeed;
        let allBreaks = Math.floor(travelTimeWithoutBreak / (hoursPerBreak + breakTime));
        let totalTravelWithBreaks = travelTimeWithoutBreak + allBreaks * breakTime;
        let fuelConsumption = (distance/100) * userCar.averageFuelConsumption;

        fullTravelDistance += totalTravelWithBreaks;
        fullFuelConsumption += fuelConsumption;
        distance -= userCar.averageFuelConsumption *totalTravelWithBreaks;
    }
    return {
        travelTime: fullTravelDistance,
        fuelConsumption: fullFuelConsumption
    };
}
let distanceToTravel = 800;
let allTravelInfo = travelInfo(distanceToTravel);

console.log(allTravelInfo.travelTime.toFixed(2));
console.log(allTravelInfo.fuelConsumption.toFixed(2));

/*for (let key in userCar) {
    console.log(`${key} = ${userCar[key]}`);
}*/
userCar.addDriver(["James"]);
userCar.allInfo();

console.log("Is John can drive this car?", userCar.hasDriver("John"));

