// ./FuturisticCar.ts
import { IVehiclePlane, IVehicleCar, IVehicleFuturistic } from './interfaces';

export default class FuturisticCar implements IVehicleFuturistic {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

class Car implements IVehicleCar {
  drive(): void {
    console.log('driving');
  }

  fly(): void {
    console.log("i don't drive");
  }
}

class AirPlane implements IVehiclePlane {
  drive(): void {
    console.log("I don't drive");
  }

  fly(): void {
    console.log("flyingggg");
  }
}

