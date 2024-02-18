const html = document.querySelector('html');
let btn, moon, sun;

const themeFromLS = localStorage.getItem('theme');
const themeFromHugo = html.classList.contains('dark') ? 'dark' : null;
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo;

function enableElement(element) {
    element.classList.add('opacity-100');
    element.classList.remove('opacity-0');
}

function disableElement(element) {
    element.classList.add('opacity-0');
    element.classList.remove('opacity-100');
}

function enableDarkMode() {
    html.classList.add('dark');
    enableElement(sun);
    disableElement(moon);
}

function enableLightMode() {
    html.classList.remove('dark');
    enableElement(moon);
    disableElement(sun);
}

if (currentTheme == 'dark') {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

setTimeout(() => {
    btn = document.getElementById('btn-light-dark');
    moon = document.getElementById('moon');
    sun = document.getElementById('sun');

    if (currentTheme == 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    btn.addEventListener('click', function () {
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'light');
            enableLightMode();
        } else {
            localStorage.setItem('theme', 'dark');
            enableDarkMode();
        }
    });
}, 100);
