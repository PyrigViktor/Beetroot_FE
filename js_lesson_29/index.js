let userCar = {
    make: "Toyota",
    model: "AE86",
    year: 1983,
    averageSpeed: 120,
    fuelTank: 50,
    averageFuelConsumption: 8.2,
    driver: ["John", "Alex", "Denis"],


    allInfo: function () {
        console.log("Manufacturer -", this.make);
        console.log("Model -", this.model);
        console.log("Year -", this.year);
        console.log("Average speed -", this.averageSpeed);
        console.log("Fuel Tank -", this.fuelTank);
        console.log("Average fuel consumption -", this.averageFuelConsumption);
        console.log("Drivers -", this.driver.join(", "));
    },

    // addDriver: function (driverName) {
    //     this.driver.push(driverName);
    // },

    // hasDriver: function (driverName) {
    //     return this.driver.includes(driverName);
    // },

};

// function travelInfo(distance) {
//     let fullTravelDistance = 0;
//     let fullFuelConsumption = 0;
//     let hoursPerBreak = 4;
//     let breakTime = 1;
//     while (distance > 0) {
//         let travelTimeWithoutBreak = distance / userCar.averageSpeed;
//         let allBreaks = Math.floor(travelTimeWithoutBreak / (hoursPerBreak + breakTime));
//         let totalTravelWithBreaks = travelTimeWithoutBreak + allBreaks * breakTime;
//         let fuelConsumption = (distance / 100) * userCar.averageFuelConsumption;

//         fullTravelDistance += totalTravelWithBreaks;
//         fullFuelConsumption += fuelConsumption;
//         distance -= userCar.averageFuelConsumption * totalTravelWithBreaks;
//     }
//     return {
//         travelTime: fullTravelDistance,
//         fuelConsumption: fullFuelConsumption
//     }
// }


// let distanceToTravel = 800;
// let allTravelInfo = travelInfo(distanceToTravel);

// console.log(allTravelInfo.travelTime.toFixed(2));
// console.log(allTravelInfo.fuelConsumption.toFixed(2));

// for (let key in userCar) {
//     console.log(`${key} = ${userCar[key]}`);
// }
// userCar.addDriver(["James"]);
// userCar.allInfo();

// console.log("Is John can drive this car?", userCar.hasDriver("John"));


// function Time(hours, minutes, seconds) {
//     this.hours = hours || 0;
//     this.minutes = minutes || 0;
//     this.seconds = seconds || 0;
// };

// Time.prototype.displayTime = function () {
//     const formattedHours = this.formatTimePart(this.hours);
//     const formattedMinutes = this.formatTimePart(this.minutes);
//     const formattedSeconds = this.formatTimePart(this.seconds);
//     console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
// };

// Time.prototype.formatTimePart = function (part) {
//     return part < 10 ? `0${part}` : `${part}`;
// };

// Time.prototype.addSeconds = function (seconds) {
//     this.seconds += seconds;
//     this.normalizeTime();
// };

// Time.prototype.addMinutes = function (minutes) {
//     this.minutes += minutes;
//     this.normalizeTime();
// };

// Time.prototype.addHours = function (hours) {
//     this.hours += hours;
//     this.normalizeTime();
// };

// Time.prototype.normalizeTime = function () {
//     const totalMinutes = this.seconds / 60 + this.minutes;
//     const extraHours = Math.floor(totalMinutes / 60);

//     this.hours = (this.hours + extraHours) % 24;
//     this.minutes = totalMinutes % 60;
//     this.seconds %= 60;
// };


// const time = new Time();
// time.displayTime();
// time.addSeconds(1);
// time.displayTime();
// time.addMinutes(1);
// time.displayTime();
// time.addHours(1);
// time.displayTime();
