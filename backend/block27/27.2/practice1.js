class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends Superclass {
}
function hello(superClass) {
    superClass.sayHello();
}
const pai = new Superclass();
const filha = new Subclass();
hello(pai);
hello(filha);
