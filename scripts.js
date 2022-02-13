var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0,0,80,30); 
ctx.fillStyle = "red";
ctx.fillRect(38,34,108,112);

ctx.fillStyle = "red";
ctx.fillRect(225,176,26,77);
ctx.fillStyle = "blue";
ctx.fillRect(145,176,86,56);

 
ctx.fillStyle = "yellow";
ctx.fillRect(0,176,38,76);
ctx.globalCompositeOperation='source-over';
ctx.fillStyle = "black";
ctx.fillRect(33,30,6,205); //firth V //
ctx.fillStyle = "black";
ctx.fillRect(60,15,6,20); 
ctx.fillStyle = "black";
ctx.fillRect(10,176,250,6); //Linea negra BaseYellow // 
ctx.fillStyle = "black";
ctx.fillRect(37,145,56,62);//CuadradoNegroY//
ctx.fillStyle = "black";
ctx.fillRect(90,210,54,20);
ctx.fillStyle = "black";
ctx.fillRect(40,145,188,6);
ctx.fillStyle = "black";
ctx.fillRect(38,200,50,6);
ctx.fillStyle = "black";
ctx.fillRect(37,207,108,6); //MiddleLineBlue
ctx.fillStyle = "black";
ctx.fillRect(10,30,220,6) //Firts Line  topup//
ctx.fillStyle = "black";
ctx.fillRect(17,80,18,6); //Middle Line//  
ctx.fill();


ctx.fillStyle = "black";
ctx.fillRect(0,0,0,0);
ctx.fillStyle = "yellow";
ctx.fillRect(144,0,87,33);
ctx.fillStyle = "yellow";
ctx.fillRect(144,36,88,50);
ctx.globalCompositeOperation='source-over';
ctx.fillStyle = "black";
ctx.fillRect(144,7,6,222);
ctx.fillStyle = "black";
ctx.fillRect(225,10,6,233); 
ctx.fillStyle = "black";
ctx.fillRect(90,148,6,93); //MiddleRW
ctx.fillStyle = "black";
ctx.fillRect(146,80,80,6); //topMiddlewy
ctx.fillStyle = "black";
ctx.fillRect(182,80,6,70);//MiddleWy
ctx.fillStyle = "black";
ctx.fillRect(95,228,132,6);

ctx.fill();

ctx.fillstyle = "black";
ctx.fillRect(40,138,192,); //LineBaseRed
ctx.fillStyle = "black";
ctx.fillRect(40,17,104,30); //LineBaseWR// 

ctx.fillStyle = "red";
ctx.fillRect(0,0,20,20);
ctx.globalCompositeOperation='source-over';
ctx.fill();
