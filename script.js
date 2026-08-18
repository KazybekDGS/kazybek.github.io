const t = {
  en: {
    nav_about:"About",
    nav_work:"Work",
    nav_skills:"Skills",
    nav_contact:"Contact",
    hero_text:"I design gameplay systems, levels and narrative experiences, turning ideas into documented concepts and playable prototypes.",
    view_work:"View my work",
    contact_me:"Contact me ↗",
    about_label:"ABOUT",
    about_title:"Game design through<br><em>practice.</em>",
    about_p1:"I'm Kazybek Yeleussizov, an aspiring game designer focused on gameplay systems, level design, narrative design and prototyping. I develop original projects to practice game design and build practical experience through playable prototypes and documentation.",
    about_p2:"My goal is to grow professionally as a game designer and contribute to commercial game development. Diversity Games Studios is my personal label for publishing and presenting my independent game projects — not a commercial studio or development team.",
    available:"Available for work",
    available_desc:"Open to remote work and willing to relocate for the right opportunity.",
    work_label:"SELECTED WORK",
    work_intro:"A selection of my current game design projects.",deborah_desc:"My first released game project: a single-player top-down adventure about treasure hunter Deborah Howard and a reconnaissance mission to the mysterious Island “L”.",status:"STATUS",released:"Released",platform:"PLATFORM",view_presentation:"View presentation →",
    lonelands_desc:"A post-nuclear survival game set in the Kazakh steppe, focused on exploration, factions, companions, choices and consequences.",
    great_steppe_desc:"A cyberpunk game concept set in Neo-Karaganda in 2079, built around corporations, factions, nomads and the struggle for the future of the steppe.",
    role:"ROLE",
    focus:"FOCUS",
    case_study:"View case study →",
    presentation:"View presentation →",
    skills_label:"CAPABILITIES",
    skills_title:"What I<br><em>do.</em>",
    tools_label:"TOOLS",
    contact_title:"Contact",
    contact_text:"For work opportunities, professional communication and other inquiries.",
    personal_email:"Personal Email",
    studio_email:"Studio Email",
    footer:"Game Designer Portfolio."
  },
  ru: {
    nav_about:"Обо мне",
    nav_work:"Работы",
    nav_skills:"Навыки",
    nav_contact:"Контакты",
    hero_text:"Проектирую игровые системы, уровни и нарративный опыт, превращая идеи в проработанные концепции, документацию и играбельные прототипы.",
    view_work:"Смотреть работы",
    contact_me:"Связаться ↗",
    about_label:"ОБО МНЕ",
    about_title:"Геймдизайн через<br><em>практику.</em>",
    about_p1:"Я Казыбек Елеусизов — начинающий геймдизайнер, развивающийся в направлении игровых систем, дизайна уровней, нарративного дизайна и прототипирования. Создаю собственные проекты, чтобы на практике отрабатывать геймдизайн и получать опыт через играбельные прототипы и документацию.",
    about_p2:"Моя цель — профессионально развиваться как геймдизайнер и работать над коммерческими игровыми проектами. Diversity Games Studios — мой личный лейбл для публикации и представления собственных игровых проектов, а не коммерческая студия или команда разработчиков.",
    available:"Открыт к работе",
    available_desc:"Открыт к удалённой работе и готов к переезду ради подходящей возможности.",
    work_label:"ИЗБРАННЫЕ РАБОТЫ",
    work_intro:"Подборка моих текущих геймдизайнерских проектов.",deborah_desc:"Мой первый выпущенный игровой проект: одиночное приключение с видом сверху об охотнице за сокровищами Деборе Ховард и разведывательной миссии на загадочный остров «L».",status:"СТАТУС",released:"Выпущен",platform:"ПЛАТФОРМА",view_presentation:"Открыть презентацию →",
    lonelands_desc:"Постъядерная survival-игра в казахской степи с упором на исследование, фракции, компаньонов, выборы и последствия.",
    great_steppe_desc:"Концепт киберпанк-игры в Нео-Караганде 2079 года о корпорациях, фракциях, кочевниках и борьбе за будущее степи.",
    role:"РОЛЬ",
    focus:"ФОКУС",
    case_study:"Открыть кейс →",
    presentation:"Открыть презентацию →",
    skills_label:"ВОЗМОЖНОСТИ",
    skills_title:"Что я<br><em>делаю.</em>",
    tools_label:"ИНСТРУМЕНТЫ",
    contact_title:"Связаться",
    contact_text:"Для предложений о работе, профессионального общения и других вопросов.",
    personal_email:"Личная почта",
    studio_email:"Почта студии",
    footer:"Портфолио геймдизайнера."
  }
};

let lang = localStorage.getItem("portfolioLang") || "en";
const btn = document.getElementById("langToggle");

function apply(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t[lang][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
  btn.textContent = lang === "en" ? "RU" : "EN";
  localStorage.setItem("portfolioLang", lang);
}

btn.onclick = () => {
  lang = lang === "en" ? "ru" : "en";
  apply();
};

apply();
