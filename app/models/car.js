import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hp: DS.attr('string'),
  year: DS.attr('string'),
  price: DS.attr('string'),

  brand: DS.belongsTo(),
});
