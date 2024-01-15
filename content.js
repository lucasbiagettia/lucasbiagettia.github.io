document.addEventListener("DOMContentLoaded", function () {
    var headerH1 = document.querySelector("#header h1");
    if (headerH1) headerH1.textContent = "Lucas Biagetti";

    var headerP = document.querySelector("#header p");
    if (headerP) headerP.textContent = "IA Developer | Cientista de la educación";

    var navElement = document.getElementById("nav");
    if (navElement) {
        var links = navElement.getElementsByTagName("a");
        if (links.length >= 3) {
            links[0].textContent = "Presentación";
            links[1].textContent = "Proyectos";
            links[2].textContent = "Contacto";
        }
    }

    var introSection = document.getElementById("intro");
    if (introSection) {
        document.querySelector("#intro h2").textContent = "Sobre mí";
        document.querySelector("#intro p").textContent = `Cuando era chico, me encantaban las matemáticas, mi materia favorita en la escuela. Siempre buscaba descubrir las regularidades matemáticas en el mundo.\n
        Durante mi adolescencia, mientras participaba de distintas competencias científicas, descubrí que mi verdadera pasión era el pensamiento lógico y analítico.\n
        Al terminar la secundaria empecé a formar estudiantes para participar de las olimpíadas matemáticas, pero honestamente estaba algo desilusionado con el entorno pedagógico que me ofrecieron, por eso decidí estudiar Ciencias de la Educación, primero en Argentina y luego en Italia.\n
        Al regresar de Italia después de completar mi maestría, retomé esas antiguas pasiones y noté que mi nuevo trasfondo en Ciencias Sociales es especialmente útil para potenciar los desarrollos en Inteligencia Artificial.\n
        Actualmente, me dedico profesionalmente a desarrollar software con Inteligencia Artificial y estudio cada día para ser un experto en el tema.`;

        var learnMoreLink = introSection.querySelector(".actions a.button");
        if (learnMoreLink) learnMoreLink.textContent = "Mi Curriculum";
    }

    const projectsData = [
        {
          title: "Proyectoasdas 1",
          iconClass: "icon solid major style1",
          description: "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."
        },
        {
          title: "Proyecto 2",
          iconClass: "icon major style3",
          description: "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."
        },
    ];

    function generateProjectHTML(project) {
        return `
          <li>
            <span class="${project.iconClass}"></span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </li>
        `;
    }
    

    function loadProjects() {
        const projectsList = document.querySelector(".features");
        projectsData.forEach((project) => {
            const projectHTML = generateProjectHTML(project);
            projectsList.innerHTML += projectHTML;
        });
    }

    loadProjects();
});
