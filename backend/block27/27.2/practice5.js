class ConsoleLogger {
    log(param) {
        console.log('ConsoleLogger', param);
        console.log('this', this);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log('ConsoleLogger2', param);
    }
}
class ExampleDatabase {
    constructor(atributo = new ConsoleLogger) {
        this.atributo = atributo;
    }
    save(key, value) {
        this.atributo.log(key);
        this.atributo.log(value);
    }
}
const objeto1 = new ConsoleLogger();
const objeto2 = new ConsoleLogger2();
const example1 = new ExampleDatabase(objeto1);
const example2 = new ExampleDatabase(objeto2);
const example3 = new ExampleDatabase();
objeto1.log('objeto1: Oi');
objeto2.log('objeto2: Olá. Tudo bem?');
example1.save('conteúdo1', 'isso aí');
example2.save('conteúdo2', 'isso aíí');
example3.save('conteúdo3', 'isso aííí');
