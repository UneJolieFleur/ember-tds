import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {nom:"Alain Provist",age:28,details:"passe tjs quand tu t'y attends pas!" },
      {nom:"Alexis Heslouin",age:19,details:"Embete le monde !" },
      {nom:"Larry",age:40,details:"Spirit of Memphis" }
    ];
  }
});
