document.getElementById("toggle-darkmode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const translations = {
    en: {
        "home-title": "Hi, I'm Paulo Possatto, a Back-end Developer",
        "home-desc": "With over 5 years of experience building scalable and efficient backend solutions with Java and Spring Boot.",
        "view-projects": "View My Projects",
        "download-resume": "Download Resume",
        "projects-title": "Projects",
        "about-title": "About Me",
        "experience-title": "Experience",
        "contact-title": "Contact",
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-about": "About Me",
        "nav-experience": "Experience",
        "nav-contact": "Contact",
        "contact-paragraph": "Feel free to reach out through the links below:",
        "card-text-chromamon": "Chromamon is a microservice created to efficiently analyze and generate results of chromatographic analysis on substation transformers. It was build using Java with Spring Boot and Python in the back-end with Angular in the front-end, messaging with RabbitMQ e PostgreSQL for the database.",
        "card-text-fc": "Financial Crime is a microservice responsible for detecting crime-related financial operations to prevent any future acts of civil harm. It utilizes Java with Spring Boot for all the processing and RabbitMQ for messaging between services.",
        "card-ref-fc": "Business Domain Project",
        "card-text-fault": "Using MySQL, MongoDB and Groovy, the Fault Alarm Automation project was created to maximize efficiency with creating alarms related to failures in telecommunication, solving the problem as fast as possible.",
        "card-ref-fault": "Business Domain Project",
        "about-first-paragraph": "I'm a passionate software developer with over 5 years of experience in creating web applications and back-end systems. I specialize in Java development with Spring Boot and enjoy building scalable and efficient systems. I'm always eager to learn new technologies and keep up with the latest trends in the tech industry.",
        "about-second-paragraph": "My journey in technology began when I was 15 years old, when I first encountered Arduino in my robotics class, then later learning about other programming languages, even at studying the electrical engineering. Since then, I have had the opportunity to work on a variety of projects, from microservices architectures to full-stack development, and I am always seeking to improve my skills and deliver high-quality software.",
        "about-third-paragraph": "In addition to my professional skills, I am passionate about problem-solving, working in teams, and continuous learning. I am currently exploring new technologies trending in the IT market and studying new versions of the technologies that I already know.",

        
    },
    es: {
        "home-title": "Hola, soy Paulo Possatto, Desarrollador de Back-end",
        "home-desc": "Con más de 5 años de experiencia construyendo soluciones de backend escalables y eficientes con Java y Spring Boot.",
        "view-projects": "Ver Mis Proyectos",
        "download-resume": "Descargar CV",
        "projects-title": "Proyectos",
        "about-title": "Acerca de",
        "experience-title": "Experiencia",
        "contact-title": "Contacto",
        "nav-home": "Inicio",
        "nav-projects": "Proyectos",
        "nav-about": "Acerca de",
        "nav-contact": "Contacto",
        "nav-experience": "Experiencia",
        "contact-paragraph": "No dudes en contactarme a través de los enlaces abajo:",
        "card-text-chromamon": "Chromamon es un microservicio creado para analizar y generar resultados de análisis cromatográficos en transformadores de subestaciones. Fue construido utilizando Java con Spring Boot y Python en el back-end con Angular en el front-end, mensajería con RabbitMQ y PostgreSQL para la base de datos.",
        "card-text-fc": "Financial Crime es un microservicio responsable de detectar operaciones financieras relacionadas con el crimen para prevenir futuros actos de daño civil. Utiliza Java con Spring Boot para todo el procesamiento y RabbitMQ para la mensajería entre servicios.",
        "card-ref-fc": "Proyecto de Dominio empresarial",
        "card-text-fault": "Utilizando MySQL, MongoDB y Groovy, el proyecto de Automatización de Alarmas de Fallas fue creado para maximizar la eficiencia con la creación de alarmas relacionadas con fallas en telecomunicaciones, resolviendo el problema lo más rápido posible.",
        "card-ref-fault": "Proyecto de Dominio empresarial",
        "about-first-paragraph": "Soy un desarrollador de software apasionado con más de 5 años de experiencia en la creación de aplicaciones web y sistemas back-end. Me especializo en desarrollo Java con Spring Boot y disfruto construyendo sistemas escalables y eficientes. Siempre estoy ansioso por aprender nuevas tecnologías y mantenerme al día con las últimas tendencias en la industria de la tecnología.",
        "about-second-paragraph": "Mi viaje en la tecnología comenzó cuando tenía 15 años, cuando encontré Arduino por primera vez en mi clase de robótica, luego aprendiendo sobre otros lenguajes de programación, incluso estudiando ingeniería eléctrica. Desde entonces, he tenido la oportunidad de trabajar en una variedad de proyectos, desde arquitecturas de microservicios hasta desarrollo full-stack, y siempre estoy buscando mejorar mis habilidades y entregar software de alta calidad.",
        "about-third-paragraph": "Además de mis habilidades profesionales, soy apasionado por la resolución de problemas, trabajar en equipo y el aprendizaje continuo. Actualmente estoy explorando nuevas tecnologías que son tendencia en el mercado de TI y estudiando nuevas versiones de las tecnologías que ya conozco.",        
    }
};

let currentLang = "en";
document.getElementById("toggle-lang").addEventListener("click", function() {
    currentLang = currentLang === "en" ? "es" : "en";
    this.textContent = currentLang === "en" ? "ES" : "EN";
    
    Object.keys(translations[currentLang]).forEach(id => {
        document.getElementById(id).textContent = translations[currentLang][id];
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("toggle-lang");
    const resumeButton = document.getElementById("download-resume");
    let currentLang = "EN";

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "EN" ? "ES" : "EN";
        langToggle.textContent = currentLang === "EN" ? "ES" : "EN";

        resumeButton.href = currentLang === "EN" ? "assets/docs/CV_EN.pdf" : "assets/docs/CV_ES.pdf";
    });
});
