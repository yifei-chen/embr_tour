import Ember from 'ember';

export default Ember.Controller.extend({
  init:function(){
    console.log('Controller');
    $.get('https://mrchen.pub/sms').then(function(datas){
      datas.forEach(function(data){
        this.model.push(this.store.createRecord('task',{
          name:'testName',
          date:'none'
        }));
      }.bind(this));
    }.bind(this));
  },
  actions: {
    addTask:function(){
      var test = this.get('test');
      alert(test);
    }
  }
});
