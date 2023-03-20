fetch('./components/lang.json')
  .then(response => response.json())
  .then(lang => {
    // o seu código que usa o arquivo lang.json
  });

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  hamburger.classList.toggle('is-active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    hamburger.classList.remove('is-active');
  });
});

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('is-active');
});

function App() {
  const [language, setLanguage] = useState(lang);

  useEffect(() => {
    fetch('/lang.json')
      .then((response) => response.json())
      .then((data) => setLanguage(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{language.header.title}</h1>
      <p>{language.intro.description}</p>
      <ul>
        <li>{language.services.service1}</li>
        <li>{language.services.service2}</li>
        <li>{language.services.service3}</li>
      </ul>
      <button onClick={() => setLanguage(lang)}>English</button>
      <button onClick={() => setLanguage(lang.pt)}>Português</button>
    </div>
  );
}

// Define the default language as English
let language = 'en';

// This function updates the content on the page with the selected language
function updateContent(lang) {
  // Update the language variable
  language = lang;
  
  // Get the corresponding language object
  const langObj = lang === 'en' ? englishLang : portugueseLang;
  
  // Call the function to update the page content
  translatePage(langObj);
}

// This function toggles between English and Portuguese
function toggleLanguage() {
  // Check the current language and switch to the other one
  const newLang = language === 'en' ? 'pt' : 'en';
  
  // Call the function to update the page content
  updateContent(newLang);
}

// Add an event listener to the language button
const languageButton = document.getElementById('language-switcher');
languageButton.addEventListener('click', toggleLanguage);

// Call the updateContent function with the default language
updateContent(language);


mlr({
  dropID: "mbPOCControlsLangDrop",
  stringAttribute: "data-mlr-text",
  chosenLang: "English",
  mLstrings: MLstrings,
  countryCodes: true,
  countryCodeData: mlCodes,
});


function translatePage(lang) {
  // Header
  document.querySelector("#home").textContent = lang.header.home;
  document.querySelector("#services").textContent = lang.header.services;
  document.querySelector("#about").textContent = lang.header.about;
  document.querySelector("#work").textContent = lang.header.work;

  // Intro
  document.querySelector("#intro-title").textContent = lang.intro.title;
  document.querySelector("#intro-name").textContent = lang.intro.name;
  document.querySelector("#intro-subtitle").textContent = lang.intro.subtitle;

  // Services
  document.querySelector("#services-title").textContent = lang.services.title;
  document.querySelector("#backend").textContent = lang.services.backend;
  document.querySelector("#mysql").textContent = lang.services.mysql;
  document.querySelector("#apis").textContent = lang.services.apis;
  document.querySelector("#agile").textContent = lang.services.agile;
  document.querySelector("#misc").textContent = lang.services.misc;
  document.querySelector("#pentest").textContent = lang.services.pentest;
  document.querySelector("#testing").textContent = lang.services.testing;
  document.querySelector("#commandline").textContent = lang.services.commandline;
  document.querySelector("#frontend").textContent = lang.services.frontend;
  document.querySelector("#html").textContent = lang.services.html;
  document.querySelector("#react").textContent = lang.services.react;
  document.querySelector("#sass").textContent = lang.services.sass;

  // About
  document.querySelector("#about-title").textContent = lang.about.title;
  document.querySelector("#about-subtitle").textContent = lang.about.subtitle;
  document.querySelector("#about-body1").textContent = lang.about.body1;
  document.querySelector("#about-body2").textContent = lang.about.body2;
  document.querySelector("#about-body3").textContent = lang.about.body3;

  // Work
  document.querySelector("#work-title").textContent = lang.work.title;
  document.querySelector("#work-subtitle").textContent = lang.work.subtitle;
}


function updateContent() {
  // atualiza o conteúdo da página com base na nova linguagem selecionada
  if (language === 'en') {
    // atualiza o conteúdo para inglês
    translatePage(englishLang);
  } else if (language === 'pt') {
    // atualiza o conteúdo para português
    translatePage(portugueseLang);
  }
}

function toggleLanguage() {
  // alterna a linguagem entre 'en' e 'pt'
  if (language === 'en') {
    language = 'pt';
  } else {
    language = 'en';
  }
  

  
  // atualiza o conteúdo da página com base na nova linguagem selecionada
  updateContent();
}

// adiciona um evento de clique ao botão de troca de linguagem
languageButton.addEventListener('click', toggleLanguage);