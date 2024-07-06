function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
$(document).ready(function() {
    $('.singer-box')
    .on('click', function() {
        var singer = $(this).data('singer');
        var infoBox = $('#singer-' + singer + '-info');
        if (infoBox.is(':visible')) {
            infoBox.slideUp();
        } else {
            $('.singer-info').slideUp(); 
            infoBox.slideDown();
        }
    });
     
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
            var target = $($(this).attr('href'));
            if (target.length){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 3000
            );
}
    });



    $(document).ready(function() {
        var countDownDate = new Date("Dec 31, 2029 23:59:59").getTime();
        var countdownFunction = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $('#days').html(days + "d");
            $('#hours').html(hours + "h");
            $('#minutes').html(minutes + "m");
            $('#seconds').html(seconds + "s");
            if (distance < 0) {
                clearInterval(countdownFunction);
                $('#days').html("0d");
                $('#hours').html("0h");
                $('#minutes').html("0m");
                $('#seconds').html("0s");
            }
        }, 1000);
    });

    var maxChars = 100;
    var $textarea = $('textarea');
    var $charCount = $('#chars');
    var $submitButton = $('#submit');

    $textarea.on('input', function() {
        var remaining = maxChars - $(this).val().length;
        $charCount.text(remaining + ' characters remaining');

        if (remaining < 0) {
            $charCount.text("You have exceeded the character limit");
            $submitButton.prop('disabled', true);
        } else {
            $submitButton.prop('disabled', false);
        }
    });
});