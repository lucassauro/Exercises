interface Logger {
  log(param: string): void;
}

interface Database {
  atributo: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log('ConsoleLogger', param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('ConsoleLogger2', param);
  }
}

class ExampleDatabase implements Database {
  constructor(public atributo: Logger = new ConsoleLogger) {
  }
  save(key: string, value: string) {
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