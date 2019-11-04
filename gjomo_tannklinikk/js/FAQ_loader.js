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

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

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