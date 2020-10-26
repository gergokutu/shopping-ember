import Route from '@ember/routing/route';

export default class CartRoute extends Route {
    model() {
        const items = [{ price: 10 }, { price: 15 }];
        return items
    }

    // // overwrite the setupController function
    // setupController(controller, model) {
    //     // inherit everything from parent
    //     super.setupController(controller, model);

    //     const subtotal = model.reduce((acc, item) => {
    //         return acc + item.price;
    //     }, 0);

    //     controller.set(
    //         'subtotal',
    //         subtotal
    //     );
    // }

    // the controller also has access to the model & routes
    // lets rewrite setupController directly in cart controller
    // comment out the above part
}
