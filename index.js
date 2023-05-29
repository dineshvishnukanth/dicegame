var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);
var randomImg1="dice"+randomNumber1+".png";
var randomImg2="dice"+randomNumber2+".png"
var path1="./images/"+randomImg1;
var path2="./images/"+randomImg2;
document.querySelector(".img1").setAttribute("src",path1);
document.querySelector(".img2").setAttribute("src",path2);
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent="PLAYER 1 WINS!!"

}
else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").textContent="PLAYER 2 WINS!!"

}
else{
    document.querySelector(".container h1").textContent="IT'S A DRAW!"
}
