var turn = 0;
var clicked = false;
var win = 2;
var socket;
var boxes =[];
function preload(){
	//fontVector = loadFont("./libraries/Vectorb.ttf");
}
function setup() {
	//socket = io.connect('http://localhost:3000');
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	noStroke();
	//noFill();
	fill(0);
	
	for(i = 0; i<3;i++){
		for(j = 0; j<3;j++){
			boxes.push(new xobox(100+110*j,100+110*i,3*i+j));
		}
	}
	
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
	for(i = 0;i<9;i++){
		boxes[i].clicked();
	}
	if(win !=2){
		for(i = 0;i<9;i++){
			boxes[i].valueSet(2);
		}
		win = 2;
		turn = 0;
	}
	
}
	
function draw() {
	background(255);
	rect(200,100,10,320);
	rect(310,100,10,320);
	rect(100,200,320,10);
	rect(100,310,320,10);
	for(i = 0;i<9;i++){
		boxes[i].hover();
		boxes[i].show();
	}
	if (clicked){//test for win
		for (i = 0;i<3;i++){
			if (abs(boxes[3*i].winTest()+boxes[3*i+1].winTest()+boxes[3*i+2].winTest())>2)
				win = boxes[3*i].value;
			if (abs(boxes[i].winTest()+boxes[i+3].winTest()+boxes[i+6].winTest())>2)
				win = boxes[i].value;
		}
		if(abs(boxes[0].winTest()+boxes[4].winTest()+boxes[8].winTest())>2)
			win = boxes[0].value;
		if(abs(boxes[2].winTest()+boxes[4].winTest()+boxes[6].winTest())>2)
			win = boxes[2].value;
		//console.log(boxes[0].winTest()+boxes[1].winTest()+boxes[2].winTest());
		clicked = false;
	}
	if (win == 0){
		textSize(50);
		text('X wins',180,60);
	}
	if (win == 1){
		textSize(50);
		text('O wins',180,60);
	}
	
}