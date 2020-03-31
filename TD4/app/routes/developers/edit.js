import Route from '@ember/routing/route';

export default Route.extend
({
  model()
  {
    return this.get('store').findRecord('developer');
  },

  actions:
  {
    editDeveloper(data)
    {
      data.save();
      this.transitionTo("developers")
    }
  }
});
