/* =========================================================
   1. YOUR PROJECTS
   Add, edit, or remove objects in this list. Nothing else
   needs to change.

   - image:  path to a screenshot, e.g. "images/projects/shop.png".
             Leave "" for a placeholder. If the file is missing,
             the placeholder is shown automatically.
   - live:   link to the deployed app. Leave "" until it is live
             (the button shows as "Live demo: soon").
   - github: link to the repository. Leave "" to disable it.
   ========================================================= */
const PROJECTS = [
    {
        title: "Book Social Network",
        description:
            "A full-stack book-sharing app for building personal bookshelves, lending books, and leaving feedback. The Angular client and Spring Boot API are still in development.",
        tech: ["Angular 20", "Java 21", "Spring Boot", "PostgreSQL", "Docker"],
        status: "In progress",
        statusClass: "is-progress",
        github: "https://github.com/MObinXIV/bookSocialNetwork"
    },
    {
        title: "E-Commerce Microservices",
        description:
            "A Java/Spring Boot backend split into services, with an API gateway, service discovery, and Kafka events. The current setup is still being tested.",
        tech: ["Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "MongoDB"],
        status: "In testing",
        statusClass: "is-testing",
        github: "https://github.com/MObinXIV/e-commerceMicroservices"
    },
    {
        title: "ChattingAPP",
        description:
            "A Spring Boot messaging backend with one-to-one chats, real-time STOMP/WebSocket messaging, media sharing, read states, and Keycloak authentication.",
        tech: ["Java 21", "Spring Boot", "WebSocket", "Keycloak", "PostgreSQL"],
        status: "Backend project",
        statusClass: "is-backend",
        github: "https://github.com/MObinXIV/ChattingAPP"
    }
];

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function projectLink(project) {
    const link = el("a", "project-link", "View source code");
    link.href = project.github;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "View " + project.title + " source code on GitHub");
    link.appendChild(el("span", "", "↗"));
    return link;
}

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    PROJECTS.forEach((project, index) => {
        const card = el("article", "project");
        const topline = el("div", "project-topline");
        topline.appendChild(el("span", "project-number", "PROJECT 0" + (index + 1)));
        topline.appendChild(el("span", "project-status " + project.statusClass, project.status));
        card.appendChild(topline);
        card.appendChild(el("h3", "", project.title));
        card.appendChild(el("p", "project-description", project.description));

        const tags = el("ul", "tags");
        tags.className = "project-tags";
        tags.setAttribute("aria-label", "Technologies used for " + project.title);
        project.tech.forEach((t) => tags.appendChild(el("li", "", t)));
        card.appendChild(tags);
        card.appendChild(projectLink(project));
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});