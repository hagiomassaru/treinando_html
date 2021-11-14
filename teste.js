window.demandSupplySc = "JP";
window.demandSupplyCr = "04";
window.demandSupplySr = 87;
window.houseAdCampaigns = ["relabe"];
window.demandSupplyTi = "d689123a-9010-4d44-a747-e1af8a0a3856";
window.demandSupplyTc = null;
(function () {
    function m(a, c, b) {
        if (null == a)
            throw new TypeError(
                "The 'this' value for String.prototype." +
                    b +
                    " must not be null or undefined"
            );
        if (c instanceof RegExp)
            throw new TypeError(
                "First argument to String.prototype." +
                    b +
                    " must not be a regular expression"
            );
        return a + "";
    }
    var u =
        "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (a, c, b) {
                  if (a == Array.prototype || a == Object.prototype) return a;
                  a[c] = b.value;
                  return a;
              };
    function w(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
        ];
        for (var c = 0; c < a.length; ++c) {
            var b = a[c];
            if (b && b.Math == Math) return b;
        }
        throw Error("Cannot find global object");
    }
    var x = w(this);
    function y(a, c) {
        if (c) {
            var b = x;
            a = a.split(".");
            for (var e = 0; e < a.length - 1; e++) {
                var g = a[e];
                g in b || (b[g] = {});
                b = b[g];
            }
            a = a[a.length - 1];
            e = b[a];
            c = c(e);
            c != e &&
                null != c &&
                u(b, a, { configurable: !0, writable: !0, value: c });
        }
    }
    y("String.prototype.startsWith", function (a) {
        return a
            ? a
            : function (c, b) {
                  var e = m(this, c, "startsWith");
                  c += "";
                  var g = e.length,
                      h = c.length;
                  b = Math.max(0, Math.min(b | 0, e.length));
                  for (var k = 0; k < h && b < g; )
                      if (e[b++] != c[k++]) return !1;
                  return k >= h;
              };
    });
    y("Array.prototype.find", function (a) {
        return a
            ? a
            : function (c, b) {
                  a: {
                      var e = this;
                      e instanceof String && (e = String(e));
                      for (var g = e.length, h = 0; h < g; h++) {
                          var k = e[h];
                          if (c.call(b, k, h, e)) {
                              c = k;
                              break a;
                          }
                      }
                      c = void 0;
                  }
                  return c;
              };
    });
    y("Object.is", function (a) {
        return a
            ? a
            : function (c, b) {
                  return c === b
                      ? 0 !== c || 1 / c === 1 / b
                      : c !== c && b !== b;
              };
    });
    y("Array.prototype.includes", function (a) {
        return a
            ? a
            : function (c, b) {
                  var e = this;
                  e instanceof String && (e = String(e));
                  var g = e.length;
                  b = b || 0;
                  for (0 > b && (b = Math.max(b + g, 0)); b < g; b++) {
                      var h = e[b];
                      if (h === c || Object.is(h, c)) return !0;
                  }
                  return !1;
              };
    });
    y("String.prototype.includes", function (a) {
        return a
            ? a
            : function (c, b) {
                  return -1 !== m(this, c, "includes").indexOf(c, b || 0);
              };
    });
    (function () {
        function a(d) {
            var f = document.createElement("script");
            f.type = "text/javascript";
            f.src = d;
            return f;
        }
        function c() {
            try {
                return (
                    new Function("(a = 0) => a"),
                    new Function("class A {}"),
                    new Function("for (const a of [1]) {}"),
                    !0
                );
            } catch (d) {
                return !1;
            }
        }
        function b(d, f) {
            f = void 0 === f ? {} : f;
            var n = void 0 === f.host ? g.a : f.host;
            f = void 0 === f.h ? window : f.h;
            try {
                var q = f.performance.getEntries().filter(function (p) {
                        return p.name.startsWith(n + d);
                    }),
                    l = q.find(function (p) {
                        return v.includes(p.initiatorType);
                    });
                return l
                    ? {
                          duration: Math.round(l.duration),
                          j: e(l, q),
                          responseEnd: Math.round(l.responseEnd),
                      }
                    : null;
            } catch (p) {
                return null;
            }
        }
        function e(d, f) {
            return (function () {
                return f.some(function (n) {
                    return !v.includes(n.initiatorType);
                });
            })()
                ? "s"
                : void 0 === d.transferSize
                ? "n"
                : 0 === d.transferSize
                ? "a"
                : d.transferSize < d.encodedBodySize || 0 === d.encodedBodySize
                ? "b"
                : "c";
        }
        var g = {},
            h = { bv: "14.0.0", bfu: "https://live.demand.supply" },
            k = h.bv;
        g.a = h.bfu;
        g.i = k;
        var v = ["script", "link", "iframe"],
            r = {
                b: function (d) {
                    this.c(d, { path: "x", f: "ce" });
                },
                c: function (d, f) {
                    var n = f.path,
                        q = f.f;
                    f = f.l;
                    var l = new window.XMLHttpRequest();
                    l.open(
                        "HEAD",
                        g.a +
                            ("/" + n + "/e.js?" + q + "=" + d) +
                            (
                                (f ? "&" + f : "") +
                                ("&dsReferer=" + btoa(location.href))
                            ).substring(0, 1e3),
                        !0
                    );
                    l.send();
                },
            },
            t = {
                u: function () {
                    var d = b("/up.js");
                    this.g("ll", d ? "d=" + d.duration + "&cs=" + d.j : "nd=1");
                },
                A: function () {
                    r.b("rl");
                },
                v: function () {
                    r.b("mle");
                },
                w: function () {
                    r.b("bnl");
                },
                g: function (d, f) {
                    r.c(d, { path: "e", f: "e", l: void 0 === f ? "" : f });
                },
            };
        h = {
            m: function () {
                [
                    g.a +
                        "/" +
                        ((c() ? "impl" : "impl-legacy") + ".v" + g.i) +
                        ".js",
                ]
                    .concat([
                        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                        "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                    ])
                    .forEach(function (d) {
                        document
                            .getElementsByTagName("head")[0]
                            .appendChild(a(d));
                    });
                setTimeout(function () {
                    (demandSupply.surge && demandSupply.surge.mainLoaded) ||
                        t.w();
                }, 1e4);
            },
        };
        k = {
            o: function () {
                var d = window.location.href.replace(
                    window.location.protocol + "//",
                    ""
                );
                document
                    .getElementsByTagName("head")[0]
                    .appendChild(a(g.a + "/p4/v14-0-0/" + btoa(d)));
            },
            s: function () {
                var d = new XMLHttpRequest();
                d.open("GET", g.a + "/ds.2.html");
                d.send();
            },
        };
        try {
            window.demandSupply
                ? t.A()
                : ((window.demandSupply = {}), t.u(), h.m(), k.o(), k.s());
        } catch (d) {
            t.v();
        }
    })();
}.call(window));
