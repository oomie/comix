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

AOS.init();
