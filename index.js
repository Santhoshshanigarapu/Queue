const asyncLib = require('async');
var q= asyncLib.priorityQueue(function(task, callback){
    console.log('Hello' + task.name);
    callback();
    },1);

    q.push({name:'radha'}, 3, function(err){
        console.log('its time for girls');
    });
    q.push({name:'harika'}, 2, function(err){
        console.log('its time for girls');
    });
    q.push({ name: 'shekar' }, 1, function(err) {
        console.log('It\'s time for boys');
      });
      
      q.push({ name: 'nayak' }, 1, function(err) {
        console.log('It\'s time for boys');
      });
      
      q.push({ name: 'yash' }, 1, function(err) {
        console.log('It\'s time for boys');
      });
