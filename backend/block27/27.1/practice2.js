class Tv2 {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
    }
    set connectedTo(value) {
        if (value === 'undefined') {
            console.log('Sorry, connection unavailable!');
        }
        // https://stackoverflow.com/questions/40545329/property-includes-does-not-exist-on-type-string
        // if (this._connections.includes(value as string)) {
        //   this._connectedTo = value;
        //   console.log(this.connectedTo);
        // }
        if (this._connections.indexOf(value) !== -1) {
            this._connectedTo = value;
            console.log(this.connectedTo);
        }
    }
    get connectedTo() {
        return this._connectedTo;
    }
}
const tv1 = new Tv2('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);
tv1.turnOn();
tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);
