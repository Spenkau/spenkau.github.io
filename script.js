"use strict";
const translations = {
  "ru": {
    "skip": "К содержимому",
    "navExperience": "Опыт",
    "navStack": "Стек",
    "navContact": "Контакты",
    "location": "ГРОДНО, БЕЛАРУСЬ",
    "firstName": "Александр",
    "lastName": "Холявский",
    "intro": "Разрабатываю backend-сервисы и API на PHP и Laravel. Работаю с модульной архитектурой, базами данных и автотестами.",
    "write": "Написать мне",
    "viewExperience": "Посмотреть опыт",
    "experienceLabel": "Опыт",
    "experienceValue": "1 год 7 месяцев",
    "formatLabel": "Формат",
    "formatValue": "Офис / гибрид / удалённо",
    "relocationLabel": "Переезд",
    "relocationValue": "Минск",
    "fullTime": "Полная занятость",
    "experienceEyebrow": "01 / ПРАКТИКА",
    "experienceTitle": "Опыт работы",
    "jobDate": "Апрель 2024 — Октябрь 2025",
    "jobSummary": "Сервисы подарочных сертификатов и API для мобильных приложений.",
    "work1": "Разработка backend-сервисов на PHP и Laravel.",
    "work2": "Проектирование модульной архитектуры приложения.",
    "work3": "Оптимизация запросов MySQL и PostgreSQL.",
    "work4": "Работа с Elasticsearch и написание автотестов.",
    "work5": "Работа с современными и legacy-версиями: PHP 5.4 / 7.2 / 8+, Laravel 5 / 11+.",
    "stackEyebrow": "02 / ИНСТРУМЕНТЫ",
    "stackTitle": "Технологический стек",
    "backendNote": "Сервисы и API",
    "dataTitle": "Данные",
    "dataNote": "Базы данных и поиск",
    "toolsTitle": "Инструменты",
    "toolsNote": "Среда разработки и веб",
    "stackFootnote": "Также в резюме: многопоточное программирование.",
    "educationEyebrow": "03 / БАЗА",
    "educationTitle": "Образование и языки",
    "expected": "Ожидаемый год выпуска",
    "university": "БГУИР, Минск",
    "universityFull": "Белорусский государственный университет информатики и радиоэлектроники",
    "universityDegree": "ФКТ · Программная инженерия",
    "collegeLevel": "Среднее специальное образование",
    "college": "ГГКТТИД",
    "collegeDegree": "Информационные технологии · Системное программирование",
    "languagesTitle": "Языки",
    "belarusian": "Белорусский",
    "native": "Родной",
    "russian": "Русский",
    "english": "Английский",
    "contactEyebrow": "04 / НА СВЯЗИ",
    "contactTitle": "Давайте работать\nвместе.",
    "contactText": "Рассматриваю полную занятость: удалённо, в офисе или в гибридном формате. Готов к переезду в Минск и командировкам.",
    "preferred": "Предпочитаемый способ связи",
    "citizenship": "Гражданство и разрешение на работу: Беларусь",
    "fullName": "Александр Холявский",
    "backTop": "Наверх ↑"
  },
  "en": {
    "skip": "Skip to content",
    "navExperience": "Experience",
    "navStack": "Stack",
    "navContact": "Contact",
    "location": "HRODNA, BELARUS",
    "firstName": "Alexander",
    "lastName": "Kholyavski",
    "intro": "I build backend services and APIs with PHP and Laravel, working with modular architecture, databases, and automated tests.",
    "write": "Get in touch",
    "viewExperience": "View experience",
    "experienceLabel": "Experience",
    "experienceValue": "1 year 7 months",
    "formatLabel": "Work format",
    "formatValue": "On-site / hybrid / remote",
    "relocationLabel": "Relocation",
    "relocationValue": "Minsk",
    "fullTime": "Full-time employment",
    "experienceEyebrow": "01 / EXPERIENCE",
    "experienceTitle": "Work experience",
    "jobDate": "April 2024 — October 2025",
    "jobSummary": "Gift certificate services and APIs for mobile applications.",
    "work1": "Developed backend services with PHP and Laravel.",
    "work2": "Designed modular application architecture.",
    "work3": "Optimized MySQL and PostgreSQL queries.",
    "work4": "Worked with Elasticsearch and wrote automated tests.",
    "work5": "Worked with modern and legacy versions: PHP 5.4 / 7.2 / 8+, Laravel 5 / 11+.",
    "stackEyebrow": "02 / TOOLKIT",
    "stackTitle": "Technology stack",
    "backendNote": "Services and APIs",
    "dataTitle": "Data",
    "dataNote": "Databases and search",
    "toolsTitle": "Tools",
    "toolsNote": "Development environment and web",
    "stackFootnote": "Also listed in my CV: multithreaded programming.",
    "educationEyebrow": "03 / FOUNDATION",
    "educationTitle": "Education & languages",
    "expected": "Expected graduation",
    "university": "BSUIR, Minsk",
    "universityFull": "Belarusian State University of Informatics and Radioelectronics",
    "universityDegree": "FCT · Software Engineering",
    "collegeLevel": "Secondary specialized education",
    "college": "GGKTTID",
    "collegeDegree": "Information Technology · Systems Programming",
    "languagesTitle": "Languages",
    "belarusian": "Belarusian",
    "native": "Native",
    "russian": "Russian",
    "english": "English",
    "contactEyebrow": "04 / CONTACT",
    "contactTitle": "Let’s work\ntogether.",
    "contactText": "Looking for full-time opportunities: remote, on-site, or hybrid. Open to relocation to Minsk and business trips.",
    "preferred": "Preferred contact method",
    "citizenship": "Citizenship and work authorization: Belarus",
    "fullName": "Alexander Kholyavski",
    "backTop": "Back to top ↑"
  }
};
function setLanguage(language) {
  const lang = Object.hasOwn(translations, language) ? language : "ru";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const text = translations[lang][element.dataset.i18n];
    if (typeof text === "string") element.textContent = text;
  });
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  document.title = lang === "en" ? "Alexander Kholyavski — Backend Developer" : "Александр Холявский — Backend Developer";
  document.querySelector('meta[name="description"]').content = lang === "en"
    ? "Alexander Kholyavski — backend developer. PHP, Laravel, MySQL, PostgreSQL, Redis, Go. Hrodna, Belarus."
    : "Александр Холявский — backend-разработчик. PHP, Laravel, MySQL, PostgreSQL, Redis, Go. Гродно, Беларусь.";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  try { window.history.replaceState(null, "", url); } catch (_) {}
  try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
}
let savedLanguage = null;
try { savedLanguage = localStorage.getItem("portfolio-language"); } catch (_) {}
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
setLanguage(requestedLanguage || savedLanguage || "ru");
document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
document.getElementById("year").textContent = String(new Date().getFullYear());
