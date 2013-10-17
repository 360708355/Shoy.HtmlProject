$(document)
    .ready(function(){
        $(".h-sliderA").followSlide({
            nHoldTime:6000,
            bVertical:true,
            bNumericNavi:true
        });
        $(".h-sliderB").followSlide({
            nHoldTime:12*1000,
            bVertical:false,
            bNumericNavi:false,
            bNavi:true,
            prevHTML:'<a href="#" class="s-prev"></a>',
            nextHTML:'<a href="#" class="s-next"></a>'
        });
    })
;