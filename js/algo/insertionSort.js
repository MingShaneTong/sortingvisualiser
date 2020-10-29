/** Insertion Sort */
function insertionSort(itemList){
	// for each item in list, check if needs swap with behind
	for(var i = 1; i < itemList.length; i++){
		var inserted = false;
		var j = i-1;
		while(!inserted && j >= 0){
			// check values and swap if needed
			if(itemList[j] > itemList[j+1]){
				// swap is needed
				swap(itemList, j, j+1);
			} else {
				// no swap needed, in right spot
				animations.push(new Action("compare"));
				inserted = true;
			}
			j--;
		}
	}
}