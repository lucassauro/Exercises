import { Person } from './index';

interface Item {
  itemName: string;
  price: number;
}

class OrderItem implements Item {
  itemName: string;
  price: number;
  constructor(itemName: string, price: number) {
    if (itemName.length < 3 || price < 0) return;
    this.itemName = itemName;
    this.price = price;
  }
}

class Order {
  id: number = 0;
  createdAt: Date;
  client: Person;
  items: Item[];
  paymentMethod: string;
  discountPercentage?: number;

  constructor (client: Person, items: Item[], paymentMethod: string, discount: number = 0) {
    this.incrementId();
    this.client = client;
    this.items = items;
    this.paymentMethod = paymentMethod;
    this.discountPercentage = discount;
    this.createdAt = new Date;
  }

  incrementId() {
    this.id += 1;
  }

  calculateTotal() {
    return this.items.reduce((pV, cV) => pV + cV.price, 0)
  }

  withDiscount() {
    const total = this.calculateTotal()
    if (total <= 0) return 'O pedido deve ter pelo menos um item';
    const discount = (this.discountPercentage as number / 100);
    const result = total - (total * discount);
    if (result < 0) return 'Erro, desconto negativo';
    return result;
  }
}

class OrderRepository {
  orders: Order[];

  addOrder(order: Order) {
    this.orders.push(order);
  }

  removeOrder(id: number) {
    const index = this.orders.findIndex((order) => order.id = id);
    this.orders.splice(index, 1);
  }

  listByClient(client: Person) {
    return this.orders.filter((order) => order.client.name === client.name);
  }

  listBySortedValue(param: string) {
    if (param === 'maior') {
      return this.orders.sort((a, b) => a.calculateTotal() - b.calculateTotal());
    } else if (param === 'menor') {
      return this.orders.sort((a, b) => b.calculateTotal() - a.calculateTotal());
    } else {
      return 'parâmetro errado'
    }
  }
}

export {
  Order,
  OrderItem,
  OrderRepository,
}