class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log('Olá mundo!');
  }

  // protected sayHello() {
  //   console.log('Olá mundo!');
  // }

  // private sayHello() {
  //   console.log('Olá mundo!');
  // }
}

class Subclass extends Superclass {
  public sayHello2() {
    this.sayHello();
  }
}

function hello(superClass: Subclass) {
superClass.sayHello();
// superClass.sayHello2();
}

const pai = new Superclass();
const filha = new Subclass();

// hello(pai);
hello(filha);