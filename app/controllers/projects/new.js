import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        addProject:function(project){
            project.save();
        }
    }
});
