var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 50,
});

typewriter
    .typeString('<span class="dollar"> Hi! ')
    .pauseFor(700)
    .typeString('What\'s up?')
    .pauseFor(700)
    .typeString(' I\'m <b>Rafael Yapchiongco</b>')
    .pauseFor(2000)
    .typeString('<br><span class="dollar"> An aspiring "Full Stack" Developer</span>')
    .pauseFor(500)
    .deleteChars(22)
    .typeString('Network Administrator')
    .pauseFor(500)
    .deleteChars(21)
    .typeString('Database Administrator')
    .pauseFor(500)
    .deleteChars(22)
    .typeString('expert in the field of information technology.')
    .pauseFor(2500)
    .typeString('😃')
    .pauseFor(1000)
    .typeString('<br><span class="dollar"> Currently a 3rd Year BS - IT Student</span>')
    .pauseFor(1000)
    .typeString('<br><span class="dollar"> Welcome to my Portfolio Site </span><br><span class="dollar">')
    .pauseFor(2500)
    .typeString('<br><span class="dollar"> You can also find me online here:</span>')
    .pauseFor(1000)
    .typeString('<br><span class="dollar"> ./other-sites</span><br>')
    .pauseFor(500)
    .typeString('<br><a href="https://www.linkedin.com/in/rafael-yapchiongco/" target="_blank"><span class="gt"> LinkedIn</a>')
    .typeString('<br><a href="https://github.com/stupidyaps/" target="_blank"><span class="gt"> Github</a>')
    .typeString('<br><a href="https://www.facebook.com/JR.Yapchiongco/" target="_blank"><span class="gt"> Facebook</a>')
    .typeString('<br><a href="https://twitter.com/Yapshiii" target="_blank"><span class="gt"> Twitter</a>')
    .start();
