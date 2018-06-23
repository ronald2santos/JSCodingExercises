//A simple take on the FazzBizzBarr function with default values, 
//assuming all positive integers starting from "start" 1 to N "end"
//To return the output for only one value use start = end = N
//Default fazz bizz and barr values are 3, 5 and 7 as requested,
// but are not hardcoded, can be modified.


export default function fazzBizzBarr(start=1, end=100, fazzNumber=3, bizzNumber=5, barrNumber=7){
	var output;
	for(let i = start; i <= end; i++){
		output = '';
		if(i % fazzNumber === 0){
			output +='Fazz ';
		} 
		if(i % bizzNumber === 0){
			output += 'Bizz ';
        } 
        if(i % barrNumber === 0){
			output += 'Barr';
		} 
		if(i % fazzNumber !== 0 && i % bizzNumber !== 0 && i % barrNumber !== 0) {
			output += i;
		}
		console.log(output);
	};
};



