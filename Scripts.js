document.addEventListener('DOMContentLoaded', () => {
    const scrollDown = document.querySelector('.scroll-down');

    scrollDown.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('#about').offsetTop,
            behavior: 'smooth'
        });
    });
});
