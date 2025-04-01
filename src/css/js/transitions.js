function fadeIn(element) {
    element.style.opacity = 0;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();
        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}

function fadeOut(element, callback) {
    element.style.opacity = 1;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / 400;
        last = +new Date();
        if (+element.style.opacity > 0) {
            requestAnimationFrame(tick);
        } else {
            callback();
        }
    };
    tick();
}

function transitionToPage(newPage) {
    const currentPage = document.querySelector('.current-page');
    fadeOut(currentPage, function() {
        currentPage.classList.remove('current-page');
        newPage.classList.add('current-page');
        fadeIn(newPage);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = document.querySelector(this.getAttribute('href'));
            transitionToPage(targetPage);
        });
    });
});