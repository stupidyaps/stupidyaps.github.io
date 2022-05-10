var contactapp = document.getElementById('contactapp');

var typewriter = new Typewriter(contactapp, {
    loop: true,
    delay: 50,
});

typewriter
    .typeString('<span class="dollar"> Let\'s be acquainted, contact me')
    .pauseFor(2000)
    .deleteChars(31)
    .typeString('I am looking forward with getting to know you')
    .pauseFor(5000)
    .start();
