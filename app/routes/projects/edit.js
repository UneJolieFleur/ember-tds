import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findRecord('project');
  },

  actions:{
    editProject(data){
      data.save();
      this.transitionTo("projects");
    }
  }
});
