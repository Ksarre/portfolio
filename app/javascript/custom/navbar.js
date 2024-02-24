
function debounce(callback, delay) {
    let timer

    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
        callback();
        }, delay);
    }
}

function throttle(callback, interval) {
    let lastTime = 0;

    return function() {
        const now = Date.now();

        if (now - lastTime >= interval) {
            callback();
            lastTime = now;
        }
    };
}

const navbarScroll = throttle(() => {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    console.log(`${window.scrollY}-${sticky}`);
    if (window.scrollY >= 50) {
    navbar.classList.add("sticky");
    } else {
    navbar.classList.remove("sticky");
    }}, 500);

window.onscroll = navbarScroll

export {navbarScroll}