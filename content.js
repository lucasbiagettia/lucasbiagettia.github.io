// document.addEventListener("DOMContentLoaded", function () {
//     var headerH1 = document.querySelector("#header h1");
//     if (headerH1) headerH1.textContent = "Lucas Biagetti";

//     var headerP = document.querySelector("#header p");
//     if (headerP) headerP.textContent = "IA Developer | Cientista de la educación";

//     var navElement = document.getElementById("nav");
//     if (navElement) {
//         var links = navElement.getElementsByTagName("a");
//         if (links.length >= 3) {
//             links[0].textContent = "Presentación";
//             links[1].textContent = "Proyectos";
//             links[2].textContent = "Contacto";
//         }
//     }

//     var introSection = document.getElementById("intro");
//     if (introSection) {
//         document.querySelector("#intro h2").textContent = "Nuevo Título de Introducción";
//         document.querySelector("#intro p").textContent = "Nuevo texto para la introducción.";

//         var learnMoreLink = introSection.querySelector(".actions a.button");
//         if (learnMoreLink) learnMoreLink.textContent = "Mi Curriculum";
//     }


//     const projectsData = [
//         {
//           title: "Proyecto 1",
//           iconClass: "fa-code",
//           description: "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."
//         },
//         {
//           title: "Proyecto 2",
//           iconClass: "fa-copy",
//           description: "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."
//         },
//         // Agrega más proyectos según sea necesario
//       ];
      
//       function generateProjectHTML(project) {
//         return `
//           <li>
//             <span class="icon solid major style1 fa-${project.iconClass}"></span>
//             <h3>${project.title}</h3>
//             <p>${project.description}</p>
//           </li>
//         `;
//       }
      
//       function loadProjects() {
//         const projectsList = document.querySelector(".features");
//         projectsData.forEach((project) => {
//           const projectHTML = generateProjectHTML(project);
//           projectsList.innerHTML += projectHTML;
//         });
//       }

//     loadProjects()
//     // var projectsSection = document.getElementById("projects");
//     // if (projectsSection) {
//     //     document.querySelector("#projects h2").textContent = "Nuevo Título de Proyectos";

//     //     var project1 = document.querySelector("#projects li:nth-child(1)");
//     //     if (project1) {
//     //         project1.querySelector("h3").textContent = "Nuevo Título del Proyecto 1";
//     //         project1.querySelector("p").textContent = "Nuevo texto para el Proyecto 1.";
//     //     }

//     //     var project2 = document.querySelector("#projects li:nth-child(2)");
//     //     if (project2) {
//     //         project2.querySelector("h3").textContent = "Nuevo Título del Proyecto 2";
//     //         project2.querySelector("p").textContent = "Nuevo texto para el Proyecto 2.";
//     //     }
//     // }
// });


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
        document.querySelector("#intro h2").textContent = "Nuevo Título de Introducción";
        document.querySelector("#intro p").textContent = "Nuevo texto para la introducción.";

        var learnMoreLink = introSection.querySelector(".actions a.button");
        if (learnMoreLink) learnMoreLink.textContent = "Mi Curriculum";
    }

    const projectsData = [
        {
          title: "Proyectoasdas 1",
          iconClass: "icon solid major style1 fa-code",
          description: "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."
        },
        {
          title: "Proyecto 2",
          iconClass: "icon major style3 fa-copy",
          description: "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."
        },
        // Agrega más proyectos según sea necesario
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
