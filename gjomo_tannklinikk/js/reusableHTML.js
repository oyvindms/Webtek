
/* This function dynamicly writes out the navbar as html for all pages that load the script. */
function loadNavbar(){

    var header = document.querySelector('header')

    var navDiv = document.createElement('div')
    navDiv.setAttribute('class', 'navbar')
    header.appendChild(navDiv)

    var logoLink = document.createElement('a');
    logoLink.setAttribute("href", "index.html")
    logoLink.setAttribute('id',"logoLink")

    var logo = document.createElement('img');
    logo.setAttribute("src", "img/icons/logo.svg")
    logo.setAttribute("alt", "Gjømo logo")
    logo.setAttribute("id", "gjomoLogo")
    

    logoLink.appendChild(logo)
    navDiv.appendChild(logoLink)

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

    var footer = document.createElement('div');
    footer.setAttribute("id", "footer")
    body.appendChild(footer)

        var container1 = document.createElement('div');
        container1.setAttribute("class", "footer_container first")
        footer.appendChild(container1)
            
            var icon1 = document.createElement('img');
            icon1.setAttribute("src", "img/icons/clock.svg")
            icon1.setAttribute("alt", "open_hours")
            icon1.setAttribute("class", "footerIcon")
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
        footer.appendChild(container2)

            var icon2 = document.createElement('img');
            icon2.setAttribute("src", "img/icons/contact.svg")
            icon2.setAttribute("alt", "contact")
            icon2.setAttribute("class", "footerIcon")
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
        footer.appendChild(container3)
    
            var icon3 = document.createElement('img');
            icon3.setAttribute("src", "img/icons/location.svg")
            icon3.setAttribute("alt", "location")
            icon3.setAttribute("class", "footerIcon")
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

/* Modal js */
/* 
// Get modal element
var modal = document.getElementById("myModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementById("closeBtn");

// Listen for open click
    modalBtn.addEventListener('click', openModal);

// Listen for close click
    closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", outsideClick);

//Function to open modal
function openModal(){
    
	modal.style.display = "block";
}
 
//Function to close modal
function closeModal(){
	modal.style.display = "none";
}

//Function to close modal if outside click
function outsideClick(e){
	if(e.target == modal){
	modal.style.display = "none";
	}
}

var modalDiv = document.createElement('div')
modalDiv.setAttribute("id", "modalDiv")



modalDiv.innerText
 
console.log(modalDiv)
 */



/* This function dynamicly writes out the contact form/modal as html for all pages that laod the script. */
function loadModal(){

    var body = document.querySelector('body')
    console.log("modal loaded")

    var btn = document.createElement('BUTTON')

    btn.setAttribute("id", "modalBtn")
    btn.setAttribute("class", "button")
    btn.addEventListener('click', openModal)

    var modalIcon = document.createElement('img')
    modalIcon.setAttribute("src", "img/checkmark_white.svg")
    btn.appendChild(modalIcon)  
    body.appendChild(btn)

    var modDiv = document.createElement('div')
    modDiv.setAttribute("id","myModal")
    modDiv.setAttribute("class", "modal")
    body.appendChild(modDiv)

        var modCont = document.createElement('div')
        modCont.setAttribute("class", "modal-content")
        modDiv.appendChild(modCont)

            var fieldSet = document.createElement('fieldSet')
            fieldSet.style.border = 'none'
            modCont.appendChild(fieldSet)

                    var closeButton = document.createElement('SPAN')
                    closeButton.setAttribute("class", "closeBtn")
                    closeButton.setAttribute("id", "closeBtn")
                    fieldSet.appendChild(closeButton)

                    var h = document.createElement('H1')
                    var t = document.createTextNode("KONTAKT OSS")
                    h.appendChild(t)
                    fieldSet.appendChild(h)

                var frm = document.createElement('form')
                fieldSet.appendChild(frm)

                    var fname = document.createElement('div')
                    fname.setAttribute("class", "Fornavn")
                    frm.appendChild(fname)

                        var name = document.createElement('LABEL')
                        var n = document.createTextNode("Fornavn")
                        name.appendChild(n)
                        fname.appendChild(name)

                        var write = document.createElement('INPUT')
                        write.required = true
                        write.setAttribute("type", "text")
                        write.setAttribute("id", "fornavn")
                        write.setAttribute("placeholder", "fornavn")
                        fname.appendChild(write)

                        console.log(write)
                        //Mangler her onfocus 
                        // Missing <br>

                    var ename = document.createElement('div')
                    fname.setAttribute("class", "Etternavn")
                    frm.appendChild(ename)

                        var namelast = document.createElement('LABEL')
                        var nl = document.createTextNode("Etternavn")
                        namelast.appendChild(nl)
                        ename.appendChild(namelast)

                   

                        var write2 = document.createElement('INPUT')
                        write2.required = true
                        write2.setAttribute("type", "text")
                        write2.setAttribute("id", "etternavn")
                        write2.setAttribute("placeholder", "Etternavn")
                        fname.appendChild(write2)
                        //Mangler her onfocus 
                        // Missing <br>


                    var phone = document.createElement('div')
                    fname.setAttribute("class", "Mobil")
                    frm.appendChild(phone)

                        var tlf = document.createElement('LABEL')
                        var t = document.createTextNode("Mobil")
                        tlf.appendChild(t)
                        phone.appendChild(tlf)

                        var write3 = document.createElement('INPUT')
                        write3.required = true
                        write3.setAttribute("type", "tel")
                        write3.setAttribute("id", "Number")
                        write3.setAttribute("placeholder", "Nummer")
                        write3.maxLength = 11
                        fname.appendChild(write3)
                        //Mangler her onfocus 
                        // Missing <br>
                        // Missing required pattern

                    var email = document.createElement('div')
                    fname.setAttribute("class", "Epost")
                    frm.appendChild(email)

                        var epo = document.createElement('LABEL')
                        var e = document.createTextNode("Epost")
                        epo.appendChild(e)
                        email.appendChild(epo)

                        var write4 = document.createElement('INPUT')
                        write4.required = true
                        write4.setAttribute("type", "email")
                        write4.setAttribute("id", "epost")
                        write4.setAttribute("placeholder", "E-post")
                        fname.appendChild(write4)
                        //Mangler her onfocus 
                        // Missing <br>

                    var henvendelse = document.createElement('div')
                    frm.appendChild(henvendelse)

                        var hen = document.createElement('LABEL')
                        var h = document.createTextNode("Hva gjelder din henvendelse?")
                        hen.appendChild(h)
                        henvendelse.appendChild(hen)

                        var dropdown = document.createElement('select')
                        dropdown.setAttribute("name", "henvendelse")
                        henvendelse.appendChild(dropdown)

                            var opt1 = document.createElement('option')
                            opt1.setAttribute("value", "time")
                            opt1.innerText = "Bestille time"
                            dropdown.appendChild(opt1)

                            var opt2 = document.createElement('option')
                            opt2.setAttribute("value", "Konsultasjon1")
                            opt2.innerText = "Konsultasjon"
                            dropdown.appendChild(opt2)

                            var opt3 = document.createElement('option')
                            opt3.setAttribute("value", "Konsultasjon2")
                            opt3.innerText = "Konsultasjon"
                            dropdown.appendChild(opt3)
                        // Missing <br>


                    var txt = document.createElement('div')
                    fname.setAttribute("class", "Melding")
                    frm.appendChild(txt)

                        var ta = document.createElement('LABEL')
                        var t = document.createTextNode("Melding")
                        ta.appendChild(t)
                        txt.appendChild(ta)

                        var write6 = document.createElement('textarea')
                        write6.required = true
                        write6.setAttribute("id", "texten")
                        write6.setAttribute("placeholder", "Skriv din melding her...")
                        txt.appendChild(write6)
                        //Mangler her onfocus 
                        // Missing <br>

                    var sub = document.createElement('div')
                    fname.setAttribute("for", "Submit")
                    frm.appendChild(sub)

                        var write7 = document.createElement('INPUT')
                        write7.setAttribute("type", "Submit")
                        write7.setAttribute("value", "Send")
                        write7.required = true
                        write7.setAttribute("name", "submit")
                        fname.appendChild(write7)
                        // Missing <br>

                        console.log(btn)


                        // Get modal element
  /*               var modal = document.getElementById("myModal");
                console.log(modal) */

                // Get open modal button
                var modalBtn = document.getElementById("modalBtn");
                // Get close button
                var closeBtn = document.getElementById("closeBtn");

        /*         // Listen for open click
                modal.addEventListener("click", openModal); */

                // Listen for close click
                closeBtn.addEventListener("click", closeModal);

                // Listen for outside click
                window.addEventListener("click", outsideClick);
}





//Function to open modal
function openModal(event){
    var modal = document.getElementById("myModal");

    modal.style.display = "block";
    console.log("Åpne modal kjører")
}
 
//Function to close modal
function closeModal(event){
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
    console.log("Lukke modal kjører")
}

//Function to close modal if outside click
function outsideClick(event){
    var modal = document.getElementById("myModal");

    if(event.target == modal){
    modal.style.display = "none";
    }
    console.log("utenfor klikk kjører")
}

















