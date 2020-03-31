import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
  },
  actions: {
    saveContact(contact,edited){
      contact=this.store.createRecord('contact',contact.copy);
      contact.save().then(
        ()=>{this.transitionTo('contacts');}
      );
    }
  }
});
