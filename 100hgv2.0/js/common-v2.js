$(document)
    .ready(function () {
        $(".notice").followSlide({
            nHoldTime: 6000,
            bVertical: true,
            bNumericNavi: false,
            bNavi: true,
            nextHTML: '下一条',
            prevHTML: ''
        });
    })
    .delegate(".f01-2d .menu,.f02-3d .h-dd", "hover", function () {
        $(this).toggleClass("hover");
    })
    .delegate(".h-cate", "mouseover", function () {
        var $item= $(this).parents(".h-cate-item");
        $item.siblings(".h-cate-item").removeClass("hover");
        $item.addClass("hover");
    })
    .delegate(".h-cate", "mouseout", function () {
        var $item= $(this).parents(".h-cate-item");
        $item.removeClass("hover");
    })
;