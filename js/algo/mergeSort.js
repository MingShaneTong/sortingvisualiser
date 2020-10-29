/**
  sort the lists by sub grouping them
*/
function mergeSort(startIndex, endIndex){
    // sort the list halfs then merge
    if(startIndex<endIndex && (endIndex-startIndex)>=1){
        var mid = Math.floor((endIndex + startIndex)/2);
        mergeSort(startIndex, mid);
        mergeSort(mid+1, endIndex);

        merge(startIndex, mid, endIndex);
    } 
}


/**
  merge the sorted lists so that the returned list is sorted
*/
function merge(startIndex, midIndex, endIndex){
	var sortedArray = [];

    var leftIndex = startIndex;
    var rightIndex = midIndex+1;

    while(leftIndex<=midIndex && rightIndex<=endIndex){
        if(itemList[leftIndex]<=itemList[rightIndex]){
            // the next smallest item is from b
            sortedArray.push(itemList[leftIndex]);
            leftIndex++;
        } else {
            // the next smallest item is from a
            sortedArray.push(itemList[rightIndex]);
            rightIndex++;
        }
    }

   	// one of the list has no more items
   	// add the rest from the other
    while(leftIndex<=midIndex){
        sortedArray.push(itemList[leftIndex]);
        leftIndex++;
    }
    
    while(rightIndex<=endIndex){
        sortedArray.push(itemList[rightIndex]);
        rightIndex++;
    }
   
   	var i = 0;
    var j = startIndex;
    // Setting sorted array to original one
    while(i < sortedArray.length){
        var action = new Action("replace");
        action.replace(j, sortedArray[i]);
        animations.push(action);
        itemList[j] = sortedArray[i];
        i++;
        j++;
    }
}