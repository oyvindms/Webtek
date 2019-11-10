
/* Denne funksjonen henter først ut posisjonen til 'header' i html dokumentet der scriptet blir lastet. Deretter 
bygger den opp hele navbaren, både på desktop og til mindre skjermer, slik at alle navbarene blir like. */
function loadNavbar(){

    var header = document.querySelector('header')

    var navDiv = document.createElement('div')
    navDiv.setAttribute('class', 'navbar')
    navDiv.style.height = "90px"
    header.appendChild(navDiv)

        var logoLink = document.createElement('a');
        logoLink.setAttribute("href", "index.html")
        logoLink.setAttribute('id',"logoLink")

        var logo = document.createElement('img');
        logo.setAttribute("src", "img/icons/logo.png")
        logo.setAttribute("alt", "Gjømo logo")
        logo.setAttribute("id", "gjomoLogo")
        
        logoLink.appendChild(logo)

        navDiv.appendChild(logoLink)

        var burger = document.createElement("div")
        burger.setAttribute("class", "burger")
        burger.addEventListener("click", showBurger)
        navDiv.appendChild(burger)

            var line1 = document.createElement("div")
            line1.setAttribute("class", "line1")
            burger.appendChild(line1)

            var line2 = document.createElement("div")
            line2.setAttribute("class", "line2")
            burger.appendChild(line2)

            var line3 = document.createElement("div")
            line3.setAttribute("class", "line3")
            burger.appendChild(line3)

        const navLinks = document.createElement('div')
        navLinks.setAttribute('class', 'navLinks')
        navDiv.appendChild(navLinks)

            const faqLink = document.createElement('a');
            faqLink.setAttribute('href',"faq.html");
            faqLink.innerText = "FAQ";
            navLinks.appendChild(faqLink);

            const contactLink = document.createElement('a');
            contactLink.setAttribute('href',"contact.html");
            contactLink.innerText = "KONTAKT";
            navLinks.appendChild(contactLink);

            const aboutLink = document.createElement('a');
            aboutLink.setAttribute('href',"about.html");
            aboutLink.innerText = "OM OSS";
            navLinks.appendChild(aboutLink);

            const pricesLink = document.createElement('a');
            pricesLink.setAttribute('href',"prices.html");
            pricesLink.innerText = "PRISER";
            navLinks.appendChild(pricesLink);
            

            const treatmentsLink = document.createElement('a');
            treatmentsLink.setAttribute('href',"treatments.html");
            treatmentsLink.innerText = "BEHANDLINGER";
            navLinks.appendChild(treatmentsLink);
        
}

/* showBurger kontrollerer om burgermenyen skal være åpen eller lukket på mindre skjermer. */
const showBurger = (event) => {
    var navbar = document.querySelector(".navbar")

    if(navbar.style.height === "90px"){
        navbar.style.height = "60%"
    }
    else{
        navbar.style.height = "90px"
    }
        
}

/* Lager en footer på samme måte som navbar ved å lage html-elementer som knyttes ved hjelp av appendchild. */
function loadFooter(){

    var body = document.querySelector('body')

    var footer = document.createElement('div');
    footer.setAttribute("id", "footer")
    body.appendChild(footer)

        var container1 = document.createElement('div');
        container1.setAttribute("class", "footer_container first")
        footer.appendChild(container1)
            
            var icon1 = document.createElement('img');
            icon1.setAttribute("src", "img/icons/clock.png")
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
            container1_text3.innerText = "Lør      "
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
            icon2.setAttribute("src", "img/icons/contact.png")
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
            icon3.setAttribute("src", "img/icons/location.png")
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



/* loadModal bygger hele modalen i det html-dokumentet scriptet blir lastet inn på. Modalen har i tillegg noen knapper
som utløser funksjonene som ligger under denne. De er knyttet til funksjonen ved hjelp av lyttere. */
function loadModal(){

    var body = document.querySelector('body')

    var btn = document.createElement('BUTTON')

    btn.setAttribute("id", "modalBtn")
    btn.setAttribute("class", "button")

    /* Lytter for å åpne modalen */
    btn.addEventListener('click', openModal)

    var modalIcon = document.createElement('img')
    modalIcon.setAttribute("src", "img/icons/checkmark_white.png")
    modalIcon.setAttribute("id","checkmark")
    btn.appendChild(modalIcon)  
    body.appendChild(btn)

    var modDiv = document.createElement('div')
    modDiv.setAttribute("id","myModal")
    modDiv.setAttribute("class", "modal")
    modDiv.style.overflow = "hidden"
    body.appendChild(modDiv)

        var modCont = document.createElement('div')
        modCont.setAttribute("class", "modal-content")
        modDiv.appendChild(modCont)

            var fieldSet = document.createElement('fieldSet')
            fieldSet.setAttribute("id", "modalBox")
            fieldSet.style.border = 'none'
            modCont.appendChild(fieldSet)

                    var closeButton = document.createElement('SPAN')
                    closeButton.setAttribute("class", "closeBtn")
                    closeButton.setAttribute("id", "closeBtn")
                    closeButton.innerHTML = "&times;"
                    fieldSet.appendChild(closeButton)

                    var h = document.createElement('H1')
                    var t = document.createTextNode("KONTAKT OSS")
                    h.appendChild(t)
                    h.setAttribute("id", "header1")
                    fieldSet.appendChild(h)

                var frm = document.createElement('form')
                frm.setAttribute("class", "form1")
                fieldSet.appendChild(frm)

                    var fname = document.createElement('div')
                    fname.setAttribute("id", "Fornavn")
                    fname.setAttribute("class", "formElement")
                    frm.appendChild(fname)

                        var name = document.createElement('LABEL')
                        var n = document.createTextNode("Fornavn")
                        name.appendChild(n)
                        fname.appendChild(name)
                        var br1 = document.createElement('br')
                        fname.appendChild(br1)

                        var write = document.createElement('INPUT')
                        write.required = true
                        write.setAttribute("type", "text")
                        write.setAttribute("id", "fornavn")
                        write.setAttribute("placeholder", "Fornavn")
                        fname.appendChild(write)

                        var br2 = document.createElement('br')
                        fname.appendChild(br2) 
                        

                    var ename = document.createElement('div')
                    ename.setAttribute("id", "Etternavn")
                    ename.setAttribute("class", "formElement")
                    frm.appendChild(ename)

                        var namelast = document.createElement('LABEL')
                        var nl = document.createTextNode("Etternavn")
                        namelast.appendChild(nl)
                        ename.appendChild(namelast)

                        var br3 = document.createElement('br')
                        ename.appendChild(br3)
                   

                        var write2 = document.createElement('INPUT')
                        write2.required = true
                        write2.setAttribute("type", "text")
                        write2.setAttribute("id", "etternavn")
                        write2.setAttribute("placeholder", "Etternavn")
                        ename.appendChild(write2)
                        
                        var br4 = document.createElement('br')
                        ename.appendChild(br4)
                        

                    var phone = document.createElement('div')
                    phone.setAttribute("id", "Mobil")
                    phone.setAttribute("class", "formElement")
                    frm.appendChild(phone)

                        var tlf = document.createElement('LABEL')
                        var t = document.createTextNode("Mobil")
                        tlf.appendChild(t)
                        phone.appendChild(tlf)

                        var br5 = document.createElement('br')
                        phone.appendChild(br5)

                        var write3 = document.createElement('INPUT')
                        write3.required = true
                        write3.setAttribute("type", "tel")
                        write3.setAttribute("id", "Number")
                        write3.setAttribute("placeholder", "Nummer")
                        write3.pattern = "[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                        write3.value = "Number"
                        write3.setAttribute("onfocus", "this.value =this.value == 'Number'?'':this.value;")

                        write3.maxLength = 11
                        phone.appendChild(write3)
                        
                        var br6 = document.createElement('br')
                        phone.appendChild(br6)
                        

                    var email = document.createElement('div')
                    email.setAttribute("id", "Epost")
                    email.setAttribute("class", "formElement")
                    
                    frm.appendChild(email)

                        var epo = document.createElement('LABEL')
                        var e = document.createTextNode("Epost")
                        epo.appendChild(e)
                        email.appendChild(epo)

                        var br7 = document.createElement('br')
                        email.appendChild(br7)

                        var write4 = document.createElement('INPUT')
                        write4.required = true
                        write4.setAttribute("type", "email")
                        write4.setAttribute("id", "epost")
                        write4.setAttribute("placeholder", "E-post")
                        email.appendChild(write4)
                        
                        var br7 = document.createElement('br')
                        email.appendChild(br7)                        

                    var henvendelse = document.createElement('div')
                    henvendelse.setAttribute("class", "formElement")

                    frm.appendChild(henvendelse)

                        var hen = document.createElement('LABEL')
                        var h = document.createTextNode("Hva gjelder din henvendelse?")
                        hen.appendChild(h)
                        henvendelse.appendChild(hen)

                        var dropdown = document.createElement('select')
                        dropdown.setAttribute("name", "henvendelse")
                        dropdown.setAttribute("id", "inquiry")
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
                        

                    var txt = document.createElement('div')
                    txt.setAttribute("id", "message")
                    txt.setAttribute("class", "formElement")
                    frm.appendChild(txt)

                        var ta = document.createElement('LABEL')
                        ta.setAttribute("id", "txtOver")

                        var t = document.createTextNode("Melding")
                        ta.appendChild(t)
                        txt.appendChild(ta)

                        var write6 = document.createElement('textarea')
                        write6.required = true
                        write6.setAttribute("id", "textArea")
                        write6.setAttribute("placeholder", "Skriv din melding her...")
                        txt.appendChild(write6)

                    var sub = document.createElement('div')
                    sub.setAttribute("for", "Submit")
                    frm.appendChild(sub)

                        var write7 = document.createElement('INPUT')
                        write7.setAttribute("type", "submit")
                        write7.setAttribute("value", "Send")
                        write7.required = true
                        var br = document.createElement('br')
                        write7.appendChild(br)
                        sub.appendChild(write7)


                /* Lytter for lukkefunksjonen */
                closeBtn.addEventListener("click", closeModal);

                /* Lytter for lukking dersom brukeren klikker utenfor modalen. */
                window.addEventListener("click", outsideClick);
}

/*Funksjon som åpner modalen og forsikrer at brukeren ikke kan scrolle når modalen er åpen.*/
function openModal(event){
    var modal = document.getElementById("myModal");
    var body = document.querySelector("body")
    body.style.overflow = "hidden"
    modal.style.display = "block"
}
 
/*Funksjon som lukker modalen med 'X' knappen.*/
function closeModal(event){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var body = document.querySelector("body")
    body.style.overflow = "scroll"
}

/*Funksjon som lukker modalen ved å trykke utenfor selve modalen*/
function outsideClick(event){
    var modal = document.getElementById("myModal");

    if(event.target == modal){
    modal.style.display = "none";

    var body = document.querySelector("body")
    body.style.overflow = "scroll"
    }
}


/* Denne onload funksjonen laster inn alle elementene på sidene der alle skal lastes inn. (Alle utenom kontakt
    siden der vi har en spesialtilpasset footer og kontaktskjema) */
window.onload = (function (){
    var htmlName = window.location.pathname;
    htmlName = htmlName.split("/").pop();

    if(htmlName == 'contact.html'){
        loadNavbar()
    }
    else{
        loadNavbar()
        loadModal()
        loadFooter()
    }
})  


















