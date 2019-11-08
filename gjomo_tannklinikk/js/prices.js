// JavaScript Document

document.addEventListener('DOMContentLoaded', ()=>{
	//fetch the data as soon as the page has loaded
	let url = "XML/Prices_data.xml";
	fetch(url)
	.then(response=>response.text())
	.then(data=>{
		let parser = new DOMParser();
		let xml = parser.parseFromString(data, "application/xml");
		//console.log(xml);
		buildCategoriList(xml)
		
	});
})


function buildCategoriList(x) {
	
	let Categories = x.getElementsByTagName("Kategori")
	let priceOverview = document.getElementById("Treatments")
	
	for(let i=0;i<Categories.length;i++){
		
		let ul = document.createElement("ul")
		ul.classList.add("services")
		let treatmentHeader = document.createElement("h3")
		let categoriName = Categories[i].getAttribute("type")
		treatmentHeader.innerHTML = categoriName
		let serviceList = Categories[i].getElementsByTagName("Tjeneste")
		let div = document.createElement("div")
		div.classList.add("categoriContainer")
		
		for (let i=0;i<serviceList.length;i++){
			
			
			let li = document.createElement("li")
			let price = serviceList[i].getAttribute("Pris")
			let service = serviceList[i].firstChild.nodeValue
			let serviceSpan = document.createElement("span")
			let priceSpan = document.createElement("span")
			
			serviceSpan.textContent = service
			serviceSpan.classList.add("serviceElement")
			priceSpan.textContent = "kr " + price
			priceSpan.classList.add("priceElement")
			
			
			li.appendChild(serviceSpan)
			li.appendChild(priceSpan)
			
			ul.appendChild(li)
			div.appendChild(treatmentHeader)
			div.appendChild(ul)
			priceOverview.appendChild(div)
			
			
		}
		
	}
	
}



/*        
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
}*/