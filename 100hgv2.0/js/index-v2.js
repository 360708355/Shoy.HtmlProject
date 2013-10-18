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
    .delegate(".n-header","click",function(){
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
    .delegate(".j_tab","mouseover",function(){
        var $fore = $(this).parent();
        if(!$fore.hasClass("current")){
            $fore.siblings().removeClass("current");
            var index = parseInt($fore.data("index"));
            $(".f05-1d .h-arrow").animate({
                left:178*index
            },"fast",function(){
                $fore.addClass("current");
            });
        }
    })
;