/**
  sort the lists by swapping the largesr and bringing it to the start
*/
function bubbleSort(itemList){
	// for each item to be pushed to the end
	for(var i = 0; i < itemList.length; i++) {
		// for each swap to occur
		for(var j = 1; j < itemList.length-i; j++){
			animations.push(new Action("compare"));
			// if a swap needs to occur
			if(itemList[j-1] > itemList[j]){
				swap(itemList, j-1, j);
			} 
		}
	}
}