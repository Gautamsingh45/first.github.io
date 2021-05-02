$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')

    })
    //setting 
    let navText = [ "< i class='bx bx-chevron-left' > </i>", " < i class='bx bx-chevron-right' > </i>" ]
    
    $('#hero-carousel').owlcarousel ({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplayHoverPause: true
    })
})