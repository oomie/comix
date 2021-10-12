$(document).ready(function(){
    $("img:nth-child(1)").click(function(){
        $(this).attr("src", "images/ferrari1.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(2)").click(function(){
        $(this).attr("src", "images/ferrari2.png");
    });
});

$(document).ready(function(){
    $("img:nth-child(3)").click(function(){
        $(this).attr("src", "images/ferrari3.png");
    });
});

$(document).ready(function(){
    $("img:last-child").click(function(){
        $(this).attr("src", "images/ferrari4.png");
    });
});


AOS.init();
