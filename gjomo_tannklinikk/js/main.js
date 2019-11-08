// Get modal element
var modal = document.getElementById("myModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementById("closeBtn");

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", outsideClick);

//Function to open modal
function openModal(){
	console.log("Åpne modal kjører")
	modal.style.display = "block";
}
 
//Function to close modal
function closeModal(){
	console.log("Lukke modal kjører")
	modal.style.display = "none";
}

//Function to close modal if outside click
function outsideClick(e){
	console.log("utenfor klikk kjører")
	if(e.target == modal){
	modal.style.display = "none";
	}
}
 