import EmberRouter from '@ember/routing/router';
import config from 'shopping-tut/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('not-found', { path: "/*path" });
  this.route('item', { path: '/item/:item_id' });
  // overwrite the actual path for another name
  // but use shorthand name in the code
  this.route('cart', { path: 'shopping-cart' });
});
