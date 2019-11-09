//Fetches testimonial data from XML-document and runs the functions buildSlider() and Slider()
document.addEventListener('DOMContentLoaded', ()=>{
	//fetch the data as soon as the page has loaded
	let url = "XML/testimonials_data.xml";
	fetch(url)
	.then(response=>response.text())
	.then(data=>{
		let parser = new DOMParser();
		let testimonials = parser.parseFromString(data, "application/xml");
		buildSlider(testimonials);
		Slider();
	});
})

//Takes the data from testimonials_data.xml and appends it to index.html in a structured manner
function buildSlider(x){
	let t_container = document.getElementById('testimonials_container');
	let testimonials = x.getElementsByTagName('testimonial');
	for(let i=0; i<testimonials.length; i++){
		let t_q_init = document.createElement("div");
		t_q_init.classList.add("t_q_init");
		let p1 = document.createElement("p");
		let t_n_init = document.createElement("div");
		t_n_init.classList.add("t_n_init");
		let p2 = document.createElement("p");
		let quote = testimonials[i].childNodes[3].childNodes[0].nodeValue;
		let name = testimonials[i].childNodes[1].childNodes[0].nodeValue;
		p1.textContent = quote;
		p2.textContent = "- " + name;
		t_q_init.appendChild(p1);
		t_n_init.appendChild(p2);
		t_container.appendChild(t_q_init);
		t_container.appendChild(t_n_init);
	}
}

//sets variables used in Slider()
var slideIndex = 0;
var slides = document.getElementsByClassName("t_q_init");

//Function runs every 7 seconds, and based on the testimonial currently displayed, it adds class "slideOut" and "fadeOut" to these elements, class "slideIn" and "fadeIn" to the next elements, and removes said classes from the elements previously displayed
function Slider(){
		if(slideIndex == 0){
			slides[slideIndex].classList.add("slideIn");
			slides[slideIndex].nextElementSibling.classList.add("fadeIn");
		}
		else if(slideIndex == 1){
			slides[slideIndex-1].classList.replace("slideIn","slideOut");
			slides[slideIndex-1].nextElementSibling.classList.replace("fadeIn","fadeOut");
			slides[slideIndex].classList.add("slideIn");
			slides[slideIndex].nextElementSibling.classList.add("fadeIn");
		}
		else if(slideIndex == slides.length){
			slides[0].classList.add("slideIn");
			slides[0].nextElementSibling.classList.add("fadeIn");
			slides[slides.length-2].classList.remove("slideOut");
			slides[slides.length-2].nextElementSibling.classList.remove("fadeOut");
			slides[slides.length-1].classList.replace("slideIn","slideOut");
			slides[slides.length-1].nextElementSibling.classList.replace("fadeIn","fadeOut");
		}
		else if(slideIndex == slides.length+1){
			slides[0].classList.replace("slideIn","slideOut");
			slides[0].nextElementSibling.classList.replace("fadeIn","fadeOut");
			slides[1].classList.add("slideIn");
			slides[1].nextElementSibling.classList.add("fadeIn");
			slides[slides.length-1].classList.remove("slideOut");
			slides[slides.length-1].nextElementSibling.classList.remove("fadeOut");
		}
	
		else {
			slides[slideIndex-2].classList.remove("slideOut");
			slides[slideIndex-2].nextElementSibling.classList.remove("fadeOut");
			slides[slideIndex-1].classList.replace("slideIn","slideOut");
			slides[slideIndex-1].nextElementSibling.classList.replace("fadeIn","fadeOut");
			slides[slideIndex].classList.add("slideIn");
			slides[slideIndex].nextElementSibling.classList.add("fadeIn");			
		}
		
		slideIndex++;
		
		if(slideIndex == slides.length+2){
			slideIndex = 2;
		}

	setTimeout(Slider, 7000); //Change image every 7 seconds
}