initialColor = document.getElementById("box").style.backgroundColor;
initialOpacity = document.getElementById("box").style.opacity;
initialHeight = document.getElementById("box").style.height;
initialWidth = document.getElementById("box").style.width;
console.log(initialColor);


// Height and Width increase each time the button is pressed
height = 150;
width = 150;

document.getElementById("button1").addEventListener("click",function(){
    height+=10;
width+=10;
document.getElementById("box").style.height=height+"px";
document.getElementById("box").style.width=width+"px";

})
document.getElementById("button1_2").addEventListener("click",function(){
    height-=10;
    width-=10;
    document.getElementById("box").style.height=height+"px";
    document.getElementById("box").style.width=width+"px";

    })
//---------------------

colors=["blue", "red", "green", "orange", "black", "brown"];

document.getElementById("button2").addEventListener("click", function(){
   
    color = colors[Math.floor((Math.random()*6))]
    console.log(color);
    document.getElementById("box").style.backgroundColor = color;

})
boxOpacity = 1;

document.getElementById("button3").addEventListener("click",function(){
    boxOpacity-=.1;
    document.getElementById("box").style.opacity =boxOpacity; 

})
document.getElementById("button3_2").addEventListener("click",function(){
    boxOpacity+=.1;
    document.getElementById("box").style.opacity =boxOpacity; 

})

document.getElementById("button4").addEventListener("click",function(){

    document.getElementById("box").style.opacity = initialOpacity;
    document.getElementById("box").style.backgroundColor = initialColor;
    document.getElementById("box").style.width = initialWidth;
    document.getElementById("box").style.height = initialHeight;
    
})