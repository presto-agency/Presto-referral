window.addEventListener('DOMContentLoaded', function () {
    cursorAnimation()
    lottieAnimation()
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
            0px);`;
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
}

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
}



