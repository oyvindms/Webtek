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
	
	let Categories = x.getElementsByTagName("Categori")
	let priceOverview = document.getElementById("Treatments")
	
	for(let i=0;i<Categories.length;i++){
		
		let ul = document.createElement("ul")
		ul.classList.add("services")
		let treatmentHeader = document.createElement("h3")
		let categoriName = Categories[i].getAttribute("type")
		treatmentHeader.innerHTML = categoriName
		let serviceList = Categories[i].getElementsByTagName("Service")
		let div = document.createElement("div")
		div.classList.add("categoriContainer")
		
		
		for (let i=0;i<serviceList.length;i++){
			
			let li = document.createElement("li")
			let price = serviceList[i].getAttribute("Price")
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