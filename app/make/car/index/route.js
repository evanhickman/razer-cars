import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('make.car').id;

    return fetch(`${config.apiUrl}/makes/${id}`)
      .then(r => r.json());
  }
});
