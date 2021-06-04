"use strict";

// setInterval(function() {
//     document.getElementsByClass('');
// }, 1000);

$(function() {
    $('.carousel').carousel({
        interval: 15000
    })
});

// slider start //////////////

$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});

////// testimonial slider

var btn = document.getElementsByClassName('indicat-btn');
var slide = document.getElementById('slider');

btn[0].onclick = function() {
    slider.style.transform = "translateX(0)"; 
    for(var i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function() {
    slider.style.transform = "translateX(-800px)";
    for(var i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active"); 
}

btn[2].onclick = function() {
    slider.style.transform = "translateX(-1600px)"; 
    for(var i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[3].onclick = function() {
    slider.style.transform = "translateX(-2400px)"; 
    for(var i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

    //// navigation   ///

$(function () {
    $(document).on('click', 'ul li', function () {
        $(this).addClass('current').siblings().removeClass('current');
    });

});

function hideOverlay() {
    document.getElementById().style.display = 'display';
}

const showOverlay = document.getElementsByClassName('searchOvrlay');

showOverlay.addEventListener('focusin', (event) => {
    event.target.style.background = 'pink';
});



/////////// validation 

    // Disable form submissions if there are invalid fields
    (function () {
        window.addEventListener('load', function () {
            // Get the forms we want to add validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();