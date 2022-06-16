const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

mlr({
    dropID: "mbPOCControlsLangDrop",
    stringAttribute: "data-mlr-text",
    chosenLang: "English",
    mLstrings: MLstrings,
    countryCodes: true,
    countryCodeData: mlCodes,
});

var messageArray = ["Typewriter Effect"];
var textPosition= 0;
var speed = 100;

typewriter = () => {
    document.querySelector("").
    innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
    
}

window.addEventListener("load", typewriter);