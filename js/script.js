const words = [
    "Java Developer",
    "Web Developer",
    "Frontend Developer",
    "BCA Final Year Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){
        typing.textContent = currentWord.substring(0,charIndex++);
    }else{
        typing.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = 120;

    if(!isDeleting && charIndex === currentWord.length + 1){
        speed = 1500;
        isDeleting = true;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,speed);
}

typeEffect();

/*================ MOBILE MENU ================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("active");

}

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});

/*================ DARK / LIGHT MODE ================*/

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.onclick = ()=>{

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}

/*================ BACK TO TOP ================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

/*================ ACTIVE NAVBAR =================*/

const sections = document.querySelectorAll("section");
const navLinksActive = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinksActive.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*================ COUNTER =================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                if(count < target){

                    count++;

                    counter.innerText = count;

                    setTimeout(update,80);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));

/*================ LOADER =================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("loader-hide");

    },1500);

});


//================ EMAILJS =================//

window.addEventListener("DOMContentLoaded", function () {

    emailjs.init({
        publicKey: "5WzWldh62Z25MpcZ1",
    });

    const contactForm = document.getElementById("contact-form");

    if(contactForm){

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

            emailjs.sendForm(
                "service_wq09psz",
                "template_i3gt8ds",
                this
            ).then(function(){

                alert("✅ Message Sent Successfully!");

                contactForm.reset();

            }).catch(function(error){

                alert("❌ Failed to send message!");

                console.log(error);

            });

        });

    }

});