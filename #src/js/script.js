window.addEventListener('DOMContentLoaded', function () {
    cursorAnimation()
    lottieAnimation()
    addClassToScroll()
    block_2()
})

const cursorAnimation = () => {
    if (window.screen.width > 1024) {
        const mouse_track = document.querySelector('.arrow-page__arrow');
        const cursor_wrapper_rects = document.querySelector('.arrow-page').getClientRects();
        const links = document.querySelectorAll('a, button, input');
        const window_centerpt = {
            x: cursor_wrapper_rects[0].width / 2,
            y: cursor_wrapper_rects[0].height / 2,
        };
        let mouse_x;
        let mouse_y;

        document.addEventListener("mousemove", (e) => {
            mouse_x = e.clientX;
            mouse_y = e.clientY;
            mouse_track.style = `
            transform: translate3d(
            ${mouse_x - 5 - window_centerpt.x}px, 
            ${mouse_y - 5 - window_centerpt.y}px, 
            0px);
            display: flex;`;
        });
        links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                mouse_track.classList.add('active');
            })
            link.addEventListener('mouseleave', function () {
                mouse_track.classList.remove('active');
            })
        });
    }
};

const lottieAnimation = () => {
    let element = document.getElementById('lottie-animation');
    lottie.loadAnimation({
        container: element,
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        path: 'plugins/json/julia.json',
    });
    lottie.setSpeed(0.8);
};

const addClassToScroll = () => {
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
        const elementsPage = document.querySelectorAll('.description, .recommend, .numbers, .block-3, .block-4');
        elementsPage.forEach(el => {
            if (isFullyVisible(el)) {
                el.classList.add('active');
                if (el.classList.contains('block-3') && el.classList.contains('active') && !el.hasAttribute('data-run')) {
                    countingAnim()
                    el.setAttribute('data-run', '')
                }
            }
        });
    }
    function isFullyVisible(el) {
        let topOfElements = el.getBoundingClientRect().top;
        let bottomOfElements = el.getBoundingClientRect().bottom;
        return (((topOfElements <= window.innerHeight) && (bottomOfElements > 0)));
    }
};

const countingAnim = () => {
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + '<span>%</span>';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    const numbers_1 = () => {
        const obj = document.getElementById("1");
        animateValue(obj, 0, 10, 1000);
    }
    numbers_1()

    const numbers_2 = () => {
        const obj = document.getElementById("2");
        setTimeout(animateValue, 700, obj, 0, 7, 700);
    }
    numbers_2()

    const numbers_3 = () => {
        const obj = document.getElementById("3");
        setTimeout(animateValue, 1500, obj, 0, 5, 500);
    }
    numbers_3()

};

const block_2 = () => {
    let description = document.querySelector('.description');
    if (window.innerHeight >= description.getBoundingClientRect().top) {
        description.classList.add('active')
    }
}



