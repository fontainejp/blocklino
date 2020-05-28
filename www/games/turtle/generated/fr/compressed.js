// Automatically generated file.  Do not edit!
var d, g = this;

function aa(a) {
    return void 0 !== a
}

function p(a) {
    return "string" == typeof a
}

function ba(a) {
    return "number" == typeof a
}

function ca(a, b) {
    a = a.split(".");
    var c = g;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift());) !a.length && aa(b) ? c[e] = b : c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {}
}

function da() {}

function ea(a) {
    a.eo = void 0;
    a.ne = function() {
        return a.eo ? a.eo : a.eo = new a
    }
}

function fa(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function r(a) {
    return "array" == fa(a)
}

function ha(a) {
    var b = fa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function u(a) {
    return "function" == fa(a)
}

function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ja(a) {
    return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0),
    la = 0;

function ma(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function na(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, e);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function oa(a, b, c) {
    oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
    return oa.apply(null, arguments)
}

function pa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function v(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.s = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.EB = function(a, c, h) {
        for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
        return b.prototype[c].apply(a, e)
    }
};
// Copyright 2013 Google Inc.  Apache License 2.0
var w = {};
w.H = Object(null);
var qa;
var ra = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    sa = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var e = a.length, f = p(a) ? a.split("") : a, h = 0; h < e; h++) h in f && b.call(c, f[h], h, a)
    },
    ta = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c =
                a.length, e = [], f = 0, h = p(a) ? a.split("") : a, k = 0; k < c; k++)
            if (k in h) {
                var l = h[k];
                b.call(void 0, l, k, a) && (e[f++] = l)
            }
        return e
    },
    ua = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var e = a.length, f = Array(e), h = p(a) ? a.split("") : a, k = 0; k < e; k++) k in h && (f[k] = b.call(c, h[k], k, a));
        return f
    },
    va = Array.prototype.every ? function(a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, e = p(a) ? a.split("") : a, f = 0; f < c; f++)
            if (f in e && !b.call(void 0, e[f],
                    f, a)) return !1;
        return !0
    };

function wa(a, b, c) {
    a: {
        for (var e = a.length, f = p(a) ? a.split("") : a, h = 0; h < e; h++)
            if (h in f && b.call(c, f[h], h, a)) {
                b = h;
                break a
            }
        b = -1
    }
    return 0 > b ? null : p(a) ? a.charAt(b) : a[b]
}

function xa(a, b) {
    return 0 <= ra(a, b)
}

function ya(a, b) {
    b = ra(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c
}

function za(a) {
    return Array.prototype.concat.apply([], arguments)
}

function Aa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
        return c
    }
    return []
}

function Ba(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var e = arguments[c];
        if (ha(e)) {
            var f = a.length || 0,
                h = e.length || 0;
            a.length = f + h;
            for (var k = 0; k < h; k++) a[f + k] = e[k]
        } else a.push(e)
    }
}

function Ca(a, b, c, e) {
    Array.prototype.splice.apply(a, Da(arguments, 1))
}

function Da(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function Ea(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}

function Fa(a) {
    return /^[\s\xa0]*$/.test(a)
}

function Ga(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var Ha = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function Ia(a) {
    if (!Ja.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ka, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(La, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;"));
    return a
}
var Ka = /&/g,
    La = /</g,
    Na = />/g,
    Oa = /"/g,
    Pa = /'/g,
    Qa = /\x00/g,
    Ja = /[\x00&<>"']/;

function Ra(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var c = g.document.createElement("div");
    return a.replace(Sa, function(a, f) {
        var e = b[a];
        if (e) return e;
        "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (e = String.fromCharCode(f)));
        e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = e
    })
}

function Ta(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
        }
    })
}
var Sa = /&([^;\s<&]+);?/g;

function Ua(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Va() {
    return "background-color".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}

function Wa(a) {
    var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, f) {
        return b + f.toUpperCase()
    })
};
var Ya;
a: {
    var Za = g.navigator;
    if (Za) {
        var $a = Za.userAgent;
        if ($a) {
            Ya = $a;
            break a
        }
    }
    Ya = ""
}

function ab(a) {
    return -1 != Ya.indexOf(a)
};

function bb(a, b, c) {
    for (var e in a) b.call(c, a[e], e, a)
}
var cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function db(a, b) {
    for (var c, e, f = 1; f < arguments.length; f++) {
        e = arguments[f];
        for (c in e) a[c] = e[c];
        for (var h = 0; h < cb.length; h++) c = cb[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
    }
}

function eb(a) {
    var b = arguments.length;
    if (1 == b && r(arguments[0])) return eb.apply(null, arguments[0]);
    for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
    return c
};

function fb(a) {
    fb[" "](a);
    return a
}
fb[" "] = da;

function gb(a, b) {
    var c = hb;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var ib = ab("Opera"),
    x = ab("Trident") || ab("MSIE"),
    jb = ab("Edge"),
    kb = ab("Gecko") && !(-1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge")) && !(ab("Trident") || ab("MSIE")) && !ab("Edge"),
    A = -1 != Ya.toLowerCase().indexOf("webkit") && !ab("Edge"),
    lb = A && ab("Mobile"),
    mb = ab("Macintosh"),
    nb = ab("Android"),
    ob = ab("iPhone") && !ab("iPod") && !ab("iPad"),
    pb = ab("iPad");

function qb() {
    var a = g.document;
    return a ? a.documentMode : void 0
}
var rb;
a: {
    var sb = "",
        tb = function() {
            var a = Ya;
            if (kb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (jb) return /Edge\/([\d\.]+)/.exec(a);
            if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (A) return /WebKit\/(\S+)/.exec(a);
            if (ib) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();tb && (sb = tb ? tb[1] : "");
    if (x) {
        var ub = qb();
        if (null != ub && ub > parseFloat(sb)) {
            rb = String(ub);
            break a
        }
    }
    rb = sb
}
var hb = {};

function vb(a) {
    return gb(a, function() {
        for (var b = 0, c = Ha(String(rb)).split("."), e = Ha(String(a)).split("."), f = Math.max(c.length, e.length), h = 0; 0 == b && h < f; h++) {
            var k = c[h] || "",
                l = e[h] || "";
            do {
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                if (0 == k[0].length && 0 == l[0].length) break;
                b = Ua(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Ua(0 == k[2].length, 0 == l[2].length) || Ua(k[2], l[2]);
                k = k[3];
                l = l[3]
            } while (0 == b)
        }
        return 0 <= b
    })
}
var wb;
var xb = g.document;
wb = xb && x ? qb() || ("CSS1Compat" == xb.compatMode ? parseInt(rb, 10) : 5) : void 0;
var yb = !x || 9 <= Number(wb),
    zb = !x || 9 <= Number(wb),
    Ab = x && !vb("9"),
    Bb = "ontouchstart" in g || !!(g.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.navigator || !g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints),
    Cb = "PointerEvent" in g,
    Db = "MSPointerEvent" in g && !(!g.navigator || !g.navigator.msPointerEnabled),
    Eb = function() {
        if (!g.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        g.addEventListener("test",
            da, b);
        g.removeEventListener("test", da, b);
        return a
    }();

function Fb() {
    0 != Gb && (Hb[ja(this)] = this);
    this.Ph = this.Ph;
    this.Ye = this.Ye
}
var Gb = 0,
    Hb = {};
Fb.prototype.Ph = !1;
Fb.prototype.A = function() {
    if (!this.Ph && (this.Ph = !0, this.Va(), 0 != Gb)) {
        var a = ja(this);
        if (0 != Gb && this.Ye && 0 < this.Ye.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Hb[a]
    }
};

function Ib(a, b) {
    a.Ph ? aa(void 0) ? b.call(void 0) : b() : (a.Ye || (a.Ye = []), a.Ye.push(aa(void 0) ? oa(b, void 0) : b))
}
Fb.prototype.Va = function() {
    if (this.Ye)
        for (; this.Ye.length;) this.Ye.shift()()
};

function Jb(a) {
    a && "function" == typeof a.A && a.A()
};

function Kb(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Xg = !1;
    this.Ts = !0
}
Kb.prototype.stopPropagation = function() {
    this.Xg = !0
};
Kb.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Ts = !1
};

function Lb(a) {
    return A ? "webkit" + a : ib ? "o" + a.toLowerCase() : a.toLowerCase()
}
var Mb = {
        By: "click",
        UA: "rightclick",
        Ly: "dblclick",
        Ch: "mousedown",
        Dh: "mouseup",
        Ki: "mouseover",
        Ji: "mouseout",
        gu: "mousemove",
        eu: "mouseenter",
        fu: "mouseleave",
        Bh: "mousecancel",
        ZA: "selectionchange",
        $A: "selectstart",
        AB: "wheel",
        Az: "keypress",
        zz: "keydown",
        Bz: "keyup",
        yy: "blur",
        pz: "focus",
        My: "deactivate",
        qz: "focusin",
        rz: "focusout",
        yh: "change",
        RA: "reset",
        YA: "select",
        hB: "submit",
        xz: "input",
        NA: "propertychange",
        cz: "dragstart",
        Yy: "drag",
        $y: "dragenter",
        bz: "dragover",
        az: "dragleave",
        hz: "drop",
        Zy: "dragend",
        pB: "touchstart",
        oB: "touchmove",
        nB: "touchend",
        mB: "touchcancel",
        vy: "beforeunload",
        Gy: "consolemessage",
        Hy: "contextmenu",
        Ny: "devicechange",
        Oy: "devicemotion",
        Py: "deviceorientation",
        Sy: "DOMContentLoaded",
        mz: "error",
        wz: "help",
        Cz: "load",
        Kz: "losecapture",
        xA: "orientationchange",
        PA: "readystatechange",
        SA: "resize",
        VA: "scroll",
        rB: "unload",
        zy: "canplay",
        Ay: "canplaythrough",
        jz: "durationchange",
        kz: "emptied",
        lz: "ended",
        Fz: "loadeddata",
        Gz: "loadedmetadata",
        BA: "pause",
        CA: "play",
        DA: "playing",
        OA: "ratechange",
        WA: "seeked",
        XA: "seeking",
        eB: "stalled",
        iB: "suspend",
        lB: "timeupdate",
        yB: "volumechange",
        zB: "waiting",
        dB: "sourceopen",
        cB: "sourceended",
        bB: "sourceclosed",
        ey: "abort",
        tB: "update",
        wB: "updatestart",
        uB: "updateend",
        vz: "hashchange",
        yA: "pagehide",
        zA: "pageshow",
        MA: "popstate",
        Jy: "copy",
        AA: "paste",
        Ky: "cut",
        oy: "beforecopy",
        py: "beforecut",
        ty: "beforepaste",
        fA: "online",
        eA: "offline",
        Mz: "message",
        Fy: "connect",
        yz: "install",
        gy: "activate",
        oz: "fetch",
        sz: "foreignfetch",
        Nz: "messageerror",
        fB: "statechange",
        vB: "updatefound",
        Iy: "controllerchange",
        ly: Lb("AnimationStart"),
        jy: Lb("AnimationEnd"),
        ky: Lb("AnimationIteration"),
        qB: Lb("TransitionEnd"),
        FA: "pointerdown",
        LA: "pointerup",
        EA: "pointercancel",
        IA: "pointermove",
        KA: "pointerover",
        JA: "pointerout",
        GA: "pointerenter",
        HA: "pointerleave",
        uz: "gotpointercapture",
        Lz: "lostpointercapture",
        Oz: "MSGestureChange",
        Pz: "MSGestureEnd",
        Qz: "MSGestureHold",
        Rz: "MSGestureStart",
        Sz: "MSGestureTap",
        Tz: "MSGotPointerCapture",
        Uz: "MSInertiaStart",
        Vz: "MSLostPointerCapture",
        Wz: "MSPointerCancel",
        Xz: "MSPointerDown",
        Yz: "MSPointerEnter",
        Zz: "MSPointerHover",
        $z: "MSPointerLeave",
        aA: "MSPointerMove",
        bA: "MSPointerOut",
        cA: "MSPointerOver",
        dA: "MSPointerUp",
        jB: "text",
        kB: x ? "textinput" : "textInput",
        Dy: "compositionstart",
        Ey: "compositionupdate",
        Cy: "compositionend",
        qy: "beforeinput",
        nz: "exit",
        Dz: "loadabort",
        Ez: "loadcommit",
        Hz: "loadredirect",
        Iz: "loadstart",
        Jz: "loadstop",
        TA: "responsive",
        aB: "sizechanged",
        sB: "unresponsive",
        xB: "visibilitychange",
        gB: "storage",
        Xy: "DOMSubtreeModified",
        Ty: "DOMNodeInserted",
        Vy: "DOMNodeRemoved",
        Wy: "DOMNodeRemovedFromDocument",
        Uy: "DOMNodeInsertedIntoDocument",
        Qy: "DOMAttrModified",
        Ry: "DOMCharacterDataModified",
        uy: "beforeprint",
        iy: "afterprint",
        sy: "beforeinstallprompt",
        ny: "appinstalled"
    },
    Nb = {
        Ch: Cb ? "pointerdown" : Db ? "MSPointerDown" : "mousedown",
        Dh: Cb ? "pointerup" : Db ? "MSPointerUp" : "mouseup",
        Bh: Cb ? "pointercancel" : Db ? "MSPointerCancel" : "mousecancel",
        gu: Cb ? "pointermove" : Db ? "MSPointerMove" : "mousemove",
        Ki: Cb ? "pointerover" : Db ? "MSPointerOver" : "mouseover",
        Ji: Cb ? "pointerout" : Db ? "MSPointerOut" : "mouseout",
        eu: Cb ? "pointerenter" : Db ? "MSPointerEnter" : "mouseenter",
        fu: Cb ? "pointerleave" : Db ? "MSPointerLeave" : "mouseleave"
    };

function Ob(a, b) {
    Kb.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.Ko = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.ie = null;
    a && this.K(a, b)
}
v(Ob, Kb);
var Pb = [1, 4, 2],
    Qb = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
Ob.prototype.K = function(a, b) {
    var c = this.type = a.type,
        e = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) {
        if (kb) {
            a: {
                try {
                    fb(b.nodeName);
                    var f = !0;
                    break a
                } catch (h) {}
                f = !1
            }
            f || (b = null)
        }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === e ? (this.offsetX = A || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = A || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Ko = mb ? a.metaKey : a.ctrlKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = p(a.pointerType) ? a.pointerType : Qb[a.pointerType] || "";
    this.state = a.state;
    this.ie = a;
    a.defaultPrevented && this.preventDefault()
};

function Rb(a) {
    return yb ? 0 == a.ie.button : "click" == a.type ? !0 : !!(a.ie.button & Pb[0])
}
Ob.prototype.stopPropagation = function() {
    Ob.s.stopPropagation.call(this);
    this.ie.stopPropagation ? this.ie.stopPropagation() : this.ie.cancelBubble = !0
};
Ob.prototype.preventDefault = function() {
    Ob.s.preventDefault.call(this);
    var a = this.ie;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Ab) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Sb = "closure_listenable_" + (1E6 * Math.random() | 0);

function Tb(a) {
    return !(!a || !a[Sb])
}
var Ub = 0;

function Vb(a, b, c, e, f) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!e;
    this.Gl = f;
    this.key = ++Ub;
    this.ui = this.Nk = !1
}

function Wb(a) {
    a.ui = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Gl = null
};

function Xb(a) {
    this.src = a;
    this.xc = {};
    this.qk = 0
}
Xb.prototype.add = function(a, b, c, e, f) {
    var h = a.toString();
    a = this.xc[h];
    a || (a = this.xc[h] = [], this.qk++);
    var k = Yb(a, b, e, f); - 1 < k ? (b = a[k], c || (b.Nk = !1)) : (b = new Vb(b, this.src, h, !!e, f), b.Nk = c, a.push(b));
    return b
};
Xb.prototype.remove = function(a, b, c, e) {
    a = a.toString();
    if (!(a in this.xc)) return !1;
    var f = this.xc[a];
    b = Yb(f, b, c, e);
    return -1 < b ? (Wb(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.xc[a], this.qk--), !0) : !1
};

function Zb(a, b) {
    var c = b.type;
    c in a.xc && ya(a.xc[c], b) && (Wb(b), 0 == a.xc[c].length && (delete a.xc[c], a.qk--))
}
Xb.prototype.removeAll = function(a) {
    a = a && a.toString();
    var b = 0,
        c;
    for (c in this.xc)
        if (!a || c == a) {
            for (var e = this.xc[c], f = 0; f < e.length; f++) ++b, Wb(e[f]);
            delete this.xc[c];
            this.qk--
        }
    return b
};
Xb.prototype.nj = function(a, b, c, e) {
    a = this.xc[a.toString()];
    var f = -1;
    a && (f = Yb(a, b, c, e));
    return -1 < f ? a[f] : null
};

function Yb(a, b, c, e) {
    for (var f = 0; f < a.length; ++f) {
        var h = a[f];
        if (!h.ui && h.listener == b && h.capture == !!c && h.Gl == e) return f
    }
    return -1
};
var $b = "closure_lm_" + (1E6 * Math.random() | 0),
    ac = {},
    bc = 0;

function cc(a, b, c, e, f) {
    if (e && e.once) return dc(a, b, c, e, f);
    if (r(b)) {
        for (var h = 0; h < b.length; h++) cc(a, b[h], c, e, f);
        return null
    }
    c = ec(c);
    return Tb(a) ? a.na(b, c, ia(e) ? !!e.capture : !!e, f) : fc(a, b, c, !1, e, f)
}

function fc(a, b, c, e, f, h) {
    if (!b) throw Error("Invalid event type");
    var k = ia(f) ? !!f.capture : !!f,
        l = gc(a);
    l || (a[$b] = l = new Xb(a));
    c = l.add(b, c, e, k, h);
    if (c.proxy) return c;
    e = hc();
    c.proxy = e;
    e.src = a;
    e.listener = c;
    if (a.addEventListener) Eb || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
    else if (a.attachEvent) a.attachEvent(ic(b.toString()), e);
    else if (a.addListener && a.removeListener) a.addListener(e);
    else throw Error("addEventListener and attachEvent are unavailable.");
    bc++;
    return c
}

function hc() {
    var a = jc,
        b = zb ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function dc(a, b, c, e, f) {
    if (r(b)) {
        for (var h = 0; h < b.length; h++) dc(a, b[h], c, e, f);
        return null
    }
    c = ec(c);
    return Tb(a) ? a.$r(b, c, ia(e) ? !!e.capture : !!e, f) : fc(a, b, c, !0, e, f)
}

function kc(a, b, c, e, f) {
    if (r(b))
        for (var h = 0; h < b.length; h++) kc(a, b[h], c, e, f);
    else e = ia(e) ? !!e.capture : !!e, c = ec(c), Tb(a) ? a.kd(b, c, e, f) : a && (a = gc(a)) && (b = a.nj(b, c, e, f)) && lc(b)
}

function lc(a) {
    if (!ba(a) && a && !a.ui) {
        var b = a.src;
        if (Tb(b)) Zb(b.Qe, a);
        else {
            var c = a.type,
                e = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(ic(c), e) : b.addListener && b.removeListener && b.removeListener(e);
            bc--;
            (c = gc(b)) ? (Zb(c, a), 0 == c.qk && (c.src = null, b[$b] = null)) : Wb(a)
        }
    }
}

function ic(a) {
    return a in ac ? ac[a] : ac[a] = "on" + a
}

function mc(a, b, c, e) {
    var f = !0;
    if (a = gc(a))
        if (b = a.xc[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var h = b[a];
                h && h.capture == c && !h.ui && (h = nc(h, e), f = f && !1 !== h)
            }
    return f
}

function nc(a, b) {
    var c = a.listener,
        e = a.Gl || a.src;
    a.Nk && lc(a);
    return c.call(e, b)
}

function jc(a, b) {
    if (a.ui) return !0;
    if (!zb) {
        if (!b) a: {
            b = ["window", "event"];
            for (var c = g, e = 0; e < b.length; e++)
                if (c = c[b[e]], null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        e = b;
        b = new Ob(e, this);
        c = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (k) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = b.currentTarget; f; f = f.parentNode) e.push(f);a = a.type;
            for (f = e.length - 1; !b.Xg && 0 <= f; f--) {
                b.currentTarget = e[f];
                var h = mc(e[f], a, !0, b);
                c = c && h
            }
            for (f = 0; !b.Xg && f < e.length; f++) b.currentTarget =
                e[f],
            h = mc(e[f], a, !1, b),
            c = c && h
        }
        return c
    }
    return nc(a, new Ob(b, this))
}

function gc(a) {
    a = a[$b];
    return a instanceof Xb ? a : null
}
var oc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function ec(a) {
    if (u(a)) return a;
    a[oc] || (a[oc] = function(b) {
        return a.handleEvent(b)
    });
    return a[oc]
};
// Copyright 2016 Google Inc.  Apache License 2.0
w.Touch = {};
w.Touch.nk = null;
w.Touch.Xd = {};
g.PointerEvent ? w.Touch.Xd = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : Bb && (w.Touch.Xd = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
w.Vl = 0;
w.Lw = function(a, b) {
    w.Vf();
    a.changedTouches && 1 != a.changedTouches.length || (w.Vl = setTimeout(function() {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        b && pc(b, a)
    }, w.bu))
};
w.Vf = function() {
    w.Vl && (clearTimeout(w.Vl), w.Vl = 0)
};
w.Touch.Me = function() {
    w.Touch.nk = null
};
w.Touch.qp = function(a) {
    return !w.Touch.Bw(a) || w.Touch.cv(a)
};
w.Touch.Cl = function(a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 != a.changedTouches[0].identifier && null != a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
w.Touch.cv = function(a) {
    var b = w.Touch.Cl(a);
    return void 0 != w.Touch.nk && null != w.Touch.nk ? w.Touch.nk == b : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (w.Touch.nk = b, !0) : !1
};
w.Touch.Cx = function(a) {
    if (Ea(a.type, "touch")) {
        var b = a.changedTouches[0];
        a.clientX = b.clientX;
        a.clientY = b.clientY
    }
};
w.Touch.Bw = function(a) {
    return Ea(a.type, "touch") || Ea(a.type, "mouse") || Ea(a.type, "pointer")
};
w.Touch.Rl = function(a) {
    return Ea(a.type, "touch") || Ea(a.type, "pointer")
};
w.Touch.Fx = function(a) {
    var b = [];
    if (a.changedTouches)
        for (var c = 0; c < a.changedTouches.length; c++) b[c] = {
            type: a.type,
            changedTouches: [a.changedTouches[c]],
            target: a.target,
            stopPropagation: function() {
                a.stopPropagation()
            },
            preventDefault: function() {
                a.preventDefault()
            }
        };
    else b.push(a);
    return b
};

function C(a, b) {
    this.x = aa(a) ? a : 0;
    this.y = aa(b) ? b : 0
}
d = C.prototype;
d.clone = function() {
    return new C(this.x, this.y)
};

function qc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function rc(a, b) {
    var c = a.x - b.x;
    a = a.y - b.y;
    return Math.sqrt(c * c + a * a)
}

function sc(a, b) {
    return new C(a.x - b.x, a.y - b.y)
}

function tc(a, b) {
    return new C(a.x + b.x, a.y + b.y)
}
d.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
d.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
d.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
d.translate = function(a, b) {
    a instanceof C ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), ba(b) && (this.y += b));
    return this
};
d.scale = function(a, b) {
    b = ba(b) ? b : a;
    this.x *= a;
    this.y *= b;
    return this
};
w.j = {};
w.j.Dl = "";
w.j.ic = !0;
w.j.xn = 0;
w.j.Bk = "create";
w.j.wt = w.j.Bk;
w.j.Gm = "delete";
w.j.xt = w.j.Gm;
w.j.yh = "change";
w.j.wy = w.j.yh;
w.j.Li = "move";
w.j.xy = w.j.Li;
w.j.Xp = "var_create";
w.j.Yp = "var_delete";
w.j.Zp = "var_rename";
w.j.Ik = "ui";
w.j.Ip = "comment_create";
w.j.Jp = "comment_delete";
w.j.Hp = "comment_change";
w.j.Kp = "comment_move";
w.j.Gi = [];
w.j.V = function(a) {
    w.j.isEnabled() && (w.j.Gi.length || setTimeout(w.j.Sv, 0), w.j.Gi.push(a))
};
w.j.Sv = function() {
    for (var a = w.j.filter(w.j.Gi, !0), b = w.j.Gi.length = 0, c; c = a[b]; b++) {
        var e = uc[c.Dc] || null;
        if (e) {
            var f = c;
            f.ic && (e.qh.push(f), e.Wj.length = 0, e.qh.length > e.du && e.qh.unshift());
            for (var h = 0; c = e.yc[h]; h++) c(f)
        }
    }
};
w.j.filter = function(a, b) {
    a = Aa(a);
    b || a.reverse();
    for (var c = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.di()) {
            var k = [h.type, h.ac, h.Dc].join(" "),
                l = e[k];
            l ? h.type == w.j.Li ? (l.Tg = h.Tg, l.Sg = h.Sg, l.Xf = h.Xf) : h.type == w.j.yh && h.element == l.element && h.name == l.name ? l.newValue = h.newValue : h.type != w.j.Ik || "click" != h.element || "commentOpen" != l.element && "mutatorOpen" != l.element && "warningOpen" != l.element ? (e[k] = h, c.push(h)) : l.newValue = h.newValue : (e[k] = h, c.push(h))
        }
    a = c.filter(function(a) {
        return !a.di()
    });
    b || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == w.j.yh && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
w.j.ev = function() {
    for (var a = 0, b; b = w.j.Gi[a]; a++) b.ic = !1
};
w.j.disable = function() {
    w.j.xn++
};
w.j.enable = function() {
    w.j.xn--
};
w.j.isEnabled = function() {
    return 0 == w.j.xn
};
w.j.rc = function() {
    return w.j.Dl
};
w.j.S = function(a) {
    w.j.Dl = "boolean" == typeof a ? a ? w.i.ke() : "" : a
};
w.j.xr = function(a) {
    var b = [];
    a = vc(a, !1);
    for (var c = 0, e; e = a[c]; c++) b[c] = e.id;
    return b
};
w.j.ha = function(a, b) {
    switch (a.type) {
        case w.j.Bk:
            var c = new wc(null);
            break;
        case w.j.Gm:
            c = new xc(null);
            break;
        case w.j.yh:
            c = new yc(null, "", "", "", "");
            break;
        case w.j.Li:
            c = new zc(null);
            break;
        case w.j.Xp:
            c = new Ac(null);
            break;
        case w.j.Yp:
            c = new Bc(null);
            break;
        case w.j.Zp:
            c = new Cc(null, "");
            break;
        case w.j.Ik:
            c = new Dc(null);
            break;
        case w.j.Ip:
            c = new Ec(null);
            break;
        case w.j.Hp:
            c = new Fc(null);
            break;
        case w.j.Kp:
            c = new Gc(null);
            break;
        case w.j.Jp:
            c = new Hc(null);
            break;
        default:
            throw "Unknown event type.";
    }
    c.ha(a);
    c.Dc = b.id;
    return c
};
w.j.JB = function(a) {
    if (a.type == w.j.Li || a.type == w.j.Bk) {
        var b = uc[a.Dc] || null;
        if (a = Ic(b, a.ac))
            if (a.getParent() && !a.getParent().disabled) {
                b = vc(a, !1);
                a = 0;
                for (var c; c = b[a]; a++) c.Cd(!1)
            } else if ((a.P || a.Z) && !b.pb()) {
            do a.Cd(!0), a = Jc(a); while (a)
        }
    }
};
// Copyright 2018 Google Inc.  Apache License 2.0
function Kc() {
    this.Dc = void 0;
    this.group = w.j.Dl;
    this.ic = w.j.ic
}
Kc.prototype.Ba = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    return a
};
Kc.prototype.ha = function(a) {
    this.group = a.group
};
Kc.prototype.di = function() {
    return !1
};
Kc.prototype.run = function() {};

function Lc(a) {
    a = uc[a.Dc] || null;
    if (!a) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return a
};

function Mc(a) {
    Mc.s.constructor.call(this);
    this.qg = a.aa();
    this.Dc = a.o.id
}
v(Mc, Kc);
Mc.prototype.Ba = function() {
    var a = Mc.s.Ba.call(this);
    a.varId = this.qg;
    return a
};
Mc.prototype.ha = function(a) {
    Mc.s.Ba.call(this);
    this.qg = a.varId
};

function Ac(a) {
    a && (Ac.s.constructor.call(this, a), this.uh = a.type, this.sh = a.name)
}
v(Ac, Mc);
Ac.prototype.type = w.j.Xp;
Ac.prototype.Ba = function() {
    var a = Ac.s.Ba.call(this);
    a.varType = this.uh;
    a.varName = this.sh;
    return a
};
Ac.prototype.ha = function(a) {
    Ac.s.ha.call(this, a);
    this.uh = a.varType;
    this.sh = a.varName
};
Ac.prototype.run = function(a) {
    var b = Lc(this);
    a ? b.Yc(this.sh, this.uh, this.qg) : b.Bf(this.qg)
};

function Bc(a) {
    a && (Bc.s.constructor.call(this, a), this.uh = a.type, this.sh = a.name)
}
v(Bc, Mc);
Bc.prototype.type = w.j.Yp;
Bc.prototype.Ba = function() {
    var a = Bc.s.Ba.call(this);
    a.varType = this.uh;
    a.varName = this.sh;
    return a
};
Bc.prototype.ha = function(a) {
    Bc.s.ha.call(this, a);
    this.uh = a.varType;
    this.sh = a.varName
};
Bc.prototype.run = function(a) {
    var b = Lc(this);
    a ? b.Bf(this.qg) : b.Yc(this.sh, this.uh, this.qg)
};

function Cc(a, b) {
    a && (Cc.s.constructor.call(this, a), this.zo = a.name, this.vo = b)
}
v(Cc, Mc);
Cc.prototype.type = w.j.Zp;
Cc.prototype.Ba = function() {
    var a = Cc.s.Ba.call(this);
    a.oldName = this.zo;
    a.newName = this.vo;
    return a
};
Cc.prototype.ha = function(a) {
    Cc.s.ha.call(this, a);
    this.zo = a.oldName;
    this.vo = a.newName
};
Cc.prototype.run = function(a) {
    var b = Lc(this);
    a ? b.ah(this.qg, this.vo) : b.ah(this.qg, this.zo)
};
// Copyright 2017 Google Inc.  Apache License 2.0
function Nc(a) {
    this.qa = {};
    this.o = a
}
d = Nc.prototype;
d.clear = function() {
    this.qa = Object(null)
};
d.To = function(a, b) {
    var c = this.Kc(b, a.type),
        e = Oc(this.o);
    w.j.S(!0);
    try {
        if (c && c.aa() != a.aa()) {
            var f = a.type;
            b != c.name && Pc(c, b, e);
            for (b = 0; b < e.length; b++) e[b].$j(a.aa(), c.aa());
            w.j.V(new Bc(a));
            this.qa[f].splice(this.rj(f).indexOf(a), 1)
        } else Pc(a, b, e)
    } finally {
        w.j.S(!1)
    }
};
d.ah = function(a, b) {
    var c = this.Kd(a);
    if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.To(c, b)
};

function Pc(a, b, c) {
    w.j.V(new Cc(a, b));
    a.name = b;
    for (b = 0; b < c.length; b++) c[b].Cm(a)
}
d.Yc = function(a, b, c) {
    var e = this.Kc(a, b);
    if (e) {
        if (c && e.aa() != c) throw Error('Variable "' + a + '" is already in use and its id is "' + e.aa() + '" which conflicts with the passed in id, "' + c + '".');
        return e
    }
    if (c && this.Kd(c)) throw Error('Variable id, "' + c + '", is already in use.');
    c = c || w.i.ke();
    b = b || "";
    e = new Qc(this.o, a, b, c);
    this.qa[b] ? this.qa[b].push(e) : this.qa[b] = [e];
    return e
};
d.Bf = function(a) {
    var b = this.Kd(a);
    if (b) {
        var c = b.name,
            e = this.Qn(a);
        a = 0;
        for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
                a = D(f, "NAME");
                c = w.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", c).replace("%2", a);
                w.alert(c);
                return
            }
        var h = this;
        1 < e.length ? (c = w.g.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", c), w.confirm(c, function(a) {
            a && h.Yk(b, e)
        })) : h.Yk(b, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};
d.Yk = function(a, b) {
    var c = w.j.rc();
    c || w.j.S(!0);
    try {
        for (var e = 0; e < b.length; e++) b[e].A(!0, !1);
        var f = this.qa[a.type];
        b = 0;
        for (var h; h = f[b]; b++)
            if (h.aa() == a.aa()) {
                f.splice(b, 1);
                w.j.V(new Bc(a));
                break
            }
    } finally {
        c || w.j.S(!1)
    }
};
d.Kc = function(a, b) {
    if (b = this.qa[b || ""])
        for (var c = 0, e; e = b[c]; c++)
            if (Rc(e.name, a)) return e;
    return null
};
d.Kd = function(a) {
    for (var b = Object.keys(this.qa), c = 0; c < b.length; c++)
        for (var e = b[c], f = 0, h; h = this.qa[e][f]; f++)
            if (h.aa() == a) return h;
    return null
};
d.rj = function(a) {
    return (a = this.qa[a || ""]) ? a.slice() : []
};
d.Pn = function() {
    for (var a = Object.keys(this.qa), b = !1, c = 0; c < a.length; c++) "" == a[c] && (b = !0);
    b || a.push("");
    return a
};
d.Re = function() {
    for (var a = [], b = Object.keys(this.qa), c = 0; c < b.length; c++) a = a.concat(this.qa[b[c]]);
    return a
};
d.Qn = function(a) {
    for (var b = [], c = Oc(this.o), e = 0; e < c.length; e++) {
        var f = c[e].Ff();
        if (f)
            for (var h = 0; h < f.length; h++) f[h].aa() == a && b.push(c[e])
    }
    return b
};

function Sc(a) {
    this.Gd = a.id;
    this.Dc = a.o.id;
    this.group = w.j.Dl;
    this.ic = w.j.ic
}
v(Sc, Kc);
Sc.prototype.Ba = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    this.Gd && (a.commentId = this.Gd);
    return a
};
Sc.prototype.ha = function(a) {
    this.Gd = a.commentId;
    this.group = a.group
};

function Fc(a, b, c) {
    a && (Fc.s.constructor.call(this, a), this.qs = b, this.bm = c)
}
v(Fc, Sc);
d = Fc.prototype;
d.type = w.j.Hp;
d.Ba = function() {
    var a = Fc.s.Ba.call(this);
    a.newContents = this.bm;
    return a
};
d.ha = function(a) {
    Fc.s.ha.call(this, a);
    this.bm = a.newValue
};
d.di = function() {
    return this.qs == this.bm
};
d.run = function(a) {
    var b = Tc(Lc(this), this.Gd);
    b ? b.Bd(a ? this.bm : this.qs) : console.warn("Can't change non-existent comment: " + this.Gd)
};

function Ec(a) {
    a && (Ec.s.constructor.call(this, a), this.xml = a.mk())
}
v(Ec, Sc);
Ec.prototype.type = w.j.Ip;
Ec.prototype.Ba = function() {
    var a = Ec.s.Ba.call(this);
    a.xml = w.D.Zc(this.xml);
    return a
};
Ec.prototype.ha = function(a) {
    Ec.s.ha.call(this, a);
    this.xml = w.D.Pc("<xml>" + a.xml + "</xml>").firstChild
};
Ec.prototype.run = function(a) {
    var b = Lc(this);
    a ? (a = E("xml"), a.appendChild(this.xml), w.D.ee(a, b)) : (b = Tc(b, this.Gd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Gd)
};

function Hc(a) {
    a && (Hc.s.constructor.call(this, a), this.xml = a.mk())
}
v(Hc, Sc);
Hc.prototype.type = w.j.Jp;
Hc.prototype.Ba = function() {
    return Hc.s.Ba.call(this)
};
Hc.prototype.ha = function(a) {
    Hc.s.ha.call(this, a)
};
Hc.prototype.run = function(a) {
    var b = Lc(this);
    a ? (b = Tc(b, this.Gd)) ? b.A(!1, !1) : console.warn("Can't uncreate non-existent comment: " + this.Gd) : (a = E("xml"), a.appendChild(this.xml), w.D.ee(a, b))
};

function Gc(a) {
    a && (Gc.s.constructor.call(this, a), this.kn = a, this.yo = a.nd.clone(), this.Rg = null)
}
v(Gc, Sc);
d = Gc.prototype;
d.af = function() {
    if (!this.kn) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.Rg = this.kn.nd.clone();
    this.kn = null
};
d.type = w.j.Kp;
d.Ba = function() {
    var a = Gc.s.Ba.call(this);
    this.Rg && (a.newCoordinate = Math.round(this.Rg.x) + "," + Math.round(this.Rg.y));
    return a
};
d.ha = function(a) {
    Gc.s.ha.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Rg = new C(parseFloat(a[0]), parseFloat(a[1])))
};
d.di = function() {
    return qc(this.yo, this.Rg)
};
d.run = function(a) {
    var b = Tc(Lc(this), this.Gd);
    if (b) {
        a = a ? this.Rg : this.yo;
        var c = b.nd.clone();
        b.moveBy(a.x - c.x, a.y - c.y)
    } else console.warn("Can't move non-existent comment: " + this.Gd)
};

function Uc(a, b, c, e, f) {
    this.id = f && !Tc(a, f) ? f : w.i.ke();
    a.Ai.push(this);
    a.Tk[this.id] && console.warn('Overriding an existing comment on this workspace, with id "' + this.id + '"');
    a.Tk[this.id] = this;
    this.nd = new C(0, 0);
    this.Fa = c;
    this.ia = e;
    this.o = a;
    this.u = a.u;
    this.Rj = this.dj = !0;
    this.Xc = b;
    this.Qr = !0;
    Wc(this)
}
d = Uc.prototype;
d.A = function() {
    if (this.o) {
        w.j.isEnabled() && w.j.V(new Hc(this));
        var a = this.o;
        if (!ya(a.Ai, this)) throw "Comment not present in workspace's list of top-most comments.";
        delete a.Tk[this.id];
        this.o = null
    }
};
d.Xh = function() {
    return this.Fa
};
d.cd = function() {
    return this.ia
};
d.moveBy = function(a, b) {
    var c = new Gc(this);
    this.nd.translate(a, b);
    c.af();
    w.j.V(c)
};
d.fc = function() {
    return this.dj && !(this.o && this.o.options.readOnly)
};
d.hp = function(a) {
    this.dj = a
};
d.se = function() {
    return this.Rj && !(this.o && this.o.options.readOnly)
};
d.eh = function(a) {
    this.Rj = a
};
d.Jc = function() {
    return this.Xc
};
d.Bd = function(a) {
    this.Xc != a && (w.j.V(new Fc(this, this.Xc, a)), this.Xc = a)
};
d.mk = function(a) {
    a = Xc(this, a);
    a.setAttribute("x", Math.round(this.nd.x));
    a.setAttribute("y", Math.round(this.nd.y));
    a.setAttribute("h", this.Fa);
    a.setAttribute("w", this.ia);
    return a
};

function Xc(a, b) {
    var c = E("comment");
    b || c.setAttribute("id", a.id);
    c.textContent = a.Jc();
    return c
}

function Wc(a) {
    if (w.j.isEnabled()) {
        var b = w.j.rc();
        b || w.j.S(!0);
        try {
            w.j.V(new Ec(a))
        } finally {
            b || w.j.S(!1)
        }
    }
}

function Yc(a) {
    var b = a.getAttribute("h"),
        c = a.getAttribute("w");
    return {
        id: a.getAttribute("id"),
        Cr: b ? parseInt(b, 10) : 100,
        rt: c ? parseInt(c, 10) : 100,
        x: parseInt(a.getAttribute("x"), 10),
        y: parseInt(a.getAttribute("y"), 10),
        content: a.textContent
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function Zc(a) {
    this.id = w.i.ke();
    uc[this.id] = this;
    this.options = a || {};
    this.u = !!this.options.u;
    this.qe = !!this.options.qe;
    this.Ca = this.options.Ca;
    this.zi = [];
    this.Ai = [];
    this.Tk = Object.create(null);
    this.yc = [];
    this.qh = [];
    this.Wj = [];
    this.an = Object.create(null);
    this.qa = new Nc(this);
    this.si = null
}
d = Zc.prototype;
d.R = !1;
d.fo = !1;
d.du = 1024;
d.A = function() {
    this.yc.length = 0;
    this.clear();
    delete uc[this.id]
};

function $c(a, b) {
    if (!ya(a.zi, b)) throw "Block not present in workspace's list of top-most blocks.";
}

function ad(a, b) {
    var c = [].concat(a.zi);
    if (b && 1 < c.length) {
        var e = Math.sin(3 * Math.PI / 180);
        a.u && (e *= -1);
        c.sort(function(a, b) {
            a = a.la();
            b = b.la();
            return a.y + e * a.x - (b.y + e * b.x)
        })
    }
    return c
}

function bd(a, b) {
    var c = [].concat(a.Ai);
    if (b && 1 < c.length) {
        var e = Math.sin(3 * Math.PI / 180);
        a.u && (e *= -1);
        c.sort(function(a, b) {
            a = a.la();
            b = b.la();
            return a.y + e * a.x - (b.y + e * b.x)
        })
    }
    return c
}

function Oc(a) {
    var b = ad(a, !1);
    for (a = 0; a < b.length; a++) b.push.apply(b, b[a].Ef(!1));
    return b
}
d.clear = function() {
    this.fo = !0;
    try {
        var a = w.j.rc();
        for (a || w.j.S(!0); this.zi.length;) this.zi[0].A();
        for (; this.Ai.length;) this.Ai[this.Ai.length - 1].A();
        a || w.j.S(!1);
        this.qa.clear();
        this.si && this.si.clear()
    } finally {
        this.fo = !1
    }
};
d.ah = function(a, b) {
    this.qa.ah(a, b)
};
d.Yc = function(a, b, c) {
    return this.qa.Yc(a, b, c)
};
d.Qn = function(a) {
    return this.qa.Qn(a)
};
d.Bf = function(a) {
    this.qa.Bf(a)
};
d.Yk = function(a, b) {
    this.qa.Yk(a, b)
};
d.Kc = function(a, b) {
    return this.qa.Kc(a, b)
};
d.Kd = function(a) {
    return this.qa.Kd(a)
};
d.rj = function(a) {
    return this.qa.rj(a)
};
d.Pn = function() {
    return this.qa.Pn()
};
d.Re = function() {
    return this.qa.Re()
};
d.cd = function() {
    return 0
};
d.Xe = function(a, b) {
    return new cd(this, a, b)
};

function dd(a) {
    return isNaN(a.options.ds) ? Infinity : a.options.ds - Oc(a).length
}
d.Dp = function(a) {
    var b = a ? this.Wj : this.qh,
        c = a ? this.qh : this.Wj,
        e = b.pop();
    if (e) {
        for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group;) f.push(b.pop());
        for (b = 0; e = f[b]; b++) c.push(e);
        f = w.j.filter(f, a);
        w.j.ic = !1;
        try {
            for (b = 0; e = f[b]; b++) e.run(a)
        } finally {
            w.j.ic = !0
        }
    }
};
d.vq = function() {
    this.qh.length = 0;
    this.Wj.length = 0;
    w.j.ev()
};
d.Vc = function(a) {
    this.yc.push(a);
    return a
};
d.bf = function(a) {
    ya(this.yc, a)
};

function Ic(a, b) {
    return a.an[b] || null
}

function Tc(a, b) {
    return a.Tk[b] || null
}
var uc = Object.create(null);
Zc.prototype.clear = Zc.prototype.clear;
Zc.prototype.clearUndo = Zc.prototype.vq;
Zc.prototype.addChangeListener = Zc.prototype.Vc;
Zc.prototype.removeChangeListener = Zc.prototype.bf;
var ed = !x || 9 <= Number(wb),
    fd = !kb && !x || x && 9 <= Number(wb) || kb && vb("1.9.1"),
    gd = x && !vb("9");
var hd = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};

function id() {
    this.yp = "";
    this.uu = jd
}
id.prototype.Lf = !0;
id.prototype.pe = function() {
    return this.yp
};
id.prototype.toString = function() {
    return "Const{" + this.yp + "}"
};

function kd(a) {
    return a instanceof id && a.constructor === id && a.uu === jd ? a.yp : "type_error:Const"
}
var jd = {};

function ld() {
    this.Js = "";
    this.Bu = md
}
ld.prototype.Lf = !0;
ld.prototype.pe = function() {
    return this.Js
};
ld.prototype.ao = !0;
ld.prototype.Wh = function() {
    return 1
};
var md = {};

function nd() {
    this.Wg = "";
    this.su = od
}
nd.prototype.Lf = !0;
nd.prototype.pe = function() {
    return this.Wg
};
nd.prototype.ao = !0;
nd.prototype.Wh = function() {
    return 1
};

function pd(a) {
    if (a instanceof nd && a.constructor === nd && a.su === od) return a.Wg;
    fa(a);
    return "type_error:SafeUrl"
}
var qd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function rd(a) {
    if (a instanceof nd) return a;
    a = a.Lf ? a.pe() : String(a);
    qd.test(a) || (a = "about:invalid#zClosurez");
    return sd(a)
}
var od = {};

function sd(a) {
    var b = new nd;
    b.Wg = a;
    return b
}
sd("about:blank");

function td() {
    this.Qo = "";
    this.qu = ud
}
td.prototype.Lf = !0;
var ud = {};
td.prototype.pe = function() {
    return this.Qo
};
td.prototype.Kl = function(a) {
    this.Qo = a;
    return this
};
var vd = (new td).Kl("");

function wd(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var e = a[c];
        null != e && (e = r(e) ? ua(e, xd).join(" ") : xd(e), b += c + ":" + e + ";")
    }
    return b ? (new td).Kl(b) : vd
}

function xd(a) {
    if (a instanceof nd) a = 'url("' + pd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    else if (a instanceof id) a = kd(a);
    else {
        a = String(a);
        var b = a.replace(yd, "$1").replace(zd, "url");
        if (b = Ad.test(b)) {
            for (var c = b = !0, e = 0; e < a.length; e++) {
                var f = a.charAt(e);
                "'" == f && c ? b = !b : '"' == f && b && (c = !c)
            }
            b = b && c
        }
        a = b ? Bd(a) : "zClosurez"
    }
    return a
}
var Ad = /^[-,."'%_!# a-zA-Z0-9]+$/,
    zd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    yd = /\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function Bd(a) {
    return a.replace(zd, function(a, c, e, f) {
        var b = "";
        e = e.replace(/^(['"])(.*)\1$/, function(a, c, e) {
            b = c;
            return e
        });
        a = rd(e).pe();
        return c + b + a + b + f
    })
};

function Cd() {
    this.Wg = "";
    this.pu = Dd;
    this.er = null
}
Cd.prototype.ao = !0;
Cd.prototype.Wh = function() {
    return this.er
};
Cd.prototype.Lf = !0;
Cd.prototype.pe = function() {
    return this.Wg
};

function Ed(a) {
    if (a instanceof Cd && a.constructor === Cd && a.pu === Dd) return a.Wg;
    fa(a);
    return "type_error:SafeHtml"
}

function Gd(a) {
    if (a instanceof Cd) return a;
    var b = null;
    a.ao && (b = a.Wh());
    return Hd(Ia(a.Lf ? a.pe() : String(a)), b)
}
var Id = /^[a-zA-Z0-9-]+$/,
    Jd = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Kd = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function Ld(a, b, c) {
    var e = String(a);
    if (!Id.test(e)) throw Error("Invalid tag name <" + e + ">.");
    if (e.toUpperCase() in Kd) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.");
    a = String(a);
    e = null;
    var f = "<" + a,
        h = "";
    if (b)
        for (n in b) {
            if (!Id.test(n)) throw Error('Invalid attribute name "' + n + '".');
            var k = b[n];
            if (null != k) {
                var l = a;
                var m = n;
                if (k instanceof id) k = kd(k);
                else if ("style" == m.toLowerCase()) {
                    if (!ia(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k +
                        " given: " + k);
                    k instanceof td || (k = wd(k));
                    k instanceof td && k.constructor === td && k.qu === ud ? k = k.Qo : (fa(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(m)) throw Error('Attribute "' + m + '" requires goog.string.Const value, "' + k + '" given.');
                    if (m.toLowerCase() in Jd)
                        if (k instanceof ld) k instanceof ld && k.constructor === ld && k.Bu === md ? k = k.Js : (fa(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof nd) k = pd(k);
                    else if (p(k)) k = rd(k).pe();
                    else throw Error('Attribute "' + m + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                        k + '" given.');
                }
                k.Lf && (k = k.pe());
                m = m + '="' + Ia(String(k)) + '"';
                h += " " + m
            }
        }
    var n = f + h;
    null != c ? r(c) || (c = [c]) : c = [];
    !0 === hd[a.toLowerCase()] ? n += ">" : (c = Md(c), n += ">" + Ed(c) + "</" + a + ">", e = c.Wh());
    (b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return Hd(n, e)
}

function Md(a) {
    function b(a) {
        r(a) ? sa(a, b) : (a = Gd(a), e += Ed(a), a = a.Wh(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        e = "";
    sa(arguments, b);
    return Hd(e, c)
}
var Dd = {};

function Hd(a, b) {
    return (new Cd).Kl(a, b)
}
Cd.prototype.Kl = function(a, b) {
    this.Wg = a;
    this.er = b;
    return this
};
Hd("<!DOCTYPE html>", 0);
var Nd = Hd("", 0),
    Od = Hd("<br>", 0);

function Pd(a, b) {
    a.innerHTML = Ed(b)
};

function Qd(a, b) {
    this.width = a;
    this.height = b
}
d = Qd.prototype;
d.clone = function() {
    return new Qd(this.width, this.height)
};
d.Ou = function() {
    return this.width * this.height
};
d.aspectRatio = function() {
    return this.width / this.height
};
d.Sr = function() {
    return !this.Ou()
};
d.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
d.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
d.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
d.scale = function(a, b) {
    b = ba(b) ? b : a;
    this.width *= a;
    this.height *= b;
    return this
};

function Rd(a) {
    return a ? new Sd(Td(a)) : qa || (qa = new Sd)
}

function Ud(a, b) {
    var c = document;
    b = b || c;
    if (b.querySelectorAll && b.querySelector) return b.querySelectorAll("TBODY" + (a ? "." + a : ""));
    if (a && b.getElementsByClassName) {
        b = b.getElementsByClassName(a);
        c = {};
        for (var e = 0, f = 0, h; h = b[f]; f++) "TBODY" == h.nodeName && (c[e++] = h);
        c.length = e;
        return c
    }
    b = b.getElementsByTagName("TBODY");
    if (a) {
        c = {};
        for (f = e = 0; h = b[f]; f++) {
            var k = h.className;
            "function" == typeof k.split && xa(k.split(/\s+/), a) && (c[e++] = h)
        }
        c.length = e;
        return c
    }
    return b
}

function Vd(a, b) {
    bb(b, function(b, e) {
        b && b.Lf && (b = b.pe());
        "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : Wd.hasOwnProperty(e) ? a.setAttribute(Wd[e], b) : Ea(e, "aria-") || Ea(e, "data-") ? a.setAttribute(e, b) : a[e] = b
    })
}
var Wd = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Xd() {
    var a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Qd(a.clientWidth, a.clientHeight)
}

function Yd(a) {
    var b = Zd(a);
    a = a.parentWindow || a.defaultView;
    return x && vb("10") && a.pageYOffset != b.scrollTop ? new C(b.scrollLeft, b.scrollTop) : new C(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function Zd(a) {
    return a.scrollingElement ? a.scrollingElement : A || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function E(a, b, c) {
    return $d(document, arguments)
}

function $d(a, b) {
    var c = String(b[0]),
        e = b[1];
    if (!ed && e && (e.name || e.type)) {
        c = ["<", c];
        e.name && c.push(' name="', Ia(e.name), '"');
        if (e.type) {
            c.push(' type="', Ia(e.type), '"');
            var f = {};
            db(f, e);
            delete f.type;
            e = f
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    e && (p(e) ? c.className = e : r(e) ? c.className = e.join(" ") : Vd(c, e));
    2 < b.length && ae(a, c, b, 2);
    return c
}

function ae(a, b, c, e) {
    function f(c) {
        c && b.appendChild(p(c) ? a.createTextNode(c) : c)
    }
    for (; e < c.length; e++) {
        var h = c[e];
        !ha(h) || ia(h) && 0 < h.nodeType ? f(h) : sa(be(h) ? Aa(h) : h, f)
    }
}

function ce(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function de(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function F(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}

function ee(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Td(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function fe(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b)
    } else ce(a), a.appendChild(Td(a).createTextNode(String(b)))
}
var ge = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    he = {
        IMG: " ",
        BR: "\n"
    };

function ie(a) {
    return x && !vb("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
}

function je(a) {
    a = a.tabIndex;
    return ba(a) && 0 <= a && 32768 > a
}

function ke(a) {
    if (gd && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        le(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    gd || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function me(a) {
    var b = [];
    le(a, b, !1);
    return b.join("")
}

function le(a, b, c) {
    if (!(a.nodeName in ge))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in he) b.push(he[a.nodeName]);
    else
        for (a = a.firstChild; a;) le(a, b, c), a = a.nextSibling
}

function be(a) {
    if (a && "number" == typeof a.length) {
        if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (u(a)) return "function" == typeof a.item
    }
    return !1
}

function Sd(a) {
    this.Hd = a || g.document || document
}
d = Sd.prototype;
d.pc = Rd;
d.F = function(a) {
    return p(a) ? this.Hd.getElementById(a) : a
};
d.getElementsByTagName = function(a, b) {
    return (b || this.Hd).getElementsByTagName(String(a))
};
d.setProperties = Vd;
d.X = function(a, b, c) {
    return $d(this.Hd, arguments)
};
d.createElement = function(a) {
    return this.Hd.createElement(String(a))
};
d.createTextNode = function(a) {
    return this.Hd.createTextNode(String(a))
};
d.Gq = function(a, b) {
    for (var c = this.Hd, e = c.createElement("TABLE"), f = e.appendChild(c.createElement("TBODY")), h = 0; h < a; h++) {
        for (var k = c.createElement("TR"), l = 0; l < b; l++) k.appendChild(c.createElement("TD"));
        f.appendChild(k)
    }
    return e
};
d.appendChild = function(a, b) {
    a.appendChild(b)
};
d.append = function(a, b) {
    ae(Td(a), a, arguments, 1)
};
d.canHaveChildren = function(a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
    }
    return !0
};
d.Qs = ce;
d.removeNode = F;
d.Ef = function(a) {
    return fd && void 0 != a.children ? a.children : ta(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
d.contains = ee;
d.We = function(a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!ie(a) || je(a)) : ie(a) && je(a)) && x ? (a = !u(a.getBoundingClientRect) || x && null == a.parentElement ? {
        height: a.offsetHeight,
        width: a.offsetWidth
    } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};

function ne(a, b, c, e, f, h) {
    this.m = a;
    this.Xc = b;
    this.Zs = c;
    c = oe;
    this.m.u && (c = -c);
    this.Pu = c * Math.PI / 180;
    a.Ud.appendChild(this.Zi(b, !(!f || !h)));
    this.rd = e;
    this.cg && pe(this);
    f && h || (b = this.Xc.getBBox(), f = b.width + 2 * qe, h = b.height + 2 * qe);
    this.eg(f, h);
    pe(this);
    re(this);
    this.cg = !0;
    a.options.readOnly || (w.O(this.Si, "mousedown", this, this.Vu), this.Lb && w.O(this.Lb, "mousedown", this, this.Vo))
}
var qe = 6,
    oe = 20,
    se = null,
    te = null;
d = ne.prototype;
d.Uo = null;

function ue() {
    se && (w.Ma(se), se = null);
    te && (w.Ma(te), te = null)
}

function ve() {
    w.Touch.Me();
    ue()
}
d.cg = !1;
d.rd = null;
d.ti = 0;
d.Yj = 0;
d.ia = 0;
d.Fa = 0;
d.Kk = !0;
d.Zi = function(a, b) {
    this.Wc = w.i.B("g", {}, null);
    var c = {
        filter: "url(#" + this.m.options.nr + ")"
    }; - 1 != Ya.indexOf("JavaFX") && (c = {});
    c = w.i.B("g", c, this.Wc);
    this.dn = w.i.B("path", {}, c);
    this.Si = w.i.B("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: qe,
        ry: qe
    }, c);
    b ? (this.Lb = w.i.B("g", {
        "class": this.m.u ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.Wc), b = 2 * qe, w.i.B("polygon", {
        points: "0,x x,x x,0".replace(/x/g, b.toString())
    }, this.Lb), w.i.B("line", {
        "class": "blocklyResizeLine",
        x1: b / 3,
        y1: b - 1,
        x2: b - 1,
        y2: b / 3
    }, this.Lb), w.i.B("line", {
        "class": "blocklyResizeLine",
        x1: 2 * b / 3,
        y1: b - 1,
        x2: b - 1,
        y2: 2 * b / 3
    }, this.Lb)) : this.Lb = null;
    this.Wc.appendChild(a);
    return this.Wc
};
d.ga = function() {
    return this.Wc
};

function we(a, b) {
    a.Wc.dataset && (a.Wc.dataset.ac = b)
}
d.Vu = function(a) {
    var b = this.m.me(a);
    b && (b.Cc || (b.Cc = this), b.Nc = a)
};
d.xi = function() {};
d.fc = function() {
    return !1
};
d.Vo = function(a) {
    xe(this);
    ue();
    w.i.Sf(a) || (this.m.ym(a, new C(this.m.u ? -this.ia : this.ia, this.Fa)), se = w.O(document, "mouseup", this, ve), te = w.O(document, "mousemove", this, this.Wo), w.Pb());
    a.stopPropagation()
};
d.Wo = function(a) {
    this.Kk = !1;
    a = ye(this.m, a);
    this.eg(this.m.u ? -a.x : a.x, a.y);
    this.m.u && pe(this)
};

function xe(a) {
    var b = a.Wc.parentNode;
    return b.lastChild !== a.Wc ? (b.appendChild(a.Wc), !0) : !1
}

function pe(a) {
    var b = a.rd.x;
    b = a.m.u ? b - (a.ti + a.ia) : b + a.ti;
    a.moveTo(b, a.Yj + a.rd.y)
}
d.moveTo = function(a, b) {
    this.Wc.setAttribute("transform", "translate(" + a + "," + b + ")")
};
d.Ig = function() {
    return {
        width: this.ia,
        height: this.Fa
    }
};
d.eg = function(a, b) {
    var c = 2 * qe;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 20);
    this.ia = a;
    this.Fa = b;
    this.Si.setAttribute("width", a);
    this.Si.setAttribute("height", b);
    this.Lb && (this.m.u ? this.Lb.setAttribute("transform", "translate(" + 2 * qe + "," + (b - c) + ") scale(-1 1)") : this.Lb.setAttribute("transform", "translate(" + (a - c) + "," + (b - c) + ")"));
    if (this.cg) {
        if (this.Kk) {
            a = -this.ia / 4;
            b = -this.Fa - 25;
            c = this.m.qb();
            c.xa /= this.m.scale;
            c.Ab /= this.m.scale;
            var e = this.rd.x;
            this.m.u ? e - c.Ab - a - this.ia < G ? a = e - c.Ab - this.ia - G : e - c.Ab - a > c.xa && (a =
                e - c.Ab - c.xa) : e + a < c.Ab ? a = c.Ab - e : c.Ab + c.xa < e + a + this.ia + 10 + G && (a = c.Ab + c.xa - e - this.ia - G);
            this.rd.y + b < c.De && (b = this.Zs.getBBox().height);
            this.ti = a;
            this.Yj = b
        }
        pe(this);
        re(this)
    }
    this.Uo && this.Uo()
};

function re(a) {
    var b = [],
        c = a.ia / 2,
        e = a.Fa / 2,
        f = -a.ti,
        h = -a.Yj;
    if (c == f && e == h) b.push("M " + c + "," + e);
    else {
        h -= e;
        f -= c;
        a.m.u && (f *= -1);
        var k = Math.sqrt(h * h + f * f),
            l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            q = Math.cos(m),
            t = a.Ig();
        m = (t.width + t.height) / 5;
        m = Math.min(m, t.width, t.height) / 4;
        t = 1 - 8 / k;
        f = c + t * f;
        h = e + t * h;
        t = c + m * q;
        var z = e + m * n;
        c -= m * q;
        e -= m * n;
        n = l + a.Pu;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / 4;
        k = Math.cos(n) * k / 4;
        b.push("M" + t + "," + z);
        b.push("C" + (t + k) + "," +
            (z + l) + " " + f + "," + h + " " + f + "," + h);
        b.push("C" + f + "," + h + " " + (c + k) + "," + (e + l) + " " + c + "," + e)
    }
    b.push("z");
    a.dn.setAttribute("d", b.join(" "))
}
d.Na = function(a) {
    this.Si.setAttribute("fill", a);
    this.dn.setAttribute("fill", a)
};
d.A = function() {
    ue();
    F(this.Wc);
    this.Zs = this.Xc = this.m = this.Lb = this.Si = this.dn = this.Wc = null
};
d.$l = function(a, b) {
    a ? a.lf(b.x, b.y) : this.moveTo(b.x, b.y);
    this.ti = this.m.u ? this.rd.x - b.x - this.ia : b.x - this.rd.x;
    this.Yj = b.y - this.rd.y;
    re(this)
};
d.la = function() {
    return new C(this.rd.x + this.ti, this.rd.y + this.Yj)
};
d.Ws = function(a) {
    this.Kk = a
};

function ze(a) {
    ze.s.constructor.call(this);
    this.ac = a.id;
    this.Dc = a.o.id
}
v(ze, Kc);
ze.prototype.Ba = function() {
    var a = ze.s.Ba.call(this);
    a.blockId = this.ac;
    return a
};
ze.prototype.ha = function(a) {
    ze.s.Ba.call(this);
    this.ac = a.blockId
};

function yc(a, b, c, e, f) {
    a && (yc.s.constructor.call(this, a), this.element = b, this.name = c, this.oldValue = e, this.newValue = f)
}
v(yc, ze);
w.j.Ec = yc;
d = yc.prototype;
d.type = w.j.yh;
d.Ba = function() {
    var a = yc.s.Ba.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue;
    return a
};
d.ha = function(a) {
    yc.s.ha.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue
};
d.di = function() {
    return this.oldValue == this.newValue
};
d.run = function(a) {
    var b = Ic(Lc(this), this.ac);
    if (b) switch (b.dd && b.dd.oa(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (b = H(b, this.name)) ? (Ae(b, a), b.setValue(a)) : console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            b.bh(a || null);
            break;
        case "collapsed":
            b.fg(a);
            break;
        case "disabled":
            b.Cd(a);
            break;
        case "inline":
            b.hg(a);
            break;
        case "mutation":
            var c = "";
            b.Ga && (c = (c = b.Ga()) && w.D.Zc(c));
            if (b.Za) {
                a = a || "<mutation></mutation>";
                var e = w.D.Pc("<xml>" + a + "</xml>");
                b.Za(e.firstChild)
            }
            w.j.V(new yc(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.ac)
};

function wc(a) {
    a && (wc.s.constructor.call(this, a), this.xml = a.o.R ? w.D.cn(a) : w.D.yf(a), this.Kf = w.j.xr(a))
}
v(wc, ze);
w.j.Ak = wc;
wc.prototype.type = w.j.Bk;
wc.prototype.Ba = function() {
    var a = wc.s.Ba.call(this);
    a.xml = w.D.Zc(this.xml);
    a.ids = this.Kf;
    return a
};
wc.prototype.ha = function(a) {
    wc.s.ha.call(this, a);
    this.xml = w.D.Pc("<xml>" + a.xml + "</xml>").firstChild;
    this.Kf = a.ids
};
wc.prototype.run = function(a) {
    var b = Lc(this);
    if (a) a = E("xml"), a.appendChild(this.xml), w.D.ee(a, b);
    else {
        a = 0;
        for (var c; c = this.Kf[a]; a++) {
            var e = Ic(b, c);
            e ? e.A(!1, !1) : c == this.ac && console.warn("Can't uncreate non-existent block: " + c)
        }
    }
};

function xc(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        xc.s.constructor.call(this, a);
        this.Ww = a.o.R ? w.D.cn(a) : w.D.yf(a);
        this.Kf = w.j.xr(a)
    }
}
v(xc, ze);
w.j.zt = xc;
xc.prototype.type = w.j.Gm;
xc.prototype.Ba = function() {
    var a = xc.s.Ba.call(this);
    a.ids = this.Kf;
    return a
};
xc.prototype.ha = function(a) {
    xc.s.ha.call(this, a);
    this.Kf = a.ids
};
xc.prototype.run = function(a) {
    var b = Lc(this);
    if (a) {
        a = 0;
        for (var c; c = this.Kf[a]; a++) {
            var e = Ic(b, c);
            e ? e.A(!1, !1) : c == this.ac && console.warn("Can't delete non-existent block: " + c)
        }
    } else a = E("xml"), a.appendChild(this.Ww), w.D.ee(a, b)
};

function zc(a) {
    a && (zc.s.constructor.call(this, a), a = Be(this), this.ss = a.Es, this.rs = a.Nr, this.xo = a.Fq)
}
v(zc, ze);
w.j.Fi = zc;
d = zc.prototype;
d.type = w.j.Li;
d.Ba = function() {
    var a = zc.s.Ba.call(this);
    this.Tg && (a.newParentId = this.Tg);
    this.Sg && (a.newInputName = this.Sg);
    this.Xf && (a.newCoordinate = Math.round(this.Xf.x) + "," + Math.round(this.Xf.y));
    return a
};
d.ha = function(a) {
    zc.s.ha.call(this, a);
    this.Tg = a.newParentId;
    this.Sg = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Xf = new C(parseFloat(a[0]), parseFloat(a[1])))
};
d.af = function() {
    var a = Be(this);
    this.Tg = a.Es;
    this.Sg = a.Nr;
    this.Xf = a.Fq
};

function Be(a) {
    var b = Ic(uc[a.Dc] || null, a.ac);
    a = {};
    var c = b.getParent();
    if (c) {
        a.Es = c.id;
        a: {
            for (var e = 0, f; f = c.W[e]; e++)
                if (f.connection && I(f.connection) == b) {
                    b = f;
                    break a
                }
            b = null
        }
        b && (a.Nr = b.name)
    } else a.Fq = b.la();
    return a
}
d.di = function() {
    return this.ss == this.Tg && this.rs == this.Sg && qc(this.xo, this.Xf)
};
d.run = function(a) {
    var b = Lc(this),
        c = Ic(b, this.ac);
    if (c) {
        var e = a ? this.Tg : this.ss,
            f = a ? this.Sg : this.rs;
        a = a ? this.Xf : this.xo;
        var h = null;
        if (e && (h = Ic(b, e), !h)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        c.getParent() && Ce(c);
        if (a) f = c.la(), c.moveBy(a.x - f.x, a.y - f.y);
        else {
            c = c.P || c.Z;
            if (f) {
                if (b = J(h, f)) var k = b.connection
            } else c.type == w.uf && (k = h.M);
            k ? c.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.ac)
};

function Dc(a, b, c, e) {
    Dc.s.constructor.call(this);
    this.ac = a ? a.id : null;
    this.Dc = a ? a.o.id : null;
    this.element = b;
    this.oldValue = c;
    this.newValue = e;
    this.ic = !1
}
v(Dc, Kc);
Dc.prototype.type = w.j.Ik;
Dc.prototype.Ba = function() {
    var a = Dc.s.Ba.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.ac && (a.blockId = this.ac);
    return a
};
Dc.prototype.ha = function(a) {
    Dc.s.ha.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.ac = a.blockId
};

function De(a) {
    this.U = a
}
d = De.prototype;
d.yq = !0;
d.Qm = 17;
d.Xa = null;
d.Mg = null;

function Ee(a) {
    a.vc || (a.vc = w.i.B("g", {
        "class": "blocklyIconGroup"
    }, null), a.U.rb && w.i.mb(a.vc, "blocklyIconGroupReadonly"), a.Cn(a.vc), a.U.ga().appendChild(a.vc), w.O(a.vc, "mouseup", a, a.$n), a.qf())
}
d.A = function() {
    F(this.vc);
    this.vc = null;
    this.oa(!1);
    this.U = null
};
d.qf = function() {};
d.Y = function() {
    return !!this.Xa
};
d.$n = function(a) {
    this.U.o.pb() || this.U.rb || w.i.Sf(a) || this.oa(!this.Y())
};
d.pf = function() {
    this.Y() && this.Xa.Na(this.U.ce)
};

function Fe(a) {
    var b = a.U.la(),
        c = w.i.tc(a.vc);
    b = new C(b.x + c.x + a.Qm / 2, b.y + c.y + a.Qm / 2);
    qc(a.Mg, b) || (a.Mg = b, a.Y() && (a = a.Xa, a.rd = b, a.cg && pe(a)))
};
// Copyright 2011 Google Inc.  Apache License 2.0
function Ge(a) {
    Ge.s.constructor.call(this, a);
    Ee(this)
}
v(Ge, De);
d = Ge.prototype;
d.va = "";
d.ia = 160;
d.Fa = 80;
d.Cn = function(a) {
    w.i.B("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    w.i.B("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    w.i.B("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};
d.$i = function() {
    this.ad = w.i.B("foreignObject", {
        x: qe,
        y: qe
    }, null);
    var a = document.createElementNS(w.rf, "body");
    a.setAttribute("xmlns", w.rf);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(w.rf, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.U.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.ub = b;
    this.ad.appendChild(a);
    w.O(b, "mouseup", this, this.Mx, !0, !0);
    w.O(b, "wheel", this, function(a) {
        a.stopPropagation()
    });
    w.O(b, "change", this, function() {
        this.va != b.value && (w.j.V(new w.j.Ec(this.U,
            "comment", null, this.va, b.value)), this.va = b.value)
    });
    setTimeout(function() {
        b.focus()
    }, 0);
    return this.ad
};
d.qf = function() {
    this.Y() && (this.oa(!1), this.oa(!0));
    De.prototype.qf.call(this)
};
d.lm = function() {
    if (this.Y()) {
        var a = this.Xa.Ig(),
            b = 2 * qe;
        this.ad.setAttribute("width", a.width - b);
        this.ad.setAttribute("height", a.height - b);
        this.ub.style.width = a.width - b - 4 + "px";
        this.ub.style.height = a.height - b - 4 + "px"
    }
};
d.oa = function(a) {
    if (a != this.Y())
        if (w.j.V(new Dc(this.U, "commentOpen", !a, a)), !He(this.U) && !this.ub || x) Ie.prototype.oa.call(this, a);
        else {
            var b = this.Hb(),
                c = this.Ig();
            a ? (this.Xa = new ne(this.U.o, this.$i(), this.U.Dd, this.Mg, this.ia, this.Fa), we(this.Xa, this.U.id), a = this.lm.bind(this), this.Xa.Uo = a, this.pf()) : (this.Xa.A(), this.ad = this.ub = this.Xa = null);
            this.Sb(b);
            this.eg(c.width, c.height)
        }
};
d.Mx = function() {
    xe(this.Xa) && this.ub.focus()
};
d.Ig = function() {
    return this.Y() ? this.Xa.Ig() : {
        width: this.ia,
        height: this.Fa
    }
};
d.eg = function(a, b) {
    this.ub ? this.Xa.eg(a, b) : (this.ia = a, this.Fa = b)
};
d.Hb = function() {
    return this.ub ? this.ub.value : this.va
};
d.Sb = function(a) {
    this.va != a && (w.j.V(new w.j.Ec(this.U, "comment", null, this.va, a)), this.va = a);
    this.ub && (this.ub.value = a)
};
d.A = function() {
    w.j.isEnabled() && this.Sb("");
    this.U.Ua = null;
    De.prototype.A.call(this)
};

function Je(a, b) {
    this.v = a;
    this.type = b;
    a.o.ln && (this.ud = a.o.ln[b], this.Xk = a.o.ln[w.Eh[b]], this.Yn = !this.ud)
}
d = Je.prototype;
d.Pa = null;
d.Je = null;
d.ye = null;
d.Sc = 0;
d.Ra = 0;
d.Mf = !1;
d.ud = null;
d.Xk = null;
d.Yn = null;
d.Uk = function(a) {
    var b = this,
        c = b.v,
        e = a.v;
    a.isConnected() && a.disconnect();
    if (b.isConnected()) {
        var f = I(b),
            h = b.ye;
        b.ye = null;
        if (f.gb) h = w.D.yf(f), f.A(), f = null;
        else if (b.type == w.kb) {
            if (!f.P) throw "Orphan block does not have an output connection.";
            var k = Ke(e, f);
            k && (f.P.connect(k), f = null)
        } else if (b.type == w.Sa) {
            if (!f.Z) throw "Orphan block does not have a previous connection.";
            for (k = e; k.M;) {
                var l = Jc(k);
                if (l && !l.gb) k = l;
                else {
                    Le(f.Z, k.M) && (k.M.connect(f.Z), f = null);
                    break
                }
            }
        }
        if (f && (b.disconnect(), w.j.ic)) {
            var m = w.j.rc();
            setTimeout(function() {
                f.o && !f.getParent() && (w.j.S(m), f.P ? Me(f.P, b) : f.Z && Me(f.Z, b), w.j.S(!1))
            }, w.zk)
        }
        b.ye = h
    }
    var n;
    w.j.isEnabled() && (n = new w.j.Fi(e));
    Ne(b, a);
    e.fh(c);
    n && (n.af(), w.j.V(n))
};
d.A = function() {
    if (this.isConnected()) throw "Disconnect connection before disposing of it.";
    this.Mf && Oe(this.ud, this);
    this.Xk = this.ud = null
};

function Pe(a) {
    return a.type == w.kb || a.type == w.Sa
}
d.isConnected = function() {
    return !!this.Pa
};

function Qe(a, b) {
    if (!b) return 3;
    if (Pe(a)) var c = a.v,
        e = b.v;
    else e = a.v, c = b.v;
    return c && c == e ? 1 : b.type != w.Eh[a.type] ? 2 : c && e && c.o !== e.o ? 5 : Le(a, b) ? c.gb && !e.gb ? 6 : 0 : 4
}
d.Ll = function(a) {
    if (0 != Qe(this, a)) return !1;
    if (a.type == w.Hh || a.type == w.uf)
        if (a.isConnected() || this.isConnected()) return !1;
    return a.type == w.kb && a.isConnected() && !I(a).se() && !I(a).gb || this.type == w.uf && a.isConnected() && !this.v.M && !I(a).gb && I(a).M || -1 != w.fl.indexOf(a) ? !1 : !0
};
d.connect = function(a) {
    if (this.Pa != a) {
        switch (Qe(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed. " + (this + " expected " + this.Je + ", found " + a.Je);
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        Pe(this) ? this.Uk(a) : a.Uk(this)
    }
};

function Ne(a, b) {
    a.Pa = b;
    b.Pa = a
}

function Re(a, b) {
    for (var c = !1, e = 0; e < a.W.length; e++) {
        var f = a.W[e].connection;
        if (f && f.type == w.kb && Le(b.P, f)) {
            if (c) return null;
            c = f
        }
    }
    return c
}

function Ke(a, b) {
    for (var c; c = Re(a, b);)
        if (a = I(c), !a || a.gb) return c;
    return null
}
d.disconnect = function() {
    var a = this.Pa;
    if (Pe(this)) {
        var b = this.v;
        var c = a.v;
        a = this
    } else b = a.v, c = this.v;
    this.yn(b, c);
    a.Yo()
};
d.yn = function(a, b) {
    var c;
    w.j.isEnabled() && (c = new w.j.Fi(b));
    this.Pa = this.Pa.Pa = null;
    b.fh(null);
    c && (c.af(), w.j.V(c))
};
d.Yo = function() {
    var a = this.v,
        b = this.ye;
    if (a.o && b && w.j.ic)
        if (a = w.D.Qh(b, a.o), a.P) this.connect(a.P);
        else if (a.Z) this.connect(a.Z);
    else throw "Child block does not have output or previous statement.";
};

function I(a) {
    return a.isConnected() ? a.Pa.v : null
}

function Le(a, b) {
    if (!a.Je || !b.Je) return !0;
    for (var c = 0; c < a.Je.length; c++)
        if (-1 != b.Je.indexOf(a.Je[c])) return !0;
    return !1
}
d.us = function() {
    this.isConnected() && !Le(this, this.Pa) && Ce(Pe(this) ? I(this) : this.v)
};
d.tb = function(a) {
    a ? (r(a) || (a = [a]), this.Je = a, this.us()) : this.Je = null;
    return this
};
d.ps = function() {
    return []
};
d.toString = function() {
    var a = this.v;
    if (a)
        if (a.P == this) var b = "Output Connection of ";
        else if (a.Z == this) b = "Previous Connection of ";
    else if (a.M == this) b = "Next Connection of ";
    else if (b = wa(a.W, function(a) {
            return a.connection == this
        }, this)) b = 'Input "' + b.name + '" connection on ';
    else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
    else return "Orphan Connection";
    return b + Se(a)
};

function Te() {}
Te.prototype = [];

function Ue(a, b) {
    if (b.Mf) throw "Connection already in database.";
    b.v.rb || (a.splice(Ve(a, b), 0, b), b.Mf = !0)
}

function We(a, b) {
    if (!a.length) return -1;
    var c = Ve(a, b);
    if (c >= a.length) return -1;
    for (var e = b.Ra, f = c; 0 <= f && a[f].Ra == e;) {
        if (a[f] == b) return f;
        f--
    }
    for (; c < a.length && a[c].Ra == e;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function Ve(a, b) {
    if (!a.length) return 0;
    for (var c = 0, e = a.length; c < e;) {
        var f = Math.floor((c + e) / 2);
        if (a[f].Ra < b.Ra) c = f + 1;
        else if (a[f].Ra > b.Ra) e = f;
        else {
            c = f;
            break
        }
    }
    return c
}

function Oe(a, b) {
    if (!b.Mf) throw "Connection not in database.";
    var c = We(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.Mf = !1;
    a.splice(c, 1)
}

function Xe(a, b, c) {
    function e(a) {
        var b = h - f[a].Sc,
            e = k - f[a].Ra;
        Math.sqrt(b * b + e * e) <= c && m.push(f[a]);
        return e < c
    }
    var f = a,
        h = b.Sc,
        k = b.Ra;
    a = 0;
    for (var l = b = f.length - 2; a < l;) f[l].Ra < k ? a = l : b = l, l = Math.floor((a + b) / 2);
    var m = [];
    b = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do b++; while (b < f.length && e(b))
    }
    return m
};
w.HB = {};
w.Op = 5;
w.Kt = 10;
w.Uc = 20;
w.zk = 250;
w.At = 30;
w.bu = 750;
w.tu = 100;
w.Jt = !0;
w.Rt = .45;
w.St = .65;
w.lc = {
    width: 96,
    height: 124,
    url: "sprites.png"
};
w.Tm = "http://www.w3.org/2000/svg";
w.rf = "http://www.w3.org/1999/xhtml";
w.kb = 1;
w.Hh = 2;
w.Sa = 3;
w.uf = 4;
w.Ee = 5;
w.Ei = -1;
w.xk = 0;
w.xh = 1;
w.fz = 0;
w.gz = 1;
w.dz = 1;
w.ez = 2;
w.Eh = [];
w.Eh[w.kb] = w.Hh;
w.Eh[w.Hh] = w.kb;
w.Eh[w.Sa] = w.uf;
w.Eh[w.uf] = w.Sa;
w.wf = 0;
w.wg = 1;
w.vf = 2;
w.Wd = 3;
w.Lp = null;
w.Hm = 1;
w.Mp = 2;
w.Wp = "VARIABLE";
w.Cu = "VARIABLE_DYNAMIC";
w.Tp = "PROCEDURE";
w.Vp = "RENAME_VARIABLE_ID";
w.Np = "DELETE_VARIABLE_ID";
w.Ha = {};
w.Ha.zn = 0;
w.Ha.al = null;
w.Ha.Iv = function(a) {
    var b = a.o,
        c = a.ga();
    b.Zd.play("delete");
    a = Ye(b, c);
    c = c.cloneNode(!0);
    c.Sx = a.x;
    c.Tx = a.y;
    c.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    K(b).appendChild(c);
    c.hq = c.getBBox();
    w.Ha.ir(c, b.u, new Date, b.scale)
};
w.Ha.ir = function(a, b, c, e) {
    var f = (new Date - c) / 150;
    1 < f ? F(a) : (a.setAttribute("transform", "translate(" + (a.Sx + (b ? -1 : 1) * a.hq.width * e / 2 * f) + "," + (a.Tx + a.hq.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(w.Ha.ir, 10, a, b, c, e))
};
w.Ha.mv = function(a) {
    var b = a.o,
        c = b.scale;
    b.Zd.play("click");
    if (!(1 > c)) {
        var e = Ye(b, a.ga());
        a.P ? (e.x += (a.u ? 3 : -3) * c, e.y += 13 * c) : a.Z && (e.x += (a.u ? -23 : 23) * c, e.y += 3 * c);
        a = w.i.B("circle", {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, K(b));
        w.Ha.Dq(a, new Date, c)
    }
};
w.Ha.Dq = function(a, b, c) {
    var e = (new Date - b) / 150;
    1 < e ? F(a) : (a.setAttribute("r", 25 * e * c), a.style.opacity = 1 - e, w.Ha.zn = setTimeout(w.Ha.Dq, 10, a, b, c))
};
w.Ha.Hv = function(a) {
    a.o.Zd.play("disconnect");
    if (!(1 > a.o.scale)) {
        var b = a.Gb().height;
        b = Math.atan(10 / b) / Math.PI * 180;
        a.u || (b *= -1);
        w.Ha.gr(a.ga(), b, new Date)
    }
};
w.Ha.gr = function(a, b, c) {
    var e = (new Date - c) / 200;
    1 < e ? a.jh = "" : (a.jh = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ")", w.Ha.al = a, w.Ha.zn = setTimeout(w.Ha.gr, 10, a, b, c));
    a.setAttribute("transform", a.mf + a.jh)
};
w.Ha.An = function() {
    if (w.Ha.al) {
        clearTimeout(w.Ha.zn);
        var a = w.Ha.al;
        a.jh = "";
        a.setAttribute("transform", a.mf);
        w.Ha.al = null
    }
};

function Ze(a, b) {
    Ze.s.constructor.call(this, a, b);
    this.dm = new C(0, 0)
}
v(Ze, Je);

function $e(a, b) {
    var c = a.Sc - b.Sc;
    a = a.Ra - b.Ra;
    return Math.sqrt(c * c + a * a)
}

function Me(a, b) {
    if (!a.v.o.pb()) {
        var c = af(a.v);
        if (!c.rb) {
            var e = !1;
            if (!c.se()) {
                c = af(b.v);
                if (!c.se()) return;
                b = a;
                e = !0
            }
            var f = w.selected == c;
            f || c.Kh();
            var h = b.Sc + w.Uc - a.Sc;
            a = b.Ra + w.Uc - a.Ra;
            e && (a = -a);
            c.u && (h = -h);
            c.moveBy(h, a);
            f || c.$g()
        }
    }
}
d = Ze.prototype;
d.moveTo = function(a, b) {
    this.Mf && Oe(this.ud, this);
    this.Sc = a;
    this.Ra = b;
    this.Yn || Ue(this.ud, this)
};
d.moveBy = function(a, b) {
    this.moveTo(this.Sc + a, this.Ra + b)
};

function bf(a, b) {
    a.moveTo(b.x + a.dm.x, b.y + a.dm.y)
}

function cf(a, b, c) {
    a.dm.x = b;
    a.dm.y = c
}

function df(a) {
    var b = a.Pa.Sc - a.Sc,
        c = a.Pa.Ra - a.Ra;
    if (0 != b || 0 != c) {
        a = I(a);
        var e = a.ga();
        if (!e) throw "block is not rendered.";
        e = w.i.tc(e);
        a.ga().setAttribute("transform", "translate(" + (e.x - b) + "," + (e.y - c) + ")");
        ef(a, -b, -c)
    }
}
d.closest = function(a, b) {
    var c = this.Xk;
    if (c.length) {
        var e = this.Ra,
            f = this.Sc;
        this.Sc = f + b.x;
        this.Ra = e + b.y;
        var h = Ve(c, this);
        b = null;
        for (var k = a, l, m = h - 1; 0 <= m && Math.abs(c[m].Ra - this.Ra) <= a;) l = c[m], this.Ll(l, k) && (b = l, k = $e(l, this)), m--;
        for (; h < c.length && Math.abs(c[h].Ra - this.Ra) <= a;) l = c[h], this.Ll(l, k) && (b = l, k = $e(l, this)), h++;
        this.Sc = f;
        this.Ra = e;
        a = {
            connection: b,
            Os: k
        }
    } else a = {
        connection: null,
        Os: a
    };
    return a
};
d.Zn = function() {
    var a = this.type == w.kb || this.type == w.Hh ? "m 0,0 " + ff + " v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.v.la();
    Je.Kr = w.i.B("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.Sc - b.x) + "," + (this.Ra - b.y) + ")" + (this.v.u ? " scale(-1 1)" : "")
    }, this.v.ga())
};

function gf(a) {
    hf(a, !1);
    var b = [];
    if (a.type != w.kb && a.type != w.Sa) return b;
    if (a = I(a)) {
        if (a.isCollapsed()) {
            var c = [];
            a.P && c.push(a.P);
            a.M && c.push(a.M);
            a.Z && c.push(a.Z)
        } else c = a.le(!0);
        for (var e = 0; e < c.length; e++) b.push.apply(b, gf(c[e]));
        b.length || (b[0] = a)
    }
    return b
}

function jf() {
    F(Je.Kr);
    delete Je.Kr
}

function hf(a, b) {
    (a.Yn = b) && a.Mf ? Oe(a.ud, a) : b || a.Mf || Ue(a.ud, a)
}
d.Ll = function(a, b) {
    return $e(this, a) > b ? !1 : Ze.s.Ll.call(this, a)
};
d.yn = function(a, b) {
    Ze.s.yn.call(this, a, b);
    a.R && a.$();
    b.R && (kf(b), b.$())
};
d.Yo = function() {
    var a = this.v,
        b = this.ye;
    if (a.o && b && w.j.ic) {
        Ze.s.Yo.call(this);
        b = I(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.wc();
        b.$(!1);
        a.R && a.$()
    }
};
d.ps = function(a) {
    return Xe(this.Xk, this, a)
};
d.Uk = function(a) {
    Ze.s.Uk.call(this, a);
    var b = this.v;
    a = a.v;
    b.R && kf(b);
    a.R && kf(a);
    b.R && a.R && (this.type == w.Sa || this.type == w.uf ? a.$() : b.$())
};
d.us = function() {
    this.isConnected() && !Le(this, this.Pa) && (Ce(Pe(this) ? I(this) : this.v), this.v.ob())
};

function lf(a) {
    this.lg = w.selected = a;
    this.m = a.o;
    a = this.lg.le(!1);
    var b;
    a: {
        for (b = this.lg.M; b;) {
            var c = I(b);
            if (!c) break a;
            b = c.M
        }
        b = null
    }
    b && b != this.lg.M && a.push(b);
    this.$m = a;
    this.ji = this.ec = null;
    this.Ro = 0;
    this.sg = !1
}
lf.prototype.A = function() {
    this.m = this.lg = null;
    this.$m.length = 0;
    this.ji = this.ec = null
};
lf.prototype.update = function(a, b) {
    var c = this.ec,
        e = this.ec;
    this.ji = this.ec = null;
    this.Ro = w.Uc;
    for (var f = 0; f < this.$m.length; f++) {
        var h = this.$m[f],
            k = h.closest(this.Ro, a);
        k.connection && (this.ec = k.connection, this.ji = h, this.Ro = k.Os)
    }(a = e != this.ec) && c && jf();
    c = !!this.ec && b != w.Mp;
    this.sg = (b = !!b && !this.lg.getParent() && this.lg.fc()) && !c;
    b && this.ec && (jf(), this.ec = null);
    !this.sg && a && this.ec && this.ec && this.ec.Zn()
};

function mf(a, b) {
    this.fb = a;
    this.m = b;
    this.Rh = new lf(this.fb);
    this.Dg = null;
    this.sg = !1;
    this.Ae = this.fb.la();
    b = [];
    a = vc(a, !1);
    for (var c = 0, e; e = a[c]; c++) {
        e = nf(e);
        for (var f = 0; f < e.length; f++) b.push({
            location: e[f].Mg,
            icon: e[f]
        })
    }
    this.dl = b
}
mf.prototype.A = function() {
    this.ib = this.m = this.fb = null;
    this.dl.length = 0;
    this.Rh && (this.Rh.A(), this.Rh = null)
};

function of (a, b, c) {
    c = a.pi(c);
    a.fb.$l(tc(a.Ae, c));
    for (var e = 0; e < a.dl.length; e++) {
        var f = a.dl[e],
            h = f.icon;
        f = tc(f.location, c);
        h.Mg = f;
        h.Y() && (h = h.Xa, h.rd = f, h.cg && pe(h))
    }
    a.Dg = pf(a.m, b);
    a.Rh.update(c, a.Dg);
    a.sg = a.Rh.sg;
    b = a.m.Qc;
    a.sg ? (a.fb.ck(!0), a.Dg == w.Hm && b && qf(b, !0)) : (a.fb.ck(!1), b && qf(b, !1))
}

function rf(a, b, c) { of (a, b, c);
    a.dl = [];
    w.Ha.An();
    b = a.pi(c);
    a.fb.ls(tc(a.Ae, b));
    c = a.m.Qc;
    a.sg ? (c && sf(c.close, 100, c), a.ij(), a.fb.A(!1, !0)) : c && c.close();
    a.sg || (ef(a.fb, b.x, b.y), a.fb.gg(!1), b = a.Rh, b.ec && (b.ji.connect(b.ec), b.lg.R && (w.Ha.mv((Pe(b.ji) ? b.ec : b.ji).v), tf(af(b.lg))), b.ec && jf()), a.fb.$(), a.ij(), uf(a.fb));
    a.m.Rb(!0);
    (b = a.m.ca) && w.i.Qb(b.Fc, a.fb.fc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    w.j.S(!1)
}
mf.prototype.ij = function() {
    var a = new w.j.Fi(this.fb);
    a.xo = this.Ae;
    a.af();
    w.j.V(a)
};
mf.prototype.pi = function(a) {
    a = new C(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Hj && (a = a.scale(1 / this.m.options.Kb.scale));
    return a
};

function vf(a, b, c, e, f) {
    this.w = w.i.B("g", {
        "class": "blocklyComment"
    }, null);
    this.w.mf = "";
    this.lk = w.i.B("rect", {
        "class": "blocklyCommentRect",
        x: 0,
        y: 0,
        rx: 3,
        ry: 3
    });
    this.w.appendChild(this.lk);
    this.cg = !1;
    this.Ce = w.i.Pf() && !!a.xb;
    vf.s.constructor.call(this, a, b, c, e, f);
    this.$()
}
v(vf, Uc);
d = vf.prototype;
d.A = function() {
    if (this.o) {
        if (w.selected == this) {
            this.ng();
            var a = this.o;
            a.Db && a.Db.cancel()
        }
        w.j.isEnabled() && w.j.V(new Hc(this));
        F(this.w);
        this.nh = this.kg = this.ad = this.ub = this.lk = this.w = null;
        w.j.disable();
        vf.s.A.call(this);
        w.j.enable()
    }
};
d.wc = function() {
    this.o.options.readOnly || this.En || (w.O(this.kg, "mousedown", this, this.Fs), w.O(this.nh, "mousedown", this, this.Fs));
    this.En = !0;
    wf(this);
    this.ga().parentNode || this.o.Ud.appendChild(this.ga())
};
d.Fs = function(a) {
    var b = this.o.me(a);
    b && (b.Cc || (b.Cc = this), b.Nc = a)
};
d.xi = function(a) {
    if (!this.o.options.readOnly) {
        var b = [];
        this.fc() && this.se() && (b.push(w.ba.hv(this)), b.push(w.ba.gv(this)));
        w.ba.show(a, b, this.u)
    }
};
d.select = function() {
    if (w.selected != this) {
        var a = null;
        if (w.selected) {
            a = w.selected.id;
            w.j.disable();
            try {
                w.selected.ng()
            } finally {
                w.j.enable()
            }
        }
        a = new Dc(null, "selected", a, this.id);
        a.Dc = this.o.id;
        w.j.V(a);
        w.selected = this;
        this.Kh()
    }
};
d.ng = function() {
    if (w.selected == this) {
        var a = new Dc(null, "selected", this.id, null);
        a.Dc = this.o.id;
        w.j.V(a);
        w.selected = null;
        this.$g();
        xf(this)
    }
};
d.Kh = function() {
    w.i.mb(this.w, "blocklySelected");
    this.jp()
};
d.$g = function() {
    w.i.Qb(this.w, "blocklySelected");
    xf(this)
};
d.la = function() {
    var a = 0,
        b = 0,
        c = this.Ce ? this.o.xb.rc() : null,
        e = this.ga();
    if (e) {
        do {
            var f = w.i.tc(e);
            a += f.x;
            b += f.y;
            this.Ce && this.o.xb.fe.firstChild == e && (f = this.o.xb.Bl(), a += f.x, b += f.y);
            e = e.parentNode
        } while (e && e != this.o.Ud && e != c)
    }
    return this.nd = new C(a, b)
};
d.moveBy = function(a, b) {
    var c = new Gc(this),
        e = this.la();
    this.translate(e.x + a, e.y + b);
    this.nd = new C(e.x + a, e.y + b);
    c.af();
    w.j.V(c);
    yf(this.o)
};
d.translate = function(a, b) {
    this.nd = new C(a, b);
    this.ga().setAttribute("transform", "translate(" + a + "," + b + ")")
};
d.am = function() {
    if (this.Ce) {
        var a = this.la();
        w.i.removeAttribute(this.ga(), "transform");
        this.o.xb.lf(a.x, a.y);
        zf(this.o.xb, this.ga())
    }
};
d.ls = function(a) {
    this.Ce && (this.translate(a.x, a.y), this.o.xb.Ui(this.o.Oa))
};
d.$l = function(a, b) {
    a ? a.lf(b.x, b.y) : (this.w.mf = "translate(" + b.x + "," + b.y + ")", this.w.setAttribute("transform", this.w.mf + this.w.jh))
};
d.moveTo = function(a, b) {
    this.translate(a, b)
};
d.Kn = function() {
    var a = this.la(),
        b = this.Gb();
    if (this.u) {
        var c = new C(a.x - b.width, a.y);
        a = new C(a.x, a.y + b.height)
    } else c = new C(a.x, a.y), a = new C(a.x + b.width, a.y + b.height);
    return {
        jd: c,
        Fd: a
    }
};

function wf(a) {
    a.se() ? w.i.mb(a.w, "blocklyDraggable") : w.i.Qb(a.w, "blocklyDraggable")
}
d.eh = function(a) {
    vf.s.eh.call(this, a);
    wf(this)
};
d.gg = function(a) {
    a ? (a = this.ga(), a.mf = "", a.jh = "", w.i.mb(this.w, "blocklyDragging")) : w.i.Qb(this.w, "blocklyDragging")
};
d.ga = function() {
    return this.w
};
d.Jc = function() {
    return this.ub ? this.ub.value : this.Xc
};
d.Bd = function(a) {
    vf.s.Bd.call(this, a);
    this.ub && (this.ub.value = a)
};
d.ck = function(a) {
    a ? w.i.mb(this.w, "blocklyDraggingDelete") : w.i.Qb(this.w, "blocklyDraggingDelete")
};
d.Ws = function() {};

function Af(a, b, c) {
    w.j.disable();
    try {
        var e = Yc(a),
            f = new vf(b, e.content, e.Cr, e.rt, e.id);
        b.R && (f.wc(), f.$(!1));
        if (!isNaN(e.x) && !isNaN(e.y))
            if (b.u) {
                var h = c || b.cd();
                f.moveBy(h - e.x, e.y)
            } else f.moveBy(e.x, e.y)
    } finally {
        w.j.enable()
    }
    Wc(f);
    return f
}
d.mk = function(a) {
    var b;
    this.o.u && (b = this.o.cd());
    a = Xc(this, a);
    var c = this.la();
    a.setAttribute("x", Math.round(this.o.u ? b - c.x : c.x));
    a.setAttribute("y", Math.round(c.y));
    a.setAttribute("h", this.Xh());
    a.setAttribute("w", this.cd());
    return a
};

function Bf(a, b) {
    this.Eb = a;
    this.m = b;
    this.Dg = null;
    this.Em = !1;
    this.Ae = this.Eb.la();
    this.Eg = w.i.Pf() && b.xb ? b.xb : null
}
Bf.prototype.A = function() {
    this.Eg = this.m = this.Eb = null
};

function Cf(a, b, c) {
    c = a.pi(c);
    a.Eb.$l(a.Eg, tc(a.Ae, c));
    a.Eb.fc() && (a.Dg = pf(a.m, b), a.Em = a.Dg != w.Lp, b = a.m.Qc, a.Em ? (a.Eb.ck(!0), a.Dg == w.Hm && b && qf(b, !0)) : (a.Eb.ck(!1), b && qf(b, !1)))
}

function Df(a, b, c) {
    Cf(a, b, c);
    b = a.pi(c);
    b = tc(a.Ae, b);
    a.Eb.moveTo(b.x, b.y);
    b = a.m.Qc;
    a.Em ? (b && sf(b.close, 100, b), a.ij(), a.Eb.A(!1, !0)) : b && b.close();
    a.Em || (a.Eg && a.Eg.Ui(a.m.Ud), a.Eb.gg && a.Eb.gg(!1), a.ij());
    a.m.Rb(!0);
    a.m.ca && w.i.Qb(a.m.ca.Fc, a.Eb.fc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    w.j.S(!1)
}
Bf.prototype.ij = function() {
    if (this.Eb.Qr) {
        var a = new Gc(this.Eb);
        a.yo = this.Ae;
        a.af();
        w.j.V(a)
    }
};
Bf.prototype.pi = function(a) {
    a = new C(a.x / this.m.scale, a.y / this.m.scale);
    this.m.Hj && (a = a.scale(1 / this.m.options.Kb.scale));
    return a
};
Bf.prototype.am = function() {
    this.Eb.moveTo(0, 0);
    this.Eg.lf(this.Ae.x, this.Ae.y);
    zf(this.Eg, this.Eb.ga())
};

function Ef(a) {
    this.m = a;
    this.Hx = a.qb();
    this.Jx = new C(a.scrollX, a.scrollY)
}
Ef.prototype.A = function() {
    this.m = null
};
Ef.prototype.ym = function() {
    w.selected && w.selected.ng();
    Ff(this.m)
};

function Gf(a, b) {
    var c = a.Hx,
        e = tc(a.Jx, b);
    b = Math.min(e.x, -c.Hc);
    e = Math.min(e.y, -c.nc);
    b = Math.max(b, c.xa - c.Hc - c.Ic);
    e = Math.max(e, c.bb - c.nc - c.mc);
    b = -b - c.Hc;
    e = -e - c.nc;
    a.nt(b, e)
}
Ef.prototype.nt = function(a, b) {
    this.m.hb.set(a, b)
};

function Hf(a) {
    Hf.s.constructor.call(this, a.sj());
    this.Vb = a.Vb;
    this.Ld = a.Ld
}
v(Hf, Ef);
Hf.prototype.nt = function(a, b) {
    this.Ld ? this.Vb.set(a) : this.Vb.set(b)
};
w.C = {};
w.C.visible = !1;
w.C.Mh = !1;
w.C.Wt = 50;
w.C.ks = 0;
w.C.hk = 0;
w.C.no = 0;
w.C.oo = 0;
w.C.T = null;
w.C.gm = null;
w.C.Qp = 0;
w.C.Rp = 10;
w.C.ou = 10;
w.C.Qt = 750;
w.C.Jm = 5;
w.C.ka = null;
w.C.X = function() {
    w.C.ka || (w.C.ka = E("DIV", "blocklyTooltipDiv"), document.body.appendChild(w.C.ka))
};
w.C.yg = function(a) {
    w.Gc(a, "mouseover", null, w.C.nx);
    w.Gc(a, "mouseout", null, w.C.mx);
    a.addEventListener("mousemove", w.C.lx, !1)
};
w.C.nx = function(a) {
    if (!w.C.Mh) {
        for (a = a.target; !p(a.hd) && !u(a.hd);) a = a.hd;
        w.C.T != a && (w.C.La(), w.C.gm = null, w.C.T = a);
        clearTimeout(w.C.ks)
    }
};
w.C.mx = function() {
    w.C.Mh || (w.C.ks = setTimeout(function() {
        w.C.T = null;
        w.C.gm = null;
        w.C.La()
    }, 1), clearTimeout(w.C.hk))
};
w.C.lx = function(a) {
    if (w.C.T && w.C.T.hd && !w.J.Y() && !w.C.Mh)
        if (w.C.visible) {
            var b = w.C.no - a.pageX;
            a = w.C.oo - a.pageY;
            Math.sqrt(b * b + a * a) > w.C.ou && w.C.La()
        } else w.C.gm != w.C.T && (clearTimeout(w.C.hk), w.C.no = a.pageX, w.C.oo = a.pageY, w.C.hk = setTimeout(w.C.Dx, w.C.Qt))
};
w.C.La = function() {
    w.C.visible && (w.C.visible = !1, w.C.ka && (w.C.ka.style.display = "none"));
    w.C.hk && clearTimeout(w.C.hk)
};
w.C.block = function() {
    w.C.La();
    w.C.Mh = !0
};
w.C.Ux = function() {
    w.C.Mh = !1
};
w.C.Dx = function() {
    if (!w.C.Mh && (w.C.gm = w.C.T, w.C.ka)) {
        ce(w.C.ka);
        for (var a = w.C.T.hd; u(a);) a = a();
        a = w.i.ut(a, w.C.Wt);
        a = a.split("\n");
        for (var b = 0; b < a.length; b++) {
            var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            w.C.ka.appendChild(c)
        }
        a = w.C.T.u;
        b = Xd();
        w.C.ka.style.direction = a ? "rtl" : "ltr";
        w.C.ka.style.display = "block";
        w.C.visible = !0;
        c = w.C.no;
        c = a ? c - (w.C.Qp + w.C.ka.offsetWidth) : c + w.C.Qp;
        var e = w.C.oo + w.C.Rp;
        e + w.C.ka.offsetHeight > b.height + window.scrollY && (e -= w.C.ka.offsetHeight +
            2 * w.C.Rp);
        a ? c = Math.max(w.C.Jm - window.scrollX, c) : c + w.C.ka.offsetWidth > b.width + window.scrollX - 2 * w.C.Jm && (c = b.width - w.C.ka.offsetWidth - 2 * w.C.Jm);
        w.C.ka.style.top = e + "px";
        w.C.ka.style.left = c + "px"
    }
};

function If(a, b) {
    this.ib = this.Yb = this.kh = this.lh = this.Cc = this.oc = this.js = null;
    this.pv = b;
    this.Fj = this.Og = this.Gj = this.Kg = !1;
    this.Nc = a;
    this.I = this.rg = this.He = this.Ie = this.fm = this.em = null;
    this.Nl = this.Ir = !1;
    this.Jr = !w.Jt
}
d = If.prototype;
d.A = function() {
    w.Touch.Me();
    w.C.Ux();
    this.pv.Db = null;
    this.em && w.Ma(this.em);
    this.fm && w.Ma(this.fm);
    this.I = this.ib = this.Yb = this.kh = this.lh = null;
    this.He && (this.He.A(), this.He = null);
    this.rg && (this.rg.A(), this.rg = null);
    this.Ie && (this.Ie.A(), this.Ie = null)
};

function Jf(a, b) {
    a.oc = sc(new C(b.clientX, b.clientY), a.js);
    if (a.Kg) var c = !1;
    else c = a.oc, a.Kg = Math.sqrt(c.x * c.x + c.y * c.y) > (a.I ? w.Kt : w.Op), c = a.Kg;
    if (c) {
        if (a.Cc) {
            a.Fj = !0;
            a.Ie = new Bf(a.Cc, a.ib);
            c = a.Ie;
            w.j.rc() || w.j.S(!0);
            c.m.Rb(!1);
            c.Eb.Ws(!1);
            c.Eg && c.am();
            c.Eb.gg && c.Eb.gg(!0);
            var e = c.m.ca;
            e && w.i.mb(e.Fc, c.Eb.fc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            Cf(a.Ie, a.Nc, a.oc);
            c = !0
        } else c = !1;
        if (!c) {
            if (a.Yb)
                if (a.I ? (a.Yb.disabled ? c = !1 : !Kf(a.I) || a.I.Rr(a.oc) ? (a.ib = a.I.ta, Lf(a.ib), w.j.rc() || w.j.S(!0), a.kh =
                        null, a.Yb = Mf(a.I, a.Yb), a.Yb.select(), c = !0) : c = !1, a.Og = c) : a.Yb.se() && (a.Og = !0), a.Og) {
                    a.He = new mf(a.Yb, a.ib);
                    c = a.He;
                    e = a.oc;
                    var f = a.Jr;
                    w.j.rc() || w.j.S(!0);
                    c.m.Rb(!1);
                    w.Ha.An();
                    if (c.fb.getParent() || f && c.fb.M && I(c.fb.M)) Ce(c.fb, f), e = c.pi(e), e = tc(c.Ae, e), c.fb.translate(e.x, e.y), w.Ha.Hv(c.fb);
                    c.fb.gg(!0);
                    c.fb.am();
                    (e = c.m.ca) && w.i.mb(e.Fc, c.fb.fc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab"); of (a.He, a.Nc, a.oc);
                    c = !0
                } else c = !1;
            else c = !1;
            !c && (a.I ? Kf(a.I) : a.ib && a.ib.hb) && (a.rg = a.I ? new Hf(a.I) : new Ef(a.ib), a.Gj = !0, a.rg.ym())
        }
        w.Vf()
    }
    a.Nc = b
}
d.fj = function(a) {
    w.i.Ql(a) ? this.cancel() : (this.Ir = !0, w.Ha.An(), Lf(this.ib), this.ib.Hj && this.ib.resize(), Nf(this.ib), this.Nc = a, w.Pb(!!this.I), w.C.block(), this.Yb && this.Yb.select(), w.i.Sf(a) ? pc(this, a) : (("touchstart" == a.type.toLowerCase() || "pointerdown" == a.type.toLowerCase() && "mouse" != a.pointerType) && w.Lw(a, this), this.js = new C(a.clientX, a.clientY), this.Jr = a.altKey || a.ctrlKey || a.metaKey, this.yg(a)))
};
d.yg = function(a) {
    this.em = w.O(document, "mousemove", null, this.wj.bind(this));
    this.fm = w.O(document, "mouseup", null, this.Fl.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
d.wj = function(a) {
    Jf(this, a);
    this.Gj ? Gf(this.rg, this.oc) : this.Og ? of (this.He, this.Nc, this.oc) : this.Fj && Cf(this.Ie, this.Nc, this.oc);
    a.preventDefault();
    a.stopPropagation()
};
d.Fl = function(a) {
    Jf(this, a);
    w.Vf();
    if (this.Nl) console.log("Trying to end a gesture recursively.");
    else {
        this.Nl = !0;
        if (this.Fj) Df(this.Ie, a, this.oc);
        else if (this.Og) rf(this.He, a, this.oc);
        else if (this.Gj) {
            var b = this.rg;
            Gf(b, this.oc);
            Of(b.m)
        } else this.Cc && !this.Kg ? (this.Cc.jp && this.Cc.jp(), this.Cc.select && this.Cc.select()) : Pf(this) ? (this.lh.ze(), Qf(this)) : !this.kh || this.Kg || Pf(this) ? this.kh || this.Cc || this.lh || this.Kg || w.selected && w.selected.ng() : (this.I && this.I.Lh ? this.Yb.disabled || (w.j.rc() || w.j.S(!0),
            uf(Mf(this.I, this.Yb))) : w.j.V(new Dc(this.kh, "click", void 0, void 0)), Qf(this), w.j.S(!1));
        a.preventDefault();
        a.stopPropagation();
        this.A()
    }
};
d.cancel = function() {
    if (!this.Nl) {
        w.Vf();
        if (this.Fj) Df(this.Ie, this.Nc, this.oc);
        else if (this.Og) rf(this.He, this.Nc, this.oc);
        else if (this.Gj) {
            var a = this.rg;
            Gf(a, this.oc);
            Of(a.m)
        }
        this.A()
    }
};

function pc(a, b) {
    a.Yb ? (Qf(a), w.Pb(a.I), a.Yb.xi(b)) : a.Cc ? a.Cc.xi(b) : a.ib && !a.I && (w.Pb(), a.ib.xi(b));
    b.preventDefault();
    b.stopPropagation();
    a.A()
}

function Qf(a) {
    a.Yb && !a.I && tf(a.Yb)
}

function Rf(a, b) {
    a.kh || a.Cc || (a.kh = b, b.rb && b != af(b) ? Sf(a, af(b)) : Sf(a, b))
}

function Sf(a, b) {
    b.gb ? Sf(a, b.getParent()) : a.Yb = b
}

function Pf(a) {
    if (a.lh) {
        var b = a.lh;
        b = b.tg && !!b.v && He(b.v)
    } else b = !1;
    return b && !a.Kg && (!a.I || !a.I.Lh)
}
d.pb = function() {
    return this.Gj || this.Og || this.Fj
};
w.i = {};
w.i.removeAttribute = function(a, b) {
    x && vb("10.0") ? a.setAttribute(b, null) : a.removeAttribute(b)
};
w.i.mb = function(a, b) {
    var c = a.getAttribute("class") || "";
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c && (c += " ");
    a.setAttribute("class", c + b);
    return !0
};
w.i.Qb = function(a, b) {
    var c = a.getAttribute("class");
    if (-1 == (" " + c + " ").indexOf(" " + b + " ")) return !1;
    c = c.split(/\s+/);
    for (var e = 0; e < c.length; e++) c[e] && c[e] != b || (c.splice(e, 1), e--);
    c.length ? a.setAttribute("class", c.join(" ")) : w.i.removeAttribute(a, "class");
    return !0
};
w.i.Fr = function(a, b) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ")
};
w.i.Uw = function(a) {
    a.preventDefault();
    a.stopPropagation()
};
w.i.Ql = function(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
};
w.i.tc = function(a) {
    var b = new C(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (c = (c = a.getAttribute("transform")) && c.match(w.i.tc.Gu)) b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && ((c = a.match(w.i.tc.Eu)) || (c = a.match(w.i.tc.Fu)), c && (b.x += parseFloat(c[1]), c[3] && (b.y += parseFloat(c[3]))));
    return b
};
w.i.vl = function(a) {
    for (var b = 0, c = 0; a;) {
        var e = w.i.tc(a);
        b += e.x;
        c += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new C(b, c)
};
w.i.tc.Gu = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;
w.i.tc.Fu = /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
w.i.tc.Eu = /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/;
w.i.B = function(a, b, c) {
    a = document.createElementNS(w.Tm, a);
    for (var e in b) a.setAttribute(e, b[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
};
w.i.Sf = function(a) {
    return a.ctrlKey && mb ? !0 : 2 == a.button
};
w.i.Qj = function(a, b, c) {
    var e = b.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    c || (c = b.getScreenCTM().inverse());
    return e.matrixTransform(c)
};
w.i.pp = function(a) {
    return a.length ? a.reduce(function(a, c) {
        return a.length < c.length ? a : c
    }).length : 0
};
w.i.iv = function(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var c = 0;
    b = b || w.i.pp(a);
    for (var e = 0; e < b; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c;
        " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c;
    return b
};
w.i.jv = function(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var c = 0;
    b = b || w.i.pp(a);
    for (var e = 0; e < b; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c;
        " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
    return b
};
w.i.Ox = function(a) {
    return w.i.Cp(a, !0)
};
w.i.jc = function(a) {
    if (!p(a)) return a;
    a = w.i.Cp(a, !1);
    return a.length ? a[0] : ""
};
w.i.pq = function(a) {
    for (var b = w.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e;) {
        var f = e[1];
        f = f.toUpperCase();
        "BKY_" != f.substr(0, 4) ? console.log("WARNING: Unsupported message table prefix in %{" + e[1] + "}.") : void 0 == b[f.substr(4)] && console.log("WARNING: No message string for %{" + e[1] + "}.");
        a = a.substring(e.index + f.length + 1);
        e = c.exec(a)
    }
};
w.i.Cp = function(a, b) {
    var c = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && c.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : b && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && c.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (c.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[a-zA-Z][a-zA-Z0-9_]*/.test(f) ? (l = f.toUpperCase(), (l = Ea(l, "BKY_") ?
            l.substring(4) : null) && l in w.g ? (f = w.g[l], p(f) ? Array.prototype.push.apply(c, w.i.Cp(f, b)) : b ? c.push(String(f)) : c.push(f)) : c.push("%{" + f + "}")) : c.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && c.push(l);
    b = [];
    for (k = a.length = 0; k < c.length; ++k) "string" == typeof c[k] ? a.push(c[k]) : ((l = a.join("")) && b.push(l), a.length = 0, b.push(c[k]));
    (l = a.join("")) && b.push(l);
    a.length = 0;
    return b
};
w.i.ke = function() {
    for (var a = w.i.ke.$s.length, b = [], c = 0; 20 > c; c++) b[c] = w.i.ke.$s.charAt(Math.random() * a);
    return b.join("")
};
w.i.ke.$s = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
w.i.ut = function(a, b) {
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) a[c] = w.i.ay(a[c], b);
    return a.join("\n")
};
w.i.ay = function(a, b) {
    if (a.length <= b) return a;
    for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++) c[e].length > b && (b = c[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var h = e;
        var k = a;
        a = [];
        var l = c.length / f,
            m = 1;
        for (e = 0; e < c.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = w.i.vt(c, a, b);
        e = w.i.Gp(c, a, b);
        a = w.i.by(c, a);
        f++
    } while (e > h);
    return k
};
w.i.Gp = function(a, b, c) {
    for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === b[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === b[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (h = b = 0; h < e.length; h++) b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5), b -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? b += c / 3 : -1 != ",;)]}".indexOf(f[h]) && (b += c / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += .5);
    return b
};
w.i.vt = function(a, b, c) {
    for (var e = w.i.Gp(a, b, c), f, h = 0; h < b.length - 1; h++)
        if (b[h] != b[h + 1]) {
            var k = [].concat(b);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1];
            var l = w.i.Gp(a, k, c);
            l > e && (e = l, f = k)
        }
    return f ? w.i.vt(a, f, c) : b
};
w.i.by = function(a, b) {
    for (var c = [], e = 0; e < a.length; e++) c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? "\n" : " ");
    return c.join("")
};
w.i.Pf = function() {
    if (void 0 !== w.i.Pf.fn) return w.i.Pf.fn;
    if (!g.getComputedStyle) return !1;
    var a = document.createElement("p"),
        b = "none",
        c = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
    document.body.insertBefore(a, null);
    for (var e in c)
        if (void 0 !== a.style[e]) {
            a.style[e] = "translate3d(1px,1px,1px)";
            b = g.getComputedStyle(a);
            if (!b) return document.body.removeChild(a), !1;
            b = b.getPropertyValue(c[e])
        }
    document.body.removeChild(a);
    w.i.Pf.fn = "none" !== b;
    return w.i.Pf.fn
};
w.i.Dj = function(a, b) {
    var c = b.nextSibling;
    b = b.parentNode;
    if (!b) throw "Reference node has no parent.";
    c ? b.insertBefore(a, c) : b.appendChild(a)
};
w.i.Us = function(a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" === document.readyState) a();
    else var b = setInterval(function() {
        "complete" === document.readyState && (clearInterval(b), a())
    }, 10)
};
w.i.bk = function(a, b) {
    a.style.transform = b;
    a.style["-webkit-transform"] = b
};
w.i.Sn = function() {
    var a = Xd(),
        b = Tf();
    return {
        right: a.width + b.x,
        bottom: a.height + b.y,
        top: b.y,
        left: b.x
    }
};

function Uf(a, b) {
    this.Zh = a;
    this.up = b.spacing;
    this.Yr = b.length;
    this.Fw = (this.qo = a.firstChild) && this.qo.nextSibling;
    this.Ex = b.snap
}
Uf.prototype.dg = 1;
Uf.prototype.A = function() {
    this.Zh = null
};
Uf.prototype.update = function(a) {
    this.dg = a;
    var b = this.up * a || 100;
    this.Zh.setAttribute("width", b);
    this.Zh.setAttribute("height", b);
    b = Math.floor(this.up / 2) + .5;
    var c = b - this.Yr / 2,
        e = b + this.Yr / 2;
    b *= a;
    c *= a;
    e *= a;
    Vf(this.qo, a, c, e, b, b);
    Vf(this.Fw, a, b, b, c, e)
};

function Vf(a, b, c, e, f, h) {
    a && (a.setAttribute("stroke-width", b), a.setAttribute("x1", c), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h))
}
Uf.prototype.moveTo = function(a, b) {
    this.Zh.setAttribute("x", a);
    this.Zh.setAttribute("y", b);
    (x || jb) && this.update(this.dg)
};

function Wf(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else c = Xf(a.toolbox), e = !(!c || !c.getElementsByTagName("category").length), f = a.trashcan, void 0 === f && (f = e), h = a.collapse, void 0 === h && (h = e), k = a.comments, void 0 === k && (k = e), l = a.disable, void 0 === l && (l = e), m = a.sounds, void 0 === m && (m = !0);
    var n = !!a.rtl,
        q = a.horizontalLayout;
    void 0 === q && (q = !1);
    var t = a.toolboxPosition;
    t = "end" === t ? !1 : !0;
    t = q ? t ? w.wf : w.wg : t == n ? w.Wd : w.vf;
    var z = a.scrollbars;
    void 0 === z && (z = e);
    var y = a.css;
    void 0 === y && (y = !0);
    var B = "https://blockly-demo.appspot.com/static/media/";
    a.media ? B = a.media : a.path && (B = a.path + "media/");
    var Ma = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex;
    this.u = n;
    this.$e = Ma;
    this.collapse = h;
    this.Wi = k;
    this.disable = l;
    this.readOnly = b;
    this.ds = a.maxBlocks || Infinity;
    this.Pd = B;
    this.Er = e;
    this.Hr = z;
    this.sw = f;
    this.rw = m;
    this.qw = y;
    this.qe = q;
    this.te = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.zq = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.SB = 0 < c.spacing && !!b.snap;
    this.Ar = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.Zx = void 0 === a.wheel ? !1 : !!a.wheel;
    b.et = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Oj = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Pj = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Bx = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.Zb = b;
    this.Ca = t
}
Wf.prototype.Kb = null;
Wf.prototype.ig = null;
Wf.prototype.qb = null;

function Xf(a) {
    a ? ("string" != typeof a && ("undefined" == typeof XSLTProcessor && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = w.D.Pc(a))) : a = null;
    return a
};

function Yf(a) {
    this.m = a;
    this.Hf = new Zf(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.pg = new Zf(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.Yi = w.i.B("rect", {
        height: G,
        width: G,
        "class": "blocklyScrollbarBackground"
    }, null);
    w.i.Dj(this.Yi, a.Ud)
}
Yf.prototype.$a = null;
Yf.prototype.A = function() {
    F(this.Yi);
    this.$a = this.m = this.Yi = null;
    this.Hf.A();
    this.Hf = null;
    this.pg.A();
    this.pg = null
};
Yf.prototype.resize = function() {
    var a = this.m.qb();
    if (a) {
        var b = !1,
            c = !1;
        this.$a && this.$a.xa == a.xa && this.$a.bb == a.bb && this.$a.wb == a.wb && this.$a.lb == a.lb ? (this.$a && this.$a.Ic == a.Ic && this.$a.Ab == a.Ab && this.$a.Hc == a.Hc || (b = !0), this.$a && this.$a.mc == a.mc && this.$a.De == a.De && this.$a.nc == a.nc || (c = !0)) : c = b = !0;
        b && this.Hf.resize(a);
        c && this.pg.resize(a);
        this.$a && this.$a.xa == a.xa && this.$a.lb == a.lb || this.Yi.setAttribute("x", this.pg.Oc.x);
        this.$a && this.$a.bb == a.bb && this.$a.wb == a.wb || this.Yi.setAttribute("y", this.Hf.Oc.y);
        this.$a = a
    }
};
Yf.prototype.set = function(a, b) {
    var c = {};
    a *= this.Hf.hc;
    b *= this.pg.hc;
    var e = this.pg.Ad,
        f = a / this.Hf.Ad;
    c.x = isNaN(f) ? 0 : f;
    e = b / e;
    c.y = isNaN(e) ? 0 : e;
    this.m.ig(c);
    $f(this.Hf, a);
    $f(this.pg, b)
};

function Zf(a, b, c, e) {
    this.m = a;
    this.oi = c || !1;
    this.Lg = b;
    this.$a = null;
    this.Zi(e);
    this.Oc = new C(0, 0);
    a = G;
    b ? (this.gd.setAttribute("height", a), this.ue.setAttribute("height", a), this.Be.setAttribute("height", a - 5), this.Be.setAttribute("y", 2.5), this.Lj = "width", this.Gs = "x") : (this.gd.setAttribute("width", a), this.ue.setAttribute("width", a), this.Be.setAttribute("width", a - 5), this.Be.setAttribute("x", 2.5), this.Lj = "height", this.Gs = "y");
    this.zs = w.O(this.gd, "mousedown", this, this.ix);
    this.As = w.O(this.Be, "mousedown",
        this, this.jx)
}
var ag, bg;
d = Zf.prototype;
d.Fo = new C(0, 0);
d.ct = 0;
d.Ad = 0;
d.If = 0;
d.xj = 0;
d.Jj = !0;
d.zg = !0;
var G = 15;
Bb && (G = 25);
Zf.prototype.A = function() {
    cg();
    w.Ma(this.zs);
    this.zs = null;
    w.Ma(this.As);
    this.As = null;
    F(this.ue);
    this.m = this.Be = this.gd = this.w = this.ue = null
};

function $f(a, b) {
    a.xj = b;
    a.Be.setAttribute(a.Gs, a.xj)
}

function dg(a, b) {
    a.Ad = b;
    a.ue.setAttribute(a.Lj, a.Ad);
    a.gd.setAttribute(a.Lj, a.Ad)
}
Yf.prototype.dh = function(a) {
    this.Hf.dh(a);
    this.pg.dh(a)
};

function eg(a, b, c) {
    a.Oc.x = b;
    a.Oc.y = c;
    w.i.bk(a.ue, "translate(" + (a.Oc.x + a.Fo.x) + "px," + (a.Oc.y + a.Fo.y) + "px)")
}
d = Zf.prototype;
d.resize = function(a) {
    if (!a && (a = this.m.qb(), !a)) return;
    var b = this.$a;
    if (!a || !b || a.xa != b.xa || a.bb != b.bb || a.Ab != b.Ab || a.De != b.De || a.wb != b.wb || a.lb != b.lb || a.Ic != b.Ic || a.mc != b.mc || a.Hc != b.Hc || a.nc != b.nc) {
        this.$a = a;
        if (this.Lg) {
            b = a.xa - 1;
            this.oi && (b -= G);
            dg(this, Math.max(0, b));
            b = a.lb + .5;
            this.oi && this.m.u && (b += G);
            eg(this, b, a.wb + a.bb - G - .5);
            this.oi || this.oa(this.Ad < a.Ic);
            this.hc = this.Ad / a.Ic;
            if (-Infinity == this.hc || Infinity == this.hc || isNaN(this.hc)) this.hc = 0;
            this.If = Math.max(0, a.xa * this.hc);
            this.Be.setAttribute(this.Lj,
                this.If);
            $f(this, fg(this, (a.Ab - a.Hc) * this.hc))
        } else {
            b = a.bb - 1;
            this.oi && (b -= G);
            dg(this, Math.max(0, b));
            b = a.lb + .5;
            this.m.u || (b += a.xa - G - 1);
            eg(this, b, a.wb + .5);
            this.oi || this.oa(this.Ad < a.mc);
            this.hc = this.Ad / a.mc;
            if (-Infinity == this.hc || Infinity == this.hc || isNaN(this.hc)) this.hc = 0;
            this.If = Math.max(0, a.bb * this.hc);
            this.Be.setAttribute(this.Lj, this.If);
            $f(this, fg(this, (a.De - a.nc) * this.hc))
        }
        gg(this)
    }
};
d.Zi = function(a) {
    var b = "blocklyScrollbar" + (this.Lg ? "Horizontal" : "Vertical");
    a && (b += " " + a);
    this.ue = w.i.B("svg", {
        "class": b
    }, null);
    this.w = w.i.B("g", {}, this.ue);
    this.gd = w.i.B("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.w);
    a = Math.floor((G - 5) / 2);
    this.Be = w.i.B("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.w);
    w.i.Dj(this.ue, K(this.m))
};
d.Y = function() {
    return this.Jj
};
d.dh = function(a) {
    var b = a != this.zg;
    this.zg = a;
    b && this.rk()
};
d.oa = function(a) {
    var b = a != this.Y();
    if (this.oi) throw "Unable to toggle visibility of paired scrollbars.";
    this.Jj = a;
    b && this.rk()
};
d.rk = function() {
    this.zg && this.Y() ? this.ue.setAttribute("display", "block") : this.ue.setAttribute("display", "none")
};
d.ix = function(a) {
    Nf(this.m);
    w.Touch.Me();
    cg();
    if (w.i.Sf(a)) a.stopPropagation();
    else {
        var b = w.i.Qj(a, K(this.m), hg(this.m));
        b = this.Lg ? b.x : b.y;
        var c = w.i.vl(this.Be);
        c = this.Lg ? c.x : c.y;
        var e = this.xj,
            f = .95 * this.If;
        b <= c ? e -= f : b >= c + this.If && (e += f);
        $f(this, fg(this, e));
        gg(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
d.jx = function(a) {
    Nf(this.m);
    cg();
    w.i.Sf(a) ? a.stopPropagation() : (this.Gx = this.xj, Ff(this.m), this.ct = this.Lg ? a.clientX : a.clientY, ag = w.O(document, "mouseup", this, this.ox), bg = w.O(document, "mousemove", this, this.kx), a.stopPropagation(), a.preventDefault())
};
d.kx = function(a) {
    $f(this, fg(this, this.Gx + ((this.Lg ? a.clientX : a.clientY) - this.ct)));
    gg(this)
};
d.ox = function() {
    Of(this.m);
    w.Touch.Me();
    cg()
};

function cg() {
    w.Pb(!0);
    ag && (w.Ma(ag), ag = null);
    bg && (w.Ma(bg), bg = null)
}

function fg(a, b) {
    return b = 0 >= b || isNaN(b) || a.Ad < a.If ? 0 : Math.min(b, a.Ad - a.If)
}

function gg(a) {
    var b = a.xj / a.Ad;
    isNaN(b) && (b = 0);
    var c = {};
    a.Lg ? c.x = b : c.y = b;
    a.m.ig(c)
}
d.set = function(a) {
    $f(this, fg(this, a * this.hc));
    gg(this)
};

function ig(a, b) {
    ig.s.constructor.call(this, a, b);
    this.Ol = !1;
    this.td = {};
    this.bt = this.Vj = 0;
    this.Eo = null
}
v(ig, If);
d = ig.prototype;
d.fj = function(a) {
    ig.s.fj.call(this, a);
    !this.Nl && w.Touch.Rl(a) && jg(this, a)
};
d.yg = function(a) {
    this.Eo = w.O(document, "mousedown", null, this.nw.bind(this), !0);
    this.em = w.O(document, "mousemove", null, this.wj.bind(this), !0);
    this.fm = w.O(document, "mouseup", null, this.Fl.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
d.nw = function(a) {
    !this.pb() && w.Touch.Rl(a) && (jg(this, a), this.Ol && w.Vf())
};
d.wj = function(a) {
    if (this.pb()) w.Touch.qp(a) && ig.s.wj.call(this, a);
    else if (this.Ol) {
        if (w.Touch.Rl(a)) {
            this.td[w.Touch.Cl(a)] = kg(this, a);
            var b = Object.keys(this.td);
            if (2 == b.length) {
                b = rc(this.td[b[0]], this.td[b[1]]) / this.bt;
                if (0 < this.Vj && Infinity > this.Vj) {
                    var c = b - this.Vj;
                    c = 0 < c ? 5 * c : 6 * c;
                    var e = this.ib,
                        f = w.i.Qj(a, K(e), hg(e));
                    e.zoom(f.x, f.y, c)
                }
                this.Vj = b;
                a.preventDefault()
            }
        }
        w.Vf()
    } else ig.s.wj.call(this, a)
};
d.Fl = function(a) {
    if (w.Touch.Rl(a) && !this.pb()) {
        var b = w.Touch.Cl(a);
        this.td[b] && delete this.td[b];
        2 > Object.keys(this.td).length && (this.td = {}, this.Vj = 0)
    }!this.Ol || this.pb() ? w.Touch.qp(a) && ig.s.Fl.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.A())
};
d.A = function() {
    ig.s.A.call(this);
    this.Eo && w.Ma(this.Eo)
};

function jg(a, b) {
    a.td[w.Touch.Cl(b)] = kg(a, b);
    var c = Object.keys(a.td);
    2 == c.length && (a.bt = rc(a.td[c[0]], a.td[c[1]]), a.Ol = !0, b.preventDefault())
}

function kg(a, b) {
    return a.ib ? new C(b.pageX ? b.pageX : b.changedTouches[0].pageX, b.pageY ? b.pageY : b.changedTouches[0].pageY) : null
};

function lg() {
    Fb.call(this);
    this.Qe = new Xb(this);
    this.Hu = this;
    this.Ho = null
}
v(lg, Fb);
lg.prototype[Sb] = !0;
d = lg.prototype;
d.zl = function() {
    return this.Ho
};
d.tm = function(a) {
    this.Ho = a
};
d.addEventListener = function(a, b, c, e) {
    cc(this, a, b, c, e)
};
d.removeEventListener = function(a, b, c, e) {
    kc(this, a, b, c, e)
};
d.dispatchEvent = function(a) {
    var b, c = this.zl();
    if (c)
        for (b = []; c; c = c.zl()) b.push(c);
    c = this.Hu;
    var e = a.type || a;
    if (p(a)) a = new Kb(a, c);
    else if (a instanceof Kb) a.target = a.target || c;
    else {
        var f = a;
        a = new Kb(e, c);
        db(a, f)
    }
    f = !0;
    if (b)
        for (var h = b.length - 1; !a.Xg && 0 <= h; h--) {
            var k = a.currentTarget = b[h];
            f = mg(k, e, !0, a) && f
        }
    a.Xg || (k = a.currentTarget = c, f = mg(k, e, !0, a) && f, a.Xg || (f = mg(k, e, !1, a) && f));
    if (b)
        for (h = 0; !a.Xg && h < b.length; h++) k = a.currentTarget = b[h], f = mg(k, e, !1, a) && f;
    return f
};
d.Va = function() {
    lg.s.Va.call(this);
    this.removeAllListeners();
    this.Ho = null
};
d.na = function(a, b, c, e) {
    return this.Qe.add(String(a), b, !1, c, e)
};
d.$r = function(a, b, c, e) {
    return this.Qe.add(String(a), b, !0, c, e)
};
d.kd = function(a, b, c, e) {
    return this.Qe.remove(String(a), b, c, e)
};
d.removeAllListeners = function(a) {
    return this.Qe ? this.Qe.removeAll(a) : 0
};

function mg(a, b, c, e) {
    b = a.Qe.xc[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var f = !0, h = 0; h < b.length; ++h) {
        var k = b[h];
        if (k && !k.ui && k.capture == c) {
            var l = k.listener,
                m = k.Gl || k.src;
            k.Nk && Zb(a.Qe, k);
            f = !1 !== l.call(m, e) && f
        }
    }
    return f && 0 != e.Ts
}
d.nj = function(a, b, c, e) {
    return this.Qe.nj(String(a), b, c, e)
};

function sf(a, b, c) {
    if (u(a)) c && (a = oa(a, c));
    else if (a && "function" == typeof a.handleEvent) a = oa(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : g.setTimeout(a, b || 0)
};

function ng(a, b, c, e) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e
}
d = ng.prototype;
d.cd = function() {
    return this.right - this.left
};
d.Xh = function() {
    return this.bottom - this.top
};
d.clone = function() {
    return new ng(this.top, this.right, this.bottom, this.left)
};
d.contains = function(a) {
    return this && a ? a instanceof ng ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
d.expand = function(a, b, c, e) {
    ia(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(e));
    return this
};
d.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
d.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
d.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
d.translate = function(a, b) {
    a instanceof C ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, ba(b) && (this.top += b, this.bottom += b));
    return this
};
d.scale = function(a, b) {
    b = ba(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this
};

function og(a, b, c, e) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = e
}
d = og.prototype;
d.clone = function() {
    return new og(this.left, this.top, this.width, this.height)
};
d.contains = function(a) {
    return a instanceof C ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
d.Ue = function() {
    return new Qd(this.width, this.height)
};
d.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
d.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
d.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
d.translate = function(a, b) {
    a instanceof C ? (this.left += a.x, this.top += a.y) : (this.left += a, ba(b) && (this.top += b));
    return this
};
d.scale = function(a, b) {
    b = ba(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this
};

function pg(a) {
    this.m = a
}
d = pg.prototype;
d.xg = 47;
d.yk = 44;
d.Ah = 16;
d.Km = 20;
d.Ii = 20;
d.Ek = 10;
d.Rm = 0;
d.Sm = 32;
d.ei = !1;
d.w = null;
d.Am = null;
d.po = 0;
d.Uf = 0;
d.Ib = 0;
d.kf = 0;
d.X = function() {
    this.w = w.i.B("g", {
        "class": "blocklyTrash"
    }, null);
    var a = String(Math.random()).substring(2);
    var b = w.i.B("clipPath", {
        id: "blocklyTrashBodyClipPath" + a
    }, this.w);
    w.i.B("rect", {
        width: this.xg,
        height: this.yk,
        y: this.Ah
    }, b);
    w.i.B("image", {
        width: w.lc.width,
        x: -this.Rm,
        height: w.lc.height,
        y: -this.Sm,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.w).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.Pd + w.lc.url);
    b = w.i.B("clipPath", {
        id: "blocklyTrashLidClipPath" + a
    }, this.w);
    w.i.B("rect", {
        width: this.xg,
        height: this.Ah
    }, b);
    this.Am = w.i.B("image", {
        width: w.lc.width,
        x: -this.Rm,
        height: w.lc.height,
        y: -this.Sm,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.w);
    this.Am.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.m.options.Pd + w.lc.url);
    w.O(this.w, "mouseup", this, this.click);
    this.Xm();
    return this.w
};
d.K = function(a) {
    this.Ri = this.Km + a;
    qf(this, !1);
    return this.Ri + this.yk + this.Ah
};
d.A = function() {
    this.w && (F(this.w), this.w = null);
    this.m = this.Am = null;
    g.clearTimeout(this.po)
};
d.position = function() {
    var a = this.m.qb();
    a && (this.m.u ? (this.Ib = this.Ii + G, a.Ca == w.vf && (this.Ib += a.jl, this.m.ca && (this.Ib += a.lb))) : (this.Ib = a.xa + a.lb - this.xg - this.Ii - G, a.Ca == w.Wd && (this.Ib -= a.jl)), this.kf = a.bb + a.wb - (this.yk + this.Ah) - this.Ri, a.Ca == w.wg && (this.kf -= a.rr), this.w.setAttribute("transform", "translate(" + this.Ib + "," + this.kf + ")"))
};
d.Uh = function() {
    if (!this.w) return null;
    var a = this.w.getBoundingClientRect();
    return new og(a.left + this.Rm - this.Ek, a.top + this.Sm - this.Ek, this.xg + 2 * this.Ek, this.Ah + this.yk + 2 * this.Ek)
};

function qf(a, b) {
    a.ei != b && (g.clearTimeout(a.po), a.ei = b, a.Xm())
}
d.Xm = function() {
    this.Uf += this.ei ? .2 : -.2;
    this.Uf = Math.min(Math.max(this.Uf, 0), 1);
    var a = 45 * this.Uf;
    this.Am.setAttribute("transform", "rotate(" + (this.m.u ? -a : a) + "," + (this.m.u ? 4 : this.xg - 4) + "," + (this.Ah - 2) + ")");
    this.w.style.opacity = .4 + .4 * this.Uf;
    0 < this.Uf && 1 > this.Uf && (this.po = sf(this.Xm, 20, this))
};
d.close = function() {
    qf(this, !1)
};
d.click = function() {
    var a = this.m.Ix - this.m.scrollX,
        b = this.m.Kx - this.m.scrollY;
    Math.sqrt(a * a + b * b) > w.Op || console.log("TODO: Inspect trash.")
};

function Qc(a, b, c, e) {
    this.o = a;
    this.name = b;
    this.type = c || "";
    this.ci = e || w.i.ke();
    w.j.V(new Ac(this))
}
Qc.prototype.aa = function() {
    return this.ci
};

function qg(a, b) {
    a = String(a.name).toLowerCase();
    b = String(b.name).toLowerCase();
    return a < b ? -1 : a == b ? 0 : 1
};
w.G = {};
w.G.cb = w.Wp;
w.G.eq = function(a) {
    var b = Oc(a);
    a = Object.create(null);
    for (var c = 0; c < b.length; c++) {
        var e = b[c].Ff();
        if (e)
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                h.aa() && (a[h.aa()] = h)
            }
    }
    b = [];
    for (var k in a) b.push(a[k]);
    return b
};
w.G.CB = function() {
    console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.")
};
w.G.Ju = function(a) {
    var b = Oc(a);
    a = {};
    for (var c = 0; c < b.length; c++) {
        var e = b[c];
        if (e.Xv) {
            e = e.Xv();
            for (var f = 0; f < e.length; f++) a[e[f]] = e[f]
        }
    }
    b = [];
    for (var h in a) b.push(a[h]);
    return b
};
w.G.Cf = function(a) {
    var b = [],
        c = E("button");
    c.setAttribute("text", w.g.NEW_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE");
    rg(a, function(a) {
        w.G.Nh(a.ta)
    });
    b.push(c);
    a = w.G.Gn(a);
    return b = b.concat(a)
};
w.G.Gn = function(a) {
    a = a.rj("");
    a.sort(qg);
    var b = [];
    if (0 < a.length) {
        var c = a[0];
        if (w.H.variables_set) {
            var e = w.H.math_change ? 8 : 24;
            e = '<xml><block type="variables_set" gap="' + e + '">' + w.G.Th(c) + "</block></xml>";
            e = w.D.Pc(e).firstChild;
            b.push(e)
        }
        w.H.math_change && (e = w.H.variables_get ? 20 : 8, e = '<xml><block type="math_change" gap="' + e + '">' + w.G.Th(c) + '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>', e = w.D.Pc(e).firstChild, b.push(e));
        for (c = 0; e = a[c]; c++) w.H.variables_get &&
            (e = '<xml><block type="variables_get" gap="8">' + w.G.Th(e) + "</block></xml>", e = w.D.Pc(e).firstChild, b.push(e))
    }
    return b
};
w.G.Uv = function(a) {
    a = a.Re();
    var b = "";
    if (a.length)
        for (var c = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !b;) {
            for (var h = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) {
                    h = !0;
                    break
                }
            h ? (e++, 25 == e && (e = 0, c++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < c && (f += c)) : b = f
        } else b = "i";
    return b
};
w.G.Nh = function(a, b, c) {
    function e(c) {
        w.G.Ls(w.g.NEW_VARIABLE_TITLE, c, function(c) {
            if (c) {
                var h = w.G.Rw(c, a);
                if (h) {
                    var k = c.toLowerCase();
                    if (h.type == f) var n = w.g.VARIABLE_ALREADY_EXISTS.replace("%1", k);
                    else n = w.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", k).replace("%2", h.type);
                    w.alert(n, function() {
                        e(c)
                    })
                } else a.Yc(c, f), b && b(c)
            } else b && b(null)
        })
    }
    var f = c || "";
    e("")
};
ca("Blockly.Variables.createVariableButtonHandler", w.G.Nh);
w.G.Yc = w.G.Nh;
ca("Blockly.Variables.createVariable", w.G.Yc);
w.G.To = function(a, b) {
    function c(e) {
        var f = w.g.RENAME_VARIABLE_TITLE.replace("%1", b.name);
        w.G.Ls(f, e, function(e) {
            if (e) {
                var f = w.G.Sw(e, b.type, a);
                f ? (f = w.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", e.toLowerCase()).replace("%2", f.type), w.alert(f, function() {
                    c(e)
                })) : a.ah(b.aa(), e)
            }
        })
    }
    c("")
};
w.G.Ls = function(a, b, c) {
    w.prompt(a, b, function(a) {
        a && (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), a == w.g.RENAME_VARIABLE || a == w.g.NEW_VARIABLE) && (a = null);
        c(a)
    })
};
w.G.Sw = function(a, b, c) {
    c = c.qa.Re();
    a = a.toLowerCase();
    for (var e = 0, f; f = c[e]; e++)
        if (f.name.toLowerCase() == a && f.type != b) return f;
    return null
};
w.G.Rw = function(a, b) {
    b = b.qa.Re();
    a = a.toLowerCase();
    for (var c = 0, e; e = b[c]; c++)
        if (e.name.toLowerCase() == a) return e;
    return null
};
w.G.Th = function(a) {
    var b = a.type;
    "" == b && (b = "''");
    return '<field name="VAR" id="' + a.aa() + '" variabletype="' + Ia(b) + '">' + Ia(a.name) + "</field>"
};
w.G.vr = function(a) {
    a = "<xml>" + w.G.Th(a) + "</xml>";
    return w.D.Pc(a).firstChild
};
w.G.yl = function(a, b, c, e) {
    var f = w.G.Kc(a, b, c, e);
    f || (f = w.G.ov(a, b, c, e));
    return f
};
w.G.Kc = function(a, b, c, e) {
    var f = a.si;
    if (b) {
        var h = a.Kd(b);
        !h && f && (h = f.Kd(b))
    } else if (c) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.Kc(c, e);
        !h && f && (h = f.Kc(c, e))
    }
    return h
};
w.G.ov = function(a, b, c, e) {
    var f = a.si;
    c || (c = w.G.Uv(a.Nd ? a.ph : a));
    return f ? f.Yc(c, e, b) : a.Yc(c, e, b)
};
w.G.wr = function(a, b) {
    a = a.Re();
    var c = [];
    if (b.length != a.length)
        for (var e = 0; e < a.length; e++) {
            var f = a[e]; - 1 == b.indexOf(f) && c.push(f)
        }
    return c
};
w.qd = {};
w.qd.$w = function(a) {
    w.G.Nh(a.ta, null, "String")
};
w.qd.Zw = function(a) {
    w.G.Nh(a.ta, null, "Number")
};
w.qd.Yw = function(a) {
    w.G.Nh(a.ta, null, "Colour")
};
w.qd.Cf = function(a) {
    var b = [],
        c = E("button");
    c.setAttribute("text", w.g.NEW_STRING_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_STRING");
    b.push(c);
    c = E("button");
    c.setAttribute("text", w.g.NEW_NUMBER_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER");
    b.push(c);
    c = E("button");
    c.setAttribute("text", w.g.NEW_COLOUR_VARIABLE);
    c.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR");
    b.push(c);
    a.Gg.CREATE_VARIABLE_STRING = w.qd.$w;
    a.Gg.CREATE_VARIABLE_NUMBER = w.qd.Zw;
    a.Gg.CREATE_VARIABLE_COLOUR =
        w.qd.Yw;
    a = w.qd.Gn(a);
    return b = b.concat(a)
};
w.qd.Gn = function(a) {
    a = a.Re();
    a.sort(qg);
    var b = [];
    if (0 < a.length) {
        if (w.H.variables_set_dynamic) {
            var c = '<xml><block type="variables_set_dynamic" gap="24">' + w.G.Th(a[0]) + "</block></xml>";
            c = w.D.Pc(c).firstChild;
            b.push(c)
        }
        if (w.H.variables_get_dynamic)
            for (var e = 0; c = a[e]; e++) c = '<xml><block type="variables_get_dynamic" gap="8">' + w.G.Th(c) + "</block></xml>", c = w.D.Pc(c).firstChild, b.push(c)
    }
    return b
};

function sg(a) {
    this.Io = a;
    this.Pi = Object.create(null)
}
d = sg.prototype;
d.mo = null;
d.A = function() {
    this.Pi = this.Io = null
};
d.load = function(a, b) {
    if (a.length) {
        try {
            var c = new window.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var h = a[f],
                k = h.match(/\.(\w+)$/);
            if (k && c.canPlayType("audio/" + k[1])) {
                e = new window.Audio(h);
                break
            }
        }
        e && e.play && (this.Pi[b] = e)
    }
};
d.preload = function() {
    for (var a in this.Pi) {
        var b = this.Pi[a];
        b.volume = .01;
        b.play();
        b.pause();
        if (pb || ob) break
    }
};
d.play = function(a, b) {
    var c = this.Pi[a];
    c ? (a = new Date, null != this.mo && a - this.mo < w.tu || (this.mo = a, c = wb && 9 === wb || pb || nb ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())) : this.Io && this.Io.Zd.play(a, b)
};
d = vf.prototype;
d.Gb = function() {
    return {
        width: this.cd(),
        height: this.Xh()
    }
};
d.$ = function() {
    if (!this.cg) {
        var a = this.Gb();
        this.$i();
        this.w.appendChild(this.ad);
        this.nh = w.i.B("rect", {
            "class": "blocklyCommentHandleTarget",
            x: 0,
            y: 0
        });
        this.w.appendChild(this.nh);
        this.kg = w.i.B("rect", {
            "class": "blocklyCommentTarget",
            x: 0,
            y: 0,
            rx: 3,
            ry: 3
        });
        this.w.appendChild(this.kg);
        this.Lb = w.i.B("g", {
            "class": this.u ? "blocklyResizeSW" : "blocklyResizeSE"
        }, this.w);
        w.i.B("polygon", {
            points: "0,x x,x x,0".replace(/x/g, (8).toString())
        }, this.Lb);
        w.i.B("line", {
                "class": "blocklyResizeLine",
                x1: 8 / 3,
                y1: 7,
                x2: 7,
                y2: 8 / 3
            },
            this.Lb);
        w.i.B("line", {
            "class": "blocklyResizeLine",
            x1: 16 / 3,
            y1: 7,
            x2: 7,
            y2: 16 / 3
        }, this.Lb);
        this.fc() && (this.Af = w.i.B("g", {
            "class": "blocklyCommentDeleteIcon"
        }, this.w), this.Yq = w.i.B("circle", {
            "class": "blocklyDeleteIconShape",
            r: "7",
            cx: "7.5",
            cy: "7.5"
        }, this.Af), w.i.B("line", {
            x1: "5",
            y1: "10",
            x2: "10",
            y2: "5",
            stroke: "#fff",
            "stroke-width": "2"
        }, this.Af), w.i.B("line", {
            x1: "5",
            y1: "5",
            x2: "10",
            y2: "10",
            stroke: "#fff",
            "stroke-width": "2"
        }, this.Af));
        tg(this, a.width, a.height);
        this.ub.value = this.Xc;
        this.cg = !0;
        this.Lb && w.O(this.Lb,
            "mousedown", this, this.Vo);
        this.fc() && (w.O(this.Af, "mousedown", this, this.Bv), w.O(this.Af, "mouseout", this, this.Cv), w.O(this.Af, "mouseup", this, this.Dv))
    }
};
d.$i = function() {
    this.ad = w.i.B("foreignObject", {
        x: 0,
        y: 10,
        "class": "blocklyCommentForeignObject"
    }, null);
    var a = document.createElementNS(w.rf, "body");
    a.setAttribute("xmlns", w.rf);
    a.className = "blocklyMinimalBody";
    var b = document.createElementNS(w.rf, "textarea");
    b.className = "blocklyCommentTextarea";
    b.setAttribute("dir", this.u ? "RTL" : "LTR");
    a.appendChild(b);
    this.ub = b;
    this.ad.appendChild(a);
    w.O(b, "wheel", this, function(a) {
        a.stopPropagation()
    });
    w.O(b, "change", this, function() {
        this.Bd(b.value)
    });
    return this.ad
};
d.Vo = function(a) {
    ug(this);
    w.i.Sf(a) || (this.o.ym(a, new C(this.o.u ? -this.ia : this.ia, this.Fa)), this.ni = w.O(document, "mouseup", this, this.yx), this.Do = w.O(document, "mousemove", this, this.Wo), w.Pb());
    a.stopPropagation()
};
d.Bv = function(a) {
    w.i.mb(this.Yq, "blocklyDeleteIconHighlighted");
    a.stopPropagation()
};
d.Cv = function() {
    w.i.Qb(this.Yq, "blocklyDeleteIconHighlighted")
};
d.Dv = function(a) {
    this.A(!0, !0);
    a.stopPropagation()
};

function ug(a) {
    a.ni && (w.Ma(a.ni), a.ni = null);
    a.Do && (w.Ma(a.Do), a.Do = null)
}
d.yx = function() {
    w.Touch.Me();
    ug(this)
};
d.Wo = function(a) {
    this.Kk = !1;
    a = ye(this.o, a);
    tg(this, this.u ? -a.x : a.x, a.y)
};

function tg(a, b, c) {
    b = Math.max(b, 45);
    c = Math.max(c, 30);
    a.ia = b;
    a.Fa = c;
    a.lk.setAttribute("width", b);
    a.lk.setAttribute("height", c);
    a.kg.setAttribute("width", b);
    a.kg.setAttribute("height", c);
    a.nh.setAttribute("width", b);
    a.nh.setAttribute("height", 10);
    a.u && (a.lk.setAttribute("transform", "scale(-1 1)"), a.kg.setAttribute("transform", "scale(-1 1)"));
    a.Lb && (a.u ? (a.Lb.setAttribute("transform", "translate(" + (-b + 8) + "," + (c - 8) + ") scale(-1 1)"), a.Af.setAttribute("transform", "translate(" + (-b + 8) + ",-8) scale(-1 1)")) :
        (a.Lb.setAttribute("transform", "translate(" + (b - 8) + "," + (c - 8) + ")"), a.Af.setAttribute("transform", "translate(" + (b - 8) + ",-8)")));
    b = a.Gb();
    a.ad.setAttribute("width", b.width);
    a.ad.setAttribute("height", b.height - 10);
    a.u && a.ad.setAttribute("x", -b.width);
    a.ub.style.width = b.width - 4 + "px";
    a.ub.style.height = b.height - 4 - 10 + "px"
}
d.jp = function() {
    var a = this;
    this.jj = !0;
    setTimeout(function() {
        a.ub.focus();
        w.i.mb(a.w, "blocklyFocused");
        w.i.mb(a.kg, "blocklyCommentTargetFocused");
        w.i.mb(a.nh, "blocklyCommentHandleTargetFocused")
    }, 0)
};

function xf(a) {
    a.jj = !1;
    setTimeout(function() {
        a.ub.blur();
        w.i.Qb(a.w, "blocklyFocused");
        w.i.Qb(a.kg, "blocklyCommentTargetFocused");
        w.i.Qb(a.nh, "blocklyCommentHandleTargetFocused")
    }, 0)
};

function vg(a) {
    this.Xi = a;
    this.X()
}
d = vg.prototype;
d.wa = null;
d.fe = null;
d.Xi = null;
d.X = function() {
    this.wa || (this.wa = w.i.B("svg", {
        xmlns: w.Tm,
        "xmlns:html": w.rf,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.Xi.appendChild(this.wa))
};
d.lf = function(a, b) {
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.wa.style.display = "block";
    w.i.bk(this.wa, "translate3d(" + a + "px, " + b + "px, 0px)")
};
d.Bl = function() {
    return w.i.tc(this.wa)
};
d.Ui = function(a) {
    if (!a) throw "Couldn't clear and hide the drag surface: missing new surface.";
    var b = this.wa.childNodes[0],
        c = this.wa.childNodes[1];
    if (!(b && c && w.i.Fr(b, "blocklyBlockCanvas") && w.i.Fr(c, "blocklyBubbleCanvas"))) throw "Couldn't clear and hide the drag surface.  A node was missing.";
    null != this.Qd ? w.i.Dj(b, this.Qd) : a.insertBefore(b, a.firstChild);
    w.i.Dj(c, b);
    this.wa.style.display = "none";
    w.i.bk(this.wa, "");
    this.Qd = null
};
w.D = {};
w.D.Fp = function(a, b) {
    var c = E("xml");
    c.appendChild(w.D.Xx(w.G.eq(a)));
    for (var e = bd(a, !0), f = 0, h; h = e[f]; f++) c.appendChild(h.mk(b));
    a = ad(a, !0);
    for (f = 0; e = a[f]; f++) c.appendChild(w.D.cn(e, b));
    return c
};
w.D.Xx = function(a) {
    for (var b = E("variables"), c = 0, e; e = a[c]; c++) {
        var f = E("variable", null, e.name);
        f.setAttribute("type", e.type);
        f.setAttribute("id", e.aa());
        b.appendChild(f)
    }
    return b
};
w.D.cn = function(a, b) {
    var c;
    a.o.u && (c = a.o.cd());
    b = w.D.yf(a, b);
    var e = a.la();
    b.setAttribute("x", Math.round(a.o.u ? c - e.x : e.x));
    b.setAttribute("y", Math.round(e.y));
    return b
};
w.D.Pv = function(a) {
    null == a.getValue() && (a.Ng(), a.getValue());
    var b = a.Kc();
    if (!b) throw Error("Tried to serialize a variable field with no variable.");
    var c = E("field", null, b.name);
    c.setAttribute("name", a.name);
    c.setAttribute("id", b.aa());
    c.setAttribute("variabletype", b.type);
    return c
};
w.D.Qv = function(a) {
    if (a.name && a.tg) {
        if (a.Zg()) return w.D.Pv(a);
        var b = E("field", null, a.getValue());
        b.setAttribute("name", a.name);
        return b
    }
    return null
};
w.D.Ku = function(a, b) {
    for (var c = 0, e; e = a.W[c]; c++)
        for (var f = 0, h; h = e.Ia[f]; f++)(h = w.D.Qv(h)) && b.appendChild(h)
};
w.D.yf = function(a, b) {
    var c = E(a.gb ? "shadow" : "block");
    c.setAttribute("type", a.type);
    b || c.setAttribute("id", a.id);
    if (a.Ga) {
        var e = a.Ga();
        e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e)
    }
    w.D.Ku(a, c);
    if (e = a.ql()) {
        e = E("comment", null, e);
        if ("object" == typeof a.Ua) {
            e.setAttribute("pinned", a.Ua.Y());
            var f = a.Ua.Ig();
            e.setAttribute("h", f.height);
            e.setAttribute("w", f.width)
        }
        c.appendChild(e)
    }
    a.data && (e = E("data", null, a.data), c.appendChild(e));
    f = 0;
    for (var h; h = a.W[f]; f++) {
        var k, l = !0;
        if (h.type != w.Ee) {
            var m =
                I(h.connection);
            h.type == w.kb ? k = E("value") : h.type == w.Sa && (k = E("statement"));
            e = h.connection.ye;
            !e || m && m.gb || k.appendChild(w.D.xq(e));
            m && (k.appendChild(w.D.yf(m, b)), l = !1);
            k.setAttribute("name", h.name);
            l || c.appendChild(k)
        }
    }
    a.zw != a.Of && c.setAttribute("inline", a.Of);
    a.isCollapsed() && c.setAttribute("collapsed", !0);
    a.disabled && c.setAttribute("disabled", !0);
    a.fc() || a.gb || c.setAttribute("deletable", !1);
    a.se() || a.gb || c.setAttribute("movable", !1);
    He(a) || c.setAttribute("editable", !1);
    if (f = Jc(a)) k = E("next", null,
        w.D.yf(f, b)), c.appendChild(k);
    e = a.M && a.M.ye;
    !e || f && f.gb || k.appendChild(w.D.xq(e));
    return c
};
w.D.xq = function(a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && F(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && F(c))
        }
    return a
};
w.D.Zc = function(a) {
    return (new XMLSerializer).serializeToString(a)
};
w.D.KB = function(a) {
    a = w.D.Zc(a).split("<");
    for (var b = "", c = 1; c < a.length; c++) {
        var e = a[c];
        "/" == e[0] && (b = b.substring(2));
        a[c] = b + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (b += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
w.D.Pc = function(a) {
    return (new DOMParser).parseFromString(a, "text/xml").firstChild
};
w.D.GB = function(a, b) {
    b.Rb(!1);
    b.clear();
    a = w.D.ee(a, b);
    b.Rb(!0);
    return a
};
w.D.ee = function(a, b) {
    if (a instanceof Zc) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    b.u && (e = b.cd());
    c = [];
    wg();
    var f = a.childNodes.length,
        h = w.j.rc();
    h || w.j.S(!0);
    b.Rb && b.Rb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !w.j.ic) {
                var q = w.D.Qh(m, b);
                c.push(q.id);
                var t = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    z = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(t) || isNaN(z) || q.moveBy(b.u ? e - t : t, z);
                k = !1
            } else if ("shadow" == n) k = !1;
            else if ("comment" == n)
                if (b.R) Af(m, b, e);
                else {
                    var y = m,
                        B = b,
                        Ma = Yc(y),
                        Vc = new Uc(B, Ma.content, Ma.Cr, Ma.rt, Ma.id),
                        Xa = parseInt(y.getAttribute("x"), 10),
                        Fd = parseInt(y.getAttribute("y"), 10);
                    isNaN(Xa) || isNaN(Fd) || Vc.moveBy(Xa, Fd);
                    Wc(Vc)
                }
            else if ("variables" == n) {
                if (k) w.D.Mv(m, b);
                else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                k = !1
            }
        }
    } finally {
        h ||
            w.j.S(!1), xg()
    }
    b.Rb && b.Rb(!0);
    return c
};
w.D.DB = function(a, b) {
    if (b.hasOwnProperty("scale")) {
        var c = L;
        try {
            L = 0;
            var e = yg(b)
        } finally {
            L = c
        }
    }
    a = w.D.ee(a, b);
    if (e && e.height) {
        c = e.y + e.height;
        var f = e.x;
        var h = Infinity,
            k = Infinity;
        for (e = 0; e < a.length; e++) {
            var l = Ic(b, a[e]).la();
            l.y < k && (k = l.y);
            l.x < h && (h = l.x)
        }
        c = c - k + 10;
        f -= h;
        var m;
        b.u && (m = b.cd());
        for (e = 0; e < a.length; e++) Ic(b, a[e]).moveBy(b.u ? m - f : f, c)
    }
    return a
};
w.D.Qh = function(a, b) {
    if (a instanceof Zc) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    w.j.disable();
    c = b.Re();
    try {
        var e = w.D.Bn(a, b),
            f = vc(e, !1);
        if (b.R) {
            zg(e, !0);
            for (var h = f.length - 1; 0 <= h; h--) f[h].wc();
            for (h = f.length - 1; 0 <= h; h--) f[h].$(!1);
            setTimeout(function() {
                e.o && zg(e, !1)
            }, 1);
            kf(e);
            yf(b)
        } else
            for (h = f.length - 1; 0 <= h; h--) f[h].Ng()
    } finally {
        w.j.enable()
    }
    if (w.j.isEnabled()) {
        a = w.G.wr(b, c);
        for (h = 0; h < a.length; h++) w.j.V(new Ac(a[h]));
        w.j.V(new w.j.Ak(e))
    }
    return e
};
w.D.Mv = function(a, b) {
    for (var c = 0, e; e = a.children[c]; c++) {
        var f = e.getAttribute("type"),
            h = e.getAttribute("id");
        e = e.textContent;
        if (null == f) throw Error("Variable with id, " + h + " is without a type");
        b.Yc(e, f, h)
    }
};
w.D.Bn = function(a, b) {
    var c = null,
        e = a.getAttribute("type"),
        f = a.getAttribute("id");
    c = b.Xe(e, f);
    var h = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (3 != k.nodeType) {
            for (var l = h = null, m = 0, n; n = k.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? h = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !h && l && (h = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.Za && (c.Za(k), c.wc && c.wc());
                    break;
                case "comment":
                    c.bh(k.textContent);
                    var q = k.getAttribute("pinned");
                    q && !c.rb && setTimeout(function() {
                        c.Ua &&
                            c.Ua.oa && c.Ua.oa("true" == q)
                    }, 1);
                    h = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(h) && !isNaN(k) && c.Ua && c.Ua.oa && c.Ua.eg(h, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    w.D.Lv(c, m, k);
                    break;
                case "value":
                case "statement":
                    k = J(c, m);
                    if (!k) {
                        console.warn("Ignoring non-existent input " + m + " in block " + e);
                        break
                    }
                    l && (k.connection.ye = l);
                    h && (h = w.D.Bn(h, b), h.P ? k.connection.connect(h.P) : h.Z && k.connection.connect(h.Z));
                    break;
                case "next":
                    l && c.M && (c.M.ye = l);
                    h && (h =
                        w.D.Bn(h, b), c.M.connect(h.Z));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(b = a.getAttribute("inline")) && c.hg("true" == b);
    (b = a.getAttribute("disabled")) && c.Cd("true" == b || "disabled" == b);
    (b = a.getAttribute("deletable")) && c.hp("true" == b);
    (b = a.getAttribute("movable")) && c.eh("true" == b);
    (b = a.getAttribute("editable")) && c.ip("true" == b);
    (b = a.getAttribute("collapsed")) && c.fg("true" == b);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = c.Ef(!1);
        for (f = 0; a[f]; f++);
        c.np(!0)
    }
    return c
};
w.D.Kv = function(a, b, c, e) {
    var f = b.getAttribute("variabletype") || "";
    "''" == f && (f = "");
    a = w.G.yl(a, b.id, c, f);
    if (null != f && f !== a.type) throw Error("Serialized variable type with id '" + a.aa() + "' had type " + a.type + ", and does not match variable field that references it: " + w.D.Zc(b) + ".");
    e.setValue(a.aa())
};
w.D.Lv = function(a, b, c) {
    var e = H(a, b);
    e ? (a = a.o, b = c.textContent, e.Zg() ? w.D.Kv(a, c, b, e) : e.setValue(b)) : console.warn("Ignoring non-existent field " + b + " in block " + a.type)
};
w.D.Ev = function(a) {
    for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) {
            a.removeChild(c);
            break
        }
};
g.Blockly || (g.Blockly = {});
g.Blockly.Xml || (g.Blockly.Xml = {});
g.Blockly.Xml.domToText = w.D.Zc;
g.Blockly.Xml.domToWorkspace = w.D.ee;
g.Blockly.Xml.textToDom = w.D.Pc;
g.Blockly.Xml.workspaceToDom = w.D.Fp;
// Copyright 2015 Google Inc.  Apache License 2.0
function Ag(a) {
    this.m = a
}
d = Ag.prototype;
d.xg = 32;
d.Pp = 110;
d.Km = 20;
d.Ii = 20;
d.w = null;
d.Ib = 0;
d.kf = 0;
d.X = function() {
    this.w = w.i.B("g", {
        "class": "blocklyZoom"
    }, null);
    var a = String(Math.random()).substring(2);
    Bg(this, a);
    Cg(this, a);
    Dg(this, a);
    return this.w
};
d.K = function(a) {
    this.Ri = this.Km + a;
    return this.Ri + this.Pp
};
d.A = function() {
    this.w && (F(this.w), this.w = null);
    this.m = null
};
d.position = function() {
    var a = this.m.qb();
    a && (this.m.u ? (this.Ib = this.Ii + G, a.Ca == w.vf && (this.Ib += a.jl, this.m.ca && (this.Ib += a.lb))) : (this.Ib = a.xa + a.lb - this.xg - this.Ii - G, a.Ca == w.Wd && (this.Ib -= a.jl)), this.kf = a.bb + a.wb - this.Pp - this.Ri, a.Ca == w.wg && (this.kf -= a.rr), this.w.setAttribute("transform", "translate(" + this.Ib + "," + this.kf + ")"))
};

function Bg(a, b) {
    var c = a.m,
        e = w.i.B("clipPath", {
            id: "blocklyZoomoutClipPath" + b
        }, a.w);
    w.i.B("rect", {
        width: 32,
        height: 32,
        y: 77
    }, e);
    a = w.i.B("image", {
        width: w.lc.width,
        height: w.lc.height,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + b + ")"
    }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.Pd + w.lc.url);
    w.O(a, "mousedown", null, function(a) {
        Nf(c);
        Eg(c, -1);
        w.Touch.Me();
        a.stopPropagation();
        a.preventDefault()
    })
}

function Cg(a, b) {
    var c = a.m,
        e = w.i.B("clipPath", {
            id: "blocklyZoominClipPath" + b
        }, a.w);
    w.i.B("rect", {
        width: 32,
        height: 32,
        y: 43
    }, e);
    a = w.i.B("image", {
        width: w.lc.width,
        height: w.lc.height,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + b + ")"
    }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.Pd + w.lc.url);
    w.O(a, "mousedown", null, function(a) {
        Nf(c);
        Eg(c, 1);
        w.Touch.Me();
        a.stopPropagation();
        a.preventDefault()
    })
}

function Dg(a, b) {
    var c = a.m,
        e = w.i.B("clipPath", {
            id: "blocklyZoomresetClipPath" + b
        }, a.w);
    w.i.B("rect", {
        width: 32,
        height: 32
    }, e);
    a = w.i.B("image", {
        width: w.lc.width,
        height: w.lc.height,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + b + ")"
    }, a.w);
    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.options.Pd + w.lc.url);
    w.O(a, "mousedown", null, function(a) {
        Nf(c);
        c.setScale(c.options.Zb.et);
        if (c.hb) {
            var b = c.qb(),
                e = (b.Ic - b.xa) / 2;
            c.I && (e -= c.I.ia / 2);
            c.hb.set(e, (b.mc - b.bb) / 2)
        } else console.warn("Tried to scroll a non-scrollable workspace.");
        w.Touch.Me();
        a.stopPropagation();
        a.preventDefault()
    })
};
// Copyright 2014 Google Inc.  Apache License 2.0
function Fg(a, b, c) {
    Fg.s.constructor.call(this, a);
    this.qb = a.qb || Gg;
    this.ig = a.ig || Hg;
    var e = [];
    e[w.kb] = new Te;
    e[w.Hh] = new Te;
    e[w.Sa] = new Te;
    e[w.uf] = new Te;
    this.ln = e;
    b && (this.xb = b);
    c && (this.vh = c);
    this.Dm = this.vh && w.i.Pf();
    this.zj = [];
    this.Zd = new sg(a.Kb);
    this.xd = this.options.Br ? new Uf(a.Br, a.Ar) : null;
    w.G && w.G.Cf && (this.yi[w.Wp] = w.G.Cf);
    w.qd && w.qd.Cf && (this.yi[w.Cu] = w.qd.Cf);
    w.ra && w.ra.Cf && (this.yi[w.Tp] = w.ra.Cf)
}
v(Fg, Zc);
d = Fg.prototype;
d.nm = null;
d.R = !0;
d.Nd = !1;
d.Hj = !1;
d.Xo = !0;
d.scrollX = 0;
d.scrollY = 0;
d.Ix = 0;
d.Kx = 0;
d.kr = null;
d.scale = 1;
d.Qc = null;
d.hb = null;
d.Db = null;
d.xb = null;
d.vh = null;
d.Dm = !1;
d.Ml = !1;
d.co = null;
d.Wr = null;
d.Gg = {};
d.yi = {};
d.Bq = null;
d.ph = null;
d.Or = null;
d.Ej = !0;

function hg(a) {
    if (a.Ej) {
        var b = K(a).getScreenCTM();
        b && (a.Or = b.inverse(), a.Ej = !1)
    }
    return a.Or
}

function Ye(a, b) {
    var c = 0,
        e = 0,
        f = 1;
    if (ee(a.Oa, b) || ee(a.Ud, b)) f = a.scale;
    do {
        var h = w.i.tc(b);
        if (b == a.Oa || b == a.Ud) f = 1;
        c += h.x * f;
        e += h.y * f;
        b = b.parentNode
    } while (b && b != K(a));
    return new C(c, e)
}
d.X = function(a) {
    this.w = w.i.B("g", {
        "class": "blocklyWorkspace"
    }, null);
    a && (this.gd = w.i.B("rect", {
        height: "100%",
        width: "100%",
        "class": a
    }, this.w), "blocklyMainBackground" == a && this.xd && (this.gd.style.fill = "url(#" + this.xd.Zh.id + ")"));
    this.Oa = w.i.B("g", {
        "class": "blocklyBlockCanvas"
    }, this.w);
    this.Ud = w.i.B("g", {
        "class": "blocklyBubbleCanvas"
    }, this.w);
    a = G;
    if (this.options.sw) {
        this.Qc = new pg(this);
        var b = this.Qc.X();
        this.w.insertBefore(b, this.Oa);
        a = this.Qc.K(a)
    }
    this.options.Zb && this.options.Zb.controls && (this.wh =
        new Ag(this), b = this.wh.X(), this.w.appendChild(b), this.wh.K(a));
    this.Nd || (w.O(this.w, "mousedown", this, this.Ze, !1, !0), this.options.Zb && this.options.Zb.Zx && w.O(this.w, "wheel", this, this.qx));
    this.options.Er && (this.ca = new Ig(this));
    this.xd && this.xd.update(this.scale);
    Jg(this);
    return this.w
};
d.A = function() {
    this.R = !1;
    this.Db && this.Db.cancel();
    Fg.s.A.call(this);
    this.w && (F(this.w), this.w = null);
    this.Ud = this.Oa = null;
    this.ca && (this.ca.A(), this.ca = null);
    this.I && (this.I.A(), this.I = null);
    this.Qc && (this.Qc.A(), this.Qc = null);
    this.hb && (this.hb.A(), this.hb = null);
    this.wh && (this.wh.A(), this.wh = null);
    this.Zd && (this.Zd.A(), this.Zd = null);
    this.xd && (this.xd.A(), this.xd = null);
    this.yi && (this.yi = null);
    this.Gg && (this.Gg = null);
    this.options.Kb || F(K(this).parentNode);
    this.nm && (w.Ma(this.nm), this.nm = null)
};
d.Xe = function(a, b) {
    return new Kg(this, a, b)
};

function Lg(a, b) {
    var c = {
        ej: a.options.ej,
        Kb: a,
        u: a.u,
        $e: a.options.$e,
        qe: a.qe,
        Ca: a.options.Ca
    };
    a.I = null;
    a.I = a.qe ? new Mg(c) : new Ng(c);
    a.I.Lh = !1;
    return a.I.X(b)
}

function yf(a) {
    a.Xo && a.R && (a.hb && a.hb.resize(), a.Ej = !0)
}
d.resize = function() {
    this.ca && this.ca.position();
    this.I && this.I.position();
    this.Qc && this.Qc.position();
    this.wh && this.wh.position();
    this.hb && this.hb.resize();
    this.Ej = !0;
    Jg(this)
};

function Lf(a) {
    var b = Yd(document);
    qc(a.Wr, b) || (a.Wr = b, a.Ej = !0, Jg(a))
}

function K(a) {
    if (a.jq) return a.jq;
    for (var b = a.w; b;) {
        if ("svg" == b.tagName) return a.jq = b;
        b = b.parentNode
    }
    return null
}
d.translate = function(a, b) {
    if (this.Dm && this.Ml) this.vh.lf(a, b);
    else {
        var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
        this.Oa.setAttribute("transform", c);
        this.Ud.setAttribute("transform", c)
    }
    if (this.xb) {
        c = this.xb;
        var e = this.scale;
        c.dg = e;
        c.fe.setAttribute("transform", "translate(" + a.toFixed(0) + "," + b.toFixed(0) + ") scale(" + e + ")")
    }
};

function Of(a) {
    if (a.Dm) {
        a.Ml = !1;
        var b = a.vh.Bl();
        a.vh.Ui(a.w);
        b = "translate(" + b.x + "," + b.y + ") scale(" + a.scale + ")";
        a.Oa.setAttribute("transform", b);
        a.Ud.setAttribute("transform", b)
    }
}

function Ff(a) {
    if (a.Dm && !a.Ml) {
        a.Ml = !0;
        var b = a.Oa.previousSibling,
            c = parseInt(K(a).getAttribute("width"), 10),
            e = parseInt(K(a).getAttribute("height"), 10),
            f = w.i.tc(a.Oa),
            h = a.vh,
            k = a.Oa,
            l = a.Ud,
            m = a.scale;
        h.Qd = b;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.wa.setAttribute("width", c);
        h.wa.setAttribute("height", e);
        h.wa.appendChild(k);
        h.wa.appendChild(l);
        h.wa.style.display = "block";
        a.vh.lf(f.x, f.y)
    }
}
d.cd = function() {
    var a = this.qb();
    return a ? a.xa / this.scale : 0
};
d.oa = function(a) {
    this.hb && this.hb.dh(a);
    (this.I || this.ca && this.ca.I) && (this.I ? this.I : this.ca ? this.ca.I : null).dh(a);
    K(this).style.display = a ? "block" : "none";
    this.ca && (this.ca.Fc.style.display = a ? "block" : "none");
    a ? (this.$(), this.ca && this.ca.position()) : w.Pb(!0)
};
d.$ = function() {
    for (var a = Oc(this), b = a.length - 1; 0 <= b; b--) a[b].$(!1)
};

function Og(a, b) {
    var c = Pg;
    if (void 0 === b) {
        for (var e = 0, f; f = c.zj[e]; e++) f.Xb(!1);
        c.zj.length = 0
    }
    if (f = a ? Ic(c, a) : null)(a = void 0 === b || b) ? -1 == c.zj.indexOf(f) && c.zj.push(f) : ya(c.zj, f), f.Xb(a)
}

function Qg(a) {
    var b = w.Vi;
    if (a.R && !(b.getElementsByTagName("block").length >= dd(a)))
        if (a.Db && a.Db.cancel(), "comment" == b.tagName.toLowerCase()) {
            w.j.disable();
            try {
                var c = Af(b, a),
                    e = parseInt(b.getAttribute("x"), 10),
                    f = parseInt(b.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.u && (e = -e), c.moveBy(e + 50, f + 50))
            } finally {
                w.j.enable()
            }
            c.select()
        } else {
            w.j.disable();
            try {
                var h = w.D.Qh(b, a),
                    k = parseInt(b.getAttribute("x"), 10),
                    l = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(k) && !isNaN(l)) {
                    a.u && (k = -k);
                    do {
                        b = !1;
                        var m = Oc(a);
                        c = 0;
                        for (var n; n = m[c]; c++) {
                            var q = n.la();
                            if (1 >= Math.abs(k - q.x) && 1 >= Math.abs(l - q.y)) {
                                b = !0;
                                break
                            }
                        }
                        if (!b) {
                            var t = h.le(!1);
                            c = 0;
                            for (var z; z = t[c]; c++)
                                if (z.closest(w.Uc, new C(k, l)).connection) {
                                    b = !0;
                                    break
                                }
                        }
                        b && (k = a.u ? k - w.Uc : k + w.Uc, l += 2 * w.Uc)
                    } while (b);
                    h.moveBy(k, l)
                }
            } finally {
                w.j.enable()
            }
            w.j.isEnabled() && !h.gb && w.j.V(new w.j.Ak(h));
            h.select()
        }
}

function Rg(a) {
    if ((a = a.Nd ? a.ph : a) && !a.Db && a.ca && a.ca.I) {
        a = a.ca;
        var b = a.Ed.oe();
        b && b.$d && a.I.show(b.$d)
    }
}
d.ah = function(a, b) {
    Fg.s.ah.call(this, a, b);
    Rg(this)
};
d.Bf = function(a) {
    Fg.s.Bf.call(this, a);
    Rg(this)
};
d.Yc = function(a, b, c) {
    a = Fg.s.Yc.call(this, a, b, c);
    Rg(this);
    return a
};

function Jg(a) {
    a.Xq = a.Qc && a.w.parentNode ? a.Qc.Uh() : null;
    a.Wq = a.I ? a.I.Uh() : a.ca ? a.ca.Uh() : null
}

function pf(a, b) {
    b = new C(b.clientX, b.clientY);
    return a.Xq && a.Xq.contains(b) ? w.Hm : a.Wq && a.Wq.contains(b) ? w.Mp : w.Lp
}
d.Ze = function(a) {
    var b = this.me(a);
    b && (b.ib || (b.ib = this), b.Nc = a, b.fj(a))
};
d.ym = function(a, b) {
    a = w.i.Qj(a, K(this), hg(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.kr = sc(b, a)
};

function ye(a, b) {
    b = w.i.Qj(b, K(a), hg(a));
    b.x /= a.scale;
    b.y /= a.scale;
    return tc(a.kr, b)
}
d.pb = function() {
    return null != this.Db && this.Db.pb()
};
d.qx = function(a) {
    this.Db && this.Db.cancel();
    var b = -a.deltaY / 50,
        c = w.i.Qj(a, K(this), hg(this));
    this.zoom(c.x, c.y, b);
    a.preventDefault()
};

function yg(a) {
    var b = ad(a, !1);
    a = bd(a, !1);
    b = b.concat(a);
    if (!b.length) return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    a = b[0].Kn();
    for (var c = 1; c < b.length; c++) {
        var e = b[c].Kn();
        e.jd.x < a.jd.x && (a.jd.x = e.jd.x);
        e.Fd.x > a.Fd.x && (a.Fd.x = e.Fd.x);
        e.jd.y < a.jd.y && (a.jd.y = e.jd.y);
        e.Fd.y > a.Fd.y && (a.Fd.y = e.Fd.y)
    }
    return {
        x: a.jd.x,
        y: a.jd.y,
        width: a.Fd.x - a.jd.x,
        height: a.Fd.y - a.jd.y
    }
}
d.dv = function() {
    this.Rb(!1);
    w.j.S(!0);
    for (var a = ad(this, !0), b = 0, c = 0, e; e = a[c]; c++) {
        var f = e.la();
        e.moveBy(-f.x, b - f.y);
        Sg(e);
        b = e.la().y + e.Gb().height + 25
    }
    w.j.S(!1);
    this.Rb(!0)
};
d.xi = function(a) {
    function b(a) {
        if (a.fc()) z = z.concat(vc(a, !1));
        else {
            a = a.Ef(!1);
            for (var c = 0; c < a.length; c++) b(a[c])
        }
    }

    function c() {
        w.j.S(h);
        var a = z.shift();
        a && (a.o ? (a.A(!1, !0), setTimeout(c, 10)) : c());
        w.j.S(!1)
    }
    if (!this.options.readOnly && !this.Nd) {
        var e = [],
            f = ad(this, !0),
            h = w.i.ke(),
            k = this,
            l = {};
        l.text = w.g.UNDO;
        l.enabled = 0 < this.qh.length;
        l.eb = this.Dp.bind(this, !1);
        e.push(l);
        l = {};
        l.text = w.g.REDO;
        l.enabled = 0 < this.Wj.length;
        l.eb = this.Dp.bind(this, !0);
        e.push(l);
        this.hb && (l = {}, l.text = w.g.CLEAN_UP, l.enabled = 1 < f.length,
            l.eb = this.dv.bind(this), e.push(l));
        if (this.options.collapse) {
            for (var m = l = !1, n = 0; n < f.length; n++)
                for (var q = f[n]; q;) q.isCollapsed() ? l = !0 : m = !0, q = Jc(q);
            var t = function(a) {
                for (var b = 0, c = 0; c < f.length; c++)
                    for (var e = f[c]; e;) setTimeout(e.fg.bind(e, a), b), e = Jc(e), b += 10
            };
            m = {
                enabled: m
            };
            m.text = w.g.COLLAPSE_ALL;
            m.eb = function() {
                t(!0)
            };
            e.push(m);
            l = {
                enabled: l
            };
            l.text = w.g.EXPAND_ALL;
            l.eb = function() {
                t(!1)
            };
            e.push(l)
        }
        var z = [];
        for (n = 0; n < f.length; n++) b(f[n]);
        l = {
            text: 1 == z.length ? w.g.DELETE_BLOCK : w.g.DELETE_X_BLOCKS.replace("%1",
                String(z.length)),
            enabled: 0 < z.length,
            eb: function() {
                k.Db && k.Db.cancel();
                2 > z.length ? c() : w.confirm(w.g.DELETE_ALL_BLOCKS.replace("%1", z.length), function(a) {
                    a && c()
                })
            }
        };
        e.push(l);
        this.Bq && this.Bq(e);
        w.ba.show(a, e, this.u)
    }
};
d.ot = function(a) {
    if (a = Xf(a)) {
        if (!this.options.te) throw "Existing toolbox is null.  Can't create new toolbox.";
        if (a.getElementsByTagName("category").length) {
            if (!this.ca) throw "Existing toolbox has no categories.  Can't change mode.";
            this.options.te = a;
            this.ca.hm(a);
            Tg(this.ca)
        } else {
            if (!this.I) throw "Existing toolbox has categories.  Can't change mode.";
            this.options.te = a;
            this.I.show(a.childNodes)
        }
    } else if (this.options.te) throw "Can't nullify an existing toolbox.";
};

function Nf(a) {
    if (a.options.Kb) Nf(a.options.Kb);
    else {
        w.Wf = a;
        document.activeElement && document.activeElement.blur();
        try {
            K(a).focus()
        } catch (b) {
            try {
                K(a).parentNode.setActive()
            } catch (c) {
                K(a).parentNode.focus()
            }
        }
    }
}
d.zoom = function(a, b, c) {
    var e = this.options.Zb.Bx,
        f = this.qb(),
        h = K(this).createSVGPoint();
    h.x = a;
    h.y = b;
    h = h.matrixTransform(this.Oa.getCTM().inverse());
    a = h.x;
    b = h.y;
    h = this.Oa;
    e = Math.pow(e, c);
    c = this.scale * e;
    c > this.options.Zb.Oj ? e = this.options.Zb.Oj / this.scale : c < this.options.Zb.Pj && (e = this.options.Zb.Pj / this.scale);
    this.scale != c && (this.hb && (a = h.getCTM().translate(a * (1 - e), b * (1 - e)).scale(e), this.scrollX = a.e - f.lb, this.scrollY = a.f - f.wb), this.setScale(c))
};

function Eg(a, b) {
    var c = a.qb();
    a.zoom(c.xa / 2, c.bb / 2, b)
}
d.setScale = function(a) {
    this.options.Zb.Oj && a > this.options.Zb.Oj ? a = this.options.Zb.Oj : this.options.Zb.Pj && a < this.options.Zb.Pj && (a = this.options.Zb.Pj);
    this.scale = a;
    this.xd && this.xd.update(this.scale);
    this.hb ? this.hb.resize() : this.translate(this.scrollX, this.scrollY);
    w.Pb(!1);
    this.I && this.I.So()
};

function Ug(a) {
    var b = 0,
        c = 0;
    a && (b = a.cd(), c = a.Xh());
    return {
        width: b,
        height: c
    }
}

function Vg(a) {
    var b = yg(a),
        c = a.scale;
    a = b.width * c;
    var e = b.height * c,
        f = b.x * c;
    b = b.y * c;
    return {
        left: f,
        top: b,
        right: f + a,
        bottom: b + e,
        width: a,
        height: e
    }
}

function Gg() {
    var a = Ug(this.ca),
        b = Ug(this.I),
        c = w.jt(K(this));
    if (this.ca)
        if (this.Ca == w.wf || this.Ca == w.wg) c.height -= a.height;
        else if (this.Ca == w.vf || this.Ca == w.Wd) c.width -= a.width;
    if (this.hb) {
        var e = Vg(this);
        var f = c.width,
            h = c.height,
            k = f / 2,
            l = h / 2,
            m = Math.min(e.left - k, e.right - f),
            n = Math.min(e.top - l, e.bottom - h);
        e = {
            left: m,
            top: n,
            height: Math.max(e.bottom + l, e.top + h) - n,
            width: Math.max(e.right + k, e.left + f) - m
        }
    } else e = Vg(this);
    f = 0;
    this.ca && this.Ca == w.vf && (f = a.width);
    h = 0;
    this.ca && this.Ca == w.wf && (h = a.height);
    return {
        mc: e.height,
        Ic: e.width,
        nc: e.top,
        Hc: e.left,
        bb: c.height,
        xa: c.width,
        De: -this.scrollY,
        Ab: -this.scrollX,
        wb: h,
        lb: f,
        UB: a.width,
        TB: a.height,
        jl: b.width,
        rr: b.height,
        Ca: this.Ca
    }
}

function Hg(a) {
    if (!this.hb) throw "Attempt to set top level workspace scroll without scrollbars.";
    var b = this.qb();
    ba(a.x) && (this.scrollX = -b.Ic * a.x - b.Hc);
    ba(a.y) && (this.scrollY = -b.mc * a.y - b.nc);
    a = this.scrollX + b.lb;
    b = this.scrollY + b.wb;
    this.translate(a, b);
    this.xd && this.xd.moveTo(a, b)
}
d.Rb = function(a) {
    var b = !this.Xo && a;
    this.Xo = a;
    b && yf(this)
};
d.clear = function() {
    this.Rb(!1);
    Fg.s.clear.call(this);
    this.Rb(!0)
};

function rg(a, b) {
    a.Gg.CREATE_VARIABLE = b
}

function Wg(a, b) {
    return (a = a.Gg[b]) ? a : null
}

function Xg(a, b) {
    return (a = a.yi[b]) ? a : null
}
d.me = function(a) {
    var b = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        c = this.Db;
    return c ? b && c.Ir ? (console.warn("tried to start the same gesture twice"), c.cancel(), null) : c : b ? this.Db = new ig(a, this) : null
};
Fg.prototype.setVisible = Fg.prototype.oa;

function Yg(a) {
    Yg.s.constructor.call(this, null);
    this.Ms = a
}
v(Yg, De);
d = Yg.prototype;
d.Di = 0;
d.wk = 0;
d.Cn = function(a) {
    w.i.B("rect", {
        "class": "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16"
    }, a);
    w.i.B("path", {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    w.i.B("circle", {
        "class": "blocklyIconShape",
        r: "2.7",
        cx: "8",
        cy: "8"
    }, a)
};
d.$n = function(a) {
    He(this.U) && De.prototype.$n.call(this, a)
};
d.$i = function() {
    this.jk = w.i.B("svg", {
        x: qe,
        y: qe
    }, null);
    if (this.Ms.length)
        for (var a = E("xml"), b = 0, c; c = this.Ms[b]; b++) a.appendChild(E("block", {
            type: c
        }));
    else a = null;
    a = {
        te: a,
        Kb: this.U.o,
        Pd: this.U.o.options.Pd,
        u: this.U.u,
        Ca: this.U.u ? w.Wd : w.vf,
        qe: !1,
        qb: this.Yv.bind(this),
        ig: null
    };
    this.m = new Fg(a);
    this.m.Hj = !0;
    a = Lg(this.m, "g");
    b = this.m.X("blocklyMutatorBackground");
    b.insertBefore(a, this.m.Oa);
    this.jk.appendChild(b);
    return this.jk
};
d.qf = function() {
    this.U.rb || (He(this.U) ? this.vc && w.i.Qb(this.vc, "blocklyIconGroupReadonly") : (this.oa(!1), this.vc && w.i.mb(this.vc, "blocklyIconGroupReadonly")));
    De.prototype.qf.call(this)
};
d.lm = function() {
    var a = 2 * qe,
        b = this.m.Oa.getBBox();
    var c = this.U.u ? -b.x : b.width + b.x;
    b = b.height + 3 * a;
    if (this.m.I) {
        var e = this.m.I.Se();
        b = Math.max(b, e.mc + 20)
    }
    c += 3 * a;
    if (Math.abs(this.Di - c) > a || Math.abs(this.wk - b) > a) this.Di = c, this.wk = b, this.Xa.eg(c + a, b + a), this.jk.setAttribute("width", this.Di), this.jk.setAttribute("height", this.wk);
    this.U.u && this.m.Oa.setAttribute("transform", "translate(" + this.Di + ",0)");
    this.m.resize()
};
d.oa = function(a) {
    if (a != this.Y())
        if (w.j.V(new Dc(this.U, "mutatorOpen", !a, a)), a) {
            this.Xa = new ne(this.U.o, this.$i(), this.U.Dd, this.Mg, null, null);
            we(this.Xa, this.U.id);
            if (a = this.m.options.te) this.m.I.K(this.m), this.m.I.show(a.childNodes);
            this.cf = this.U.Pe(this.m);
            a = vc(this.cf, !1);
            for (var b = 0, c; c = a[b]; b++) c.$();
            this.cf.eh(!1);
            this.cf.hp(!1);
            this.m.I ? (a = 2 * this.m.I.pa, b = this.m.I.ia + a) : b = a = 16;
            this.U.u && (b = -b);
            this.cf.moveBy(b, a);
            if (this.U.om) {
                var e = this;
                this.U.om(this.cf);
                this.vm = function() {
                    e.U.om(e.cf)
                };
                this.U.o.Vc(this.vm)
            }
            this.lm();
            this.m.Vc(this.$x.bind(this));
            this.pf()
        } else this.jk = null, this.m.A(), this.cf = this.m = null, this.Xa.A(), this.Xa = null, this.wk = this.Di = 0, this.vm && (this.U.o.bf(this.vm), this.vm = null)
};
d.$x = function() {
    if (!this.m.pb())
        for (var a = ad(this.m, !1), b = 0, c; c = a[b]; b++) {
            var e = c.la(),
                f = c.Gb();
            20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y)
        }
    if (this.cf.o == this.m) {
        w.j.S(!0);
        c = this.U;
        a = (a = c.Ga()) && w.D.Zc(a);
        b = c.R;
        c.R = !1;
        c.Ne(this.cf);
        c.R = b;
        c.wc();
        b = (b = c.Ga()) && w.D.Zc(b);
        if (a != b) {
            w.j.V(new w.j.Ec(c, "mutation", null, a, b));
            var h = w.j.rc();
            setTimeout(function() {
                w.j.S(h);
                c.ob();
                w.j.S(!1)
            }, w.zk)
        }
        c.R && c.$();
        this.m.pb() || this.lm();
        w.j.S(!1)
    }
};
d.Yv = function() {
    return {
        bb: this.wk,
        xa: this.Di,
        wb: 0,
        lb: 0
    }
};
d.A = function() {
    this.U.dd = null;
    De.prototype.A.call(this)
};

function Zg(a, b, c) {
    if (!a || !a.v.o) return !1;
    c = J(b, c).connection;
    var e = I(a);
    return e && e != b || c.Pa == a ? !1 : (c.isConnected() && c.disconnect(), c.connect(a), !0)
}

function $g(a) {
    var b = null;
    if (a && a.options) {
        var c = a.options.Kb;
        a.Nd ? c && c.options && (b = c.options.Kb) : c && (b = c)
    }
    return b
}
g.Blockly || (g.Blockly = {});
g.Blockly.Mutator || (g.Blockly.Mutator = {});
g.Blockly.Mutator.reconnect = Zg;
w.L = {};
w.L.Fm = {};
w.L.register = function(a, b) {
    if (!p(a) || Fa(a)) throw Error('Error: Invalid extension name "' + a + '"');
    if (w.L.Fm[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if (!u(b)) throw Error('Error: Extension "' + a + '" must be a function');
    w.L.Fm[a] = b
};
w.L.jm = function(a, b) {
    if (!ia(b)) throw Error('Error: Mixin "' + a + '" must be a object');
    w.L.register(a, function() {
        ah(this, b)
    })
};
w.L.Xj = function(a, b, c, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    w.L.oq(f, b.Za, "domToMutation");
    w.L.oq(f, b.Ga, "mutationToDom");
    var h = w.L.qq(b, f);
    if (c && !u(c)) throw Error('Extension "' + a + '" is not a function');
    w.L.register(a, function() {
        h && this.ek(new Yg(e));
        ah(this, b);
        c && c.apply(this)
    })
};
w.L.apply = function(a, b, c) {
    var e = w.L.Fm[a];
    if (!u(e)) throw Error('Error: Extension "' + a + '" not found.');
    if (c) w.L.bv(a, b);
    else var f = w.L.Nn(b);
    e.apply(b);
    if (c) w.L.$u('Error after applying mutator "' + a + '": ', b);
    else if (!w.L.Qw(f, b)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
w.L.oq = function(a, b, c) {
    if (!b) throw Error(a + 'missing required property "' + c + '"');
    if ("function" != typeof b) throw Error(a + '" required property "' + c + '" must be a function');
};
w.L.bv = function(a, b) {
    if (w.L.Nn(b).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + b.id);
};
w.L.qq = function(a, b) {
    var c = void 0 !== a.Ne,
        e = void 0 !== a.Pe;
    if (c && e) {
        if ("function" != typeof a.Ne) throw Error(b + "compose must be a function.");
        if ("function" != typeof a.Pe) throw Error(b + "decompose must be a function.");
        return !0
    }
    if (c || e) throw Error(b + 'Must have both or neither of "compose" and "decompose"');
    return !1
};
w.L.$u = function(a, b) {
    if ("function" != typeof b.Za) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof b.Ga) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    w.L.qq(b, a)
};
w.L.Nn = function(a) {
    var b = [];
    void 0 !== a.Za && b.push(a.Za);
    void 0 !== a.Ga && b.push(a.Ga);
    void 0 !== a.Ne && b.push(a.Ne);
    void 0 !== a.Pe && b.push(a.Pe);
    return b
};
w.L.Qw = function(a, b) {
    b = w.L.Nn(b);
    if (b.length != a.length) return !1;
    for (var c = 0; c < b.length; c++)
        if (a[c] != b[c]) return !1;
    return !0
};
w.L.Lk = function(a, b) {
    var c = [];
    "object" == typeof document && w.i.Us(function() {
        for (var a in b) w.i.pq(b[a])
    });
    return function() {
        this.type && -1 === c.indexOf(this.type) && (w.L.av(this, a, b), c.push(this.type));
        this.za(function() {
            var e = D(this, a),
                f = b[e];
            null == f ? -1 === c.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = w.i.jc(f);
            return f
        }.bind(this))
    }
};
w.L.av = function(a, b, c) {
    var e = H(a, b);
    if (!u(e.Qg)) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var h = e[f][1];
            null == c[h] && console.warn("No tooltip mapping for value " + h + " of field " + b + " of block type " + a.type)
        }
    }
};
w.L.Mk = function(a) {
    "object" == typeof document && w.i.Us(function() {
        w.i.pq(a)
    });
    return function() {
        this.za(function() {
            var b = H(this, "VAR");
            return w.i.jc(a).replace("%1", b ? b.Hb() : "")
        }.bind(this))
    }
};
w.L.Ov = function() {
    this.Qx = this.hd;
    this.za(function() {
        var a = this.getParent();
        return a && bh(a) && a.hd || this.Qx
    }.bind(this))
};
w.L.register("parent_tooltip_when_inline", w.L.Ov);
var ch = {};

function dh(a, b) {
    var c = Td(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
}

function eh(a, b) {
    return dh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Tf() {
    var a = document,
        b = a.body;
    a = a.documentElement;
    return new C(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function fh(a) {
    try {
        var b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    x && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function gh(a) {
    var b = Td(a),
        c = new C(0, 0);
    var e = b ? Td(b) : document;
    e = !x || 9 <= Number(wb) || "CSS1Compat" == Rd(e).Hd.compatMode ? e.documentElement : e.body;
    if (a == e) return c;
    a = fh(a);
    b = Yd(Rd(b).Hd);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function hh(a) {
    "number" == typeof a && (a += "px");
    return a
}

function ih(a) {
    var b = jh;
    if ("none" != eh(a, "display")) return b(a);
    var c = a.style,
        e = c.display,
        f = c.visibility,
        h = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = e;
    c.position = h;
    c.visibility = f;
    return a
}

function jh(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        e = A && !b && !c;
    return aa(b) && !e || !a.getBoundingClientRect ? new Qd(b, c) : (a = fh(a), new Qd(a.right - a.left, a.bottom - a.top))
}

function kh(a, b) {
    a.style.display = b ? "" : "none"
}
var lh = kb ? "MozUserSelect" : A || jb ? "WebkitUserSelect" : null;

function mh(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (lh) {
        if (b = b ? "none" : "", a.style && (a.style[lh] = b), c) {
            a = 0;
            for (var e; e = c[a]; a++) e.style && (e.style[lh] = b)
        }
    } else if (x || ib)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; e = c[a]; a++) e.setAttribute("unselectable", b)
}
var nh = {
    thin: 2,
    medium: 4,
    thick: 6
};

function oh(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    if (c in nh) a = nh[c];
    else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
    else {
        b = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = e;
        a = +c
    }
    return a
};

function ph(a, b) {
    this.sa = new Qd(0, 25);
    this.setValue(a);
    this.rh = b
}
var qh = {};

function rh(a, b) {
    if (!p(a) || Fa(a)) throw Error('Invalid field type "' + a + '"');
    if (!ia(b) || !u(b.ha)) throw Error('Field "' + b + '" must have a fromJson function');
    qh[a] = b
}
var sh = null,
    th = 0;
d = ph.prototype;
d.name = void 0;
d.fs = 50;
d.va = "";
d.v = null;
d.Qa = !0;
d.rh = null;
d.tg = !0;
d.op = function(a) {
    this.v = a
};
d.K = function() {
    this.Wa || (this.Wa = w.i.B("g", {}, null), this.Qa || (this.Wa.style.display = "none"), this.sd = w.i.B("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.Wa), this.Aa = w.i.B("text", {
        "class": "blocklyText",
        y: this.sa.height - 12.5
    }, this.Wa), this.qf(), this.v.ga().appendChild(this.Wa), this.Zl = w.O(this.Wa, "mousedown", this, this.Ze), this.we())
};
d.Ng = function() {};
d.A = function() {
    this.Zl && (w.Ma(this.Zl), this.Zl = null);
    this.v = null;
    F(this.Wa);
    this.rh = this.sd = this.Aa = this.Wa = null
};
d.qf = function() {
    var a = this.Wa;
    this.tg && a && (He(this.v) ? (w.i.mb(a, "blocklyEditableText"), w.i.Qb(a, "blocklyNonEditableText"), this.Wa.style.cursor = this.Ck) : (w.i.mb(a, "blocklyNonEditableText"), w.i.Qb(a, "blocklyEditableText"), this.Wa.style.cursor = ""))
};
d.Y = function() {
    return this.Qa
};
d.oa = function(a) {
    if (this.Qa != a) {
        this.Qa = a;
        var b = this.ga();
        b && (b.style.display = a ? "block" : "none", this.we())
    }
};

function uh(a, b) {
    a.rh = b
}
d.hn = function(a) {
    return a
};

function Ae(a, b) {
    var c = a.hn(b);
    if (null === c) return null;
    void 0 !== c && (b = c);
    if (c = a.rh) {
        a = c.call(a, b);
        if (null === a) return null;
        void 0 !== a && (b = a)
    }
    return b
}
d.ga = function() {
    return this.Wa
};
d.we = function() {
    this.Qa ? (this.Aa.textContent = vh(this), this.vk()) : this.sa.width = 0
};
d.vk = function() {
    var a = wh(this.Aa);
    this.sd && this.sd.setAttribute("width", a + 10);
    this.sa.width = a
};

function wh(a) {
    var b = a.textContent + "\n" + a.className.baseVal,
        c;
    if (sh && (c = sh[b])) return c;
    try {
        c = x || jb ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    sh && (sh[b] = c);
    return c
}

function wg() {
    th++;
    sh || (sh = {})
}

function xg() {
    th--;
    th || (sh = null)
}
d.Ue = function() {
    this.sa.width || this.we();
    return this.sa
};

function xh(a) {
    var b = a.sd.getBBox(),
        c = b.height * a.v.o.scale;
    b = b.width * a.v.o.scale;
    a = gh(a.sd);
    return {
        top: a.y,
        bottom: a.y + c,
        left: a.x,
        right: a.x + b
    }
}

function vh(a) {
    var b = a.va;
    if (!b) return "\u00a0";
    b.length > a.fs && (b = b.substring(0, a.fs - 2) + "\u2026");
    b = b.replace(/\s/g, "\u00a0");
    a.v.u && (b += "\u200f");
    return b
}
d.Hb = function() {
    return this.va
};
d.Sb = function(a) {
    null !== a && (a = String(a), a !== this.va && (this.va = a, this.kj()))
};
d.kj = function() {
    this.sa.width = 0;
    this.v && this.v.R && (this.v.$(), this.v.ob())
};
d.getValue = function() {
    return this.Hb()
};
d.setValue = function(a) {
    if (null !== a) {
        var b = this.getValue();
        b != a && (this.v && w.j.isEnabled() && w.j.V(new w.j.Ec(this.v, "field", this.name, b, a)), this.Sb(a))
    }
};
d.Ze = function(a) {
    this.v && this.v.o && (a = this.v.o.me(a)) && !a.lh && (a.lh = this)
};
d.za = function() {};
d.Zg = function() {
    return !1
};

function yh(a, b) {
    this.sa = new Qd(0, 17.5);
    this.uq = b;
    this.setValue(a)
}
v(yh, ph);
yh.ha = function(a) {
    var b = w.i.jc(a.text);
    return new yh(b, a["class"])
};
d = yh.prototype;
d.tg = !1;
d.K = function() {
    this.Aa || (this.Aa = w.i.B("text", {
        "class": "blocklyText",
        y: this.sa.height - 5
    }, null), this.uq && w.i.mb(this.Aa, this.uq), this.Qa || (this.Aa.style.display = "none"), this.v.ga().appendChild(this.Aa), this.Aa.hd = this.v, w.C.yg(this.Aa), this.we())
};
d.A = function() {
    F(this.Aa);
    this.Aa = null
};
d.ga = function() {
    return this.Aa
};
d.za = function(a) {
    this.Aa.hd = a
};
rh("field_label", yh);

function zh(a, b, c, e) {
    if (a != w.Ee && !b) throw "Value inputs and statement inputs must have non-empty name.";
    this.type = a;
    this.name = b;
    this.v = c;
    this.connection = e;
    this.Ia = []
}
d = zh.prototype;
d.align = w.Ei;
d.Qa = !0;

function M(a, b, c) {
    Ah(a, a.Ia.length, b, c);
    return a
}

function Ah(a, b, c, e) {
    if (0 > b || b > a.Ia.length) throw Error("index " + b + " out of bounds.");
    if (!c && !e) return b;
    p(c) && (c = new yh(c));
    c.op(a.v);
    a.v.R && c.K();
    c.name = e;
    c.No && (b = Ah(a, b, c.No));
    a.Ia.splice(b, 0, c);
    ++b;
    c.zp && (b = Ah(a, b, c.zp));
    a.v.R && (a.v.$(), a.v.ob());
    return b
}
d.Y = function() {
    return this.Qa
};
d.oa = function(a) {
    var b = [];
    if (this.Qa == a) return b;
    for (var c = (this.Qa = a) ? "block" : "none", e = 0, f; f = this.Ia[e]; e++) f.oa(a);
    if (this.connection) {
        if (a) b = gf(this.connection);
        else if (e = this.connection, hf(e, !0), e.Pa)
            for (e = vc(I(e), !1), f = 0; f < e.length; f++) {
                for (var h = e[f], k = h.le(!0), l = 0; l < k.length; l++) hf(k[l], !0);
                h = nf(h);
                for (l = 0; l < h.length; l++) h[l].oa(!1)
            }
        if (e = I(this.connection)) e.ga().style.display = c, a || (e.R = !1)
    }
    return b
};
d.tb = function(a) {
    if (!this.connection) throw "This input does not have a connection.";
    this.connection.tb(a);
    return this
};

function Bh(a, b) {
    a.align = b;
    a.v.R && a.v.$();
    return a
}
d.K = function() {
    if (this.v.o.R)
        for (var a = 0; a < this.Ia.length; a++) this.Ia[a].K()
};
d.A = function() {
    for (var a = 0, b; b = this.Ia[a]; a++) b.A();
    this.connection && this.connection.A();
    this.v = null
};

function Ie(a) {
    Ie.s.constructor.call(this, a);
    Ee(this);
    this.va = {}
}
v(Ie, De);
d = Ie.prototype;
d.yq = !1;
d.Cn = function(a) {
    w.i.B("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    w.i.B("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    w.i.B("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
d.oa = function(a) {
    if (a != this.Y())
        if (w.j.V(new Dc(this.U, "warningOpen", !a, a)), a) {
            var b = this.Hb();
            a = w.i.B("text", {
                "class": "blocklyText blocklyBubbleText",
                y: qe
            }, null);
            b = b.split("\n");
            for (var c = 0; c < b.length; c++) w.i.B("tspan", {
                dy: "1em",
                x: qe
            }, a).appendChild(document.createTextNode(b[c]));
            this.Xa = new ne(this.U.o, a, this.U.Dd, this.Mg, null, null);
            we(this.Xa, this.U.id);
            if (this.U.u) {
                b = a.getBBox().width;
                c = 0;
                for (var e; e = a.childNodes[c]; c++) e.setAttribute("text-anchor", "end"), e.setAttribute("x", b + qe)
            }
            this.pf();
            a =
                this.Xa.Ig();
            this.Xa.eg(a.width, a.height)
        } else this.Xa.A(), this.Xa = null
};
d.Sb = function(a, b) {
    this.va[b] != a && (a ? this.va[b] = a : delete this.va[b], this.Y() && (this.oa(!1), this.oa(!0)))
};
d.Hb = function() {
    var a = [],
        b;
    for (b in this.va) a.push(this.va[b]);
    return a.join("\n")
};
d.A = function() {
    this.U.md = null;
    De.prototype.A.call(this)
};

function cd(a, b, c) {
    "undefined" !== typeof Ch.prototype[b] && console.warn('FUTURE ERROR: Block prototypeName "' + b + '" conflicts with Blockly.Generator members. Registering Generators for this block type will incur errors.\nThis name will be DISALLOWED (throwing an error) in future versions of Blockly.');
    this.id = c && !Ic(a, c) ? c : w.i.ke();
    a.an[this.id] = this;
    this.Z = this.M = this.P = null;
    this.W = [];
    this.Of = void 0;
    this.disabled = !1;
    this.hd = "";
    this.contextMenu = !0;
    this.Yf = null;
    this.Ke = [];
    this.mr = this.Rj = this.dj = !0;
    this.ae =
        this.gb = !1;
    this.Ua = null;
    this.nd = new C(0, 0);
    this.o = a;
    this.rb = a.Nd;
    this.u = a.u;
    if (b) {
        this.type = b;
        b = w.H[b];
        for (var e in b) this[e] = b[e]
    }
    a.zi.push(this);
    u(this.K) && this.K();
    this.zw = this.Of;
    if (w.j.isEnabled()) {
        (a = w.j.rc()) || w.j.S(!0);
        try {
            w.j.V(new w.j.Ak(this))
        } finally {
            a || w.j.S(!1)
        }
    }
    if (u(this.onchange)) {
        if ((a = this.onchange) && !u(a)) throw Error("onchange must be a function.");
        this.Sj && this.o.bf(this.Sj);
        if (this.onchange = a) this.Sj = a.bind(this), this.o.Vc(this.Sj)
    }
}
d = cd.prototype;
d.data = null;
d.ce = "#000000";
d.A = function(a) {
    if (this.o) {
        this.Sj && this.o.bf(this.Sj);
        Ce(this, a);
        w.j.isEnabled() && w.j.V(new w.j.zt(this));
        w.j.disable();
        try {
            this.o && ($c(this.o, this), delete this.o.an[this.id], this.o = null);
            w.selected == this && (w.selected = null);
            for (var b = this.Ke.length - 1; 0 <= b; b--) this.Ke[b].A(!1);
            b = 0;
            for (var c; c = this.W[b]; b++) c.A();
            this.W.length = 0;
            var e = this.le(!0);
            for (b = 0; b < e.length; b++) {
                var f = e[b];
                f.isConnected() && f.disconnect();
                e[b].A()
            }
        } finally {
            w.j.enable()
        }
    }
};
d.Ng = function() {
    for (var a = 0, b; b = this.W[a]; a++)
        for (var c = 0, e; e = b.Ia[c]; c++) e.Ng && e.Ng()
};

function Ce(a, b) {
    if (a.P) a.P.isConnected() && a.P.disconnect();
    else if (a.Z) {
        var c = null;
        a.Z.isConnected() && (c = a.Z.Pa, a.Z.disconnect());
        var e = Jc(a);
        b && e && (a = a.M.Pa, a.disconnect(), c && Le(c, a) && c.connect(a))
    }
}
d.le = function() {
    var a = [];
    this.P && a.push(this.P);
    this.Z && a.push(this.Z);
    this.M && a.push(this.M);
    for (var b = 0, c; c = this.W[b]; b++) c.connection && a.push(c.connection);
    return a
};
d.ob = function() {
    console.warn("Not expected to reach this bumpNeighbours_ function. The BlockSvg function for bumpNeighbours_ was expected to be called instead.")
};
d.getParent = function() {
    return this.Yf
};

function Dh(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (Jc(a) == b);
    return a
}

function Jc(a) {
    return a.M && I(a.M)
}

function af(a) {
    var b = a;
    do a = b, b = a.Yf; while (b);
    return a
}
d.Ef = function(a) {
    if (!a) return this.Ke;
    a = [];
    for (var b = 0, c; c = this.W[b]; b++) c.connection && (c = I(c.connection)) && a.push(c);
    (b = Jc(this)) && a.push(b);
    return a
};
d.fh = function(a) {
    if (a != this.Yf) {
        if (this.Yf) {
            ya(this.Yf.Ke, this);
            if (this.Z && this.Z.isConnected()) throw "Still connected to previous block.";
            if (this.P && this.P.isConnected()) throw "Still connected to parent block.";
            this.Yf = null
        } else $c(this.o, this);
        (this.Yf = a) ? a.Ke.push(this): this.o.zi.push(this)
    }
};

function vc(a, b) {
    var c = [a];
    a = a.Ef(b);
    for (var e, f = 0; e = a[f]; f++) c.push.apply(c, vc(e, b));
    return c
}
d.fc = function() {
    return this.dj && !this.gb && !(this.o && this.o.options.readOnly)
};
d.hp = function(a) {
    this.dj = a
};
d.se = function() {
    return this.Rj && !this.gb && !(this.o && this.o.options.readOnly)
};
d.eh = function(a) {
    this.Rj = a
};
d.np = function(a) {
    this.gb = a
};

function He(a) {
    return a.mr && !(a.o && a.o.options.readOnly)
}
d.ip = function(a) {
    this.mr = a;
    a = 0;
    for (var b; b = this.W[a]; a++)
        for (var c = 0, e; e = b.Ia[c]; c++) e.qf()
};

function zg(a, b) {
    if (!b && a.isCollapsed()) {
        if (a.P && hf(a.P, b), a.Z && hf(a.Z, b), a.M) {
            hf(a.M, b);
            var c = I(a.M);
            c && zg(c, b)
        }
    } else {
        a = a.le(!0);
        for (var e = 0; c = a[e]; e++) hf(c, b), Pe(c) && (c = I(c)) && zg(c, b)
    }
}
d.za = function(a) {
    this.hd = a
};
d.Na = function(a) {
    var b = p(a) ? w.i.jc(a) : a,
        c = Number(b);
    if (!isNaN(c) && 0 <= c && 360 >= c) this.ce = w.Lr(c);
    else if (p(b) && /^#[0-9a-fA-F]{6}$/.test(b)) this.ce = b;
    else throw c = 'Invalid colour: "' + b + '"', a != b && (c += ' (from "' + a + '")'), c;
};

function H(a, b) {
    for (var c = 0, e; e = a.W[c]; c++)
        for (var f = 0, h; h = e.Ia[f]; f++)
            if (h.name === b) return h;
    return null
}
d.Rn = function() {
    for (var a = [], b = 0, c; c = this.W[b]; b++)
        for (var e = 0, f; f = c.Ia[e]; e++) f.Zg() && a.push(f.getValue());
    return a
};
d.Ff = function() {
    for (var a = [], b = 0, c; c = this.W[b]; b++)
        for (var e = 0, f; f = c.Ia[e]; e++) f.Zg() && (f = this.o.Kd(f.getValue())) && a.push(f);
    return a
};
d.Cm = function(a) {
    for (var b = 0, c; c = this.W[b]; b++)
        for (var e = 0, f; f = c.Ia[e]; e++) f.Zg() && a.aa() == f.getValue() && f.Sb(a.name)
};
d.$j = function(a, b) {
    for (var c = 0, e; e = this.W[c]; c++)
        for (var f = 0, h; h = e.Ia[f]; f++) h.Zg() && a == h.getValue() && h.setValue(b)
};

function D(a, b) {
    return (a = H(a, b)) ? a.getValue() : null
}
d.Ac = function(a, b) {
    a ? (void 0 === b && (b = null), this.Z || (this.Z = this.Mj(w.uf)), this.Z.tb(b)) : this.Z && (this.Z.A(), this.Z = null)
};
d.zc = function(a, b) {
    a ? (void 0 === b && (b = null), this.M || (this.M = this.Mj(w.Sa)), this.M.tb(b)) : this.M && (this.M.A(), this.M = null)
};
d.ef = function(a, b) {
    a ? (void 0 === b && (b = null), this.P || (this.P = this.Mj(w.Hh)), this.P.tb(b)) : this.P && (this.P.A(), this.P = null)
};
d.hg = function(a) {
    this.Of != a && (w.j.V(new w.j.Ec(this, "inline", null, this.Of, a)), this.Of = a)
};

function bh(a) {
    if (void 0 != a.Of) return a.Of;
    for (var b = 1; b < a.W.length; b++)
        if (a.W[b - 1].type == w.Ee && a.W[b].type == w.Ee) return !1;
    for (b = 1; b < a.W.length; b++)
        if (a.W[b - 1].type == w.kb && a.W[b].type == w.Ee) return !0;
    return !1
}
d.Cd = function(a) {
    this.disabled != a && (w.j.V(new w.j.Ec(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function Eh(a) {
    for (a = Dh(a); a;) {
        if (a.disabled) return !0;
        a = Dh(a)
    }
    return !1
}
d.isCollapsed = function() {
    return this.ae
};
d.fg = function(a) {
    this.ae != a && (w.j.V(new w.j.Ec(this, "collapsed", null, this.ae, a)), this.ae = a)
};
d.toString = function(a, b) {
    var c = [],
        e = b || "?";
    if (this.ae) c.push(J(this, "_TEMP_COLLAPSED_INPUT").Ia[0].va);
    else
        for (var f = 0, h; h = this.W[f]; f++) {
            for (var k = 0, l; l = h.Ia[k]; k++) l instanceof N && !l.getValue() ? c.push(e) : c.push(l.Hb());
            h.connection && ((h = I(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e))
        }
    c = Ha(c.join(" ")) || "???";
    a && (b = c, b.length > a && (b = b.substring(0, a - 3) + "..."), c = b);
    return c
};

function Fh(a, b) {
    return a.Yd(w.kb, b)
}

function O(a, b) {
    return a.Yd(w.Ee, b || "")
}

function Gh(a, b) {
    var c = b.type ? 'Block "' + b.type + '": ' : "";
    if ("colour" in b)
        if (void 0 === b.colour) console.warn(c + "Undefined color value.");
        else {
            var e = b.colour;
            try {
                a.Na(e)
            } catch (y) {
                console.warn(c + "Illegal color value: ", e)
            }
        }
    for (e = 0; void 0 !== b["message" + e];) {
        for (var f = a, h = b["args" + e] || [], k = b["lastDummyAlign" + e], l = w.i.Ox(b["message" + e]), m = [], n = 0, q = [], t = 0; t < l.length; t++) {
            var z = l[t];
            if ("number" == typeof z) {
                if (0 >= z || z > h.length) throw Error('Block "' + f.type + '": Message index %' + z + " out of range.");
                if (m[z]) throw Error('Block "' +
                    f.type + '": Message index %' + z + " duplicated.");
                m[z] = !0;
                n++;
                q.push(h[z - 1])
            } else(z = z.trim()) && q.push(z)
        }
        if (n != h.length) throw Error('Block "' + f.type + '": Message does not reference all ' + h.length + " arg(s).");
        q.length && ("string" == typeof q[q.length - 1] || Ea(q[q.length - 1].type, "field_")) && (t = {
            type: "input_dummy"
        }, k && (t.align = k), q.push(t));
        k = {
            LEFT: w.Ei,
            RIGHT: w.xh,
            CENTRE: w.xk
        };
        h = [];
        for (t = 0; t < q.length; t++)
            if (m = q[t], "string" == typeof m) h.push([m, void 0]);
            else {
                l = z = null;
                do
                    if (n = !1, "string" == typeof m) z = new yh(m);
                    else switch (m.type) {
                        case "input_value":
                            l =
                                Fh(f, m.name);
                            break;
                        case "input_statement":
                            l = f.Yd(w.Sa, m.name);
                            break;
                        case "input_dummy":
                            l = O(f, m.name);
                            break;
                        default:
                            z = (z = qh[m.type]) ? z.ha(m) : null, z || (m.alt ? (m = m.alt, n = !0) : console.warn("Blockly could not create a field of type " + m.type + ". You may need to register your custom field.  See github.com/google/blockly/issues/1584"))
                    }
                while (n);
                if (z) h.push([z, m.name]);
                else if (l) {
                    m.check && l.tb(m.check);
                    m.align && Bh(l, k[m.align]);
                    for (m = 0; m < h.length; m++) M(l, h[m][0], h[m][1]);
                    h.length = 0
                }
            }
        e++
    }
    void 0 !== b.inputsInline &&
        a.hg(b.inputsInline);
    void 0 !== b.output && a.ef(!0, b.output);
    void 0 !== b.previousStatement && a.Ac(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.zc(!0, b.nextStatement);
    void 0 !== b.tooltip && (e = b.tooltip, e = w.i.jc(e), a.za(e));
    void 0 !== b.enableContextMenu && (e = b.enableContextMenu, a.contextMenu = !!e);
    void 0 !== b.helpUrl && (e = b.helpUrl, e = w.i.jc(e), a.Ob = e);
    p(b.extensions) && (console.warn(c + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + b.type + "' block."), b.extensions = [b.extensions]);
    void 0 !== b.mutator && w.L.apply(b.mutator, a, !0);
    if (Array.isArray(b.extensions))
        for (b = b.extensions, e = 0; e < b.length; ++e) w.L.apply(b[e], a, !1)
}

function ah(a, b) {
    if (aa(void 0)) throw Error("opt_disableCheck must be a boolean if provided");
    var c = [],
        e;
    for (e in b) void 0 !== a[e] && c.push(e);
    if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    for (var f in b) a[f] = b[f]
}
d.Yd = function(a, b) {
    var c = null;
    if (a == w.kb || a == w.Sa) c = this.Mj(a);
    a = new zh(a, b, this, c);
    this.W.push(a);
    return a
};

function Hh(a, b, c) {
    if (b != c) {
        for (var e = -1, f = c ? -1 : a.W.length, h = 0, k; k = a.W[h]; h++)
            if (k.name == b) {
                if (e = h, -1 != f) break
            } else if (c && k.name == c && (f = h, -1 != e)) break;
        a.to(e, f)
    }
}
d.to = function(a, b) {
    var c = this.W[a];
    this.W.splice(a, 1);
    a < b && b--;
    this.W.splice(b, 0, c)
};
d.yb = function(a) {
    for (var b = 0, c; c = this.W[b]; b++)
        if (c.name == a) {
            c.connection && c.connection.isConnected() && (c.connection.ye = null, a = I(c.connection), a.gb ? a.A() : Ce(a));
            c.A();
            this.W.splice(b, 1);
            break
        }
};

function J(a, b) {
    for (var c = 0, e; e = a.W[c]; c++)
        if (e.name == b) return e;
    return null
}

function Ih(a, b) {
    return (a = J(a, b)) && a.connection && I(a.connection)
}
d.ql = function() {
    return this.Ua || ""
};
d.bh = function(a) {
    this.Ua != a && (w.j.V(new w.j.Ec(this, "comment", null, this.Ua, a || "")), this.Ua = a)
};
d.xe = function() {};
d.ek = function() {};
d.la = function() {
    return this.nd
};
d.moveBy = function(a, b) {
    var c = new w.j.Fi(this);
    this.nd.translate(a, b);
    c.af();
    w.j.V(c)
};
d.Mj = function(a) {
    return new Je(this, a)
};

function Se(a) {
    var b = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (b += ' (id="' + a.id + '")');
    return b
};
w.i.Bi = {};
w.i.Bi.Ue = function(a) {
    a = a.F();
    var b = ih(a);
    b.height = a.scrollHeight;
    return b
};
w.i.Bi.cq = function(a, b, c) {
    b.left += c.width;
    b.right += c.width;
    a.left += c.width;
    a.right += c.width
};

function Jh(a) {
    Fb.call(this);
    this.bi = a;
    this.ii = {}
}
v(Jh, Fb);
var Kh = [];
d = Jh.prototype;
d.na = function(a, b, c, e) {
    r(b) || (b && (Kh[0] = b.toString()), b = Kh);
    for (var f = 0; f < b.length; f++) {
        var h = cc(a, b[f], c || this.handleEvent, e || !1, this.bi || this);
        if (!h) break;
        this.ii[h.key] = h
    }
    return this
};
d.$r = function(a, b, c, e) {
    return Lh(this, a, b, c, e)
};

function Lh(a, b, c, e, f, h) {
    if (r(c))
        for (var k = 0; k < c.length; k++) Lh(a, b, c[k], e, f, h);
    else {
        b = dc(b, c, e || a.handleEvent, f, h || a.bi || a);
        if (!b) return a;
        a.ii[b.key] = b
    }
    return a
}
d.kd = function(a, b, c, e, f) {
    if (r(b))
        for (var h = 0; h < b.length; h++) this.kd(a, b[h], c, e, f);
    else c = c || this.handleEvent, e = ia(e) ? !!e.capture : !!e, f = f || this.bi || this, c = ec(c), e = !!e, b = Tb(a) ? a.nj(b, c, e, f) : a ? (a = gc(a)) ? a.nj(b, c, e, f) : null : null, b && (lc(b), delete this.ii[b.key]);
    return this
};
d.removeAll = function() {
    bb(this.ii, function(a, b) {
        this.ii.hasOwnProperty(b) && lc(a)
    }, this);
    this.ii = {}
};
d.Va = function() {
    Jh.s.Va.call(this);
    this.removeAll()
};
d.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function Mh() {}
ea(Mh);
Mh.prototype.Tw = 0;

function Nh(a) {
    lg.call(this);
    this.cl = a || Rd();
    this.wi = Oh;
    this.ci = null;
    this.ya = !1;
    this.T = null;
    this.Gf = void 0;
    this.zf = this.dc = this.ve = this.so = null;
    this.ri = this.Yx = !1
}
v(Nh, lg);
Nh.prototype.vw = Mh.ne();
var Oh = null;

function Ph(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}
d = Nh.prototype;
d.aa = function() {
    return this.ci || (this.ci = ":" + (this.vw.Tw++).toString(36))
};
d.F = function() {
    return this.T
};

function Qh(a) {
    a.Gf || (a.Gf = new Jh(a));
    return a.Gf
}
d.fh = function(a) {
    if (this == a) throw Error("Unable to set parent component");
    if (a && this.ve && this.ci && Rh(this.ve, this.ci) && this.ve != a) throw Error("Unable to set parent component");
    this.ve = a;
    Nh.s.tm.call(this, a)
};
d.getParent = function() {
    return this.ve
};
d.tm = function(a) {
    if (this.ve && this.ve != a) throw Error("Method not supported");
    Nh.s.tm.call(this, a)
};
d.pc = function() {
    return this.cl
};
d.X = function() {
    this.T = this.cl.createElement("DIV")
};
d.$ = function(a) {
    this.we(a)
};
d.we = function(a, b) {
    if (this.ya) throw Error("Component already rendered");
    this.T || this.X();
    a ? a.insertBefore(this.T, b || null) : this.cl.Hd.body.appendChild(this.T);
    this.ve && !this.ve.ya || this.Fb()
};
d.Fb = function() {
    this.ya = !0;
    Sh(this, function(a) {
        !a.ya && a.F() && a.Fb()
    })
};
d.vd = function() {
    Sh(this, function(a) {
        a.ya && a.vd()
    });
    this.Gf && this.Gf.removeAll();
    this.ya = !1
};
d.Va = function() {
    this.ya && this.vd();
    this.Gf && (this.Gf.A(), delete this.Gf);
    Sh(this, function(a) {
        a.A()
    });
    !this.Yx && this.T && F(this.T);
    this.ve = this.so = this.T = this.zf = this.dc = null;
    Nh.s.Va.call(this)
};
d.Qi = function(a, b) {
    this.Jh(a, Th(this), b)
};
d.Jh = function(a, b, c) {
    if (a.ya && (c || !this.ya)) throw Error("Component already rendered");
    if (0 > b || b > Th(this)) throw Error("Child component index out of bounds");
    this.zf && this.dc || (this.zf = {}, this.dc = []);
    if (a.getParent() == this) {
        var e = a.aa();
        this.zf[e] = a;
        ya(this.dc, a)
    } else {
        e = this.zf;
        var f = a.aa();
        if (null !== e && f in e) throw Error('The object already contains the key "' + f + '"');
        e[f] = a
    }
    a.fh(this);
    Ca(this.dc, b, 0, a);
    a.ya && this.ya && a.getParent() == this ? (c = this.bd(), b = c.childNodes[b] || null, b != a.F() && c.insertBefore(a.F(),
        b)) : c ? (this.T || this.X(), b = Uh(this, b + 1), a.we(this.bd(), b ? b.T : null)) : this.ya && !a.ya && a.T && a.T.parentNode && 1 == a.T.parentNode.nodeType && a.Fb()
};
d.bd = function() {
    return this.T
};

function Vh(a) {
    null == a.wi && (a.wi = "rtl" == eh(a.ya ? a.T : a.cl.Hd.body, "direction"));
    return a.wi
}
d.ff = function(a) {
    if (this.ya) throw Error("Component already rendered");
    this.wi = a
};

function Wh(a) {
    return !!a.dc && 0 != a.dc.length
}

function Th(a) {
    return a.dc ? a.dc.length : 0
}

function Rh(a, b) {
    a.zf && b ? (a = a.zf, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
    return b
}

function Uh(a, b) {
    return a.dc ? a.dc[b] || null : null
}

function Sh(a, b, c) {
    a.dc && sa(a.dc, b, c)
}

function Xh(a, b) {
    return a.dc && b ? ra(a.dc, b) : -1
}
d.removeChild = function(a, b) {
    if (a) {
        var c = p(a) ? a : a.aa();
        a = Rh(this, c);
        if (c && a) {
            var e = this.zf;
            c in e && delete e[c];
            ya(this.dc, a);
            b && (a.vd(), a.T && F(a.T));
            a.fh(null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
d.Qs = function(a) {
    for (var b = []; Wh(this);) b.push(this.removeChild(Uh(this, 0), a));
    return b
};
var Yh;
eb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

function Zh(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function P(a, b, c) {
    r(c) && (c = c.join(" "));
    var e = "aria-" + b;
    "" === c || void 0 == c ? (Yh || (Yh = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = Yh, b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e)) : a.setAttribute(e, c)
}

function $h(a, b) {
    a = a.getAttribute("aria-" + b);
    return null == a || void 0 == a ? "" : String(a)
};

function ai(a, b, c, e, f, h) {
    if (A && !vb("525")) return !0;
    if (mb && f) return bi(a);
    if (f && !e) return !1;
    if (!kb) {
        ba(b) && (b = ci(b));
        var k = 17 == b || 18 == b || mb && 91 == b;
        if ((!c || mb) && k || mb && 16 == b && (e || h)) return !1
    }
    if ((A || jb) && e && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (x && e && b == a) return !1;
    switch (a) {
        case 13:
            return kb ? h || f ? !1 : !(c && e) : !0;
        case 27:
            return !(A || jb || kb)
    }
    return kb && (e || f || h) ? !1 : bi(a)
}

function bi(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (A || jb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function ci(a) {
    if (kb) a = di(a);
    else if (mb && A) switch (a) {
        case 93:
            a = 91
    }
    return a
}

function di(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function ei(a, b) {
    lg.call(this);
    a && fi(this, a, b)
}
v(ei, lg);
d = ei.prototype;
d.T = null;
d.Sl = null;
d.ho = null;
d.Tl = null;
d.Mc = -1;
d.Tf = -1;
d.Wm = !1;
var gi = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    hi = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    ii = !A || vb("525"),
    ji = mb && kb;
d = ei.prototype;
d.hw = function(a) {
    if (A || jb)
        if (17 == this.Mc && !a.ctrlKey || 18 == this.Mc && !a.altKey || mb && 91 == this.Mc && !a.metaKey) this.Tf = this.Mc = -1; - 1 == this.Mc && (a.ctrlKey && 17 != a.keyCode ? this.Mc = 17 : a.altKey && 18 != a.keyCode ? this.Mc = 18 : a.metaKey && 91 != a.keyCode && (this.Mc = 91));
    ii && !ai(a.keyCode, this.Mc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Tf = ci(a.keyCode), ji && (this.Wm = a.altKey))
};
d.iw = function(a) {
    this.Tf = this.Mc = -1;
    this.Wm = a.altKey
};
d.handleEvent = function(a) {
    var b = a.ie,
        c = b.altKey;
    if (x && "keypress" == a.type) {
        var e = this.Tf;
        var f = 13 != e && 27 != e ? b.keyCode : 0
    } else(A || jb) && "keypress" == a.type ? (e = this.Tf, f = 0 <= b.charCode && 63232 > b.charCode && bi(e) ? b.charCode : 0) : ib && !A ? (e = this.Tf, f = bi(e) ? b.keyCode : 0) : (e = b.keyCode || this.Tf, f = b.charCode || 0, ji && "keypress" == a.type && (c = this.Wm), mb && 63 == f && 224 == e && (e = 191));
    var h = e = ci(e);
    e ? 63232 <= e && e in gi ? h = gi[e] : 25 == e && a.shiftKey && (h = 9) : b.keyIdentifier && b.keyIdentifier in hi && (h = hi[b.keyIdentifier]);
    kb && ii && "keypress" ==
        a.type && !ai(h, this.Mc, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = h == this.Mc, this.Mc = h, b = new ki(h, f, a, b), b.altKey = c, this.dispatchEvent(b))
};
d.F = function() {
    return this.T
};

function fi(a, b, c) {
    a.Tl && a.detach();
    a.T = b;
    a.Sl = cc(a.T, "keypress", a, c);
    a.ho = cc(a.T, "keydown", a.hw, c, a);
    a.Tl = cc(a.T, "keyup", a.iw, c, a)
}
d.detach = function() {
    this.Sl && (lc(this.Sl), lc(this.ho), lc(this.Tl), this.Tl = this.ho = this.Sl = null);
    this.T = null;
    this.Tf = this.Mc = -1
};
d.Va = function() {
    ei.s.Va.call(this);
    this.detach()
};

function ki(a, b, c, e) {
    Ob.call(this, e);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
}
v(ki, Ob);

function li(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return p(a) && a.match(/\S+/g) || []
}

function mi(a, b) {
    return a.classList ? a.classList.contains(b) : xa(li(a), b)
}

function ni(a, b) {
    a.classList ? a.classList.add(b) : mi(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function oi(a, b) {
    if (a.classList) sa(b, function(b) {
        ni(a, b)
    });
    else {
        var c = {};
        sa(li(a), function(a) {
            c[a] = !0
        });
        sa(b, function(a) {
            c[a] = !0
        });
        a.className = "";
        for (var e in c) a.className += 0 < a.className.length ? " " + e : e
    }
}

function pi(a, b) {
    a.classList ? a.classList.remove(b) : mi(a, b) && (a.className = ta(li(a), function(a) {
        return a != b
    }).join(" "))
}

function qi(a, b) {
    a.classList ? sa(b, function(b) {
        pi(a, b)
    }) : a.className = ta(li(a), function(a) {
        return !xa(b, a)
    }).join(" ")
};

function ri(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!u(b)) throw Error("Invalid decorator function " + b);
}
var si = {};

function ti(a) {
    this.gq = a
}
ea(ti);
d = ti.prototype;
d.kl = function() {
    return this.gq
};

function ui(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
d.X = function(a) {
    return a.pc().X("DIV", this.mj(a).join(" "))
};
d.bd = function(a) {
    return a
};
d.Cj = function(a) {
    a = a.F();
    mh(a, !0, kb);
    x && (a.hideFocus = !0);
    var b = this.kl();
    b && Zh(a, b)
};
d.Nb = function(a) {
    return a.F()
};
d.Ka = function() {
    return "goog-container"
};
d.mj = function(a) {
    var b = this.Ka(),
        c = [b, a.Vg == vi ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};

function wi() {}
var xi;
ea(wi);
var yi = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
d = wi.prototype;
d.kl = function() {};
d.X = function(a) {
    return a.pc().X("DIV", this.mj(a).join(" "), a.Jc())
};
d.bd = function(a) {
    return a
};
d.gj = function(a, b, c) {
    if (a = a.F ? a.F() : a) {
        var e = [b];
        x && !vb("7") && (e = zi(li(a), b), e.push(b));
        (c ? oi : qi)(a, e)
    }
};
d.Cj = function(a) {
    Vh(a) && this.ff(a.F(), !0);
    a.isEnabled() && this.df(a, a.Y())
};

function Ai(a, b, c) {
    if (a = c || a.kl()) c = b.getAttribute("role") || null, a != c && Zh(b, a)
}

function Bi(a, b, c) {
    var e = b.fq;
    null != e && a.ep(c, e);
    b.Y() || P(c, "hidden", !b.Y());
    b.isEnabled() || Ci(c, 1, !b.isEnabled());
    b.zb & 8 && Ci(c, 8, b.Pl());
    b.zb & 16 && Ci(c, 16, !!(b.Ja & 16));
    b.zb & 64 && Ci(c, 64, b.ei())
}
d.ep = function(a, b) {
    P(a, "label", b)
};
d.cp = function(a, b) {
    mh(a, !b, !x && !ib)
};
d.ff = function(a, b) {
    this.gj(a, this.Ka() + "-rtl", b)
};
d.We = function(a) {
    var b;
    return a.zb & 32 && (b = a.Nb()) ? ie(b) && je(b) : !1
};
d.df = function(a, b) {
    var c;
    if (a.zb & 32 && (c = a.Nb())) {
        if (!b && a.Ja & 32) {
            try {
                c.blur()
            } catch (e) {}
            a.Ja & 32 && a.tj(null)
        }(ie(c) && je(c)) != b && (a = c, b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex")))
    }
};
d.oa = function(a, b) {
    kh(a, b);
    a && P(a, "hidden", !b)
};
d.Td = function(a, b, c) {
    var e = a.F();
    if (e) {
        var f = this.ol(b);
        f && this.gj(a, f, c);
        Ci(e, b, c)
    }
};

function Ci(a, b, c) {
    xi || (xi = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = xi[b];
    var e = a.getAttribute("role") || null;
    e && (e = yi[e] || b, b = "checked" == b || "selected" == b ? e : b);
    b && P(a, b, c)
}
d.Bd = function(a, b) {
    var c = this.bd(a);
    c && (ce(c), b && (p(b) ? fe(c, b) : (a = function(a) {
        if (a) {
            var b = Td(c);
            c.appendChild(p(a) ? b.createTextNode(a) : a)
        }
    }, r(b) ? sa(b, a) : !ha(b) || "nodeType" in b ? a(b) : sa(Aa(b), a))))
};
d.Nb = function(a) {
    return a.F()
};
d.Ka = function() {
    return "goog-control"
};
d.mj = function(a) {
    var b = this.Ka(),
        c = [b],
        e = this.Ka();
    e != b && c.push(e);
    b = a.getState();
    for (e = []; b;) {
        var f = b & -b;
        e.push(this.ol(f));
        b &= ~f
    }
    c.push.apply(c, e);
    (a = a.je) && c.push.apply(c, a);
    x && !vb("7") && c.push.apply(c, zi(c));
    return c
};

function zi(a, b) {
    var c = [];
    b && (a = za(a, [b]));
    sa([], function(e) {
        !va(e, pa(xa, a)) || b && !xa(e, b) || c.push(e.join("_"))
    });
    return c
}
d.ol = function(a) {
    if (!this.rq) {
        var b = this.Ka();
        b.replace(/\xa0|\s/g, " ");
        this.rq = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.rq[a]
};

function Q(a, b, c) {
    Nh.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var e; b;) {
            e = ja(b);
            if (e = si[e]) break;
            b = b.s ? b.s.constructor : null
        }
        b = e ? u(e.ne) ? e.ne() : new e : null
    }
    this.ma = b;
    this.rm(aa(a) ? a : null);
    this.fq = null
}
v(Q, Nh);
d = Q.prototype;
d.Xc = null;
d.Ja = 0;
d.zb = 39;
d.Zm = 255;
d.mh = 0;
d.Qa = !0;
d.je = null;
d.uj = !0;
d.Vm = !1;
d.ux = null;
d.Nb = function() {
    return this.ma.Nb(this)
};
d.wl = function() {
    return this.gc || (this.gc = new ei)
};
d.gj = function(a, b) {
    b ? a && (this.je ? xa(this.je, a) || this.je.push(a) : this.je = [a], this.ma.gj(this, a, !0)) : a && this.je && ya(this.je, a) && (0 == this.je.length && (this.je = null), this.ma.gj(this, a, !1))
};
d.X = function() {
    var a = this.ma.X(this);
    this.T = a;
    Ai(this.ma, a, this.Al());
    this.Vm || this.ma.cp(a, !1);
    this.Y() || this.ma.oa(a, !1)
};
d.Al = function() {
    return this.ux
};
d.ep = function(a) {
    this.fq = a;
    var b = this.F();
    b && this.ma.ep(b, a)
};
d.bd = function() {
    return this.ma.bd(this.F())
};
d.Fb = function() {
    Q.s.Fb.call(this);
    Bi(this.ma, this, this.T);
    this.ma.Cj(this);
    if (this.zb & -2 && (this.uj && Di(this, !0), this.zb & 32)) {
        var a = this.Nb();
        if (a) {
            var b = this.wl();
            fi(b, a);
            Qh(this).na(b, "key", this.yd).na(a, "focus", this.El).na(a, "blur", this.tj)
        }
    }
};

function Di(a, b) {
    var c = a.ri ? Nb : Mb,
        e = Qh(a),
        f = a.F();
    b ? (e.na(f, c.Ki, a.vj).na(f, c.Ch, a.Ve).na(f, [c.Dh, c.Bh], a.ai).na(f, c.Ji, a.Vn), a.ri && e.na(f, "gotpointercapture", a.im), a.$h != da && e.na(f, "contextmenu", a.$h), x && (vb(9) || e.na(f, "dblclick", a.Dr), a.Bj || (a.Bj = new Ei(a), Ib(a, pa(Jb, a.Bj))))) : (e.kd(f, c.Ki, a.vj).kd(f, c.Ch, a.Ve).kd(f, [c.Dh, c.Bh], a.ai).kd(f, c.Ji, a.Vn), a.ri && e.kd(f, "gotpointercapture", a.im), a.$h != da && e.kd(f, "contextmenu", a.$h), x && (vb(9) || e.kd(f, "dblclick", a.Dr), Jb(a.Bj), a.Bj = null))
}
d.vd = function() {
    Q.s.vd.call(this);
    this.gc && this.gc.detach();
    this.Y() && this.isEnabled() && this.ma.df(this, !1)
};
d.Va = function() {
    Q.s.Va.call(this);
    this.gc && (this.gc.A(), delete this.gc);
    delete this.ma;
    this.Bj = this.je = this.Xc = null
};
d.Jc = function() {
    return this.Xc
};
d.Bd = function(a) {
    this.ma.Bd(this.F(), a);
    this.rm(a)
};
d.rm = function(a) {
    this.Xc = a
};
d.ml = function() {
    var a = this.Jc();
    if (!a) return "";
    a = p(a) ? a : r(a) ? ua(a, me).join("") : ke(a);
    return Ga(a)
};
d.ff = function(a) {
    Q.s.ff.call(this, a);
    var b = this.F();
    b && this.ma.ff(b, a)
};
d.cp = function(a) {
    this.Vm = a;
    var b = this.F();
    b && this.ma.cp(b, a)
};
d.Y = function() {
    return this.Qa
};
d.oa = function(a, b) {
    return b || this.Qa != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.F()) && this.ma.oa(b, a), this.isEnabled() && this.ma.df(this, a), this.Qa = a, !0) : !1
};
d.isEnabled = function() {
    return !(this.Ja & 1)
};
d.dk = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Fi(this, 1, !a) || (a || (this.setActive(!1), this.Xb(!1)), this.Y() && this.ma.df(this, a), this.Td(1, !a, !0))
};
d.Xb = function(a) {
    Fi(this, 2, a) && this.Td(2, a)
};
d.setActive = function(a) {
    Fi(this, 4, a) && this.Td(4, a)
};
d.Pl = function() {
    return !!(this.Ja & 8)
};
d.lp = function(a) {
    Fi(this, 8, a) && this.Td(8, a)
};

function Gi(a, b) {
    Fi(a, 16, b) && a.Td(16, b)
}
d.ei = function() {
    return !!(this.Ja & 64)
};

function Hi(a, b) {
    Fi(a, 64, b) && a.Td(64, b)
}
d.getState = function() {
    return this.Ja
};
d.Td = function(a, b, c) {
    c || 1 != a ? this.zb & a && b != !!(this.Ja & a) && (this.ma.Td(this, a, b), this.Ja = b ? this.Ja | a : this.Ja & ~a) : this.dk(!b)
};
d.Bc = function(a, b) {
    if (this.ya && this.Ja & a && !b) throw Error("Component already rendered");
    !b && this.Ja & a && this.Td(a, !1);
    this.zb = b ? this.zb | a : this.zb & ~a
};

function Ii(a, b) {
    return !!(a.Zm & b) && !!(a.zb & b)
}

function Fi(a, b, c) {
    return !!(a.zb & b) && !!(a.Ja & b) != c && (!(a.mh & b) || a.dispatchEvent(Ph(b, c))) && !a.Ph
}
d.vj = function(a) {
    !Ji(a, this.F()) && this.dispatchEvent("enter") && this.isEnabled() && Ii(this, 2) && this.Xb(!0)
};
d.Vn = function(a) {
    !Ji(a, this.F()) && this.dispatchEvent("leave") && (Ii(this, 4) && this.setActive(!1), Ii(this, 2) && this.Xb(!1))
};
d.im = function(a) {
    var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId)
};
d.$h = da;

function Ji(a, b) {
    return !!a.relatedTarget && ee(b, a.relatedTarget)
}
d.Ve = function(a) {
    this.isEnabled() && (Ii(this, 2) && this.Xb(!0), !Rb(a) || A && mb && a.ctrlKey || (Ii(this, 4) && this.setActive(!0), this.ma && this.ma.We(this) && this.Nb().focus()));
    this.Vm || !Rb(a) || A && mb && a.ctrlKey || a.preventDefault()
};
d.ai = function(a) {
    this.isEnabled() && (Ii(this, 2) && this.Xb(!0), this.Ja & 4 && this.Zf(a) && Ii(this, 4) && this.setActive(!1))
};
d.Dr = function(a) {
    this.isEnabled() && this.Zf(a)
};
d.Zf = function(a) {
    Ii(this, 16) && Gi(this, !(this.Ja & 16));
    Ii(this, 8) && this.lp(!0);
    Ii(this, 64) && Hi(this, !this.ei());
    var b = new Kb("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Ko = a.Ko);
    return this.dispatchEvent(b)
};
d.El = function() {
    Ii(this, 32) && Fi(this, 32, !0) && this.Td(32, !0)
};
d.tj = function() {
    Ii(this, 4) && this.setActive(!1);
    Ii(this, 32) && Fi(this, 32, !1) && this.Td(32, !1)
};
d.yd = function(a) {
    return this.Y() && this.isEnabled() && this.Jg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
d.Jg = function(a) {
    return 13 == a.keyCode && this.Zf(a)
};
if (!u(Q)) throw Error("Invalid component class " + Q);
if (!u(wi)) throw Error("Invalid renderer class " + wi);
var Ki = ja(Q);
si[Ki] = wi;
ri("goog-control", function() {
    return new Q(null)
});

function Ei(a) {
    Fb.call(this);
    this.Vk = a;
    this.Qk = !1;
    this.bi = new Jh(this);
    Ib(this, pa(Jb, this.bi));
    a = this.Vk.T;
    this.bi.na(a, "mousedown", this.jw).na(a, "mouseup", this.kw).na(a, "click", this.cw)
}
v(Ei, Fb);
var Li = !x || 9 <= Number(wb);
Ei.prototype.jw = function() {
    this.Qk = !1
};
Ei.prototype.kw = function() {
    this.Qk = !0
};

function Mi(a, b) {
    if (!Li) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
Ei.prototype.cw = function(a) {
    if (this.Qk) this.Qk = !1;
    else {
        var b = a.ie,
            c = b.button,
            e = b.type,
            f = Mi(b, "mousedown");
        this.Vk.Ve(new Ob(f, a.currentTarget));
        f = Mi(b, "mouseup");
        this.Vk.ai(new Ob(f, a.currentTarget));
        Li || (b.button = c, b.type = e)
    }
};
Ei.prototype.Va = function() {
    this.Vk = null;
    Ei.s.Va.call(this)
};

function Ni(a, b, c) {
    Nh.call(this, c);
    this.ma = b || ti.ne();
    this.Vg = a || Oi
}
v(Ni, Nh);
var vi = "horizontal",
    Oi = "vertical";
d = Ni.prototype;
d.io = null;
d.gc = null;
d.ma = null;
d.Vg = null;
d.Qa = !0;
d.Fg = !0;
d.Hg = !0;
d.ua = -1;
d.Jb = null;
d.li = !1;
d.Mu = !1;
d.tx = !0;
d.Le = null;
d.Nb = function() {
    return this.io || this.ma.Nb(this)
};
d.wl = function() {
    return this.gc || (this.gc = new ei(this.Nb()))
};
d.X = function() {
    this.T = this.ma.X(this)
};
d.bd = function() {
    return this.ma.bd(this.F())
};
d.Fb = function() {
    Ni.s.Fb.call(this);
    Sh(this, function(a) {
        a.ya && Pi(this, a)
    }, this);
    var a = this.F();
    this.ma.Cj(this);
    this.oa(this.Qa, !0);
    var b = this.ri ? Nb : Mb;
    Qh(this).na(this, "enter", this.Tn).na(this, "highlight", this.gw).na(this, "unhighlight", this.pw).na(this, "open", this.lw).na(this, "close", this.dw).na(a, b.Ch, this.Ve).na(Td(a), [b.Dh, b.Bh], this.ew).na(a, [b.Ch, b.Dh, b.Bh, b.Ki, b.Ji, "contextmenu"], this.bw);
    this.ri && Qh(this).na(a, "gotpointercapture", this.im);
    this.We() && Qi(this, !0)
};
d.im = function(a) {
    var b = a.target;
    b.releasePointerCapture && b.releasePointerCapture(a.pointerId)
};

function Qi(a, b) {
    var c = Qh(a),
        e = a.Nb();
    b ? c.na(e, "focus", a.El).na(e, "blur", a.tj).na(a.wl(), "key", a.yd) : c.kd(e, "focus", a.El).kd(e, "blur", a.tj).kd(a.wl(), "key", a.yd)
}
d.vd = function() {
    this.kc(-1);
    this.Jb && Hi(this.Jb, !1);
    this.li = !1;
    Ni.s.vd.call(this)
};
d.Va = function() {
    Ni.s.Va.call(this);
    this.gc && (this.gc.A(), this.gc = null);
    this.ma = this.Jb = this.Le = this.io = null
};
d.Tn = function() {
    return !0
};
d.gw = function(a) {
    var b = Xh(this, a.target);
    if (-1 < b && b != this.ua) {
        var c = Uh(this, this.ua);
        c && c.Xb(!1);
        this.ua = b;
        c = Uh(this, this.ua);
        this.li && c.setActive(!0);
        this.tx && this.Jb && c != this.Jb && (c.zb & 64 ? Hi(c, !0) : Hi(this.Jb, !1))
    }
    b = this.F();
    null != a.target.F() && P(b, "activedescendant", a.target.F().id)
};
d.pw = function(a) {
    a.target == Uh(this, this.ua) && (this.ua = -1);
    this.F().removeAttribute("aria-activedescendant")
};
d.lw = function(a) {
    (a = a.target) && a != this.Jb && a.getParent() == this && (this.Jb && Hi(this.Jb, !1), this.Jb = a)
};
d.dw = function(a) {
    a.target == this.Jb && (this.Jb = null);
    var b = this.F(),
        c = a.target.F();
    b && a.target.Ja & 2 && c && (a = "", c && (a = c.id), P(b, "activedescendant", a))
};
d.Ve = function(a) {
    this.Fg && (this.li = !0);
    var b = this.Nb();
    b && ie(b) && je(b) ? b.focus() : a.preventDefault()
};
d.ew = function() {
    this.li = !1
};
d.bw = function(a) {
    var b = this.ri ? Nb : Mb,
        c = Ri(this, a.target);
    if (c) switch (a.type) {
        case b.Ch:
            c.Ve(a);
            break;
        case b.Dh:
        case b.Bh:
            c.ai(a);
            break;
        case b.Ki:
            c.vj(a);
            break;
        case b.Ji:
            c.Vn(a);
            break;
        case "contextmenu":
            c.$h(a)
    }
};

function Ri(a, b) {
    if (a.Le)
        for (var c = a.F(); b && b !== c;) {
            var e = b.id;
            if (e in a.Le) return a.Le[e];
            b = b.parentNode
        }
    return null
}
d.El = function() {};
d.tj = function() {
    this.kc(-1);
    this.li = !1;
    this.Jb && Hi(this.Jb, !1)
};
d.yd = function(a) {
    return this.isEnabled() && this.Y() && (0 != Th(this) || this.io) && this.Jg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
d.Jg = function(a) {
    var b = Uh(this, this.ua);
    if (b && "function" == typeof b.yd && b.yd(a) || this.Jb && this.Jb != b && "function" == typeof this.Jb.yd && this.Jb.yd(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.We()) this.Nb().blur();
            else return !1;
            break;
        case 36:
            Si(this);
            break;
        case 35:
            Ti(this);
            break;
        case 38:
            if (this.Vg == Oi) Ui(this);
            else return !1;
            break;
        case 37:
            if (this.Vg == vi) Vh(this) ? Vi(this) : Ui(this);
            else return !1;
            break;
        case 40:
            if (this.Vg == Oi) Vi(this);
            else return !1;
            break;
        case 39:
            if (this.Vg == vi) Vh(this) ? Ui(this) : Vi(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function Pi(a, b) {
    var c = b.F();
    c = c.id || (c.id = b.aa());
    a.Le || (a.Le = {});
    a.Le[c] = b
}
d.Qi = function(a, b) {
    Ni.s.Qi.call(this, a, b)
};
d.Jh = function(a, b, c) {
    a.mh |= 2;
    a.mh |= 64;
    !this.We() && this.Mu || a.Bc(32, !1);
    a.ya && 0 != a.uj && Di(a, !1);
    a.uj = !1;
    var e = a.getParent() == this ? Xh(this, a) : -1;
    Ni.s.Jh.call(this, a, b, c);
    a.ya && this.ya && Pi(this, a);
    a = e; - 1 == a && (a = Th(this));
    a == this.ua ? this.ua = Math.min(Th(this) - 1, b) : a > this.ua && b <= this.ua ? this.ua++ : a < this.ua && b > this.ua && this.ua--
};
d.removeChild = function(a, b) {
    if (a = p(a) ? Rh(this, a) : a) {
        var c = Xh(this, a); - 1 != c && (c == this.ua ? (a.Xb(!1), this.ua = -1) : c < this.ua && this.ua--);
        var e = a.F();
        e && e.id && this.Le && (c = this.Le, e = e.id, e in c && delete c[e])
    }
    b = a = Ni.s.removeChild.call(this, a, b);
    b.ya && 1 != b.uj && Di(b, !0);
    b.uj = !0;
    return a
};
d.setOrientation = function(a) {
    if (this.F()) throw Error("Component already rendered");
    this.Vg = a
};
d.Y = function() {
    return this.Qa
};
d.oa = function(a, b) {
    if (b || this.Qa != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Qa = a;
        var c = this.F();
        c && (kh(c, a), this.We() && ui(this.Nb(), this.Fg && this.Qa), b || this.dispatchEvent(this.Qa ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
d.isEnabled = function() {
    return this.Fg
};
d.dk = function(a) {
    this.Fg != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Fg = !0, Sh(this, function(a) {
        a.st ? delete a.st : a.dk(!0)
    })) : (Sh(this, function(a) {
        a.isEnabled() ? a.dk(!1) : a.st = !0
    }), this.li = this.Fg = !1), this.We() && ui(this.Nb(), a && this.Qa))
};
d.We = function() {
    return this.Hg
};
d.df = function(a) {
    a != this.Hg && this.ya && Qi(this, a);
    this.Hg = a;
    this.Fg && this.Qa && ui(this.Nb(), a)
};
d.kc = function(a) {
    (a = Uh(this, a)) ? a.Xb(!0): -1 < this.ua && Uh(this, this.ua).Xb(!1)
};
d.Xb = function(a) {
    this.kc(Xh(this, a))
};

function Si(a) {
    Wi(a, function(a, c) {
        return (a + 1) % c
    }, Th(a) - 1)
}

function Ti(a) {
    Wi(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function Vi(a) {
    Wi(a, function(a, c) {
        return (a + 1) % c
    }, a.ua)
}

function Ui(a) {
    Wi(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.ua)
}

function Wi(a, b, c) {
    c = 0 > c ? Xh(a, a.Jb) : c;
    var e = Th(a);
    c = b.call(a, c, e);
    for (var f = 0; f <= e;) {
        var h = Uh(a, c);
        if (h && a.mq(h)) {
            a.kc(c);
            break
        }
        f++;
        c = b.call(a, c, e)
    }
}
d.mq = function(a) {
    return a.Y() && a.isEnabled() && !!(a.zb & 2)
};

function Xi() {}
v(Xi, wi);
ea(Xi);
Xi.prototype.Ka = function() {
    return "goog-menuheader"
};

function Yi(a, b, c) {
    Q.call(this, a, c || Xi.ne(), b);
    this.Bc(1, !1);
    this.Bc(2, !1);
    this.Bc(4, !1);
    this.Bc(32, !1);
    this.Ja = 1
}
v(Yi, Q);
ri("goog-menuheader", function() {
    return new Yi(null)
});

function Zi() {
    this.tq = []
}
v(Zi, wi);
ea(Zi);

function $i(a, b) {
    var c = a.tq[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.Ka() + "-highlight";
                break;
            case 1:
                c = a.Ka() + "-checkbox";
                break;
            case 2:
                c = a.Ka() + "-content"
        }
        a.tq[b] = c
    }
    return c
}
d = Zi.prototype;
d.kl = function() {
    return "menuitem"
};
d.X = function(a) {
    var b = a.pc().X("DIV", this.mj(a).join(" "), aj(this, a.Jc(), a.pc()));
    bj(this, a, b, !!(a.zb & 8) || !!(a.zb & 16));
    return b
};
d.bd = function(a) {
    return a && a.firstChild
};
d.Bd = function(a, b) {
    var c = this.bd(a),
        e = cj(this, a) ? c.firstChild : null;
    Zi.s.Bd.call(this, a, b);
    e && !cj(this, a) && c.insertBefore(e, c.firstChild || null)
};

function aj(a, b, c) {
    a = $i(a, 2);
    return c.X("DIV", a, b)
}
d.Ys = function(a, b, c) {
    a && b && bj(this, a, b, c)
};
d.gp = function(a, b, c) {
    a && b && bj(this, a, b, c)
};

function cj(a, b) {
    return (b = a.bd(b)) ? (b = b.firstChild, a = $i(a, 1), !!b && ia(b) && 1 == b.nodeType && mi(b, a)) : !1
}

function bj(a, b, c, e) {
    Ai(a, c, b.Al());
    Bi(a, b, c);
    e != cj(a, c) && (e ? ni(c, "goog-option") : pi(c, "goog-option"), c = a.bd(c), e ? (a = $i(a, 1), c.insertBefore(b.pc().X("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
d.ol = function(a) {
    switch (a) {
        case 2:
            return $i(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Zi.s.ol.call(this, a)
    }
};
d.Ka = function() {
    return "goog-menuitem"
};

function dj(a, b, c, e) {
    Q.call(this, a, e || Zi.ne(), c);
    this.setValue(b)
}
v(dj, Q);
d = dj.prototype;
d.getValue = function() {
    var a = this.so;
    return null != a ? a : this.ml()
};
d.setValue = function(a) {
    this.so = a
};
d.Bc = function(a, b) {
    dj.s.Bc.call(this, a, b);
    switch (a) {
        case 8:
            this.Ja & 16 && !b && Gi(this, !1);
            (a = this.F()) && this.ma.Ys(this, a, b);
            break;
        case 16:
            (a = this.F()) && this.ma.gp(this, a, b)
    }
};
d.Ys = function(a) {
    this.Bc(8, a)
};
d.gp = function(a) {
    this.Bc(16, a)
};
d.ml = function() {
    var a = this.Jc();
    return r(a) ? (a = ua(a, function(a) {
        return ia(a) && 1 == a.nodeType && (mi(a, "goog-menuitem-accel") || mi(a, "goog-menuitem-mnemonic-separator")) ? "" : me(a)
    }).join(""), Ga(a)) : dj.s.ml.call(this)
};
d.ai = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.Ds;
        b.Ds = null;
        if (c && ba(a.clientX) && qc(c, new C(a.clientX, a.clientY))) return
    }
    dj.s.ai.call(this, a)
};
d.Jg = function(a) {
    return a.keyCode == this.hs && this.Zf(a) ? !0 : dj.s.Jg.call(this, a)
};
d.$v = function() {
    return this.hs
};
ri("goog-menuitem", function() {
    return new dj(null)
});
dj.prototype.Al = function() {
    return this.zb & 16 ? "menuitemcheckbox" : this.zb & 8 ? "menuitemradio" : dj.s.Al.call(this)
};
dj.prototype.getParent = function() {
    return Q.prototype.getParent.call(this)
};
dj.prototype.zl = function() {
    return Q.prototype.zl.call(this)
};

function ej() {}
v(ej, wi);
ea(ej);
ej.prototype.X = function(a) {
    return a.pc().X("DIV", this.Ka())
};
ej.prototype.Bd = function() {};
ej.prototype.Ka = function() {
    return "goog-menuseparator"
};

function fj(a, b) {
    Q.call(this, null, a || ej.ne(), b);
    this.Bc(1, !1);
    this.Bc(2, !1);
    this.Bc(4, !1);
    this.Bc(32, !1);
    this.Ja = 1
}
v(fj, Q);
fj.prototype.Fb = function() {
    fj.s.Fb.call(this);
    var a = this.F();
    Zh(a, "separator")
};
ri("goog-menuseparator", function() {
    return new fj
});

function gj(a) {
    this.gq = a || "menu"
}
v(gj, ti);
ea(gj);
gj.prototype.Ka = function() {
    return "goog-menu"
};
gj.prototype.Cj = function(a) {
    gj.s.Cj.call(this, a);
    a = a.F();
    P(a, "haspopup", "true")
};
ri("goog-menuseparator", function() {
    return new fj
});

function hj(a, b) {
    Ni.call(this, Oi, b || gj.ne(), a);
    this.df(!1)
}
v(hj, Ni);
d = hj.prototype;
d.Jk = !0;
d.Nu = !1;
d.Ka = function() {
    return this.ma.Ka()
};
d.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.A()
};
d.yr = function(a) {
    return Uh(this, a)
};
d.setPosition = function(a, b) {
    var c = this.Y();
    c || kh(this.F(), !0);
    var e = this.F(),
        f = a;
    a = gh(e);
    f instanceof C && (b = f.y, f = f.x);
    var h = e.offsetLeft + (f - a.x);
    h instanceof C ? (f = h.x, b = h.y) : (f = h, b = e.offsetTop + (Number(b) - a.y));
    e.style.left = hh(f);
    e.style.top = hh(b);
    c || kh(this.F(), !1)
};
d.zr = function() {
    return this.Y() ? gh(this.F()) : null
};
d.oa = function(a, b, c) {
    (b = hj.s.oa.call(this, a, b)) && a && this.ya && this.Jk && this.Nb().focus();
    this.Ds = a && c && ba(c.clientX) ? new C(c.clientX, c.clientY) : null;
    return b
};
d.Tn = function(a) {
    this.Jk && this.Nb().focus();
    return hj.s.Tn.call(this, a)
};
d.mq = function(a) {
    return (this.Nu || a.isEnabled()) && a.Y() && !!(a.zb & 2)
};
d.Jg = function(a) {
    var b = hj.s.Jg.call(this, a);
    b || Sh(this, function(c) {
        !b && c.$v && c.hs == a.keyCode && (this.isEnabled() && this.Xb(c), b = c.yd(a))
    }, this);
    return b
};
d.kc = function(a) {
    hj.s.kc.call(this, a);
    if (a = Uh(this, a)) {
        var b = a.F();
        a = this.F() || Zd(document);
        var c = a || Zd(document);
        var e = gh(b),
            f = gh(c);
        if (!x || 9 <= Number(wb)) {
            k = dh(c, "borderLeftWidth");
            var h = dh(c, "borderRightWidth");
            l = dh(c, "borderTopWidth");
            m = dh(c, "borderBottomWidth");
            h = new ng(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k))
        } else {
            var k = oh(c, "borderLeft");
            h = oh(c, "borderRight");
            var l = oh(c, "borderTop"),
                m = oh(c, "borderBottom");
            h = new ng(l, h, m, k)
        }
        c == Zd(document) ? (k = e.x - c.scrollLeft, e = e.y - c.scrollTop, !x || 10 <= Number(wb) || (k += h.left, e += h.top)) : (k = e.x - f.x - h.left, e = e.y - f.y - h.top);
        b = jh(b);
        f = c.clientHeight - b.height;
        h = c.scrollLeft;
        l = c.scrollTop;
        h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0));
        l += Math.min(e, Math.max(e - f, 0));
        c = new C(h, l);
        a.scrollLeft = c.x;
        a.scrollTop = c.y
    }
};
w.ba = {};
w.ba.Wk = null;
w.ba.pr = null;
w.ba.show = function(a, b, c) {
    w.J.show(w.ba, c, null);
    if (b.length) {
        var e = w.ba.hm(b, c);
        cc(e, "action", w.ba.La);
        w.ba.Oc(e, a, c);
        setTimeout(function() {
            e.F().focus()
        }, 1);
        w.ba.Wk = null
    } else w.ba.La()
};
w.ba.hm = function(a, b) {
    var c = new hj;
    c.ff(b);
    for (var e = 0, f; f = a[e]; e++) {
        var h = new dj(f.text);
        h.ff(b);
        c.Qi(h, !0);
        h.dk(f.enabled);
        f.enabled && (cc(h, "action", f.eb), h.$h = function() {
            this.dispatchEvent("action")
        })
    }
    return c
};
w.ba.Oc = function(a, b, c) {
    var e = w.i.Sn();
    b = {
        top: b.clientY + e.top,
        bottom: b.clientY + e.top,
        left: b.clientX + e.left,
        right: b.clientX + e.left
    };
    w.ba.aj(a);
    var f = w.i.Bi.Ue(a);
    c && w.i.Bi.cq(e, b, f);
    w.J.Lo(e, b, f, c);
    a.F().focus()
};
w.ba.aj = function(a) {
    a.$(w.J.ka);
    var b = a.F();
    w.i.mb(b, "blocklyContextMenu");
    w.O(b, "contextmenu", null, w.i.Uw);
    a.Jk = !0;
    a.df(!0)
};
w.ba.La = function() {
    w.J.yj(w.ba);
    w.ba.Wk = null;
    w.ba.pr && w.Ma(w.ba.pr)
};
w.ba.Ok = function(a, b) {
    return function() {
        w.j.disable();
        try {
            var c = w.D.Qh(b, a.o),
                e = a.la();
            e.x = a.u ? e.x - w.Uc : e.x + w.Uc;
            e.y += 2 * w.Uc;
            c.moveBy(e.x, e.y)
        } finally {
            w.j.enable()
        }
        w.j.isEnabled() && !c.gb && w.j.V(new w.j.Ak(c));
        c.select()
    }
};
w.ba.Su = function(a) {
    var b = vc(a, !1).length,
        c = Jc(a);
    c && (b -= vc(c, !1).length);
    return {
        text: 1 == b ? w.g.DELETE_BLOCK : w.g.DELETE_X_BLOCKS.replace("%1", String(b)),
        enabled: !0,
        eb: function() {
            w.j.S(!0);
            a.A(!0, !0);
            w.j.S(!1)
        }
    }
};
w.ba.Uu = function(a) {
    return {
        enabled: !(u(a.Ob) ? !a.Ob() : !a.Ob),
        text: w.g.HELP,
        eb: function() {
            var b = u(a.Ob) ? a.Ob() : a.Ob;
            b && window.open(b)
        }
    }
};
w.ba.Tu = function(a) {
    var b = !0;
    vc(a, !1).length > dd(a.o) && (b = !1);
    return {
        text: w.g.DUPLICATE_BLOCK,
        enabled: b,
        eb: function() {
            w.lr(a)
        }
    }
};
w.ba.Ru = function(a) {
    var b = {
        enabled: !x
    };
    a.Ua ? (b.text = w.g.REMOVE_COMMENT, b.eb = function() {
        a.bh(null)
    }) : (b.text = w.g.ADD_COMMENT, b.eb = function() {
        a.bh("")
    });
    return b
};
w.ba.gv = function(a) {
    return {
        text: w.g.QA,
        enabled: !0,
        eb: function() {
            w.j.S(!0);
            a.A(!0, !0);
            w.j.S(!1)
        }
    }
};
w.ba.hv = function(a) {
    return {
        text: w.g.iz,
        enabled: !0,
        eb: function() {
            w.lr(a)
        }
    }
};
w.ba.VB = function(a, b) {
    var c = {
        enabled: !0
    };
    c.text = w.g.hy;
    c.eb = function() {
        var c = new vf(a, w.g.BB, 100, 100);
        if (!a.co)
            for (var f = a.w; f;) {
                if (-1 != (" " + (f.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                    a.co = f;
                    break
                }
                f = f.parentNode
            }
        f = a.co.getBoundingClientRect();
        f = new C(b.clientX - f.left, b.clientY - f.top);
        var h = w.i.vl(a.Oa);
        f = sc(f, h).scale(1 / a.scale);
        c.moveBy(f.x, f.y);
        a.R && (c.wc(), c.$(!1), c.select())
    };
    return c
};

function Kg(a, b, c) {
    this.w = w.i.B("g", {}, null);
    this.w.mf = "";
    this.kk = w.i.B("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.w);
    this.Dd = w.i.B("path", {
        "class": "blocklyPath"
    }, this.w);
    this.jg = w.i.B("path", {
        "class": "blocklyPathLight"
    }, this.w);
    this.Dd.hd = this;
    this.R = !1;
    this.Ce = w.i.Pf() && !!a.xb;
    w.C.yg(this.Dd);
    Kg.s.constructor.call(this, a, b, c);
    this.w.dataset && (this.w.dataset.id = this.id)
}
v(Kg, cd);
d = Kg.prototype;
d.height = 0;
d.width = 0;
d.Rc = null;
d.wc = function() {
    for (var a = 0, b; b = this.W[a]; a++) b.K();
    b = nf(this);
    for (a = 0; a < b.length; a++) Ee(b[a]);
    this.pf();
    wf(this);
    this.o.options.readOnly || this.En || w.O(this.ga(), "mousedown", this, this.Ze);
    this.En = !0;
    this.ga().parentNode || this.o.Oa.appendChild(this.ga())
};
d.select = function() {
    if (this.gb && this.getParent()) this.getParent().select();
    else if (w.selected != this) {
        var a = null;
        if (w.selected) {
            a = w.selected.id;
            w.j.disable();
            try {
                w.selected.ng()
            } finally {
                w.j.enable()
            }
        }
        a = new Dc(null, "selected", a, this.id);
        a.Dc = this.o.id;
        w.j.V(a);
        w.selected = this;
        this.Kh()
    }
};
d.ng = function() {
    if (w.selected == this) {
        var a = new Dc(null, "selected", this.id, null);
        a.Dc = this.o.id;
        w.j.V(a);
        w.selected = null;
        this.$g()
    }
};
d.dd = null;
d.Ua = null;
d.md = null;

function nf(a) {
    var b = [];
    a.dd && b.push(a.dd);
    a.Ua && b.push(a.Ua);
    a.md && b.push(a.md);
    return b
}
d.fh = function(a) {
    var b = this.Yf;
    if (a != b) {
        wg();
        Kg.s.fh.call(this, a);
        xg();
        var c = this.ga();
        if (!this.o.fo && c) {
            var e = this.la();
            a ? (a.ga().appendChild(c), a = this.la(), ef(this, a.x - e.x, a.y - e.y)) : b && w.selected != this && (this.o.Oa.appendChild(c), this.translate(e.x, e.y))
        }
    }
};
d.la = function() {
    var a = 0,
        b = 0,
        c = this.Ce ? this.o.xb.rc() : null,
        e = this.ga();
    if (e) {
        do {
            var f = w.i.tc(e);
            a += f.x;
            b += f.y;
            this.Ce && this.o.xb.fe.firstChild == e && (f = this.o.xb.Bl(), a += f.x, b += f.y);
            e = e.parentNode
        } while (e && e != this.o.Oa && e != c)
    }
    return new C(a, b)
};
d.moveBy = function(a, b) {
    var c = w.j.isEnabled();
    if (c) var e = new w.j.Fi(this);
    var f = this.la();
    this.translate(f.x + a, f.y + b);
    ef(this, a, b);
    c && (e.af(), w.j.V(e));
    yf(this.o)
};
d.translate = function(a, b) {
    this.ga().setAttribute("transform", "translate(" + a + "," + b + ")")
};
d.am = function() {
    if (this.Ce) {
        var a = this.la();
        w.i.removeAttribute(this.ga(), "transform");
        this.o.xb.lf(a.x, a.y);
        zf(this.o.xb, this.ga())
    }
};
d.ls = function(a) {
    this.Ce && (this.translate(a.x, a.y), this.o.xb.Ui(this.o.Oa))
};
d.$l = function(a) {
    this.Ce ? this.o.xb.lf(a.x, a.y) : (this.w.mf = "translate(" + a.x + "," + a.y + ")", this.w.setAttribute("transform", this.w.mf + this.w.jh))
};

function Sg(a) {
    if (a.o && !a.o.pb() && !a.getParent() && !a.rb) {
        var b = a.o.xd;
        if (b && b.Ex) {
            var c = b.up,
                e = c / 2,
                f = a.la();
            b = Math.round((f.x - e) / c) * c + e - f.x;
            c = Math.round((f.y - e) / c) * c + e - f.y;
            b = Math.round(b);
            c = Math.round(c);
            0 == b && 0 == c || a.moveBy(b, c)
        }
    }
}
d.Kn = function() {
    var a = this.la(),
        b = this.P ? L : 0,
        c = this.Gb();
    if (this.u) {
        var e = new C(a.x - (c.width - b), a.y);
        a = new C(a.x + b, a.y + c.height)
    } else e = new C(a.x - b, a.y), a = new C(a.x + c.width - b, a.y + c.height);
    return {
        jd: e,
        Fd: a
    }
};
d.fg = function(a) {
    if (this.ae != a) {
        for (var b = [], c = 0, e; e = this.W[c]; c++) b.push.apply(b, e.oa(!a));
        if (a) {
            e = nf(this);
            for (c = 0; c < e.length; c++) e[c].oa(!1);
            c = this.toString(w.At);
            M(O(this, "_TEMP_COLLAPSED_INPUT"), c).K()
        } else this.yb("_TEMP_COLLAPSED_INPUT"), this.xe(null);
        Kg.s.fg.call(this, a);
        b.length || (b[0] = this);
        if (this.R)
            for (c = 0; a = b[c]; c++) a.$()
    }
};
d.Bp = function(a, b) {
    for (var c = [], e = 0, f; f = this.W[e]; e++) {
        for (var h = 0, k; k = f.Ia[h]; h++) k instanceof ij && c.push(k);
        f.connection && (f = I(f.connection)) && c.push(f)
    }
    a = c.indexOf(a); - 1 == a && (a = b ? -1 : c.length);
    (c = c[b ? a + 1 : a - 1]) ? c instanceof ph ? c.ze() : c.Bp(null, b): (c = this.getParent()) && c.Bp(this, b)
};
d.Ze = function(a) {
    var b = this.o && this.o.me(a);
    b && (Rf(b, this), b.Nc = a)
};
d.xi = function(a) {
    if (!this.o.options.readOnly && this.contextMenu) {
        var b = this,
            c = [];
        if (this.fc() && this.se() && !b.rb) {
            c.push(w.ba.Tu(b));
            He(this) && !this.ae && this.o.options.Wi && c.push(w.ba.Ru(b));
            if (!this.ae)
                for (var e = 1; e < this.W.length; e++)
                    if (this.W[e - 1].type != w.Sa && this.W[e].type != w.Sa) {
                        e = {
                            enabled: !0
                        };
                        var f = bh(this);
                        e.text = f ? w.g.EXTERNAL_INPUTS : w.g.INLINE_INPUTS;
                        e.eb = function() {
                            b.hg(!f)
                        };
                        c.push(e);
                        break
                    }
            this.o.options.collapse && (this.ae ? (e = {
                    enabled: !0
                }, e.text = w.g.EXPAND_BLOCK, e.eb = function() {
                    b.fg(!1)
                },
                c.push(e)) : (e = {
                enabled: !0
            }, e.text = w.g.COLLAPSE_BLOCK, e.eb = function() {
                b.fg(!0)
            }, c.push(e)));
            this.o.options.disable && (e = {
                text: this.disabled ? w.g.ENABLE_BLOCK : w.g.DISABLE_BLOCK,
                enabled: !Eh(this),
                eb: function() {
                    b.Cd(!b.disabled)
                }
            }, c.push(e));
            c.push(w.ba.Su(b))
        }
        c.push(w.ba.Uu(b));
        this.Oe && this.Oe(c);
        w.ba.show(a, c, this.u);
        w.ba.Wk = this
    }
};

function ef(a, b, c) {
    if (a.R) {
        for (var e = a.le(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c);
        e = nf(a);
        for (f = 0; f < e.length; f++) Fe(e[f]);
        for (f = 0; f < a.Ke.length; f++) ef(a.Ke[f], b, c)
    }
}
d.gg = function(a) {
    if (a) {
        var b = this.ga();
        b.mf = "";
        b.jh = "";
        w.fl = w.fl.concat(this.le(!0));
        w.i.mb(this.w, "blocklyDragging")
    } else w.fl = [], w.i.Qb(this.w, "blocklyDragging");
    for (b = 0; b < this.Ke.length; b++) this.Ke[b].gg(a)
};
d.eh = function(a) {
    Kg.s.eh.call(this, a);
    wf(this)
};
d.ip = function(a) {
    Kg.s.ip.call(this, a);
    a = nf(this);
    for (var b = 0; b < a.length; b++) a[b].qf()
};
d.np = function(a) {
    Kg.s.np.call(this, a);
    this.pf()
};
d.ga = function() {
    return this.w
};
d.A = function(a, b) {
    if (this.o) {
        w.C.La();
        wg();
        var c = this.o;
        if (w.selected == this) {
            this.ng();
            var e = this.o;
            e.Db && e.Db.cancel()
        }
        w.ba.Wk == this && w.ba.La();
        b && this.R && (Ce(this, a), w.Ha.Iv(this));
        this.R = !1;
        if (this.Rc) {
            for (var f in this.Rc) clearTimeout(this.Rc[f]);
            this.Rc = null
        }
        w.j.disable();
        try {
            var h = nf(this);
            for (b = 0; b < h.length; b++) h[b].A()
        } finally {
            w.j.enable()
        }
        Kg.s.A.call(this, a);
        F(this.w);
        yf(c);
        this.kk = this.jg = this.Dd = this.w = null;
        xg()
    }
};
d.pf = function() {
    if (!this.disabled) {
        var a = this.ce,
            b = jj(a);
        if (this.gb) b = kj([255, 255, 255], b, .6), a = lj(b), this.jg.style.display = "none", this.kk.setAttribute("fill", a);
        else {
            this.jg.style.display = "";
            var c = lj(kj([255, 255, 255], b, .3));
            b = lj(kj([0, 0, 0], b, .2));
            this.jg.setAttribute("stroke", c);
            this.kk.setAttribute("fill", b)
        }
        this.Dd.setAttribute("fill", a);
        a = nf(this);
        for (c = 0; c < a.length; c++) a[c].pf();
        for (a = 0; c = this.W[a]; a++) {
            b = 0;
            for (var e; e = c.Ia[b]; b++) e.kj()
        }
    }
};

function kf(a) {
    a.disabled || Eh(a) ? w.i.mb(a.w, "blocklyDisabled") && a.Dd.setAttribute("fill", "url(#" + a.o.options.ej + ")") : w.i.Qb(a.w, "blocklyDisabled") && a.pf();
    a = a.Ef(!1);
    for (var b = 0, c; c = a[b]; b++) kf(c)
}
d.ql = function() {
    return this.Ua ? this.Ua.Hb().replace(/\s+$/, "").replace(/ +\n/g, "\n") : ""
};
d.bh = function(a) {
    var b = !1;
    p(a) ? (this.Ua || (this.Ua = new Ge(this), b = !0), this.Ua.Sb(a)) : this.Ua && (this.Ua.A(), b = !0);
    b && this.R && (this.$(), this.ob())
};
d.xe = function(a, b) {
    this.Rc || (this.Rc = Object.create(null));
    var c = b || "";
    if (c) this.Rc[c] && (clearTimeout(this.Rc[c]), delete this.Rc[c]);
    else
        for (var e in this.Rc) clearTimeout(this.Rc[e]), delete this.Rc[e];
    if (this.o.pb()) {
        var f = this;
        this.Rc[c] = setTimeout(function() {
            f.o && (delete f.Rc[c], f.xe(a, c))
        }, 100)
    } else {
        this.rb && (a = null);
        b = Dh(this);
        for (e = null; b;) b.isCollapsed() && (e = b), b = Dh(b);
        e && e.xe(a, "collapsed " + this.id + " " + c);
        b = !1;
        p(a) ? (this.md || (this.md = new Ie(this), b = !0), this.md.Sb(a, c)) : this.md && !c ? (this.md.A(),
            b = !0) : this.md && (b = this.md.Hb(), this.md.Sb("", c), (e = this.md.Hb()) || this.md.A(), b = b != e);
        b && this.R && (this.$(), this.ob())
    }
};
d.ek = function(a) {
    this.dd && this.dd !== a && this.dd.A();
    a && (a.U = this, this.dd = a, Ee(a))
};
d.Cd = function(a) {
    this.disabled != a && (Kg.s.Cd.call(this, a), this.R && kf(this))
};
d.Xb = function(a) {
    this.R && (a ? (this.Dd.setAttribute("filter", "url(#" + this.o.options.nr + ")"), this.jg.style.display = "none") : (w.i.removeAttribute(this.Dd, "filter"), delete this.jg.style.display))
};
d.Kh = function() {
    w.i.mb(this.w, "blocklySelected")
};
d.$g = function() {
    w.i.Qb(this.w, "blocklySelected")
};
d.ck = function(a) {
    a ? w.i.mb(this.w, "blocklyDraggingDelete") : w.i.Qb(this.w, "blocklyDraggingDelete")
};
d.Na = function(a) {
    Kg.s.Na.call(this, a);
    this.R && this.pf()
};

function tf(a) {
    do {
        var b = a.ga();
        b.parentNode.appendChild(b);
        a = a.getParent()
    } while (a)
}
d.Ac = function(a, b) {
    Kg.s.Ac.call(this, a, b);
    this.R && (this.$(), this.ob())
};
d.zc = function(a, b) {
    Kg.s.zc.call(this, a, b);
    this.R && (this.$(), this.ob())
};
d.ef = function(a, b) {
    Kg.s.ef.call(this, a, b);
    this.R && (this.$(), this.ob())
};
d.hg = function(a) {
    Kg.s.hg.call(this, a);
    this.R && (this.$(), this.ob())
};
d.yb = function(a, b) {
    Kg.s.yb.call(this, a, b);
    this.R && (this.$(), this.ob())
};
d.to = function(a, b) {
    Kg.s.to.call(this, a, b);
    this.R && (this.$(), this.ob())
};
d.Yd = function(a, b) {
    a = Kg.s.Yd.call(this, a, b);
    this.R && (this.$(), this.ob());
    return a
};
d.le = function(a) {
    var b = [];
    if (a || this.R)
        if (this.P && b.push(this.P), this.Z && b.push(this.Z), this.M && b.push(this.M), a || !this.ae) {
            a = 0;
            for (var c; c = this.W[a]; a++) c.connection && b.push(c.connection)
        }
    return b
};
d.Mj = function(a) {
    return new Ze(this, a)
};
d.ob = function() {
    if (this.o && !this.o.pb()) {
        var a = af(this);
        if (!a.rb)
            for (var b = this.le(!1), c = 0, e; e = b[c]; c++) {
                e.isConnected() && Pe(e) && I(e).ob();
                for (var f = e.ps(w.Uc), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || af(k.v) != a && (Pe(e) ? Me(k, e) : Me(e, k))
            }
    }
};

function uf(a) {
    var b = w.j.rc();
    setTimeout(function() {
        w.j.S(b);
        Sg(a);
        w.j.S(!1)
    }, w.zk / 2);
    setTimeout(function() {
        w.j.S(b);
        a.ob();
        w.j.S(!1)
    }, w.zk)
};
var L = 8,
    mj = 7.5 * (1 - Math.SQRT1_2) + .5,
    nj = 8.5 * (1 - Math.SQRT1_2) - .5,
    ff = "v 5 c 0,10 -" + L + ",-8 -" + L + ",7.5 s " + L + ",-2.5 " + L + ",7.5",
    oj = "v 6.5 m -" + .97 * L + ",3 q -" + .05 * L + ",10 " + .3 * L + ",9.5 m " + .67 * L + ",-1.9 v 1.4",
    pj = "m " + mj + "," + mj,
    qj = "a 8,8 0 0,0 " + (-nj - .5) + "," + (8 - nj),
    rj = "a 8.5,8.5 0 0,0 " + (8 - nj) + "," + (nj + .5);
Kg.prototype.Gb = function() {
    var a = this.height,
        b = this.width,
        c = Jc(this);
    c ? (c = c.Gb(), a += c.height - 4, b = Math.max(b, c.width)) : this.M || this.P || (a += 2);
    return {
        height: a,
        width: b
    }
};
Kg.prototype.$ = function(a) {
    wg();
    this.R = !0;
    var b = 10;
    this.u && (b = -b);
    for (var c = nf(this), e = 0; e < c.length; e++) {
        var f = c[e];
        if (f.yq && f.U.isCollapsed()) f.vc.setAttribute("display", "none");
        else {
            f.vc.setAttribute("display", "block");
            var h = f.Qm;
            f.U.u && (b -= h);
            f.vc.setAttribute("transform", "translate(" + b + ",5)");
            Fe(f);
            b = f.U.u ? b - 10 : b + (h + 10)
        }
    }
    var k = b += this.u ? 10 : -10,
        l = this.W;
    c = [];
    c.Mb = k + 20;
    if (this.Z || this.M) c.Mb = Math.max(c.Mb, 40);
    f = e = 0;
    for (var m = h = !1, n = !1, q = void 0, t = bh(this) && !this.isCollapsed(), z = 0, y; y = l[z]; z++)
        if (y.Y()) {
            if (t &&
                q && q != w.Sa && y.type != w.Sa) var B = c[c.length - 1];
            else q = y.type, B = [], B.type = t && y.type != w.Sa ? -1 : y.type, B.height = 0, c.push(B);
            B.push(y);
            y.ag = 25;
            y.Ub = t && y.type == w.kb ? L + 12.5 : 0;
            if (y.connection && y.connection.isConnected()) {
                var Ma = I(y.connection).Gb();
                y.ag = Math.max(y.ag, Ma.height);
                y.Ub = Math.max(y.Ub, Ma.width)
            }
            t || z != l.length - 1 ? !t && y.type == w.kb && l[z + 1] && l[z + 1].type == w.Sa && y.ag-- : y.ag--;
            B.height = Math.max(B.height, y.ag);
            y.Jd = 0;
            1 == c.length && (y.Jd += this.u ? -k : k);
            Ma = !1;
            for (var Vc = 0, Xa; Xa = y.Ia[Vc]; Vc++) {
                0 != Vc && (y.Jd +=
                    10);
                var Fd = Xa.Ue();
                Xa.Ub = Fd.width;
                Xa.km = Ma && Xa.tg ? 10 : 0;
                y.Jd += Xa.Ub + Xa.km;
                B.height = Math.max(B.height, Fd.height);
                Ma = Xa.tg
            } - 1 != B.type && (B.type == w.Sa ? (m = !0, f = Math.max(f, y.Jd)) : (B.type == w.kb ? h = !0 : B.type == w.Ee && (n = !0), e = Math.max(e, y.Jd)))
        }
    for (k = 0; B = c[k]; k++)
        if (B.kt = !1, -1 == B.type)
            for (l = 0; y = B[l]; l++)
                if (y.type == w.kb) {
                    B.height += 10;
                    B.kt = !0;
                    break
                }
    c.zm = 20 + f;
    m && (c.Mb = Math.max(c.Mb, c.zm + 30));
    h ? c.Mb = Math.max(c.Mb, e + 20 + L) : n && (c.Mb = Math.max(c.Mb, e + 20));
    c.tw = h;
    c.NB = m;
    c.MB = n;
    f = b;
    this.dt = !1;
    this.height = 0;
    this.P ? this.vp =
        this.xm = !0 : (this.vp = this.xm = !1, this.Z && (b = I(this.Z)) && Jc(b) == this && (this.xm = !0), Jc(this) && (this.vp = !0));
    h = [];
    m = [];
    b = [];
    e = [];
    n = c.Mb;
    this.xm ? (h.push("m 0,0"), b.push("m 0.5,0.5"), this.dt && (h.push("c 30,-15 70,-15 100,0"), b.push(this.u ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (h.push("m 0,8"), b.push(this.u ? pj : "m 0.5,7.5"), h.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.Z && (h.push("H", 15), b.push("H", 15), h.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"),
        cf(this.Z, this.u ? -30 : 30, 0));
    h.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    for (y = n = 0; B = c[y]; y++) {
        q = 10;
        0 == y && (q += this.u ? -f : f);
        b.push("M", c.Mb - .5 + "," + (n + .5));
        if (this.isCollapsed()) k = B[0], t = n, sj(this, k.Ia, q, t), h.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), k = B.height - 20, h.push("v", k), this.u && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", k - .7)), this.width += 15;
        else if (-1 == B.type) {
            for (l = 0; k = B[l]; l++) t = n, B.kt && (t += 5), q = sj(this, k.Ia, q, t), k.type != w.Ee && (q += k.Ub + 10), k.type == w.kb && (m.push("M", q -
                10 + "," + (n + 5)), m.push("h", L - 2 - k.Ub), m.push(ff), m.push("v", k.ag + 1 - 20), m.push("h", k.Ub + 2 - L), m.push("z"), this.u ? (e.push("M", q - 10 - 2.5 + L - k.Ub + "," + (n + 5 + .5)), e.push(oj), e.push("v", k.ag - 20 + 2.5), e.push("h", k.Ub - L + 2)) : (e.push("M", q - 10 + .5 + "," + (n + 5 + .5)), e.push("v", k.ag + 1), e.push("h", L - 2 - k.Ub), e.push("M", q - k.Ub - 10 + .9 + "," + (n + 5 + 20 - .7)), e.push("l", .46 * L + ",-2.1")), t = this.u ? -q - L + 10 + k.Ub + 1 : q + L - 10 - k.Ub - 1, z = n + 5 + 1, cf(k.connection, t, z));
            q = Math.max(q, c.Mb);
            this.width = Math.max(this.width, q);
            h.push("H", q);
            b.push("H", q - .5);
            h.push("v", B.height);
            this.u && b.push("v", B.height - 1)
        } else B.type == w.kb ? (k = B[0], t = n, k.align != w.Ei && (l = c.Mb - k.Jd - L - 20, k.align == w.xh ? q += l : k.align == w.xk && (q += l / 2)), sj(this, k.Ia, q, t), h.push(ff), l = B.height - 20, h.push("v", l), this.u ? (b.push(oj), b.push("v", l + .5)) : (b.push("M", c.Mb - 5 + "," + (n + 20 - .7)), b.push("l", .46 * L + ",-2.1")), t = this.u ? -c.Mb - 1 : c.Mb + 1, cf(k.connection, t, n), k.connection.isConnected() && (this.width = Math.max(this.width, c.Mb + I(k.connection).Gb().width - L + 1))) : B.type == w.Ee ? (k = B[0], t = n, k.align != w.Ei && (l =
            c.Mb - k.Jd - 20, c.tw && (l -= L), k.align == w.xh ? q += l : k.align == w.xk && (q += l / 2)), sj(this, k.Ia, q, t), h.push("v", B.height), this.u && b.push("v", B.height - 1)) : B.type == w.Sa && (k = B[0], 0 == y && (h.push("v", 10), this.u && b.push("v", 9), n += 10), t = n, k.align != w.Ei && (l = c.zm - k.Jd - 20, k.align == w.xh ? q += l : k.align == w.xk && (q += l / 2)), sj(this, k.Ia, q, t), q = c.zm + 30, h.push("H", q), h.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), h.push("v", B.height - 16), h.push("a 8,8 0 0,0 8,8"), h.push("H", c.Mb), this.u ? (b.push("M", q - 30 + nj + "," + (n + nj)), b.push(qj),
            b.push("v", B.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) : (b.push("M", q - 30 + nj + "," + (n + B.height - nj)), b.push(rj)), b.push("H", c.Mb - .5), t = this.u ? -q : q + 1, cf(k.connection, t, n + 1), k.connection.isConnected() && (this.width = Math.max(this.width, c.zm + I(k.connection).Gb().width)), y == c.length - 1 || c[y + 1].type == w.Sa) && (h.push("v", 10), this.u && b.push("v", 9), n += 10);
        n += B.height
    }
    c.length || (n = 25, h.push("V", n), this.u && b.push("V", n - 1));
    c = n;
    this.height += c + 1;
    this.M && (h.push("H", 30 + (this.u ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), cf(this.M,
        this.u ? -30 : 30, c + 1), this.height += 4);
    this.vp ? (h.push("H 0"), this.u || b.push("M", "0.5," + (c - .5))) : (h.push("H", 8), h.push("a", "8,8 0 0,1 -8,-8"), this.u || (b.push("M", mj + "," + (c - mj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (c - 8))));
    this.P ? (cf(this.P, 0, 0), h.push("V", 20), h.push("c 0,-10 -" + L + ",8 -" + L + ",-7.5 s " + L + ",2.5 " + L + ",-7.5"), this.u ? (b.push("M", -.25 * L + ",8.4"), b.push("l", -.45 * L + ",-2.1")) : (b.push("V", 18.5), b.push("m", -.92 * L + ",-0.5 q " + -.19 * L + ",-5.5 0,-11"), b.push("m", .92 * L + ",1 V 0.5 H 1")), this.width += L) : this.u ||
        (this.xm ? b.push("V", .5) : b.push("V", 8));
    h.push("z");
    c = h.join(" ") + "\n" + m.join(" ");
    this.Dd.setAttribute("d", c);
    this.kk.setAttribute("d", c);
    c = b.join(" ") + "\n" + e.join(" ");
    this.jg.setAttribute("d", c);
    this.u && (this.Dd.setAttribute("transform", "scale(-1 1)"), this.jg.setAttribute("transform", "scale(-1 1)"), this.kk.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    c = this.la();
    this.Z && bf(this.Z, c);
    this.P && bf(this.P, c);
    for (b = 0; b < this.W.length; b++)
        if (e = this.W[b].connection) bf(e, c), e.isConnected() && df(e);
    this.M && (bf(this.M, c), this.M.isConnected() && df(this.M));
    !1 !== a && ((a = this.getParent()) ? a.$(!0) : yf(this.o));
    xg()
};

function sj(a, b, c, e) {
    e += 5;
    a.u && (c = -c);
    for (var f = 0, h; h = b[f]; f++) {
        var k = h.ga();
        k && (a.u ? (c -= h.km + h.Ub, k.setAttribute("transform", "translate(" + c + "," + e + ")"), h.Ub && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + h.km) + "," + e + ")"), h.Ub && (c += h.km + h.Ub + 10)))
    }
    return a.u ? -c : c
};
w.g = {};

function ij(a, b) {
    ij.s.constructor.call(this, a, b)
}
v(ij, ph);
ij.ha = function(a) {
    var b = w.i.jc(a.text);
    b = new ij(b, a["class"]);
    "boolean" === typeof a.spellcheck && (b.wm = a.spellcheck);
    return b
};
var tj = null;
d = ij.prototype;
d.Ck = "text";
d.wm = !0;
d.A = function() {
    w.J.yj(this);
    ij.s.A.call(this)
};
d.setValue = function(a) {
    if (null !== a) {
        if (this.v) {
            var b = Ae(this, a);
            null !== b && (a = b)
        }
        ph.prototype.setValue.call(this, a)
    }
};
d.Sb = function(a) {
    null !== a && (a = String(a), a !== this.va && (this.v && w.j.isEnabled() && w.j.V(new w.j.Ec(this.v, "field", this.name, this.va, a)), ph.prototype.Sb.call(this, a)))
};
d.ze = function(a) {
    this.m = this.v.o;
    a = a || !1;
    if (!a && (lb || nb || pb)) uj(this);
    else {
        w.J.show(this, this.v.u, vj(this));
        var b = w.J.ka,
            c = E("INPUT", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.wm);
        var e = 11 * this.m.scale + "pt";
        b.style.fontSize = e;
        c.style.fontSize = e;
        tj = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.va;
        c.ts = null;
        wj(this);
        this.mm();
        a || (c.focus(), c.select());
        c.bx = w.O(c, "keydown", this, this.ax);
        c.hx = w.O(c, "keyup", this, this.ws);
        c.gx = w.O(c, "keypress", this, this.ws);
        c.Cs = this.mm.bind(this);
        this.m.Vc(c.Cs)
    }
};

function uj(a) {
    w.prompt(w.g.CHANGE_VALUE_TITLE, a.va, function(b) {
        a.v && (b = Ae(a, b));
        a.setValue(b)
    })
}
d.ax = function(a) {
    var b = tj;
    13 == a.keyCode ? w.J.La() : 27 == a.keyCode ? (b.value = b.defaultValue, w.J.La()) : 9 == a.keyCode && (w.J.La(), this.v.Bp(this, !a.shiftKey), a.preventDefault())
};
d.ws = function() {
    var a = tj,
        b = a.value;
    b !== a.ts ? (a.ts = b, this.setValue(b), wj(this)) : A && this.v.$();
    this.mm();
    w.oh(this.v.o)
};

function wj(a) {
    var b = !0,
        c = tj;
    a.v && (b = Ae(a, c.value));
    null === b ? w.i.mb(c, "blocklyInvalidInput") : w.i.Qb(c, "blocklyInvalidInput")
}
d.mm = function() {
    var a = w.J.ka,
        b = xh(this);
    a.style.width = b.right - b.left + "px";
    a.style.height = b.bottom - b.top + "px";
    b = new C(this.v.u ? b.right - a.offsetWidth : b.left, b.top);
    b.y += 1;
    kb && w.J.ka.style.top && (--b.x, --b.y);
    A && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px"
};

function vj(a) {
    return function() {
        var b = tj,
            c = tj,
            e = c.value;
        a.v && (e = Ae(a, e), null === e ? e = c.defaultValue : a.Bo && a.Bo(e));
        a.Sb(e);
        a.v.R && a.v.$();
        w.Ma(b.bx);
        w.Ma(b.hx);
        w.Ma(b.gx);
        a.m.bf(b.Cs);
        tj = null;
        w.j.S(!1);
        b = w.J.ka.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = ""
    }
}
rh("field_input", ij);

function xj(a, b) {
    this.Ap = w.i.B("tspan", {}, null);
    this.Ap.appendChild(document.createTextNode("\u00b0"));
    a = a && !isNaN(a) ? String(a) : "0";
    xj.s.constructor.call(this, a, b)
}
v(xj, ij);
xj.ha = function(a) {
    return new xj(a.angle)
};
d = xj.prototype;
d.we = function() {
    this.Qa ? (this.Aa.textContent = vh(this), this.v.u ? this.Aa.insertBefore(this.Ap, this.Aa.firstChild) : this.Aa.appendChild(this.Ap), this.vk()) : this.sa.width = 0
};
d.Oh = function() {
    var a = this;
    return function() {
        xj.s.Oh.call(a)();
        a.lj = null;
        a.wq && w.Ma(a.wq);
        a.ns && w.Ma(a.ns);
        a.os && w.Ma(a.os)
    }
};
d.ze = function() {
    xj.s.ze.call(this, lb || nb || pb);
    var a = w.J.ka;
    if (a.firstChild) {
        a = w.i.B("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:html": "http://www.w3.org/1999/xhtml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: "1.1",
            height: "100px",
            width: "100px"
        }, a);
        var b = w.i.B("circle", {
            cx: 50,
            cy: 50,
            r: 49,
            "class": "blocklyAngleCircle"
        }, a);
        this.lj = w.i.B("path", {
            "class": "blocklyAngleGauge"
        }, a);
        this.Zr = w.i.B("line", {
            x1: 50,
            y1: 50,
            "class": "blocklyAngleLine"
        }, a);
        for (var c = 0; 360 > c; c += 15) w.i.B("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ? 10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        this.wq = w.Gc(a, "click", this, w.J.La);
        this.ns = w.Gc(b, "mousemove", this, this.Bs);
        this.os = w.Gc(this.lj, "mousemove", this, this.Bs);
        yj(this)
    }
};
d.Bs = function(a) {
    var b = this.lj.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = Ae(this, b), tj.value = b, this.setValue(b), wj(this), this.mm())
};
d.Sb = function(a) {
    xj.s.Sb.call(this, a);
    this.Aa && (yj(this), this.sa.width = 0)
};

function yj(a) {
    if (a.lj) {
        var b = (Number(a.Hb()) + 0) * Math.PI / 180,
            c = ["M ", 50, ",", 50],
            e = 50,
            f = 50;
        if (!isNaN(b)) {
            var h = 0 * Math.PI / 180,
                k = 49 * Math.cos(h),
                l = -49 * Math.sin(h);
            e += 49 * Math.cos(b);
            f -= 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - h) / Math.PI) % 2), " ", Number(!1), " ", e, ",", f, " z")
        }
        a.lj.setAttribute("d", c.join(""));
        a.Zr.setAttribute("x2", e);
        a.Zr.setAttribute("y2", f)
    }
}
d.hn = function(a) {
    if (null === a) return null;
    a = parseFloat(a || 0);
    if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360);
    return String(a)
};
rh("field_angle", xj);

function zj(a, b) {
    zj.s.constructor.call(this, "", b);
    this.setValue(a)
}
v(zj, ph);
zj.ha = function(a) {
    return new zj(a.checked ? "TRUE" : "FALSE")
};
d = zj.prototype;
d.Ck = "default";
d.K = function() {
    this.Wa || (zj.s.K.call(this), this.Pk = w.i.B("text", {
        "class": "blocklyText blocklyCheckbox",
        x: -3,
        y: 14
    }, this.Wa), this.Pk.appendChild(document.createTextNode("\u2713")), this.Pk.style.display = this.Ja ? "block" : "none")
};
d.getValue = function() {
    return String(this.Ja).toUpperCase()
};
d.setValue = function(a) {
    a = "string" == typeof a ? "TRUE" == a.toUpperCase() : !!a;
    this.Ja !== a && (this.v && w.j.isEnabled() && w.j.V(new w.j.Ec(this.v, "field", this.name, this.Ja, a)), this.Ja = a, this.Pk && (this.Pk.style.display = a ? "block" : "none"))
};
d.ze = function() {
    var a = !this.Ja;
    this.v && (a = Ae(this, a));
    null !== a && this.setValue(String(a).toUpperCase())
};
rh("field_checkbox", zj);
var Aj = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function Bj(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (Cj.test(c)) return b.Wn = Dj(c), b.type = "hex", b;
    a: {
        var e = a.match(Ej);
        if (e) {
            c = Number(e[1]);
            var f = Number(e[2]);
            e = Number(e[3]);
            if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= e && 255 >= e) {
                c = [c, f, e];
                break a
            }
        }
        c = []
    }
    if (c.length) return b.Wn = lj(c), b.type = "rgb", b;
    if (Aj && (c = Aj[a.toLowerCase()])) return b.Wn = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}
var Fj = /#(.)(.)(.)/;

function Dj(a) {
    if (!Cj.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Fj, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function jj(a) {
    a = Dj(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function lj(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Gj(b.toString(16));
    c = Gj(c.toString(16));
    a = Gj(a.toString(16));
    return "#" + b + c + a
}
var Cj = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Ej = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Gj(a) {
    return 1 == a.length ? "0" + a : a
}

function kj(a, b, c) {
    c = Math.min(Math.max(c, 0), 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};
var Hj = "StopIteration" in g ? g.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function Ij() {}
Ij.prototype.next = function() {
    throw Hj;
};
Ij.prototype.$p = function() {
    return this
};

function Jj(a) {
    if (a instanceof Ij) return a;
    if ("function" == typeof a.$p) return a.$p();
    if (ha(a)) {
        var b = 0,
            c = new Ij;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw Hj;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function Kj(a) {
    try {
        return Jj(a).next()
    } catch (b) {
        if (b != Hj) throw b;
        return null
    }
};

function Lj(a, b, c, e, f) {
    this.ed = !!b;
    this.node = null;
    this.hf = 0;
    this.ft = !1;
    this.Eq = !c;
    a && this.setPosition(a, e);
    this.depth = void 0 != f ? f : this.hf || 0;
    this.ed && (this.depth *= -1)
}
v(Lj, Ij);
Lj.prototype.setPosition = function(a, b, c) {
    if (this.node = a) this.hf = ba(b) ? b : 1 != this.node.nodeType ? 0 : this.ed ? -1 : 1;
    ba(c) && (this.depth = c)
};
Lj.prototype.clone = function() {
    return new Lj(this.node, this.ed, !this.Eq, this.hf, this.depth)
};
Lj.prototype.next = function() {
    if (this.ft) {
        if (!this.node || this.Eq && 0 == this.depth) throw Hj;
        var a = this.node;
        var b = this.ed ? -1 : 1;
        if (this.hf == b) {
            var c = this.ed ? a.lastChild : a.firstChild;
            c ? this.setPosition(c) : this.setPosition(a, -1 * b)
        } else(c = this.ed ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
        this.depth += this.hf * (this.ed ? -1 : 1)
    } else this.ft = !0;
    a = this.node;
    if (!this.node) throw Hj;
    return a
};
Lj.prototype.splice = function(a) {
    var b = this.node,
        c = this.ed ? 1 : -1;
    this.hf == c && (this.hf = -1 * c, this.depth += this.hf * (this.ed ? -1 : 1));
    this.ed = !this.ed;
    Lj.prototype.next.call(this);
    this.ed = !this.ed;
    c = ha(arguments[0]) ? arguments[0] : arguments;
    for (var e = c.length - 1; 0 <= e; e--) de(c[e], b);
    F(b)
};

function Mj(a, b, c, e) {
    Lj.call(this, a, b, c, null, e)
}
v(Mj, Lj);
Mj.prototype.next = function() {
    do Mj.s.next.call(this); while (-1 == this.hf);
    return this.node
};

function Nj() {}
v(Nj, wi);
ea(Nj);
var Oj = 0;
Nj.prototype.X = function(a) {
    var b = this.mj(a);
    a = a.pc().X("DIV", b, Pj(this, a.Jc(), a.Ue(), a.pc()));
    Zh(a, "grid");
    return a
};

function Pj(a, b, c, e) {
    for (var f = [], h = 0, k = 0; h < c.height; h++) {
        for (var l = [], m = 0; m < c.width; m++) {
            var n = b && b[k++];
            l.push(Qj(a, n, e))
        }
        f.push(Rj(a, l, e))
    }
    return a.Gq(f, e)
}
Nj.prototype.Gq = function(a, b) {
    a = b.X("TABLE", this.Ka() + "-table", b.X("TBODY", this.Ka() + "-body", a));
    a.cellSpacing = "0";
    a.cellPadding = "0";
    return a
};

function Rj(a, b, c) {
    a = c.X("TR", a.Ka() + "-row", b);
    Zh(a, "row");
    return a
}

function Qj(a, b, c) {
    a = c.X("TD", {
        "class": a.Ka() + "-cell",
        id: a.Ka() + "-cell-" + Oj++
    }, b);
    Zh(a, "gridcell");
    P(a, "selected", !1);
    if (!ke(a) && !$h(a, "label")) {
        var e;
        b = new Mj(a);
        for (c = ""; !c && (e = Kj(b));) 1 == e.nodeType && (c = $h(e, "label") || e.title);
        (e = c) && P(a, "label", e)
    }
    return a
}
Nj.prototype.Bd = function(a, b) {
    if (a) {
        var c = Ud(this.Ka() + "-body", a)[0];
        if (c) {
            var e = 0;
            sa(c.rows, function(a) {
                sa(a.cells, function(a) {
                    ce(a);
                    if (b) {
                        var c = b[e++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (e < b.length) {
                for (var f = [], h = Rd(a), k = c.rows[0].cells.length; e < b.length;) {
                    var l = b[e++];
                    f.push(Qj(this, l, h));
                    f.length == k && (l = Rj(this, f, h), c.appendChild(l), f.length = 0)
                }
                if (0 < f.length) {
                    for (; f.length < k;) f.push(Qj(this, "", h));
                    l = Rj(this, f, h);
                    c.appendChild(l)
                }
            }
        }
        mh(a, !0, kb)
    }
};

function Sj(a, b, c) {
    for (b = b.F(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && mi(c, a.Ka() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return null
}
Nj.prototype.Ka = function() {
    return "goog-palette"
};

function Tj(a) {
    lg.call(this);
    this.gi = [];
    Uj(this, a)
}
v(Tj, lg);
d = Tj.prototype;
d.sb = null;
d.bp = null;
d.yr = function(a) {
    return this.gi[a] || null
};

function Uj(a, b) {
    b && (sa(b, function(a) {
        this.ak(a, !1)
    }, a), Ba(a.gi, b))
}
d.removeItem = function(a) {
    a && ya(this.gi, a) && a == this.sb && (this.sb = null, this.dispatchEvent("select"))
};
d.oe = function() {
    return this.sb
};
d.fd = function(a) {
    a != this.sb && (this.ak(this.sb, !1), this.sb = a, this.ak(a, !0));
    this.dispatchEvent("select")
};
d.pj = function() {
    var a = this.sb;
    return a ? ra(this.gi, a) : -1
};
d.fk = function(a) {
    this.fd(this.yr(a))
};
d.clear = function() {
    var a = this.gi;
    if (!r(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.sb = null
};
d.Va = function() {
    Tj.s.Va.call(this);
    delete this.gi;
    this.sb = null
};
d.ak = function(a, b) {
    a && ("function" == typeof this.bp ? this.bp(a, b) : "function" == typeof a.lp && a.lp(b))
};

function Vj(a, b, c) {
    Q.call(this, a, b || Nj.ne(), c);
    this.Zm &= -89;
    this.cj = new Wj;
    this.cj.tm(this);
    this.lo = -1
}
v(Vj, Q);
d = Vj.prototype;
d.sa = null;
d.ua = -1;
d.Wb = null;
d.Va = function() {
    Vj.s.Va.call(this);
    this.Wb && (this.Wb.A(), this.Wb = null);
    this.sa = null;
    this.cj.A()
};
d.rm = function(a) {
    Vj.s.rm.call(this, a);
    Xj(this);
    this.Wb ? (this.Wb.clear(), Uj(this.Wb, a)) : (this.Wb = new Tj(a), a = oa(this.ak, this), this.Wb.bp = a, Qh(this).na(this.Wb, "select", this.mw));
    this.ua = -1
};
d.ml = function() {
    return ""
};
d.vj = function(a) {
    Vj.s.vj.call(this, a);
    var b = Sj(this.ma, this, a.target);
    b && a.relatedTarget && ee(b, a.relatedTarget) || b != Yj(this) && Zj(this, b)
};
d.Ve = function(a) {
    Vj.s.Ve.call(this, a);
    this.Ja & 4 && (a = Sj(this.ma, this, a.target), a != Yj(this) && Zj(this, a))
};
d.Zf = function(a) {
    var b = Yj(this);
    return b ? (a && (this.oe() ? "mouseup" != a.type || Sj(this.ma, this, a.target) : 1) && this.fd(b), Vj.s.Zf.call(this, a)) : !1
};
d.yd = function(a) {
    var b = this.Jc();
    b = b ? b.length : 0;
    var c = this.sa.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.Zf(a);
    if (36 == a.keyCode) return this.kc(0), !0;
    if (35 == a.keyCode) return this.kc(b - 1), !0;
    var e = 0 > this.ua ? this.pj() : this.ua;
    switch (a.keyCode) {
        case 37:
            if (-1 == e || 0 == e) e = b;
            this.kc(e - 1);
            a.preventDefault();
            return !0;
        case 39:
            return e == b - 1 && (e = -1), this.kc(e + 1), a.preventDefault(), !0;
        case 38:
            -1 == e && (e = b + c - 1);
            if (e >= c) return this.kc(e - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                e && (e = -c), e < b - c) return this.kc(e + c), a.preventDefault(), !0
    }
    return !1
};
d.mw = function() {};
d.Ue = function() {
    return this.sa
};
d.um = function(a) {
    if (this.F()) throw Error("Component already rendered");
    this.sa = ba(a) ? new Qd(a, void 0) : a;
    Xj(this)
};

function Yj(a) {
    var b = a.Jc();
    return b && b[a.ua]
}
d.kc = function(a) {
    a != this.ua && (ak(this, this.ua, !1), this.lo = this.ua, this.ua = a, ak(this, a, !0), this.dispatchEvent("a"))
};

function Zj(a, b) {
    var c = a.Jc();
    a.kc(c && b ? ra(c, b) : -1)
}
d.pj = function() {
    return this.Wb ? this.Wb.pj() : -1
};
d.oe = function() {
    return this.Wb ? this.Wb.oe() : null
};
d.fk = function(a) {
    this.Wb && this.Wb.fk(a)
};
d.fd = function(a) {
    this.Wb && this.Wb.fd(a)
};

function ak(a, b, c) {
    if (a.F()) {
        var e = a.Jc();
        if (e && 0 <= b && b < e.length) {
            var f = (f = Yj(a)) ? f.parentNode : null;
            a.cj.F() != f && (a.cj.T = f);
            f = a.cj;
            f.Xb(c);
            !!(f.Ja & 2) == c && (f = a.ma, b = e[b]) && (b = b ? b.parentNode : null, e = f.Ka() + "-cell-hover", c ? ni(b, e) : pi(b, e), c ? P(a.T, "activedescendant", b.id) : b.id == $h(a.T, "activedescendant") && a.T.removeAttribute("aria-activedescendant"))
        }
    }
}
d.Xb = function(a) {
    a && -1 == this.ua ? this.kc(-1 < this.lo ? this.lo : 0) : a || this.kc(-1);
    Vj.s.Xb.call(this, a)
};
d.ak = function(a, b) {
    if (this.F() && a) {
        a = a.parentNode;
        var c = this.ma.Ka() + "-cell-selected";
        b ? ni(a, c) : pi(a, c);
        P(a, "selected", b)
    }
};

function Xj(a) {
    var b = a.Jc();
    if (b)
        if (a.sa && a.sa.width) {
            if (b = Math.ceil(b.length / a.sa.width), !ba(a.sa.height) || a.sa.height < b) a.sa.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.sa = new Qd(b, b);
    else a.sa = new Qd(0, 0)
}

function Wj() {
    Q.call(this, null);
    this.mh |= 2
}
v(Wj, Q);

function bk(a, b, c) {
    this.Sk = a || [];
    Vj.call(this, null, b || Nj.ne(), c);
    this.qm(this.Sk)
}
v(bk, Vj);
d = bk.prototype;
d.cm = null;
d.Ul = null;
d.qm = function(a) {
    this.Sk = a;
    this.cm = this.Ul = null;
    this.Bd(ck(this))
};
d.On = function() {
    var a = this.oe();
    if (a) {
        var b = a.style[Va()];
        if ("undefined" !== typeof b) a = b;
        else {
            b = a.style;
            var c = ch["background-color"];
            if (!c) {
                var e = Va();
                c = e;
                void 0 === a.style[e] && (e = (A ? "Webkit" : kb ? "Moz" : x ? "ms" : ib ? "O" : null) + Wa(e), void 0 !== a.style[e] && (c = e));
                ch["background-color"] = c
            }
            a = b[c] || ""
        }
        return dk(a)
    }
    return null
};
d.mp = function(a) {
    a = dk(a);
    this.cm || (this.cm = ua(this.Sk, function(a) {
        return dk(a)
    }));
    this.fk(a ? ra(this.cm, a) : -1)
};

function ck(a) {
    return ua(a.Sk, function(a, c) {
        var b = this.pc().X("DIV", {
            "class": this.ma.Ka() + "-colorswatch",
            style: "background-color:" + a
        });
        b.title = this.Ul && this.Ul[c] ? this.Ul[c] : "#" == a.charAt(0) ? "RGB (" + jj(a).join(", ") + ")" : a;
        return b
    }, a)
}

function dk(a) {
    if (a) try {
        return Bj(a).Wn
    } catch (b) {}
    return null
};

function ek(a, b) {
    Nh.call(this, a);
    this.Ta = b || null;
    Qh(this).na(this, "action", this.Xw)
}
v(ek, Nh);
d = ek.prototype;
d.Hg = !0;
d.qm = function(a) {
    this.Ta ? this.Ta.qm(a) : fk(this, a)
};
d.um = function(a) {
    this.Ta || fk(this, []);
    this.Ta.um(a)
};
d.Ue = function() {
    return this.Ta ? this.Ta.Ue() : null
};
d.pj = function() {
    return this.Ta ? this.Ta.pj() : -1
};
d.fk = function(a) {
    this.Ta && this.Ta.fk(a)
};
d.On = function() {
    return this.Ta ? this.Ta.On() : null
};
d.mp = function(a) {
    this.Ta && this.Ta.mp(a)
};
d.We = function() {
    return this.Hg
};
d.df = function(a) {
    this.Hg = a;
    this.Ta && this.Ta.Bc(32, a)
};
d.Fb = function() {
    ek.s.Fb.call(this);
    this.Ta && this.Ta.$(this.F());
    this.F().unselectable = "on"
};
d.Va = function() {
    ek.s.Va.call(this);
    this.Ta && (this.Ta.A(), this.Ta = null)
};
d.focus = function() {
    this.Ta && this.Ta.F().focus()
};
d.Xw = function(a) {
    a.stopPropagation();
    this.dispatchEvent("change")
};

function fk(a, b) {
    b = new bk(b, null, a.pc());
    b.um(5);
    b.Bc(32, a.Hg);
    a.Qi(b);
    a.Ta = b;
    a.ya && a.Ta.$(a.F())
};

function gk(a, b) {
    gk.s.constructor.call(this, a, b);
    this.Sb("\u00a0\u00a0\u00a0")
}
var hk;
v(gk, ph);
gk.ha = function(a) {
    return new gk(a.colour)
};
d = gk.prototype;
d.fv = null;
d.Aq = 0;
d.K = function() {
    gk.s.K.call(this);
    this.sd.style.fillOpacity = 1;
    this.setValue(this.getValue())
};
d.Ck = "default";
d.A = function() {
    w.J.yj(this);
    gk.s.A.call(this)
};
d.getValue = function() {
    return this.ce
};
d.setValue = function(a) {
    this.v && w.j.isEnabled() && this.ce != a && w.j.V(new w.j.Ec(this.v, "field", this.name, this.ce, a));
    this.ce = a;
    this.sd && (this.sd.style.fill = a)
};
d.Hb = function() {
    var a = this.ce,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]);
    return a
};
var ik = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "),
    jk =
    7;
gk.prototype.setColumns = function(a) {
    this.Aq = a;
    return this
};
gk.prototype.ze = function() {
    w.J.show(this, this.v.u, kk);
    var a = w.i.Sn(),
        b = xh(this),
        c = this.aj(),
        e = ih(c.F());
    w.J.Lo(a, b, e, this.v.u);
    var f = this;
    hk = cc(c, "change", function(a) {
        a = a.target.On() || "#000000";
        w.J.La();
        f.v && (a = Ae(f, a));
        null !== a && f.setValue(a)
    })
};
gk.prototype.aj = function() {
    var a = new ek;
    a.um(this.Aq || jk);
    a.qm(this.fv || ik);
    a.$(w.J.ka);
    a.mp(this.getValue());
    return a
};

function kk() {
    hk && lc(hk);
    w.j.S(!1)
}
rh("field_colour", gk);

function N(a, b) {
    u(a) || lk(a);
    this.Qg = a;
    this.zp = this.No = null;
    a = this.Qg;
    if (r(a)) {
        for (var c = !1, e = 0; e < a.length; e++) {
            var f = a[e][0];
            "string" == typeof f ? a[e][0] = w.i.jc(f) : (null != f.alt && (a[e][0].alt = w.i.jc(f.alt)), c = !0)
        }
        if (!(c || 2 > a.length)) {
            f = [];
            for (e = 0; e < a.length; e++) f.push(a[e][0]);
            var h = w.i.pp(f);
            e = w.i.iv(f, h);
            c = w.i.jv(f, h);
            if ((e || c) && !(h <= e + c)) {
                e && (this.No = f[0].substring(0, e - 1));
                c && (this.zp = f[0].substr(1 - c));
                f = [];
                for (h = 0; h < a.length; h++) {
                    var k = a[h][0],
                        l = a[h][1];
                    k = k.substring(e, k.length - c);
                    f[h] = [k, l]
                }
                this.Qg =
                    f
            }
        }
    }
    a = this.getOptions()[0];
    N.s.constructor.call(this, a[1], b)
}
v(N, ph);
N.ha = function(a) {
    return new N(a.options)
};
var mk = nb ? "\u25bc" : "\u25be";
d = N.prototype;
d.Ck = "default";
d.jb = "";
d.Md = null;
d.re = null;
d.K = function() {
    this.Wa || (this.xf = w.i.B("tspan", {}, null), this.xf.appendChild(document.createTextNode(this.v.u ? mk + " " : " " + mk)), N.s.K.call(this))
};
d.ze = function() {
    w.J.show(this, this.v.u, null);
    var a = new hj;
    a.ff(this.v.u);
    for (var b = this.getOptions(), c = 0; c < b.length; c++) {
        var e = b[c][0],
            f = b[c][1];
        if ("object" == typeof e) {
            var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h
        }
        e = new dj(e);
        e.ff(this.v.u);
        e.setValue(f);
        e.gp(!0);
        a.Qi(e, !0);
        Gi(e, f == this.jb)
    }
    nk(this, a);
    ok(a);
    pk(a);
    b = w.i.Sn();
    c = xh(this);
    this.v.u ? c.right += 25 : c.left -= 25;
    this.aj(a);
    f = w.i.Bi.Ue(a);
    300 < f.height && (f.height = 300);
    this.v.u && w.i.Bi.cq(b, c, f);
    w.J.Lo(b, c, f, this.v.u);
    a.F().focus()
};

function nk(a, b) {
    cc(b, "action", function(b) {
        (b = b.target) && a.xs(b);
        w.J.yj(a);
        w.j.S(!1)
    })
}

function ok(a) {
    Qh(a).na(a.F(), "touchstart", function(a) {
        Ri(this, a.target).Ve(a)
    })
}

function pk(a) {
    Qh(a).na(a.F(), "touchend", function(a) {
        Ri(this, a.target).Zf(a)
    })
}
d.aj = function(a) {
    a.$(w.J.ka);
    w.i.mb(a.F(), "blocklyDropdownMenu");
    a.Jk = !0;
    a.df(!0)
};
d.xs = function(a) {
    a = a.getValue();
    this.v && (a = Ae(this, a));
    null !== a && this.setValue(a)
};
d.getOptions = function() {
    if (u(this.Qg)) {
        var a = this.Qg.call(this);
        lk(a);
        return a
    }
    return this.Qg
};
d.getValue = function() {
    return this.jb
};
d.setValue = function(a) {
    if (null !== a && a !== this.jb) {
        this.v && w.j.isEnabled() && w.j.V(new w.j.Ec(this.v, "field", this.name, this.jb, a));
        this.jb = a;
        for (var b = this.getOptions(), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                a = b[c][0];
                "object" == typeof a ? (this.re = a, this.va = a.alt) : (this.re = null, this.va = a);
                this.kj();
                return
            }
        this.va = a;
        this.kj()
    }
};
d.we = function() {
    if (this.Qa) {
        this.v && this.xf && (this.xf.style.fill = this.v.ce);
        ce(this.Aa);
        F(this.Md);
        this.Md = null;
        if (this.re) {
            this.Md = w.i.B("image", {
                y: 5,
                height: this.re.height + "px",
                width: this.re.width + "px"
            }, this.Wa);
            this.Md.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.re.src);
            this.Aa.appendChild(this.xf);
            var a = wh(this.xf);
            this.sa.height = Number(this.re.height) + 19;
            this.sa.width = Number(this.re.width) + a;
            this.v.u ? (this.Md.setAttribute("x", a), this.Aa.setAttribute("x", -1)) : (this.Aa.setAttribute("text-anchor",
                "end"), this.Aa.setAttribute("x", this.sa.width + 1))
        } else a = document.createTextNode(vh(this)), this.Aa.appendChild(a), this.v.u ? this.Aa.insertBefore(this.xf, this.Aa.firstChild) : this.Aa.appendChild(this.xf), this.Aa.setAttribute("text-anchor", "start"), this.Aa.setAttribute("x", 0), this.sa.height = 25, this.sa.width = wh(this.Aa);
        this.sd.setAttribute("height", this.sa.height - 9);
        this.sd.setAttribute("width", this.sa.width + 10)
    } else this.sa.width = 0
};
d.vk = function() {
    if (this.re && (x || jb)) {
        var a = wh(this.xf);
        a = Number(this.re.width) + a + 10;
        this.sd && this.sd.setAttribute("width", a);
        this.sa.width = a
    } else ph.prototype.vk.call(this)
};
d.A = function() {
    w.J.yj(this);
    N.s.A.call(this)
};

function lk(a) {
    if (!r(a)) throw "FieldDropdown options must be an array.";
    for (var b = !1, c = 0; c < a.length; ++c) {
        var e = a[c];
        r(a) ? p(e[1]) ? p(e[0]) || p(e[0].src) || (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must have a string label or image description. Found" + e[0] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : (b = !0, console.error("Invalid option[" + c + "]: Each FieldDropdown option must be an array. Found: ",
            e))
    }
    if (b) throw "Found invalid FieldDropdown options.";
}
rh("field_dropdown", N);

function qk(a, b, c, e, f) {
    this.v = null;
    this.Fa = Number(c);
    this.ia = Number(b);
    this.sa = new Qd(this.ia, this.Fa + 10);
    this.va = e || "";
    this.setValue(a);
    "function" == typeof f && (this.jn = f)
}
v(qk, ph);
qk.ha = function(a) {
    var b = w.i.jc(a.src),
        c = Number(w.i.jc(a.width)),
        e = Number(w.i.jc(a.height));
    a = w.i.jc(a.alt);
    return new qk(b, c, e, a)
};
d = qk.prototype;
d.tg = !1;
d.K = function() {
    this.Wa || (this.Wa = w.i.B("g", {}, null), this.Qa || (this.Wa.style.display = "none"), this.Md = w.i.B("image", {
        height: this.Fa + "px",
        width: this.ia + "px"
    }, this.Wa), this.setValue(this.at), this.v.ga().appendChild(this.Wa), this.za(this.v), w.C.yg(this.Md), this.jn && (this.Zl = w.O(this.Wa, "mousedown", this, this.Ze)))
};
d.A = function() {
    F(this.Wa);
    this.Md = this.Wa = null
};
d.za = function(a) {
    this.Md.hd = a
};
d.getValue = function() {
    return this.at
};
d.setValue = function(a) {
    null !== a && (this.at = a, this.Md && this.Md.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a || ""))
};
d.Sb = function(a) {
    null !== a && (this.va = a)
};
d.we = function() {};
d.kj = function() {};
d.vk = function() {};
d.ze = function() {
    this.jn && this.jn(this)
};
rh("field_image", qk);

function rk(a, b, c, e, f) {
    a = a && !isNaN(a) ? String(a) : "0";
    rk.s.constructor.call(this, a, f);
    a = parseFloat(e);
    this.Mo = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.Pw = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.Ow = isNaN(c) ? Infinity : c;
    this.setValue(Ae(this, this.getValue()))
}
v(rk, ij);
rk.ha = function(a) {
    return new rk(a.value, a.min, a.max, a.precision)
};
rk.prototype.hn = function(a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0);
    if (isNaN(a)) return null;
    this.Mo && isFinite(a) && (a = Math.round(a / this.Mo) * this.Mo);
    a = Math.min(Math.max(a, this.Pw), this.Ow);
    return String(a)
};
rh("field_number", rk);

function sk(a, b, c, e) {
    this.Qg = tk;
    this.sa = new Qd(0, 25);
    this.rh = b;
    this.zv = a || "";
    a = e || "";
    if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) {
        b = !1;
        for (e = 0; e < c.length; e++) c[e] == a && (b = !0);
        if (!b) throw Error("Invalid default type '" + a + "' in the definition of a FieldVariable");
    } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    this.yv = a;
    this.Vx = c;
    this.jb = null
}
v(sk, N);
sk.ha = function(a) {
    var b = w.i.jc(a.variable);
    return new sk(b, null, a.variableTypes, a.defaultType)
};
d = sk.prototype;
d.K = function() {
    this.Wa || (sk.s.K.call(this), this.Ng())
};
d.Ng = function() {
    if (!this.Vd) {
        this.m = this.v.o;
        var a = w.G.yl(this.m, null, this.zv, this.yv);
        w.j.disable();
        try {
            this.setValue(a.aa())
        } finally {
            w.j.enable()
        }
    }
};
d.A = function() {
    sk.s.A.call(this);
    this.qa = this.m = null
};
d.op = function(a) {
    sk.s.op.call(this, a)
};
d.getValue = function() {
    return this.Vd ? this.Vd.aa() : null
};
d.Hb = function() {
    return this.Vd ? this.Vd.name : ""
};
d.Kc = function() {
    return this.Vd
};
d.setValue = function(a) {
    var b = w.G.Kc(this.v.o, a);
    if (!b) throw Error("Variable id doesn't point to a real variable!  ID was " + a);
    var c = b.type,
        e;
    a: if (e = uk(this)) {
        for (var f = 0; f < e.length; f++)
            if (c == e[f]) {
                e = !0;
                break a
            }
        e = !1
    } else e = !0;
    if (!e) throw Error("Variable type doesn't match this field!  Type was " + c);
    this.v && w.j.isEnabled() && (c = this.Vd ? this.Vd.aa() : null, w.j.V(new w.j.Ec(this.v, "field", this.name, c, a)));
    this.Vd = b;
    this.jb = a;
    this.Sb(b.name)
};

function uk(a) {
    var b = a.Vx;
    if (null === b && a.v) return a.v.o.Pn();
    b = b || [""];
    if (0 == b.length) throw a = a.Hb(), Error("'variableTypes' of field variable " + a + " was an empty list");
    return b
}

function tk() {
    if (!this.Vd) throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
    var a = this.Hb(),
        b = null;
    this.v && (b = this.v.o);
    var c = [];
    if (b)
        for (var e = uk(this), f = 0; f < e.length; f++) c = c.concat(b.rj(e[f]));
    c.sort(qg);
    b = [];
    for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].aa()];
    b.push([w.g.RENAME_VARIABLE, w.Vp]);
    w.g.DELETE_VARIABLE && b.push([w.g.DELETE_VARIABLE.replace("%1", a), w.Np]);
    return b
}
d.xs = function(a) {
    a = a.getValue();
    if (this.v && this.v.o) {
        var b = this.v.o;
        if (a == w.Vp) {
            w.G.To(b, this.Vd);
            return
        }
        if (a == w.Np) {
            b.Bf(this.Vd.aa());
            return
        }
    }
    this.setValue(a)
};
d.Zg = function() {
    return !0
};
rh("field_variable", sk);

function Ch() {
    this.Lt = new RegExp(this.$b, "g")
}
d = Ch.prototype;
d.Dk = null;
d.Ih = null;
d.Fe = "  ";
d.Bt = 60;
d.Hk = [];

function vk() {
    var a = w.h,
        b = Pg;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = w.Yh());
    var c = [];
    a.K(b);
    b = ad(b, !0);
    for (var e = 0, f; f = b[e]; e++) {
        var h = wk(a, f);
        r(h) && (h = h[0]);
        h && (f.P && (h = a.Vs(h)), c.push(h))
    }
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n");
    return c = c.replace(/[ \t]+\n/g, "\n")
}

function xk(a, b) {
    return b + a.replace(/(?!\n$)\n/g, "\n" + b)
}

function wk(a, b) {
    if (!b) return "";
    if (b.disabled) return wk(a, Jc(b));
    var c = a[b.type].call(b, b);
    if (r(c)) return [a.pm(b, c[0]), c[1]];
    if (p(c)) {
        var e = b.id.replace(/\$/g, "$$$$");
        a.Ih && (c = a.Ih.replace(/%1/g, "'" + e + "'") + c);
        return a.pm(b, c)
    }
    if (null === c) return ""
}

function R(a, b, c) {
    var e = w.h;
    a = Ih(a, b);
    if (!a) return "";
    b = wk(e, a);
    if ("" === b) return "";
    a = b[0];
    b = b[1];
    if (!a) return "";
    var f = !1,
        h = Math.floor(c),
        k = Math.floor(b);
    if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0, h = 0; h < e.Hk.length; h++)
            if (e.Hk[h][0] == c && e.Hk[h][1] == b) {
                f = !1;
                break
            }
    f && (a = "(" + a + ")");
    return a
}

function yk(a, b) {
    var c = w.h;
    a = Ih(a, b);
    (a = wk(c, a)) && (a = xk(a, c.Fe));
    return a
}

function zk(a, b) {
    var c = w.h;
    b = b.replace(/\$/g, "$$$$");
    c.Dk && (a = c.Dk.replace(/%1/g, "'" + b + "'") + a);
    c.Ih && (a += xk(c.Ih.replace(/%1/g, "'" + b + "'"), c.Fe));
    return a
}
d.Pm = "";

function Ak(a) {
    var b = w.h;
    b.Pm += a + ","
}
d.$b = "{leCUI8hutHZI4480Dc}";

function Bk(a, b) {
    var c = w.h;
    if (!c.Cg[a]) {
        var e = Ck(c.ab, a, w.ra.cb);
        c.In[a] = e;
        b = b.join("\n").replace(c.Lt, e);
        for (var f; f != b;) f = b, b = b.replace(/^(( {2})*) {2}/gm, "$1\x00");
        b = b.replace(/\0/g, c.Fe);
        c.Cg[a] = b
    }
    return c.In[a]
}
d.K = function() {};
d.pm = function(a, b) {
    return b
};
d.finish = function(a) {
    return a
};
d.Vs = function(a) {
    return a
};

function Dk() {
    var a = w.h.Pm;
    this.qt = "";
    this.Ss = Object.create(null);
    if (a) {
        a = a.split(",");
        for (var b = 0; b < a.length; b++) this.Ss[a[b]] = !0
    }
    this.reset()
}
Dk.prototype.reset = function() {
    this.ud = Object.create(null);
    this.Vq = Object.create(null);
    this.qa = null
};
Dk.prototype.getName = function(a, b) {
    if (b == w.G.cb) {
        var c = a;
        this.qa ? c = (c = this.qa.Kd(c)) ? c.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), c = null);
        c && (a = c)
    }
    c = a.toLowerCase() + "_" + b;
    var e = b == w.G.cb || "DEVELOPER_VARIABLE" == b ? this.qt : "";
    if (c in this.ud) return e + this.ud[c];
    a = Ck(this, a, b);
    this.ud[c] =
        a.substr(e.length);
    return a
};

function Ck(a, b, c) {
    b ? (b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b)) : b = "unnamed";
    for (var e = ""; a.Vq[b + e] || b + e in a.Ss;) e = e ? e + 1 : 2;
    b += e;
    a.Vq[b] = !0;
    return (c == w.G.cb || "DEVELOPER_VARIABLE" == c ? a.qt : "") + b
}

function Rc(a, b) {
    return a.toLowerCase() == b.toLowerCase()
};
w.ra = {};
w.ra.cb = w.Tp;
w.ra.Lu = function(a) {
    a = Oc(a);
    for (var b = [], c = [], e = 0; e < a.length; e++)
        if (a[e].Te) {
            var f = a[e].Te();
            f && (f[2] ? b.push(f) : c.push(f))
        }
    c.sort(w.ra.Ks);
    b.sort(w.ra.Ks);
    return [c, b]
};
w.ra.Ks = function(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
};
w.ra.Rv = function(a, b) {
    if (b.rb) return a;
    for (; !w.ra.Aw(a, b.o, b);) {
        var c = a.match(/^(.*?)(\d+)$/);
        a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + "2"
    }
    return a
};
w.ra.Aw = function(a, b, c) {
    return !w.ra.Cw(a, b, c)
};
w.ra.Cw = function(a, b, c) {
    b = Oc(b);
    for (var e = 0; e < b.length; e++)
        if (b[e] != c && b[e].Te) {
            var f = b[e].Te();
            if (Rc(f[0], a)) return !0
        }
    return !1
};
w.ra.Rs = function(a) {
    a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    var b = w.ra.Rv(a, this.v),
        c = this.va;
    if (c != a && c != b) {
        a = Oc(this.v.o);
        for (var e = 0; e < a.length; e++) a[e].Zj && a[e].Zj(c, b)
    }
    return b
};
w.ra.Cf = function(a) {
    function b(a, b) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e][0],
                h = a[e][1],
                k = E("block");
            k.setAttribute("type", b);
            k.setAttribute("gap", 16);
            var t = E("mutation");
            t.setAttribute("name", f);
            k.appendChild(t);
            for (f = 0; f < h.length; f++) {
                var z = E("arg");
                z.setAttribute("name", h[f]);
                t.appendChild(z)
            }
            c.push(k)
        }
    }
    var c = [];
    if (w.H.procedures_defnoreturn) {
        var e = E("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap", 16);
        var f = E("field", null, w.g.PROCEDURES_DEFNORETURN_PROCEDURE);
        f.setAttribute("name",
            "NAME");
        e.appendChild(f);
        c.push(e)
    }
    w.H.procedures_defreturn && (e = E("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = E("field", null, w.g.PROCEDURES_DEFRETURN_PROCEDURE), f.setAttribute("name", "NAME"), e.appendChild(f), c.push(e));
    w.H.procedures_ifreturn && (e = E("block"), e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), c.push(e));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = w.ra.Lu(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};
w.ra.Wv = function(a, b) {
    var c = [];
    b = Oc(b);
    for (var e = 0; e < b.length; e++)
        if (b[e].wd) {
            var f = b[e].wd();
            f && Rc(f, a) && c.push(b[e])
        }
    return c
};
w.ra.uo = function(a) {
    var b = w.j.ic,
        c = a.Te()[0],
        e = a.Ga(!0);
    a = w.ra.Wv(c, a.o);
    c = 0;
    for (var f; f = a[c]; c++) {
        var h = f.Ga();
        h = h && w.D.Zc(h);
        f.Za(e);
        var k = f.Ga();
        k = k && w.D.Zc(k);
        h != k && (w.j.ic = !1, w.j.V(new w.j.Ec(f, "mutation", null, h, k)), w.j.ic = b)
    }
};
w.ra.rl = function(a, b) {
    b = ad(b, !1);
    for (var c = 0; c < b.length; c++)
        if (b[c].Te) {
            var e = b[c].Te();
            if (e && Rc(e[0], a)) return b[c]
        }
    return null
};

function Ek(a, b, c, e) {
    this.m = a;
    this.ta = b;
    this.va = c.getAttribute("text");
    this.Oc = new C(0, 0);
    this.Pg = e;
    this.gn = null;
    a = c.getAttribute("callbackKey");
    this.Pg && a ? console.warn("Labels should not have callbacks. Label text: " + this.va) : this.Pg || a && Wg(b, a) ? this.gn = Wg(b, a) : console.warn("Buttons should have callbacks. Button text: " + this.va);
    this.Jq = c.getAttribute("web-class") || null
}
d = Ek.prototype;
d.width = 0;
d.height = 0;
d.ni = null;
d.X = function() {
    var a = this.Pg ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.Jq && (a += " " + this.Jq);
    this.w = w.i.B("g", {
        "class": a
    }, this.m.Oa);
    if (!this.Pg) var b = w.i.B("rect", {
        "class": "blocklyFlyoutButtonShadow",
        rx: 4,
        ry: 4,
        x: 1,
        y: 1
    }, this.w);
    a = w.i.B("rect", {
        "class": this.Pg ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground",
        rx: 4,
        ry: 4
    }, this.w);
    var c = w.i.B("text", {
        "class": this.Pg ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle"
    }, this.w);
    c.textContent = this.va;
    this.width = wh(c);
    this.height = 20;
    this.Pg || (this.width += 10, b.setAttribute("width", this.width), b.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height", this.height);
    c.setAttribute("x", this.width / 2);
    c.setAttribute("y", this.height - 5);
    Fk(this);
    w.O(this.w, "mouseup", this, this.px);
    return this.w
};
d.show = function() {
    Fk(this);
    this.w.setAttribute("display", "block")
};

function Fk(a) {
    a.w.setAttribute("transform", "translate(" + a.Oc.x + "," + a.Oc.y + ")")
}
d.moveTo = function(a, b) {
    this.Oc.x = a;
    this.Oc.y = b;
    Fk(this)
};
d.zr = function() {
    return this.Oc
};
d.A = function() {
    this.ni && w.Ma(this.ni);
    this.w && (F(this.w), this.w = null);
    this.ta = this.m = null
};
d.px = function(a) {
    (a = this.ta.me(a)) && a.cancel();
    this.gn && this.gn(this)
};

function Gk(a) {
    a.qb = this.Se.bind(this);
    a.ig = this.sm.bind(this);
    this.m = new Fg(a);
    this.m.Nd = !0;
    this.u = !!a.u;
    this.jf = a.Ca;
    this.Dn = [];
    this.Yl = [];
    this.Ti = [];
    this.yc = [];
    this.Jo = []
}
d = Gk.prototype;
d.Lh = !0;
d.Jj = !1;
d.zg = !0;
d.pa = 8;
d.pd = Gk.prototype.pa;
d.Ot = 3 * Gk.prototype.pd;
d.Pt = 3 * Gk.prototype.pd;
d.ug = 2;
d.ia = 0;
d.Fa = 0;
d.jr = 70;
d.X = function(a) {
    this.w = w.i.B(a, {
        "class": "blocklyFlyout",
        style: "display: none"
    }, null);
    this.gd = w.i.B("path", {
        "class": "blocklyFlyoutBackground"
    }, this.w);
    this.w.appendChild(this.m.X());
    return this.w
};
d.K = function(a) {
    this.ta = a;
    this.m.ph = a;
    this.Vb = new Zf(this.m, this.Ld, !1, "blocklyFlyoutScrollbar");
    this.La();
    Array.prototype.push.apply(this.Dn, w.O(this.w, "wheel", this, this.tt));
    this.Lh || (this.hl = this.Fn.bind(this), this.ta.Vc(this.hl));
    Array.prototype.push.apply(this.Dn, w.O(this.gd, "mousedown", this, this.Ze));
    this.m.me = this.ta.me.bind(this.ta);
    this.m.qa = this.ta.qa;
    a = this.m;
    a.si = new Nc(a)
};
d.A = function() {
    this.La();
    w.Ma(this.Dn);
    this.hl && (this.ta.bf(this.hl), this.hl = null);
    this.Vb && (this.Vb.A(), this.Vb = null);
    this.m && (this.m.ph = null, this.m.A(), this.m = null);
    this.w && (F(this.w), this.w = null);
    this.ta = this.gd = null
};
d.cd = function() {
    return this.ia
};
d.Xh = function() {
    return this.Fa
};
d.sj = function() {
    return this.m
};
d.Y = function() {
    return this.Jj
};
d.oa = function(a) {
    var b = a != this.Y();
    this.Jj = a;
    b && this.rk()
};
d.dh = function(a) {
    var b = a != this.zg;
    this.zg = a;
    b && this.rk()
};
d.rk = function() {
    var a = this.zg ? this.Y() : !1;
    this.w.style.display = a ? "block" : "none";
    this.Vb.dh(a)
};

function Hk(a, b, c, e, f) {
    a.w.setAttribute("width", b);
    a.w.setAttribute("height", c);
    "svg" == a.w.tagName ? w.i.bk(a.w, "translate(" + e + "px," + f + "px)") : a.w.setAttribute("transform", "translate(" + e + "," + f + ")");
    a.Vb && (a.Vb.Fo = new C(e, f), a.Vb.resize())
}
d.La = function() {
    if (this.Y()) {
        this.oa(!1);
        for (var a = 0, b; b = this.yc[a]; a++) w.Ma(b);
        this.yc.length = 0;
        this.$f && (this.m.bf(this.$f), this.$f = null)
    }
};
d.show = function(a) {
    this.m.Rb(!1);
    this.La();
    Ik(this);
    "string" == typeof a && (a = Xg(this.m.ph, a)(this.m.ph));
    this.oa(!0);
    for (var b = [], c = [], e = this.Jo.length = 0, f; f = a[e]; e++)
        if (f.tagName) {
            var h = f.tagName.toUpperCase(),
                k = this.Ld ? this.Ot : this.Pt;
            if ("BLOCK" == h) h = w.D.Qh(f, this.m), h.disabled && this.Jo.push(h), b.push({
                type: "block",
                block: h
            }), f = parseInt(f.getAttribute("gap"), 10), c.push(isNaN(f) ? k : f);
            else if ("SEP" == f.tagName.toUpperCase()) f = parseInt(f.getAttribute("gap"), 10), !isNaN(f) && 0 < c.length ? c[c.length - 1] = f : c.push(k);
            else if ("BUTTON" == h || "LABEL" == h) f = new Ek(this.m, this.ta, f, "LABEL" == h), b.push({
                type: "button",
                button: f
            }), c.push(k)
        }
    this.Xr(b, c);
    this.yc.push(w.O(this.gd, "mouseover", this, function() {
        for (var a = ad(this.m, !1), b = 0, c; c = a[b]; b++) c.$g()
    }));
    this.Ld ? this.Fa = 0 : this.ia = 0;
    this.m.Rb(!0);
    this.So();
    this.Fn();
    this.position();
    this.$f = this.So.bind(this);
    this.m.Vc(this.$f)
};

function Ik(a) {
    for (var b = ad(a.m, !1), c = 0, e; e = b[c]; c++) e.o == a.m && e.A(!1, !1);
    for (c = 0; c < a.Yl.length; c++)(b = a.Yl[c]) && F(b);
    for (c = a.Yl.length = 0; b = a.Ti[c]; c++) b.A();
    a.Ti.length = 0;
    a.m.si.clear()
}

function Jk(a, b, c, e) {
    a.yc.push(w.O(b, "mousedown", null, Kk(a, c)));
    a.yc.push(w.O(e, "mousedown", null, Kk(a, c)));
    a.yc.push(w.Gc(b, "mouseover", c, c.Kh));
    a.yc.push(w.Gc(b, "mouseout", c, c.$g));
    a.yc.push(w.Gc(e, "mouseover", c, c.Kh));
    a.yc.push(w.Gc(e, "mouseout", c, c.$g))
}

function Kk(a, b) {
    return function(c) {
        var e = a.ta.me(c);
        e && (Rf(e, b), e.I || (e.I = a), e.ib || (e.ib = a.sj()), e.Nc = c, e.fj(c))
    }
}
d.Ze = function(a) {
    var b = this.ta.me(a);
    b && (b.I || (b.I = this), b.ib || (b.ib = this.sj()), b.Nc = a, b.fj(a))
};

function Mf(a, b) {
    var c = null;
    w.j.disable();
    var e = a.ta.Re();
    a.ta.Rb(!1);
    try {
        var f = a.ta;
        if (!b.ga()) throw "oldBlock is not rendered.";
        var h = w.D.yf(b);
        f.Rb(!1);
        var k = w.D.Qh(h, f);
        if (!k.ga()) throw "block is not rendered.";
        var l = w.i.vl(f.Oa),
            m = w.i.vl(a.m.Oa),
            n = b.la().scale(a.m.scale),
            q = sc(tc(m, n), l).scale(1 / f.scale);
        k.moveBy(q.x, q.y);
        c = k;
        w.Pb()
    } finally {
        w.j.enable()
    }
    b = w.G.wr(a.ta, e);
    if (w.j.isEnabled())
        for (w.j.S(!0), w.j.V(new wc(c)), e = 0; e < b.length; e++) w.j.V(new Ac(b[e]));
    a.Lh ? a.La() : a.Fn();
    return c
}

function Lk(a, b, c, e) {
    var f = b.X();
    b.moveTo(c, e);
    b.show();
    a.yc.push(w.O(f, "mousedown", a, a.Ze));
    a.Ti.push(b)
}

function Mk(a, b, c, e, f, h) {
    c = w.i.B("rect", {
        "fill-opacity": 0,
        x: c,
        y: e,
        height: f.height,
        width: f.width
    }, null);
    c.hd = b;
    w.C.yg(c);
    a.m.Oa.insertBefore(c, b.ga());
    b.il = c;
    return a.Yl[h] = c
}

function Nk(a, b, c) {
    var e = c.Gb();
    b.setAttribute("width", e.width);
    b.setAttribute("height", e.height);
    var f = c.dt ? 15 : 0;
    f && c.moveBy(0, f);
    f = c.P ? L : 0;
    c = c.la();
    b.setAttribute("y", c.y);
    b.setAttribute("x", a.u ? c.x - e.width + f : c.x - f)
}
d.Fn = function() {
    for (var a = dd(this.ta), b = ad(this.m, !1), c = 0, e; e = b[c]; c++)
        if (-1 == this.Jo.indexOf(e)) {
            var f = vc(e, !1);
            e.Cd(f.length > a)
        }
};
d.So = function() {
    this.$f && this.m.bf(this.$f);
    this.Ps();
    this.$f && this.m.Vc(this.$f)
};

function Kf(a) {
    return a.Vb ? a.Vb.Y() : !1
};

function Mg(a) {
    a.qb = this.Se.bind(this);
    a.ig = this.sm.bind(this);
    Mg.s.constructor.call(this, a);
    this.Ld = !0
}
v(Mg, Gk);
d = Mg.prototype;
d.Se = function() {
    if (!this.Y()) return null;
    try {
        var a = this.m.Oa.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = this.ug,
        c = this.ug;
    this.jf == w.wg && (b = 0);
    var e = this.Fa;
    this.jf == w.wf && (e -= this.ug);
    return {
        bb: e,
        xa: this.ia - 2 * this.ug,
        mc: (a.height + 2 * this.pd) * this.m.scale,
        Ic: (a.width + 2 * this.pd) * this.m.scale,
        De: -this.m.scrollY,
        Ab: -this.m.scrollX,
        nc: a.y,
        Hc: a.x,
        wb: b,
        lb: c
    }
};
d.sm = function(a) {
    var b = this.Se();
    b && (ba(a.x) && (this.m.scrollX = -b.Ic * a.x), this.m.translate(this.m.scrollX + b.lb, this.m.scrollY + b.wb))
};
d.position = function() {
    if (this.Y()) {
        var a = this.ta.qb();
        if (a) {
            this.ia = a.xa;
            this.fp(a.xa - 2 * this.pa, this.Fa - this.pa);
            var b = a.lb,
                c = a.wb;
            this.jf == w.wg && (c += a.bb - this.Fa);
            Hk(this, this.ia, this.Fa, b, c)
        }
    }
};
d.fp = function(a, b) {
    var c = this.jf == w.wf,
        e = ["M 0," + (c ? 0 : this.pa)];
    c ? (e.push("h", a + 2 * this.pa), e.push("v", b), e.push("a", this.pa, this.pa, 0, 0, 1, -this.pa, this.pa), e.push("h", -1 * a), e.push("a", this.pa, this.pa, 0, 0, 1, -this.pa, -this.pa)) : (e.push("a", this.pa, this.pa, 0, 0, 1, this.pa, -this.pa), e.push("h", a), e.push("a", this.pa, this.pa, 0, 0, 1, this.pa, this.pa), e.push("v", b), e.push("h", -a - 2 * this.pa));
    e.push("z");
    this.gd.setAttribute("d", e.join(" "))
};
d.$o = function() {
    this.Vb.set(this.u ? Infinity : 0)
};
d.tt = function(a) {
    var b = a.deltaX;
    if (b) {
        kb && 1 === a.deltaMode && (b *= 10);
        var c = this.Se();
        b = c.Ab + b;
        b = Math.min(b, c.Ic - c.xa);
        b = Math.max(b, 0);
        this.Vb.set(b);
        w.J.La()
    }
    a.preventDefault();
    a.stopPropagation()
};
d.Xr = function(a, b) {
    this.m.scale = this.ta.scale;
    var c = this.pd,
        e = this.u ? c : c + L;
    this.u && (a = a.reverse());
    for (var f = 0, h; h = a[f]; f++)
        if ("block" == h.type) {
            h = h.block;
            for (var k = vc(h, !1), l = 0, m; m = k[l]; l++) m.rb = !0;
            h.$();
            k = h.ga();
            l = h.Gb();
            m = h.P ? L : 0;
            m = this.u ? e + l.width : e + m;
            h.moveBy(m, c);
            m = Mk(this, h, m, c, l, f);
            e += l.width + b[f];
            Jk(this, k, h, m)
        } else "button" == h.type && (Lk(this, h.button, e, c), e += h.button.width + b[f])
};
d.Rr = function(a) {
    a = Math.atan2(a.y, a.x) / Math.PI * 180;
    var b = this.jr;
    return a < 90 + b && a > 90 - b || a > -90 - b && a < -90 + b ? !0 : !1
};
d.Uh = function() {
    if (!this.w) return null;
    var a = this.w.getBoundingClientRect(),
        b = a.top;
    a = a.height;
    if (this.jf == w.wf) return new og(-1E9, b - 1E9, 2E9, 1E9 + a);
    if (this.jf == w.wg) return new og(-1E9, b, 2E9, 1E9 + a)
};
d.Ps = function() {
    this.m.scale = this.ta.scale;
    for (var a = 0, b = ad(this.m, !1), c = 0, e; e = b[c]; c++) a = Math.max(a, e.Gb().height);
    a += 1.5 * this.pd;
    a *= this.m.scale;
    a += G;
    if (this.Fa != a) {
        for (c = 0; e = b[c]; c++) e.il && Nk(this, e.il, e);
        this.Fa = a;
        this.ta.resize()
    }
};

function Ng(a) {
    a.qb = this.Se.bind(this);
    a.ig = this.sm.bind(this);
    Ng.s.constructor.call(this, a);
    this.Ld = !1
}
v(Ng, Gk);
d = Ng.prototype;
d.Se = function() {
    if (!this.Y()) return null;
    try {
        var a = this.m.Oa.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = this.ug,
        c = this.Fa - 2 * this.ug,
        e = this.ia;
    this.u || (e -= this.ug);
    return {
        bb: c,
        xa: e,
        mc: a.height * this.m.scale + 2 * this.pd,
        Ic: a.width * this.m.scale + 2 * this.pd,
        De: -this.m.scrollY + a.y,
        Ab: -this.m.scrollX,
        nc: a.y,
        Hc: a.x,
        wb: b,
        lb: 0
    }
};
d.sm = function(a) {
    var b = this.Se();
    b && (ba(a.y) && (this.m.scrollY = -b.mc * a.y), this.m.translate(this.m.scrollX + b.lb, this.m.scrollY + b.wb))
};
d.position = function() {
    if (this.Y()) {
        var a = this.ta.qb();
        if (a) {
            this.Fa = a.bb;
            this.fp(this.ia - this.pa, a.bb - 2 * this.pa);
            var b = a.wb,
                c = a.lb;
            this.jf == w.Wd && (this.Ew = c += a.xa - this.ia);
            Hk(this, this.ia, this.Fa, c, b)
        }
    }
};
d.fp = function(a, b) {
    var c = this.jf == w.Wd,
        e = a + this.pa;
    e = ["M " + (c ? e : 0) + ",0"];
    e.push("h", c ? -a : a);
    e.push("a", this.pa, this.pa, 0, 0, c ? 0 : 1, c ? -this.pa : this.pa, this.pa);
    e.push("v", Math.max(0, b));
    e.push("a", this.pa, this.pa, 0, 0, c ? 0 : 1, c ? this.pa : -this.pa, this.pa);
    e.push("h", c ? a : -a);
    e.push("z");
    this.gd.setAttribute("d", e.join(" "))
};
d.$o = function() {
    this.Vb.set(0)
};
d.tt = function(a) {
    var b = a.deltaY;
    if (b) {
        kb && 1 === a.deltaMode && (b *= 10);
        var c = this.Se();
        b = c.De - c.nc + b;
        b = Math.min(b, c.mc - c.bb);
        b = Math.max(b, 0);
        this.Vb.set(b);
        w.J.La()
    }
    a.preventDefault();
    a.stopPropagation()
};
d.Xr = function(a, b) {
    this.m.scale = this.ta.scale;
    for (var c = this.pd, e = this.u ? c : c + L, f = 0, h; h = a[f]; f++)
        if ("block" == h.type) {
            h = h.block;
            for (var k = vc(h, !1), l = 0, m; m = k[l]; l++) m.rb = !0;
            h.$();
            k = h.ga();
            l = h.Gb();
            h.moveBy(e, c);
            m = Mk(this, h, this.u ? e - l.width : e, c, l, f);
            Jk(this, k, h, m);
            c += l.height + b[f]
        } else "button" == h.type && (Lk(this, h.button, e, c), c += h.button.height + b[f])
};
d.Rr = function(a) {
    a = Math.atan2(a.y, a.x) / Math.PI * 180;
    var b = this.jr;
    return a < b && a > -b || a < -180 + b || a > 180 - b ? !0 : !1
};
d.Uh = function() {
    if (!this.w) return null;
    var a = this.w.getBoundingClientRect(),
        b = a.left;
    a = a.width;
    if (this.jf == w.vf) return new og(b - 1E9, -1E9, 1E9 + a, 2E9);
    if (kb && this.ta && this.ta.Hj) {
        var c = this.ta.w.getBoundingClientRect().x;
        10 > Math.abs(c - b) && (b += this.Ew * this.ta.options.Kb.scale)
    }
    return new og(b, -1E9, 1E9 + a, 2E9)
};
d.Ps = function() {
    this.m.scale = this.ta.scale;
    for (var a = 0, b = ad(this.m, !1), c = 0, e; e = b[c]; c++) {
        var f = e.Gb().width;
        e.P && (f -= L);
        a = Math.max(a, f)
    }
    for (c = 0; e = this.Ti[c]; c++) a = Math.max(a, e.width);
    a += 1.5 * this.pd + L;
    a *= this.m.scale;
    a += G;
    if (this.ia != a) {
        for (c = 0; e = b[c]; c++) this.u && (f = e.la().x, e.moveBy(a / this.m.scale - this.pd - L - f, 0)), e.il && Nk(this, e.il, e);
        if (this.u)
            for (c = 0; e = this.Ti[c]; c++) b = e.zr().y, e.moveTo(a / this.m.scale - e.width - this.pd - L, b);
        this.ia = a;
        this.ta.resize()
    }
};

function Ok(a) {
    lg.call(this);
    this.T = a;
    a = x ? "focusout" : "blur";
    this.Gw = cc(this.T, x ? "focusin" : "focus", this, !x);
    this.Hw = cc(this.T, a, this, !x)
}
v(Ok, lg);
Ok.prototype.handleEvent = function(a) {
    var b = new Ob(a.ie);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
Ok.prototype.Va = function() {
    Ok.s.Va.call(this);
    lc(this.Gw);
    lc(this.Hw);
    delete this.T
};

function Pk(a, b) {
    null != a && this.append.apply(this, arguments)
}
d = Pk.prototype;
d.Cb = "";
d.set = function(a) {
    this.Cb = "" + a
};
d.append = function(a, b, c) {
    this.Cb += String(a);
    if (null != b)
        for (var e = 1; e < arguments.length; e++) this.Cb += arguments[e];
    return this
};
d.clear = function() {
    this.Cb = ""
};
d.toString = function() {
    return this.Cb
};

function Qk(a, b, c) {
    Nh.call(this, c);
    this.Ya = b || Rk;
    a instanceof Cd || (a = Gd(a), a = Hd(Ed(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Wh()));
    this.Aj = a;
    this.hj = this.ap = !1;
    this.Px = null;
    this.Iu = Nd;
    this.Ij = !0;
    this.Zk = -1
}
v(Qk, Nh);
var Sk = {};
d = Qk.prototype;
d.Va = function() {
    Qk.s.Va.call(this);
    this.mg && (this.mg.removeNode(this), this.mg = null);
    this.T = null
};
d.Jl = function() {
    var a = this.F();
    if (a) {
        var b = Tk(this);
        b && !b.id && (b.id = this.aa() + ".label");
        Zh(a, "treeitem");
        P(a, "selected", !1);
        P(a, "level", this.Vh());
        b && P(a, "labelledby", b.id);
        (b = this.ul()) && Zh(b, "presentation");
        (b = this.tl()) && Zh(b, "presentation");
        if (b = Uk(this))
            if (Zh(b, "group"), b.hasChildNodes())
                for (P(a, "expanded", !1), a = Th(this), b = 1; b <= a; b++) {
                    var c = Uh(this, b - 1).F();
                    P(c, "setsize", a);
                    P(c, "posinset", b)
                }
    }
};
d.X = function() {
    var a = this.pc();
    var b = this.Bm();
    var c = a.Hd;
    a = c.createElement("DIV");
    x ? (Pd(a, Md(Od, b)), a.removeChild(a.firstChild)) : Pd(a, b);
    if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.T = b
};
d.Fb = function() {
    Qk.s.Fb.call(this);
    Sk[this.aa()] = this;
    this.Jl()
};
d.vd = function() {
    Qk.s.vd.call(this);
    delete Sk[this.aa()]
};
d.Jh = function(a, b) {
    var c = Uh(this, b - 1),
        e = Uh(this, b);
    Qk.s.Jh.call(this, a, b);
    a.Qd = c;
    a.Od = e;
    c ? c.Od = a : this.qr = a;
    e ? e.Qd = a : this.Vr = a;
    (b = this.uc()) && Vk(a, b);
    Wk(a, this.Vh() + 1);
    if (b = this.F())
        if (this.Ci(), P(b, "expanded", this.qc()), this.qc()) {
            b = Uk(this);
            a.F() || a.X();
            var f = a.F(),
                h = e && e.F();
            b.insertBefore(f, h);
            this.ya && a.Fb();
            e || (c ? c.Ci() : (kh(b, !0), this.Sd(this.qc())))
        }
};
d.add = function(a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.Jh(a, b ? Xh(this, b) : Th(this));
    return a
};
d.removeChild = function(a) {
    var b = this.uc(),
        c = b ? b.oe() : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), sf(this.sx, 10, this)) : this.select();
    Qk.s.removeChild.call(this, a);
    this.Vr == a && (this.Vr = a.Qd);
    this.qr == a && (this.qr = a.Od);
    a.Qd && (a.Qd.Od = a.Od);
    a.Od && (a.Od.Qd = a.Qd);
    c = !a.Od;
    a.mg = null;
    a.Zk = -1;
    if (b && (b.removeNode(a), this.ya)) {
        b = Uk(this);
        if (a.ya) {
            var e = a.F();
            b.removeChild(e);
            a.vd()
        }
        c && (c = Uh(this, Th(this) - 1)) && c.Ci();
        Wh(this) || (b.style.display = "none", this.Ci(), this.ul().className = this.ll(), (c = this.F()) &&
            c.removeAttribute("aria-expanded"))
    }
    return a
};
d.remove = Qk.prototype.removeChild;
d.sx = function() {
    this.select()
};
d.Vh = function() {
    var a = this.Zk;
    0 > a && (a = (a = this.getParent()) ? a.Vh() + 1 : 0, Wk(this, a));
    return a
};

function Wk(a, b) {
    if (b != a.Zk) {
        a.Zk = b;
        var c = Xk(a);
        if (c) {
            var e = Yk(a) + "px";
            Vh(a) ? c.style.paddingRight = e : c.style.paddingLeft = e
        }
        Sh(a, function(a) {
            Wk(a, b + 1)
        })
    }
}
d.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
d.Ef = function() {
    var a = [];
    Sh(this, function(b) {
        a.push(b)
    });
    return a
};
d.Pl = function() {
    return this.ap
};
d.select = function() {
    var a = this.uc();
    a && a.fd(this)
};

function Zk(a, b) {
    if (a.ap != b) {
        a.ap = b;
        $k(a);
        var c = a.F();
        c && (P(c, "selected", b), b && (b = a.uc().F(), P(b, "activedescendant", a.aa())))
    }
}
d.qc = function() {
    return this.hj
};
d.Sd = function(a) {
    var b = a != this.hj;
    if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
        this.hj = a;
        var c = this.uc();
        var e = this.F();
        if (Wh(this)) {
            if (!a && c && this.contains(c.oe()) && this.select(), e) {
                if (c = Uk(this))
                    if (kh(c, a), P(e, "expanded", a), a && this.ya && !c.hasChildNodes()) {
                        var f = [];
                        Sh(this, function(a) {
                            f.push(a.Bm())
                        });
                        Pd(c, Md(f));
                        Sh(this, function(a) {
                            a.Fb()
                        })
                    }
                this.Ci()
            }
        } else(c = Uk(this)) && kh(c, !1);
        e && (this.ul().className = this.ll());
        b && this.dispatchEvent(a ? "expand" : "collapse")
    }
};
d.toggle = function() {
    this.Sd(!this.qc())
};
d.expand = function() {
    this.Sd(!0)
};
d.collapse = function() {
    this.Sd(!1)
};
d.Zo = function() {
    var a = this.getParent();
    a && (a.Sd(!0), a.Zo())
};
d.Bm = function() {
    var a = this.uc(),
        b = !a.gk || a == this.getParent() && !a.tp ? this.Ya.Iq : this.Ya.Hq;
    a = this.qc() && Wh(this);
    b = {
        "class": b,
        style: al(this)
    };
    var c = [];
    a && Sh(this, function(a) {
        c.push(a.Bm())
    });
    a = Ld("div", b, c);
    return Ld("div", {
        "class": this.Ya.Rq,
        id: this.aa()
    }, [bl(this), a])
};

function Yk(a) {
    return Math.max(0, (a.Vh() - 1) * a.Ya.bo)
}

function bl(a) {
    var b = {};
    b["padding-" + (Vh(a) ? "right" : "left")] = Yk(a) + "px";
    b = {
        "class": a.oj(),
        style: b
    };
    var c = a.Mn(),
        e = Ld("span", {
            style: {
                display: "inline-block"
            },
            "class": a.ll()
        }),
        f = Ld("span", {
            "class": a.Ya.Sq,
            title: a.Px || null
        }, a.Aj);
    a = Md(f, Ld("span", {}, a.Iu));
    return Ld("div", b, [c, e, a])
}
d.oj = function() {
    return this.Ya.rn + (this.Pl() ? " " + this.Ya.Uq : "")
};
d.Mn = function() {
    return Ld("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": cl(this)
    })
};

function cl(a) {
    var b = a.uc(),
        c = !b.gk || b == a.getParent() && !b.tp,
        e = a.Ya,
        f = new Pk;
    f.append(e.Ag, " ", e.qv, " ");
    if (Wh(a)) {
        var h = 0;
        b.rp && a.Ij && (h = a.qc() ? 2 : 1);
        c || (h = a.Od ? h + 8 : h + 4);
        switch (h) {
            case 1:
                f.append(e.vv);
                break;
            case 2:
                f.append(e.uv);
                break;
            case 4:
                f.append(e.Nq);
                break;
            case 5:
                f.append(e.tv);
                break;
            case 6:
                f.append(e.rv);
                break;
            case 8:
                f.append(e.Oq);
                break;
            case 9:
                f.append(e.xv);
                break;
            case 10:
                f.append(e.wv);
                break;
            default:
                f.append(e.Mq)
        }
    } else c ? f.append(e.Mq) : a.Od ? f.append(e.Oq) : f.append(e.Nq);
    return f.toString()
}

function al(a) {
    var b = a.qc() && Wh(a);
    return wd({
        "background-position": dl(a),
        display: b ? null : "none"
    })
}

function dl(a) {
    return (a.Od ? (a.Vh() - 1) * a.Ya.bo : "-100") + "px 0"
}
d.F = function() {
    var a = Qk.s.F.call(this);
    a || (this.T = a = this.pc().F(this.aa()));
    return a
};

function Xk(a) {
    return (a = a.F()) ? a.firstChild : null
}
d.tl = function() {
    var a = Xk(this);
    return a ? a.firstChild : null
};
d.ul = function() {
    var a = Xk(this);
    return a ? a.childNodes[1] : null
};

function Tk(a) {
    return (a = Xk(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function Uk(a) {
    return (a = a.F()) ? a.lastChild : null
}
d.Sb = function(a) {
    this.Aj = a = Gd(a);
    var b = Tk(this);
    b && Pd(b, a);
    (a = this.uc()) && el(a, this)
};
d.Hb = function() {
    var a = Ed(this.Aj);
    return -1 != a.indexOf("&") ? "document" in g ? Ra(a) : Ta(a) : a
};

function $k(a) {
    var b = Xk(a);
    b && (b.className = a.oj())
}
d.Ci = function() {
    var a = this.tl();
    a && (a.className = cl(this));
    if (a = Uk(this)) a.style.backgroundPosition = dl(this)
};
d.ys = function(a) {
    "expand" == a.target.getAttribute("type") && Wh(this) ? this.Ij && this.toggle() : (this.select(), $k(this))
};
d.Ao = function(a) {
    a.preventDefault()
};
d.vs = function(a) {
    "expand" == a.target.getAttribute("type") && Wh(this) || this.Ij && this.toggle()
};
d.Co = function(a) {
    var b = !0;
    switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            Wh(this) && (this.qc() ? Uh(this, 0).select() : this.Sd(!0));
            break;
        case 37:
            if (a.altKey) break;
            if (Wh(this) && this.qc() && this.Ij) this.Sd(!1);
            else {
                var c = this.getParent(),
                    e = this.uc();
                c && (e.ih || c != e) && c.select()
            }
            break;
        case 40:
            a: if (Wh(this) && this.qc()) c = Uh(this, 0);
                else {
                    for (c = this; c != this.uc();) {
                        e = c.Od;
                        if (null != e) {
                            c = e;
                            break a
                        }
                        c = c.getParent()
                    }
                    c = null
                }
            c && c.select();
            break;
        case 38:
            c = this.Qd;
            null != c ? c = fl(c) : (c = this.getParent(), e = this.uc(), c = !e.ih && c ==
                e || this == e ? null : c);
            c && c.select();
            break;
        default:
            b = !1
    }
    b && (a.preventDefault(), (e = this.uc()) && e.pk.clear());
    return b
};

function fl(a) {
    return a.qc() && Wh(a) ? fl(Uh(a, Th(a) - 1)) : a
}

function Vk(a, b) {
    a.mg != b && (a.mg = b, el(b, a), Sh(a, function(a) {
        Vk(a, b)
    }))
}
var Rk = {
    bo: 19,
    Tq: "goog-tree-root goog-tree-item",
    Qq: "goog-tree-hide-root",
    Rq: "goog-tree-item",
    Hq: "goog-tree-children",
    Iq: "goog-tree-children-nolines",
    rn: "goog-tree-row",
    Sq: "goog-tree-item-label",
    Ag: "goog-tree-icon",
    qv: "goog-tree-expand-icon",
    vv: "goog-tree-expand-icon-plus",
    uv: "goog-tree-expand-icon-minus",
    xv: "goog-tree-expand-icon-tplus",
    wv: "goog-tree-expand-icon-tminus",
    tv: "goog-tree-expand-icon-lplus",
    rv: "goog-tree-expand-icon-lminus",
    Oq: "goog-tree-expand-icon-t",
    Nq: "goog-tree-expand-icon-l",
    Mq: "goog-tree-expand-icon-blank",
    pn: "goog-tree-expanded-folder-icon",
    Kq: "goog-tree-collapsed-folder-icon",
    qn: "goog-tree-file-icon",
    Pq: "goog-tree-expanded-folder-icon",
    Lq: "goog-tree-collapsed-folder-icon",
    Uq: "selected"
};

function gl(a, b, c) {
    Qk.call(this, a, b, c)
}
v(gl, Qk);
gl.prototype.uc = function() {
    if (this.mg) return this.mg;
    var a = this.getParent();
    return a && (a = a.uc()) ? (Vk(this, a), a) : null
};
gl.prototype.ll = function() {
    var a = this.qc(),
        b = this.Nv;
    if (a && b) return b;
    b = this.uw;
    if (!a && b) return b;
    b = this.Ya;
    if (Wh(this)) {
        if (a && b.pn) return b.Ag + " " + b.pn;
        if (!a && b.Kq) return b.Ag + " " + b.Kq
    } else if (b.qn) return b.Ag + " " + b.qn;
    return ""
};

function hl(a) {
    if (a.qj && "function" == typeof a.qj) return a.qj();
    if (p(a)) return a.split("");
    if (ha(a)) {
        for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
        return b
    }
    b = [];
    c = 0;
    for (e in a) b[c++] = a[e];
    return b
};

function il(a) {
    this.jb = void 0;
    this.cc = {};
    if (a) {
        if (a.xl && "function" == typeof a.xl) var b = a.xl();
        else if (a.qj && "function" == typeof a.qj) b = void 0;
        else if (ha(a) || p(a)) {
            b = [];
            for (var c = a.length, e = 0; e < c; e++) b.push(e)
        } else
            for (e in b = [], c = 0, a) b[c++] = e;
        a = hl(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
d = il.prototype;
d.set = function(a, b) {
    jl(this, a, b, !1)
};
d.add = function(a, b) {
    jl(this, a, b, !0)
};

function jl(a, b, c, e) {
    for (var f = 0; f < b.length; f++) {
        var h = b.charAt(f);
        a.cc[h] || (a.cc[h] = new il);
        a = a.cc[h]
    }
    if (e && void 0 !== a.jb) throw Error('The collection already contains the key "' + b + '"');
    a.jb = c
}
d.get = function(a) {
    a: {
        for (var b = this, c = 0; c < a.length; c++)
            if (b = b.cc[a.charAt(c)], !b) {
                a = void 0;
                break a
            }
        a = b
    }
    return a ? a.jb : void 0
};
d.qj = function() {
    var a = [];
    kl(this, a);
    return a
};

function kl(a, b) {
    void 0 !== a.jb && b.push(a.jb);
    for (var c in a.cc) kl(a.cc[c], b)
}
d.xl = function(a) {
    var b = [];
    if (a) {
        for (var c = this, e = 0; e < a.length; e++) {
            var f = a.charAt(e);
            if (!c.cc[f]) return [];
            c = c.cc[f]
        }
        ll(c, a, b)
    } else ll(this, "", b);
    return b
};

function ll(a, b, c) {
    void 0 !== a.jb && c.push(b);
    for (var e in a.cc) ll(a.cc[e], b + e, c)
}
d.clear = function() {
    this.cc = {};
    this.jb = void 0
};
d.remove = function(a) {
    for (var b = this, c = [], e = 0; e < a.length; e++) {
        var f = a.charAt(e);
        if (!b.cc[f]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, f]);
        b = b.cc[f]
    }
    a = b.jb;
    for (delete b.jb; 0 < c.length;)
        if (f = c.pop(), b = f[0], f = f[1], b.cc[f].Sr()) delete b.cc[f];
        else break;
    return a
};
d.clone = function() {
    return new il(this)
};
d.Sr = function() {
    var a;
    if (a = void 0 === this.jb) a: {
        for (var b in this.cc) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function ml() {
    this.Ug = new il;
    this.Cb = "";
    this.Xl = this.ro = null;
    this.ki = this.Nj = 0
}

function nl(a, b) {
    var c = b.Hb();
    if (c && !Fa(null == c ? "" : String(c))) {
        c = c.toLowerCase();
        var e = a.Ug.get(c);
        if (e) {
            for (var f = Th(b), h = 0; h < f; h++) nl(a, Uh(b, h));
            ya(e, b);
            e.length || a.Ug.remove(c)
        }
    }
}

function ol(a, b) {
    var c = !1;
    (b = a.Ug.xl(b)) && b.length && (a.ki = 0, a.Nj = 0, c = a.Ug.get(b[0]), c = pl(a, c)) && (a.ro = b);
    return c
}

function pl(a, b) {
    if (b) {
        if (a.ki < b.length) {
            var c = b[a.ki];
            a.Xl = b
        }
        c && (c.Zo(), c.select())
    }
    return !!c
}
ml.prototype.clear = function() {
    this.Cb = ""
};

function ql(a, b, c) {
    Qk.call(this, a, b, c);
    this.hj = !0;
    Zk(this, !0);
    this.sb = this;
    this.pk = new ml;
    this.Hn = this.gc = null;
    this.jj = !1;
    this.Tv = null;
    this.tp = this.ih = this.rp = this.gk = !0;
    if (x) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
}
v(ql, Qk);
d = ql.prototype;
d.uc = function() {
    return this
};
d.Vh = function() {
    return 0
};
d.Zo = function() {};
d.fw = function() {
    this.jj = !0;
    ni(this.F(), "focused");
    this.sb && this.sb.select()
};
d.aw = function() {
    this.jj = !1;
    pi(this.F(), "focused")
};
d.hasFocus = function() {
    return this.jj
};
d.qc = function() {
    return !this.ih || ql.s.qc.call(this)
};
d.Sd = function(a) {
    this.ih ? ql.s.Sd.call(this, a) : this.hj = a
};
d.Mn = function() {
    return Nd
};
d.ul = function() {
    var a = Xk(this);
    return a ? a.firstChild : null
};
d.tl = function() {
    return null
};
d.Ci = function() {};
d.oj = function() {
    return ql.s.oj.call(this) + (this.ih ? "" : " " + this.Ya.Qq)
};
d.ll = function() {
    var a = this.qc(),
        b = this.Nv;
    if (a && b) return b;
    b = this.uw;
    if (!a && b) return b;
    b = this.Ya;
    return a && b.Pq ? b.Ag + " " + b.Pq : !a && b.Lq ? b.Ag + " " + b.Lq : ""
};
d.fd = function(a) {
    if (this.sb != a) {
        var b = !1;
        this.sb && (b = this.sb == this.Tv, Zk(this.sb, !1));
        if (this.sb = a) Zk(a, !0), b && a.select();
        this.dispatchEvent("change")
    }
};
d.oe = function() {
    return this.sb
};

function rl(a) {
    0 != a.gk && (a.gk = !1, a.ya && sl(a))
}

function sl(a) {
    function b(a) {
        var h = Uk(a);
        if (h) {
            var l = !e || c == a.getParent() && !f ? a.Ya.Iq : a.Ya.Hq;
            h.className = l;
            if (h = a.tl()) h.className = cl(a)
        }
        Sh(a, b)
    }
    var c = a,
        e = c.gk,
        f = c.tp;
    b(a)
}

function tl(a) {
    0 != a.rp && (a.rp = !1, a.ya && sl(a))
}

function ul(a) {
    if (0 != a.ih) {
        a.ih = !1;
        if (a.ya) {
            var b = Xk(a);
            b && (b.className = a.oj())
        }
        a.oe() == a && Uh(a, 0) && a.fd(Uh(a, 0))
    }
}
d.Jl = function() {
    ql.s.Jl.call(this);
    var a = this.F();
    Zh(a, "tree");
    P(a, "labelledby", Tk(this).id)
};
d.Fb = function() {
    ql.s.Fb.call(this);
    var a = this.F();
    a.className = this.Ya.Tq;
    a.setAttribute("hideFocus", "true");
    a = this.F();
    a.tabIndex = 0;
    var b = this.gc = new ei(a),
        c = this.Hn = new Ok(a);
    Qh(this).na(c, "focusout", this.aw).na(c, "focusin", this.fw).na(b, "key", this.yd).na(a, "mousedown", this.Un).na(a, "click", this.Un).na(a, "dblclick", this.Un);
    this.Jl()
};
d.vd = function() {
    ql.s.vd.call(this);
    this.gc.A();
    this.gc = null;
    this.Hn.A();
    this.Hn = null
};
d.Un = function(a) {
    var b = vl(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.ys(a);
            break;
        case "click":
            b.Ao(a);
            break;
        case "dblclick":
            b.vs(a)
    }
};
d.yd = function(a) {
    var b = this.pk;
    var c = !1;
    switch (a.keyCode) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                c = 40 == a.keyCode ? 1 : -1;
                var e = b.ro;
                if (e) {
                    var f = null,
                        h = !1;
                    if (b.Xl) {
                        var k = b.ki + c;
                        0 <= k && k < b.Xl.length ? (b.ki = k, f = b.Xl) : h = !0
                    }
                    f || (k = b.Nj + c, 0 <= k && k < e.length && (b.Nj = k), e.length > b.Nj && (f = b.Ug.get(e[b.Nj])), f && f.length && h && (b.ki = -1 == c ? f.length - 1 : 0));
                    pl(b, f) && (b.ro = e)
                }
                c = !0
            }
            break;
        case 8:
            e = b.Cb.length - 1;
            c = !0;
            0 < e ? (b.Cb = b.Cb.substring(0, e), ol(b, b.Cb)) : 0 == e ? b.Cb = "" : c = !1;
            break;
        case 27:
            b.Cb = "", c = !0
    }(b = c || this.sb && this.sb.Co(a)) || (b =
        this.pk, c = !1, a.ctrlKey || a.altKey || (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.Cb) && (b.Cb += e, c = ol(b, b.Cb))), b = c);
    b && a.preventDefault();
    return b
};

function vl(a, b) {
    for (var c = b.target; null != c;) {
        if (b = Sk[c.id]) return b;
        if (c == a.F()) break;
        c = c.parentNode
    }
    return null
}
d.createNode = function(a) {
    return new gl(a || Nd, this.Ya, this.pc())
};

function el(a, b) {
    a = a.pk;
    var c = b.Hb();
    if (c && !Fa(null == c ? "" : String(c))) {
        c = c.toLowerCase();
        var e = a.Ug.get(c);
        e ? e.push(b) : a.Ug.set(c, [b])
    }
}
d.removeNode = function(a) {
    nl(this.pk, a)
};

function Ig(a) {
    this.m = a;
    this.u = a.options.u;
    this.Ld = a.options.qe;
    this.Ca = a.options.Ca;
    this.Ya = {
        bo: 19,
        Tq: "blocklyTreeRoot",
        Qq: "blocklyHidden",
        Rq: "",
        rn: "blocklyTreeRow",
        Sq: "blocklyTreeLabel",
        Ag: "blocklyTreeIcon",
        pn: "blocklyTreeIconOpen",
        qn: "blocklyTreeIconNone",
        Uq: "blocklyTreeSelected"
    };
    this.mt = {
        rn: "blocklyTreeSeparator"
    };
    this.Ld && (this.Ya.cssTreeRow += a.u ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.mt.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.u ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.Ya.cssTreeIcon = "")
}
d = Ig.prototype;
d.width = 0;
d.height = 0;
d.Kj = null;
d.K = function() {
    var a = this.m,
        b = K(this.m);
    this.Fc = E("DIV", "blocklyToolboxDiv");
    this.Fc.setAttribute("dir", a.u ? "RTL" : "LTR");
    b.parentNode.insertBefore(this.Fc, b);
    w.O(this.Fc, "mousedown", this, function(a) {
        w.i.Sf(a) || a.target == this.Fc ? w.Pb(!1) : w.Pb(!0);
        w.Touch.Me()
    }, !1, !0);
    b = {
        ej: a.options.ej,
        Kb: a,
        u: a.u,
        $e: a.options.$e,
        qe: a.qe,
        Ca: a.options.Ca
    };
    this.I = null;
    this.I = a.qe ? new Mg(b) : new Ng(b);
    de(this.I.X("svg"), K(this.m));
    this.I.K(a);
    this.Ya.cleardotPath = a.options.Pd + "1x1.gif";
    this.Ya.cssCollapsedFolderIcon = "blocklyTreeIconClosed" +
        (a.u ? "Rtl" : "Ltr");
    this.Ed = b = new wl(this, this.Ya);
    ul(b);
    rl(b);
    tl(b);
    b.fd(null);
    a = this.hm(a.options.te);
    b.$(this.Fc);
    a && b.fd(a);
    Tg(this);
    this.position()
};
d.A = function() {
    this.I.A();
    this.Ed.A();
    F(this.Fc);
    this.Kj = this.m = null
};
d.cd = function() {
    return this.width
};
d.Xh = function() {
    return this.height
};
d.position = function() {
    var a = this.Fc;
    if (a) {
        var b = K(this.m);
        b = w.jt(b);
        this.Ld ? (a.style.left = "0", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, this.Ca == w.wf ? a.style.top = "0" : a.style.bottom = "0") : (this.Ca == w.Wd ? a.style.right = "0" : a.style.left = "0", a.style.height = b.height + "px", this.width = a.offsetWidth);
        this.I.position()
    }
};
d.hm = function(a) {
    this.Ed.Qs();
    this.Ed.$d = [];
    this.Gr = !1;
    a = xl(this, a, this.Ed, this.m.options.Pd);
    if (this.Ed.$d.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    yf(this.m);
    return a
};

function xl(a, b, c, e) {
    for (var f = null, h = null, k = 0, l; l = b.childNodes[k]; k++)
        if (l.tagName) switch (l.tagName.toUpperCase()) {
            case "CATEGORY":
                h = w.i.jc(l.getAttribute("name"));
                h = a.Ed.createNode(h);
                h.$d = [];
                c.add(h);
                var m = l.getAttribute("custom");
                m ? h.$d = m : (m = xl(a, l, h, e)) && (f = m);
                m = w.i.jc(l.getAttribute("colour"));
                p(m) ? (h.Xn = /^#[0-9a-fA-F]{6}$/.test(m) ? m : w.Lr(Number(m)), a.Gr = !0) : h.Xn = "";
                "true" == l.getAttribute("expanded") ? (h.$d.length && (f = h), h.Sd(!0)) : h.Sd(!1);
                h = l;
                break;
            case "SEP":
                h && ("CATEGORY" == h.tagName.toUpperCase() ?
                    c.add(new yl(a.mt)) : (l = parseFloat(l.getAttribute("gap")), !isNaN(l) && h && h.setAttribute("gap", l)));
                break;
            case "BLOCK":
            case "SHADOW":
            case "LABEL":
            case "BUTTON":
                c.$d.push(l), h = l
        }
    return f
}

function Tg(a, b) {
    b = (b || a.Ed).Ef(!1);
    for (var c = 0, e; e = b[c]; c++) {
        var f = Xk(e);
        if (f) {
            var h = a.Gr ? "8px solid " + (e.Xn || "#ddd") : "none";
            a.m.u ? f.style.borderRight = h : f.style.borderLeft = h
        }
        Tg(a, e)
    }
}
d.Uh = function() {
    if (!this.Fc) return null;
    var a = this.Fc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        e = a.width;
    a = a.height;
    return this.Ca == w.vf ? new og(-1E7, -1E7, 1E7 + b + e, 2E7) : this.Ca == w.Wd ? new og(b, -1E7, 1E7 + e, 2E7) : this.Ca == w.wf ? new og(-1E7, -1E7, 2E7, 1E7 + c + a) : new og(0, c, 2E7, 1E7 + e)
};

function wl(a, b) {
    this.ca = a;
    ql.call(this, Nd, b)
}
v(wl, ql);
wl.prototype.Fb = function() {
    wl.s.Fb.call(this);
    if (Bb) {
        var a = this.F();
        w.O(a, "touchend", this, this.ow)
    }
};
wl.prototype.ow = function(a) {
    var b = vl(this, a);
    b && "touchend" === a.type && setTimeout(function() {
        b.Ao(a)
    }, 1)
};
wl.prototype.createNode = function(a) {
    a = a ? Gd(a) : Nd;
    return new zl(this.ca, a, this.Ya, this.pc())
};
wl.prototype.fd = function(a) {
    var b = this.ca;
    if (a != this.sb && a != b.Ed) {
        b.Kj && (Xk(b.Kj).style.backgroundColor = "");
        if (a) {
            var c = a.Xn || "#57e";
            Xk(a).style.backgroundColor = c;
            Tg(b, a)
        }
        c = this.oe();
        ql.prototype.fd.call(this, a);
        a && a.$d && a.$d.length ? (b.I.show(a.$d), b.Kj != a && b.I.$o()) : b.I.La();
        c != a && c != this && (c = new Dc(null, "category", c && Ed(c.Aj), a && Ed(a.Aj)), c.Dc = b.m.id, w.j.V(c));
        a && (b.Kj = a)
    }
};

function zl(a, b, c, e) {
    Qk.call(this, b, c, e);
    a && (b = function() {
        w.oh(a.m)
    }, cc(a.Ed, "expand", b), cc(a.Ed, "collapse", b))
}
v(zl, gl);
d = zl.prototype;
d.Mn = function() {
    return Ld("span")
};
d.Ao = function() {
    Wh(this) && this.Ij ? (this.toggle(), this.select()) : this.Pl() ? this.uc().fd(null) : this.select();
    $k(this)
};
d.ys = function() {};
d.vs = function() {};
d.Co = function(a) {
    if (this.mg.ca.Ld) {
        var b = {};
        b[39] = this.wi ? 38 : 40;
        b[37] = this.wi ? 40 : 38;
        b[38] = 37;
        b[40] = 39;
        a.keyCode = b[a.keyCode] || a.keyCode
    }
    return zl.s.Co.call(this, a)
};

function yl(a) {
    zl.call(this, null, Nd, a)
}
v(yl, zl);
w.od = {};
w.od.IB = "";
w.od.ht = null;
w.od.gs = "";
w.od.Nf = function(a, b) {
    if (!w.od.ht) {
        var c = ".blocklyDraggable {}\n";
        a && (c += w.od.Ct.join("\n"), w.Nt && (c += w.Nt.CSS.join("\n")));
        w.od.gs = b.replace(/[\\\/]$/, "");
        c = c.replace(/<<<PATH>>>/g, w.od.gs);
        a = document.createElement("style");
        document.head.insertBefore(a, document.head.firstChild);
        a.appendChild(document.createTextNode(c));
        w.od.ht = a.sheet
    }
};
w.od.RB = function() {
    console.warn("Deprecated call to Blockly.Css.setCursor.See https://github.com/google/blockly/issues/981 for context")
};
w.od.Ct = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
    "top: 0;", "left: 0;", "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: .9;", "padding: 2px;", "position: absolute;",
    "z-index: 100000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;",
    "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxGrab {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {",
    "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {",
    "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyFlyoutButton {", "fill: #888;", "cursor: default;", "}", ".blocklyFlyoutButtonShadow {", "fill: #666;", "}", ".blocklyFlyoutButton:hover {", "fill: #aaa;", "}", ".blocklyFlyoutLabel {", "cursor: default;", "}", ".blocklyFlyoutLabelBackground {", "opacity: 0;", "}", ".blocklyFlyoutLabelText {", "fill: #000;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {", "user-select: none;",
    "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;",
    "}", ".blocklyCommentForeignObject {", "position: relative;", "z-index: 0;", "}", ".blocklyCommentRect {", "fill: #E7DE8E;", "stroke: #bcA903;", "stroke-width: 1px", "}", ".blocklyCommentTarget {", "fill: transparent;", "stroke: #bcA903;", "}", ".blocklyCommentTargetFocused {", "fill: none;", "}", ".blocklyCommentHandleTarget {", "fill: none;", "}", ".blocklyCommentHandleTargetFocused {", "fill: transparent;", "}", ".blocklyFocused>.blocklyCommentRect {", "fill: #B9B272;", "stroke: #B9B272;", "}", ".blocklySelected>.blocklyCommentTarget {",
    "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklyCommentTextarea {", "background-color: #fef49c;", "border: 0;", "outline: 0;", "margin: 0;", "padding: 3px;", "resize: none;", "display: block;", "overflow: hidden;", "}", ".blocklyCommentDeleteIcon {", "cursor: pointer;", "fill: #000;", "display: none", "}", ".blocklySelected > .blocklyCommentDeleteIcon {", "display: block", "}", ".blocklyDeleteIconShape {", "fill: #000;", "stroke: #000;", "stroke-width: 1px;", "}", ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
    "stroke: #fc3;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyTransparentBackground {", "opacity: 0;", "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;",
    "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;", "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}",
    ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;", "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;",
    "stroke-width: 2;", "stroke-linecap: round;", "pointer-events: none;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "max-height: 300px !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;", "overflow-x: visible;", "overflow-y: auto;",
    "position: absolute;", "user-select: none;", "-moz-user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "z-index: 70;", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {",
    "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;", "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;",
    "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "background-position: 0 -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0 -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;",
    "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyToolboxDelete .blocklyTreeLabel {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {",
    "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;", "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {",
    "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;",
    "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",
    ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {",
    "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;",
    "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;", "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {",
    "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];
w.J = {};
w.J.ka = null;
w.J.Tj = null;
w.J.Oh = null;
w.J.X = function() {
    w.J.ka || (w.J.ka = E("DIV", "blocklyWidgetDiv"), document.body.appendChild(w.J.ka))
};
w.J.show = function(a, b, c) {
    w.J.La();
    w.J.Tj = a;
    w.J.Oh = c;
    w.J.ka.style.top = Tf().y + "px";
    w.J.ka.style.direction = b ? "rtl" : "ltr";
    w.J.ka.style.display = "block"
};
w.J.La = function() {
    w.J.Tj && (w.J.Tj = null, w.J.ka.style.display = "none", w.J.ka.style.left = "", w.J.ka.style.top = "", w.J.Oh && w.J.Oh(), w.J.Oh = null, ce(w.J.ka))
};
w.J.Y = function() {
    return !!w.J.Tj
};
w.J.yj = function(a) {
    w.J.Tj == a && w.J.La()
};
w.J.position = function(a, b, c, e, f) {
    b < e.y && (b = e.y);
    f ? a > c.width + e.x && (a = c.width + e.x) : a < e.x && (a = e.x);
    w.J.Hs(a, b, c.height)
};
w.J.Hs = function(a, b, c) {
    w.J.ka.style.left = a + "px";
    w.J.ka.style.top = b + "px";
    w.J.ka.style.height = c + "px"
};
w.J.Lo = function(a, b, c, e) {
    w.J.Hs(w.J.Wu(a, b, c, e), w.J.Xu(a, b, c), c.height)
};
w.J.Wu = function(a, b, c, e) {
    if (e) return b = Math.max(b.right - c.width, a.left), Math.min(b, a.right - c.width);
    b = Math.min(b.left, a.right - c.width);
    return Math.max(b, a.left)
};
w.J.Xu = function(a, b, c) {
    return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom
};

function Al(a) {
    this.Xi = a;
    this.X()
}
d = Al.prototype;
d.wa = null;
d.fe = null;
d.Xi = null;
d.dg = 1;
d.ik = null;
d.X = function() {
    this.wa || (this.wa = w.i.B("svg", {
        xmlns: w.Tm,
        "xmlns:html": w.rf,
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.Xi), this.fe = w.i.B("g", {}, this.wa))
};

function zf(a, b) {
    a.fe.appendChild(b);
    a.wa.style.display = "block";
    a.ik = new C(0, 0)
}
d.lf = function(a, b) {
    this.ik = new C(a * this.dg, b * this.dg);
    a = this.ik.x;
    b = this.ik.y;
    a = a.toFixed(0);
    b = b.toFixed(0);
    this.wa.style.display = "block";
    w.i.bk(this.wa, "translate3d(" + a + "px, " + b + "px, 0px)")
};
d.Bl = function() {
    var a = w.i.tc(this.wa);
    return new C(a.x / this.dg, a.y / this.dg)
};
d.rc = function() {
    return this.fe
};
d.Ui = function(a) {
    a ? a.appendChild(this.fe.firstChild) : this.fe.removeChild(this.fe.firstChild);
    this.wa.style.display = "none";
    this.ik = null
};
w.Nf = function(a, b) {
    w.Zu();
    p(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!ee(document, a)) throw "Error: container is not in current document.";
    b = new Wf(b || {});
    var c = E("DIV", "injectionDiv");
    a.appendChild(c);
    a = w.Zi(c, b);
    var e = new Al(c);
    c = new vg(c);
    b = w.nv(a, b, e, c);
    w.yw(b);
    w.Wf = b;
    w.oh(b);
    return b
};
w.Zi = function(a, b) {
    a.setAttribute("dir", "LTR");
    Oh = b.u;
    w.od.Nf(b.qw, b.Pd);
    a = w.i.B("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, a);
    var c = w.i.B("defs", {}, a),
        e = String(Math.random()).substring(2),
        f = w.i.B("filter", {
            id: "blocklyEmbossFilter" + e
        }, c);
    w.i.B("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var h = w.i.B("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, f);
    w.i.B("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, h);
    w.i.B("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    w.i.B("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    b.nr = f.id;
    f = w.i.B("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, c);
    w.i.B("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    w.i.B("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    b.ej = f.id;
    f = b.Ar;
    c = w.i.B("pattern", {
        id: "blocklyGridPattern" + e,
        patternUnits: "userSpaceOnUse"
    }, c);
    0 < f.length && 0 < f.spacing ? (w.i.B("line", {
        stroke: f.colour
    }, c), 1 < f.length && w.i.B("line", {
        stroke: f.colour
    }, c)) : w.i.B("line", {}, c);
    b.Br = c;
    return a
};
w.nv = function(a, b, c, e) {
    b.Kb = null;
    var f = new Fg(b, c, e);
    f.scale = b.Zb.et;
    a.appendChild(f.X("blocklyMainBackground"));
    !b.Er && b.te && (c = Lg(f, "svg"), w.i.Dj(c, a));
    f.translate(0, 0);
    w.Wf = f;
    b.readOnly || b.Hr || f.Vc(function() {
        if (!f.pb()) {
            var a = f.qb(),
                c = a.Ab + a.lb,
                e = a.De + a.wb;
            if (a.nc < e || a.nc + a.mc > a.bb + e || a.Hc < (b.u ? a.Ab : c) || a.Hc + a.Ic > (b.u ? a.xa : a.xa + c))
                for (var m = ad(f, !1), n = 0, q; q = m[n]; n++) {
                    var t = q.la(),
                        z = q.Gb(),
                        y = e + 25 - z.height - t.y;
                    0 < y && q.moveBy(0, y);
                    y = e + a.bb - 25 - t.y;
                    0 > y && q.moveBy(0, y);
                    y = 25 + c - t.x - (b.u ? 0 : z.width);
                    0 < y &&
                        q.moveBy(y, 0);
                    t = c + a.xa - 25 - t.x + (b.u ? z.width : 0);
                    0 > t && q.moveBy(t, 0)
                }
        }
    });
    w.oh(f);
    w.J.X();
    w.C.X();
    return f
};
w.yw = function(a) {
    var b = a.options,
        c = K(a);
    w.O(c.parentNode, "contextmenu", null, function(a) {
        w.i.Ql(a) || a.preventDefault()
    });
    c = w.O(window, "resize", null, function() {
        w.Pb(!0);
        w.oh(a)
    });
    a.nm = c;
    w.Nf.Qu();
    b.te && (a.ca ? a.ca.K(a) : a.I && (a.I.K(a), a.I.show(b.te.childNodes), a.I.$o(), a.scrollX = a.I.ia, b.Ca == w.Wd && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.Hr && (a.hb = new Yf(a), a.hb.resize());
    b.rw && w.Nf.Jw(b.Pd, a)
};
w.Nf.Qu = function() {
    w.Jv || (w.O(document, "keydown", null, w.ex), w.Gc(document, "touchend", null, w.Vf), w.Gc(document, "touchcancel", null, w.Vf), pb && w.O(window, "orientationchange", document, function() {
        w.oh(w.Yh())
    }));
    w.Jv = !0
};
w.Nf.Jw = function(a, b) {
    function c() {
        for (; f.length;) w.Ma(f.pop());
        e.preload()
    }
    var e = b.Zd;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(w.O(document, "mousemove", null, c, !0));
    f.push(w.O(document, "touchstart", null, c, !0))
};
w.ot = function(a) {
    console.warn("Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.");
    w.Yh().ot(a)
};
w.Wf = null;
w.selected = null;
w.fl = [];
w.Vi = null;
w.Rk = null;
w.FB = null;
w.Lr = function(a) {
    var b = w.Rt,
        c = 255 * w.St,
        e = 0,
        f = 0,
        h = 0;
    if (0 == b) h = f = e = c;
    else {
        var k = Math.floor(a / 60),
            l = a / 60 - k;
        a = c * (1 - b);
        var m = c * (1 - b * l);
        b = c * (1 - b * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = c;
                h = a;
                break;
            case 2:
                e = a;
                f = c;
                h = b;
                break;
            case 3:
                e = a;
                f = m;
                h = c;
                break;
            case 4:
                e = b;
                f = a;
                h = c;
                break;
            case 5:
                e = c;
                f = a;
                h = m;
                break;
            case 6:
            case 0:
                e = c, f = b, h = a
        }
    }
    return lj([Math.floor(e), Math.floor(f), Math.floor(h)])
};
w.jt = function(a) {
    return {
        width: a.kq,
        height: a.iq
    }
};
w.QB = function(a) {
    yf(a)
};
w.oh = function(a) {
    for (; a.options.Kb;) a = a.options.Kb;
    var b = K(a),
        c = b.parentNode;
    if (c) {
        var e = c.offsetWidth;
        c = c.offsetHeight;
        b.kq != e && (b.setAttribute("width", e + "px"), b.kq = e);
        b.iq != c && (b.setAttribute("height", c + "px"), b.iq = c);
        a.resize()
    }
};
w.ex = function(a) {
    if (!w.Wf.options.readOnly && !w.i.Ql(a)) {
        var b = !1;
        if (27 == a.keyCode) w.Pb();
        else if (8 == a.keyCode || 46 == a.keyCode) {
            a.preventDefault();
            if (w.Wf.pb()) return;
            w.selected && w.selected.fc() && (b = !0)
        } else if (a.altKey || a.ctrlKey || a.metaKey) {
            if (w.Wf.pb()) return;
            w.selected && w.selected.fc() && w.selected.se() && (67 == a.keyCode ? (w.Pb(), w.on(w.selected)) : 88 != a.keyCode || w.selected.o.Nd || (w.on(w.selected), b = !0));
            86 == a.keyCode ? w.Vi && (w.j.S(!0), a = w.Rk, a.Nd && (a = a.ph), Qg(a), w.j.S(!1)) : 90 == a.keyCode && (w.Pb(), w.Wf.Dp(a.shiftKey))
        }
        b &&
            !w.selected.o.Nd && (w.j.S(!0), w.Pb(), w.selected.A(!0, !0), w.j.S(!1))
    }
};
w.on = function(a) {
    if (a.Qr) var b = a.mk();
    else {
        b = w.D.yf(a);
        w.D.Ev(b);
        var c = a.la();
        b.setAttribute("x", a.u ? -c.x : c.x);
        b.setAttribute("y", c.y)
    }
    w.Vi = b;
    w.Rk = a.o
};
w.lr = function(a) {
    var b = w.Vi,
        c = w.Rk;
    w.on(a);
    Qg(a.o);
    w.Vi = b;
    w.Rk = c
};
w.PB = function(a) {
    w.i.Ql(a) || a.preventDefault()
};
w.Pb = function(a) {
    w.C.La();
    w.J.La();
    a || (a = w.Yh(), a.ca && a.ca.I && a.ca.I.Lh && a.ca.Ed.fd(null))
};
w.Vc = function(a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return w.Yh().Vc(a)
};
w.Yh = function() {
    return w.Wf
};
w.alert = function(a, b) {
    window.alert(a);
    b && b()
};
w.confirm = function(a, b) {
    b(window.confirm(a))
};
w.prompt = function(a, b, c) {
    c(window.prompt(a, b))
};
w.Dw = function(a) {
    return function() {
        Gh(this, a)
    }
};
w.Bg = function(a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c) {
            var e = c.type;
            null == e || "" === e ? console.warn("Block definition #" + b + " in JSON array is missing a type attribute. Skipping.") : (w.H[e] && console.warn("Block definition #" + b + ' in JSON array overwrites prior definition of "' + e + '".'), w.H[e] = {
                K: w.Dw(c)
            })
        } else console.warn("Block definition #" + b + " in JSON array is " + c + ". Skipping.")
    }
};
w.O = function(a, b, c, e, f, h) {
    function k(a) {
        var b = !f;
        a = w.Touch.Fx(a);
        for (var h = 0, k; k = a[h]; h++)
            if (!b || w.Touch.qp(k)) w.Touch.Cx(k), c ? e.call(c, k) : e(k), l = !0
    }
    var l = !1,
        m = [];
    if (g.PointerEvent && b in w.Touch.Xd)
        for (var n = 0, q; q = w.Touch.Xd[b][n]; n++) a.addEventListener(q, k, !1), m.push([a, q, k]);
    else if (a.addEventListener(b, k, !1), m.push([a, b, k]), b in w.Touch.Xd) {
        var t = function(a) {
            k(a);
            var b = !h;
            l && b && a.preventDefault()
        };
        for (n = 0; q = w.Touch.Xd[b][n]; n++) a.addEventListener(q, t, !1), m.push([a, q, t])
    }
    return m
};
w.Gc = function(a, b, c, e) {
    function f(a) {
        c ? e.call(c, a) : e(a)
    }
    var h = [],
        k = g.window;
    if (k && k.PointerEvent && b in w.Touch.Xd) {
        k = 0;
        for (var l; l = w.Touch.Xd[b][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f])
    } else if (a.addEventListener(b, f, !1), h.push([a, b, f]), b in w.Touch.Xd) {
        var m = function(a) {
            if (a.changedTouches && 1 == a.changedTouches.length) {
                var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY
            }
            f(a);
            a.preventDefault()
        };
        for (k = 0; l = w.Touch.Xd[b][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m])
    }
    return h
};
w.Ma = function(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
};
w.Rf = function(a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
w.Zu = function() {
    w.bc("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    w.bc("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    w.bc("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    w.bc("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    w.bc("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    w.bc("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    w.bc("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    w.bc("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    w.bc("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    w.bc("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    w.bc("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    w.bc("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    w.bc("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    w.bc("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    w.bc("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    w.bc("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
w.bc = function(a, b, c) {
    for (var e = "Blockly", f = w, h = 0; h < b.length; ++h) e += "." + b[h], f && (f = f[b[h]]);
    f && f !== c && (a = (void 0 === c ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
g.console || (g.console = {
    log: function() {},
    warn: function() {}
});
g.Blockly || (g.Blockly = {});
g.Blockly.getMainWorkspace = w.Yh;
g.Blockly.addChangeListener = w.Vc;

function Bl(a, b) {
    var c = a.className;
    c = p(c) && c.match(/\S+/g) || [];
    for (var e = Da(arguments, 1), f = 0; f < e.length; f++) xa(c, e[f]) || c.push(e[f]);
    c = c.join(" ");
    a.className = c
};
var Cl = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    Dl = "ace ar fa he mzn ps".split(" "),
    El = window.BlocklyGamesLang,
    Fl = window.BlocklyGamesLanguages,
    Gl = !!window.location.pathname.match(/\.html$/),
    Pg = null,
    S, Hl = Number,
    Il, Jl = window.location.search.match(/[?&]level=([^&]+)/);
Il = Jl ? decodeURIComponent(Jl[1].replace(/\+/g, "%20")) : "NaN";
var Kl = Hl(Il);
S = isNaN(Kl) ? 1 : Math.min(Math.max(1, Kl), 10);

function Ll() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != Dl.indexOf(El) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", El);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < Fl.length; c++) {
            var e = Fl[c];
            b.push([Cl[e], e])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var f = b[c];
            e = f[1];
            f = new Option(f[0], e);
            e == El && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!Ml(c), a && b && Bl(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Nl, 1)
}

function Ml(a) {
    var b = Ol;
    try {
        var c = window.localStorage[b + a]
    } catch (e) {}
    return c
}

function T(a) {
    var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    return null === b ? "[Unknown message: " + a + "]" : b
}

function Pl(a, b) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function Nl() {
    if (!Gl) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function(b) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
w.g.LB = {};
w.g.ADD_COMMENT = "Ajouter un commentaire";
w.g.CANNOT_DELETE_VARIABLE_PROCEDURE = "Impossible de supprimer la variable '%1' parce qu\u2019elle fait partie de la d\u00e9finition de la fonction '%2'";
w.g.CHANGE_VALUE_TITLE = "Modifier la valeur :";
w.g.CLEAN_UP = "Nettoyer les blocs";
w.g.COLLAPSE_ALL = "R\u00e9duire les blocs";
w.g.COLLAPSE_BLOCK = "R\u00e9duire le bloc";
w.g.COLOUR_BLEND_COLOUR1 = "couleur 1";
w.g.COLOUR_BLEND_COLOUR2 = "couleur 2";
w.g.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
w.g.COLOUR_BLEND_RATIO = "taux";
w.g.COLOUR_BLEND_TITLE = "m\u00e9langer";
w.g.COLOUR_BLEND_TOOLTIP = "M\u00e9lange deux couleurs dans une proportion donn\u00e9e (de 0.0 \u00e0 1.0).";
w.g.COLOUR_PICKER_HELPURL = "https://fr.wikipedia.org/wiki/Couleur";
w.g.COLOUR_PICKER_TOOLTIP = "Choisir une couleur dans la palette.";
w.g.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
w.g.COLOUR_RANDOM_TITLE = "couleur al\u00e9atoire";
w.g.COLOUR_RANDOM_TOOLTIP = "Choisir une couleur au hasard.";
w.g.COLOUR_RGB_BLUE = "bleu";
w.g.COLOUR_RGB_GREEN = "vert";
w.g.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
w.g.COLOUR_RGB_RED = "rouge";
w.g.COLOUR_RGB_TITLE = "colorier en";
w.g.COLOUR_RGB_TOOLTIP = "Cr\u00e9er une couleur avec la quantit\u00e9 sp\u00e9cifi\u00e9e de rouge, vert et bleu. Les valeurs doivent \u00eatre comprises entre 0 et 100.";
w.g.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
w.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "quitter la boucle";
w.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "passer \u00e0 l\u2019it\u00e9ration de boucle suivante";
w.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Sortir de la boucle englobante.";
w.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Sauter le reste de cette boucle, et poursuivre avec l\u2019it\u00e9ration suivante.";
w.g.CONTROLS_FLOW_STATEMENTS_WARNING = "Attention : Ce bloc ne devrait \u00eatre utilis\u00e9 que dans une boucle.";
w.g.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
w.g.CONTROLS_FOREACH_TITLE = "pour chaque \u00e9l\u00e9ment %1 dans la liste %2";
w.g.CONTROLS_FOREACH_TOOLTIP = "Pour chaque \u00e9l\u00e9ment d\u2019une liste, assigner la valeur de l\u2019\u00e9l\u00e9ment \u00e0 la variable '%1', puis ex\u00e9cuter des instructions.";
w.g.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
w.g.CONTROLS_FOR_TITLE = "compter avec %1 de %2 \u00e0 %3 par %4";
w.g.CONTROLS_FOR_TOOLTIP = "Faire prendre \u00e0 la variable \u00ab\u202f%1\u202f\u00bb les valeurs depuis le nombre de d\u00e9but jusqu\u2019au nombre de fin, en s\u2019incr\u00e9mentant du pas sp\u00e9cifi\u00e9, et ex\u00e9cuter les instructions sp\u00e9cifi\u00e9es.";
w.g.CONTROLS_IF_ELSEIF_TOOLTIP = "Ajouter une condition au bloc si.";
w.g.CONTROLS_IF_ELSE_TOOLTIP = "Ajouter une condition finale fourre-tout au bloc si.";
w.g.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
w.g.CONTROLS_IF_IF_TOOLTIP = "Ajouter, supprimer ou r\u00e9ordonner les sections pour reconfigurer ce bloc si.";
w.g.CONTROLS_IF_MSG_ELSE = "sinon";
w.g.CONTROLS_IF_MSG_ELSEIF = "sinon si";
w.g.CONTROLS_IF_MSG_IF = "si";
w.g.CONTROLS_IF_TOOLTIP_1 = "Si une valeur est vraie, alors ex\u00e9cuter certains ordres.";
w.g.CONTROLS_IF_TOOLTIP_2 = "Si une valeur est vraie, alors ex\u00e9cuter le premier bloc d\u2019ordres. Sinon, ex\u00e9cuter le second bloc d\u2019ordres.";
w.g.CONTROLS_IF_TOOLTIP_3 = "Si la premi\u00e8re valeur est vraie, alors ex\u00e9cuter le premier bloc d\u2019ordres. Sinon, si la seconde valeur est vraie, ex\u00e9cuter le second bloc d\u2019ordres.";
w.g.CONTROLS_IF_TOOLTIP_4 = "Si la premi\u00e8re valeur est vraie, alors ex\u00e9cuter le premier bloc d\u2019ordres. Sinon, si la seconde valeur est vraie, ex\u00e9cuter le second bloc d\u2019ordres. Si aucune des valeurs n\u2019est vraie, ex\u00e9cuter le dernier bloc d\u2019ordres.";
w.g.CONTROLS_REPEAT_HELPURL = "http://fr.wikipedia.org/wiki/Boucle_for";
w.g.CONTROLS_REPEAT_INPUT_DO = "faire";
w.g.CONTROLS_REPEAT_TITLE = "r\u00e9p\u00e9ter %1 fois";
w.g.CONTROLS_REPEAT_TOOLTIP = "Ex\u00e9cuter des instructions plusieurs fois.";
w.g.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
w.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "r\u00e9p\u00e9ter jusqu\u2019\u00e0";
w.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "r\u00e9p\u00e9ter tant que";
w.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Tant qu\u2019une valeur est fausse, alors ex\u00e9cuter des instructions.";
w.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Tant qu\u2019une valeur est vraie, alors ex\u00e9cuter des instructions.";
w.g.DELETE_ALL_BLOCKS = "Supprimer ces %1 blocs\u202f?";
w.g.DELETE_BLOCK = "Supprimer le bloc";
w.g.DELETE_VARIABLE = "Supprimer la variable '%1'";
w.g.DELETE_VARIABLE_CONFIRMATION = "Supprimer %1 utilisations de la variable '%2'\u202f?";
w.g.DELETE_X_BLOCKS = "Supprimer %1 blocs";
w.g.DISABLE_BLOCK = "D\u00e9sactiver le bloc";
w.g.DUPLICATE_BLOCK = "Dupliquer";
w.g.DUPLICATE_COMMENT = "Dupliquer le commentaire";
w.g.ENABLE_BLOCK = "Activer le bloc";
w.g.EXPAND_ALL = "D\u00e9velopper les blocs";
w.g.EXPAND_BLOCK = "D\u00e9velopper le bloc";
w.g.EXTERNAL_INPUTS = "Entr\u00e9es externes";
w.g.HELP = "Aide";
w.g.INLINE_INPUTS = "Entr\u00e9es en ligne";
w.g.IOS_CANCEL = "Annuler";
w.g.IOS_ERROR = "Erreur";
w.g.IOS_OK = "OK";
w.g.IOS_PROCEDURES_ADD_INPUT = "+ Ajouter une entr\u00e9e";
w.g.IOS_PROCEDURES_ALLOW_STATEMENTS = "Ordres autoris\u00e9s";
w.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "Cette fonction a des entr\u00e9es dupliqu\u00e9es.";
w.g.IOS_PROCEDURES_INPUTS = "ENTR\u00c9ES";
w.g.IOS_VARIABLES_ADD_BUTTON = "Ajouter";
w.g.IOS_VARIABLES_ADD_VARIABLE = "+ Ajouter une variable";
w.g.IOS_VARIABLES_DELETE_BUTTON = "Supprimer";
w.g.IOS_VARIABLES_EMPTY_NAME_ERROR = "Vous ne pouvez pas utiliser un nom de variable vide.";
w.g.IOS_VARIABLES_RENAME_BUTTON = "Renommer";
w.g.IOS_VARIABLES_VARIABLE_NAME = "Nom de la variable";
w.g.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
w.g.LISTS_CREATE_EMPTY_TITLE = "cr\u00e9er une liste vide";
w.g.LISTS_CREATE_EMPTY_TOOLTIP = "Renvoyer une liste, de longueur 0, ne contenant aucun enregistrement";
w.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "liste";
w.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Ajouter, supprimer, ou r\u00e9ordonner les sections pour reconfigurer ce bloc de liste.";
w.g.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
w.g.LISTS_CREATE_WITH_INPUT_WITH = "cr\u00e9er une liste avec";
w.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Ajouter un \u00e9l\u00e9ment \u00e0 la liste.";
w.g.LISTS_CREATE_WITH_TOOLTIP = "Cr\u00e9er une liste avec un nombre quelconque d\u2019\u00e9l\u00e9ments.";
w.g.LISTS_GET_INDEX_FIRST = "premier";
w.g.LISTS_GET_INDEX_FROM_END = "# depuis la fin";
w.g.LISTS_GET_INDEX_FROM_START = "#";
w.g.LISTS_GET_INDEX_GET = "obtenir";
w.g.LISTS_GET_INDEX_GET_REMOVE = "obtenir et supprimer";
w.g.LISTS_GET_INDEX_LAST = "dernier";
w.g.LISTS_GET_INDEX_RANDOM = "al\u00e9atoire";
w.g.LISTS_GET_INDEX_REMOVE = "supprimer";
w.g.LISTS_GET_INDEX_TAIL = "";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Renvoie le premier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Renvoie l\u2019\u00e9l\u00e9ment \u00e0 la position indiqu\u00e9e dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Renvoie le dernier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Renvoie un \u00e9l\u00e9ment au hasard dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Supprime et renvoie le premier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Supprime et renvoie l\u2019\u00e9l\u00e9ment \u00e0 la position indiqu\u00e9e dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Supprime et renvoie le dernier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Supprime et renvoie un \u00e9l\u00e9ment au hasard dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Supprime le premier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Supprime l\u2019\u00e9l\u00e9ment \u00e0 la position indiqu\u00e9e dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Supprime le dernier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Supprime un \u00e9l\u00e9ment au hasard dans une liste.";
w.g.LISTS_GET_SUBLIST_END_FROM_END = "jusqu\u2019\u00e0 # depuis la fin";
w.g.LISTS_GET_SUBLIST_END_FROM_START = "jusqu\u2019\u00e0 #";
w.g.LISTS_GET_SUBLIST_END_LAST = "jusqu\u2019\u00e0 la fin";
w.g.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
w.g.LISTS_GET_SUBLIST_START_FIRST = "obtenir la sous-liste depuis le d\u00e9but";
w.g.LISTS_GET_SUBLIST_START_FROM_END = "obtenir la sous-liste depuis # depuis la fin";
w.g.LISTS_GET_SUBLIST_START_FROM_START = "obtenir la sous-liste depuis #";
w.g.LISTS_GET_SUBLIST_TAIL = "";
w.g.LISTS_GET_SUBLIST_TOOLTIP = "Cr\u00e9e une copie de la partie sp\u00e9cifi\u00e9e d\u2019une liste.";
w.g.LISTS_INDEX_FROM_END_TOOLTIP = "%1 est le dernier \u00e9l\u00e9ment.";
w.g.LISTS_INDEX_FROM_START_TOOLTIP = "%1 est le premier \u00e9l\u00e9ment.";
w.g.LISTS_INDEX_OF_FIRST = "trouver la premi\u00e8re occurrence de l\u2019\u00e9l\u00e9ment";
w.g.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
w.g.LISTS_INDEX_OF_LAST = "trouver la derni\u00e8re occurrence de l\u2019\u00e9l\u00e9ment";
w.g.LISTS_INDEX_OF_TOOLTIP = "Renvoie l\u2019index de la premi\u00e8re/derni\u00e8re occurrence de l\u2019\u00e9l\u00e9ment dans la liste. Renvoie %1 si l'\u00e9l\u00e9ment n'est pas trouv\u00e9.";
w.g.LISTS_INLIST = "dans la liste";
w.g.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
w.g.LISTS_ISEMPTY_TITLE = "%1 est vide";
w.g.LISTS_ISEMPTY_TOOLTIP = "Renvoie vrai si la liste est vide.";
w.g.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
w.g.LISTS_LENGTH_TITLE = "longueur de %1";
w.g.LISTS_LENGTH_TOOLTIP = "Renvoie la longueur d\u2019une liste.";
w.g.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
w.g.LISTS_REPEAT_TITLE = "cr\u00e9er une liste avec l\u2019\u00e9l\u00e9ment %1 r\u00e9p\u00e9t\u00e9 %2 fois";
w.g.LISTS_REPEAT_TOOLTIP = "Cr\u00e9e une liste consistant en la valeur fournie r\u00e9p\u00e9t\u00e9e le nombre de fois indiqu\u00e9.";
w.g.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
w.g.LISTS_REVERSE_MESSAGE0 = "inverser %1";
w.g.LISTS_REVERSE_TOOLTIP = "Inverser la copie d\u2019une liste.";
w.g.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
w.g.LISTS_SET_INDEX_INPUT_TO = "comme";
w.g.LISTS_SET_INDEX_INSERT = "ins\u00e9rer en";
w.g.LISTS_SET_INDEX_SET = "mettre";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Ins\u00e8re l\u2019\u00e9l\u00e9ment au d\u00e9but d\u2019une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Ins\u00e8re l\u2019\u00e9l\u00e9ment \u00e0 la position indiqu\u00e9e dans une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Ajouter l\u2019\u00e9l\u00e9ment \u00e0 la fin d\u2019une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Ins\u00e8re l\u2019\u00e9l\u00e9ment au hasard dans une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Fixe le premier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Met \u00e0 jour l\u2019\u00e9l\u00e9ment \u00e0 la position indiqu\u00e9e dans une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Fixe le dernier \u00e9l\u00e9ment dans une liste.";
w.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Fixe un \u00e9l\u00e9ment au hasard dans une liste.";
w.g.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
w.g.LISTS_SORT_ORDER_ASCENDING = "croissant";
w.g.LISTS_SORT_ORDER_DESCENDING = "d\u00e9croissant";
w.g.LISTS_SORT_TITLE = "trier %1 %2 %3";
w.g.LISTS_SORT_TOOLTIP = "Trier une copie d\u2019une liste.";
w.g.LISTS_SORT_TYPE_IGNORECASE = "alphab\u00e9tique, en ignorant la casse";
w.g.LISTS_SORT_TYPE_NUMERIC = "num\u00e9rique";
w.g.LISTS_SORT_TYPE_TEXT = "alphab\u00e9tique";
w.g.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
w.g.LISTS_SPLIT_LIST_FROM_TEXT = "cr\u00e9er une liste depuis le texte";
w.g.LISTS_SPLIT_TEXT_FROM_LIST = "cr\u00e9er un texte depuis la liste";
w.g.LISTS_SPLIT_TOOLTIP_JOIN = "R\u00e9unir une liste de textes en un seul, en les s\u00e9parant par un s\u00e9parateur.";
w.g.LISTS_SPLIT_TOOLTIP_SPLIT = "Couper un texte en une liste de textes, en coupant \u00e0 chaque s\u00e9parateur.";
w.g.LISTS_SPLIT_WITH_DELIMITER = "avec le s\u00e9parateur";
w.g.LOGIC_BOOLEAN_FALSE = "faux";
w.g.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
w.g.LOGIC_BOOLEAN_TOOLTIP = "Renvoie soit vrai soit faux.";
w.g.LOGIC_BOOLEAN_TRUE = "vrai";
w.g.LOGIC_COMPARE_HELPURL = "https://fr.wikipedia.org/wiki/Inegalite_(mathematiques)";
w.g.LOGIC_COMPARE_TOOLTIP_EQ = "Renvoyer vrai si les deux entr\u00e9es sont \u00e9gales.";
w.g.LOGIC_COMPARE_TOOLTIP_GT = "Renvoyer vrai si la premi\u00e8re entr\u00e9e est plus grande que la seconde.";
w.g.LOGIC_COMPARE_TOOLTIP_GTE = "Renvoyer vrai si la premi\u00e8re entr\u00e9e est plus grande ou \u00e9gale \u00e0 la seconde.";
w.g.LOGIC_COMPARE_TOOLTIP_LT = "Renvoyer vrai si la premi\u00e8re entr\u00e9e est plus petite que la seconde.";
w.g.LOGIC_COMPARE_TOOLTIP_LTE = "Renvoyer vrai si la premi\u00e8re entr\u00e9e est plus petite ou \u00e9gale \u00e0 la seconde.";
w.g.LOGIC_COMPARE_TOOLTIP_NEQ = "Renvoyer vrai si les deux entr\u00e9es sont diff\u00e9rentes.";
w.g.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
w.g.LOGIC_NEGATE_TITLE = "pas %1";
w.g.LOGIC_NEGATE_TOOLTIP = "Renvoie vrai si l\u2019entr\u00e9e est fausse. Renvoie faux si l\u2019entr\u00e9e est vraie.";
w.g.LOGIC_NULL = "nul";
w.g.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
w.g.LOGIC_NULL_TOOLTIP = "Renvoie nul.";
w.g.LOGIC_OPERATION_AND = "et";
w.g.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
w.g.LOGIC_OPERATION_OR = "ou";
w.g.LOGIC_OPERATION_TOOLTIP_AND = "Renvoyer vrai si les deux entr\u00e9es sont vraies.";
w.g.LOGIC_OPERATION_TOOLTIP_OR = "Renvoyer vrai si au moins une des entr\u00e9es est vraie.";
w.g.LOGIC_TERNARY_CONDITION = "test";
w.g.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
w.g.LOGIC_TERNARY_IF_FALSE = "si faux";
w.g.LOGIC_TERNARY_IF_TRUE = "si vrai";
w.g.LOGIC_TERNARY_TOOLTIP = "V\u00e9rifier la condition dans 'test'. Si elle est vraie, renvoie la valeur 'si vrai'\u202f; sinon renvoie la valeur 'si faux'.";
w.g.MATH_ADDITION_SYMBOL = "+";
w.g.MATH_ARITHMETIC_HELPURL = "https://fr.wikipedia.org/wiki/Arithmetique";
w.g.MATH_ARITHMETIC_TOOLTIP_ADD = "Renvoie la somme des deux nombres.";
w.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Renvoie le quotient des deux nombres.";
w.g.MATH_ARITHMETIC_TOOLTIP_MINUS = "Renvoie la diff\u00e9rence des deux nombres.";
w.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Renvoie le produit des deux nombres.";
w.g.MATH_ARITHMETIC_TOOLTIP_POWER = "Renvoie le premier nombre \u00e9lev\u00e9 \u00e0 la puissance du second.";
w.g.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
w.g.MATH_CHANGE_TITLE = "incr\u00e9menter %1 de %2";
w.g.MATH_CHANGE_TOOLTIP = "Ajouter un nombre \u00e0 la variable '%1'.";
w.g.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
w.g.MATH_CONSTANT_TOOLTIP = "Renvoie une des constantes courantes : \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), ou \u221e (infini).";
w.g.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
w.g.MATH_CONSTRAIN_TITLE = "contraindre %1 entre %2 et %3";
w.g.MATH_CONSTRAIN_TOOLTIP = "Contraindre un nombre \u00e0 \u00eatre entre les limites sp\u00e9cifi\u00e9es (incluses).";
w.g.MATH_DIVISION_SYMBOL = "\u00f7";
w.g.MATH_IS_DIVISIBLE_BY = "est divisible par";
w.g.MATH_IS_EVEN = "est pair";
w.g.MATH_IS_NEGATIVE = "est n\u00e9gatif";
w.g.MATH_IS_ODD = "est impair";
w.g.MATH_IS_POSITIVE = "est positif";
w.g.MATH_IS_PRIME = "est premier";
w.g.MATH_IS_TOOLTIP = "V\u00e9rifier si un nombre est pair, impair, premier, entier, positif, n\u00e9gatif, ou s\u2019il est divisible par un certain nombre. Renvoie vrai ou faux.";
w.g.MATH_IS_WHOLE = "est entier";
w.g.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
w.g.MATH_MODULO_TITLE = "reste de %1 \u00f7 %2";
w.g.MATH_MODULO_TOOLTIP = "Renvoyer le reste de la division euclidienne des deux nombres.";
w.g.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
w.g.MATH_NUMBER_HELPURL = "https://fr.wikipedia.org/wiki/Nombre";
w.g.MATH_NUMBER_TOOLTIP = "Un nombre.";
w.g.MATH_ONLIST_HELPURL = "";
w.g.MATH_ONLIST_OPERATOR_AVERAGE = "moyenne de la liste";
w.g.MATH_ONLIST_OPERATOR_MAX = "maximum de la liste";
w.g.MATH_ONLIST_OPERATOR_MEDIAN = "m\u00e9diane de la liste";
w.g.MATH_ONLIST_OPERATOR_MIN = "minimum de la liste";
w.g.MATH_ONLIST_OPERATOR_MODE = "majoritaires de la liste";
w.g.MATH_ONLIST_OPERATOR_RANDOM = "\u00e9l\u00e9ment al\u00e9atoire de la liste";
w.g.MATH_ONLIST_OPERATOR_STD_DEV = "\u00e9cart-type de la liste";
w.g.MATH_ONLIST_OPERATOR_SUM = "somme de la liste";
w.g.MATH_ONLIST_TOOLTIP_AVERAGE = "Renvoyer la moyenne (arithm\u00e9tique) des valeurs num\u00e9riques dans la liste.";
w.g.MATH_ONLIST_TOOLTIP_MAX = "Renvoyer le plus grand nombre dans la liste.";
w.g.MATH_ONLIST_TOOLTIP_MEDIAN = "Renvoyer le nombre m\u00e9dian de la liste.";
w.g.MATH_ONLIST_TOOLTIP_MIN = "Renvoyer le plus petit nombre dans la liste.";
w.g.MATH_ONLIST_TOOLTIP_MODE = "Renvoyer une liste des \u00e9l\u00e9ment(s) le(s) plus courant(s) dans la liste.";
w.g.MATH_ONLIST_TOOLTIP_RANDOM = "Renvoyer un \u00e9l\u00e9ment dans la liste au hasard.";
w.g.MATH_ONLIST_TOOLTIP_STD_DEV = "Renvoyer l\u2019\u00e9cart-type de la liste.";
w.g.MATH_ONLIST_TOOLTIP_SUM = "Renvoyer la somme de tous les nombres dans la liste.";
w.g.MATH_POWER_SYMBOL = "^";
w.g.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
w.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fraction al\u00e9atoire";
w.g.MATH_RANDOM_FLOAT_TOOLTIP = "Renvoyer une fraction al\u00e9atoire entre 0.0 (inclus) et 1.0 (exclus).";
w.g.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
w.g.MATH_RANDOM_INT_TITLE = "entier al\u00e9atoire entre %1 et %2";
w.g.MATH_RANDOM_INT_TOOLTIP = "Renvoyer un entier al\u00e9atoire entre les deux limites sp\u00e9cifi\u00e9es, incluses.";
w.g.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
w.g.MATH_ROUND_OPERATOR_ROUND = "arrondir";
w.g.MATH_ROUND_OPERATOR_ROUNDDOWN = "arrondir par d\u00e9faut";
w.g.MATH_ROUND_OPERATOR_ROUNDUP = "arrondir par exc\u00e8s";
w.g.MATH_ROUND_TOOLTIP = "Arrondir un nombre au-dessus ou au-dessous.";
w.g.MATH_SINGLE_HELPURL = "https://fr.wikipedia.org/wiki/Racine_carree";
w.g.MATH_SINGLE_OP_ABSOLUTE = "valeur absolue";
w.g.MATH_SINGLE_OP_ROOT = "racine carr\u00e9e";
w.g.MATH_SINGLE_TOOLTIP_ABS = "Renvoie la valeur absolue d\u2019un nombre.";
w.g.MATH_SINGLE_TOOLTIP_EXP = "Renvoie e \u00e0 la puissance d\u2019un nombre.";
w.g.MATH_SINGLE_TOOLTIP_LN = "Renvoie le logarithme naturel d\u2019un nombre.";
w.g.MATH_SINGLE_TOOLTIP_LOG10 = "Renvoie le logarithme d\u00e9cimal d\u2019un nombre.";
w.g.MATH_SINGLE_TOOLTIP_NEG = "Renvoie l\u2019oppos\u00e9 d\u2019un nombre";
w.g.MATH_SINGLE_TOOLTIP_POW10 = "Renvoie 10 \u00e0 la puissance d\u2019un nombre.";
w.g.MATH_SINGLE_TOOLTIP_ROOT = "Renvoie la racine carr\u00e9e d\u2019un nombre.";
w.g.MATH_SUBTRACTION_SYMBOL = "-";
w.g.MATH_TRIG_ACOS = "acos";
w.g.MATH_TRIG_ASIN = "asin";
w.g.MATH_TRIG_ATAN = "atan";
w.g.MATH_TRIG_COS = "cos";
w.g.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
w.g.MATH_TRIG_SIN = "sin";
w.g.MATH_TRIG_TAN = "tan";
w.g.MATH_TRIG_TOOLTIP_ACOS = "Renvoie l\u2019arccosinus d\u2019un nombre.";
w.g.MATH_TRIG_TOOLTIP_ASIN = "Renvoie l\u2019arcsinus d\u2019un nombre.";
w.g.MATH_TRIG_TOOLTIP_ATAN = "Renvoie l\u2019arctangente d\u2019un nombre.";
w.g.MATH_TRIG_TOOLTIP_COS = "Renvoie le cosinus d\u2019un angle en degr\u00e9s (pas en radians).";
w.g.MATH_TRIG_TOOLTIP_SIN = "Renvoie le sinus d\u2019un angle en degr\u00e9s (pas en radians).";
w.g.MATH_TRIG_TOOLTIP_TAN = "Renvoie la tangente d\u2019un angle en degr\u00e9s (pas en radians).";
w.g.NEW_COLOUR_VARIABLE = "Cr\u00e9er une variable couleur\u2026";
w.g.NEW_NUMBER_VARIABLE = "Cr\u00e9er une variable nombre\u2026";
w.g.NEW_STRING_VARIABLE = "Cr\u00e9er une variable cha\u00eene\u2026";
w.g.NEW_VARIABLE = "Cr\u00e9er une variable...";
w.g.NEW_VARIABLE_TITLE = "Le nom de la nouvelle variable :";
w.g.NEW_VARIABLE_TYPE_TITLE = "Nouveau type de variable :";
w.g.ORDINAL_NUMBER_SUFFIX = "";
w.g.PROCEDURES_ALLOW_STATEMENTS = "autoriser les ordres";
w.g.PROCEDURES_BEFORE_PARAMS = "avec :";
w.g.PROCEDURES_CALLNORETURN_HELPURL = "https://fr.wikipedia.org/wiki/Sous-programme";
w.g.PROCEDURES_CALLNORETURN_TOOLTIP = "Ex\u00e9cuter la fonction '%1' d\u00e9finie par l\u2019utilisateur.";
w.g.PROCEDURES_CALLRETURN_HELPURL = "https://fr.wikipedia.org/wiki/Sous-programme";
w.g.PROCEDURES_CALLRETURN_TOOLTIP = "Ex\u00e9cuter la fonction '%1' d\u00e9finie par l\u2019utilisateur et utiliser son r\u00e9sultat.";
w.g.PROCEDURES_CALL_BEFORE_PARAMS = "avec :";
w.g.PROCEDURES_CREATE_DO = "Cr\u00e9er '%1'";
w.g.PROCEDURES_DEFNORETURN_COMMENT = "D\u00e9crire cette fonction\u2026";
w.g.PROCEDURES_DEFNORETURN_DO = "";
w.g.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
w.g.PROCEDURES_DEFNORETURN_PROCEDURE = "faire quelque chose";
w.g.PROCEDURES_DEFNORETURN_TITLE = "pour";
w.g.PROCEDURES_DEFNORETURN_TOOLTIP = "Cr\u00e9e une fonction sans sortie.";
w.g.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
w.g.PROCEDURES_DEFRETURN_RETURN = "retour";
w.g.PROCEDURES_DEFRETURN_TOOLTIP = "Cr\u00e9e une fonction avec une sortie.";
w.g.PROCEDURES_DEF_DUPLICATE_WARNING = "Attention : Cette fonction a des param\u00e8tres en double.";
w.g.PROCEDURES_HIGHLIGHT_DEF = "Surligner la d\u00e9finition de la fonction";
w.g.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
w.g.PROCEDURES_IFRETURN_TOOLTIP = "Si une valeur est vraie, alors renvoyer une seconde valeur.";
w.g.PROCEDURES_IFRETURN_WARNING = "Attention : Ce bloc pourrait n\u2019\u00eatre utilis\u00e9 que dans une d\u00e9finition de fonction.";
w.g.PROCEDURES_MUTATORARG_TITLE = "nom de l\u2019entr\u00e9e :";
w.g.PROCEDURES_MUTATORARG_TOOLTIP = "Ajouter une entr\u00e9e \u00e0 la fonction.";
w.g.PROCEDURES_MUTATORCONTAINER_TITLE = "entr\u00e9es";
w.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Ajouter, supprimer, ou r\u00e9arranger les entr\u00e9es de cette fonction.";
w.g.REDO = "Refaire";
w.g.REMOVE_COMMENT = "Supprimer un commentaire";
w.g.RENAME_VARIABLE = "Renommer la variable\u2026";
w.g.RENAME_VARIABLE_TITLE = "Renommer toutes les variables \u00ab\u00a0%1\u00a0\u00bb en :";
w.g.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
w.g.TEXT_APPEND_TITLE = "ajouter le texte %2 \u00e0 %1";
w.g.TEXT_APPEND_TOOLTIP = "Ajouter du texte \u00e0 la variable '%1'.";
w.g.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
w.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "en minuscules";
w.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = "en Majuscule Au D\u00e9but De Chaque Mot";
w.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "en MAJUSCULES";
w.g.TEXT_CHANGECASE_TOOLTIP = "Renvoyer une copie du texte dans une autre casse.";
w.g.TEXT_CHARAT_FIRST = "obtenir la premi\u00e8re lettre";
w.g.TEXT_CHARAT_FROM_END = "obtenir la lettre # depuis la fin";
w.g.TEXT_CHARAT_FROM_START = "obtenir la lettre #";
w.g.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
w.g.TEXT_CHARAT_LAST = "obtenir la derni\u00e8re lettre";
w.g.TEXT_CHARAT_RANDOM = "obtenir une lettre au hasard";
w.g.TEXT_CHARAT_TAIL = "";
w.g.TEXT_CHARAT_TITLE = "dans le texte %1 %2";
w.g.TEXT_CHARAT_TOOLTIP = "Renvoie la lettre \u00e0 la position indiqu\u00e9e.";
w.g.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
w.g.TEXT_COUNT_MESSAGE0 = "nombre %1 sur %2";
w.g.TEXT_COUNT_TOOLTIP = "Compter combien de fois un texte donn\u00e9 apparait dans un autre.";
w.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Ajouter un \u00e9l\u00e9ment au texte.";
w.g.TEXT_CREATE_JOIN_TITLE_JOIN = "joindre";
w.g.TEXT_CREATE_JOIN_TOOLTIP = "Ajouter, supprimer, ou r\u00e9ordonner des sections pour reconfigurer ce bloc de texte.";
w.g.TEXT_GET_SUBSTRING_END_FROM_END = "jusqu\u2019\u00e0 la lettre # depuis la fin";
w.g.TEXT_GET_SUBSTRING_END_FROM_START = "jusqu\u2019\u00e0 la lettre #";
w.g.TEXT_GET_SUBSTRING_END_LAST = "jusqu\u2019\u00e0 la derni\u00e8re lettre";
w.g.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
w.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "dans le texte";
w.g.TEXT_GET_SUBSTRING_START_FIRST = "obtenir la sous-cha\u00eene depuis la premi\u00e8re lettre";
w.g.TEXT_GET_SUBSTRING_START_FROM_END = "obtenir la sous-cha\u00eene depuis la lettre # depuis la fin";
w.g.TEXT_GET_SUBSTRING_START_FROM_START = "obtenir la sous-cha\u00eene depuis la lettre #";
w.g.TEXT_GET_SUBSTRING_TAIL = "";
w.g.TEXT_GET_SUBSTRING_TOOLTIP = "Renvoie une partie indiqu\u00e9e du texte.";
w.g.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
w.g.TEXT_INDEXOF_OPERATOR_FIRST = "trouver la premi\u00e8re occurrence de la cha\u00eene";
w.g.TEXT_INDEXOF_OPERATOR_LAST = "trouver la derni\u00e8re occurrence de la cha\u00eene";
w.g.TEXT_INDEXOF_TITLE = "dans le texte %1 %2 %3";
w.g.TEXT_INDEXOF_TOOLTIP = "Renvoie l\u2019index de la premi\u00e8re/derni\u00e8re occurrence de la premi\u00e8re cha\u00eene dans la seconde. Renvoie %1 si la cha\u00eene n\u2019est pas trouv\u00e9e.";
w.g.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
w.g.TEXT_ISEMPTY_TITLE = "%1 est vide";
w.g.TEXT_ISEMPTY_TOOLTIP = "Renvoie vrai si le texte fourni est vide.";
w.g.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
w.g.TEXT_JOIN_TITLE_CREATEWITH = "cr\u00e9er un texte avec";
w.g.TEXT_JOIN_TOOLTIP = "Cr\u00e9er un morceau de texte en agr\u00e9geant un nombre quelconque d\u2019\u00e9l\u00e9ments.";
w.g.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
w.g.TEXT_LENGTH_TITLE = "longueur de %1";
w.g.TEXT_LENGTH_TOOLTIP = "Renvoie le nombre de lettres (espaces compris) dans le texte fourni.";
w.g.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
w.g.TEXT_PRINT_TITLE = "afficher %1";
w.g.TEXT_PRINT_TOOLTIP = "Afficher le texte, le nombre ou une autre valeur sp\u00e9cifi\u00e9.";
w.g.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
w.g.TEXT_PROMPT_TOOLTIP_NUMBER = "Demander un nombre \u00e0 l\u2019utilisateur.";
w.g.TEXT_PROMPT_TOOLTIP_TEXT = "Demander un texte \u00e0 l\u2019utilisateur.";
w.g.TEXT_PROMPT_TYPE_NUMBER = "invite pour un nombre avec un message";
w.g.TEXT_PROMPT_TYPE_TEXT = "invite pour un texte avec un message";
w.g.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
w.g.TEXT_REPLACE_MESSAGE0 = "remplacer %1 par %2 dans %3";
w.g.TEXT_REPLACE_TOOLTIP = "Remplacer toutes les occurrences d\u2019un texte par un autre.";
w.g.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Text#reversing-text";
w.g.TEXT_REVERSE_MESSAGE0 = "inverser %1";
w.g.TEXT_REVERSE_TOOLTIP = "Inverse l\u2019ordre des caract\u00e8res dans le texte.";
w.g.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
w.g.TEXT_TEXT_TOOLTIP = "Une lettre, un mot ou une ligne de texte.";
w.g.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
w.g.TEXT_TRIM_OPERATOR_BOTH = "supprimer les espaces des deux c\u00f4t\u00e9s";
w.g.TEXT_TRIM_OPERATOR_LEFT = "supprimer les espaces du c\u00f4t\u00e9 gauche";
w.g.TEXT_TRIM_OPERATOR_RIGHT = "supprimer les espaces du c\u00f4t\u00e9 droit";
w.g.TEXT_TRIM_TOOLTIP = "Renvoyer une copie du texte avec les espaces supprim\u00e9s d\u2019un bout ou des deux.";
w.g.TODAY = "Aujourd'hui";
w.g.UNDO = "Annuler";
w.g.VARIABLES_DEFAULT_NAME = "\u00e9l\u00e9ment";
w.g.VARIABLES_GET_CREATE_SET = "Cr\u00e9er 'fixer %1'";
w.g.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
w.g.VARIABLES_GET_TOOLTIP = "Renvoie la valeur de cette variable.";
w.g.VARIABLES_SET = "fixer %1 \u00e0 %2";
w.g.VARIABLES_SET_CREATE_GET = "Cr\u00e9er 'obtenir %1'";
w.g.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
w.g.VARIABLES_SET_TOOLTIP = "Fixe cette variable pour qu\u2019elle soit \u00e9gale \u00e0 la valeur de l\u2019entr\u00e9e.";
w.g.VARIABLE_ALREADY_EXISTS = "Une variable appel\u00e9e '%1' existe d\u00e9j\u00e0.";
w.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "Une variable nomm\u00e9e '%1' existe d\u00e9j\u00e0 pour un autre type : '%2'.";
w.g.WORKSPACE_COMMENT_DEFAULT_TEXT = "Dire quelque chose\u2026";
w.g.PROCEDURES_DEFRETURN_TITLE = w.g.PROCEDURES_DEFNORETURN_TITLE;
w.g.CONTROLS_IF_IF_TITLE_IF = w.g.CONTROLS_IF_MSG_IF;
w.g.CONTROLS_WHILEUNTIL_INPUT_DO = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.CONTROLS_IF_MSG_THEN = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.CONTROLS_IF_ELSE_TITLE_ELSE = w.g.CONTROLS_IF_MSG_ELSE;
w.g.PROCEDURES_DEFRETURN_PROCEDURE = w.g.PROCEDURES_DEFNORETURN_PROCEDURE;
w.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.LISTS_GET_INDEX_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.MATH_CHANGE_TITLE_ITEM = w.g.VARIABLES_DEFAULT_NAME;
w.g.PROCEDURES_DEFRETURN_DO = w.g.PROCEDURES_DEFNORETURN_DO;
w.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = w.g.CONTROLS_IF_MSG_ELSEIF;
w.g.LISTS_GET_INDEX_HELPURL = w.g.LISTS_INDEX_OF_HELPURL;
w.g.CONTROLS_FOREACH_INPUT_DO = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.LISTS_SET_INDEX_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.CONTROLS_FOR_INPUT_DO = w.g.CONTROLS_REPEAT_INPUT_DO;
w.g.LISTS_CREATE_WITH_ITEM_TITLE = w.g.VARIABLES_DEFAULT_NAME;
w.g.TEXT_APPEND_VARIABLE = w.g.VARIABLES_DEFAULT_NAME;
w.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = w.g.VARIABLES_DEFAULT_NAME;
w.g.LISTS_INDEX_OF_INPUT_IN_LIST = w.g.LISTS_INLIST;
w.g.PROCEDURES_DEFRETURN_COMMENT = w.g.PROCEDURES_DEFNORETURN_COMMENT;
w.g.MATH_HUE = "230";
w.g.LOOPS_HUE = "120";
w.g.LISTS_HUE = "260";
w.g.LOGIC_HUE = "210";
w.g.VARIABLES_HUE = "330";
w.g.TEXTS_HUE = "160";
w.g.PROCEDURES_HUE = "290";
w.g.COLOUR_HUE = "20";
w.g.VARIABLES_DYNAMIC_HUE = "310";
var V = {
    Sh: null,
    K: function() {
        Ll();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = T("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = T("Games_linkAlert"), BlocklyStorage.HASH_ERROR = T("Games_hashError"), BlocklyStorage.XML_ERROR = T("Games_xmlError"), BlocklyStorage.alert = U.gt.bind(U, a), a && Pl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", V.Yu, !0);
        w.H && (w.H.iu = !1);
        w.h &&
            (w.h.iu = !1)
    },
    Iw: function(a, b) {
        if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.bs
            } catch (h) {}
            c && delete window.sessionStorage.bs;
            var e = Ml(S),
                f = b && Ml(S - 1);
            f && "function" == typeof b && (f = b(f));
            (a = c || e || f || a) && V.Xs(a)
        }
    },
    Xs: function(a) {
        V.Sh ? V.Sh.setValue(a, -1) : (a = w.D.Pc(a), Pg.clear(), w.D.ee(a, Pg), Pg.vq())
    },
    Ln: function() {
        if (V.Sh) var a = V.Sh.getValue();
        else {
            a = w.D.Fp(Pg, !0);
            if (1 == ad(Pg, !1).length &&
                a.querySelector) {
                var b = a.querySelector("block");
                b && (b.removeAttribute("x"), b.removeAttribute("y"))
            }
            a = w.D.Zc(a)
        }
        return a
    },
    sj: function() {
        return Pg
    },
    Ax: function() {
        window.localStorage && (window.localStorage[Ol + S] = V.Ln())
    },
    Il: function() {
        window.location = (Gl ? "index.html" : "./") + "?lang=" + El
    },
    Yu: function() {
        if (window.sessionStorage) {
            if (V.Sh) var a = V.Sh.getValue();
            else a = w.D.Fp(Pg), a = w.D.Zc(a);
            window.sessionStorage.bs = a
        }
        a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var b = window.location.search;
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    wo: function() {
        10 > S ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + El + "&level=" + (S + 1) : V.Il()
    },
    Zn: function(a, b) {
        if (a) {
            var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1])
        }
        Og(a, b)
    },
    Mr: function(a, b) {
        a = document.getElementById(a);
        a.firstChild || (a = w.Nf(a, {
            rtl: -1 != Dl.indexOf(El),
            readOnly: !0
        }), "string" != typeof b && (b = b.join("")), w.D.ee(w.D.Pc(b), a))
    },
    Lx: function(a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    ge: function(a) {
        if ("click" == a.type && "touchend" == V.ge.Po && V.ge.Oo + 2E3 > Date.now() || V.ge.Po == a.type && V.ge.Oo + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        V.ge.Po = a.type;
        V.ge.Oo = Date.now();
        return !1
    }
};
V.ge.Po = null;
V.ge.Oo = 0;
V.ww = function() {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
V.xw = function() {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = V;
V.setCode = V.Xs;
V.getCode = V.Ln;
V.getWorkspace = V.sj;
var U = {
    Qf: !1,
    $q: null,
    $k: null,
    hh: function(a, b, c, e, f, h) {
        function k() {
            U.Qf && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }
        if (!a) throw TypeError("Content not found: " + a);
        U.Qf && U.Lc(!1);
        w.Pb(!0);
        U.Qf = !0;
        U.$q = b;
        U.$k = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), U.tn = w.Gc(e, "mousedown", null, U.Fv));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (U.Wl(b, !1, .2), U.Wl(l, !0, .8), setTimeout(k, 175)) : k()
    },
    cr: 0,
    dr: 0,
    Fv: function(a) {
        U.wn();
        if (!w.i.Sf(a)) {
            var b = document.getElementById("dialog");
            U.cr = b.offsetLeft - a.clientX;
            U.dr = b.offsetTop - a.clientY;
            U.vn = w.Gc(document, "mouseup", null, U.wn);
            U.un = w.Gc(document, "mousemove", null, U.Gv);
            a.stopPropagation()
        }
    },
    Gv: function(a) {
        var b = document.getElementById("dialog"),
            c = U.cr + a.clientX;
        a = U.dr + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    wn: function() {
        U.vn && (w.Ma(U.vn), U.vn = null);
        U.un && (w.Ma(U.un), U.un = null)
    },
    Lc: function(a) {
        function b() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (U.Qf) {
            U.wn();
            U.tn && (w.Ma(U.tn), U.tn = null);
            U.Qf = !1;
            U.$k && U.$k();
            U.$k = null;
            var c = !1 === a ?
                null : U.$q;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            c && a ? (U.Wl(a, !1, .8), U.Wl(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    Wl: function(a, b, c) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top =
                h.y + "px";
            f.style.opacity = c
        }
        if (a) {
            var f = document.getElementById("dialogBorder"),
                h = U.Vv(a);
            b ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible"
        }
    },
    Vv: function(a) {
        var b = gh(a);
        b = {
            x: b.x,
            y: b.y
        };
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    gt: function(a, b) {
        var c = document.getElementById("containerStorage");
        c.textContent = "";
        b = b.split("\n");
        for (var e = 0; e < b.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(b[e]));
            c.appendChild(f)
        }
        c = document.getElementById("dialogStorage");
        U.hh(c, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, U.xp);
        U.wp()
    },
    bq: function() {
        if (!Ml(S))
            if (U.Qf || Pg.pb()) setTimeout(U.bq, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", U.Lc, !0);
                b.addEventListener("touchend", U.Lc, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", V.Il, !0);
                b.addEventListener("touchend",
                    V.Il, !0);
                U.hh(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown", U.aq, !0)
                });
                document.body.addEventListener("keydown", U.aq, !0)
            }
    },
    sp: function() {
        document.getElementById("galleryXml").value = V.Ln();
        var a = document.getElementById("galleryDialog");
        if (!U.sp.zx) {
            var b = document.getElementById("galleryCancel");
            b.addEventListener("click", U.Lc, !0);
            b.addEventListener("touchend", U.Lc, !0);
            b = document.getElementById("galleryOk");
            b.addEventListener("click", U.Jn, !0);
            b.addEventListener("touchend", U.Jn, !0);
            U.sp.zx = !0
        }
        b = document.getElementById("submitButton");
        U.hh(a, b, !0, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", U.ur, !0)
        });
        document.body.addEventListener("keydown", U.ur, !0);
        setTimeout(function() {
            document.getElementById("galleryTitle").focus()
        }, 250)
    },
    kv: function() {
        var a = document.getElementById("dialogDone");
        if (Pg) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = vk();
            c = V.Lx(c);
            var e = c.replace(/\/\/[^\n]*/g,
                "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = c;
            "function" == typeof prettyPrintOne && (c = f.innerHTML, c = prettyPrintOne(c, "js"), f.innerHTML = c);
            c = 1 == e ? T("Games_linesOfCode1") : T("Games_linesOfCode2").replace("%1", String(e));
            b.appendChild(document.createTextNode(c))
        }
        c = 10 > S ? T("Games_nextLevel").replace("%1", String(S + 1)) : T("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", U.Lc, !0);
        b.addEventListener("touchend", U.Lc, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", V.wo, !0);
        b.addEventListener("touchend", V.wo, !0);
        U.hh(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", U.Cq, !0)
        });
        document.body.addEventListener("keydown", U.Cq, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    Zq: function(a) {
        !U.Qf || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (U.Lc(!0), a.stopPropagation(),
            a.preventDefault())
    },
    wp: function() {
        document.body.addEventListener("keydown", U.Zq, !0)
    },
    xp: function() {
        document.body.removeEventListener("keydown", U.Zq, !0)
    },
    Cq: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) U.Lc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && V.wo()
    },
    aq: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) U.Lc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && V.Il()
    },
    ur: function(a) {
        27 == a.keyCode ? U.Lc(!0) : 13 == a.keyCode && U.Jn()
    },
    Jn: function() {
        var a =
            document.getElementById("galleryTitle");
        if (a.value.trim()) {
            a = document.getElementById("galleryForm");
            for (var b = [], c = 0, e; e = a.elements[c]; c++) e.name && (b[c] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
            var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function() {
                if (4 == f.readyState) {
                    var a = 200 == f.status ? T("Games_submitted") : T("Games_httpRequestError") + "\nStatus: " + f.status;
                    U.gt(null, a)
                }
            };
            f.send(b.join("&"));
            U.Lc(!0)
        } else a.value =
            "", a.focus()
    }
};
window.BlocklyDialogs = U;
U.hideDialog = U.Lc;

function Ql(a) {
    this.Vt = 23;
    this.zh = 18;
    this.Im = 132;
    this.vg = 20;
    this.jb = .5;
    this.nq = void 0;
    this.Ym = [];
    var b = document.createElementNS(Rl, "line");
    b.setAttribute("class", "sliderTrack");
    b.setAttribute("x1", 10);
    b.setAttribute("y1", 35);
    b.setAttribute("x2", 140);
    b.setAttribute("y2", 35);
    a.appendChild(b);
    b = document.createElementNS(Rl, "rect");
    b.setAttribute("style", "opacity: 0");
    b.setAttribute("x", 10 - this.vg);
    b.setAttribute("y", 35 - this.vg);
    b.setAttribute("width", 130 + 2 * this.vg);
    b.setAttribute("height", 2 * this.vg);
    b.setAttribute("rx", this.vg);
    b.setAttribute("ry", this.vg);
    a.appendChild(b);
    this.Rx = b;
    b = document.createElementNS(Rl, "path");
    b.setAttribute("class", "sliderKnob");
    b.setAttribute("d", "m 0,0 l -8,8 v 12 h 16 v -12 z");
    a.appendChild(b);
    this.Ur = b;
    b = document.createElementNS(Rl, "circle");
    b.setAttribute("style", "opacity: 0");
    b.setAttribute("r", this.vg);
    b.setAttribute("cy", 35);
    a.appendChild(b);
    this.jo = b;
    for (this.setValue(.5); a && "svg" != a.nodeName.toLowerCase();) a = a.parentNode;
    this.wa = a;
    Sl(this.jo, "mousedown",
        this, this.Tr);
    Sl(this.jo, "touchstart", this, this.Tr);
    Sl(this.Rx, "mousedown", this, this.xx);
    Sl(this.wa, "mouseup", null, Tl);
    Sl(this.wa, "touchend", null, Tl);
    Sl(this.wa, "mousemove", null, Ul);
    Sl(this.wa, "touchmove", null, Ul);
    Sl(document, "mouseover", null, Vl)
}
var Rl = "http://www.w3.org/2000/svg",
    Wl = null,
    Xl = 0,
    Yl = 0;
Ql.prototype.Tr = function(a) {
    if ("touchstart" == a.type) {
        if (1 != a.changedTouches.length) return;
        Zl(a)
    }
    Wl = this;
    Xl = $l(this, a).x;
    Yl = 0;
    var b = this.Ur.getAttribute("transform");
    b && (b = b.match(/translate\(\s*([-\d.]+)/)) && (Yl = Number(b[1]));
    a.preventDefault()
};

function Tl() {
    Wl = null
}

function Vl(a) {
    if (Wl) {
        a = a.target;
        do
            if (a == Wl.wa) return; while (a = a.parentNode);
        Wl = null
    }
}

function Ul(a) {
    var b = Wl;
    if (b) {
        if ("touchmove" == a.type) {
            if (1 != a.changedTouches.length) return;
            Zl(a)
        }
        a = $l(b, a).x - Xl + Yl;
        b.setValue((a - b.zh) / (b.Im - b.zh))
    }
}
Ql.prototype.xx = function(a) {
    if ("touchstart" == a.type) {
        if (1 != a.changedTouches.length) return;
        Zl(a)
    }
    a = $l(this, a).x;
    am(this, (a - this.zh) / (this.Im - this.zh))
};
Ql.prototype.getValue = function() {
    return this.jb
};

function am(a, b) {
    function c(c) {
        return function() {
            a.setValue(c * (b - e) / 9 + e)
        }
    }
    for (; a.Ym.length;) clearTimeout(a.Ym.pop());
    for (var e = a.getValue(), f = 0; 10 > f; f++) a.Ym.push(setTimeout(c(f), 200 * f / 10))
}
Ql.prototype.setValue = function(a) {
    this.jb = Math.min(Math.max(a, 0), 1);
    a = this.zh + (this.Im - this.zh) * this.jb;
    this.Ur.setAttribute("transform", "translate(" + a + "," + this.Vt + ")");
    this.jo.setAttribute("cx", a);
    this.nq && this.nq(this.jb)
};

function $l(a, b) {
    var c = a.wa.createSVGPoint();
    c.x = b.clientX;
    c.y = b.clientY;
    a = a.wa.getScreenCTM().inverse();
    return c.matrixTransform(a)
}

function Sl(a, b, c, e) {
    a.addEventListener(b, function(a) {
        e.apply(c, arguments)
    }, !1)
}

function Zl(a) {
    var b = a.changedTouches[0];
    a.clientX = b.clientX;
    a.clientY = b.clientY
};
var bm, W, cm, X, dm, em, fm, gm;

function hm() {
    function a(a) {
        for (var b = 0; 5 > b; b++) Y(a), im(144)
    }
    switch (S) {
        case 1:
            for (var b = 0; 4 > b; b++) Y(100), im(90);
            break;
        case 2:
            for (b = 0; 5 > b; b++) Y(100), im(72);
            break;
        case 3:
            jm("#ffff00");
            a(100);
            break;
        case 4:
            jm("#ffff00");
            a(50);
            Z(!1);
            Y(150);
            Z(!0);
            Y(20);
            break;
        case 5:
            jm("#ffff00");
            for (b = 0; 4 > b; b++) Z(!1), Y(150), im(90), Z(!0), a(50);
            break;
        case 6:
            jm("#ffff00");
            for (b = 0; 3 > b; b++) Z(!1), Y(150), im(120), Z(!0), a(50);
            Z(!1);
            im(-90);
            Y(100);
            Z(!0);
            jm("#ffffff");
            Y(50);
            break;
        case 7:
            jm("#ffff00");
            for (b = 0; 3 > b; b++) Z(!1), Y(150),
                im(120), Z(!0), a(50);
            Z(!1);
            im(-90);
            Y(100);
            Z(!0);
            jm("#ffffff");
            for (b = 0; 4 > b; b++) Y(50), Y(-50), im(45);
            break;
        case 8:
            jm("#ffff00");
            for (b = 0; 3 > b; b++) Z(!1), Y(150), im(120), Z(!0), a(50);
            Z(!1);
            im(-90);
            Y(100);
            Z(!0);
            jm("#ffffff");
            for (b = 0; 360 > b; b++) Y(50), Y(-50), im(1);
            break;
        case 9:
            jm("#ffff00");
            for (b = 0; 3 > b; b++) Z(!1), Y(150), im(120), Z(!0), a(50);
            Z(!1);
            im(-90);
            Y(100);
            Z(!0);
            jm("#ffffff");
            for (b = 0; 360 > b; b++) Y(50), Y(-50), im(1);
            im(120);
            Y(20);
            jm("#000000");
            for (b = 0; 360 > b; b++) Y(50), Y(-50), im(1)
    }
}

function km(a) {
    if (10 == S) return 1 < Oc(Pg).length;
    console.log("Pixel errors: " + a);
    if (100 < a) return !1;
    a = Oc(Pg).length;
    return 2 >= S && 3 < a || 3 == S && 4 < a ? (a = document.getElementById("helpUseLoop"), U.hh(a, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, U.xp), U.wp(), !1) : !0
};
w.H.zq = {};
w.N = {};
w.N.It = {};
w.N.It.Hi = 20;
w.Bg([{
    type: "colour_picker",
    message0: "%1",
    args0: [{
        type: "field_colour",
        name: "COLOUR",
        colour: "#ff0000"
    }],
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
    tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "colour_random",
    message0: "%{BKY_COLOUR_RANDOM_TITLE}",
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
    tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}"
}, {
    type: "colour_rgb",
    message0: "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
    args0: [{
        type: "input_value",
        name: "RED",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "GREEN",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "BLUE",
        check: "Number",
        align: "RIGHT"
    }],
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
    tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}"
}, {
    type: "colour_blend",
    message0: "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
    args0: [{
        type: "input_value",
        name: "COLOUR1",
        check: "Colour",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "COLOUR2",
        check: "Colour",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "RATIO",
        check: "Number",
        align: "RIGHT"
    }],
    output: "Colour",
    colour: "%{BKY_COLOUR_HUE}",
    helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
    tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}"
}]);
w.H.Kw = {};
w.N.Tc = {};
w.N.Tc.Hi = 210;
w.Bg([{
        type: "logic_boolean",
        message0: "%1",
        args0: [{
            type: "field_dropdown",
            name: "BOOL",
            options: [
                ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
                ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
            ]
        }],
        output: "Boolean",
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
        helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}"
    }, {
        type: "controls_if",
        message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
        args0: [{
            type: "input_value",
            name: "IF0",
            check: "Boolean"
        }],
        message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
        args1: [{
            type: "input_statement",
            name: "DO0"
        }],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_LOGIC_HUE}",
        helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
        mutator: "controls_if_mutator",
        extensions: ["controls_if_tooltip"]
    }, {
        type: "controls_ifelse",
        message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
        args0: [{
            type: "input_value",
            name: "IF0",
            check: "Boolean"
        }],
        message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
        args1: [{
            type: "input_statement",
            name: "DO0"
        }],
        message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
        args2: [{
            type: "input_statement",
            name: "ELSE"
        }],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
        helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
        extensions: ["controls_if_tooltip"]
    }, {
        type: "logic_compare",
        message0: "%1 %2 %3",
        args0: [{
            type: "input_value",
            name: "A"
        }, {
            type: "field_dropdown",
            name: "OP",
            options: [
                ["=", "EQ"],
                ["\u2260", "NEQ"],
                ["\u200f<", "LT"],
                ["\u200f\u2264", "LTE"],
                ["\u200f>", "GT"],
                ["\u200f\u2265", "GTE"]
            ]
        }, {
            type: "input_value",
            name: "B"
        }],
        inputsInline: !0,
        output: "Boolean",
        colour: "%{BKY_LOGIC_HUE}",
        helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
        extensions: ["logic_compare", "logic_op_tooltip"]
    },
    {
        type: "logic_operation",
        message0: "%1 %2 %3",
        args0: [{
            type: "input_value",
            name: "A",
            check: "Boolean"
        }, {
            type: "field_dropdown",
            name: "OP",
            options: [
                ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
                ["%{BKY_LOGIC_OPERATION_OR}", "OR"]
            ]
        }, {
            type: "input_value",
            name: "B",
            check: "Boolean"
        }],
        inputsInline: !0,
        output: "Boolean",
        colour: "%{BKY_LOGIC_HUE}",
        helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
        extensions: ["logic_op_tooltip"]
    }, {
        type: "logic_negate",
        message0: "%{BKY_LOGIC_NEGATE_TITLE}",
        args0: [{
            type: "input_value",
            name: "BOOL",
            check: "Boolean"
        }],
        output: "Boolean",
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
        helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
    }, {
        type: "logic_null",
        message0: "%{BKY_LOGIC_NULL}",
        output: null,
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
        helpUrl: "%{BKY_LOGIC_NULL_HELPURL}"
    }, {
        type: "logic_ternary",
        message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
        args0: [{
            type: "input_value",
            name: "IF",
            check: "Boolean"
        }],
        message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
        args1: [{
            type: "input_value",
            name: "THEN"
        }],
        message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
        args2: [{
            type: "input_value",
            name: "ELSE"
        }],
        output: null,
        colour: "%{BKY_LOGIC_HUE}",
        tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
        helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
        extensions: ["logic_ternary"]
    }
]);
w.Bg([{
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}"
}, {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
}, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
w.N.Tc.Um = {
    EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
    NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
    LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
    LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
    GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
    GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
    AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
    OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
};
w.L.register("logic_op_tooltip", w.L.Lk("OP", w.N.Tc.Um));
w.N.Tc.Dt = {
    $c: 0,
    Id: 0,
    Ga: function() {
        if (!this.$c && !this.Id) return null;
        var a = document.createElement("mutation");
        this.$c && a.setAttribute("elseif", this.$c);
        this.Id && a.setAttribute("else", 1);
        return a
    },
    Za: function(a) {
        this.$c = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Id = parseInt(a.getAttribute("else"), 10) || 0;
        this.ld()
    },
    Pe: function(a) {
        var b = a.Xe("controls_if_if");
        b.wc();
        for (var c = b.M, e = 1; e <= this.$c; e++) {
            var f = a.Xe("controls_if_elseif");
            f.wc();
            c.connect(f.Z);
            c = f.M
        }
        this.Id && (a = a.Xe("controls_if_else"),
            a.wc(), c.connect(a.Z));
        return b
    },
    Ne: function(a) {
        var b = I(a.M);
        this.Id = this.$c = 0;
        a = [null];
        for (var c = [null], e = null; b;) {
            switch (b.type) {
                case "controls_if_elseif":
                    this.$c++;
                    a.push(b.Ep);
                    c.push(b.gf);
                    break;
                case "controls_if_else":
                    this.Id++;
                    e = b.gf;
                    break;
                default:
                    throw "Unknown block type.";
            }
            b = b.M && I(b.M)
        }
        this.ld();
        for (b = 1; b <= this.$c; b++) Zg(a[b], this, "IF" + b), Zg(c[b], this, "DO" + b);
        Zg(e, this, "ELSE")
    },
    om: function(a) {
        a = I(a.M);
        for (var b = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var c = J(this, "IF" + b),
                        e = J(this,
                            "DO" + b);
                    a.Ep = c && c.connection.Pa;
                    a.gf = e && e.connection.Pa;
                    b++;
                    break;
                case "controls_if_else":
                    e = J(this, "ELSE");
                    a.gf = e && e.connection.Pa;
                    break;
                default:
                    throw "Unknown block type.";
            }
            a = a.M && I(a.M)
        }
    },
    ld: function() {
        J(this, "ELSE") && this.yb("ELSE");
        for (var a = 1; J(this, "IF" + a);) this.yb("IF" + a), this.yb("DO" + a), a++;
        for (a = 1; a <= this.$c; a++) M(Fh(this, "IF" + a).tb("Boolean"), w.g.CONTROLS_IF_MSG_ELSEIF), M(this.Yd(w.Sa, "DO" + a), w.g.CONTROLS_IF_MSG_THEN);
        this.Id && M(this.Yd(w.Sa, "ELSE"), w.g.CONTROLS_IF_MSG_ELSE)
    }
};
w.L.Xj("controls_if_mutator", w.N.Tc.Dt, null, ["controls_if_elseif", "controls_if_else"]);
w.N.Tc.Et = function() {
    this.za(function() {
        if (this.$c || this.Id) {
            if (!this.$c && this.Id) return w.g.CONTROLS_IF_TOOLTIP_2;
            if (this.$c && !this.Id) return w.g.CONTROLS_IF_TOOLTIP_3;
            if (this.$c && this.Id) return w.g.CONTROLS_IF_TOOLTIP_4
        } else return w.g.CONTROLS_IF_TOOLTIP_1;
        return ""
    }.bind(this))
};
w.L.register("controls_if_tooltip", w.N.Tc.Et);
w.N.Tc.$t = {
    onchange: function(a) {
        this.Uj || (this.Uj = [null, null]);
        var b = Ih(this, "A"),
            c = Ih(this, "B");
        b && c && !Le(b.P, c.P) && (w.j.S(a.group), a = this.Uj[0], a !== b && (Ce(b), a && !a.gb && J(this, "A").connection.connect(a.P)), b = this.Uj[1], b !== c && (Ce(c), b && !b.gb && J(this, "B").connection.connect(b.P)), this.ob(), w.j.S(!1));
        this.Uj[0] = Ih(this, "A");
        this.Uj[1] = Ih(this, "B")
    }
};
w.N.Tc.Zt = function() {
    ah(this, w.N.Tc.$t)
};
w.L.register("logic_compare", w.N.Tc.Zt);
w.N.Tc.au = {
    Is: null,
    onchange: function(a) {
        var b = Ih(this, "THEN"),
            c = Ih(this, "ELSE"),
            e = this.P.Pa;
        if ((b || c) && e)
            for (var f = 0; 2 > f; f++) {
                var h = 1 == f ? b : c;
                h && !Le(h.P, e) && (w.j.S(a.group), e === this.Is ? (Ce(this), e.v.ob()) : (Ce(h), h.ob()), w.j.S(!1))
            }
        this.Is = e
    }
};
w.L.jm("logic_ternary", w.N.Tc.au);
w.H.Mw = {};
w.N.Ge = {};
w.N.Ge.Hi = 120;
w.Bg([{
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "TIMES",
        check: "Number"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
        type: "field_number",
        name: "TIMES",
        value: 10,
        min: 0,
        precision: 1
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "MODE",
        options: [
            ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
            ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]
        ]
    }, {
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
}, {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: null
    }, {
        type: "input_value",
        name: "FROM",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "TO",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "BY",
        check: "Number",
        align: "RIGHT"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
}, {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: null
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
}, {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "FLOW",
        options: [
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]
        ]
    }],
    previousStatement: null,
    colour: "%{BKY_LOOPS_HUE}",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip",
        "controls_flow_in_loop_check"
    ]
}]);
w.N.Ge.Du = {
    WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
    UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"
};
w.L.register("controls_whileUntil_tooltip", w.L.Lk("MODE", w.N.Ge.Du));
w.N.Ge.yt = {
    BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
    CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"
};
w.L.register("controls_flow_tooltip", w.L.Lk("FLOW", w.N.Ge.yt));
w.N.Ge.Gt = {
    Oe: function(a) {
        if (!this.rb) {
            var b = H(this, "VAR").Kc(),
                c = b.name;
            if (!this.isCollapsed() && null != c) {
                var e = {
                    enabled: !0
                };
                e.text = w.g.VARIABLES_SET_CREATE_GET.replace("%1", c);
                b = w.G.vr(b);
                b = E("block", null, b);
                b.setAttribute("type", "variables_get");
                e.eb = w.ba.Ok(this, b);
                a.push(e)
            }
        }
    }
};
w.L.jm("contextMenu_newGetVariableBlock", w.N.Ge.Gt);
w.L.register("controls_for_tooltip", w.L.Mk("%{BKY_CONTROLS_FOR_TOOLTIP}"));
w.L.register("controls_forEach_tooltip", w.L.Mk("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
w.N.Ge.Ft = {
    cu: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"],
    onchange: function() {
        if (this.o.pb && !this.o.pb()) {
            var a = !1,
                b = this;
            do {
                if (-1 != this.cu.indexOf(b.type)) {
                    a = !0;
                    break
                }
                b = Dh(b)
            } while (b);
            a ? (this.xe(null), this.rb || this.Cd(!1)) : (this.xe(w.g.CONTROLS_FLOW_STATEMENTS_WARNING), this.rb || Eh(this) || this.Cd(!0))
        }
    }
};
w.L.jm("controls_flow_in_loop_check", w.N.Ge.Ft);
w.H.Nw = {};
w.N.Math = {};
w.N.Math.Hi = 230;
w.Bg([{
    type: "math_number",
    message0: "%1",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A",
        check: "Number"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}",
                "MULTIPLY"
            ],
            ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
            ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]
        ]
    }, {
        type: "input_value",
        name: "B",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_single",
    message0: "%1 %2",
    args0: [{
            type: "field_dropdown",
            name: "OP",
            options: [
                ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
                ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
                ["-", "NEG"],
                ["ln", "LN"],
                ["log10", "LOG10"],
                ["e^", "EXP"],
                ["10^", "POW10"]
            ]
        },
        {
            type: "input_value",
            name: "NUM",
            check: "Number"
        }
    ],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_trig",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_TRIG_SIN}", "SIN"],
            ["%{BKY_MATH_TRIG_COS}", "COS"],
            ["%{BKY_MATH_TRIG_TAN}", "TAN"],
            ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
            ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
            ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_constant",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
            ["\u03c0", "PI"],
            ["e", "E"],
            ["\u03c6", "GOLDEN_RATIO"],
            ["sqrt(2)", "SQRT2"],
            ["sqrt(\u00bd)", "SQRT1_2"],
            ["\u221e", "INFINITY"]
        ]
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}"
}, {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [{
            type: "input_value",
            name: "NUMBER_TO_CHECK",
            check: "Number"
        },
        {
            type: "field_dropdown",
            name: "PROPERTY",
            options: [
                ["%{BKY_MATH_IS_EVEN}", "EVEN"],
                ["%{BKY_MATH_IS_ODD}", "ODD"],
                ["%{BKY_MATH_IS_PRIME}", "PRIME"],
                ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
                ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
                ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
                ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]
            ]
        }
    ],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
}, {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"
    }, {
        type: "input_value",
        name: "DELTA",
        check: "Number"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_VARIABLES_HUE}",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
}, {
    type: "math_round",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
}, {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
            ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
            ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}",
                "STD_DEV"
            ],
            ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]
        ]
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [{
        type: "input_value",
        name: "DIVIDEND",
        check: "Number"
    }, {
        type: "input_value",
        name: "DIVISOR",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
}, {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "Number"
    }, {
        type: "input_value",
        name: "LOW",
        check: "Number"
    }, {
        type: "input_value",
        name: "HIGH",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}"
}, {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [{
            type: "input_value",
            name: "FROM",
            check: "Number"
        },
        {
            type: "input_value",
            name: "TO",
            check: "Number"
        }
    ],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
}, {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
}]);
w.N.Math.Um = {
    ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
    MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
    MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
    DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
    POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
    ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
    ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
    NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
    LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
    LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
    EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
    POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
    SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
    COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
    TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
    ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
    ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
    ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
    SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
    MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
    MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
    AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
    MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
    MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
    STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
    RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
};
w.L.register("math_op_tooltip", w.L.Lk("OP", w.N.Math.Um));
w.N.Math.Tt = {
    Ga: function() {
        var a = document.createElement("mutation"),
            b = "DIVISIBLE_BY" == D(this, "PROPERTY");
        a.setAttribute("divisor_input", b);
        return a
    },
    Za: function(a) {
        a = "true" == a.getAttribute("divisor_input");
        this.ld(a)
    },
    ld: function(a) {
        var b = J(this, "DIVISOR");
        a ? b || Fh(this, "DIVISOR").tb("Number") : b && this.yb("DIVISOR")
    }
};
w.N.Math.Ut = function() {
    uh(H(this, "PROPERTY"), function(a) {
        this.v.ld("DIVISIBLE_BY" == a)
    })
};
w.L.Xj("math_is_divisibleby_mutator", w.N.Math.Tt, w.N.Math.Ut);
w.L.register("math_change_tooltip", w.L.Mk("%{BKY_MATH_CHANGE_TOOLTIP}"));
w.N.Math.Yt = {
    og: function(a) {
        "MODE" == a ? this.P.tb("Array") : this.P.tb("Number")
    },
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("op", D(this, "OP"));
        return a
    },
    Za: function(a) {
        this.og(a.getAttribute("op"))
    }
};
w.N.Math.Xt = function() {
    uh(H(this, "OP"), function(a) {
        this.og(a)
    }.bind(this))
};
w.L.Xj("math_modes_of_list_mutator", w.N.Math.Yt, w.N.Math.Xt);
w.H.vx = {};
w.H.procedures_defnoreturn = {
    K: function() {
        var a = new ij("", w.ra.Rs);
        a.wm = !1;
        M(M(M(O(this), w.g.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.ek(new Yg(["procedures_mutatorarg"]));
        (this.o.options.Wi || this.o.options.Kb && this.o.options.Kb.options.Wi) && w.g.PROCEDURES_DEFNORETURN_COMMENT && this.bh(w.g.PROCEDURES_DEFNORETURN_COMMENT);
        this.Na(w.g.PROCEDURES_HUE);
        this.za(w.g.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.Ob = w.g.PROCEDURES_DEFNORETURN_HELPURL;
        this.ea = [];
        this.Bb = [];
        this.gh(!0);
        this.gf = null
    },
    gh: function(a) {
        this.Hl !== a && (a ? (M(this.Yd(w.Sa, "STACK"), w.g.PROCEDURES_DEFNORETURN_DO), J(this, "RETURN") && Hh(this, "STACK", "RETURN")) : this.yb("STACK", !0), this.Hl = a)
    },
    tk: function() {
        for (var a = !1, b = {}, c = 0; c < this.ea.length; c++) {
            if (b["arg_" + this.ea[c].toLowerCase()]) {
                a = !0;
                break
            }
            b["arg_" + this.ea[c].toLowerCase()] = !0
        }
        a ? this.xe(w.g.PROCEDURES_DEF_DUPLICATE_WARNING) : this.xe(null);
        a = "";
        this.ea.length && (a = w.g.PROCEDURES_BEFORE_PARAMS + " " + this.ea.join(", "));
        w.j.disable();
        try {
            H(this, "PARAMS").setValue(a)
        } finally {
            w.j.enable()
        }
    },
    Ga: function(a) {
        var b = document.createElement("mutation");
        a && b.setAttribute("name", D(this, "NAME"));
        for (var c = 0; c < this.Bb.length; c++) {
            var e = document.createElement("arg"),
                f = this.Bb[c];
            e.setAttribute("name", f.name);
            e.setAttribute("varId", f.aa());
            a && this.Go && e.setAttribute("paramId", this.Go[c]);
            b.appendChild(e)
        }
        this.Hl || b.setAttribute("statements", "false");
        return b
    },
    Za: function(a) {
        this.ea = [];
        this.Bb = [];
        for (var b = 0, c; c = a.childNodes[b]; b++)
            if ("arg" == c.nodeName.toLowerCase()) {
                var e = c.getAttribute("name");
                c = c.getAttribute("varId");
                this.ea.push(e);
                e = w.G.yl(this.o, c, e, "");
                this.Bb.push(e)
            }
        this.tk();
        w.ra.uo(this);
        this.gh("false" !== a.getAttribute("statements"))
    },
    Pe: function(a) {
        var b = a.Xe("procedures_mutatorcontainer");
        b.wc();
        J(this, "RETURN") ? H(b, "STATEMENTS").setValue(this.Hl ? "TRUE" : "FALSE") : J(b, "STATEMENT_INPUT").oa(!1);
        for (var c = J(b, "STACK").connection, e = 0; e < this.ea.length; e++) {
            var f = a.Xe("procedures_mutatorarg");
            f.wc();
            H(f, "NAME").setValue(this.ea[e]);
            f.OB = e;
            c.connect(f.Z);
            c = f.M
        }
        w.ra.uo(this);
        return b
    },
    Ne: function(a) {
        this.ea = [];
        this.Go = [];
        this.Bb = [];
        for (var b = Ih(a, "STACK"); b;) {
            var c = D(b, "NAME");
            this.ea.push(c);
            c = this.o.Kc(c, "");
            this.Bb.push(c);
            this.Go.push(b.id);
            b = b.M && I(b.M)
        }
        this.tk();
        w.ra.uo(this);
        a = D(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.Hl != a))
            if (a) this.gh(!0), Zg(this.gf, this, "STACK"), this.gf = null;
            else {
                a = J(this, "STACK").connection;
                if (this.gf = a.Pa) a = I(a), Ce(a), a.ob();
                this.gh(!1)
            }
    },
    Te: function() {
        return [D(this, "NAME"), this.ea, !1]
    },
    Rn: function() {
        return this.ea
    },
    Ff: function() {
        return this.Bb
    },
    $j: function(a, b) {
        var c = this.o.Kd(a);
        if ("" == c.type) {
            c = c.name;
            b = this.o.Kd(b);
            for (var e = !1, f = 0; f < this.Bb.length; f++) this.Bb[f].aa() == a && (this.ea[f] = b.name, this.Bb[f] = b, e = !0);
            e && this.bl(c, b.name)
        }
    },
    Cm: function(a) {
        for (var b = a.name, c = !1, e = 0; e < this.Bb.length; e++)
            if (this.Bb[e].aa() == a.aa()) {
                var f = this.ea[e];
                this.ea[e] = b;
                c = !0
            }
        c && this.bl(f, b)
    },
    bl: function(a, b) {
        this.tk();
        if (this.dd.Y())
            for (var c = Oc(this.dd.m), e = 0, f; f = c[e]; e++) "procedures_mutatorarg" == f.type && Rc(a, D(f, "NAME")) && H(f, "NAME").setValue(b)
    },
    Oe: function(a) {
        if (!this.rb) {
            var b = {
                    enabled: !0
                },
                c = D(this, "NAME");
            b.text = w.g.PROCEDURES_CREATE_DO.replace("%1", c);
            var e = E("mutation");
            e.setAttribute("name", c);
            for (var f = 0; f < this.ea.length; f++) c = E("arg"), c.setAttribute("name", this.ea[f]), e.appendChild(c);
            c = E("block", null, e);
            c.setAttribute("type", this.lq);
            b.eb = w.ba.Ok(this, c);
            a.push(b);
            if (!this.isCollapsed())
                for (f = 0; f < this.Bb.length; f++) b = {
                        enabled: !0
                    }, e = this.Bb[f], c = e.name, b.text = w.g.VARIABLES_SET_CREATE_GET.replace("%1", c), c = w.G.vr(e), c = E("block", null, c), c.setAttribute("type", "variables_get"),
                    b.eb = w.ba.Ok(this, c), a.push(b)
        }
    },
    lq: "procedures_callnoreturn"
};
w.H.procedures_defreturn = {
    K: function() {
        var a = new ij("", w.ra.Rs);
        a.wm = !1;
        M(M(M(O(this), w.g.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        M(Bh(Fh(this, "RETURN"), w.xh), w.g.PROCEDURES_DEFRETURN_RETURN);
        this.ek(new Yg(["procedures_mutatorarg"]));
        (this.o.options.Wi || this.o.options.Kb && this.o.options.Kb.options.Wi) && w.g.PROCEDURES_DEFRETURN_COMMENT && this.bh(w.g.PROCEDURES_DEFRETURN_COMMENT);
        this.Na(w.g.PROCEDURES_HUE);
        this.za(w.g.PROCEDURES_DEFRETURN_TOOLTIP);
        this.Ob = w.g.PROCEDURES_DEFRETURN_HELPURL;
        this.ea = [];
        this.Bb = [];
        this.gh(!0);
        this.gf = null
    },
    gh: w.H.procedures_defnoreturn.gh,
    tk: w.H.procedures_defnoreturn.tk,
    Ga: w.H.procedures_defnoreturn.Ga,
    Za: w.H.procedures_defnoreturn.Za,
    Pe: w.H.procedures_defnoreturn.Pe,
    Ne: w.H.procedures_defnoreturn.Ne,
    Te: function() {
        return [D(this, "NAME"), this.ea, !0]
    },
    Rn: w.H.procedures_defnoreturn.Rn,
    Ff: w.H.procedures_defnoreturn.Ff,
    $j: w.H.procedures_defnoreturn.$j,
    Cm: w.H.procedures_defnoreturn.Cm,
    bl: w.H.procedures_defnoreturn.bl,
    Oe: w.H.procedures_defnoreturn.Oe,
    lq: "procedures_callreturn"
};
w.H.procedures_mutatorcontainer = {
    K: function() {
        M(O(this), w.g.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.Yd(w.Sa, "STACK");
        M(M(O(this, "STATEMENT_INPUT"), w.g.PROCEDURES_ALLOW_STATEMENTS), new zj("TRUE"), "STATEMENTS");
        this.Na(w.g.PROCEDURES_HUE);
        this.za(w.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
w.H.procedures_mutatorarg = {
    K: function() {
        var a = new ij("x", this.rh);
        a.Vw = a.ze;
        a.ze = function() {
            this.bj = [];
            this.Vw()
        };
        M(M(O(this), w.g.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.Ac(!0);
        this.zc(!0);
        this.Na(w.g.PROCEDURES_HUE);
        this.za(w.g.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.Bo = this.Av;
        a.bj = [];
        a.Bo("x")
    },
    rh: function(a) {
        var b = $g(this.v.o);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        var c = b.Kc(a, "");
        c && c.name != a && b.$j(c.aa(), a);
        c || (c = b.Yc(a, "")) && this.bj && this.bj.push(c);
        return a
    },
    Av: function(a) {
        var b = $g(this.v.o);
        if (b)
            for (var c = 0; c < this.bj.length; c++) {
                var e = this.bj[c];
                e.name != a && b.Bf(e.aa())
            }
    }
};
w.H.procedures_callnoreturn = {
    K: function() {
        M(O(this, "TOPROW"), this.id, "NAME");
        this.Ac(!0);
        this.zc(!0);
        this.Na(w.g.PROCEDURES_HUE);
        this.Ob = w.g.PROCEDURES_CALLNORETURN_HELPURL;
        this.ea = [];
        this.Bb = [];
        this.Yg = {};
        this.Rd = null
    },
    wd: function() {
        return D(this, "NAME")
    },
    Zj: function(a, b) {
        Rc(a, this.wd()) && (H(this, "NAME").setValue(b), this.za((this.P ? w.g.PROCEDURES_CALLRETURN_TOOLTIP : w.g.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b)))
    },
    kp: function(a, b) {
        var c = w.ra.rl(this.wd(), this.o);
        c = c && c.dd && c.dd.Y();
        c || (this.Yg = {}, this.Rd = null);
        if (b) {
            a: {
                var e = this.ea;
                if (ha(e) && ha(a) && e.length == a.length) {
                    for (var f = e.length, h = 0; h < f; h++)
                        if (e[h] !== a[h]) {
                            e = !1;
                            break a
                        }
                    e = !0
                } else e = !1
            }
            if (e) this.Rd = b;
            else {
                if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
                this.fg(!1);
                this.Rd || (this.Yg = {}, a.join("\n") == this.ea.join("\n") ? this.Rd = b : this.Rd = []);
                e = this.R;
                this.R = !1;
                for (f = 0; f < this.ea.length; f++)
                    if (h = J(this, "ARG" + f)) h = h.connection.Pa, this.Yg[this.Rd[f]] = h, c && h && -1 == b.indexOf(this.Rd[f]) && (h.disconnect(),
                        h.v.ob());
                this.ea = [].concat(a);
                this.Bb = [];
                for (f = 0; f < this.ea.length; f++) a = w.G.yl(this.o, null, this.ea[f], ""), this.Bb.push(a);
                this.ld();
                if (this.Rd = b)
                    for (f = 0; f < this.ea.length; f++) b = this.Rd[f], b in this.Yg && (h = this.Yg[b], Zg(h, this, "ARG" + f) || delete this.Yg[b]);
                (this.R = e) && this.$()
            }
        }
    },
    ld: function() {
        for (var a = 0; a < this.ea.length; a++) {
            var b = H(this, "ARGNAME" + a);
            if (b) {
                w.j.disable();
                try {
                    b.setValue(this.ea[a])
                } finally {
                    w.j.enable()
                }
            } else b = new yh(this.ea[a]), M(Bh(Fh(this, "ARG" + a), w.xh), b, "ARGNAME" + a).K()
        }
        for (; J(this,
                "ARG" + a);) this.yb("ARG" + a), a++;
        if (a = J(this, "TOPROW"))
            if (this.ea.length) H(this, "WITH") || (M(a, w.g.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.K());
            else if (H(this, "WITH")) {
            b = 0;
            for (var c; c = a.Ia[b]; b++)
                if ("WITH" === c.name) {
                    c.A();
                    a.Ia.splice(b, 1);
                    a.v.R && (a.v.$(), a.v.ob());
                    break
                }
        }
    },
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("name", this.wd());
        for (var b = 0; b < this.ea.length; b++) {
            var c = document.createElement("arg");
            c.setAttribute("name", this.ea[b]);
            a.appendChild(c)
        }
        return a
    },
    Za: function(a) {
        var b =
            a.getAttribute("name");
        this.Zj(this.wd(), b);
        b = [];
        for (var c = [], e = 0, f; f = a.childNodes[e]; e++) "arg" == f.nodeName.toLowerCase() && (b.push(f.getAttribute("name")), c.push(f.getAttribute("paramId")));
        this.kp(b, c)
    },
    Ff: function() {
        return this.Bb
    },
    onchange: function(a) {
        if (this.o && !this.o.Nd)
            if (a.type == w.j.wt && -1 != a.Kf.indexOf(this.id)) {
                var b = this.wd();
                b = w.ra.rl(b, this.o);
                !b || b.type == this.sn && JSON.stringify(b.ea) == JSON.stringify(this.ea) || (b = null);
                if (!b) {
                    w.j.S(a.group);
                    a = E("xml");
                    b = E("block");
                    b.setAttribute("type",
                        this.sn);
                    var c = this.la(),
                        e = c.y + 2 * w.Uc;
                    b.setAttribute("x", c.x + w.Uc * (this.u ? -1 : 1));
                    b.setAttribute("y", e);
                    c = this.Ga();
                    b.appendChild(c);
                    c = E("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(document.createTextNode(this.wd()));
                    b.appendChild(c);
                    a.appendChild(b);
                    w.D.ee(a, this.o);
                    w.j.S(!1)
                }
            } else a.type == w.j.xt && (b = this.wd(), b = w.ra.rl(b, this.o), b || (w.j.S(a.group), this.A(!0, !1), w.j.S(!1)))
    },
    Oe: function(a) {
        var b = {
            enabled: !0
        };
        b.text = w.g.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.wd(),
            e = this.o;
        b.eb = function() {
            var a =
                w.ra.rl(c, e);
            if (a) {
                if (e.hb) {
                    var b = Ic(e, a.id);
                    if (b) {
                        var k = b.la(),
                            l = b.Gb(),
                            m = e.scale;
                        b = (k.x + (e.u ? -1 : 1) * l.width / 2) * m;
                        k = (k.y + l.height / 2) * m;
                        l = e.qb();
                        b = b - l.Hc - l.xa / 2;
                        k = k - l.nc - l.bb / 2;
                        w.Pb();
                        e.hb.set(b, k)
                    }
                } else console.warn("Tried to scroll a non-scrollable workspace.");
                a.select()
            }
        };
        a.push(b)
    },
    sn: "procedures_defnoreturn"
};
w.H.procedures_callreturn = {
    K: function() {
        M(O(this, "TOPROW"), "", "NAME");
        this.ef(!0);
        this.Na(w.g.PROCEDURES_HUE);
        this.Ob = w.g.PROCEDURES_CALLRETURN_HELPURL;
        this.ea = [];
        this.Yg = {};
        this.Rd = null
    },
    wd: w.H.procedures_callnoreturn.wd,
    Zj: w.H.procedures_callnoreturn.Zj,
    kp: w.H.procedures_callnoreturn.kp,
    ld: w.H.procedures_callnoreturn.ld,
    Ga: w.H.procedures_callnoreturn.Ga,
    Za: w.H.procedures_callnoreturn.Za,
    Ff: w.H.procedures_callnoreturn.Ff,
    onchange: w.H.procedures_callnoreturn.onchange,
    Oe: w.H.procedures_callnoreturn.Oe,
    sn: "procedures_defreturn"
};
w.H.procedures_ifreturn = {
    K: function() {
        M(Fh(this, "CONDITION").tb("Boolean"), w.g.CONTROLS_IF_MSG_IF);
        M(Fh(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN);
        this.hg(!0);
        this.Ac(!0);
        this.zc(!0);
        this.Na(w.g.PROCEDURES_HUE);
        this.za(w.g.PROCEDURES_IFRETURN_TOOLTIP);
        this.Ob = w.g.PROCEDURES_IFRETURN_HELPURL;
        this.Jf = !0
    },
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("value", Number(this.Jf));
        return a
    },
    Za: function(a) {
        this.Jf = 1 == a.getAttribute("value");
        this.Jf || (this.yb("VALUE"), M(O(this, "VALUE"),
            w.g.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.o.pb && !this.o.pb()) {
            var a = !1,
                b = this;
            do {
                if (-1 != this.Mt.indexOf(b.type)) {
                    a = !0;
                    break
                }
                b = Dh(b)
            } while (b);
            a ? ("procedures_defnoreturn" == b.type && this.Jf ? (this.yb("VALUE"), M(O(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN), this.Jf = !1) : "procedures_defreturn" != b.type || this.Jf || (this.yb("VALUE"), M(Fh(this, "VALUE"), w.g.PROCEDURES_DEFRETURN_RETURN), this.Jf = !0), this.xe(null), this.rb || this.Cd(!1)) : (this.xe(w.g.PROCEDURES_IFRETURN_WARNING), this.rb || Eh(this) ||
                this.Cd(!0))
        }
    },
    Mt: ["procedures_defnoreturn", "procedures_defreturn"]
};
w.H.Nx = {};
w.N.Text = {};
w.N.Text.Hi = 160;
w.Bg([{
        type: "text",
        message0: "%1",
        args0: [{
            type: "field_input",
            name: "TEXT",
            text: ""
        }],
        output: "String",
        colour: "%{BKY_TEXTS_HUE}",
        helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
        tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
        extensions: ["text_quotes", "parent_tooltip_when_inline"]
    }, {
        type: "text_join",
        message0: "",
        output: "String",
        colour: "%{BKY_TEXTS_HUE}",
        helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
        tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
        mutator: "text_join_mutator"
    }, {
        type: "text_create_join_container",
        message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
        args0: [{
                type: "input_dummy"
            },
            {
                type: "input_statement",
                name: "STACK"
            }
        ],
        colour: "%{BKY_TEXTS_HUE}",
        tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
        enableContextMenu: !1
    }, {
        type: "text_create_join_item",
        message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_TEXTS_HUE}",
        tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
        enableContextMenu: !1
    }, {
        type: "text_append",
        message0: "%{BKY_TEXT_APPEND_TITLE}",
        args0: [{
            type: "field_variable",
            name: "VAR",
            variable: "%{BKY_TEXT_APPEND_VARIABLE}"
        }, {
            type: "input_value",
            name: "TEXT"
        }],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_TEXTS_HUE}",
        extensions: ["text_append_tooltip"]
    }, {
        type: "text_length",
        message0: "%{BKY_TEXT_LENGTH_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: ["String", "Array"]
        }],
        output: "Number",
        colour: "%{BKY_TEXTS_HUE}",
        tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
        helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}"
    }, {
        type: "text_isEmpty",
        message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: ["String", "Array"]
        }],
        output: "Boolean",
        colour: "%{BKY_TEXTS_HUE}",
        tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
        helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
    }, {
        type: "text_indexOf",
        message0: "%{BKY_TEXT_INDEXOF_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: "String"
        }, {
            type: "field_dropdown",
            name: "END",
            options: [
                ["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"],
                ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]
            ]
        }, {
            type: "input_value",
            name: "FIND",
            check: "String"
        }],
        output: "Number",
        colour: "%{BKY_TEXTS_HUE}",
        helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
        inputsInline: !0,
        extensions: ["text_indexOf_tooltip"]
    },
    {
        type: "text_charAt",
        message0: "%{BKY_TEXT_CHARAT_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: "String"
        }, {
            type: "field_dropdown",
            name: "WHERE",
            options: [
                ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
                ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
                ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
                ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
                ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
            ]
        }],
        output: "String",
        colour: "%{BKY_TEXTS_HUE}",
        helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
        inputsInline: !0,
        mutator: "text_charAt_mutator"
    }
]);
w.H.text_getSubstring = {
    K: function() {
        this.WHERE_OPTIONS_1 = [
            [w.g.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
            [w.g.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
            [w.g.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]
        ];
        this.WHERE_OPTIONS_2 = [
            [w.g.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
            [w.g.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
            [w.g.TEXT_GET_SUBSTRING_END_LAST, "LAST"]
        ];
        this.Ob = w.g.TEXT_GET_SUBSTRING_HELPURL;
        this.Na(w.g.TEXTS_HUE);
        M(Fh(this, "STRING").tb("String"), w.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        O(this, "AT1");
        O(this, "AT2");
        w.g.TEXT_GET_SUBSTRING_TAIL && M(O(this, "TAIL"), w.g.TEXT_GET_SUBSTRING_TAIL);
        this.hg(!0);
        this.ef(!0, "String");
        this.nf(1, !0);
        this.nf(2, !0);
        this.za(w.g.TEXT_GET_SUBSTRING_TOOLTIP)
    },
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("at1", J(this, "AT1").type == w.kb);
        a.setAttribute("at2", J(this, "AT2").type == w.kb);
        return a
    },
    Za: function(a) {
        var b = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.nf(1, b);
        this.nf(2, a)
    },
    nf: function(a, b) {
        this.yb("AT" +
            a);
        this.yb("ORDINAL" + a, !0);
        b ? (Fh(this, "AT" + a).tb("Number"), w.g.ORDINAL_NUMBER_SUFFIX && M(O(this, "ORDINAL" + a), w.g.ORDINAL_NUMBER_SUFFIX)) : O(this, "AT" + a);
        2 == a && w.g.TEXT_GET_SUBSTRING_TAIL && (this.yb("TAIL", !0), M(O(this, "TAIL"), w.g.TEXT_GET_SUBSTRING_TAIL));
        var c = new N(this["WHERE_OPTIONS_" + a], function(c) {
            var e = "FROM_START" == c || "FROM_END" == c;
            if (e != b) {
                var h = this.v;
                h.nf(a, e);
                H(h, "WHERE" + a).setValue(c);
                return null
            }
        });
        M(J(this, "AT" + a), c, "WHERE" + a);
        1 == a && (Hh(this, "AT1", "AT2"), J(this, "ORDINAL1") && Hh(this, "ORDINAL1",
            "AT2"))
    }
};
w.H.text_changeCase = {
    K: function() {
        var a = [
            [w.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
            [w.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
            [w.g.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]
        ];
        this.Ob = w.g.TEXT_CHANGECASE_HELPURL;
        this.Na(w.g.TEXTS_HUE);
        M(Fh(this, "TEXT").tb("String"), new N(a), "CASE");
        this.ef(!0, "String");
        this.za(w.g.TEXT_CHANGECASE_TOOLTIP)
    }
};
w.H.text_trim = {
    K: function() {
        var a = [
            [w.g.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
            [w.g.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
            [w.g.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]
        ];
        this.Ob = w.g.TEXT_TRIM_HELPURL;
        this.Na(w.g.TEXTS_HUE);
        M(Fh(this, "TEXT").tb("String"), new N(a), "MODE");
        this.ef(!0, "String");
        this.za(w.g.TEXT_TRIM_TOOLTIP)
    }
};
w.H.text_print = {
    K: function() {
        Gh(this, {
            message0: w.g.TEXT_PRINT_TITLE,
            args0: [{
                type: "input_value",
                name: "TEXT"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: w.g.TEXTS_HUE,
            tooltip: w.g.TEXT_PRINT_TOOLTIP,
            helpUrl: w.g.TEXT_PRINT_HELPURL
        })
    }
};
w.H.text_prompt_ext = {
    K: function() {
        var a = [
            [w.g.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
            [w.g.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
        ];
        this.Ob = w.g.TEXT_PROMPT_HELPURL;
        this.Na(w.g.TEXTS_HUE);
        var b = this;
        a = new N(a, function(a) {
            b.og(a)
        });
        M(Fh(this, "TEXT"), a, "TYPE");
        this.ef(!0, "String");
        this.za(function() {
            return "TEXT" == D(b, "TYPE") ? w.g.TEXT_PROMPT_TOOLTIP_TEXT : w.g.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    },
    og: function(a) {
        this.P.tb("NUMBER" == a ? "Number" : "String")
    },
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("type",
            D(this, "TYPE"));
        return a
    },
    Za: function(a) {
        this.og(a.getAttribute("type"))
    }
};
w.H.text_prompt = {
    K: function() {
        ah(this, w.N.Text.Om);
        var a = [
                [w.g.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
                [w.g.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
            ],
            b = this;
        this.Ob = w.g.TEXT_PROMPT_HELPURL;
        this.Na(w.g.TEXTS_HUE);
        a = new N(a, function(a) {
            b.og(a)
        });
        M(M(M(M(O(this), a, "TYPE"), this.mi(!0)), new ij(""), "TEXT"), this.mi(!1));
        this.ef(!0, "String");
        this.za(function() {
            return "TEXT" == D(b, "TYPE") ? w.g.TEXT_PROMPT_TOOLTIP_TEXT : w.g.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    },
    og: w.H.text_prompt_ext.og,
    Ga: w.H.text_prompt_ext.Ga,
    Za: w.H.text_prompt_ext.Za
};
w.H.text_count = {
    K: function() {
        Gh(this, {
            message0: w.g.TEXT_COUNT_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "SUB",
                check: "String"
            }, {
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "Number",
            inputsInline: !0,
            colour: w.g.TEXTS_HUE,
            tooltip: w.g.TEXT_COUNT_TOOLTIP,
            helpUrl: w.g.TEXT_COUNT_HELPURL
        })
    }
};
w.H.text_replace = {
    K: function() {
        Gh(this, {
            message0: w.g.TEXT_REPLACE_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "String"
            }, {
                type: "input_value",
                name: "TO",
                check: "String"
            }, {
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "String",
            inputsInline: !0,
            colour: w.g.TEXTS_HUE,
            tooltip: w.g.TEXT_REPLACE_TOOLTIP,
            helpUrl: w.g.TEXT_REPLACE_HELPURL
        })
    }
};
w.H.text_reverse = {
    K: function() {
        Gh(this, {
            message0: w.g.TEXT_REVERSE_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "String",
            inputsInline: !0,
            colour: w.g.TEXTS_HUE,
            tooltip: w.g.TEXT_REVERSE_TOOLTIP,
            helpUrl: w.g.TEXT_REVERSE_HELPURL
        })
    }
};
w.N.Text.Om = {
    lu: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
    mu: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
    nu: 12,
    ku: 12,
    wx: function(a) {
        for (var b = 0, c; c = this.W[b]; b++)
            for (var e = 0, f; f = c.Ia[e]; e++)
                if (a == f.name) {
                    Ah(c, e, this.mi(!0));
                    Ah(c, e + 2, this.mi(!1));
                    return
                }
        console.warn('field named "' + a + '" not found in ' + Se(this))
    },
    mi: function(a) {
        a = this.u ? !a : a;
        return new qk(a ? this.lu : this.mu, this.nu, this.ku, a ? "\u201c" : "\u201d")
    }
};
w.N.Text.Au = function() {
    ah(this, w.N.Text.Om);
    this.wx("TEXT")
};
w.N.Text.zu = {
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("items", this.zd);
        return a
    },
    Za: function(a) {
        this.zd = parseInt(a.getAttribute("items"), 10);
        this.ld()
    },
    Pe: function(a) {
        var b = a.Xe("text_create_join_container");
        b.wc();
        for (var c = J(b, "STACK").connection, e = 0; e < this.zd; e++) {
            var f = a.Xe("text_create_join_item");
            f.wc();
            c.connect(f.Z);
            c = f.M
        }
        return b
    },
    Ne: function(a) {
        var b = Ih(a, "STACK");
        for (a = []; b;) a.push(b.Ep), b = b.M && I(b.M);
        for (b = 0; b < this.zd; b++) {
            var c = J(this, "ADD" + b).connection.Pa;
            c && -1 == a.indexOf(c) && c.disconnect()
        }
        this.zd = a.length;
        this.ld();
        for (b = 0; b < this.zd; b++) Zg(a[b], this, "ADD" + b)
    },
    om: function(a) {
        a = Ih(a, "STACK");
        for (var b = 0; a;) {
            var c = J(this, "ADD" + b);
            a.Ep = c && c.connection.Pa;
            b++;
            a = a.M && I(a.M)
        }
    },
    ld: function() {
        this.zd && J(this, "EMPTY") ? this.yb("EMPTY") : this.zd || J(this, "EMPTY") || M(M(O(this, "EMPTY"), this.mi(!0)), this.mi(!1));
        for (var a = 0; a < this.zd; a++)
            if (!J(this, "ADD" + a)) {
                var b = Fh(this, "ADD" + a);
                0 == a && M(b, w.g.TEXT_JOIN_TITLE_CREATEWITH)
            }
        for (; J(this, "ADD" + a);) this.yb("ADD" + a), a++
    }
};
w.N.Text.yu = function() {
    ah(this, w.N.Text.Om);
    this.zd = 2;
    this.ld();
    this.ek(new Yg(["text_create_join_item"]))
};
w.L.register("text_append_tooltip", w.L.Mk("%{BKY_TEXT_APPEND_TOOLTIP}"));
w.N.Text.xu = function() {
    var a = this;
    this.za(function() {
        return w.g.TEXT_INDEXOF_TOOLTIP.replace("%1", a.o.options.$e ? "0" : "-1")
    })
};
w.N.Text.wu = {
    Ga: function() {
        var a = document.createElement("mutation");
        a.setAttribute("at", !!this.Pr);
        return a
    },
    Za: function(a) {
        a = "false" != a.getAttribute("at");
        this.nf(a)
    },
    nf: function(a) {
        this.yb("AT", !0);
        this.yb("ORDINAL", !0);
        a && (Fh(this, "AT").tb("Number"), w.g.ORDINAL_NUMBER_SUFFIX && M(O(this, "ORDINAL"), w.g.ORDINAL_NUMBER_SUFFIX));
        w.g.TEXT_CHARAT_TAIL && (this.yb("TAIL", !0), M(O(this, "TAIL"), w.g.TEXT_CHARAT_TAIL));
        this.Pr = a
    }
};
w.N.Text.vu = function() {
    uh(H(this, "WHERE"), function(a) {
        var b = "FROM_START" == a || "FROM_END" == a;
        if (b != this.Pr) {
            var e = this.v;
            e.nf(b);
            H(e, "WHERE").setValue(a);
            return null
        }
    });
    this.nf(!0);
    var a = this;
    this.za(function() {
        var b = D(a, "WHERE"),
            c = w.g.TEXT_CHARAT_TOOLTIP;
        ("FROM_START" == b || "FROM_END" == b) && (b = "FROM_START" == b ? w.g.LISTS_INDEX_FROM_START_TOOLTIP : w.g.LISTS_INDEX_FROM_END_TOOLTIP) && (c += "  " + b.replace("%1", a.o.options.$e ? "#1" : "#0"));
        return c
    })
};
w.L.register("text_indexOf_tooltip", w.N.Text.xu);
w.L.register("text_quotes", w.N.Text.Au);
w.L.Xj("text_join_mutator", w.N.Text.zu, w.N.Text.yu);
w.L.Xj("text_charAt_mutator", w.N.Text.wu, w.N.Text.vu);
w.H.Wx = {};
w.N.G = {};
w.N.G.Hi = 330;
w.Bg([{
    type: "variables_get",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    colour: "%{BKY_VARIABLES_HUE}",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
}, {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_VARIABLES_HUE}",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
}]);
w.N.G.Ht = {
    Oe: function(a) {
        if (!this.rb) {
            if ("variables_get" == this.type) var b = "variables_set",
                c = w.g.VARIABLES_GET_CREATE_SET;
            else b = "variables_get", c = w.g.VARIABLES_SET_CREATE_GET;
            var e = {
                    enabled: 0 < dd(this.o)
                },
                f = H(this, "VAR").Hb();
            e.text = c.replace("%1", f);
            c = E("field", null, f);
            c.setAttribute("name", "VAR");
            c = E("block", null, c);
            c.setAttribute("type", b);
            e.eb = w.ba.Ok(this, c);
            a.push(e)
        }
    }
};
w.L.jm("contextMenu_variableSetterGetter", w.N.G.Ht);
// Copyright 2012 Google Inc.  Apache License 2.0
w.h = new Ch;
Ak("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
w.h.tf = 0;
w.h.sA = 1.1;
w.h.vb = 1.2;
w.h.Da = 2;
w.h.qA = 3;
w.h.mA = 3;
w.h.iA = 4.1;
w.h.uA = 4.2;
w.h.Oi = 4.3;
w.h.Mi = 4.4;
w.h.tA = 4.5;
w.h.vA = 4.6;
w.h.nA = 4.7;
w.h.gA = 4.8;
w.h.oA = 5;
w.h.Nm = 5.1;
w.h.Gk = 5.2;
w.h.Ni = 5.3;
w.h.Gh = 6.1;
w.h.sf = 6.2;
w.h.kA = 7;
w.h.ju = 8;
w.h.pA = 8;
w.h.rA = 8;
w.h.Sp = 9;
w.h.hA = 10;
w.h.lA = 11;
w.h.jA = 12;
w.h.Lm = 13;
w.h.Mm = 14;
w.h.Fk = 15;
w.h.Fh = 16;
w.h.wA = 17;
w.h.Tb = 18;
w.h.Ea = 99;
w.h.Hk = [
    [w.h.Da, w.h.vb],
    [w.h.Da, w.h.Da],
    [w.h.vb, w.h.vb],
    [w.h.vb, w.h.Da],
    [w.h.Mi, w.h.Mi],
    [w.h.Nm, w.h.Nm],
    [w.h.sf, w.h.sf],
    [w.h.Lm, w.h.Lm],
    [w.h.Mm, w.h.Mm]
];
w.h.K = function(a) {
    w.h.Cg = Object.create(null);
    w.h.In = Object.create(null);
    w.h.ab ? w.h.ab.reset() : w.h.ab = new Dk;
    w.h.ab.qa = a.qa;
    for (var b = [], c = w.G.Ju(a), e = 0; e < c.length; e++) b.push(w.h.ab.getName(c[e], "DEVELOPER_VARIABLE"));
    a = w.G.eq(a);
    for (e = 0; e < a.length; e++) b.push(w.h.ab.getName(a[e].aa(), w.G.cb));
    b.length && (w.h.Cg.variables = "var " + b.join(", ") + ";")
};
w.h.finish = function(a) {
    var b = [],
        c;
    for (c in w.h.Cg) b.push(w.h.Cg[c]);
    delete w.h.Cg;
    delete w.h.In;
    w.h.ab.reset();
    return b.join("\n\n") + "\n\n\n" + a
};
w.h.Vs = function(a) {
    return a + ";\n"
};
w.h.Ns = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
w.h.pm = function(a, b) {
    var c = "";
    if (!a.P || !a.P.Pa) {
        var e = a.ql();
        (e = w.i.ut(e, w.h.Bt - 3)) && (c = a.Te ? c + ("/**\n" + xk(e + "\n", " * ") + " */\n") : c + xk(e + "\n", "// "));
        for (var f = 0; f < a.W.length; f++)
            if (a.W[f].type == w.kb) {
                var h = I(a.W[f].connection);
                if (h) {
                    e = [];
                    h = vc(h, !0);
                    for (var k = 0; k < h.length; k++) {
                        var l = h[k].ql();
                        l && e.push(l)
                    }
                    e.length && e.push("");
                    (e = e.join("\n")) && (c += xk(e, "// "))
                }
            }
    }
    a = a.M && I(a.M);
    a = wk(w.h, a);
    return c + b + a
};
w.h.Df = function(a, b, c, e, f) {
    c = c || 0;
    f = f || w.h.Ea;
    a.o.options.$e && c--;
    var h = a.o.options.$e ? "1" : "0";
    a = 0 < c ? R(a, b, w.h.sf) || h : 0 > c ? R(a, b, w.h.Gh) || h : e ? R(a, b, w.h.Oi) || h : R(a, b, f) || h;
    if (w.Rf(a)) a = parseFloat(a) + c, e && (a = -a);
    else {
        if (0 < c) {
            a = a + " + " + c;
            var k = w.h.sf
        } else 0 > c && (a = a + " - " + -c, k = w.h.Gh);
        e && (a = c ? "-(" + a + ")" : "-" + a, k = w.h.Oi);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
};
w.h.zq = {};
w.h.colour_picker = function(a) {
    return ["'" + D(a, "COLOUR") + "'", w.h.tf]
};
w.h.colour_random = function() {
    return [Bk("colourRandom", ["function " + w.h.$b + "() {", "  var num = Math.floor(Math.random() * Math.pow(2, 24));", "  return '#' + ('00000' + num.toString(16)).substr(-6);", "}"]) + "()", w.h.Da]
};
w.h.colour_rgb = function(a) {
    var b = R(a, "RED", w.h.Tb) || 0,
        c = R(a, "GREEN", w.h.Tb) || 0;
    a = R(a, "BLUE", w.h.Tb) || 0;
    return [Bk("colourRgb", ["function " + w.h.$b + "(r, g, b) {", "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;", "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;", "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;", "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);", "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);", "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);",
        "  return '#' + r + g + b;", "}"
    ]) + "(" + b + ", " + c + ", " + a + ")", w.h.Da]
};
w.h.colour_blend = function(a) {
    var b = R(a, "COLOUR1", w.h.Tb) || "'#000000'",
        c = R(a, "COLOUR2", w.h.Tb) || "'#000000'";
    a = R(a, "RATIO", w.h.Tb) || .5;
    return [Bk("colourBlend", ["function " + w.h.$b + "(c1, c2, ratio) {", "  ratio = Math.max(Math.min(Number(ratio), 1), 0);", "  var r1 = parseInt(c1.substring(1, 3), 16);", "  var g1 = parseInt(c1.substring(3, 5), 16);", "  var b1 = parseInt(c1.substring(5, 7), 16);", "  var r2 = parseInt(c2.substring(1, 3), 16);", "  var g2 = parseInt(c2.substring(3, 5), 16);", "  var b2 = parseInt(c2.substring(5, 7), 16);",
        "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);", "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);", "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);", "  r = ('0' + (r || 0).toString(16)).slice(-2);", "  g = ('0' + (g || 0).toString(16)).slice(-2);", "  b = ('0' + (b || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"
    ]) + "(" + b + ", " + c + ", " + a + ")", w.h.Da]
};
w.h.Kw = {};
w.h.controls_if = function(a) {
    var b = 0,
        c = "";
    do {
        var e = R(a, "IF" + b, w.h.Ea) || "false";
        var f = yk(a, "DO" + b);
        c += (0 < b ? " else " : "") + "if (" + e + ") {\n" + f + "}";
        ++b
    } while (J(a, "IF" + b));
    J(a, "ELSE") && (f = yk(a, "ELSE"), c += " else {\n" + f + "}");
    return c + "\n"
};
w.h.controls_ifelse = w.h.controls_if;
w.h.logic_compare = function(a) {
    var b = {
            EQ: "==",
            NEQ: "!=",
            LT: "<",
            LTE: "<=",
            GT: ">",
            GTE: ">="
        }[D(a, "OP")],
        c = "==" == b || "!=" == b ? w.h.Sp : w.h.ju,
        e = R(a, "A", c) || "0";
    a = R(a, "B", c) || "0";
    return [e + " " + b + " " + a, c]
};
w.h.logic_operation = function(a) {
    var b = "AND" == D(a, "OP") ? "&&" : "||",
        c = "&&" == b ? w.h.Lm : w.h.Mm,
        e = R(a, "A", c);
    a = R(a, "B", c);
    if (e || a) {
        var f = "&&" == b ? "true" : "false";
        e || (e = f);
        a || (a = f)
    } else a = e = "false";
    return [e + " " + b + " " + a, c]
};
w.h.logic_negate = function(a) {
    var b = w.h.Mi;
    return ["!" + (R(a, "BOOL", b) || "true"), b]
};
w.h.logic_boolean = function(a) {
    return ["TRUE" == D(a, "BOOL") ? "true" : "false", w.h.tf]
};
w.h.logic_null = function() {
    return ["null", w.h.tf]
};
w.h.logic_ternary = function(a) {
    var b = R(a, "IF", w.h.Fk) || "false",
        c = R(a, "THEN", w.h.Fk) || "null";
    a = R(a, "ELSE", w.h.Fk) || "null";
    return [b + " ? " + c + " : " + a, w.h.Fk]
};
w.h.Mw = {};
w.h.controls_repeat_ext = function(a) {
    var b = H(a, "TIMES") ? String(Number(D(a, "TIMES"))) : R(a, "TIMES", w.h.Fh) || "0",
        c = yk(a, "DO");
    c = zk(c, a.id);
    a = "";
    var e = Ck(w.h.ab, "count", w.G.cb),
        f = b;
    b.match(/^\w+$/) || w.Rf(b) || (f = Ck(w.h.ab, "repeat_end", w.G.cb), a += "var " + f + " = " + b + ";\n");
    return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + c + "}\n")
};
w.h.controls_repeat = w.h.controls_repeat_ext;
w.h.controls_whileUntil = function(a) {
    var b = "UNTIL" == D(a, "MODE"),
        c = R(a, "BOOL", b ? w.h.Mi : w.h.Ea) || "false",
        e = yk(a, "DO");
    e = zk(e, a.id);
    b && (c = "!" + c);
    return "while (" + c + ") {\n" + e + "}\n"
};
w.h.controls_for = function(a) {
    var b = w.h.ab.getName(D(a, "VAR"), w.G.cb),
        c = R(a, "FROM", w.h.Fh) || "0",
        e = R(a, "TO", w.h.Fh) || "0",
        f = R(a, "BY", w.h.Fh) || "1",
        h = yk(a, "DO");
    h = zk(h, a.id);
    if (w.Rf(c) && w.Rf(e) && w.Rf(f)) {
        var k = parseFloat(c) <= parseFloat(e);
        a = "for (" + b + " = " + c + "; " + b + (k ? " <= " : " >= ") + e + "; " + b;
        b = Math.abs(parseFloat(f));
        a = (1 == b ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + b)) + (") {\n" + h + "}\n")
    } else a = "", k = c, c.match(/^\w+$/) || w.Rf(c) || (k = Ck(w.h.ab, b + "_start", w.G.cb), a += "var " + k + " = " + c + ";\n"), c = e, e.match(/^\w+$/) ||
        w.Rf(e) || (c = Ck(w.h.ab, b + "_end", w.G.cb), a += "var " + c + " = " + e + ";\n"), e = Ck(w.h.ab, b + "_inc", w.G.cb), a += "var " + e + " = ", a = w.Rf(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"), a = a + ("if (" + k + " > " + c + ") {\n") + (w.h.Fe + e + " = -" + e + ";\n"), a += "}\n", a += "for (" + b + " = " + k + "; " + e + " >= 0 ? " + b + " <= " + c + " : " + b + " >= " + c + "; " + b + " += " + e + ") {\n" + h + "}\n";
    return a
};
w.h.controls_forEach = function(a) {
    var b = w.h.ab.getName(D(a, "VAR"), w.G.cb),
        c = R(a, "LIST", w.h.Fh) || "[]",
        e = yk(a, "DO");
    e = zk(e, a.id);
    a = "";
    var f = c;
    c.match(/^\w+$/) || (f = Ck(w.h.ab, b + "_list", w.G.cb), a += "var " + f + " = " + c + ";\n");
    c = Ck(w.h.ab, b + "_index", w.G.cb);
    e = w.h.Fe + b + " = " + f + "[" + c + "];\n" + e;
    return a + ("for (var " + c + " in " + f + ") {\n" + e + "}\n")
};
w.h.controls_flow_statements = function(a) {
    switch (D(a, "FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement.";
};
w.h.Nw = {};
w.h.math_number = function(a) {
    a = parseFloat(D(a, "NUM"));
    return [a, 0 <= a ? w.h.tf : w.h.Oi]
};
w.h.math_arithmetic = function(a) {
    var b = {
            ADD: [" + ", w.h.sf],
            MINUS: [" - ", w.h.Gh],
            MULTIPLY: [" * ", w.h.Nm],
            DIVIDE: [" / ", w.h.Gk],
            POWER: [null, w.h.Tb]
        }[D(a, "OP")],
        c = b[0];
    b = b[1];
    var e = R(a, "A", b) || "0";
    a = R(a, "B", b) || "0";
    return c ? [e + c + a, b] : ["Math.pow(" + e + ", " + a + ")", w.h.Da]
};
w.h.math_single = function(a) {
    var b = D(a, "OP");
    if ("NEG" == b) return a = R(a, "NUM", w.h.Oi) || "0", "-" == a[0] && (a = " " + a), ["-" + a, w.h.Oi];
    a = "SIN" == b || "COS" == b || "TAN" == b ? R(a, "NUM", w.h.Gk) || "0" : R(a, "NUM", w.h.Ea) || "0";
    switch (b) {
        case "ABS":
            var c = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            c = "Math.sqrt(" + a + ")";
            break;
        case "LN":
            c = "Math.log(" + a + ")";
            break;
        case "EXP":
            c = "Math.exp(" + a + ")";
            break;
        case "POW10":
            c = "Math.pow(10," + a + ")";
            break;
        case "ROUND":
            c = "Math.round(" + a + ")";
            break;
        case "ROUNDUP":
            c = "Math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            c =
                "Math.floor(" + a + ")";
            break;
        case "SIN":
            c = "Math.sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            c = "Math.cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            c = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (c) return [c, w.h.Da];
    switch (b) {
        case "LOG10":
            c = "Math.log(" + a + ") / Math.log(10)";
            break;
        case "ASIN":
            c = "Math.asin(" + a + ") / Math.PI * 180";
            break;
        case "ACOS":
            c = "Math.acos(" + a + ") / Math.PI * 180";
            break;
        case "ATAN":
            c = "Math.atan(" + a + ") / Math.PI * 180";
            break;
        default:
            throw "Unknown math operator: " + b;
    }
    return [c, w.h.Gk]
};
w.h.math_constant = function(a) {
    return {
        PI: ["Math.PI", w.h.vb],
        E: ["Math.E", w.h.vb],
        GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", w.h.Gk],
        SQRT2: ["Math.SQRT2", w.h.vb],
        SQRT1_2: ["Math.SQRT1_2", w.h.vb],
        INFINITY: ["Infinity", w.h.tf]
    }[D(a, "CONSTANT")]
};
w.h.math_number_property = function(a) {
    var b = R(a, "NUMBER_TO_CHECK", w.h.Ni) || "0",
        c = D(a, "PROPERTY");
    if ("PRIME" == c) {
        var e = Bk("mathIsPrime", ["function " + w.h.$b + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
            "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
        ]) + "(" + b + ")";
        return [e, w.h.Da]
    }
    switch (c) {
        case "EVEN":
            e = b + " % 2 == 0";
            break;
        case "ODD":
            e = b + " % 2 == 1";
            break;
        case "WHOLE":
            e = b + " % 1 == 0";
            break;
        case "POSITIVE":
            e = b + " > 0";
            break;
        case "NEGATIVE":
            e = b + " < 0";
            break;
        case "DIVISIBLE_BY":
            a = R(a, "DIVISOR", w.h.Ni) || "0", e = b + " % " + a + " == 0"
    }
    return [e, w.h.Sp]
};
w.h.math_change = function(a) {
    var b = R(a, "DELTA", w.h.sf) || "0";
    a = w.h.ab.getName(D(a, "VAR"), w.G.cb);
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n"
};
w.h.math_round = w.h.math_single;
w.h.math_trig = w.h.math_single;
w.h.math_on_list = function(a) {
    var b = D(a, "OP");
    switch (b) {
        case "SUM":
            a = R(a, "LIST", w.h.vb) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = R(a, "LIST", w.h.Tb) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = R(a, "LIST", w.h.Tb) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            b = Bk("mathMean", ["function " + w.h.$b + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = R(a, "LIST", w.h.Ea) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MEDIAN":
            b =
                Bk("mathMedian", ["function " + w.h.$b + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = R(a, "LIST", w.h.Ea) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MODE":
            b = Bk("mathModes", ["function " + w.h.$b + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);",
                "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
            ]);
            a = R(a, "LIST", w.h.Ea) || "[]";
            a = b + "(" + a + ")";
            break;
        case "STD_DEV":
            b = Bk("mathStandardDeviation", ["function " + w.h.$b + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = R(a, "LIST", w.h.Ea) || "[]";
            a = b + "(" + a + ")";
            break;
        case "RANDOM":
            b = Bk("mathRandomList", ["function " + w.h.$b + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = R(a, "LIST", w.h.Ea) || "[]";
            a = b + "(" + a + ")";
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, w.h.Da]
};
w.h.math_modulo = function(a) {
    var b = R(a, "DIVIDEND", w.h.Ni) || "0";
    a = R(a, "DIVISOR", w.h.Ni) || "0";
    return [b + " % " + a, w.h.Ni]
};
w.h.math_constrain = function(a) {
    var b = R(a, "VALUE", w.h.Tb) || "0",
        c = R(a, "LOW", w.h.Tb) || "0";
    a = R(a, "HIGH", w.h.Tb) || "Infinity";
    return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", w.h.Da]
};
w.h.math_random_int = function(a) {
    var b = R(a, "FROM", w.h.Tb) || "0";
    a = R(a, "TO", w.h.Tb) || "0";
    return [Bk("mathRandomInt", ["function " + w.h.$b + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", w.h.Da]
};
w.h.math_random_float = function() {
    return ["Math.random()", w.h.Da]
};
w.h.vx = {};
w.h.procedures_defreturn = function(a) {
    var b = w.h.ab.getName(D(a, "NAME"), w.ra.cb),
        c = yk(a, "STACK");
    if (w.h.Ih) {
        var e = a.id.replace(/\$/g, "$$$$");
        c = xk(w.h.Ih.replace(/%1/g, "'" + e + "'"), w.h.Fe) + c
    }
    w.h.Dk && (c = w.h.Dk.replace(/%1/g, "'" + a.id + "'") + c);
    (e = R(a, "RETURN", w.h.Ea) || "") && (e = w.h.Fe + "return " + e + ";\n");
    for (var f = [], h = 0; h < a.ea.length; h++) f[h] = w.h.ab.getName(a.ea[h], w.G.cb);
    c = "function " + b + "(" + f.join(", ") + ") {\n" + c + e + "}";
    c = w.h.pm(a, c);
    w.h.Cg["%" + b] = c;
    return null
};
w.h.procedures_defnoreturn = w.h.procedures_defreturn;
w.h.procedures_callreturn = function(a) {
    for (var b = w.h.ab.getName(D(a, "NAME"), w.ra.cb), c = [], e = 0; e < a.ea.length; e++) c[e] = R(a, "ARG" + e, w.h.Tb) || "null";
    return [b + "(" + c.join(", ") + ")", w.h.Da]
};
w.h.procedures_callnoreturn = function(a) {
    for (var b = w.h.ab.getName(D(a, "NAME"), w.ra.cb), c = [], e = 0; e < a.ea.length; e++) c[e] = R(a, "ARG" + e, w.h.Tb) || "null";
    return b + "(" + c.join(", ") + ");\n"
};
w.h.procedures_ifreturn = function(a) {
    var b = "if (" + (R(a, "CONDITION", w.h.Ea) || "false") + ") {\n";
    a.Jf ? (a = R(a, "VALUE", w.h.Ea) || "null", b += w.h.Fe + "return " + a + ";\n") : b += w.h.Fe + "return;\n";
    return b + "}\n"
};
w.h.Nx = {};
w.h.text = function(a) {
    return [w.h.Ns(D(a, "TEXT")), w.h.tf]
};
w.h.text_join = function(a) {
    switch (a.zd) {
        case 0:
            return ["''", w.h.tf];
        case 1:
            return a = "String(" + (R(a, "ADD0", w.h.Ea) || "''") + ")", [a, w.h.Da];
        case 2:
            var b = R(a, "ADD0", w.h.Ea) || "''";
            a = R(a, "ADD1", w.h.Ea) || "''";
            return ["String(" + b + ") + String(" + a + ")", w.h.sf];
        default:
            b = Array(a.zd);
            for (var c = 0; c < a.zd; c++) b[c] = R(a, "ADD" + c, w.h.Tb) || "''";
            a = "[" + b.join(",") + "].join('')";
            return [a, w.h.Da]
    }
};
w.h.text_append = function(a) {
    var b = w.h.ab.getName(D(a, "VAR"), w.G.cb);
    a = R(a, "TEXT", w.h.Ea) || "''";
    return b + " = String(" + b + ") + String(" + a + ");\n"
};
w.h.text_length = function(a) {
    return [(R(a, "VALUE", w.h.Da) || "''") + ".length", w.h.vb]
};
w.h.text_isEmpty = function(a) {
    return ["!" + (R(a, "VALUE", w.h.vb) || "''") + ".length", w.h.Mi]
};
w.h.text_indexOf = function(a) {
    var b = "FIRST" == D(a, "END") ? "indexOf" : "lastIndexOf",
        c = R(a, "FIND", w.h.Ea) || "''";
    b = (R(a, "VALUE", w.h.vb) || "''") + "." + b + "(" + c + ")";
    return a.o.options.$e ? [b + " + 1", w.h.sf] : [b, w.h.Da]
};
w.h.text_charAt = function(a) {
    var b = D(a, "WHERE") || "FROM_START",
        c = R(a, "VALUE", "RANDOM" == b ? w.h.Ea : w.h.vb) || "''";
    switch (b) {
        case "FIRST":
            return [c + ".charAt(0)", w.h.Da];
        case "LAST":
            return [c + ".slice(-1)", w.h.Da];
        case "FROM_START":
            return a = w.h.Df(a, "AT"), [c + ".charAt(" + a + ")", w.h.Da];
        case "FROM_END":
            return a = w.h.Df(a, "AT", 1, !0), [c + ".slice(" + a + ").charAt(0)", w.h.Da];
        case "RANDOM":
            return c = Bk("textRandomLetter", ["function " + w.h.$b + "(text) {", "  var x = Math.floor(Math.random() * text.length);", "  return text[x];",
                "}"
            ]) + "(" + c + ")", [c, w.h.Da]
    }
    throw "Unhandled option (text_charAt).";
};
w.h.text.Zv = function(a, b, c) {
    return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c
};
w.h.text_getSubstring = function(a) {
    var b = R(a, "STRING", w.h.Da) || "''",
        c = D(a, "WHERE1"),
        e = D(a, "WHERE2");
    if ("FIRST" != c || "LAST" != e)
        if (b.match(/^'?\w+'?$/) || "FROM_END" != c && "LAST" != c && "FROM_END" != e && "LAST" != e) {
            switch (c) {
                case "FROM_START":
                    var f = w.h.Df(a, "AT1");
                    break;
                case "FROM_END":
                    f = w.h.Df(a, "AT1", 1, !1, w.h.Gh);
                    f = b + ".length - " + f;
                    break;
                case "FIRST":
                    f = "0";
                    break;
                default:
                    throw "Unhandled option (text_getSubstring).";
            }
            switch (e) {
                case "FROM_START":
                    a = w.h.Df(a, "AT2", 1);
                    break;
                case "FROM_END":
                    a = w.h.Df(a, "AT2", 0, !1, w.h.Gh);
                    a = b + ".length - " + a;
                    break;
                case "LAST":
                    a = b + ".length";
                    break;
                default:
                    throw "Unhandled option (text_getSubstring).";
            }
            b = b + ".slice(" + f + ", " + a + ")"
        } else {
            f = w.h.Df(a, "AT1");
            a = w.h.Df(a, "AT2");
            var h = w.h.text.Zv,
                k = {
                    FIRST: "First",
                    LAST: "Last",
                    FROM_START: "FromStart",
                    FROM_END: "FromEnd"
                };
            b = Bk("subsequence" + k[c] + k[e], ["function " + w.h.$b + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", c, "at1") + ";", "  var end = " + h("sequence", e, "at2") +
                " + 1;", "  return sequence.slice(start, end);", "}"
            ]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
        }
    return [b, w.h.Da]
};
w.h.text_changeCase = function(a) {
    var b = {
        UPPERCASE: ".toUpperCase()",
        LOWERCASE: ".toLowerCase()",
        TITLECASE: null
    }[D(a, "CASE")];
    a = R(a, "TEXT", b ? w.h.vb : w.h.Ea) || "''";
    return [b ? a + b : Bk("textToTitleCase", ["function " + w.h.$b + "(str) {", "  return str.replace(/\\S+/g,", "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});", "}"]) + "(" + a + ")", w.h.Da]
};
w.h.text_trim = function(a) {
    var b = {
        LEFT: ".replace(/^[\\s\\xa0]+/, '')",
        RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
        BOTH: ".trim()"
    }[D(a, "MODE")];
    return [(R(a, "TEXT", w.h.vb) || "''") + b, w.h.Da]
};
w.h.text_print = function(a) {
    return "window.alert(" + (R(a, "TEXT", w.h.Ea) || "''") + ");\n"
};
w.h.text_prompt_ext = function(a) {
    var b = "window.prompt(" + (H(a, "TEXT") ? w.h.Ns(D(a, "TEXT")) : R(a, "TEXT", w.h.Ea) || "''") + ")";
    "NUMBER" == D(a, "TYPE") && (b = "parseFloat(" + b + ")");
    return [b, w.h.Da]
};
w.h.text_prompt = w.h.text_prompt_ext;
w.h.text_count = function(a) {
    var b = R(a, "TEXT", w.h.vb) || "''";
    a = R(a, "SUB", w.h.Ea) || "''";
    return [Bk("textCount", ["function " + w.h.$b + "(haystack, needle) {", "  if (needle.length === 0) {", "    return haystack.length + 1;", "  } else {", "    return haystack.split(needle).length - 1;", "  }", "}"]) + "(" + b + ", " + a + ")", w.h.Gh]
};
w.h.text_replace = function(a) {
    var b = R(a, "TEXT", w.h.vb) || "''",
        c = R(a, "FROM", w.h.Ea) || "''";
    a = R(a, "TO", w.h.Ea) || "''";
    return [Bk("textReplace", ["function " + w.h.$b + "(haystack, needle, replacement) {", '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")', '                 .replace(/\\x08/g,"\\\\x08");', "  return haystack.replace(new RegExp(needle, 'g'), replacement);", "}"]) + "(" + b + ", " + c + ", " + a + ")", w.h.vb]
};
w.h.text_reverse = function(a) {
    return [(R(a, "TEXT", w.h.vb) || "''") + ".split('').reverse().join('')", w.h.vb]
};
w.h.Wx = {};
w.h.variables_get = function(a) {
    return [w.h.ab.getName(D(a, "VAR"), w.G.cb), w.h.tf]
};
w.h.variables_set = function(a) {
    var b = R(a, "VALUE", w.h.Fh) || "0";
    return w.h.ab.getName(D(a, "VAR"), w.G.cb) + " = " + b + ";\n"
};
w.H.turtle_move = {
    K: function() {
        var a = [
            [T("Turtle_moveForward"), "moveForward"],
            [T("Turtle_moveBackward"), "moveBackward"]
        ];
        this.Na(160);
        M(Fh(this, "VALUE").tb("Number"), new N(a), "DIR");
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_moveTooltip"))
    }
};
w.h.turtle_move = function(a) {
    var b = R(a, "VALUE", w.h.Ea) || "0";
    return D(a, "DIR") + "(" + b + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_move_internal = {
    K: function() {
        var a = [
            [T("Turtle_moveForward"), "moveForward"],
            [T("Turtle_moveBackward"), "moveBackward"]
        ];
        this.Na(160);
        M(M(O(this), new N(a), "DIR"), new N([
            ["20", "20"],
            ["50", "50"],
            ["100", "100"],
            ["150", "150"]
        ]), "VALUE");
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_moveTooltip"))
    }
};
w.h.turtle_move_internal = function(a) {
    var b = D(a, "VALUE");
    return D(a, "DIR") + "(" + b + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_turn = {
    K: function() {
        var a = [
            [T("Turtle_turnRight"), "turnRight"],
            [T("Turtle_turnLeft"), "turnLeft"]
        ];
        a[0][0] += " \u21bb";
        a[1][0] += " \u21ba";
        this.Na(160);
        M(Fh(this, "VALUE").tb("Number"), new N(a), "DIR");
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_turnTooltip"))
    }
};
w.h.turtle_turn = function(a) {
    var b = R(a, "VALUE", w.h.Ea) || "0";
    return D(a, "DIR") + "(" + b + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_turn_internal = {
    K: function() {
        var a = [
            [T("Turtle_turnRight"), "turnRight"],
            [T("Turtle_turnLeft"), "turnLeft"]
        ];
        a[0][0] += " \u21bb";
        a[1][0] += " \u21ba";
        this.Na(160);
        M(M(O(this), new N(a), "DIR"), new N([
            ["1\u00b0", "1"],
            ["45\u00b0", "45"],
            ["72\u00b0", "72"],
            ["90\u00b0", "90"],
            ["120\u00b0", "120"],
            ["144\u00b0", "144"]
        ]), "VALUE");
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_turnTooltip"))
    }
};
w.h.turtle_turn_internal = function(a) {
    var b = D(a, "VALUE");
    return D(a, "DIR") + "(" + b + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_width = {
    K: function() {
        this.Na(160);
        M(Fh(this, "WIDTH").tb("Number"), T("Turtle_setWidth"));
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_widthTooltip"))
    }
};
w.h.turtle_width = function(a) {
    return "penWidth(" + (R(a, "WIDTH", w.h.Ea) || "1") + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_pen = {
    K: function() {
        Gh(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "PEN",
                options: [
                    [T("Turtle_penUp"), "penUp"],
                    [T("Turtle_penDown"), "penDown"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: T("Turtle_penTooltip")
        })
    }
};
w.h.turtle_pen = function(a) {
    return D(a, "PEN") + "('block_id_" + a.id + "');\n"
};
w.H.turtle_colour = {
    K: function() {
        this.Na(w.g.COLOUR_HUE);
        M(Fh(this, "COLOUR").tb("Colour"), T("Turtle_setColour"));
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_colourTooltip"))
    }
};
w.h.turtle_colour = function(a) {
    return "penColour(" + (R(a, "COLOUR", w.h.Ea) || "'#000000'") + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_colour_internal = {
    K: function() {
        this.Na(w.g.COLOUR_HUE);
        M(M(O(this), T("Turtle_setColour")), new gk("#ff0000"), "COLOUR");
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_colourTooltip"))
    }
};
w.h.turtle_colour_internal = function(a) {
    return "penColour(" + ("'" + D(a, "COLOUR") + "'") + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_visibility = {
    K: function() {
        Gh(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "VISIBILITY",
                options: [
                    [T("Turtle_hideTurtle"), "hideTurtle"],
                    [T("Turtle_showTurtle"), "showTurtle"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: T("Turtle_turtleVisibilityTooltip")
        })
    }
};
w.h.turtle_visibility = function(a) {
    return D(a, "VISIBILITY") + "('block_id_" + a.id + "');\n"
};
w.H.turtle_print = {
    K: function() {
        this.Ob = T("Turtle_printHelpUrl");
        this.Na(160);
        M(Fh(this, "TEXT"), T("Turtle_print"));
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_printTooltip"))
    }
};
w.h.turtle_print = function(a) {
    return "print(" + String(R(a, "TEXT", w.h.Ea) || "''") + ", 'block_id_" + a.id + "');\n"
};
w.H.turtle_font = {
    K: function() {
        var a = [
            [T("Turtle_fontNormal"), "normal"],
            [T("Turtle_fontItalic"), "italic"],
            [T("Turtle_fontBold"), "bold"]
        ];
        this.Ob = T("Turtle_fontHelpUrl");
        this.Na(160);
        M(M(O(this), T("Turtle_font")), new N([
            ["Arial", "Arial"],
            ["Courier New", "Courier New"],
            ["Georgia", "Georgia"],
            ["Impact", "Impact"],
            ["Times New Roman", "Times New Roman"],
            ["Trebuchet MS", "Trebuchet MS"],
            ["Verdana", "Verdana"]
        ]), "FONT");
        M(M(O(this), T("Turtle_fontSize")), new rk(18, 1, 1E3), "FONTSIZE");
        M(O(this), new N(a), "FONTSTYLE");
        this.Ac(!0);
        this.zc(!0);
        this.za(T("Turtle_fontTooltip"))
    }
};
w.h.turtle_font = function(a) {
    return "font('" + D(a, "FONT") + "'," + Number(D(a, "FONTSIZE")) + ",'" + D(a, "FONTSTYLE") + "', 'block_id_" + a.id + "');\n"
};
w.H.turtle_repeat_internal = {
    K: function() {
        Gh(this, {
            message0: w.g.CONTROLS_REPEAT_TITLE,
            args0: [{
                type: "field_dropdown",
                name: "TIMES",
                options: [
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["360", "360"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: w.g.LOOPS_HUE,
            tooltip: w.g.CONTROLS_REPEAT_TOOLTIP,
            helpUrl: w.g.CONTROLS_REPEAT_HELPURL
        });
        M(this.Yd(w.Sa, "DO"), w.g.CONTROLS_REPEAT_INPUT_DO)
    }
};
w.h.turtle_repeat_internal = w.h.controls_repeat;
var lm = {},
    mm = {};

function nm() {
    throw Error("Do not instantiate directly");
}
nm.prototype.mn = null;
nm.prototype.Jc = function() {
    return this.content
};
nm.prototype.toString = function() {
    return this.content
};
nm.prototype.Bm = function() {
    if (this.nn === mm) return Gd(this.toString());
    if (this.nn !== lm) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return Hd(this.toString(), this.mn || null)
};

function om(a) {
    if (null != a) switch (a.mn) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function pm() {
    nm.call(this)
}
v(pm, nm);
pm.prototype.nn = lm;

function qm(a) {
    return null != a && a.nn === lm ? a : rm(String(String(a)).replace(sm, tm), om(a))
}
var rm = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return function(a, e) {
            var c = new b;
            c.content = String(a);
            void 0 !== e && (c.mn = e);
            return c
        }
    }(pm),
    um = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

function tm(a) {
    return um[a]
}
var sm = /[\x00\x22\x26\x27\x3c\x3e]/g;

function vm() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};

function wm() {
    for (var a = '<div style="display: none"><span id="Games_name">Jeux Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labyrinthe</span><span id="Games_bird">Oiseau</span><span id="Games_turtle">Tortue</span><span id="Games_movie">Movie</span><span id="Games_music">Musique</span><span id="Games_pondTutor">Tutoriel de Pond</span><span id="Games_pond">Pond</span><span id="Games_genetics">G\u00e9n\u00e9tique</span><span id="Games_linesOfCode1">Vous avez r\u00e9solu ce niveau avec 1 ligne de JavaScript :</span><span id="Games_linesOfCode2">Vous avez r\u00e9solu ce niveau avec %1 lignes de JavaScript :</span><span id="Games_nextLevel">\u00cates-vous pr\u00eat pour le niveau %1\u202f?</span><span id="Games_finalLevel">\u00cates-vous pr\u00eat pour le prochain d\u00e9fi\u202f?</span><span id="Games_submitTitle">Titre :</span><span id="Games_linkTooltip">Sauvegarder et lier aux blocs. </span><span id="Games_runTooltip">Lancer le programme que vous avez \u00e9crit.</span><span id="Games_runProgram">Ex\u00e9cuter le programme</span><span id="Games_resetTooltip">Arr\u00eater le programme et r\u00e9initialiser le niveau.</span><span id="Games_resetProgram">R\u00e9initialiser</span><span id="Games_help">Aide</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annuler</span><span id="Games_catLogic">Logique</span><span id="Games_catLoops">Boucles</span><span id="Games_catMath">Math\u00e9matiques</span><span id="Games_catText">Texte</span><span id="Games_catLists">Listes</span><span id="Games_catColour">Couleur</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Fonctions</span><span id="Games_httpRequestError">Il y a eu un probl\u00e8me avec la demande.</span><span id="Games_linkAlert">Partagez vos blocs gr\u00e2ce \u00e0 ce lien :\n\n%1</span><span id="Games_hashError">D\u00e9sol\u00e9, \'%1\' ne correspond \u00e0 aucun programme sauvegard\u00e9.</span><span id="Games_xmlError">Impossible de charger le fichier de sauvegarde.  Peut \u00eatre a t-il \u00e9t\u00e9 cr\u00e9\u00e9 avec une autre version de Blockly?</span><span id="Games_submitted">Merci pour ce programme\u202f! Si notre \u00e9quipe de singes dress\u00e9s l\u2019aime, ils le publieront dans la galerie d\u2019ici deux jours.</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">texte</span><span id="Games_breakLink">Une fois que vous aurez commenc\u00e9 \u00e0 modifier le JavaScript, vous ne pourrez pas revenir \u00e0 la modification des blocs. Est-ce bon pour vous\u202f?</span><span id="Games_blocks">Blocs</div></div><div style="display: none"><span id="Turtle_moveTooltip">D\u00e9place la tortue en avant ou en arri\u00e8re de la \\nquantit\u00e9 indiqu\u00e9e. </span><span id="Turtle_moveForward">avancer de</span><span id="Turtle_moveBackward">reculer de</span><span id="Turtle_turnTooltip">Faire tourner la tortue \u00e0 gauche ou \u00e0 droite du \\nnombre de degr\u00e9s indiqu\u00e9. </span><span id="Turtle_turnRight">tourner \u00e0 droite de</span><span id="Turtle_turnLeft">tourner \u00e0 gauche de</span><span id="Turtle_widthTooltip">Modifier la grosseur du stylo. </span><span id="Turtle_setWidth">mettre la grosseur \u00e0</span><span id="Turtle_colourTooltip">Modifier la couleur du stylo.</span><span id="Turtle_setColour">mettre la couleur \u00e0</span><span id="Turtle_penTooltip">Lever ou poser le stylo, pour arr\u00eater ou \\ncommencer de dessiner. </span><span id="Turtle_penUp">lever le stylo</span><span id="Turtle_penDown">poser le stylo</span><span id="Turtle_turtleVisibilityTooltip">Rend la tortue (cercle et fl\u00e8che) visible ou non.</span><span id="Turtle_hideTurtle">cacher la tortue</span><span id="Turtle_showTurtle">afficher la tortue</span><span id="Turtle_printHelpUrl">https://fr.wikipedia.org/wiki/Imprimerie</span><span id="Turtle_printTooltip">Dessine le texte dans la direction de la tortue \\n\u00e0 son emplacement. </span><span id="Turtle_print">\u00e9crire</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">D\u00e9finit la police utilis\u00e9e par le bloc d\u2019\u00e9criture.</span><span id="Turtle_font">police</span><span id="Turtle_fontSize">taille de la police</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">gras</span><span id="Turtle_fontItalic">italique</span><span id="Turtle_submitDisabled">Lancer votre programme jusqu\u2019\u00e0 ce qu\u2019il s\u2019arr\u00eate. Puis vous pouvez publier votre dessin dans la galerie.</span></div><table width="100%"><tr><td><h1>' +
            ('<span id="title">' + (Gl ? '<a href="index.html?lang=' + qm(El) + '">' : '<a href="./?lang=' + qm(El) + '">') + "Jeux Blockly</a> : " + qm({appName: "Tortue"}.appName) + "</span>"), b = " &nbsp; ", c = 1; 11 > c; c++) b += " " + (c == S ? '<span class="level_number level_done" id="level' + qm(c) + '">' + qm(c) + "</span>" : 10 == c ? '<a class="level_number" id="level' + qm(c) + '" href="?lang=' + qm(El) + "&level=" + qm(c) + qm("") + '">' + qm(c) + "</a>" : '<a class="level_dot" id="level' + qm(c) + '" href="?lang=' + qm(El) + "&level=" + qm(c) + qm("") + '"></a>');
    return a + b + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Sauvegarder et lier aux blocs. "><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Aide</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Lancer le programme que vous avez \u00e9crit."><img src="common/1x1.gif" class="run icon21"> Ex\u00e9cuter le programme</button><button id="resetButton" class="primary" style="display: none" title="Arr\u00eater le programme et r\u00e9initialiser le niveau."><img src="common/1x1.gif" class="stop icon21"> R\u00e9initialiser</button></td></tr></table>' +
        (10 != S || Gl ? "" : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + qm(El) + '"><button type="submit" title="Ouvrir la galerie des dessins. "><img src="common/1x1.gif" class="gallery icon21"> Voir la Galerie</button></form></td><td style="text-align: center;"><button id="submitButton" title="Publier votre dessin sur la galerie."><img src="common/1x1.gif" class="camera icon21"> Publier dans la Galerie</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Publier votre dessin sur la galerie.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titre : <input id="galleryTitle" type="text" name="title" required></div><footer>\x3c!--Legal disclaimer goes here if needed.--\x3e</footer><div class="farSide"><button id="galleryCancel" type="button">Annuler</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>') +
        ('<xml id="toolbox" style="display: none">' + (10 == S ? '<category name="Tortue"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Couleur"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logique"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Boucles"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Math\u00e9matiques"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Fonctions" custom="PROCEDURE"></category>' :
            '<category name="Tortue"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + (3 < S ? '<block type="turtle_pen"></block>' : "") + "</category>" + (2 < S ? '<category name="Couleur"><block type="turtle_colour_internal"></block></category>' : "") + '<category name="Boucles"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + "</xml>") + '<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">F\u00e9licitations\u202f!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annuler</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Ce niveau est tr\u00e8s difficile. Voulez-vous le sauter et passer au jeu suivant\u202f? Vous pourrez toujours y revenir plus tard.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annuler</button><button id="abortOk" class="secondary">OK</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + vm() + "</div>") + (4 > S ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Votre solution fonctionne, mais vous pouvez faire mieux. ' + (3 > S ? "Dessiner la forme avec seulement trois blocs." : "Dessiner l\u2019\u00e9toile avec seulement quatre blocs.") + "</div>" + vm() + "</div>" : "") + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + (1 == S ? 'Cr\u00e9er un programme qui dessine un carr\u00e9.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' :
            2 == S ? "Modifier votre programme pour dessiner un pentagone plut\u00f4t qu\u2019un carr\u00e9." : 3 == S ? 'Voici un nouveau bloc qui vous permet de modifier la couleur :<div id="sampleHelp3" class="readonly"></div>Dessiner une \u00e9toile jaune.' : 4 == S ? 'Voici un nouveau bloc qui vous permet de lever votre crayon de la feuille quand vous vous d\u00e9placez :<div id="sampleHelp4" class="readonly"></div>Dessiner une petite \u00e9toile jaune, puis une ligne au-dessus d\u2019elle.' : 5 == S ? "Au lieu d\u2019une seule \u00e9toile, pouvez-vous dessiner trois \u00e9toiles arrang\u00e9es en carr\u00e9\u202f?" :
            6 == S ? "Dessiner trois étoiles jaunes, et une ligne blanche." : 7 == S ? "Dessiner les \u00e9toiles, puis quatre lignes blanches." : 8 == S ? "Dessiner 360 lignes blanches qui ressemblent \u00e0 une pleine lune." : 9 == S ? "Pouvez-vous ajouter un cercle noir afin que la lune devienne un croissant\u202f?" : 10 == S ? "Dessinez ce que vous voulez. Vous avez un grand nombre de blocs \u00e0 explorer. Amusez-vous\u202f!" + (Gl ? "" : '<br><br>Utiliser le bouton "Voir la galerie" pour voir ce que les autres personnes ont d\u00e9ssin\u00e9. Si vous dessinez quelque chose d\u2019int\u00e9ressant, utilisez le bouton "Publier dans la galerie" pour le publier.') :
            "") + "</div>" + vm() + "</div>" + (1 == S ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choisir une cat\u00e9gorie pour voir les blocs.</div>' : "")
};
var Ol = "turtle",
    xm = [],
    ym = 0,
    zm = null,
    Am = !0,
    Bm = !1;
window.addEventListener("load", function() {
    function a() {
        c.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
        c.style.left = b ? "10px" : "420px";
        c.style.width = window.innerWidth - 440 + "px"
    }
    document.body.innerHTML = wm();
    V.K();
    var b = -1 != Dl.indexOf(El),
        c = document.getElementById("blockly"),
        e = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a(null);
        w.oh(Pg)
    });
    window.addEventListener("resize", a);
    a(null);
    10 > S && (jk = 3, ik = "#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(" "));
    var f =
        document.getElementById("toolbox");
    Pg = w.Nf("blockly", {
        media: "third-party/blockly/media/",
        rtl: b,
        toolbox: f,
        trashcan: !0,
        zoom: 10 == S ? {
            controls: !0,
            wheel: !0
        } : null
    });
    Ak("moveForward,moveBackward,turnRight,turnLeft,penUp,penDown,penWidth,penColour,hideTurtle,showTurtle,print,font");
    document.getElementById("submitButton") && Pl("submitButton", Cm);
    f = document.getElementById("slider");
    bm = new Ql(f);
    V.Iw(10 == S ? '<xml>  <block type="turtle_move" x="70" y="70">    <value name="VALUE">      <shadow type="math_number">        <field name="NUM">10</field>      </shadow>    </value>  </block></xml>' :
        '<xml>  <block type="turtle_move_internal" x="70" y="70">    <field name="VALUE">100</field>  </block></xml>', 10 != S || Dm);
    W = document.getElementById("display").getContext("2d");
    cm = document.getElementById("answer").getContext("2d");
    X = document.getElementById("scratch").getContext("2d");
    Em();
    hm();
    cm.globalCompositeOperation = "copy";
    cm.drawImage(X.canvas, 0, 0);
    cm.globalCompositeOperation = "source-over";
    Em();
    Pl("runButton", Fm);
    Pl("resetButton", Gm);
    Pg.Zd.load(["turtle/win.mp3", "turtle/win.ogg"], "win");
    setTimeout(V.ww,
        1);
    setTimeout(V.xw, 1);
    Pl("helpButton", Hm);
    2 > location.hash.length && !Ml(S) && (setTimeout(Hm, 1E3), 9 == S && setTimeout(U.bq, 3E5));
    1 == S && Pg.Vc(Im)
});

function Dm(a) {
    for (var b = a = w.D.Pc(a); b;) {
        if ("block" == b.nodeName.toLowerCase()) {
            for (var c = b.getAttribute("type"), e = b.lastChild; e && "field" != e.nodeName.toLowerCase();) e = e.previousSibling;
            var f = e && e.getAttribute("name");
            if ("turtle_colour_internal" == c && "COLOUR" == f) {
                b.setAttribute("type", "turtle_colour");
                b.removeChild(e);
                var h = document.createElement("value");
                h.setAttribute("name", "COLOUR");
                b.appendChild(h);
                var k = document.createElement("shadow");
                k.setAttribute("type", "colour_picker");
                h.appendChild(k);
                k.appendChild(e)
            }
            "turtle_repeat_internal" ==
            c && "TIMES" == f && (b.setAttribute("type", "controls_repeat_ext"), b.removeChild(e), h = document.createElement("value"), h.setAttribute("name", "TIMES"), b.appendChild(h), k = document.createElement("shadow"), k.setAttribute("type", "math_number"), h.appendChild(k), e.setAttribute("name", "NUM"), k.appendChild(e));
            "turtle_move_internal" == c && "VALUE" == f && (b.setAttribute("type", "turtle_move"), b.removeChild(e), h = document.createElement("value"), h.setAttribute("name", "VALUE"), b.appendChild(h), k = document.createElement("shadow"),
                k.setAttribute("type", "math_number"), h.appendChild(k), e.setAttribute("name", "NUM"), k.appendChild(e));
            "turtle_turn_internal" == c && "VALUE" == f && (b.setAttribute("type", "turtle_turn"), b.removeChild(e), h = document.createElement("value"), h.setAttribute("name", "VALUE"), b.appendChild(h), k = document.createElement("shadow"), k.setAttribute("type", "math_number"), h.appendChild(k), e.setAttribute("name", "NUM"), k.appendChild(e))
        }
        b = Jm(b)
    }
    return w.D.Zc(a)
}

function Jm(a) {
    if (a.firstChild) return a.firstChild;
    do
        if (a.nextSibling) return a.nextSibling; while (a = a.parentNode);
    return a
}

function Hm() {
    var a = document.getElementById("help"),
        b = document.getElementById("helpButton");
    3 == S ? V.Mr("sampleHelp3", '<xml><block type="turtle_colour_internal" x="5" y="10"><field name="COLOUR">#ffff00</field></block></xml>') : 4 == S && V.Mr("sampleHelp4", '<xml><block type="turtle_pen" x="5" y="10"></block></xml>');
    U.hh(a, b, !0, !0, {
        width: "50%",
        left: "25%",
        top: "5em"
    }, Km);
    U.wp()
}

function Km() {
    U.xp();
    1 == S && setTimeout(Lm, 5E3)
}

function Lm() {
    if (!Mm && !U.Qf) {
        var a = document.getElementById("helpToolbox"),
            b = {
                width: "25%",
                top: "3.3em"
            }; - 1 != Dl.indexOf(El) ? b.right = "525px" : b.left = "525px";
        var c = document.getElementById(":0");
        U.hh(a, c, !0, !1, b, null)
    }
}
var Mm = !1;

function Im(a) {
    a.type == w.j.Ik && "category" == a.element && (Mm = !0, U.Lc(!1), Pg.bf(Im))
}

function Em() {
    em = dm = 200;
    fm = 0;
    Am = gm = !0;
    X.canvas.width = X.canvas.width;
    X.strokeStyle = "#ffffff";
    X.fillStyle = "#ffffff";
    X.lineWidth = 5;
    X.lineCap = "round";
    X.font = "normal 18pt Arial";
    Nm();
    for (var a = 0; a < xm.length; a++) window.clearTimeout(xm[a]);
    xm.length = 0;
    zm = null
}

function Nm() {
    W.beginPath();
    W.rect(0, 0, W.canvas.width, W.canvas.height);
    W.fillStyle = "#000000";
    W.fill();
    W.globalCompositeOperation = "source-over";
    W.globalAlpha = .2;
    W.drawImage(cm.canvas, 0, 0);
    W.globalAlpha = 1;
    W.globalCompositeOperation = "source-over";
    W.drawImage(X.canvas, 0, 0);
    if (Am) {
        W.strokeStyle = X.strokeStyle;
        W.fillStyle = X.fillStyle;
        var a = X.lineWidth / 2 + 10;
        W.beginPath();
        W.arc(dm, em, a, 0, 2 * Math.PI, !1);
        W.lineWidth = 3;
        W.stroke();
        var b = 2 * Math.PI * fm / 360,
            c = dm + (a + 10) * Math.sin(b),
            e = em - (a + 10) * Math.cos(b);
        b -= .3;
        var f =
            dm + (a + 4) * Math.sin(b),
            h = em - (a + 4) * Math.cos(b);
        b += .15;
        var k = dm + (a + 6) * Math.sin(b),
            l = em - (a + 6) * Math.cos(b);
        b += .3;
        var m = dm + (a + 6) * Math.sin(b),
            n = em - (a + 6) * Math.cos(b);
        b += .15;
        var q = dm + (a + 4) * Math.sin(b);
        a = em - (a + 4) * Math.cos(b);
        W.beginPath();
        W.moveTo(c, e);
        W.lineTo(f, h);
        W.bezierCurveTo(k, l, m, n, q, a);
        W.closePath();
        W.fill()
    }
}

function Fm(a) {
    if (!V.ge(a)) {
        a = document.getElementById("runButton");
        var b = document.getElementById("resetButton");
        b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        b.style.display = "inline";
        document.getElementById("spinner").style.visibility = "visible";
        Om()
    }
}

function Gm(a) {
    V.ge(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", document.getElementById("spinner").style.visibility = "hidden", Og(null), Em(), Bm = !1)
}

function Pm(a, b) {
    var c = function(a, b) {
        Y(a, b)
    };
    a.setProperty(b, "moveForward", a.createNativeFunction(c));
    c = function(a, b) {
        Y(-a, b)
    };
    a.setProperty(b, "moveBackward", a.createNativeFunction(c));
    c = function(a, b) {
        im(a, b)
    };
    a.setProperty(b, "turnRight", a.createNativeFunction(c));
    c = function(a, b) {
        im(-a, b)
    };
    a.setProperty(b, "turnLeft", a.createNativeFunction(c));
    c = function(a) {
        Z(!1, a)
    };
    a.setProperty(b, "penUp", a.createNativeFunction(c));
    c = function(a) {
        Z(!0, a)
    };
    a.setProperty(b, "penDown", a.createNativeFunction(c));
    c = function(a,
        b) {
        X.lineWidth = a;
        Qm(b)
    };
    a.setProperty(b, "penWidth", a.createNativeFunction(c));
    c = function(a, b) {
        jm(a, b)
    };
    a.setProperty(b, "penColour", a.createNativeFunction(c));
    c = function(a) {
        Am = !1;
        Qm(a)
    };
    a.setProperty(b, "hideTurtle", a.createNativeFunction(c));
    c = function(a) {
        Am = !0;
        Qm(a)
    };
    a.setProperty(b, "showTurtle", a.createNativeFunction(c));
    c = function(a, b) {
        X.save();
        X.translate(dm, em);
        X.rotate(2 * Math.PI * (fm - 90) / 360);
        X.fillText(a, 0, 0);
        X.restore();
        Qm(b)
    };
    a.setProperty(b, "print", a.createNativeFunction(c));
    c = function(a,
        b, c, k) {
        X.font = c + " " + b + "pt " + a;
        Qm(k)
    };
    a.setProperty(b, "font", a.createNativeFunction(c))
}

function Om() {
    if ("Interpreter" in window) {
        Em();
        w.selected && w.selected.ng();
        var a = vk();
        zm = new Interpreter(a, Pm);
        xm.push(setTimeout(Rm, 100))
    } else setTimeout(Om, 250)
}

function Rm() {
    ym = xm.length = 0;
    do {
        try {
            var a = zm.step()
        } catch (h) {
            alert(h), a = !1
        }
        a && ym && (a = !1, xm.push(setTimeout(Rm, ym)))
    } while (a);
    if (!ym) {
        document.getElementById("spinner").style.visibility = "hidden";
        Og(null);
        a = X.getImageData(0, 0, 400, 400);
        for (var b = cm.getImageData(0, 0, 400, 400), c = Math.min(a.data.length, b.data.length), e = 0, f = 3; f < c; f += 4) 64 < Math.abs(a.data[f] - b.data[f]) && e++;
        km(e) ? (V.Ax(), 10 > S && (Pg.Zd.play("win", .5), U.kv())) : jm("#ff0000");
        Bm = !0
    }
}

function Qm(a) {
    Nm();
    a && (V.Zn(a), a = 1E3 * Math.pow(1 - bm.getValue(), 2), ym = Math.max(1, a))
}

function Y(a, b) {
    gm && (X.beginPath(), X.moveTo(dm, em));
    a ? (dm += a * Math.sin(2 * Math.PI * fm / 360), em -= a * Math.cos(2 * Math.PI * fm / 360), a = 0) : a = .1;
    gm && (X.lineTo(dm, em + a), X.stroke());
    Qm(b)
}

function im(a, b) {
    fm += a;
    fm %= 360;
    0 > fm && (fm += 360);
    Qm(b)
}

function Z(a, b) {
    gm = a;
    Qm(b)
}

function jm(a, b) {
    X.strokeStyle = a;
    X.fillStyle = a;
    Qm(b)
}

function Cm() {
    if (Bm) {
        var a = document.getElementById("thumbnail"),
            b = a.getContext("2d");
        b.globalCompositeOperation = "copy";
        b.drawImage(W.canvas, 0, 0, 200, 200);
        a = a.toDataURL("image/png");
        document.getElementById("galleryThumb").value = a;
        U.sp()
    } else alert(T("Turtle_submitDisabled"))
};