import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        addDev:function(developer){
            developer.save();
            this.transitionToRoute("developers");
        }
    }
});
