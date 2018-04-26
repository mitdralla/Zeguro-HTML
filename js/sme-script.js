$(document).ready(function() {
    $(window).scroll(function(e){
        toggleBlk2();
        toggleBlk3();
    })
    function toggleBlk2(){
        var offset1 = $('.blk2').offset().top;
        if( $(window).scrollTop() > offset1-400 )
            {
                $('.blk2').addClass('active');
            }
        else{
            //$('.blk2').removeClass('active');
        }
    }
    function toggleBlk3(){
        var offset1 = $('.blk3').offset().top;
        if( $(window).scrollTop() > offset1-300 )
            {
                $('.blk3').addClass('active');
            }
        else{
            //$('.blk3').removeClass('active');
        }
    }
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();

};

// Get the navbar
var navbar = document.getElementById("nav_wrapper");


// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}