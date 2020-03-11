import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object'

//objet javascript
const Note = EmberObject.extend({
  content :'', //nom du meùbre : valeur du membre
  MAX: 100,
  info: null,
  size: computed('content', function(){
    this.set('info',null);
    return this.get('content').length;
  }),
  reste: computed('size', function(){ //quand content est modifié alors on calcul max - size
      return this.get('MAX') - this.get('size');
  }),
  warning: computed('content',  function(){
    if ( this.get('MAX') - this.get('size') <= 10 )
      return " alert alert-danger ";
    if ( this.get('MAX') - this.get('size') >=50 ){
      return " alert alert-primary ";
    }else{
      return " alert alert-warning ";
    }
  })
});

export default Route.extend({
  model(){
    return Note.create();
  }
});
