
$(function(){

$('a').click(function(e){
    e.preventDefault();
});    


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


// jquery-end-----------------------------
});
















