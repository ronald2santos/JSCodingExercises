const uuidv4 = require ('uuid/v4');
//Used uuid npm package to generate a unique id for every flight scheduled.

// Note: I commented out the console logs with info of the process for a cleaner test display.
// If you know a easy way to hide them when the tests pass I would be really happy to know :).
// Didn't have time to dive deep into it.

export default class Scheduler {

    constructor(exclusiveTime) {
        this.flights = []; // Runway Queue
        this.timeFrame = exclusiveTime; // Minutes (could be changed from scheduled to scheduled)
    }

    // Returns true if there’s room to schedule at ‘time’
    couldScheduleAt(time) {
        var collisions = this.flights.filter((flight) => {
            // Time when the flight begins to have access to the runway
            let t1 = new Date((flight.time.getTime() - (this.timeFrame * 60 * 1000)));
            // Excusive time after take-off 
            let t2 = new Date((flight.time.getTime() + (this.timeFrame * 60 * 1000)));
            // Within timeFrame range 
            return t1 < time && time < t2; // Not enough time to schedule
        });
        // console.log(`couldSheduleAt ${time.toISOString()} ? : ${collisions.length === 0} \n Flight Overlaps: ${JSON.stringify(collisions)} \n`)
        return collisions.length === 0;
    };

    // Returns true if we successfully scheduled
    scheduleAt(time) {
        if (this.couldScheduleAt(time)) {
            this.flights.push({ id: uuidv4(), time: time });
            // console.log(`Flight succesfully scheduled at Date ${time.toISOString()} \n`)
            return true;
        } else {
            return false;
        }
    }

    // Choose an available time to schedule at, and return that time
    schedule() {
        var currentDate = new Date(); // Current time
        currentDate = currentDate.getTime();

        // Sort array in ascending order by time property
        this.flights.sort((a, b) => {
            if (a.time < b.time) { return -1 }
            else if (a.time == b.time) { return 0 }
            else { return 1 }
        });

        var empty = this.flights.findIndex((flight, index, array) => {
            // Try to find space within flight queue
            if (index < array.length - 1) {
                let t1 = array[index].time.getTime(); // Current element's time
                let t2 = array[index + 1].time.getTime(); // Next element's time
                // Higher than current date, and with a gap big enough
               return (currentDate <= t1) && ((t1 + (this.timeFrame * 60 * 1000)) <= t2)
            }
            return false;
        });

        // No empty space found, insert at end
        if (empty === -1) {
            let date = new Date(this.flights[this.flights.length - 1].time.getTime() + this.timeFrame * 60 * 1000);
            // this.flights.push({ id: uuidv4(), time: date });
            // console.log(`Free runway at ${date.toISOString()} , last in queue  \n`)
            return date;
        }
        // Found a space big enough, earliest available time after first scheduled flight
        else {
            let date = new Date(this.flights[empty].time.getTime() + this.timeFrame * 60 * 1000);
            // this.flights.push({ id: uuidv4(), time: date });
            // console.log(`Free runway at ${date.toISOString()}  \n`)
            return date;
        }
    }

    // returns true if we successfully unscheduled something
    unscheduleAt(time) {

        let index = this.flights.findIndex((flight) => {
            return flight.time.getTime() === time.getTime();
        });

        // Found the index for flight at that time
        if (index != -1) {
            this.flights.splice(index, 1);
            // console.log(`Flight at Date ${time.toISOString} succesfully removed \n`)
            return true;
        }
        else {
            // Couldn't find a flight at that time
            // console.log("Couldn't find flight scheduled at specified date \n")
            return false;
        }
    }
}
