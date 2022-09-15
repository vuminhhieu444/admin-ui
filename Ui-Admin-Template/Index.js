var dropdownStatus = 0;
var moblieDropdownStatus = 0;
var fullScreenStatus = 0;
var mobileFullScreenStatus = 0;
var elem = document.documentElement;
var sidebarStatus = 0;
var mobileSidebarStatus = 0;
var wrap__element = 0;
var tagsinputElementArray = ["xin chao 1", "xin chao 2", "xin chao 3", "xin chao 4", "xin chao 5", "xin chao 6", "xin chao", "xin chao", "xin chao"];

function RenderHiddenInputData(id) {
    var data = "";
    tagsinputElementArray.forEach(element => {
        data += element;
        data += ",";
    });
    data = data.trim();
    var input = $("#" + id);
    data = data.substring(0, data.length - 1);
    input.val(data);
    console.log(input.val());
    console.log("select2", $("#seclect-box").val());
}

function CloseTagsinputElement(value, inputDataId) {
    setTimeout(() => {
        var input = $("#" + inputDataId).parent(".input__control").children(".input__hidden");
        // console.log(input);
        // var id = input.attr("id");
        // console.log("id", id);
        var index = tagsinputElementArray.indexOf(value);
        tagsinputElementArray.splice(index, 1);
        RenderTagsinputElement(inputDataId);
        var wrapElement = input.parent(".control__tags-input-wrap").height();
        if (wrapElement > wrap__element) {
            var children = input.parent(".control__tags-input-wrap");
            if (children.length > 0) {
                input.parent(".control__tags-input-wrap").parent(".input__control").parent(".input__wrap").children(".input__icon").addClass("input__icon-tagsinput");
            }
        } else if (wrapElement <= wrap__element) {
            input.parent(".control__tags-input-wrap").parent(".input__control").parent(".input__wrap").children(".input__icon").removeClass("input__icon-tagsinput");
        }
    }, 1);
}
//remove tagsinput element
//add tagsinput element

function AddTagsinputElement(inputDataId, e) {
    var input = $("#" + inputDataId).closest(".input__control").children(".control__tags-input-wrap").children(".tags-input");
    // input.on('keydown', function(e) {
    var data = input.val();
    if (e.which == 13) {
        if (data != null && data.length > 0 && data != undefined) {
            tagsinputElementArray.push(data);
            RenderTagsinputElement(inputDataId);
            // console.log("array", tagsinputElementArray);
            var wrapElement = input.parent(".control__tags-input-wrap").height();
            if (wrapElement > wrap__element) {
                // $(".input__icon").addClass("input__icon-tagsinput");
                var children = input.parent(".control__tags-input-wrap");
                if (children.length > 0) {
                    input.parent(".input__wrap").children(".input__icon").addClass("input__icon-tagsinput");
                }
            } else if (wrapElement <= wrap__element) {
                input.parent(".input__wrap").children(".input__icon").removeClass("input__icon-tagsinput");
            }
        }
        input.focus();
    }
    // alert("Ok");
    // });


}
// ending add tagsinput element
//render tagsinput text
function RenderTagsinputElement(id) {
    //adding class input__icon-tagsinput if overflow-y
    var input = $("#" + id).closest(".input__control").children(".control__tags-input-wrap").children(".tags-input");
    var tagsinputdiv = document.getElementsByClassName("control__tags-input-wrap")[0];
    var string = "";
    tagsinputElementArray.forEach(element => {
        string += ` <div class='wrap__element'><span class='text'> ${element} </span> <span class='wrap__remove-element' onclick='CloseTagsinputElement("${element},${id}")'><i class="fa-solid fa-xmark"></i></span></div> `
    });
    string += `<input type="text" class="tags-input" onkeydown="AddTagsinputElement('${id}',event)">`;
    tagsinputdiv.innerHTML = string;
    RenderHiddenInputData(id);
}
//end render tagsinput text



$(document).ready(function() {
    wrap__element = $(".control__tags-input-wrap").height();
    $(window).resize(function() {
        if (window.innerWidth > 991) {
            $(".main-container__content").css("display", "flex");
        }
    });
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
        } else {
            $(".main-container__content").css("display", "block");
        }
    });

    $('#seclect-box').select2({
        closeOnSelect: false
    }).on("select2:open", hideSelect2Keyboard);

    // tagsinput;
    var input = document.querySelector('input[name=tags]');

    //tagsinput

    $(".control__tags-input-wrap").click(function() {
        $(this).children(".tags-input").focus();
    });

    //tagsinput

    function hideSelect2Keyboard(e) {
        $(".select2-search__field")[0].focus();
    }

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