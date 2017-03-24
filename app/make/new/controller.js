import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
  },

  actions: {
    save() {
      const make = this.store.createRecord('brand', this.formValues);
      make.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('make.index');
      });
    },
  }
});
