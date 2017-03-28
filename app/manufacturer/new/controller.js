import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
  },

  actions: {
    save() {
      const manufacturer = this.store.createRecord('brand', this.formValues);
      manufacturer.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer.index');
      });
    },
  }
});
