import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save( note ){ // sachant que mon modele retourne une note je la recupere
      if ( note.get('content') != null ){
        alert('Fausse sauvegarde :' +note.get('content'));
      }
    },
    reset( note ){
      note.set('content', "");
    }
  }
});
