const t={
en:{
nav_about:"About",nav_work:"Work",nav_skills:"Skills",nav_contact:"Contact",
hero_text:"I create game concepts, mechanics, stories, worlds and visual experiences — from the first idea to a clear playable vision.",
view_work:"View my work",contact_me:"Contact me ↗",
about_label:"ABOUT",about_title:"A designer who<br><em>builds worlds.</em>",
about_p1:"I'm Kazybek, a game and creative designer focused on turning ideas into structured concepts, mechanics and experiences.",
about_p2:"I work with game design, narrative design, worldbuilding and visual design. I also develop my own game projects and fictional universes.",
available:"Available for work",available_desc:"Open to projects, collaborations and creative opportunities.",
work_label:"SELECTED WORK",work_intro:"A selection of concepts and creative projects. More work will be added over time.",
lonelands_desc:"A post-nuclear survival game set in a harsh version of the Kazakh steppe. Exploration, factions, resources and atmosphere drive the experience.",
role:"ROLE",focus:"FOCUS",case_study:"View case study →",
ilsons_title:"Between Worlds: The Ilsons",ilsons_desc:"A family story built around parallel worlds, portals, identity and the consequences of experiments.",
visual_title:"Visual Design",visual_desc:"Product cards, infographics, banners and other visual concepts for digital projects.",
coming:"More projects are coming.",skills_label:"CAPABILITIES",skills_title:"What I<br><em>do.</em>",tools_label:"TOOLS",
contact_title:"Have an idea?<br><em>Let's talk.</em>",contact_text:"I'm open to game projects, creative work, collaborations and new opportunities.",footer:"From idea to reality."
},
ru:{
nav_about:"Обо мне",nav_work:"Работы",nav_skills:"Навыки",nav_contact:"Контакты",
hero_text:"Создаю игровые концепции, механики, истории, миры и визуальные проекты — от первой идеи до понятного игрового видения.",
view_work:"Смотреть работы",contact_me:"Связаться ↗",
about_label:"ОБО МНЕ",about_title:"Дизайнер, который<br><em>создаёт миры.</em>",
about_p1:"Я Казыбек — геймдизайнер и креативный дизайнер, превращающий идеи в структурированные концепции, механики и игровые впечатления.",
about_p2:"Работаю с геймдизайном, нарративным дизайном, миростроением и визуальным дизайном. Также развиваю собственные игровые проекты и вымышленные вселенные.",
available:"Открыт к работе",available_desc:"Открыт к проектам, сотрудничеству и новым творческим возможностям.",
work_label:"ИЗБРАННЫЕ РАБОТЫ",work_intro:"Подборка концепций и творческих проектов. Новые работы будут добавляться со временем.",
lonelands_desc:"Постъядерная survival-игра в суровой версии казахской степи. Исследование, фракции, ресурсы и атмосфера — основа игрового опыта.",
role:"РОЛЬ",focus:"ФОКУС",case_study:"Открыть кейс →",
ilsons_title:"Между мирами: Илсоны",ilsons_desc:"Семейная история о параллельных мирах, порталах, личности и последствиях экспериментов.",
visual_title:"Визуальный дизайн",visual_desc:"Карточки товаров, инфографика, баннеры и другие визуальные концепции для цифровых проектов.",
coming:"Новые проекты скоро появятся.",skills_label:"ВОЗМОЖНОСТИ",skills_title:"Что я<br><em>делаю.</em>",tools_label:"ИНСТРУМЕНТЫ",
contact_title:"Есть идея?<br><em>Давайте обсудим.</em>",contact_text:"Открыт к игровым проектам, креативной работе, сотрудничеству и новым возможностям.",footer:"Из идеи — в реальность."
}};
let lang=localStorage.getItem("portfolioLang")||"en";
const btn=document.getElementById("langToggle");
function apply(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(e=>{const v=t[lang][e.dataset.i18n];if(v)e.innerHTML=v});btn.textContent=lang==="en"?"RU":"EN";localStorage.setItem("portfolioLang",lang)}
btn.onclick=()=>{lang=lang==="en"?"ru":"en";apply()};apply();