import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('make', { path: '/makes' }, function() {
    this.route('new');
    this.route('car', { path: '/:id' }, function() {});
  });
});

export default Router;
