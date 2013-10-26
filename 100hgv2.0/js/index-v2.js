(function(S){
    S("img[hsrc]").shoyLazy({
        lazySrc:"hsrc",
        prePix:60,
        auto:true
    });
    S(".f05-1d .h-content").lineSlide();
    var $floorRight=$(".floor-right");
    for(var i=0;i<$floorRight.length;i++){
        $floorRight.eq(i).find(".h-content").lineSlide();
    }
    huge.imgError("img");
})(jQuery);
$(document)
    .ready(function(){
        $(".h-sliderA").followSlide({
            nHoldTime:5000,
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
        $(".n-news li:odd").css("background-color","#F4F4F4");
        $(".h-sliderC").followSlide({
            nHoldTime:6000,
            bVertical:false,
            bNumericNavi:true
        });
        $(".h-content3-l .h-sliderD").followSlide({
            nHoldTime:6000,
            bVertical:false,
            bNumericNavi:true,
            bAuto:false
        });
        var $floorSlide = $(".h-floorSlide");
        for(var i=0;i<$floorSlide.length;i++){
            $floorSlide.eq(i).followSlide({
                nHoldTime:6000,
                bVertical:false,
                bNumericNavi:true,
                bAuto:false
            });
        }
    })
    .delegate(".n-header","mouseover",function(){
        var $this = $(this);
        var current = $this.hasClass("current");
        if(!current){
            var $headers=$this.parent().find(".n-header");
            $headers.not($this).removeClass("current");
            $this.parent().find(".n-content").addClass("none");
            $this.addClass("current");
            $this.next().removeClass("none");
        }
    })
    .delegate(".b-hover","hover",function(){
        $(this).toggleClass("hover");
    })
    .delegate(".h-hotSale li","hover",function(){
        var $t = $(this);
        if(!$t.hasClass("current")){
            $t.siblings("li").removeClass("current");
            $t.addClass("current");
        }
    })
;