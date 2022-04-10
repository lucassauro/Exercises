class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
}

function hello(superClass: Superclass) {
  superClass.sayHello();
  if (superClass.isSuper) return console.log('Super!');
  return console.log('Sub!');
}

const pai = new Superclass();
const filha = new Subclass();

hello(pai);
hello(filha);