/*global $, jQuery*/

/*scrolling*/

$(".navbar li a").on("click", function (e) {
    "use strict";
    e.preventDefault();
    
    $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    $("html,body").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 70
    }, 1000);
});


/*navbar*/

$(".navbar li .fa-cog").click(function () {
    "use strict";
    var settings = $(".settings");
    if (settings.hasClass("show")) {
        settings.slideDown(500).removeClass("show");
    } else {
        settings.slideUp(500).addClass("show");
    }
});
$(".settings ul li").on("click", function () {
    "use strict";
    $("body").attr("data-change-color", $(this).data("colors"));
    $(".settings").slideUp(500).addClass("show");
});

$(".fa-bars").click(function () {
    "use strict";
    $(".navbar").slideDown(400);
    $(this).css({
        display: "none"
    });
    $(".close-list").css({
        display: "block"
    });
});
$(".close-list").click(function () {
    "use strict";
    $(".navbar").slideUp(400);
    $(this).css({
        display: "none"
    });
    $(".fa-bars").css({
        display: "block"
    });
});
/*home*/

$(".home .master-img .fa-chevron-right").on("click", function () {
    "use strict";
    if ($(".selected-active").is(":last-child")) {
        $(".select-img img").eq(0).click();
    } else {
        $(".selected-active").next().click();
    }
       
});
$(".home .master-img .fa-chevron-left").on("click", function () {
    "use strict";
    if ($(".selected-active").is(":first-child")) {
        $(".select-img img:last").click();
    } else {
        $(".selected-active").prev().click();    
    }
});

$(".home .select-img img").on("click", function () {
    "use strict";
    $(this).addClass("selected-active").siblings().removeClass("selected-active");
    $(".home .master-img img").hide().attr("src", $(this).attr("src")).fadeIn(300);
});

var text = $(".cont-h1 .text").data("text"),
    textLenght = text.length,
    n = 0,
    textType = setInterval(function () {
        "use strict";
        $(".text").each(function () {
            $(this).html($(this).html() + text[n]);
        });
        n = n + 1;
        if (n >= textLenght) {
            clearInterval(textType);
        }
    }, 100);


/*scroll*/

$(window).scroll(function () {
    "use strict";
    $(".hei").each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 71) {
            var hei = $(this).attr('id');
            console.log(hei);
            $(".navbar li a[data-scroll='" + hei + "']").addClass("active").parent().siblings().find("a").removeClass("active");
    
        }
    });
    var toUp = $(".to-up");
    if ($(window).scrollTop() >= 600) {
        if (toUp.is(':hidden')) {
            toUp.slideDown(500);
        }
    } else {
        toUp.fadeOut(1000);
    }
});


/*to up*/

$(".to-up").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html,body").animate({
        scrollTop: -10
    }, 1500);
});

$(".navbar #logo").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html,body").animate({
        scrollTop: -10
    }, 1500);
});

/*pop*/

$('.nth-pop').click(function () {
    "use strict";
    $(".pop").fadeIn(1000);
});

$(".pop").click(function () {
    "use strict";
    $(this).fadeOut(1000);
});

$(".nth-pop").hover(function () {
    "use strict";
    $(".left").animate({
        width : "200px"
    }, 300); 
}, function () {
    "use strict";
    $(".left").animate({
        width : 0
    }, 300);  
});

$(".inner-pop").click(function (e) {
    "use strict";
    e.stopPropagation();
});

$(".close").click(function () {
    "use strict";
    $(".pop").fadeOut(500);
});

$(document).keydown(function (e) {
    "use strict";
    if (e.keyCode === 27) {
        $(".pop").fadeOut(500); 
    }
});

//skills

$(".skills .pro span").each(function () {
    "use strict";
    $(this).animate({
        width: $(this).attr("data-pro") + "%",
        padding : "0 10px"
    }, 1000);
    $(this).text($(this).attr("data-pro") + "%");
});

//services
var zindex = 0;

$(".card").on("click", function card() {
    "use strict";
    $(this).animate({
        left: "20%",
        marginTop: "10px"
    }, 400, function () {
        zindex--;
        $(this).css("z-index", zindex);
    }).animate({left: "50%", marginTop: "0"}
        );
    
});

tasks();
function tasks() {
    "use strict";
    $(".services .Attention").fadeOut(900, function () {
        $(this).fadeIn(900);
        tasks();
    });
}
var newTask = $(".input-task");

$(".add-task").on("submit", function (e) {
    "use strict";
    e.preventDefault();
    if (newTask.val() !== "") {
        $(".tasks ul").append("<li>" + newTask.val() + " <i class='fas fa-times close-task'></i> </li>");
        newTask.val("");
    }
});
$(".tasks ul").on("click", "li", function () {
    "use strict";
    $(this).fadeOut(300, function () {
        $(this).remove();
    });
});
//solutions
function change() {
    "use strict";
    $(".cont-solutions .active").each(function () {
        if (!$(this).is(":last-of-type")) {
            $(this).delay(5000).animate({
                top : "-700px"
            }, 600, function () {
                $(this).removeClass("active").next().addClass("active").animate({
                    top : "0"}, 600);
                change();
            });
            
        } else {
           $(this).delay(5000).animate({
               top :"-700px"
           },600, function(){
                $(this).removeClass("active");
               $(".cont-solutions div").eq(0).addClass("active").animate({
                top :"0"},600);
               change();
           });
        }
    })
};
change();
//products

$(".products .product i").click(function () {
    "use strict";
    $(this).toggleClass("fa-plus fa-minus");
    $(this).next("p").slideToggle();
});

$(".fa-list-ul").click(function () {
    "use strict";
    $(".cont-products").removeClass("grid list").addClass("list");
    $(this).addClass("class-active");
    $(".fa-th-large").removeClass("class-active");
});

$(".fa-th-large").click(function () {
    "use strict";
    $(".cont-products").removeClass("grid list").addClass("grid");
    $(this).addClass("class-active");
    $(".fa-list-ul").removeClass("class-active");
});

//contact 
$(":input[name=pass]").focus(function () {
    $(".pass-mess").text("It can write letters 'A a', symbols '#$' and numbers '12'").delay(3000).fadeOut(500);
})
var attplace = "";
$("[placeholder]").focus(function () {
    attplace = $(this).attr("placeholder");
    $(this).attr("placeholder","");
})
$("[placeholder]").blur(function () {
    $(this).attr("placeholder",attplace);
})

$("[required]").blur(function () {
    if ($(this).val() === "") {
        $(".pass-mess").text("")
        $(this).next("span").text("Please Fill This Field");
        $(this).css({
            border :"2px solid #c60000"
        })
    } else {
       $(this).next("span").text("");
        $(this).css({
            border :"none"
        })
    }
})
$("[required]").keydown(function () {
    if ($(this).val().charCodeAt(0) < 200) {
        $(this).css("direction","ltr")
    } else {
        $(this).css("direction","rtl")
    }
})

// الكلمات الدلاليه

$("textarea").keyup(function (e) {
    var key = e.keyCode;
    if (key === 188){
      var data = $(this).val().slice(0,-1) ;
        $(".cont-word").append("<span class='key-word'> <i class='fa fa-times key-close'></i>" + data + "</span>");
        $(this).val(" ");
    }
})
$(".cont-word").on("click",".key-word .key-close",function(){
    $(this).parent(".key-word").fadeOut(300)
})
$(".fa-eye").click(function () {
    $(":input[name=pass]").attr("type","text");
    $(this).hide(500);
    $(".fa-eye-slash").fadeIn(500)
})
$(".fa-eye-slash").click(function () {
    $(":input[name=pass]").attr("type","password");
    $(this).hide(500);
    $(".fa-eye").fadeIn(500)
})
$(".star").each(function () {
    $(this).css({
       left:$("[required]").width() + 33 + "px"
    })
})
$(".fa-eye,.fa-eye-slash").each(function () {
    $(this).css({
       left:$("[required]").width() + 13 + "px"
    })
})
$(window).resize(function() {
    $(".fa-eye,.fa-eye-slash").each(function () {
        $(this).css({
           left:$("[required]").width() + 13 + "px"
        })
    })
})
$(window).resize(function() {
    $(".star").each(function () {
        $(this).css({
           left:$("[required]").width() + 35 + "px"
        })
    })
})

//loading
$(window).on("load", function () {
    $("body").css("overflow","auto");
    $(".loading").fadeOut(1000, function () {
        $(this).remove();
    });
})

