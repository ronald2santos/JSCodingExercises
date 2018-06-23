import fazzBizzBarr  from '../lib/fazz-bizz-barr'
import sinon         from 'sinon'
const expect = require('chai').expect

//Using Sinonjs libray to assert console.log output 
//(necessary for testing the fazzBizzBarr's function output 
//as it is implemented in fazz-bizz-barr.js)
let sandbox = null;

beforeEach(function() {
  sandbox = sinon.createSandbox();
  sandbox.stub(console, 'log');
});

//Restore value after each test function call
afterEach(function() {
  sandbox.restore();
});

//Check marks and name of tests don't display when passing 
//(it may be due to a conflict between sinon and mocha), 
//haven't figured out how to fix this without breaking the tests. 
//Although, the name of the tests are displayed if they fail.

describe('Fazz Bizz Barr Tests', () =>{

    it('should return 1 for 1', () => {
          // call the function that needs to be tested
          fazzBizzBarr(1,1,3,5,7)
          //verify expected result is outputted to console.log 
          let result = console.log.calledWith('1');
          expect(result).to.equal(true);
    })

    it('should return Fazz for multiples of 3', () => {

        fazzBizzBarr(3,3)
        expect(console.log.calledWith('Fazz ')).to.equal(true);

        fazzBizzBarr(6,6)
        expect(console.log.calledWith('Fazz ')).to.equal(true);

        fazzBizzBarr(9,9)
        expect(console.log.calledWith('Fazz ')).to.equal(true);

    })

    it('should return Bizz for multiples of 5', () => {

        fazzBizzBarr(5,5)
        expect(console.log.calledWith('Bizz ')).to.equal(true);

        fazzBizzBarr(10,10)
        expect(console.log.calledWith('Bizz ')).to.equal(true);

        fazzBizzBarr(20,20)
        expect(console.log.calledWith('Bizz ')).to.equal(true);
    })

    it('should return Barr for multiples of 7', () => {
        fazzBizzBarr(7,7)
        expect(console.log.calledWith('Barr')).to.equal(true);

        fazzBizzBarr(14,14)
        expect(console.log.calledWith('Barr')).to.equal(true);

        fazzBizzBarr(28,28)
        expect(console.log.calledWith('Barr')).to.equal(true);
    })

    it('should return Fazz Bizz for multiples of 3 and 5', () => {
        fazzBizzBarr(15,15)
        expect(console.log.calledWith('Fazz Bizz ')).to.equal(true);

        fazzBizzBarr(30,30)
        expect(console.log.calledWith('Fazz Bizz ')).to.equal(true);

        fazzBizzBarr(45,45)
        expect(console.log.calledWith('Fazz Bizz ')).to.equal(true);
    })

    it('should return Fazz Barr for multiples of 3 and 7', () => {
        fazzBizzBarr(21,21)
        expect(console.log.calledWith('Fazz Barr')).to.equal(true);

        fazzBizzBarr(42,42)
        expect(console.log.calledWith('Fazz Barr')).to.equal(true);

        fazzBizzBarr(63,63)
        expect(console.log.calledWith('Fazz Barr')).to.equal(true);
    })

    it('should return Bizz Barr for multiples of 5 and 7', () => {
        fazzBizzBarr(35,35)
        expect(console.log.calledWith('Bizz Barr')).to.equal(true);

        fazzBizzBarr(70,70)
        expect(console.log.calledWith('Bizz Barr')).to.equal(true);

        fazzBizzBarr(105,105)
        expect(console.log.calledWith('Bizz Barr')).to.equal(true);
    })

});