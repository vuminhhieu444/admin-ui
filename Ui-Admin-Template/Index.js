var dropdownStatus = 0;
var fullScreenStatus = 0;
var elem = document.documentElement;
$(document).ready(function() {
    $("#dropdown").click(function() {
        if (dropdownStatus == 0) {
            $(".user__dropdown-option").css("display", "block");
            dropdownStatus = 1;
        } else if (dropdownStatus = 1) {
            $(".user__dropdown-option").css("display", "none");
            dropdownStatus = 0;
        }
    });
    $("#button__button").click(function() {
        if (fullScreenStatus == 0) {
            elem.requestFullscreen();
            fullScreenStatus = 1;
        } else if (fullScreenStatus == 1) {
            document.exitFullscreen();
            fullScreenStatus = 0;
        }
    })
});