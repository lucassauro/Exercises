class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
function hello(superClass) {
    superClass.sayHello();
    if (superClass.isSuper)
        return console.log('Super!');
    return console.log('Sub!');
}
const pai = new Superclass();
const filha = new Subclass();
hello(pai);
hello(filha);
