var animations = [];
var displayList = [];
var stop = false;
var playImg;
var pauseImg;
var iconCount;		// the frames remaining for the play/pause icon to be on screen

function setup() {
	createCanvas(windowWidth-1, windowHeight-110);
	playImg = loadImage('img/play.png');
	pauseImg = loadImage('img/pause.png');
	strokeWeight(0);

	$("canvas").click(function(){ stopToggle(); });
}

function windowResized() {
	resizeCanvas(windowWidth-1, windowHeight-110);
}

function draw(){
	background(255);
	fill(color("blue"));

	// check animations
	if(!stop && animations.length > 0){
		var a = animations[0];
		switch(a.action){
			case "swap":
				// swap numbers
				var temp = displayList[a.i1];
				displayList[a.i1] = displayList[a.i2];
				displayList[a.i2] = temp;
				break;
			case "replace":
				// replace the numbers
				displayList[a.i] = a.value;
				break;

		}
		animations.shift();
	}

	// draws a rectangle for each item in the list
	var rectWidth = windowWidth/displayList.length;
	for(var i in displayList){
		// draw the rectangle
		var x = rectWidth*i;
		rect(x, 0, rectWidth, displayList[i]);
	}

	// add play or pause icon
	if(iconCount > 0){
		var img = stop?pauseImg:playImg;
		var x = windowWidth/2;
		var y = windowHeight/2-img.height;
		image(img, x, y);
		iconCount--;
	}
}

function keyPressed(){
	// if it is the space bar then toggle stop
	if(key == " ") stopToggle();
} 

function stopToggle(){
	stop = !stop;
	iconCount = 20;
}