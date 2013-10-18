$(document)
    .ready(function(){
        $(".notice").followSlide({
            nHoldTime:6000,
            bVertical:true,
            bNumericNavi:false,
            bNavi:true,
            nextHTML:'下一条',
            prevHTML:''
        });
    })
    .delegate(".f01-2d .menu,.f02-3d .h-dd","hover",function(){
        $(this).toggleClass("hover");
    })
    .delegate(".h-cate","hover",function(){
        $(this).parents(".h-cate-item").toggleClass("hover");
    })
;