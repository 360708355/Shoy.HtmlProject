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
        var $cateViews = $(".h-cate-view");
        $cateViews.each(function(i){
            $(this).css("top",(i*(-56)-5) + "px");
        })
    })
    .delegate(".f01-2d .menu,.f02-3d .h-dd","hover",function(){
        $(this).toggleClass("hover");
    })
    .delegate(".h-cate,.h-cate-view","hover",function(){
        $(this).parents(".h-cate-item").toggleClass("hover");
    })
;