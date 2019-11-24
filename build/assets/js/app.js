window.sr=ScrollReveal();

$(document).ready(function(){

    // toggle popup modal
    $(".button, .close").click(function(){
        $("#signUpModal").fadeToggle('slow', 'linear');
        $("body").toggleClass('show');
    });

    // toggle mobile nav menu
    $('.menu-toggle').click(function(){
        $('.responsive-nav').toggleClass("unfold animated slideInDown");
        $(this).toggleClass("close-menu");
    });

    $('#responsive-nav, .unfold.nav-links').click(function(){
        $('.responsive-nav').toggleClass("unfold animated slideInDown");
        $('.menu-toggle').toggleClass("close-menu");
    });

    // change navigation on scroll
    let navBar = document.querySelector("#nav-bar");
    let sectionOne = document.querySelector("header");
    let sectionOneOptions = {
        rootMargin: "-500px 0px 0px 0px"
    };

    let sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                navBar.classList.add("scrolled");
            } else {
                navBar.classList.remove("scrolled");
            }
        });
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);

    // Reveal elements on scroll
    sr.reveal("#services div.cardio", {
        duration: 800,
        distance: '150px',
        origin: 'left'
    });

    sr.reveal("#services div.yoga", {
        duration: 800,
        delay: 300,
        distance: '150px',
        origin: 'bottom'
    });

    sr.reveal("#services div.power", {
        duration: 800,
        delay: 600,
        distance: '150px',
        origin: 'right'
    });

    sr.reveal("#team div.team-1", {
        duration: 800,
        delay: 200,
        distance: '150px',
        origin: 'left'
    });

    sr.reveal("#team div.team-2", {
        duration: 800,
        delay: 400,
        distance: '150px',
        origin: 'bottom'
    });

    sr.reveal("#team div.team-3", {
        duration: 800,
        delay: 800,
        distance: '150px',
        origin: 'right'
    });

    sr.reveal("#pricing div.blue-price", {
        duration: 800,
        delay: 200,
        distance: '150px',
        origin: 'left'
    });
    
    sr.reveal("#pricing div.gray-price", {
        duration: 800,
        delay: 400,
        distance: '150px',
        origin: 'left'
    });

    sr.reveal("#hero div.schedule", {
        duration: 800,
        delay: 200,
        distance: '150px',
        origin: 'left'
    });

    sr.reveal("#hero div.premium", {
        duration: 800,
        delay: 400,
        distance: '150px',
        origin: 'bottom'
    });
    
    sr.reveal("#hero div.hours", {
        duration: 800,
        delay: 800,
        distance: '150px',
        origin: 'right'
    });

    // Onepage Nav
    $('.responsive-nav, .nav-bar').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 600,
        filter: ':not(.btn)',
        easing: 'swing'
    });
        
    // Typing Intro
    $(".typed").typewriter({
        speed: 100
    });
});