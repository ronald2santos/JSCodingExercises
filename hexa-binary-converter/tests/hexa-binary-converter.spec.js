import { binToHex , hexToBin }  from '../lib/hexa-binary-converter'
import { bin ,  hex }           from '../index'
const expect = require('chai').expect


describe('Hexa Binary Converter Tests', () =>{

    describe('Hex to Bin Tests', () => {

        it('should expect an input value of type String', () => {
            expect(hex).to.be.a('string');
        })

        it('should accept string values with white spaces', () => {
            expect(hexToBin('A D E F 5 4')).to.match(/^[01]+$/);
        })

        it('should accept string values with 0x prefix', () => {
            expect(hexToBin(' 0x A D E F 5 4')).to.match(/^[01]+$/);
        })

        it('should return a Binary Value', () => {
            
           expect(hexToBin(hex)).to.match(/^[01]+$/);
        })
    });

    describe('Bin to Hex Tests', () => {

        it('should expect an input value of type String', () => {
            expect(bin).to.be.a('string');
        })

        it('should accept string values with white spaces', () => {
            expect(binToHex('0 10 1 0 0 1 1')).to.match(/(0x)?[0-9a-f]+/i);
        })

        it('should return a Hexadecimal Value', () => {
            
           expect(binToHex(bin)).to.match(/(0x)?[0-9a-f]+/i);
        })
    });
});