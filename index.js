
var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+ randomNumber1 +".png";
var randomImageSource="images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);

var randomImagesSource2="images/"+"dice"+randomNumber2+".png";


var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesSource2);


if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Solapur Wins";
}
else if(randomNumber2>randomNumber1){
document.querySelector("h1").innerHTML="Nagpur Wins";
}
else{
	document.querySelector("h1").innerHTML="Draw!!!";
}