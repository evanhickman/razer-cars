import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const id = params.id;

    return this.store.findRecord('brand', id);
  }
});
