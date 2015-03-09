$(document).ready(function(){
 $("li").hover(function(){
 $(this).addClass("active");
 },function(){
 $(this).removeClass("active");
 });
});


$(document).ready(function(){
$('li').on('click',function(){
$('li').removeClass('selected');
    $(this).addClass('selected');

});

});