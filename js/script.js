

/* The code block below is written in JavaScript and utilizes jQuery.
It sets up an event handler for a click event on an element with the id `menu` ('#menu')
and perform certain actions when the element is clicked. 


*/
$(document).ready(function() {  /* This code block sets up an event handler that triggers(is executed) when the document is fully loaded and ready.
                                   It ensures that the code inside the function is executed only when the DOM(Document Object Model) is ready for manipulation. */

    $('#menu').click(function() {  /* This code sets up an event handler(is executed) for the element with the id `menu` that is clicked.
                                      It targets the element and attaches a function that will be executed when the element is clicked. */
        $(this).toggleClass('fa-times');  /* Inside the click event handler, this line toggles the presence of the CSS class 'fa-times' on the clicked element(`$(this)`). 
                                             If the class 'fa-times' is already present, the `toggleClass()` function will be removed. If the class is not present, the function will be added. */

        $('header').toggleClass('toggle'); /* This line toggles the presence of the CSS class 'toggle' on the 'header' element.
                                              Similarly, If the class 'toggle' is already present, the `toggleClass()` function will be removed. If the class is not present, the function will be added. */
    });  /* When the document is ready, this code block `$('#menu').click(function() { ... });` sets up a click event handler on the `menu` element.
            When the element is clicked, it toggles the classes 'fa-times' on the clicked element and 'toggle' on the 'header' element.
            This behavior can be used to toggle the appearance or behavior of elements, such as showing or hiding a menu, changing icons, or triggering other visual effects. */


    $(window).on('scroll load',function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    }); 

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });

});

