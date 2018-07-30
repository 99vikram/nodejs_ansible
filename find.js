var cron = require('cron');
 
var job1 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    console.log('job 1 ticked');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
 
var job2 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    console.log('job 2 ticked');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
 
console.log('job1 status', job1.running); // job1 status undefined
console.log('job2 status', job2.running); // job2 status undefined
 
job1.start(); // job 1 started
 
console.log('job1 status', job1.running); // job1 status true
console.log('job2 status', job2.running); // job2 status undefined
