function bigImg(x) {
    x.style.height = "900px";
    x.style.width = "506px";
}

function smImg(x) {
    x.style.height = "180px";
    x.style.width = "100px";
}

$(".logo").hover(function(){
    $(this).animate({ marginLeft: "80px" });
    }, function() {
    $(this).animate({ marginLeft: "22%" });
});

$( "h1" ).click(function() {
  $( "h1" ).slideToggle( "slow" );
});