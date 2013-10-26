var supportHolder = !$.browser.msie || parseInt($.browser.version) > 8;
(function (S) {
    if (huge.showCate) {
        S(".h-cate-list").removeClass("none");
    }
    if (huge.goTop) {
        var fixBox = S('<div class="h-fix-box">' +
            '<div class="h-twoCode">二维码</div>' +
            '<s class="h-goTop" title="返回顶部"></s>' +
            '</div>');
        S("body").append(fixBox);
        var goTop = fixBox.find(".h-goTop");
        goTop
            .bind("click.goTop", function () {
                S('body,html').animate({ scrollTop: 0}, S(window).scrollTop() / 5);
            })
            .bind("hover", function () {
                if (S(window).scrollTop() < S(document).height() / 2)
                    S(this).toggleClass("h-goTop-hover");
            });
        S(window).bind("scroll.fixBox", function () {
            var top = $(this).scrollTop();
            if (top > 0) {
                fixBox.fadeIn();
                if (top < $(document).height() / 2)
                    goTop.removeClass("h-goTop-hover");
                else {
                    goTop.addClass("h-goTop-hover");
                }
            }
            else fixBox.fadeOut();
        });
    }
    ;
    huge.imgError = function (selector, callback) {
        S(selector)
            .unbind("error.huge")
            .bind("error.huge", function () {
                try {
                    this.setAttribute("raw-src", this.src);
                    this.src = "http://www.img.100hg.com/blank.gif";
                    this.style.background = "url(http://www.img.100hg.com/100hg.gif) no-repeat scroll 50% 50% transparent";
                } catch (e) {
                }
                callback && "function" === typeof callback && callback();
            })
        ;
    };
    setTimeout(function(){
        //用户、购物车信息
        huge.jsonEngine("/async/shoppingcart.aspx", {
            action: "get"
        }, function (json) {
            if (json && json.length) {
                S(".h-cart .count").html(json.length);
                var cartList = S(".cart-list");
                var cartHtml = '<ul>';
                var tmp = '<li>' +
                        '<a class="p-img fl" href="/product-{id}.html" title="{name}">' +
                        '<img src="{picture}" alt="{name}"/>' +
                        '</a>' +
                        '<div class="p-name fl">' +
                        '<a href="/product-{id}.html" title="{name}">{name}</a>' +
                        '</div>' +
                        '<div class="p-price fr">' +
                        '<strong class="h-price">¥<b>{price}</b></strong> × {count}' +
                        '<br/>' +
                        '<a href="#{cart_id}">删除</a>' +
                        '</div>' +
                        '</li>',
                    totalPrice = 0;
                for (var i = 0; i < json.length; i++) {
                    var item = json[i];
                    cartHtml += tmp
                        .replaceAll("{id}", item.productid)
                        .replaceAll("{name}", item.productname)
                        .replaceAll("{picture}", item.pictures[0])
                        .replaceAll("{price}", parseFloat(item.price).toFixed(1))
                        .replaceAll("{count}", item.count);
                    totalPrice += parseFloat(item.price)*parseInt(item.count);
                }
                cartHtml += '</ul>';
                var cartInfo = '<div class="cart-settlement">' +
                    '<div class="cart-info">' +
                    '共<b>{count}</b>件商品，合计： <strong class="h-price">¥<b>{total_price}</b></strong>' +
                    '</div>' +
                    '<a class="btn" href="/order/cartList.html">去购物车结算</a>' +
                    '</div>';
                cartInfo=cartInfo
                    .replaceAll("{count}", json.length)
                    .replaceAll("{total_price}", totalPrice.toFixed(1));
                cartHtml += cartInfo;
                cartList.removeClass("empty").html(cartHtml);
            }
        });
    },3000);
    if(!supportHolder){
        $(".h-search input").val($(".h-search input").attr("placeHolder"));
    }
})(jQuery);

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
        var $item = $(this).parents(".h-cate-item");
        if (!$item.hasClass("hover")) {
            $item.siblings(".h-cate-item").removeClass("hover");
            $item.prev().find(".h-cate-recommend").css("border-bottom", "none");
            $item.addClass("hover");
        }
    })
    .delegate(".h-cate", "mouseout", function () {
        var $item = $(this).parents(".h-cate-item");
        $item.prev().find(".h-cate-recommend").css("border-bottom", "dashed 1px #ccc");
        $item.removeClass("hover");
    })
    .delegate(".c-view-close", "click", function () {
        $(this).parents(".h-cate-item").removeClass("hover");
    })
    .delegate(".h-cate-tree", "hover", function () {
        if (huge.showCate) return false;
        $(this).find(".h-cate-list").toggleClass("none");
    })
    .delegate(".h-search input","focus",function(){
        if(supportHolder) return;
        var $t = $(this);
        if($t.val() == $t.attr("placeHolder"))
            $t.val("");
    })
    .delegate(".h-search input","blur",function(){
        if(supportHolder) return;
        var $t = $(this);
        if("" === $t.val())
            $t.val($t.attr("placeHolder"));
    })
    .delegate(".h-search .btn","click",function(){
        var $input=$(".h-search input");
        var word = $input.val();
        if("" === word)
            word = $input.attr("placeHolder");
        var url="/search1.html?key=" + encodeURIComponent(word);
        if(huge._blank)
            window.open(url);
        else
            location.href=url;
     })
;