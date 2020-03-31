import DS from 'ember-data';
const {Model} = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr(),
  dueDate: DS.attr(),
  owner: DS.belongsTo('developer'),
  stories: DS.hasMany('story')
});
