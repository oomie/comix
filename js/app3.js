$(document).ready(function(){
    $("img:first-child").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/louvre1.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(2)").click(function(){
        $(this).attr("src", "images/louvre2.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(3)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/louvre3.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(4)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/louvre4.png");
    });
});


AOS.init();
