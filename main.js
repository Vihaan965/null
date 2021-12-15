canvas=document.getElementById("myCanvas");
ctx=getContext("2d")
car_width = 100 ; 
car_height = 100 ;
background_image = "parkingLot.jpg";
car_image = "car2.png";
car_x= 10;
car_y= 10;
function add() {
car_ImgTag= new Image();
car_ImgTag.onload=uploadcar;
car_ImgTag.src= car_image;

background_ImgTag= new Image();
background_ImgTag.onload=uploadbackground;
background_ImgTag.src= background_image;
}

function uploadbackground() {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar() {
	ctx.drawImage(car_ImgTag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

