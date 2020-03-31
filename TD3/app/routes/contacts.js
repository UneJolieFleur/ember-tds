import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

let Contacts=EmberObject.extend({
  datas:null,
  contacts:computed('datas.@each.isDeleted',function(){
    return this.datas.filter((contact)=>!contact.get('isDeleted'));
  }),
  deleteds:computed('datas.@each.isDeleted',function(){
    return this.datas.filter((contact)=>contact.get('isDeleted'));
  }),
  deletedsCount:computed('datas.@each.isDeleted',function(){
    return this.get('deleteds').length;
  })
});

export default Route.extend({
  model(){
      return Contacts.create({
        datas: this.store.findAll('contact')
      });
  },
  actions: {
    delete(contact){
      contact.deleteRecord();
    },
    cancelDeletion(deleteds){
      deleteds.forEach((item)=>{item.rollbackAttributes();});
    }
  }
});
