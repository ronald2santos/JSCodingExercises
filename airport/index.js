import Scheduler  from './lib/scheduler'



//Initialize Schedule class with 20min timeFrame (10min before take off and 10min after)
var scheduler = new Scheduler(20);
///Multiply Epoch timestamp x 1000 to convert from seconds to miliseconds when giving date

// console.log('scheduleAt', scheduler.scheduleAt(new Date(1529169984 * 1000))); //06/16/2018 @ 5:26pm 
// console.log(scheduler.flights);
// console.log('scheduleAt', scheduler.scheduleAt(new Date(1537902900 * 1000))); //09/25/2018 @ 7:15pm
// console.log(scheduler.flights);
// console.log('scheduleAt', scheduler.scheduleAt(new Date(1572588366 * 1000))); //11/01/2019 @ 6:06am 
// console.log(scheduler.flights);
// console.log('scheduleAt', scheduler.scheduleAt(new Date(1537904138 * 1000))); //09/25/2018 @ 7:35pm
// console.log(scheduler.flights);
// console.log('schedule', scheduler.schedule());
// console.log(scheduler.flights);
// console.log('unschedule', scheduler.unscheduleAt(new Date(1537902900 * 1000))); //09/25/2018 @ 7:15pm))
// console.log(scheduler.flights);
// console.log('schedule', scheduler.schedule());
// console.log(scheduler.flights);
