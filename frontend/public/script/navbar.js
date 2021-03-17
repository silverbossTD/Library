let header = document.querySelector(".navbar");

window.onscroll = function() {
    if (window.pageYOffset > 600) {
        header.classList.add("bg-light");
        header.classList.add("navbar-light");
        header.classList.remove("navbar-dark");
        document.getElementsByClassName('navbar-brand')[0].style.color = 'black';
    } else {
        document.getElementsByClassName('navbar-brand')[0].style.color = 'white';
        header.classList.remove("bg-light");
        header.classList.remove("navbar-light");
        header.classList.add("navbar-dark");
    }
}
