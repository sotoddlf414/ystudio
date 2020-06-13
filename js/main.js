

$(function(){
// a preventDefault----------------------------------

// $('a').click(function(e){
//     e.preventDefault();
// });    

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// a preventDefault-end----------------------------------   


// GNB-MENU
// Menu-open----------------------------------------------------------------------
$('.openGnb').click(function(){
    $('.gnbMenu').addClass('on');
});
// Menu-close----------------------------------------------------------------------
$('.gnbClose, section').click(function(){
    $('.gnbMenu').removeClass('on');
});
// GNB-MENU-end----------------------------------------------------------------------


//Header-scroll-background-effect-------------------------------------------------------------------
var Y_position = 0;

$(window).scroll(function(){
    Y_position = $(window).scrollTop();
    if(Y_position>=130){
        $('header').addClass('on');
    }
    else{
        $('header').removeClass('on');
    }
})
//Header-scroll-effect-end-------------------------------------------------------------------


// scrolla plug-in apply--------------------------------------
$('.animate').scrolla({
      mobile: false
    });
// scrolla plug-in apply-end-------------------------------------


// slick plug-in apply--------------------------------------
$('.slide').slick({
    arrow:true,
    fade:true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
// slick plug-in apply-end--------------------------------------



// arrow-up-slow-move-effect
$('.goTop').click(function(){
     $('html').animate( {scrollTop : 0}, 600 );
});
// arrow-up-slow-move-effect-end


// jquery-end-----------------------------
});















