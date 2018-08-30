$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
//change disply property  fom none to flex and vice-versa
theEnableFunction = (obj) => {
    var el = document.getElementById(obj);
    var k = "" + el.style.display;
    if (k == 'block' || k == 'flex') {
        el.style.display = 'none';
        return;
    }
    else {
        window.scrollTo(0, 0);
        el.style.display = 'flex';
        return;
    }
}
//to hide the dorp down
hider = (obj) => {
    var el = document.getElementById(obj);
    var k = "" + el.style.display;
    if (k == 'flex') {
        el.style.display = 'none';
        return;
    }
}