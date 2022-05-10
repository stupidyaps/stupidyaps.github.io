var aboutappend = document.getElementById('aboutappend');

var typewriter = new Typewriter(aboutappend, {
    loop: true,
    delay: 50,
});

typewriter
    .typeString('<span class="dollar"> Now that you know some about me, why don\'t you let me know some about you? Contact me ')
    .pauseFor(2000)
    .typeString('😉')
    .pauseFor(3000)
    .start();
