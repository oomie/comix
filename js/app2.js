$(document).ready(function(){
    $("img:first-child").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/ferrari1.png");
    });
});

var text = new Howl({
  src: ['sounds/sparkle.mp3'],
  html5: true
});

$("img:nth-child(2)").click(function(){
  text.play();

$(document).ready(function(){
    $("img:nth-child(2)").click(function(){
        $(this).attr("src", "images/ferrari2.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(3)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/ferrari3.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(4)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/ferrari4.png");
    });
});


AOS.init();
