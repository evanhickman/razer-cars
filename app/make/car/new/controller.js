import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    saveNewCar() {
      const car = this.store.createRecord('car', this.formValues);
      car.set('make', this.car);
      return car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('make.car.index');
      });
    },
  }
});
