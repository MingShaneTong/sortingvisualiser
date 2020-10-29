/**
 * Radix Sort, Sorts the numbers based on each digit
 */
function radixSort(arr, base){
	// find highest number in list
	var max = highest(arr);
	var d = digits(max, base);

	// for each digit
	for(var i=1; i<=d; i++){
		var c = buckets(base);		// holds the numbers in digits
		// loop each number in list and add to cup with correct digit
		for(var j=0; j< arr.length; j++){
			var n = arr[j];
			c[getDigit(n, base, i)].push(n);
		}

		// push together and replace original list
		var count = 0;
		for(var k=0; k<c.length; k++){
			// for each item in the cup, replace in list
			for(var l=0; l<c[k].length; l++){
				arr[count] = c[k][l];
				var action = new Action("replace");
		        action.replace(count, c[k][l]);
		        animations.push(action);
		        count++;
			}
		}
	}
	
}

/**
 * creates a list of lists for each digit
 */
function buckets(b){
	var c = [];
	for(var i=0; i<b; i++){
		c.push([]);
	}
	return c;
}

/**
 * finds the digit from a number using the base
 */
function getDigit(n, b, d){
	return (n%Math.pow(b,d)-n%Math.pow(b,d-1))/Math.pow(b,d-1);
}

/**
 *  returns the highest value in the list
 */
function highest(arr){
	var max = 0;
	for(var i = 0; i < arr.length; i++){
		if(max < arr[i])  max = arr[i];
	}
	return max;
}

/**
 * returns the number of digits based on the base
 */
function digits(m, b){
	var i = 1;
	while(m > Math.pow(b, i)){
		i++;
	}
	return i;
}