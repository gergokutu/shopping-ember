import Controller from '@ember/controller';

export default class CartController extends Controller {
    // do the same here like with setupController in routes/cart.js
    // have to define a setter!!!
    get subtotal() {
        return this.model.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }

    tax = 0;
    total = 0;
}
