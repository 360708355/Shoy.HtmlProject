window.huge = window.huge || {};
/*
*/
if (window.ActiveXObject) {
    var ua = navigator.userAgent.toLowerCase();
    var ie=ua.match(/msie ([\d.]+)/)[1];
    if(ie==6.0){
        var word="百货购商城从2013年11月1日起已停止对IE6的支持，请升级您的浏览器以获得更好更安全的购物体验！";
        alert(word);
        document.write('<div class="not-support">' + word + '</div>');
    }
}
huge.wideMode=(function(){
    return screen.width >= 1220
})();
huge.uri=function(uri){
    var q=[],qs;
    qs=(uri?uri+"":location.search);
    if(qs.indexOf('?')>=0){
        qs=qs.substring(1);
    }
    if(qs){
        qs=qs.split('&');
    }
    if(qs.length>0){
        for(var i=0;i<qs.length;i++){
            var qt=qs[i].split('=');
            q[qt[0]]=decodeURIComponent(qt[1]);
        }
    }
    return q;
};
switch(huge.uri().max){
    case "true":
        huge.wideMode=true;
        break;
    case "false":
        huge.wideMode=false;
        break;
    default:
        break;
}
if(huge.wideMode && huge.compatible){
    document.getElementsByTagName("body")[0].className="wideMode";
}
String.prototype.trim=function(){
    try{
        return this.replace(/^\s+|\s+$/g,'');
    }
    catch(e){
        return this;
    }
};
huge.cookie={
    set: function(name, value, minutes, domain){
        if("string" !== typeof name || "" === name.trim()) return;
        var c = name + '=' + encodeURI(value);
        if("number" === typeof minutes && minutes > 0){
            var time= (new Date()).getTime() + 1000 *60 * minutes;
            c +=';expires='+ (new Date(time)).toGMTString();
        }
        if("string" == typeof domain)
            c += ';domain='+domain;
        document.cookie = c + '; path=/';
    },
    get: function(name){
        var b = document.cookie;
        var d = name + '=';
        var c = b.indexOf('; ' + d);
        if (c == -1) {
            c = b.indexOf(d);
            if (c != 0) {
                return null;
            }
        }
        else {
            c += 2;
        }
        var a = b.indexOf(';', c);
        if (a == -1) {
            a = b.length;
        }
        return decodeURI(b.substring(c + d.length, a));
    },
    clear: function(name, domain){
        if (this.get(name)) {
            document.cookie = name + '=' + (domain ? '; domain=' + domain : '') + '; expires=Thu, 01-Jan-70 00:00:01 GMT';
        }
    }
};
String.prototype.replaceAll=function(reg,str){
    var g=new RegExp(reg,"gi");
    return this.replace(g,str);
};
huge.uName=(function(){
    var _u_name = huge.cookie.get("_hg_u_name");
    if(_u_name && undefined !== _u_name)
        return _u_name;
    return "";
})();
function addToFavorite() {
    var d = location.host;
    var c = "百货购 - 您的贴心管家";
    if (document.all) {
        window.external.AddFavorite(d, c)
    } else {
        if (window.sidebar && "function" === typeof window.sidebar.addPanel) {
            window.sidebar.addPanel(c, d, "")
        } else {
            alert("对不起，您的浏览器不支持此操作！\n请使用菜单栏或按Ctrl+D收藏本站。")
        }
    }
    huge.cookie.set("_fv", "1", 30, location.host)
}

