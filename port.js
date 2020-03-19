
$(window).scroll(function () {
    var offset = $(document).scrollTop()
    var opacity = 0;
    if (offset <= 0) {
        opacity = 1;
    }
    else if(offset<=90){
        opacity=1;
    }
    else if (offset >= 90 && offset <= 450) {
        opacity = 1-(offset / 450);
    }
    else {
        opacity=0;
    }
    $("#welcome-wrap").css({"opacity": opacity});
});


$(window).scroll(function () {
    var offset = $(document).scrollTop()
    var opacity = 0;
    if (offset <= 300) {
        opacity = 0;
    }
    else if (offset >= 300 && offset <= 700) {
        opacity = (offset / 700)-0.25;
    }
    else {
        opacity=1;
    }
    $(".card-item").css({"opacity": opacity});
});

$(window).scroll(function () {
    var offset = $(document).scrollTop()
    var opacity = 0;
    if (offset <= 700) {
        opacity = 0;
    }
    else if (offset >= 700 && offset <= 1200) {
        opacity = (offset / 1200)-0.35;
    }
    else {
        opacity=1;
    }
    $(".card-item2").css({"opacity": opacity});
});
