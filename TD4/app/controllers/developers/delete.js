import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        deleteDev(developer){
            developer.deleteRecord();
            developer.save();
            this.transitionTo("developers");
        }
    }
});
