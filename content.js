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
          "Siempre fui un apasionado de los números, cuando era chico matemáticas era mi materia favorita y siempre buscaba reglas numéricas que explicaran el mundo." +
          "<br>" +
          "Más tarde, participando de distintas competencias científicas descubrí que lo que en realidad me apasionaba era el pensamiento lógico y analítico." +
          "<br>" +
          "Una vez graduado de la secundaria comencé a formar a aquellos estudiantes que quisieran participar de las olimpíadas matemáticas, pero honestamente estaba algo desilusionado con el entorno pedagógico que me ofrecieron, por eso decidí estudiar Ciencias de la Educación, primero en Argentina y luego en Italia. Esto me permitió dar una perspectiva social al conocimiento científico que había desarrollado hasta entonces." +
          "<br>" +
          "Al regresar de Italia después de completar mi maestría, retomé esas antiguas pasiones y noté que mi nuevo trasfondo era especialmente útil para potenciar los desarrollos en Inteligencia Artificial." +
          "<br>" +
          "Todo esto me trae a la actualidad, donde me dedico profesionalmente a desarrollar software con Inteligencia Artificial y estudio cada día para ser un experto en el tema. Combinando la capacidad de razonamiento matemático que he profundizado toda mi vida y el costado social que es indispensable a la hora de pensar estos trabajos.";
        

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
