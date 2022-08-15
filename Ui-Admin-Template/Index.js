var dropdownStatus = 0;
var moblieDropdownStatus = 0;
var fullScreenStatus = 0;
var mobileFullScreenStatus = 0;
var elem = document.documentElement;
var sidebarStatus = 0;
var mobileSidebarStatus = 0;
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
    $("#mobile__dropdown").click(function() {
        if (moblieDropdownStatus == 0) {
            $(".moblie__user__dropdown-option").css("display", "block");
            moblieDropdownStatus = 1;
        } else if (moblieDropdownStatus = 1) {
            $(".moblie__user__dropdown-option").css("display", "none");
            moblieDropdownStatus = 0;
        }
    });
    $("#mobile__button__button").click(function() {
        if (mobileFullScreenStatus == 0) {
            elem.requestFullscreen();
            mobileFullScreenStatus = 1;
        } else if (mobileFullScreenStatus == 1) {
            document.exitFullscreen();
            mobileFullScreenStatus = 0;
        }
    })
    $("#button__button").click(function() {
        if (mobileFullScreenStatus == 0) {
            elem.requestFullscreen();
            mobileFullScreenStatus = 1;
        } else if (mobileFullScreenStatus == 1) {
            document.exitFullscreen();
            mobileFullScreenStatus = 0;
        }
    })
    $(".item__dropdown-button").on("click", function() {
            var p = $(this).closest(".menu__item");
            if (p.hasClass("show")) {
                closeElement(p);
            } else {
                closeAllMenu();
                p.addClass("show");
                addClassDown(p)
                var parent = p.closest(".menu__item");
                while (parent.length != 0) {
                    parent.addClass("show");
                    addClassDown(parent);
                    parent = parent.parent().closest(".menu__item");
                }
            }
        })
        //    sidebar js
    $("#sidebar__action").click(function() {
        if (sidebarStatus == 0) {
            $(".sidebar").css("display", "none");
            $(".body__main-container").css("display", "block");
            $(".off").css("display", "block");
            $("#mobile__logo").attr("src", "");
            $("#mobile__logo").attr("src", "./Images/Logo-HNC_icon.png");
            $(".header__left").addClass("header__left_icon");
            sidebarStatus = 1;
        } else if (sidebarStatus == 1) {
            $(".off").css("display", "none");
            $(".sidebar").css("display", "block");
            $(".body__main-container").css("display", "flex");
            $("#mobile__logo").attr("src", "./Images/Logo-HNC.png");
            $(".header__left").removeClass("header__left_icon");
            sidebarStatus = 0;
        }
    });
    $("#user__sidebar-menu").click(function() {
        if (mobileSidebarStatus == 0) {
            $(".sidebar").css("display", "block");
            $(".main-container__content").css("display", "none");
            mobileSidebarStatus = 1;
        } else if (mobileSidebarStatus == 1) {
            $(".sidebar").css("display", "none");
            $(".main-container__content").css("display", "block");
            mobileSidebarStatus = 0
        }
    });

    // end sidebar js
    // var offMenuItem = $(".off__menu__item");
    // window.onload("");


    function addClassDown(el) {
        $(el.find(".fa-solid")[0]).attr("class", "fa-solid fa-angle-down")
    }

    function closeAllMenu() {
        $(".menu__item").each(function() {
            $(this).removeClass("show");
            $(this).find(".fa-solid").each(function() {
                $(this).attr("class", "fa-solid fa-angle-right");
            })
        })
    }

    function closeElement(el) {
        el.removeClass("show");
        $(el.find(".fa-solid")).attr("class", "fa-solid fa-angle-right");
    }
});