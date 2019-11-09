/*
var pp = 0;
function showMore(){
  if (!pp){
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("myButton").style.display = "les mindre";
    pp = 1;
  }
  else{
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("myButton").style.display = "les mer";
    pp = 0;
  }
}*/


function showMore(){
  var text = document.getElementById("more");
  var btnText = document.getElementById("myButton");

  console.log("HEII")

  if (text.style.display === "none"){
    text.style.display = "none";
    btnText.innerHTML = "Les mindre";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
  }
}



/*function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}*/