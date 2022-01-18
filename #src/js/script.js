window.addEventListener('DOMContentLoaded', function () {
    cursorAnimation()
    lottieAnimation()
})

const cursorAnimation = () => {
    if (document.documentElement.clientWidth > 1024) {
        const cursor = document.querySelector('.arrow-page');
        const block = window;
        let links = document.querySelectorAll('a');

        block.addEventListener('mouseover', function (e) {
            cursor.style.display = 'block';
            block.addEventListener('mousemove', cMove, false);
            function cMove(e) {
                cursor.style.left = e.pageX + 'px';
                cursor.style.top = e.pageY + 'px';
            }
        }, false);

        links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                cursor.classList.add('active');
            })
            link.addEventListener('mouseleave', function () {
                cursor.classList.remove('active');
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



