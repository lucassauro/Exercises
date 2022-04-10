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

}

function hello(superClass: Superclass) {
superClass.sayHello();
}

const pai = new Superclass();
const filha = new Subclass();

hello(pai);
hello(filha);