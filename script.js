const translations = {
  en: {
    nav_about:"About", nav_projects:"Projects", nav_skills:"Skills", nav_contact:"Contact",
    hero_lead:"I create game ideas, mechanics, worlds and visual projects.",
    hero_projects:"View projects", hero_contact:"Get in touch",
    about_title:"About me",
    about_p1:"I'm Kazybek — a creator working at the intersection of game design, creativity and digital design.",
    about_p2:"I enjoy creating game concepts, mechanics, characters, worlds and stories, while also developing visual content and my own projects.",
    about_p3:"This website is my working portfolio. New projects and experiments will be added here.",
    projects_title:"Projects", projects_hint:"New work will be added here as it develops.",
    lonelands_desc:"A post-apocalyptic game focused on exploration, factions, survival and a distinctive atmosphere.",
    ilsons_title:"Between Worlds: The Ilsons",
    ilsons_desc:"A story about family, parallel worlds, portals and the consequences of experiments.",
    new_project:"New project", new_project_desc:"A description of the next project will appear here.",
    design_title:"Design & Visuals", design_desc:"Product cards, infographics, banners and other visual work.",
    details:"View project →", skills_title:"What I do",
    contact_title:"Let's create<br>something interesting.",
    contact_hint:"Replace the links below with your contacts.", motto:"From idea to reality."
  },
  ru: {
    nav_about:"Обо мне", nav_projects:"Проекты", nav_skills:"Навыки", nav_contact:"Контакты",
    hero_lead:"Создаю игровые идеи, механики, миры и визуальные проекты.",
    hero_projects:"Смотреть проекты", hero_contact:"Связаться",
    about_title:"Обо мне",
    about_p1:"Я Казыбек — специалист, работающий на стыке геймдизайна, творчества и цифрового дизайна.",
    about_p2:"Мне нравится создавать игровые концепции, механики, персонажей, миры и истории, а также развивать визуальный контент и собственные проекты.",
    about_p3:"Этот сайт — моё рабочее портфолио. Здесь будут появляться новые проекты и эксперименты.",
    projects_title:"Проекты", projects_hint:"Новые работы будут появляться здесь по мере их разработки.",
    lonelands_desc:"Постъядерная игра с исследованием мира, фракциями, выживанием и собственной атмосферой.",
    ilsons_title:"Между мирами: Илсоны",
    ilsons_desc:"История о семье, параллельных мирах, порталах и последствиях экспериментов.",
    new_project:"Новый проект", new_project_desc:"Здесь появится описание следующего проекта.",
    design_title:"Дизайн и визуал", design_desc:"Карточки товаров, инфографика, баннеры и другие визуальные работы.",
    details:"Подробнее →", skills_title:"Что я умею",
    contact_title:"Давай создадим<br>что-нибудь интересное.",
    contact_hint:"Замени ссылки ниже на свои контакты.", motto:"Из идеи — в реальность."
  }
};

const toggle = document.getElementById("langToggle");
let lang = localStorage.getItem("portfolioLang") || "en";

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
  toggle.textContent = lang === "en" ? "RU" : "EN";
  localStorage.setItem("portfolioLang", lang);
}

toggle.addEventListener("click", () => {
  lang = lang === "en" ? "ru" : "en";
  applyLanguage();
});

applyLanguage();
