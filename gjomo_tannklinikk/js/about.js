function showMore(){
  var text = document.getElementById("more");
  var btnText = document.getElementById("myButton");

  console.log("HEII")

  if (text.style.display === "inline"){
    text.style.display = "none";
    btnText.innerHTML = "Les mer";
  }
  else{
    text.style.display = "inline";
    btnText.innerHTML = "Les mindre";
  }
}
