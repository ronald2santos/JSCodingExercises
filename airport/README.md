## Airport

Pretend we are operating a small airport with a single runway.  We need to develop a data structure to help scheduling airplanes to take off and land from this runway.  Each time a plane takes off or lands, it needs exclusive use of the runway starting 10 minutes before the scheduled runway use, and ending 10 minutes after the scheduled runway use (assume the actual take-off or landing is instantaneous).

Your task is to implement a scheduler with approximately the following API:

```javascript
class Scheduler {
 // returns true if there’s room to schedule at ‘time’
 CouldScheduleAt(Date time);

 // returns true if we successfully scheduled
 ScheduleAt(Date time);

 // Choose an available time to schedule at, and return that time
 Schedule();

 // returns true if we successfully unscheduled something
 UnscheduleAt(Date time);
}

```

Be sure that planes don’t have overlapping schedules.  If time permits, write a test for this.

To run the script use `npm run airport`, to run the tests use `npm run test-airport`
