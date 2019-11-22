$(document).ready(function(){
    $(".button, .close").click(function(){
        $("#signUpModal").fadeToggle('slow', 'linear');
        $("body").toggleClass('show');
    });

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
});