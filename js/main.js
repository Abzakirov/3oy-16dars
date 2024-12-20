class Transport {
  name;
  speed;
  capacity;
  constructor(name, speed, capacity) {
    this.name = name;
    this.speed = speed;
    this.capacity = capacity;
  }
  getDetalis() {
    return ` Name ${this.name},speed ${this.speed} capacity ${this.capacity}`;
  }
  start() {
    return `Transport vosita harakatga tushdi`;
  }
  stop() {
    return ` Transport vosita to‘xtadi`;
  }
}

class Car extends Transport {
  constructor(name, speed, capacity, fuelType) {
    super(name, speed, capacity);
    this.fuelType = fuelType;
  }
  getDetalis() {
    return ` Name ${this.name},speed ${this.speed} capacity ${this.capacity} fuelType ${this.fuelType}`;
  }
  driveMode(mode) {
    let modes = ["Sport", "eco", "comfort"];
    if (modes.includes(mode)) {
      this.mode = mode;
      console.log(`Siz xozir bu rejimga ozgartirdiz ${this.mode}`);
    } else {
      console.log(
        `Notogti kiritingiz shulardan tanlang: 'sport','eco','comfort'`
      );
    }
  }
}

class Airplane extends Transport {
  constructor(name, speed, capacity, fuelType, altitude) {
    super(name, speed, capacity);
    this.fuelType = fuelType;
    this.altitude = altitude;
  }
  fly() {
    return ` Samolyot uchishni boshladi`;
  }
  getDetalis() {
    return ` Name ${this.name},speed ${this.speed} capacity ${this.capacity} fuelType ${this.fuelType} ,altitude ${this.altitude}`;
  }
}

class Ship extends Transport {
  constructor(name, speed, capacity, fuelType, altitude, cargoCapacity) {
    super(name, speed, capacity);
    this.fuelType = fuelType;
    this.altitude = altitude;
    this.cargoCapacity = cargoCapacity;
  }
  sail() {
    return `Kema suzishni boshladi`;
  }
  getDetalis() {
    return ` Name ${this.name},speed ${this.speed} capacity ${this.capacity} fuelType ${this.fuelType} ,altitude ${this.altitude}`;
  }
}

const trans = new Transport("avtobus", 120, 30);
console.log(trans.getDetalis());
console.log(trans.start());
console.log(trans.stop());

const cars = new Car("Tayota", 220, 6, "Benzin");
cars.driveMode("comfort");
console.log(cars.getDetalis());

const planes = new Airplane("Sam 707", 400, 200, "benzin", 1000);
console.log(planes.fly());
console.log(planes.getDetalis());

const myShip = new Ship("Titanic", 30, 2200, "Diesel", 10000);
console.log(myShip.sail());
console.log(myShip.getDetalis());
