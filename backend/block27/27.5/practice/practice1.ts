class Passenger {
  constructor (public nome:string, public cpf:number) { }
}

class ShippedItem {
  constructor (public nome:string, public id:number, public customerID:string) { }
}

class Flight {
  constructor (public num:number, public payload: (Passenger | ShippedItem)[]) { }

  Add(newPayload: Passenger | ShippedItem): void {
    this.payload.push(newPayload); 
  }

  Remove(removePayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removePayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}

class Company {
  constructor (public nome:string, public flights:Flight[]) { }
  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
   }
  AddToFlight(flightNum: number, payload: Passenger | ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) currentFlight.Add(payload);
   }
  RemoveFromFlight(flightNum: number, passenger: Passenger): void { }
}

class TravelingCompany extends Company {
  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

class ShippingCompany extends Company {

}
