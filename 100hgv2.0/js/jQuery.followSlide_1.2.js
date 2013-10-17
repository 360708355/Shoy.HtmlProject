(function(c) {
    if (!window.jQuery) {
        throw ("Missing jQuery Library")
    }
    var a,
        d,
        e,
        b;
    c.prototype.followSlide = function(j) {
        var l = jQuery,
            s = this;
        j = l.extend({
                bBreak: false,
                nViewWidth: "",
                nViewHeight: "",
                nHoldTime: 2000,
                _nHoldTimeShift: false,
                _nHoldTimeSpeedUp: false,
                nAnimateTime: 550,
                _nAnimateShift: 0.5,
                bNavi: false,
                bNumericNavi: true,
                bHoverStop: true,
                bAutoStart: true,
                bAuto: true,
                bReverseAnimate: false,
                bVertical: false,
                bLazy: false,
                sLazySrc: "_src",
                _sContentcClass: "current",
                _sNavicHook: "current",
                prevHTML: "prev",
                nextHTML: "next"
            },
            j);
        if (!j.bAuto) {
            j.bHoverStop = j.bAuto = j.bAutoStart = false
        }
        var m = {},
            u = l(this).css({
                position: "relative"
            }).addClass("dsFollowSlide"),
            r = l(".dsFollowSlide-view", this),
            q = l(".dsFollowSlide-con", this).css({
                position: "absolute",
                overflow: "visible"
            }),
            f = q.children(),
            p,
            v,
            n,
            i,
            t,
            k,
            w = j.bLazy ? j.sLazySrc: false,
            g = j._sNavicHook ? j._sNavicHook: "",
            o = j._sContentcClass ? j._sContentcClass: "",
            h;
        if (f.length < 2) {
            return "number is less"
        }
        m.trueLength = f.length;
        t = f.first().width();
        k = f.first().height();
        r.css({
            width: j.nViewWidth || t,
            height: j.nViewHeight || k,
            position: "relative",
            overflow: "hidden"
        });
        if (j.bVertical) {
            if (j.bReverseAnimate) {
                m.mode = "t2b"
            } else {
                m.mode = "b2t"
            }
        } else {
            if (j.bReverseAnimate) {
                m.mode = "l2r"
            } else {
                m.mode = "r2l"
            }
        }
        if (!j.bVertical) {
            q.css({
                width: t * (m.trueLength + 1)
            })
        }
        switch (m.mode) {
            case "r2l":
                v = q.css({
                    left: 0
                }).append(f.first().clone()).prepend(f.last().clone().css({
                    marginLeft: -t
                })).children();
                break;
            case "l2r":
                a(q);
                v = q.css({
                    left: -t * (m.trueLength - 1)
                }).prepend(f.first().clone().css({
                    marginLeft: -t
                })).append(f.last().clone()).children();
                break;
            case "b2t":
                v = q.css({
                    top: 0
                }).append(f.first().clone()).prepend(f.last().clone().css({
                    marginTop: -k
                })).children();
                break;
            case "t2b":
                a(q);
                v = q.css({
                    top: -k * (m.trueLength - 1)
                }).prepend(f.first().clone().css({
                    marginTop: -k
                })).append(f.last().clone()).children();
                break
        }
        l(".dsFollowSlide-navi", u).remove();
        if (j.bNumericNavi) {
            n = d(u, j, m);
            i = n.children();
            l("li", n).bind("click.follow",
                function() {
                    m.hovring = true;
                    var x;
                    if (m.ing) {
                        return false
                    }
                    x = l(this).index();
                    if (m.whichOne === x) {
                        return false
                    }
                    clearTimeout(m.t);
                    if (w) {
                        if (!m.lazyCache[x]) {
                            b(f.eq(x), w);
                            m.lazyCache[x] = true
                        }
                    }
                    if (0 === x && m.trueLength === (m.whichOne + 1)) {
                        x = m.trueLength
                    }
                    h(x);
                    return false
                })
        }
        l(".dsFollowSlide-btn", u).remove();
        if (j.bNavi) {
            e(u, j, m);
            m.$Navi.bind("click.follow",
                function() {
                    if (m.ing) {
                        return false
                    }
                    var x = (l(this).hasClass("dsFollowSlide-next") ? 1: -1) + m.whichOne;
                    if (w && !m.lazyCache[x]) {
                        b(f.eq(x), w);
                        m.lazyCache[x] = true
                    }
                    clearTimeout(m.t);
                    h(x);
                    return false
                })
        }
        h = function(x) {
            x = ("undefined" !== typeof x) ? x: 1;
            switch (m.mode) {
                case "r2l":
                    h = function(y) {
                        m.ing = true;
                        q.animate({
                                left: -t * y
                            },
                            {
                                duration: j.nAnimateTime,
                                complete: function() {
                                    m.whichOne = y;
                                    m.ing = false;
                                    if (j.bBreak) {
                                        if (y === m.trueLength - 1) {
                                            m.$prev.removeClass("none");
                                            m.$next.addClass("none")
                                        } else {
                                            if (y === 0 || y === m.trueLength) {
                                                m.$prev.addClass("none");
                                                m.$next.removeClass("none")
                                            } else {
                                                m.$prev.removeClass("none");
                                                m.$next.removeClass("none")
                                            }
                                        }
                                    }
                                    if (y >= m.trueLength) {
                                        m.whichOne = y = 0;
                                        q.css({
                                            left: 0
                                        });
                                        if (j.bNumericNavi) {
                                            i.filter("." + g).removeClass();
                                            i.eq(0).addClass(g)
                                        }
                                    } else {
                                        if (y < 0) {
                                            m.whichOne = y = m.trueLength - 1;
                                            q.css({
                                                left: -t * (m.trueLength - 1)
                                            });
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(m.trueLength - 1).addClass(g)
                                            }
                                        } else {
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(y).addClass(g)
                                            }
                                        }
                                    }
                                    f.filter("." + o).removeClass(o).end().eq(y).addClass(o);
                                    if (w) {
                                        if (!m.lazyCache[y + 1]) {
                                            b(f.eq(y + 1), w);
                                            m.lazyCache[y + 1] = true
                                        }
                                    }
                                    if (j.bHoverStop && m.hovring) {
                                        clearTimeout(m.t);
                                        return "holdIt"
                                    }
                                    if (j.bAuto) {
                                        m.t = setTimeout(function() {
                                                h(++y)
                                            },
                                            j.nHoldTime)
                                    }
                                }
                            })
                    };
                    break;
                case "l2r":
                    h = function(y) {
                        m.ing = true;
                        q.animate({
                                left: -t * (m.trueLength - y - 1)
                            },
                            {
                                duration: j.nAnimateTime,
                                complete: function() {
                                    m.whichOne = y;
                                    m.ing = false;
                                    if (j.bBreak) {
                                        if (y === m.trueLength - 1) {
                                            m.$prev.removeClass("none");
                                            m.$next.addClass("none")
                                        } else {
                                            if (y === 0 || y === m.trueLength) {
                                                m.$prev.addClass("none");
                                                m.$next.removeClass("none")
                                            } else {
                                                m.$prev.removeClass("none");
                                                m.$next.removeClass("none")
                                            }
                                        }
                                    }
                                    if (y >= m.trueLength) {
                                        m.whichOne = y = 0;
                                        q.css({
                                            left: -t * (m.trueLength - 1)
                                        });
                                        if (j.bNumericNavi) {
                                            i.filter("." + g).removeClass();
                                            i.eq(0).addClass(g)
                                        }
                                    } else {
                                        if (y < 0) {
                                            m.whichOne = y = m.trueLength - 1;
                                            q.css({
                                                left: 0
                                            });
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(m.trueLength - 1).addClass(g)
                                            }
                                        } else {
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(y).addClass(g)
                                            }
                                        }
                                    }
                                    f.filter("." + o).removeClass(o).end().eq(y).addClass(o);
                                    if (w) {
                                        if (!m.lazyCache[y + 1]) {
                                            b(f.eq(y + 1), w);
                                            m.lazyCache[y + 1] = true
                                        }
                                    }
                                    if (j.bHoverStop && m.hovring) {
                                        clearTimeout(m.t);
                                        return "holdIt"
                                    }
                                    if (j.bAuto) {
                                        m.t = setTimeout(function() {
                                                h(++y)
                                            },
                                            j.nHoldTime)
                                    }
                                }
                            })
                    };
                    break;
                case "b2t":
                    h = function(y) {
                        m.ing = true;
                        q.animate({
                                top: -k * y
                            },
                            {
                                duration: j.nAnimateTime,
                                complete: function() {
                                    m.whichOne = y;
                                    m.ing = false;
                                    if (j.bBreak) {
                                        if (y === m.trueLength - 1) {
                                            m.$prev.removeClass("none");
                                            m.$next.addClass("none")
                                        } else {
                                            if (y === 0 || y === m.trueLength) {
                                                m.$prev.addClass("none");
                                                m.$next.removeClass("none")
                                            } else {
                                                m.$prev.removeClass("none");
                                                m.$next.removeClass("none")
                                            }
                                        }
                                    }
                                    if (y >= m.trueLength) {
                                        m.whichOne = y = 0;
                                        q.css({
                                            top: 0
                                        });
                                        if (j.bNumericNavi) {
                                            i.filter("." + g).removeClass();
                                            i.eq(0).addClass(g)
                                        }
                                    } else {
                                        if (y < 0) {
                                            m.whichOne = y = m.trueLength - 1;
                                            q.css({
                                                top: -k * (m.trueLength - 1)
                                            });
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(m.trueLength - 1).addClass(g)
                                            }
                                        } else {
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(y).addClass(g)
                                            }
                                        }
                                    }
                                    f.filter("." + o).removeClass(o).end().eq(y).addClass(o);
                                    if (w) {
                                        if (!m.lazyCache[y + 1]) {
                                            b(f.eq(y + 1), w);
                                            m.lazyCache[y + 1] = true
                                        }
                                    }
                                    if (j.bHoverStop && m.hovring) {
                                        clearTimeout(m.t);
                                        return "holdIt"
                                    }
                                    if (j.bAuto) {
                                        m.t = setTimeout(function() {
                                                h(++y)
                                            },
                                            j.nHoldTime)
                                    }
                                }
                            })
                    };
                    break;
                case "t2b":
                    h = function(y) {
                        m.ing = true;
                        q.animate({
                                top: -k * (m.trueLength - y - 1)
                            },
                            {
                                duration: j.nAnimateTime,
                                complete: function() {
                                    m.whichOne = y;
                                    m.ing = false;
                                    if (j.bBreak) {
                                        if (y === m.trueLength - 1) {
                                            m.$prev.removeClass("none");
                                            m.$next.addClass("none")
                                        } else {
                                            if (y === 0 || y === m.trueLength) {
                                                m.$prev.addClass("none");
                                                m.$next.removeClass("none")
                                            } else {
                                                m.$prev.removeClass("none");
                                                m.$next.removeClass("none")
                                            }
                                        }
                                    }
                                    if (y >= m.trueLength) {
                                        m.whichOne = y = 0;
                                        q.css({
                                            top: -k * (m.trueLength - 1)
                                        });
                                        if (j.bNumericNavi) {
                                            i.filter("." + g).removeClass();
                                            i.eq(0).addClass(g)
                                        }
                                    } else {
                                        if (y < 0) {
                                            m.whichOne = y = m.trueLength - 1;
                                            q.css({
                                                top: 0
                                            });
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(m.trueLength - 1).addClass(g)
                                            }
                                        } else {
                                            if (j.bNumericNavi) {
                                                i.filter("." + g).removeClass();
                                                i.eq(y).addClass(g)
                                            }
                                        }
                                    }
                                    f.filter("." + o).removeClass(o).end().eq(y).addClass(o);
                                    if (w) {
                                        if (!m.lazyCache[y + 1]) {
                                            b(f.eq(y + 1), w);
                                            m.lazyCache[y + 1] = true
                                        }
                                    }
                                    if (j.bHoverStop && m.hovring) {
                                        clearTimeout(m.t);
                                        return "holdIt"
                                    }
                                    if (j.bAuto) {
                                        m.t = setTimeout(function() {
                                                h(++y)
                                            },
                                            j.nHoldTime)
                                    }
                                }
                            })
                    };
                    break
            }
            h(x)
        };
        if (w) {
            b(f.eq(0).addClass(o).add(f.eq(1)).add(f.eq(m.trueLength - 1)).add(v && v.first()).add(v && v.last()), w);
            m.lazyCache = {
                "-1": true,
                0: true,
                1: true
            };
            m.lazyCache[m.trueLength - 1] = true;
            m.lazyCache[m.trueLength] = true
        }
        m.whichOne = 0;
        if (j.bAutoStart) {
            m.t = setTimeout(function() {
                    h()
                },
                j.nHoldTime)
        }
        if (j.bHoverStop) {
            u.hover(function() {
                    clearTimeout(m.t);
                    m.hovring = true
                },
                function() {
                    clearTimeout(m.t);
                    m.hovring = false;
                    if (m.ing) {
                        return "protected"
                    }
                    m.t = setTimeout(function() {
                            h(m.whichOne + 1)
                        },
                        j.nHoldTime)
                })
        }
        p = null
    };
    a = function(h) {
        var f = h.children(),
            g = h.children().length - 1;
        do {
            f.eq(0).insertAfter(f.eq(g));
            f = h.children()
        }
        while (--g);
        h.show();
        f = null;
        return h
    };
    d = function(k, g, j) {
        var l = '<ul class="dsFollowSlide-navi">',
            h = 0,
            f = j.trueLength;
        do {
            l += '<li><a href="#">' + (h + 1) + "</a></li>"
        }
        while (++h < f);
        l += "</ul>";
        l = c(l);
        l.children().first().addClass(g._sNavicHook);
        k.append(l);
        l = null;
        return k.find(".dsFollowSlide-navi")
    };
    e = function(h, g, f) {
        f.$Navi = c('<span class="dsFollowSlide-btn dsFollowSlide-prev ' + (g.bBreak ? "none": "") + '">' + g.prevHTML + '</span><span class="dsFollowSlide-btn dsFollowSlide-next">' + g.nextHTML + "</span>").appendTo(h);
        if (g.bBreak) {
            f.$prev = f.$Navi.first();
            f.$next = f.$Navi.last()
        }
    };
    b = function(f, g) {
        if (!f.length) {
            return
        }
        f.find("img").each(function() {
            var h = this.getAttribute(g);
            if (!h) {
                return "ignore"
            }
            this.src = h;
            this.removeAttribute(g)
        })
    }
})(jQuery);