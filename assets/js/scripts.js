window.onload = function () {
    changeFontColor("header-nav");
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
