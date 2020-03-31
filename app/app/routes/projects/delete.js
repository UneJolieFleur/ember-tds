import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findRecord('project');
  },
  actions:{
    DeleteProject(data){
      data.deleteRecord();
      data.save();
      this.transitionTo("projects")
    }
  }
});
