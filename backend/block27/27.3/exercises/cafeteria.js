"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = exports.Order = void 0;
var OrderItem = /** @class */ (function () {
    function OrderItem(itemName, price) {
        if (itemName.length < 3 || price < 0)
            return;
        this.itemName = itemName;
        this.price = price;
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
var Order = /** @class */ (function () {
    function Order(client, items, paymentMethod, discount) {
        if (discount === void 0) { discount = 0; }
        this.client = client;
        this.items = items;
        this.paymentMethod = paymentMethod;
        this.discountPercentage = discount;
    }
    Order.prototype.calculateTotal = function () {
        return this.items.reduce(function (pV, cV) { return pV + cV.price; }, 0);
    };
    Order.prototype.withDiscount = function () {
        var total = this.calculateTotal();
        if (total <= 0)
            return 'O pedido deve ter pelo menos um item';
        var discount = (this.discountPercentage / 100);
        var result = total - (total * discount);
        if (result < 0)
            return 'Erro, desconto negativo';
        return result;
    };
    return Order;
}());
exports.Order = Order;
