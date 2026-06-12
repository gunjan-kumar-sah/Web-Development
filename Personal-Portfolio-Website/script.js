/* ==========================================
   AOS INITIALIZATION
========================================== */

AOS.init({
    duration: 1200,
    once: true
});

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const roles = [
    "Web Developer",
    "Cyber Security Enthusiast",
    "Ethical Hacker",
    "Python Developer",
    "AI Learner"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeWriter() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 100);

    } else {

        setTimeout(eraseText, 2000);

    }
}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeWriter, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});

/* ==========================================
   DARK LIGHT MODE
========================================== */

const themeBtn =
    document.querySelector(".theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const icon =
            themeBtn.querySelector("i");

        if (
            document.body.classList.contains(
                "light-theme"
            )
        ) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    });

}

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn =
    document.createElement("div");

scrollBtn.classList.add("scroll-top");

scrollBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs =
            form.querySelectorAll(
                "input, textarea"
            );

        let valid = true;

        inputs.forEach(input => {

            if (
                input.value.trim() === ""
            ) {

                valid = false;

                input.style.border =
                    "1px solid red";

            } else {

                input.style.border =
                    "1px solid rgba(255,255,255,.1)";
            }

        });

        if (valid) {

            alert(
                "Message sent successfully!"
            );

            form.reset();

        }

    });

}

/* ==========================================
   SKILL ANIMATION
========================================== */

const progressBars =
    document.querySelectorAll(
        ".progress-fill"
    );

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar =
                    entry.target;

                const value =
                    bar.dataset.width;

                bar.style.width =
                    value + "%";

            }

        });

    });

progressBars.forEach(bar => {

    bar.style.width = "0";

    observer.observe(bar);

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
            +counter.getAttribute(
                "data-target"
            );

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(
                    current + increment
                )}`;

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.innerText =
                target;

        }

    };

    updateCounter();

});

/* ==========================================
   PARTICLES JS
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00e5ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        }

    }

});

/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display =
                "none";

        }, 1000);

    }

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(`
=================================
 Portfolio Loaded Successfully
 Developed by Gunjan Kumar Sah
=================================
`);

const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "assets/resume/resume.pdf";

    link.download =
    "Resume.pdf";

    link.click();

});

window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent =
    new Date().getFullYear();

});