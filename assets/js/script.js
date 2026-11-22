const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(
            `.navbar-floating a[href="#${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    });
}, {
    rootMargin: "-2% 0px -98% 0px"
});

document.querySelectorAll("section[id]").forEach(section => {
    observer.observe(section);
});

const navbar = document.querySelector(".navbar-floating");
let idleTimer;

navbar.addEventListener("click", (event) => {
    const isCompact = navbar.classList.contains("compact");

    if (isCompact) {
        event.preventDefault();
        navbar.classList.remove("compact");
    }

    clearTimeout(idleTimer);

    idleTimer = setTimeout(() => {
        navbar.classList.add("compact");
    }, 3000);
});

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click",(e) => {
e.preventDefault();
const icon = themeBtn.querySelector("svg");
if (icon.getAttribute("data-lucide") === "moon") {
    icon.setAttribute("data-lucide","sun");
    themeBtn.setAttribute("data-label","Light Mode");
    document.body.classList.remove("dark");
} else {
    icon.setAttribute("data-lucide","moon");
    themeBtn.setAttribute("data-label","Dark Mode");
    document.body.classList.add("dark");
}
lucide.createIcons();
});

const button = document.getElementById("scrollBtn");
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 20) {
        button.classList.add("active");
    }
    else {
        button.classList.remove("active");
    }
});
button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const element = document.getElementById("typing");

const typeWriter = (typeElement,teks) => {
let index = 0;
const typing = () => {
if (index < teks.length) {
    typeElement.textContent += teks[index];
    index++;
    setTimeout(typing,200);
}
};
typing();
}
typeWriter(element,"Berland Prastiyo");
const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } 
    });
});
const rights = document.querySelectorAll(".right");
rights.forEach((right) => {
observe.observe(right);
});
const lefts = document.querySelectorAll(".left");
lefts.forEach((left)=> {
observe.observe(left);
});

const bottoms = document.querySelectorAll(".bottom");
bottoms.forEach((bottom)=>{
observe.observe(bottom);
});