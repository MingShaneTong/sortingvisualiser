var itemList = [];
var items = 100;
var radixBase = 10;
var algo;
var aps = 60;

/**
	creates a list of numbers representing the height of the rectangle
*/
function createList(){
	itemList = [];
	displayList = [];
	animations = [];
	stop = false;

	// add random numbers to array 
	for(var i = 0; i < items; i++){
		var rand = Math.floor((Math.random()*(height-1)) + 1);
		itemList.push(rand);
		displayList.push(rand);
	}

	runSort();
}

/** Change Algorithm with Dropdown Menu */
function onDropdown(value){
	algo = value;
	// change dropdown label
	$("#navbarDropdown").text(value+" sort");
	runSort();
}

$(".dropdown button").click(function(){ onDropdown(this.value); });

/**
 * changes the label and items variable
 */
function onItemSlider(value){
	items=value;
	$("#items").text(value + " Items ");
}

/**
 * changes the label and radix base variable
 */
function onRadixSlider(value){
	radixBase=value;
	$("#radix").text("Radix Base " + value);
}

/**
 * changes the frame rate
 */
function onAPSSlider(value){
	aps = value;
}



/** Merge Sort */
function callMergeSort(itemList){
	mergeSort(0, itemList.length-1);
}

/** Quick Sort */
function callQuickSort(itemList){
	quickSort(itemList, 0, itemList.length-1);
}


/** Set to pause, sorts the list and creates animations */
function runSort(){
	stop = true;
	switch(algo){
		case "merge":
			callMergeSort(itemList);
			break;
		case "bubble":
			bubbleSort(itemList);
			break;
		case "insertion":
			insertionSort(itemList);
			break;
		case "quick":
			callQuickSort(itemList);
			break;
		case "selection":
			selectionSort(itemList);
			break;
		case "radix":
			radixSort(itemList, radixBase);
			break;
	}
}


/** swaps the array and adds animation */
function swap(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

	var action = new Action("swap");
	action.swap(i, j);
	animations.push(action);
}