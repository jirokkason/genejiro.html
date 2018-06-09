$(window).on("load",function(){
 $("li").on("click",function(){
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".tab div").hide();
    $("." + this.id).show();
 });
});