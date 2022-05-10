var aboutapp = document.getElementById('aboutapp');

var typewriter = new Typewriter(aboutapp, {
    loop: true,
    delay: 50,
});

typewriter
    .typeString('<span class="dollar"> Interested in me now, are you?')
    .pauseFor(2000)
    .deleteChars(30)
    .typeString('Just kidding, you\'re welcome to know more about me.')
    .pauseFor(2000)
    .deleteChars(51)
    .typeString('Welcome!')
    .pauseFor(5000)
    .start();
