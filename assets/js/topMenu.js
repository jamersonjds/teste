function openMenu() {
    document.querySelector(".navegation").style.width = "100%";
}
function closeMenu() {
    document.querySelector(".navegation").style.width = "0";
}

const menuLinks = document.querySelectorAll(".navegation ul li a");

function getDistance(e) {
    const id = e.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scroll(distance) {
    window.scrollTo({
        top: distance,
        behavior: "smooth",
    });
}

function scrollToSection(e) {
    e.preventDefault();

    document.querySelector(".navegation").style.width = "0";

    const distanceTop = getDistance(e.target) - 90;
    scroll(distanceTop);
}

menuLinks.forEach((l) => {
    l.addEventListener("click", scrollToSection);
});
