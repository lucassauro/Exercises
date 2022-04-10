// exercícios 3 e 4

class Client {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface Item {
  itemName: string;
  price: number;
}

class Items implements Item {
  itemName: string;
  price: number;
  constructor(itemName: string, price: number) {
    this.itemName = itemName;
    this.price = price;
  }
}

class Order {
  client: string;
  items: Item[];
  paymentMethod: string;
  discount?: number;

  constructor (client: string, items: Item[], paymentMethod: string ) {
    this.client = client;
    this.items = items;
    this.paymentMethod = paymentMethod;
  }

  calculateTotal() {
    return this.items.reduce((pV, cV) => pV + cV.price, 0)
  }
  withDiscount() {
    const result = this.calculateTotal()
    return result * (1 - (this.discount as number))
  }
}
