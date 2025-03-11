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
        "li1-huxley-info": "Work on creating/updating back-end services",
        "li2-huxley-info": "Participated in code reviews and production deployment runs",
        "li3-huxley-info": "Created documentation for new and already existing functionalities",
        "li1-ad4-info": "Participated in pipeline runs",
        "li2-ad4-info": "Improved application response times",
        "li3-ad4-info": "Generated messaging topics to communicate between services",
        "li1-ntt-info": "Collaborated with international teams to create new functionalities",
        "li2-ntt-info": "Worked with creating test cases and classes with API Calls and event-driven services",
        "li3-ntt-info": "Modified existing batch processing for better efficiency",
        "li1-ts-info": "Worked on creating new functionalities and maintaining existing methods",
        "li2-ts-info": "Generated test cases for pipeline runs",
        "li3-ts-info": "Created various scenarios for manual and automated testing",
        "li1-ms-info": "Worked on large-scale applications with Java and Spring Framework",
        "li2-ms-info": "Created automation tools used in large scale",
        "li3-ms-info": "Created UI and new functionalities",
        "li1-moto-info": "Verified modifications after new OS update releases",
        "li2-moto-info": "Reviewed code with a multinationality team",
        "li3-moto-info": "Created large scale tool from the beginning",
    },
    es: {
        "home-title": "Hola, soy Paulo Possatto, Desarrollador de Back-end",
        "home-desc": "Con más de 5 años de experiencia construyendo soluciones de backend escalables y eficientes con Java y Spring Boot.",
        "view-projects": "Ver Mis Proyectos",
        "download-resume": "Descargar CV",
        "projects-title": "Proyectos",
        "about-title": "Acerca de mí",
        "experience-title": "Experiencia",
        "contact-title": "Contacto",
        "nav-home": "Inicio",
        "nav-projects": "Proyectos",
        "nav-about": "Acerca de mí",
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
        "li1-huxley-info": "Trabajar en la creación/actualización de servicios back-end",
        "li2-huxley-info": "Participar en revisiones de código y ejecuciones de implementación en producción",
        "li3-huxley-info": "Crear documentación para nuevas y ya existentes funcionalidades",
        "li1-ad4-info": "Participación en despligue de proyectos",
        "li2-ad4-info": "Mejora de tiempos de respuesta de la aplicación",
        "li3-ad4-info": "Generación de temas de mensajería para comunicación entre servicios",
        "li1-ntt-info": "Colaboración con equipos internacionales para crear nuevas funcionalidades",
        "li2-ntt-info": "Trabajar con la creación de casos de prueba y clases con llamadas API y servicios basados en eventos",
        "li3-ntt-info": "Modificación de procesamiento por lotes existente para una mejor eficiencia",
        "li1-ts-info": "Trabajar en la creación de nuevas funcionalidades y mantenimiento de métodos existentes",
        "li2-ts-info": "Generación de casos de prueba para ejecución de despliegues",
        "li3-ts-info": "Creación de varios escenarios para pruebas manuales y automatizadas",
        "li1-ms-info": "Trabajar en aplicaciones a gran escala con Java y Spring Framework",
        "li2-ms-info": "Crear herramientas de automatización utilizadas a gran escala",
        "li3-ms-info": "Crear UI y nuevas funcionalidades",
        "li1-moto-info": "Verificación de modificaciones después de nuevas versiones del OS",
        "li2-moto-info": "Revisión de código con un equipo multinacional",
        "li3-moto-info": "Creación de herramienta a gran escala desde el principio",
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
        langToggle.textContent = currentLang === "EN" ? "🇪🇸" : "🇬🇧";

        resumeButton.href = currentLang === "EN" ? "assets/docs/CV_EN.pdf" : "assets/docs/CV_ES.pdf";
    });
});
