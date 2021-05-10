var r_num=Math.floor(Math.random()*6)+1;

var img="dice"+r_num+".png";
var img1="images/"+img;

var first=document.querySelectorAll("img")[0];
first.setAttribute("src",img1);


var num=Math.floor(Math.random()*6)+1;
var abc="dice"+num+".png";
var xyz="images/"+abc;

var sec=document.querySelectorAll("img")[1];
sec.setAttribute("src",xyz);


if(r_num > num){
  var cha=document.querySelector("h1");
   cha.innerHTML="Player 1 wins";
}
else if(r_num < num){
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
