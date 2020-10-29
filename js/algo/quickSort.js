/**
 *  a recursive function that divides the values along pivots
 * the 2 sides of the pivot are sorted again
 */
function quickSort(arr, start, end){
    if(start >= end){
        return;
    } 

    var index = partition(arr, start, end);
    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end);
}


function partition(arr, start, end){
    // stores the index that divides the small and big items
    var pivotIndex = start;
    var pivotValue = arr[end];

    // loop the part of the list
    for(var i = start; i < end; i++){
        if(arr[i] < pivotValue){
            // put the value on the left of pivot and move pivot to the right
            swap(arr, i, pivotIndex);
            pivotIndex++;
        } else {
            // compare
            animations.push(new Action("compare"));
        }
    }

    swap(arr, pivotIndex, end);
    return pivotIndex;
}