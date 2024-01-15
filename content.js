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
        document.querySelector("#intro p").innerHTML =
          "Cuando era chico, me encantaban las matemáticas, mi materia favorita en la escuela. Siempre buscaba descubrir las regularidades matemáticas en el mundo.<br>" +
          "Durante mi adolescencia, mientras participaba de distintas competencias científicas, descubrí que mi verdadera pasión era el pensamiento lógico y analítico.<br>" +
          "Al terminar la secundaria empecé a formar estudiantes para participar de las olimpíadas matemáticas, pero honestamente estaba algo desilusionado con el entorno pedagógico que me ofrecieron, por eso decidí estudiar Ciencias de la Educación, primero en Argentina y luego en Italia.<br>" +
          "Al regresar de Italia después de completar mi maestría, retomé esas antiguas pasiones y noté que mi nuevo trasfondo en Ciencias Sociales es especialmente útil para potenciar los desarrollos en Inteligencia Artificial.<br>" +
          "Actualmente, me dedico profesionalmente a desarrollar software con Inteligencia Artificial y estudio cada día para ser un experto en el tema.";


        var learnMoreLink = introSection.querySelector(".actions a.button");
        if (learnMoreLink) learnMoreLink.textContent = "Mi Curriculum";
    }

    const projectsData = [
        {
          title: "Borges Bot",
          urlImage: "images/borges.png",
          description: "Una app de IA que transforma la obra de Borges en una experiencia lúdica y literaria, invitando a una 'escritura colaborativa' frase a frase. Aunque las máquinas no pueden replicar la profundidad humana, la app juega con los clásicos, desafiando la sensibilidad poética en un baile de palabras. Explora temas clave de Borges para la inteligencia artificial",
          link: "https://borgesbot.streamlit.app/"
        },
        {
          title: "Cripto verbal",
          urlImage: "images/guessTheWordGame.jpeg",
          description: "Una aplicación desafiante que pone a prueba tu astucia lingüística. Utiliza modelos BERT para adivinar palabras ocultas, comparando embeddings y acumulando puntos con cada acierto. Un juego que va más allá de las adivinanzas convencionales, ofreciendo un desafío profundo basado en la tecnología de vanguardia.",
          link: "https://guessthewordgame.streamlit.app/"
        },
    ];

    function generateProjectHTML(project) {
        return `
          <li>
            <img src="${project.urlImage}"></img>
            <h3>${project.title}</h3>
            <p class="desc">${project.description}</p>
            <a href="${project.link}" target="_blank">ver online</a>
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
// Factorial function
