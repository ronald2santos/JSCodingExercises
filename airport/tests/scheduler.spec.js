import Scheduler  from '../lib/scheduler'
const expect = require('chai').expect

describe('Class Scheduler Tests', () =>{

    describe('scheduleAt()', () => {

        it("should return false if there's less than 20min between one take off and another", () => {
           let schedule = new Scheduler(20)
           schedule.scheduleAt(new Date(1537902900 * 1000)) // 09/25/2018 @ 7:15pm
           expect(schedule.scheduleAt(new Date(1537904040 * 1000))).to.equal(false) // 09/25/2018 @ 7:34pm
        })

        it("should return true if there's more than 20min between flights", () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902900 * 1000)) // 09/25/2018 @ 7:15pm
            expect(schedule.scheduleAt(new Date(1537904198 * 1000))).to.equal(true) // 09/25/2018 @ 7:36pm
        })

        it('should save the date in the flights array' , () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902900 * 1000)) // 09/25/2018 @ 7:15pm
            expect(schedule.flights[0].time).to.be.a('Date')
        })
        
    });

    describe('schedule()', () => {

        it('should order the array', () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902900 * 1000)) // 09/25/2018 @ 7:15pm
            schedule.scheduleAt(new Date(1537904198 * 1000)) // 09/25/2018 @ 7:36pm
            schedule.scheduleAt(new Date(1506370560 * 1000)) // 09/25/2017 @ 8:16pm
            schedule.schedule()
            expect(schedule.flights[0].time).to.be.below(schedule.flights[1].time)
            expect(schedule.flights[1].time).to.be.below(schedule.flights[2].time)
        })


        it('should return a date with more than 20min of space between flights', () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902240 * 1000)) // 09/25/2018 @ 7:04pm
            schedule.scheduleAt(new Date(1537904760 * 1000)) // 09/25/2018 @ 7:46pm
            schedule.scheduleAt(new Date(1537906560 * 1000)) // 09/25/2018 @ 8:16pm
            let time = schedule.schedule()
            expect(time.getTime()).to.be.above(schedule.flights[0].time.getTime())
            expect(time.getTime()).to.be.below(schedule.flights[1].time.getTime())
        })
    })

    describe('couldScheduleAt()', () => {
        it('should return false when gap is less than 20min', () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902240 * 1000)) // 09/25/2018 @ 7:04pm
            schedule.scheduleAt(new Date(1537904760 * 1000)) // 09/25/2018 @ 7:46pm
            expect(schedule.couldScheduleAt(new Date(1537903200 * 1000))).to.equal(false) // 09/25/2018 @ 7:20pm
            expect(schedule.couldScheduleAt(new Date(1537903500 * 1000))).to.equal(true) // 09/25/2018 @ 7:25pm

        })
    })

    describe('unscheduleAt()', () => {
        it("should return false when the time given isn't saved in the array" , () => {
            let schedule = new Scheduler(20)
            expect(schedule.unscheduleAt(new Date(1537902240 * 1000))).to.equal(false) // 09/25/2018 @ 7:04pm
        })

        it("should return true when the flight has been succesfully unscheduled" , () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902240 * 1000))
            expect(schedule.unscheduleAt(new Date(1537902240 * 1000))).to.equal(true) // 09/25/2018 @ 7:04pm
        })

        it("should erase the object flight of the array" , () => {
            let schedule = new Scheduler(20)
            schedule.scheduleAt(new Date(1537902240 * 1000))
            expect(schedule.flights).to.not.be.empty
            schedule.unscheduleAt(new Date(1537902240 * 1000)) // 09/25/2018 @ 7:04pm
            expect(schedule.flights).to.be.empty
        })

        
    })
})