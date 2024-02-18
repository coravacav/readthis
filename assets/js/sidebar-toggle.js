const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarTitle = document.getElementById('sidebar-title');
const sidewaysSidebarTitle = document.getElementById('sideways-sidebar-title');

let sidebarHidden = false;
let previousPositionTop = 0;
let previousPositionRight = 0;

function toggle() {
    sidebar.classList.toggle('ml-[-16rem]');

    const main = document.querySelector('main');
    if (main) {
        main.classList.toggle('lg:ml-80');
        main.classList.toggle('lg:ml-16');
    }

    sidebarToggle.classList.toggle('rotate-180');
    sidebarToggle.setAttribute(
        'aria-label',
        sidebar.classList.contains('sidebar-hidden')
            ? 'Show sidebar'
            : 'Hide sidebar'
    );

    sidebarTitle.classList.toggle('opacity-0');
    sidewaysSidebarTitle.classList.toggle('opacity-0');

    sidebarHidden = !sidebarHidden;
}

sidebarToggle.addEventListener('click', toggle);

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024 && sidebarHidden) {
        toggle();
    }
});
