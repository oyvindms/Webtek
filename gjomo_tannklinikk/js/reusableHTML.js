
/* This function dynamicly writes out the navbar as html for all pages that laod the script. */
function loadNavbar(){

    var header = document.querySelector('header')

    var navDiv = document.createElement('div')
    navDiv.setAttribute('class', 'navbar')
    header.appendChild(navDiv)

    var logoLink = document.createElement('a');
    logoLink.setAttribute("href", "index.html")
    logoLink.setAttribute('id',"logo")

    var logo = document.createElement('img');
    logo.setAttribute("src", "img/icons/logo.svg")
    logo.setAttribute("alt", "Gjømo logo")
    logo.setAttribute("id", "logo")
    

    logoLink.appendChild(logo)
    navDiv.appendChild(logoLink)

    console.log(logoLink)
    console.log(logo)
    
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

    
}

/* This function dynamicly writes out the footer as html for all pages that laod the script. */
function loadFooter(){

    /* Deciding location of footer and adding needed divs. */
    var body = document.querySelector('body')
   
    var containers = document.createElement('div');
    containers.setAttribute("id", "containers")
    body.appendChild(containers)

        var container1 = document.createElement('div');
        container1.setAttribute("class", "footer_container first")
        containers.appendChild(container1)
            
                var icon1 = document.createElement('img');
                icon1.setAttribute("src", "img/icons/clock.svg")
                icon1.setAttribute("alt", "open_hours")
                icon1.setAttribute("class", "icon")
                container1.appendChild(icon1)

                var container1_text1 = document.createElement('div')
                container1_text1.setAttribute("class", "footer_text")
                container1_text1.innerText = "Man - Fre"
                container1.appendChild(container1_text1)

                var container1_text2 = document.createElement('div')
                container1_text2.setAttribute("class", "footer_text")
                container1_text2.innerText = "08:00 - 16:00"
                container1.appendChild(container1_text2)
                
                var container1_text3 = document.createElement('div')
                container1_text3.setAttribute("class", "footer_text")
                container1_text3.innerText = "Lør      " /* Same length as the "mon-fre" without uneccesary css.*/
                container1_text3.setAttribute("id", "saturday")
                container1.appendChild(container1_text3)

                var container1_text4 = document.createElement('div')
                container1_text4.setAttribute("class", "footer_text")
                container1_text4.innerText = "10:00 - 15:00"
                container1.appendChild(container1_text4)

        var container2 = document.createElement('div');
        container2.setAttribute("class", "footer_container second")
        containers.appendChild(container2)

            var icon2 = document.createElement('img');
            icon2.setAttribute("src", "img/icons/contact.svg")
            icon2.setAttribute("alt", "contact")
            icon2.setAttribute("class", "icon")
            container2.appendChild(icon2)

            var container2_text1 = document.createElement('div')
            container2_text1.setAttribute("class", "footer_text")
            container2_text1.innerText = "92 93 94 95"
            container2.appendChild(container2_text1)

            var container2_text2 = document.createElement('div')
            container2_text2.setAttribute("class", "footer_text")
            container2_text2.innerText = "kontakt@gjomo.no"
            container2.appendChild(container2_text2)

        var container3 = document.createElement('div');
        container3.setAttribute("class", "footer_container third")
        containers.appendChild(container3)
    
            var icon3 = document.createElement('img');
            icon3.setAttribute("src", "img/icons/location.svg")
            icon3.setAttribute("alt", "location")
            icon3.setAttribute("class", "icon")
            container3.appendChild(icon3)

            var container3_text1 = document.createElement('div')
            container3_text1.setAttribute("class", "footer_text")
            container3_text1.innerText = "Kolbjørn Hejes vei 2B"
            container3.appendChild(container3_text1)

            var container3_text2 = document.createElement('div')
            container3_text2.setAttribute("class", "footer_text")
            container3_text2.innerText = "7034, Trondheim"
            container3.appendChild(container3_text2)
}

/* This function dynamicly writes out the contact form/modal as html for all pages that laod the script. */
function contactModal(){

}
