AOS.init();

$('#project-slide').owlCarousel({
    center: true,
    loop: true,
    autoplay: false,
    items: 1,
    margin: 30,
    slideSpeed: 300,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$(".form-control").click(function() {
    $(".form-control").css("background-color", "#f0f8ff");
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#submit-button").click(function() {
    if ($("#name").val() == "") {
        alert("please enter your name...");
    } else if ($("#email").val() == "" || isEmail($("#email").val()) == false) {
        alert("please enter a valid email...");
    } else if ($("#message").val() == "") {
        alert("please enter your message...");
    } else if ($("#name").val() != "" && $("#email").val() != "" && $("#message").val() != "") {
        alert("your message has been send...");
    } else {
        alert("there was an error");
    }
});

//$(".control-form").validate({
//    rules: {
//        name: {
//            required: true
//        },
//        email: {
//            required: true
//        },
//        message: {
//            required: true
//        }
//    }
//});