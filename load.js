function startjs() {

    $(document).ready(function() {

        setTimeout(function() {
            $('body').addClass('loaded');
            $('h1').css('color', '#222222');
        }, 1000);

    });

    window.onload = function() {
        var headerall = document.getElementById('all');

        headerall.style.opacity = 1;
    };


}

window.addEventListener('DOMContentLoaded', function(event) {
    console.log('html da tai xong');
    startjs();
})
