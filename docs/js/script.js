window.addEventListener('DOMContentLoaded', function () {
    cursorAnimation()
})

const cursorAnimation = () => {
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
        link.addEventListener('mouseover', function () {
            cursor.classList.add('active');
        })
        link.addEventListener('mouseout', function () {
            cursor.classList.remove('active');
        })
    });
}



