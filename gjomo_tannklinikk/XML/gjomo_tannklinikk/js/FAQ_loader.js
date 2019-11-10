
//Fetches FAQ data from XML-document and runs the functions buildFAQ() and accordion()
document.addEventListener('DOMContentLoaded', ()=>{
	//fetch the data as soon as the page has loaded
	let url = "XML/FAQ_data.xml";
	fetch(url)
	.then(response=>response.text())
	.then(data=>{
		let parser = new DOMParser();
		let xml = parser.parseFromString(data, "application/xml");
		buildFAQ(xml);
		accordion();
	});
})
   
//Takes the data from FAQ_data.xml and appends it to faq.html in a structured manner
function buildFAQ(x){
	let list = document.getElementById('FAQ_list');
	let FAQs = x.getElementsByTagName('FAQs');
	for(let i=0; i<FAQs.length; i++){
		let faq = document.createElement("div");
		faq.classList.add("faqElement");
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
		faq.appendChild(question);
		faq.appendChild(answer);
		list.appendChild(faq);
	}
}

//Either shows or hides the answer to the clicked question in FAQ, and hides all others (in practice only one is displayed at a time)
function accordion(){
	var acc = document.getElementsByClassName("question");
	var panel = document.getElementsByClassName("answer");

	for (var i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			var setClasses = !this.classList.contains("active");
			setClass(acc, "active", "remove");
			setClass(panel, "show", "remove");
			if (setClasses) {
				this.classList.toggle("active");
				this.nextElementSibling.classList.toggle("show");
			}
		}
	}
}

//Used in previous function to hide the answer and change PLUS icon to MINUS by removing class "active" and "show" respectively
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

//takes the value of the search field, checks it against the text from each question in the FAQ, and removes the question from the list if it does not contain the text from the search field
function filterSearch() {
	var input = document.getElementById("FAQ_search_bar");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("FAQ_list");
    var faq = ul.getElementsByClassName("faqElement");
    for (var i = 0; i < faq.length; i++) {
        var p = faq[i].getElementsByTagName("p")[0];
        var txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            faq[i].style.display = "";
        } else {
            faq[i].style.display = "none";
        }
    }
}