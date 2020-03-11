import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      nom:"Laura",
      age:20,
      details:" Details sur Laura"
    };
  }
});
