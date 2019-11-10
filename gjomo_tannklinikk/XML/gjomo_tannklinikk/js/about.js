var txtG = document.getElementById("moreG");
var txtJ = document.getElementById("moreJ");
var txtO = document.getElementById("moreO");
var txtM = document.getElementById("moreM");
var txtF = document.getElementById("moreF");
var btnTextG = document.getElementById("myButtonG")
var btnTextJ = document.getElementById("myButtonJ")
var btnTextO = document.getElementById("myButtonO")
var btnTextM = document.getElementById("myButtonM")
var btnTextF = document.getElementById("myButtonF")


/*  Lager 5 funksjoner til hver "Les mer"-knapp som åpner infotekstene til personenen, 
    samtidig som den lukker en annen infotekst som eventuelt er åpen.  */

function showMoreG(){
  var text = document.getElementById("moreG");
  var btnText = document.getElementById("myButtonG");

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
    txtJ.style.display = "none";
    txtO.style.display = "none";
    txtM.style.display = "none";
    txtF.style.display = "none";
    btnTextJ.innerHTML = "Les mer";
    btnTextO.innerHTML = "Les mer";
    btnTextM.innerHTML = "Les mer";
    btnTextF.innerHTML = "Les mer";
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
    txtG.style.display = "none";
    txtO.style.display = "none";
    txtM.style.display = "none";
    txtF.style.display = "none";
    btnTextG.innerHTML = "Les mer";
    btnTextO.innerHTML = "Les mer";
    btnTextM.innerHTML = "Les mer";
    btnTextF.innerHTML = "Les mer";
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
    txtG.style.display = "none";
    txtJ.style.display = "none";
    txtM.style.display = "none";
    txtF.style.display = "none";
    btnTextG.innerHTML = "Les mer";
    btnTextJ.innerHTML = "Les mer";
    btnTextM.innerHTML = "Les mer";
    btnTextF.innerHTML = "Les mer";
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
    txtG.style.display = "none";
    txtJ.style.display = "none";
    txtO.style.display = "none";
    txtF.style.display = "none";
    btnTextG.innerHTML = "Les mer";
    btnTextJ.innerHTML = "Les mer";
    btnTextO.innerHTML = "Les mer";
    btnTextF.innerHTML = "Les mer";
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
    txtG.style.display = "none";
    txtJ.style.display = "none";
    txtO.style.display = "none";
    txtM.style.display = "none";
    btnTextG.innerHTML = "Les mer";
    btnTextJ.innerHTML = "Les mer";
    btnTextM.innerHTML = "Les mer";
    btnTextO.innerHTML = "Les mer";
  }
}
