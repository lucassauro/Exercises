class Tv1 {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
    }
}
const teve1 = new Tv1('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);
teve1.turnOn();
