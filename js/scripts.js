const mian = document.querySelector('.main');

function colorChiange(nameColor) {
    mian.style.backgroundColor = nameColor;
}
const navIcon = document.querySelector('.navIcons');

function navicon(colorName) {
    if (colorName == "blue") {

        navIcon.setAttribute('href', "../images/blue (1).ico");
    } else if (colorName == "blak") {
        navIcon.setAttribute('href', "../images/black.ico");

    }
}
const colorPalet = document.querySelector('.colorPalet');
window.addEventListener('scroll', function() {

    let a = window.innerHeight;

    b = this.document.documentElement.scrollTop * 3;
    let c = 1;

    if (b <= a) {
        c = (a - b) / a;

    } else {
        c = 0;
    }
    colorPalet.style.opacity = c;
})