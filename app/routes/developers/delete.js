import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findRecord('developer');
  },
  actions:{
    DeleteDeveloper(data){
      data.deleteRecord();
      data.save();
      this.transitionTo("developers")
    }
  }
});
