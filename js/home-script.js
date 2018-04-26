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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
    toggleSecurityOpacity();
    toggleCustomerOpacity();
    toggleEmployeeOpacity();
    toggleInsuranceOpacity();
};

// Get the navbar
var navbar = document.getElementById("nav_wrapper");
var security_opacity = document.getElementById("security");
var customer_opacity = document.getElementById("customer");
var employee_opacity = document.getElementById("employee");
var insurance_opacity = document.getElementById("insurance");

var security_circle = document.getElementById("security_circle");
var customer_circle = document.getElementById("customer_circle");
var employee_circle = document.getElementById("employee_circle");
var insurance_circle = document.getElementById("insurance_circle");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var security = security_opacity.offsetTop;
var customer = customer_opacity.offsetTop;
var employee = employee_opacity.offsetTop;
var insurance = insurance_opacity.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function toggleSecurityOpacity() {
    if (window.pageYOffset >= security -400) {
        security_opacity.classList.add("opacity");
        security_circle.classList.add("opacity");
        security_circle.classList.add("circles_colored");
    } else {
        security_opacity.classList.remove("opacity");
        security_circle.classList.remove("opacity");
        security_circle.classList.remove("circles_colored");
    }
}

function toggleCustomerOpacity() {
    if (window.pageYOffset >= customer -400) {
        customer_opacity.classList.add("opacity");
        customer_circle.classList.add("opacity");
        customer_circle.classList.add("circles_colored");
    } else {
        customer_opacity.classList.remove("opacity");
        customer_circle.classList.remove("opacity");
        customer_circle.classList.remove("circles_colored");
    }
}

function toggleEmployeeOpacity() {
    if (window.pageYOffset >= employee -400) {
        employee_opacity.classList.add("opacity");
        employee_circle.classList.add("opacity");
        employee_circle.classList.add("circles_colored");
    } else {
        employee_opacity.classList.remove("opacity");
        employee_circle.classList.remove("opacity");
        employee_circle.classList.remove("circles_colored");
    }
}

function toggleInsuranceOpacity() {
    if (window.pageYOffset >= insurance -400) {
        insurance_opacity.classList.add("opacity");
        insurance_circle.classList.add("opacity");
        insurance_circle.classList.add("circles_colored");
    } else {
        insurance_opacity.classList.remove("opacity");
        insurance_circle.classList.remove("opacity");
        insurance_circle.classList.remove("circles_colored");
    }
}

//v1 all buttons go to contact
$("button" ).click(function() {
  window.location = 'contact-us.html';
});

