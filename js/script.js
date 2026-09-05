const words = [
    "BCA Final Year Student",
    "Web Developer",
    "Frontend Developer",
    "Learning Full Stack Development"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/*================ MOBILE MENU ================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.onclick = () => {
        navbar.classList.toggle("active");
    };

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });

    });

}

/*================ DARK / LIGHT MODE =================*/

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");
    const header = document.querySelector(".header");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        header.style.background = window.scrollY > 50
            ? "rgba(255,255,255,.95)"
            : "rgba(255,255,255,.85)";

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        header.style.background = window.scrollY > 50
            ? "rgba(15,23,42,.92)"
            : "rgba(15,23,42,.75)";

    }

};
/*================ ACTIVE NAVBAR =================*/

const sections = document.querySelectorAll("section");
const navLinksActive = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinksActive.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*================ COUNTER =================*/

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let count = 0;

                const update = () => {

                    if (count < target) {

                        count++;

                        counter.innerText = count;

                        setTimeout(update, 80);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                update();

                counterObserver.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

}

/*================ LOADER =================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hide");

        }, 1500);

    }

});


/*================ EMAILJS =================*/

window.addEventListener("DOMContentLoaded", function () {

    if (typeof emailjs === "undefined") {
        console.error("EmailJS library is not loaded.");
        return;
    }

    emailjs.init({
        publicKey: "5WzWldh62Z25MpcZ1"
    });

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.sendForm(
                "service_wq09psz",
                "template_i3gt8ds",
                this
            )
            .then(function () {

                alert("✅ Message Sent Successfully!");

                contactForm.reset();

            })
            .catch(function (error) {

                alert("❌ Failed to send message!");

                console.error(error);

            });

        });

    }

});


/*================ HEADER SCROLL =================*/

window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(document.body.classList.contains("light")){

        if(window.scrollY > 50){

            header.style.background = "rgba(255,255,255,.95)";

        }else{

            header.style.background = "rgba(255,255,255,.85)";

        }

    }else{

        if(window.scrollY > 50){

            header.style.background = "rgba(15,23,42,.92)";

        }else{

            header.style.background = "rgba(15,23,42,.75)";

        }

    }

});

/*================ SCROLL PROGRESS =================*/

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});


/*================ BACK TO TOP =================*/

document.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) {
        console.log("Back To Top button not found!");
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 200) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});