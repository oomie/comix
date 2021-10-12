$(document).ready(function(){
    $("img:first").click(function(){
        $(this).attr("src", "images/ferrari1.png");
    });
});

$(document).ready(function(){
    $("img:eq(1)").click(function(){
        $(this).attr("src", "images/ferrari2.png");
    });
});

$(document).ready(function(){
    $("img:eq(2)").click(function(){
        $(this).attr("src", "images/ferrari3.png");
    });
});

$(document).ready(function(){
    $("img:eq(3)").click(function(){
        $(this).attr("src", "images/ferrari4.png");
    });
});

var sound = new Howl({
  src: ['sounds/suspense.mp3']
});

playBtn1.addEventListener('click', function() {
sound.play();
});

var sound2 = new Howl({
  src: ['sounds/heavenly.mp3']
});

playBtn2.addEventListener('click', function() {
sound2.play();
});

var sound4 = new Howl({
  src: ['sounds/sparkle.mp3']
});

playBtn4.addEventListener('click', function() {
sound4.play();
});

AOS.init();
