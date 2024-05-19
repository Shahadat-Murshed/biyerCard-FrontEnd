window.onload = function () {
    changeFontColor("header-nav");
    updateCountdown;
};

window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let headerH1 = document.getElementById("header-h1");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
        header.classList.remove("transparent");
        removeFontColor("header-nav");
        headerH1.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        header.classList.add("transparent");
        changeFontColor("header-nav");
        headerH1.classList.remove("scrolled");
    }
});

function changeFontColor(id) {
    let parentElement = document.getElementById(id);
    let children = parentElement.getElementsByTagName("*");
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("nav-link-color-white");
        children[i].classList.add("nav-link-color");
    }
}
function removeFontColor(id) {
    let parentElement = document.getElementById(id);
    let children = parentElement.getElementsByTagName("*");
    for (var i = 0; i < children.length; i++) {
        children[i].classList.add("nav-link-color-white");
    }
}

function updateCountdown() {
    const countdownDate = new Date("May 31, 2024 08:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysStr = String(days).padStart(2, "0");
    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");

    document.getElementById("days-1").innerText = daysStr[0];
    document.getElementById("days-2").innerText = daysStr[1];
    document.getElementById("hours-1").innerText = hoursStr[0];
    document.getElementById("hours-2").innerText = hoursStr[1];
    document.getElementById("minutes-1").innerText = minutesStr[0];
    document.getElementById("minutes-2").innerText = minutesStr[1];
    document.getElementById("seconds-1").innerText = secondsStr[0];
    document.getElementById("seconds-2").innerText = secondsStr[1];

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "The Wedding Has Begun!";
    }
}

const interval = setInterval(updateCountdown, 1000);
