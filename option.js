$(document).ready(function(){
// let title = document.getElementById("title");
// title.addEventListener("mouseover",color);

// function color (){

//     title.style.color = 'red';
// };

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#whatsapp').fadeIn();
        } else {
            $('#whatsapp').fadeOut();
        }
    });


    });