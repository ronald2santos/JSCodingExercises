//Hexagesimal and Binary Converter

import { binToHex , hexToBin }  from './lib/hexa-binary-converter';

var bin = '010110001110010010101001';
var hex = 'ADC452357928D'

console.log(binToHex(bin));

console.log(parseInt(bin, 2).toString(16));

console.log(hexToBin(hex));

console.log(parseInt(hex, 16).toString(2));

export {bin , hex} 
