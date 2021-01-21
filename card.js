
// INSERT JS HERE
$('.card').tilt({
    glare: true,
    maxGlare: .7,
})

$(window).scroll(function() {
    $('.text').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideExpandUp");
        }
    });
    $('.card').each(function(){
        var imagePos = $(this).offset().top;
    
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("slideExpandUp");
            }
        });
    $('.about-personal-photo').each(function(){
        var imagePos = $(this).offset().top;
    
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("bigEntrance");
            }
        });

    $('.skills-list li').each(function(){
        var imagePos = $(this).offset().top;
    
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                    $(this).addClass("slideRight");
            }
        });
});

$('#contact-link').click(function() {
    $('#contact-form').addClass("slideDown");
});


$('#close-link').click(function() {
    $('#contact-form').removeClass("slideDown");
});

$('.project').tilt({
    glare: true,
    maxGlare: .5
})
