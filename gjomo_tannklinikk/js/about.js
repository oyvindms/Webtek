var txtG = document.getElementById("moreG");
var txtJ = document.getElementById("moreJ");
var txtO = document.getElementById("moreO");
var txtM = document.getElementById("moreM");
var txtF = document.getElementById("moreF");


function showMoreG(){
  var text = document.getElementById("moreG");
  var btnText = document.getElementById("myButton");

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
    txtJ.style.display = "none"
    txtO.style.display = "none"
    txtM.style.display = "none"
    txtF.style.display = "none"
  }
}

function showMoreJ(){
  var text = document.getElementById("moreJ");
  var btnText = document.getElementById("myButtonJ");

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
    txtG.style.display = "none"
    txtO.style.display = "none"
    txtM.style.display = "none"
    txtF.style.display = "none"
  }
}

function showMoreO(){
  var text = document.getElementById("moreO");
  var btnText = document.getElementById("myButtonO");

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
    txtG.style.display = "none"
    txtJ.style.display = "none"
    txtM.style.display = "none"
    txtF.style.display = "none"
  }
}

function showMoreM(){
  var text = document.getElementById("moreM");
  var btnText = document.getElementById("myButtonM");

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
    txtG.style.display = "none"
    txtJ.style.display = "none"
    txtO.style.display = "none"
    txtF.style.display = "none"
  }
}

function showMoreF(){
  var text = document.getElementById("moreF");
  var btnText = document.getElementById("myButtonF");

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
    txtG.style.display = "none"
    txtJ.style.display = "none"
    txtO.style.display = "none"
    txtM.style.display = "none"
  }
}
