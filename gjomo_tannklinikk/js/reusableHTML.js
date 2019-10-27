
/* This function dynamicly writes out the navbar as html for all pages that laod the script. */
function loadNavbar(){

    var header = document.querySelector('header')
   
    var navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'navbar')

    const logoLink = document.createElement('a');
    logoLink.setAttribute('href',"index.html");
    logoLink.setAttribute('id',"logo");
    logoLink.innerText = "Logo";
    navDiv.appendChild(logoLink);
    
    const treatmentsLink = document.createElement('a');
    treatmentsLink.setAttribute('href',"treatments.html");
    treatmentsLink.innerText = "BEHANDLINGER";
    navDiv.appendChild(treatmentsLink);
    
    const pricesLink = document.createElement('a');
    pricesLink.setAttribute('href',"prices.html");
    pricesLink.innerText = "PRISER";
    navDiv.appendChild(pricesLink);
    
    const aboutLink = document.createElement('a');
    aboutLink.setAttribute('href',"about.html");
    aboutLink.innerText = "OM OSS";
    navDiv.appendChild(aboutLink);

    const contactLink = document.createElement('a');
    contactLink.setAttribute('href',"contact.html");
    contactLink.innerText = "KONTAKT";
    navDiv.appendChild(contactLink);
    
    const faqLink = document.createElement('a');
    faqLink.setAttribute('href',"faq.html");
    faqLink.innerText = "FAQ";
    navDiv.appendChild(faqLink);

    header.appendChild(navDiv)
}

/* This function dynamicly writes out the footer as html for all pages that laod the script. */
function loadFooter(){

}


/* This function dynamicly writes out the contact form/modal as html for all pages that laod the script. */
function contactModal(){

}

loadNavbar()

