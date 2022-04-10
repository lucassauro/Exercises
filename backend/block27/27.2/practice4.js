class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const result = myParam + this.myNumber;
        return `${myParam} + ${this.myNumber} = ${result}`;
    }
}
const objeto = new MyClass(10);
console.log(objeto.myNumber);
console.log(objeto.myFunc(5));
