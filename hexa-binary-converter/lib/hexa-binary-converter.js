// With vanillajs methods, this convertion could be implemented as 
// parseInt(bin, 2).toString(16), (parseInt starts roundind numbers greater than 53 bits)
// assuming the binary number would be passed as a string

function binToHex(bin){

    // Lookup map for easier conversion. 
    let map = {
        "0000" : "0", "0001" : "1", "0010" : "2", "0011" : "3",
        "0100" : "4", "0101" : "5", "0110" : "6", "0111" : "7",
        "1000" : "8", "1001" : "9", "1010" : "A", "1011" : "B",
        "1100" : "C", "1101" : "D", "1110" : "E", "1111" : "F",
    };

    //Getting rid of any white spaces in the source string
    let binString = bin.replace(/\s/g,'')

    //Initialize return variable
    let hexString = "";

    // For loop from right to left, dividing the  
    // binary string in groups of 4 digits,
    // comparing them with the values of the map and
    // adding them in the return variable.
    for (var i = binString.length; i >= 4; i -= 4){
        if(i - 4 < binString.length){hexString = map[binString.substr(i - 4, 4)] + hexString};
    }

    // if statement, to evaluate if the remainder of the binary number 
    // is not equal to 0 and continue with the last digits remainding.

        if(i !== 0){
            let remainder = binString.substr(0,i);
            
            while (remainder.length < 4){
                remainder = "0" + remainder;
            }

            hexString = map[remainder] + hexString;
        }

    //Getting rid of the leading 0 used in the remainder accumulator
        return hexString.replace("0","");

};

// With vanillajs methods, this action could be performed as 
// parseInt(hex, 16).toString(2),
// assuming the hexagesimal number would be passed as a string and no spaces
// (this method works only with 53 bits or less hex numbers,
// or the parseInt() starts rounding the convertion)

function hexToBin(hex){
    
    //lookup map
    let map = {
        "0" : "0000", "1" : "0001", "2" : "0010", "3" : "0011", 
        "4" : "0100", "5" : "0101", "6" : "0110", "7" : "0111",
        "8" : "1000", "9" : "1001", "A" : "1010", "B" : "1011",
        "C" : "1100", "D" : "1101", "E" : "1110", "F" : "1111"
    };

    //Getting rid of any white spaces in the source string
    let hexNoSpaces = hex.replace(/\s/g,'').toUpperCase();
    //Getting rid of 0x hex prefix if it has it   
    let hexString = hexNoSpaces.replace(/^0X/,'')

    //return variable
    let binString = "";

    //Cycle through every hexadecimal character at a time and replacing it 
    // with the corresponding binary value
    for(let i = 0; i < hexString.length; i++){
        binString += map[hexString[i]];
    }
    
    return binString;
}

export { binToHex, hexToBin };
