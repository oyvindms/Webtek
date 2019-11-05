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
		buildKategoriList(xml)
		
	});
})


function buildKategoriList(x) {
	
	let Kategorier = x.getElementsByTagName("Kategori")
	let prisOversikt = document.getElementById("Behandlinger")
	
	for(let i=0;i<Kategorier.length;i++){
		
		let ul = document.createElement("ul")
		ul.classList.add("tjenester")
		let overskrift = document.createElement("h3")
		let kategoriNavn = Kategorier[i].getAttribute("type")
		overskrift.innerHTML = kategoriNavn
		let tjenester = Kategorier[i].getElementsByTagName("Tjeneste")
		let div = document.createElement("div")
		div.classList.add("kategoriContainer")
		
		for (let i=0;i<tjenester.length;i++){
			
			
			let li = document.createElement("li")
			let pris = tjenester[i].getAttribute("Pris")
			let tjeneste = tjenester[i].firstChild.nodeValue
			let tjenesteSpan = document.createElement("span")
			let prisSpan = document.createElement("span")
			
			tjenesteSpan.textContent = tjeneste
			tjenesteSpan.classList.add("tjenesteElement")
			prisSpan.textContent = "kr " + pris
			prisSpan.classList.add("prisElement")
			
			
			li.appendChild(tjenesteSpan)
			li.appendChild(prisSpan)
			
			ul.appendChild(li)
			div.appendChild(overskrift)
			div.appendChild(ul)
			prisOversikt.appendChild(div)
			
			
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