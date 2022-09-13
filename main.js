canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpeg", "nasa_image_2.jpeg", "nasa_image_3.jpeg", "nasa_image_4.jpeg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

//Define el ancho y alto de la imagen del explorador.

rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array [random_number];
console.log("background_image =" + background_image);

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
 function add(){
background_imgTag = new Image(); //Define la variable con una nueva imagen
background_imgTag.onload = uploadBackground; // Define una función para cargar esta variable
background_imgTag.src = background_image; // Carga la imagen

rover_imgTag = new Image(); //Define la variable con una nueva imagen
rover_imgTag.onload = uploadrover; // Define una función para cargar esta variable
rover_imgTag.src = rover_image; // Carga la imagen
 }

//Crea una función "uploadBackground()".
  function uploadBackground(){                           
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); //Dibuja la imagen de fondo
  }
//Crea una función "uploadrover()".
  function uploadrover(){
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); //Dibuja la imagen del explorador
  }

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed == '38'){
        up();
        console.log("arriba");
    }
     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
	if(keyPressed == '40'){
        down();
        console.log("abajo");
    }
    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
    if(keyPressed == '37'){
        left();
        console.log("izquierda");
    }
    if(keyPressed == '39'){
        right();
        console.log("derecha");
    }
}

function up(){
    if(rover_y >=0){
        rover_y = rover_y - 10;
        console.log("Cuando se presione la flecha arriba, x =" + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("Cuando se presione la flecha abajo, x =" + rover_x + " | y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
	if(rover_x >=0){
        rover_x = rover_x +10;
        console.log("Cuando se presione la flecha izquierda, x =" + rover_x + " | y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
	if(rover_x <=700){
        rover_x = rover_x - 10;
        console.log("Cuando se presione la flecha derecha, x =" + rover_x + " | y =" + rover_y);
        uploadBackground();
        uploadrover();
    }
}