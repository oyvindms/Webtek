document.addEventListener('DOMContentLoaded', ()=>{
	//fetch the data as soon as the page has loaded
	let url = "XML/testimonials_data.xml";
	fetch(url)
	.then(response=>response.text())
	.then(data=>{
		let parser = new DOMParser();
		let testimonials = parser.parseFromString(data, "application/xml");
		console.log(testimonials);
		buildSlider(testimonials);
		slider();
	});
})
        
function buildSlider(x){
	let t_container = document.getElementById('testimonials_container');
	let testimonials = x.getElementsByTagName('testimonial');
	for(let i=0; i<testimonials.length; i++){
		let t_init = document.createElement("div");
		t_init.classList.add("t_init");
		let quote = document.createElement("button");
		let p = document.createElement("p");
		question.classList.add("question");
		let answer = document.createElement("div");
		answer.classList.add("answer");
		let questionVal = FAQs[i].childNodes[1].childNodes[0].nodeValue;
		let answerVal = FAQs[i].childNodes[3].childNodes[0].nodeValue;
		p.textContent = questionVal;
		answer.textContent = answerVal;
		question.appendChild(p);
		faq.appendChild(question);
		faq.appendChild(answer);
		t_container.appendChild(t_init);
	}
}

function slider(){
	
}