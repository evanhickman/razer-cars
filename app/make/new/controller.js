import Ember from 'ember';
import config from 'razer-cars/config/environment';
const apiUrl = 'https://razerapi.herokuapp.com/evanh/basic/brands';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
    cars: '',
  },

  actions: {
    save() {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
        body: JSON.stringify(this.formValues),
      }).then(r => r.json())
        .then(() => {
          // Redirect
          this.transitionToRoute('makes');
        })
    },
  }
});
