import Controller from '@ember/controller';

export default class CartController extends Controller {
    // do the same here like with setupController in routes/cart.js
    // have to define a setter!!!
    get subtotal() {
        return this.model.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    }

    // define tax & total getters
    get tax() {
        return 0.09 * this.subtotal;
    }

    get total() {
        return this.subtotal + this.tax;
    }
}
