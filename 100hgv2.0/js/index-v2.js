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
;