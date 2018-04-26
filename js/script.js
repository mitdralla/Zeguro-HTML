$(document).ready(function() {
    $('.nav-icon').click(function() {
        $('body').toggleClass('open');
        $('.nav-icon').toggleClass('open');
    });
    $('.main_menu ul li span').click(function(){
        $(this).closest('li').toggleClass('active');
        $(this).closest('li').siblings().removeClass('active');
        $(this).closest('li').find('ul').slideToggle();
        $(this).closest('li').siblings().find('ul').slideUp();
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


 $('.has-tooltip-top').ariaTooltip({
    responsive: [

      {
        breakpoint: 1,
        position: 'top',
        translateY: -1.75,
        fadeSpeed: 100,
        modifierClass: 'tooltip_top',
        translateX: 0
      },
      {
        breakpoint: 768,
        position: 'top',
        translateY: -1.75,
        fadeSpeed: 100,
        modifierClass: 'tooltip_top',
        translateX: 1
      },
    ]
  });

});



// //v1 all buttons go to contact
// $("button" ).click(function() {
//   window.location = 'contact-us.html';
// });

