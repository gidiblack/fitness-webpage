$(document).ready(function(){
    $(".button, .close").click(function(){
        $("#signUpModal").fadeToggle('slow', 'linear');
        $("body").toggleClass('show');
    });


});