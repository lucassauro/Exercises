class Tv2 {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }
  
  set connectedTo(value: string | undefined)  {
    if (value === 'undefined') {
      console.log('Sorry, connection unavailable!');
    }
    // For some reason, arr.includes is not working even if tsconfig.json lib is adapted to use es2016 or later.  
    // https://stackoverflow.com/questions/40545329/property-includes-does-not-exist-on-type-string
    // if (this._connections.includes(value as string)) {
    //   this._connectedTo = value;
    //   console.log(this.connectedTo);
    // }
    // optional use
    if (this._connections.indexOf(value as string) !== -1) {
      this._connectedTo = value;
      console.log(this.connectedTo);
    }
  }
  
    get connectedTo(): string | undefined {
      return this._connectedTo;
    }
}

const tv1 = new Tv2('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);
tv1.turnOn();
tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);
