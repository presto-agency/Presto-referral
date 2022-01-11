window.addEventListener('DOMContentLoaded', function () {
    cursorAnimation()
})

const cursorAnimation = () => {
    if (document.documentElement.clientWidth > 1024) {
        const cursor = document.querySelector('.block-1__arrow');
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



