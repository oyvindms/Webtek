document.addEventListener('DOMContentLoaded', ()=>{
	//fetch the data as soon as the page has loaded
	let url = "XML/FAQ_data.xml";
	fetch(url)
	.then(response=>response.text())
	.then(data=>{
		let parser = new DOMParser();
		let xml = parser.parseFromString(data, "application/xml");
		console.log(xml);
		buildFAQ(xml);
		accordion();
	});
})
        
function buildFAQ(x){
	let list = document.getElementById('FAQ_list');
	let FAQs = x.getElementsByTagName('FAQs');
	for(let i=0; i<FAQs.length; i++){
		let question = document.createElement("button");
		let p = document.createElement("p");
		question.classList.add("question");
		let answer = document.createElement("div");
		answer.classList.add("answer");
		let questionVal = FAQs[i].childNodes[1].childNodes[0].nodeValue;
		let answerVal = FAQs[i].childNodes[3].childNodes[0].nodeValue;
		p.textContent = questionVal;
		answer.textContent = answerVal;
		question.appendChild(p);
		list.appendChild(question);
		list.appendChild(answer);
	}
}


function accordion(){
	var questions = document.getElementsByClassName("question");
	var i;

	for (i = 0; i < questions.length; i++) {
		questions[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var answer = this.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
			answer.style.padding = null;
			answer.style.borderBottom = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + "px";
			answer.style.padding = "10px 0px 40px 60px"
			answer.style.borderBottom = "1px solid #76BAAB";
		}
		});
	}
}