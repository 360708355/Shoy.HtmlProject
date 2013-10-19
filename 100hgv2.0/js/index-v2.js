var h_timer;
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
        $(".n-news li:odd").css("background-color","#F4F4F4");
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
    .delegate(".ht .h-title","mouseover",function(){
        var $fore = $(this).parent();
        if(!$fore.hasClass("current")){
            h_timer && clearTimeout(h_timer);
            $fore.siblings().removeClass("current");
            var index = parseInt($fore.data("index"));
            var w = $(this).width();
            var $a = $fore.siblings(".h-arrow");
            $a.animate({
                left:w*index
            },200);
            h_timer=setTimeout(function(){
                $fore.addClass("current");
            },160);
        }
    })
;