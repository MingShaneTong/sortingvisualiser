class Action {
	constructor(action){
		this.action = action;
	}

	swap(i1, i2){
		this.i1 = i1;
		this.i2 = i2;
	}

	replace(i, value){
		this.i = i;
		this.value = value;
	}
}