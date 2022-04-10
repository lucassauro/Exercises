// ./interfaces.ts
export interface IVehiclePlane {
  fly(): void;
}

export interface IVehicleCar {
  drive(): void;
}

export interface IVehicleFuturistic extends IVehicleCar, IVehiclePlane {};