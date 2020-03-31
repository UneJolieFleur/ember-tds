import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      project: EmberObject.create(),
      developers: this.get('store').findAll('developer')
    })
  },
  actions: {
    addProject(project) {
      project= this.get('store').createRecord('project', project);
      project.save();
      this.transitionTo('projects');
    }
  }
});
