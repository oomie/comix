$(document).ready(function(){
    $("img:eq(0)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/louvre1.png");
    });
});

$(document).ready(function(){
    $("img:eq(1)").click(function(){
        $(this).attr("src", "images/louvre2.png");
    });
});

$(document).ready(function(){
    $("img:eq(2)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/louvre3.png");
    });
});

$(document).ready(function(){
    $("img:eq(3)").click(function(){
        // Change src attribute of image
        $(this).attr("src", "images/louvre4.png");
    });
});


AOS.init();
