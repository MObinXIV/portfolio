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
        title: "E-Commerce API",
        description:
            "Spring Boot backend with JWT authentication, USER and ADMIN roles, a product catalog, cart, and orders with stock validation. CI/CD with GitHub Actions.",
        tech: ["Java 21", "Spring Boot", "JWT", "PostgreSQL", "GitHub Actions"],
        image: "",
        live: "",
        github: "https://github.com/MObinXIV/E-commerce-"
    },
    {
        title: "Real-Time Chat",
        description:
            "WhatsApp-style chat backend with real-time one-to-one messaging over WebSocket and STOMP, media messages, seen and sent states, and Keycloak OAuth2.",
        tech: ["Spring Boot", "WebSocket", "Keycloak", "PostgreSQL", "Docker"],
        image: "",
        live: "",
        github: "https://github.com/MObinXIV/Chat"
    },
    {
        title: "Twitter Clone (Microservices)",
        description:
            "Microservices system with service discovery, event-driven communication, and a containerized local setup.",
        tech: ["Spring Boot", "Eureka", "Kafka", "Feign", "Docker Compose"],
        image: "",
        live: "",
        github: ""
    }
];

/* =========================================================
   2. CONTACT FORM
   The form opens the visitor's email app with the message
   filled in. Put your real email here.
   ========================================================= */
const CONTACT_EMAIL = "mohamedrezqk@gmail.com";

/* ---------------------------------------------------------
   Code below: you normally don't need to edit it.
   --------------------------------------------------------- */
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

function projectMedia(project) {
    const media = el("div", "project-media");

    const showPlaceholder = () => {
        media.replaceChildren();
        media.appendChild(el("div", "project-placeholder", project.title.charAt(0)));
    };

    if (project.image) {
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title + " screenshot";
        img.loading = "lazy";
        img.addEventListener("error", showPlaceholder);
        media.appendChild(img);
    } else {
        showPlaceholder();
    }
    return media;
}

function projectLink(label, url, outline, soonLabel) {
    if (url) {
        const a = el("a", "btn btn-small" + (outline ? " btn-outline" : ""), label);
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        return a;
    }
    const disabled = el("span", "btn btn-small is-disabled", soonLabel);
    disabled.setAttribute("aria-disabled", "true");
    return disabled;
}

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    PROJECTS.forEach((project) => {
        const card = el("article", "project");
        card.appendChild(projectMedia(project));

        const body = el("div", "project-body");
        body.appendChild(el("h3", "", project.title));
        body.appendChild(el("p", "", project.description));

        const tags = el("ul", "tags");
        project.tech.forEach((t) => tags.appendChild(el("li", "", t)));
        body.appendChild(tags);

        const links = el("div", "project-links");
        links.appendChild(projectLink("Live demo", project.live, false, "Live demo: soon"));
        links.appendChild(projectLink("Source code", project.github, true, "Code: soon"));
        body.appendChild(links);

        card.appendChild(body);
        grid.appendChild(card);
    });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const subject = "Portfolio message from " + data.get("name");
        const body = data.get("message") + "\n\n" + data.get("name") + "\n" + data.get("email");
        window.location.href =
            "mailto:" + CONTACT_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    setupContactForm();
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});