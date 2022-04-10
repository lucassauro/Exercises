interface Myinterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements Myinterface {
  constructor(public myNumber: number) {
  }

  myFunc(myParam: number): string {
    const result = myParam + this.myNumber;
    return `${myParam} + ${this.myNumber} = ${result}`
  }
}

const objeto = new MyClass(10);
console.log(objeto.myNumber);
console.log(objeto.myFunc(5));