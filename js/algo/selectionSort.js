/**
 *  Selection sort, divides sorted and unsorted
 */
function selectionSort(itemList){
	// loops the list to find the next smallest
	for(var i = 0; i < itemList.length; i++){
		// find the smallest in the list
		var smallIndex = i;
		for(var j = i+1; j < itemList.length; j++){
			animations.push(new Action("compare"));
			if(itemList[smallIndex] > itemList[j]){
				// new small
				smallIndex = j;
			}
		}

		// swap i with smallindex
		swap(itemList, i, smallIndex);
	}
}