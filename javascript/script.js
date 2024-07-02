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
});
$(document).ready(function() {
  
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });
 

    $(function(){
        var days    = parseInt( $('.days').html() );
        var hours   = parseInt( $('.hours').html() );
        var minutes = parseInt( $('.minutes').html() );
        var seconds = parseInt( $('.seconds').html() );
        var minutesWrap = 0; 
        var hoursWrap = 0; 
        var daysWrap= days; 
        var hoursRem = hours;
        var timer = seconds; 
        var counter =seconds;
        function countOrdersRemainingTime(){
            var id = setTimeout(countOrdersRemainingTime, 1000); 
            if(timer < 0){
                minutesWrap ++; 
                timer = 59;
            }
            var minRem = minutes - minutesWrap; 
            if( minRem == -1 ){
                hoursWrap + 1;
                minRem = 59;
                var hoursRem = hours - 1;
            }
            if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
                clearTimeout(id);
            }

            $('.seconds').html(timer);
            $('.minutes').html(minRem);
            $('.hours').html(hoursRem);


            timer --; 
        }

        countOrdersRemainingTime();


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