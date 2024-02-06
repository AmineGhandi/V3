!(function (s, l) {
    "use strict";
    function e(i, o) {
        var r, a;
        return function () {
            var e = this,
                t = arguments,
                n = +new Date();
            r && n < r + i
                ? (clearTimeout(a),
                  (a = setTimeout(function () {
                      (r = n), o.apply(e, t);
                  }, i)))
                : ((r = n), o.apply(e, t));
        };
    }
    function n() {
        if (!f || !l.body.contains(f) || "loaded" == f.disqusLoaderStatus) return !0;
        var e,
            t = s.pageYOffset,
            n = [(e = f.getBoundingClientRect()).top + l.body.scrollTop, (e.left, l.body.scrollLeft)][0];
        if (n - t > s.innerHeight * c || 0 < t - n - f.offsetHeight - s.innerHeight * c) return !0;
        var i,
            o,
            r,
            a = l.getElementById("disqus_thread");
        a && a.removeAttribute("id"),
            f.setAttribute("id", "disqus_thread"),
            (f.disqusLoaderStatus = "loaded") == h
                ? DISQUS.reset({ reload: !0, config: u })
                : ((s.disqus_config = u),
                  "unloaded" == h &&
                      ((h = "loading"),
                      (i = d),
                      (o = function () {
                          h = "loaded";
                      }),
                      ((r = l.createElement("script")).src = i),
                      (r.async = !0),
                      r.setAttribute("data-timestamp", +new Date()),
                      r.addEventListener("load", function () {
                          "function" == typeof o && o();
                      }),
                      (l.head || l.body).appendChild(r)));
    }
    var i = !1,
        c = !1,
        u = !1,
        d = !1,
        h = "unloaded",
        f = !1;
    s.addEventListener("scroll", e(i, n)),
        s.addEventListener("resize", e(i, n)),
        (s.disqusLoader = function (e, t) {
            (t = (function (e, t) {
                var n,
                    i = {};
                for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
                return i;
            })({ laziness: 1, throttle: 250, scriptUrl: !1, disqusConfig: !1 }, t)),
                (c = t.laziness + 1),
                (i = t.throttle),
                (u = t.disqusConfig),
                (d = !1 === d ? t.scriptUrl : d),
                (f = "string" == typeof e ? l.querySelector(e) : "number" == typeof e.length ? e[0] : e) && (f.disqusLoaderStatus = "unloaded"),
                n();
        });
})(window, document),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).LazyLoad = t());
    })(this, function () {
        "use strict";
        function t() {
            return (t =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function s(e) {
            return t({}, Y, e);
        }
        function o(e, t) {
            var n,
                i = "LazyLoad::Initialized",
                o = new e(t);
            try {
                n = new CustomEvent(i, { detail: { instance: o } });
            } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, { instance: o });
            }
            window.dispatchEvent(n);
        }
        function O(e, t) {
            return e.getAttribute("data-" + t);
        }
        function v(e) {
            return O(e, "ll-status");
        }
        function y(e, t) {
            return (n = e), (i = "data-ll-status"), void (null !== t ? n.setAttribute(i, t) : n.removeAttribute(i));
            var n, i;
        }
        function b(e) {
            return y(e, null);
        }
        function w(e) {
            return null === v(e);
        }
        function c(e) {
            return "native" === v(e);
        }
        function k(e, t, n, i) {
            e && (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
        }
        function x(e, t) {
            Z ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
        }
        function E(e, t) {
            Z
                ? e.classList.remove(t)
                : (e.className = e.className
                      .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                      .replace(/^\s+/, "")
                      .replace(/\s+$/, ""));
        }
        function I(e) {
            return e.llTempImage;
        }
        function S(e, t) {
            var n;
            !t || ((n = t._observer) && n.unobserve(e));
        }
        function L(e, t) {
            e && (e.loadingCount += t);
        }
        function l(e, t) {
            e && (e.toLoadCount = t);
        }
        function i(e) {
            for (var t, n = [], i = 0; (t = e.children[i]); i += 1) "SOURCE" === t.tagName && n.push(t);
            return n;
        }
        function _(e, t) {
            var n = e.parentNode;
            n && "PICTURE" === n.tagName && i(n).forEach(t);
        }
        function n(e, t) {
            i(e).forEach(t);
        }
        function j(e) {
            return !!e[ee];
        }
        function u(e) {
            return e[ee];
        }
        function d(e) {
            return delete e[ee];
        }
        function r(t, e) {
            var n;
            j(t) ||
                ((n = {}),
                e.forEach(function (e) {
                    n[e] = t.getAttribute(e);
                }),
                (t[ee] = n));
        }
        function a(o, e) {
            var r;
            j(o) &&
                ((r = u(o)),
                e.forEach(function (e) {
                    var t, n, i;
                    (t = o), (i = r[(n = e)]) ? t.setAttribute(n, i) : t.removeAttribute(n);
                }));
        }
        function q(e, t, n) {
            x(e, t.class_applied), y(e, ie), n && (t.unobserve_completed && S(e, t), k(t.callback_applied, e, n));
        }
        function N(e, t, n) {
            x(e, t.class_loading), y(e, te), n && (L(n, 1), k(t.callback_loading, e, n));
        }
        function h(e, t, n) {
            n && e.setAttribute(t, n);
        }
        function f(e, t) {
            h(e, K, O(e, t.data_sizes)), h(e, X, O(e, t.data_srcset)), h(e, V, O(e, t.data_src));
        }
        function p(e, t) {
            !t || 0 < t.loadingCount || 0 < t.toLoadCount || k(e.callback_finish, t);
        }
        function g(e, t, n) {
            e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
        }
        function m(e) {
            return !!e.llEvLisnrs;
        }
        function A(e) {
            if (m(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                    var i = t[n];
                    (o = n), (r = i), e.removeEventListener(o, r);
                }
                delete e.llEvLisnrs;
            }
            var o, r;
        }
        function F(e, t, n) {
            delete e.llTempImage, L(n, -1), n && --n.toLoadCount, E(e, t.class_loading), t.unobserve_completed && S(e, n);
        }
        function T(n, i, o) {
            var r = I(n) || n;
            m(r) ||
                (function (e) {
                    m(e) || (e.llEvLisnrs = {});
                    var t = "VIDEO" === e.tagName ? "loadeddata" : "load";
                    g(e, t, function (e) {
                        !(function (e, t, n, i) {
                            var o = c(t);
                            F(t, n, i), x(t, n.class_loaded), y(t, ne), k(n.callback_loaded, t, i), o || p(n, i);
                        })(0, n, i, o),
                            A(r);
                    }),
                        g(e, "error", function (e) {
                            !(function (e, t, n, i) {
                                var o = c(t);
                                F(t, n, i), x(t, n.class_error), y(t, oe), k(n.callback_error, t, i), n.restore_on_error && a(t, le), o || p(n, i);
                            })(0, n, i, o),
                                A(r);
                        });
                })(r);
        }
        function C(e, t, n) {
            var i, o, r, a, s, l, c, u, d, h, f, p, g, m, v, y, b, w, k, x, E, S, L, _, A, F, C, z;
            -1 < de.indexOf(e.tagName)
                ? (T((i = e), (o = t), (r = n)), (s = o), (l = r), (c = ue[(a = i).tagName]) && (c(a, s), N(a, s, l)))
                : ((d = t),
                  (h = n),
                  ((u = e).llTempImage = document.createElement("IMG")),
                  T(u, d, h),
                  j(u) || (u[ee] = { backgroundImage: u.style.backgroundImage }),
                  (A = h),
                  (F = O((L = u), (_ = d).data_bg)),
                  (C = O(L, _.data_bg_hidpi)),
                  (z = J && C ? C : F) && ((L.style.backgroundImage = 'url("'.concat(z, '")')), I(L).setAttribute(V, z), N(L, _, A)),
                  (k = h),
                  (x = O((b = u), (w = d).data_bg_multi)),
                  (E = O(b, w.data_bg_multi_hidpi)),
                  (S = J && E ? E : x) && ((b.style.backgroundImage = S), q(b, w, k)),
                  (g = h),
                  (y = O((f = u), (p = d).data_bg_set)) &&
                      ((v = (m = y.split("|")).map(function (e) {
                          return "image-set(".concat(e, ")");
                      })),
                      (f.style.backgroundImage = v.join()),
                      "" === f.style.backgroundImage &&
                          ((v = m.map(function (e) {
                              return "-webkit-image-set(".concat(e, ")");
                          })),
                          (f.style.backgroundImage = v.join())),
                      q(f, p, g)));
        }
        function z(e) {
            e.removeAttribute(V), e.removeAttribute(X), e.removeAttribute(K);
        }
        function D(e) {
            _(e, function (e) {
                a(e, le);
            }),
                a(e, le);
        }
        function H(e) {
            return e.use_native && "loading" in HTMLImageElement.prototype;
        }
        function M(e, g, m) {
            e.forEach(function (e) {
                return e.isIntersecting || 0 < e.intersectionRatio
                    ? ((u = e.target),
                      (d = e),
                      (h = g),
                      (f = m),
                      (p = 0 <= re.indexOf(v(u))),
                      y(u, "entered"),
                      x(u, h.class_entered),
                      E(u, h.class_exited),
                      h.unobserve_entered && S(u, f),
                      k(h.callback_enter, u, d, f),
                      void (p || C(u, h, f)))
                    : ((t = e.target),
                      (n = e),
                      (i = g),
                      (o = m),
                      void (
                          w(t) ||
                          (x(t, i.class_exited),
                          (r = t),
                          (a = n),
                          (l = o),
                          (s = i).cancel_on_exit &&
                              v(r) === te &&
                              "IMG" === r.tagName &&
                              (A(r),
                              _((c = r), function (e) {
                                  z(e);
                              }),
                              z(c),
                              D(r),
                              E(r, s.class_loading),
                              L(l, -1),
                              b(r),
                              k(s.callback_cancel, r, a, l)),
                          k(i.callback_exit, t, n, o))
                      ));
                var t, n, i, o, r, a, s, l, c, u, d, h, f, p;
            });
        }
        function P(e) {
            return Array.prototype.slice.call(e);
        }
        function $(e) {
            return e.container.querySelectorAll(e.elements_selector);
        }
        function B(e) {
            return v(e) === oe;
        }
        function R(e, t) {
            return (n = e || $(t)), P(n).filter(w);
            var n;
        }
        function e(e, t) {
            var i,
                o,
                n,
                r,
                a = s(e);
            (this._settings = a),
                (this.loadingCount = 0),
                (n = a),
                (r = this),
                G &&
                    !H(n) &&
                    (r._observer = new IntersectionObserver(
                        function (e) {
                            M(e, n, r);
                        },
                        { root: n.container === document ? null : n.container, rootMargin: n.thresholds || n.threshold + "px" }
                    )),
                (i = a),
                (o = this),
                W &&
                    window.addEventListener("online", function () {
                        var t, e, n;
                        (e = o),
                            (n = $((t = i))),
                            P(n)
                                .filter(B)
                                .forEach(function (e) {
                                    E(e, t.class_error), b(e);
                                }),
                            e.update();
                    }),
                this.update(t);
        }
        var W = "undefined" != typeof window,
            U = (W && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            G = W && "IntersectionObserver" in window,
            Z = W && "classList" in document.createElement("p"),
            J = W && 1 < window.devicePixelRatio,
            Y = {
                elements_selector: ".lazy",
                container: U || W ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_bg_set: "bg-set",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                class_entered: "entered",
                class_exited: "exited",
                unobserve_completed: !0,
                unobserve_entered: !1,
                cancel_on_exit: !0,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                callback_cancel: null,
                use_native: !1,
                restore_on_error: !1,
            },
            V = "src",
            X = "srcset",
            K = "sizes",
            Q = "poster",
            ee = "llOriginalAttrs",
            te = "loading",
            ne = "loaded",
            ie = "applied",
            oe = "error",
            re = [te, "loaded", ie, oe],
            ae = [V],
            se = [V, Q],
            le = [V, X, K],
            ce = ["data"],
            ue = {
                IMG: function (e, t) {
                    _(e, function (e) {
                        r(e, le), f(e, t);
                    }),
                        r(e, le),
                        f(e, t);
                },
                IFRAME: function (e, t) {
                    r(e, ae), h(e, V, O(e, t.data_src));
                },
                VIDEO: function (e, t) {
                    n(e, function (e) {
                        r(e, ae), h(e, V, O(e, t.data_src));
                    }),
                        r(e, se),
                        h(e, Q, O(e, t.data_poster)),
                        h(e, V, O(e, t.data_src)),
                        e.load();
                },
                OBJECT: function (e, t) {
                    r(e, ce), h(e, "data", O(e, t.data_src));
                },
            },
            de = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            he = {
                IMG: D,
                IFRAME: function (e) {
                    a(e, ae);
                },
                VIDEO: function (e) {
                    n(e, function (e) {
                        a(e, ae);
                    }),
                        a(e, se),
                        e.load();
                },
                OBJECT: function (e) {
                    a(e, ce);
                },
            },
            fe = ["IMG", "IFRAME", "VIDEO"];
        return (
            (e.prototype = {
                update: function (e) {
                    var t,
                        n,
                        i,
                        r,
                        a,
                        o = this._settings,
                        s = R(e, o);
                    l(this, s.length),
                        !U && G
                            ? H(o)
                                ? ((r = o),
                                  (a = this),
                                  s.forEach(function (e) {
                                      var t, n, i, o;
                                      -1 !== fe.indexOf(e.tagName) && ((n = r), (i = a), (t = e).setAttribute("loading", "lazy"), T(t, n, i), (o = ue[t.tagName]) && o(t, n), y(t, "native"));
                                  }),
                                  l(a, 0))
                                : ((n = s),
                                  (t = this._observer).disconnect(),
                                  (i = t),
                                  n.forEach(function (e) {
                                      i.observe(e);
                                  }))
                            : this.loadAll(s);
                },
                destroy: function () {
                    this._observer && this._observer.disconnect(),
                        $(this._settings).forEach(function (e) {
                            d(e);
                        }),
                        delete this._observer,
                        delete this._settings,
                        delete this.loadingCount,
                        delete this.toLoadCount;
                },
                loadAll: function (e) {
                    var t = this,
                        n = this._settings;
                    R(e, n).forEach(function (e) {
                        S(e, t), C(e, n, t);
                    });
                },
                restoreAll: function () {
                    var l = this._settings;
                    $(l).forEach(function (e) {
                        var t, n, i, o, r, a, s;
                        (n = l),
                            (s = he[(r = t = e).tagName]) ? s(r) : j(r) && ((a = u(r)), (r.style.backgroundImage = a.backgroundImage)),
                            (o = n),
                            w((i = t)) || c(i) || (E(i, o.class_entered), E(i, o.class_exited), E(i, o.class_applied), E(i, o.class_loading), E(i, o.class_loaded), E(i, o.class_error)),
                            b(t),
                            d(t);
                    });
                },
            }),
            (e.load = function (e, t) {
                var n = s(t);
                C(e, n);
            }),
            (e.resetStatus = function (e) {
                b(e);
            }),
            W &&
                (function (e, t) {
                    if (t)
                        if (t.length) for (var n, i = 0; (n = t[i]); i += 1) o(e, n);
                        else o(e, t);
                })(e, window.lazyLoadOptions),
            e
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).mediumZoom = t());
    })(this, function () {
        "use strict";
        function t(e) {
            return "IMG" === e.tagName;
        }
        function E(e) {
            return e && 1 === e.nodeType;
        }
        function S(e) {
            return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
        }
        function d(e) {
            try {
                return Array.isArray(e) ? e.filter(t) : NodeList.prototype.isPrototypeOf(e) ? [].slice.call(e).filter(t) : E(e) ? [e].filter(t) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(t) : [];
            } catch (e) {
                throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
            }
        }
        function L(e, t) {
            var n = _({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e, n);
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), i;
        }
        var _ =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            };
        return (
            (function (e, t) {
                void 0 === t && (t = {});
                var n,
                    i,
                    o = t.insertAt;
                "undefined" != typeof document &&
                    ((n = document.head || document.getElementsByTagName("head")[0]),
                    ((i = document.createElement("style")).type = "text/css"),
                    "top" === o && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
                    i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e)));
            })(
                ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"
            ),
            function e(t, n) {
                function i() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var o = t.reduce(function (e, t) {
                        return [].concat(e, d(t));
                    }, []);
                    return (
                        o
                            .filter(function (e) {
                                return -1 === m.indexOf(e);
                            })
                            .forEach(function (e) {
                                m.push(e), e.classList.add("medium-zoom-image");
                            }),
                        l.forEach(function (e) {
                            var t = e.type,
                                n = e.listener,
                                i = e.options;
                            o.forEach(function (e) {
                                e.addEventListener(t, n, i);
                            });
                        }),
                        x
                    );
                }
                function o() {
                    function f() {
                        var e,
                            t,
                            n,
                            i,
                            o,
                            r = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0 },
                            a = void 0,
                            s = void 0;
                        w.container &&
                            (w.container instanceof Object
                                ? ((a = (r = _({}, r, w.container)).width - r.left - r.right - 2 * w.margin), (s = r.height - r.top - r.bottom - 2 * w.margin))
                                : ((t = (e = (E(w.container) ? w.container : document.querySelector(w.container)).getBoundingClientRect()).width),
                                  (n = e.height),
                                  (i = e.left),
                                  (o = e.top),
                                  (r = _({}, r, { width: t, height: n, left: i, top: o })))),
                            (a = a || r.width - 2 * w.margin),
                            (s = s || r.height - 2 * w.margin);
                        var l = k.zoomedHd || k.original,
                            c = (!S(l) && l.naturalWidth) || a,
                            u = (!S(l) && l.naturalHeight) || s,
                            d = l.getBoundingClientRect(),
                            h = d.top,
                            f = d.left,
                            p = d.width,
                            g = d.height,
                            m = Math.min(c, a) / p,
                            v = Math.min(u, s) / g,
                            y = Math.min(m, v),
                            b = "scale(" + y + ") translate3d(" + ((a - p) / 2 - f + w.margin + r.left) / y + "px, " + ((s - g) / 2 - h + w.margin + r.top) / y + "px, 0)";
                        (k.zoomed.style.transform = b), k.zoomedHd && (k.zoomedHd.style.transform = b);
                    }
                    var p = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target;
                    return new a(function (t) {
                        if (p && -1 === m.indexOf(p)) t(x);
                        else if (k.zoomed) t(x);
                        else {
                            if (p) k.original = p;
                            else {
                                if (!(0 < m.length)) return void t(x);
                                k.original = m[0];
                            }
                            var e, n, i;
                            k.original.dispatchEvent(L("medium-zoom:open", { detail: { zoom: x } })),
                                (y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                                (v = !0),
                                (k.zoomed =
                                    ((o = k.original),
                                    (r = o.getBoundingClientRect()),
                                    (a = r.top),
                                    (s = r.left),
                                    (l = r.width),
                                    (c = r.height),
                                    (u = o.cloneNode()),
                                    (d = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                                    (h = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
                                    u.removeAttribute("id"),
                                    (u.style.position = "absolute"),
                                    (u.style.top = a + d + "px"),
                                    (u.style.left = s + h + "px"),
                                    (u.style.width = l + "px"),
                                    (u.style.height = c + "px"),
                                    (u.style.transform = ""),
                                    u)),
                                document.body.appendChild(b),
                                w.template &&
                                    ((e = E(w.template) ? w.template : document.querySelector(w.template)),
                                    (k.template = document.createElement("div")),
                                    k.template.appendChild(e.content.cloneNode(!0)),
                                    document.body.appendChild(k.template)),
                                document.body.appendChild(k.zoomed),
                                window.requestAnimationFrame(function () {
                                    document.body.classList.add("medium-zoom--opened");
                                }),
                                k.original.classList.add("medium-zoom-image--hidden"),
                                k.zoomed.classList.add("medium-zoom-image--opened"),
                                k.zoomed.addEventListener("click", g),
                                k.zoomed.addEventListener("transitionend", function e() {
                                    (v = !1), k.zoomed.removeEventListener("transitionend", e), k.original.dispatchEvent(L("medium-zoom:opened", { detail: { zoom: x } })), t(x);
                                }),
                                k.original.getAttribute("data-zoom-src")
                                    ? ((k.zoomedHd = k.zoomed.cloneNode()),
                                      k.zoomedHd.removeAttribute("srcset"),
                                      k.zoomedHd.removeAttribute("sizes"),
                                      (k.zoomedHd.src = k.zoomed.getAttribute("data-zoom-src")),
                                      (k.zoomedHd.onerror = function () {
                                          clearInterval(n), console.warn("Unable to reach the zoom image target " + k.zoomedHd.src), (k.zoomedHd = null), f();
                                      }),
                                      (n = setInterval(function () {
                                          k.zoomedHd.complete && (clearInterval(n), k.zoomedHd.classList.add("medium-zoom-image--opened"), k.zoomedHd.addEventListener("click", g), document.body.appendChild(k.zoomedHd), f());
                                      }, 10)))
                                    : k.original.hasAttribute("srcset")
                                    ? ((k.zoomedHd = k.zoomed.cloneNode()),
                                      k.zoomedHd.removeAttribute("sizes"),
                                      k.zoomedHd.removeAttribute("loading"),
                                      (i = k.zoomedHd.addEventListener("load", function () {
                                          k.zoomedHd.removeEventListener("load", i), k.zoomedHd.classList.add("medium-zoom-image--opened"), k.zoomedHd.addEventListener("click", g), document.body.appendChild(k.zoomedHd), f();
                                      })))
                                    : f();
                        }
                        var o, r, a, s, l, c, u, d, h;
                    });
                }
                var r = 1 < arguments.length && void 0 !== n ? n : {},
                    a =
                        window.Promise ||
                        function (e) {
                            function t() {}
                            e(t, t);
                        },
                    g = function () {
                        return new a(function (t) {
                            !v && k.original
                                ? ((v = !0),
                                  document.body.classList.remove("medium-zoom--opened"),
                                  (k.zoomed.style.transform = ""),
                                  k.zoomedHd && (k.zoomedHd.style.transform = ""),
                                  k.template && ((k.template.style.transition = "opacity 150ms"), (k.template.style.opacity = 0)),
                                  k.original.dispatchEvent(L("medium-zoom:close", { detail: { zoom: x } })),
                                  k.zoomed.addEventListener("transitionend", function e() {
                                      k.original.classList.remove("medium-zoom-image--hidden"),
                                          document.body.removeChild(k.zoomed),
                                          k.zoomedHd && document.body.removeChild(k.zoomedHd),
                                          document.body.removeChild(b),
                                          k.zoomed.classList.remove("medium-zoom-image--opened"),
                                          k.template && document.body.removeChild(k.template),
                                          (v = !1),
                                          k.zoomed.removeEventListener("transitionend", e),
                                          k.original.dispatchEvent(L("medium-zoom:closed", { detail: { zoom: x } })),
                                          (k.original = null),
                                          (k.zoomed = null),
                                          (k.zoomedHd = null),
                                          (k.template = null),
                                          t(x);
                                  }))
                                : t(x);
                        });
                    },
                    s = function () {
                        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target;
                        return k.original ? g() : o({ target: e });
                    },
                    m = [],
                    l = [],
                    v = !1,
                    y = 0,
                    w = r,
                    k = { original: null, zoomed: null, zoomedHd: null, template: null };
                "[object Object]" === Object.prototype.toString.call(t) ? (w = t) : (!t && "string" != typeof t) || i(t), (w = _({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, w));
                var c,
                    u,
                    b = ((c = w.background), (u = document.createElement("div")).classList.add("medium-zoom-overlay"), (u.style.background = c), u);
                document.addEventListener("click", function (e) {
                    var t = e.target;
                    t !== b ? -1 !== m.indexOf(t) && s({ target: t }) : g();
                }),
                    document.addEventListener("keyup", function (e) {
                        var t = e.key || e.keyCode;
                        ("Escape" !== t && "Esc" !== t && 27 !== t) || g();
                    }),
                    document.addEventListener("scroll", function () {
                        var e;
                        !v && k.original && ((e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), Math.abs(y - e) > w.scrollOffset && setTimeout(g, 150));
                    }),
                    window.addEventListener("resize", g);
                var x = {
                    open: o,
                    close: g,
                    toggle: s,
                    update: function () {
                        var e,
                            t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t;
                        return (
                            t.background && (b.style.background = t.background),
                            t.container && t.container instanceof Object && (n.container = _({}, w.container, t.container)),
                            t.template && ((e = E(t.template) ? t.template : document.querySelector(t.template)), (n.template = e)),
                            (w = _({}, w, n)),
                            m.forEach(function (e) {
                                e.dispatchEvent(L("medium-zoom:update", { detail: { zoom: x } }));
                            }),
                            x
                        );
                    },
                    clone: function () {
                        return e(_({}, w, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}));
                    },
                    attach: i,
                    detach: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        k.zoomed && g();
                        var i =
                            0 < t.length
                                ? t.reduce(function (e, t) {
                                      return [].concat(e, d(t));
                                  }, [])
                                : m;
                        return (
                            i.forEach(function (e) {
                                e.classList.remove("medium-zoom-image"), e.dispatchEvent(L("medium-zoom:detach", { detail: { zoom: x } }));
                            }),
                            (m = m.filter(function (e) {
                                return -1 === i.indexOf(e);
                            })),
                            x
                        );
                    },
                    on: function (t, n) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return (
                            m.forEach(function (e) {
                                e.addEventListener("medium-zoom:" + t, n, i);
                            }),
                            l.push({ type: "medium-zoom:" + t, listener: n, options: i }),
                            x
                        );
                    },
                    off: function (t, n) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return (
                            m.forEach(function (e) {
                                e.removeEventListener("medium-zoom:" + t, n, i);
                            }),
                            (l = l.filter(function (e) {
                                return !(e.type === "medium-zoom:" + t && e.listener.toString() === n.toString());
                            })),
                            x
                        );
                    },
                    getOptions: function () {
                        return w;
                    },
                    getImages: function () {
                        return m;
                    },
                    getZoomedImage: function () {
                        return k.original;
                    },
                };
                return x;
            }
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define("priorityNav", t(e)) : "object" == typeof exports ? (module.exports = t(e)) : (e.priorityNav = t(e));
    })(window || this, function (e) {
        "use strict";
        function r(e, t, n) {
            if ("[object Object]" === Object.prototype.toString.call(e)) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e);
            else for (var o = 0, r = e.length; o < r; o++) t.call(n, e[o], o, e);
        }
        function a(e, t) {
            var n, i;
            e.classList ? e.classList.toggle(t) : (0 <= (i = (n = e.className.split(" ")).indexOf(t)) ? n.splice(i, 1) : n.push(t), (e.className = n.join(" ")));
        }
        function s(e) {
            var t,
                n,
                i,
                o,
                r,
                a = e,
                s = window.getComputedStyle(a),
                l = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight);
            (c = a.clientWidth - l),
                e.querySelector(h).parentNode === e && e.querySelector(h).offsetWidth,
                (u = S(e) + y.offsetPixels),
                (t = document),
                (n = window),
                (o = (i = t.compatMode && "CSS1Compat" === t.compatMode ? t.documentElement : t.body).clientWidth),
                (r = i.clientHeight),
                n.innerWidth && o > n.innerWidth && ((o = n.innerWidth), (r = n.innerHeight)),
                (w = { width: o, height: r }.width);
        }
        var l,
            c,
            u,
            d,
            h,
            f,
            p,
            g = {},
            m = [],
            v = !!document.querySelector && !!e.addEventListener,
            y = {},
            b = 0,
            w = 0,
            k = {
                initClass: "js-priorityNav",
                mainNavWrapper: "nav",
                mainNav: "ul",
                navDropdownClassName: "nav__dropdown",
                navDropdownToggleClassName: "nav__dropdown-toggle",
                navDropdownLabel: "more",
                navDropdownBreakpointLabel: "menu",
                breakPoint: 500,
                throttleDelay: 50,
                offsetPixels: 0,
                count: !0,
                moved: function () {},
                movedBack: function () {},
            };
        g.doesItFit = function (t) {
            function n() {
                var e = t.getAttribute("instance");
                for (s(t); (c <= u && 0 < t.querySelector(d).children.length) || (w < y.breakPoint && 0 < t.querySelector(d).children.length); ) g.toDropdown(t, e), s(t), w < y.breakPoint && E(t, e, y.navDropdownBreakpointLabel);
                for (; c >= m[e][m[e].length - 1] && w > y.breakPoint; ) g.toMenu(t, e), w > y.breakPoint && E(t, e, y.navDropdownLabel);
                m[e].length < 1 && (t.querySelector(h).classList.remove("show"), E(t, e, y.navDropdownLabel)),
                    t.querySelector(d).children.length < 1 ? (t.classList.add("is-empty"), E(t, e, y.navDropdownBreakpointLabel)) : t.classList.remove("is-empty"),
                    x(t, e);
            }
            var i,
                e = 0 === t.getAttribute("instance") ? e : y.throttleDelay,
                o = e;
            (function () {
                var e = this,
                    t = arguments;
                clearTimeout(i),
                    (i = setTimeout(function () {
                        (i = null), n.apply(e, t);
                    }, o));
            })();
        };
        function n(e, t) {
            e.querySelector(f).setAttribute("priorityNav-count", m[t].length);
        }
        var x = function (e, t) {
                m[t].length < 1
                    ? (e.querySelector(f).classList.add("priority-nav-is-hidden"),
                      e.querySelector(f).classList.remove("priority-nav-is-visible"),
                      e.classList.remove("priority-nav-has-dropdown"),
                      e.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup", "false"))
                    : (e.querySelector(f).classList.add("priority-nav-is-visible"),
                      e.querySelector(f).classList.remove("priority-nav-is-hidden"),
                      e.classList.add("priority-nav-has-dropdown"),
                      e.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup", "true"));
            },
            E = function (e, t, n) {
                e.querySelector(f).innerHTML = n;
            };
        (g.toDropdown = function (e, t) {
            e.querySelector(h).firstChild && 0 < e.querySelector(d).children.length
                ? e.querySelector(h).insertBefore(e.querySelector(d).lastElementChild, e.querySelector(h).firstChild)
                : 0 < e.querySelector(d).children.length && e.querySelector(h).appendChild(e.querySelector(d).lastElementChild),
                m[t].push(u),
                x(e, t),
                0 < e.querySelector(d).children.length && y.count && n(e, t),
                y.moved();
        }),
            (g.toMenu = function (e, t) {
                0 < e.querySelector(h).children.length && e.querySelector(d).appendChild(e.querySelector(h).firstElementChild), m[t].pop(), x(e, t), 0 < e.querySelector(d).children.length && y.count && n(e, t), y.movedBack();
            });
        var S = function (e) {
            for (var t = e.childNodes, n = 0, i = 0; i < t.length; i++) 3 !== t[i].nodeType && (isNaN(t[i].offsetWidth) || (n += t[i].offsetWidth));
            return n;
        };
        (Element.prototype.remove = function () {
            this.parentElement.removeChild(this);
        }),
            (NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
                for (var e = 0, t = this.length; e < t; e++) this[e] && this[e].parentElement && this[e].parentElement.removeChild(this[e]);
            }),
            (g.destroy = function () {
                y && (document.documentElement.classList.remove(y.initClass), p.remove(), (y = null), delete g.init, delete g.doesItFit);
            }),
            v &&
                "undefined" != typeof Node &&
                (Node.prototype.insertAfter = function (e, t) {
                    this.insertBefore(e, t.nextSibling);
                });
        function L(e) {
            var t = e.charAt(0);
            return "." !== t && "#" !== t;
        }
        return (
            (g.init = function (e) {
                var n,
                    t,
                    i = e || {},
                    o = {};
                r((n = k), function (e, t) {
                    o[t] = n[t];
                }),
                    r(i, function (e, t) {
                        o[t] = i[t];
                    }),
                    (y = o),
                    v || "undefined" != typeof Node
                        ? L(y.navDropdownClassName) && L(y.navDropdownToggleClassName)
                            ? ((t = document.querySelectorAll(y.mainNavWrapper)),
                              r(t, function (e) {
                                  var t, n, i, o;
                                  (m[b] = []),
                                      e.setAttribute("instance", b++),
                                      (l = e)
                                          ? ((d = y.mainNav),
                                            e.querySelector(d)
                                                ? ((t = e),
                                                  (n = y),
                                                  (p = document.createElement("span")),
                                                  (h = document.createElement("ul")),
                                                  ((f = document.createElement("button")).innerHTML = n.navDropdownLabel),
                                                  f.setAttribute("aria-controls", "menu"),
                                                  f.setAttribute("type", "button"),
                                                  h.setAttribute("aria-hidden", "true"),
                                                  t.querySelector(d).parentNode === t
                                                      ? (t.insertAfter(p, t.querySelector(d)),
                                                        p.appendChild(f),
                                                        p.appendChild(h),
                                                        h.classList.add(n.navDropdownClassName),
                                                        h.classList.add("priority-nav__dropdown"),
                                                        f.classList.add(n.navDropdownToggleClassName),
                                                        f.classList.add("priority-nav__dropdown-toggle"),
                                                        f.setAttribute("type", "button"),
                                                        p.classList.add(n.navDropdownClassName + "-wrapper"),
                                                        p.classList.add("priority-nav__wrapper"),
                                                        t.classList.add("priority-nav"))
                                                      : console.warn("mainNav is not a direct child of mainNavWrapper, double check please"),
                                                  (h = "." + y.navDropdownClassName),
                                                  e.querySelector(h)
                                                      ? ((f = "." + y.navDropdownToggleClassName),
                                                        e.querySelector(f)
                                                            ? ((i = e),
                                                              (o = y),
                                                              window.attachEvent
                                                                  ? window.attachEvent("onresize", function () {
                                                                        g.doesItFit && g.doesItFit(i);
                                                                    })
                                                                  : window.addEventListener &&
                                                                    window.addEventListener(
                                                                        "resize",
                                                                        function () {
                                                                            g.doesItFit && g.doesItFit(i);
                                                                        },
                                                                        !0
                                                                    ),
                                                              i.querySelector(f).addEventListener("click", function () {
                                                                  a(i.querySelector(h), "show"),
                                                                      a(this, "is-open"),
                                                                      a(i, "is-open"),
                                                                      -1 !== i.className.indexOf("is-open")
                                                                          ? i.querySelector(h).setAttribute("aria-hidden", "false")
                                                                          : (i.querySelector(h).setAttribute("aria-hidden", "true"), i.querySelector(h).blur());
                                                              }),
                                                              document.addEventListener("click", function (e) {
                                                                  !(function (e, t) {
                                                                      for (var n = t.charAt(0); e && e !== document; e = e.parentNode)
                                                                          if ("." === n) {
                                                                              if (e.classList.contains(t.substr(1))) return e;
                                                                          } else if ("#" === n) {
                                                                              if (e.id === t.substr(1)) return e;
                                                                          } else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e;
                                                                  })(e.target, "." + o.navDropdownClassName) &&
                                                                      e.target !== i.querySelector(f) &&
                                                                      (i.querySelector(h).classList.remove("show"), i.querySelector(f).classList.remove("is-open"), i.classList.remove("is-open"));
                                                              }),
                                                              (document.onkeydown = function (e) {
                                                                  27 === (e = e || window.event).keyCode &&
                                                                      (document.querySelector(h).classList.remove("show"), document.querySelector(f).classList.remove("is-open"), l.classList.remove("is-open"));
                                                              }),
                                                              g.doesItFit(e))
                                                            : console.warn("couldn't find the specified navDropdownToggle element"))
                                                      : console.warn("couldn't find the specified navDropdown element"))
                                                : console.warn("couldn't find the specified mainNav element"))
                                          : console.warn("couldn't find the specified mainNavWrapper element");
                              }),
                              document.documentElement.classList.add(y.initClass))
                            : console.warn("No symbols allowed in navDropdownClassName & navDropdownToggleClassName. These are not selectors.")
                        : console.warn("This browser doesn't support priorityNav");
            }),
            g
        );
    });
var e = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    g = (function (c) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            e = {},
            j = {
                manual: c.Prism && c.Prism.manual,
                disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(t) {
                        return t instanceof q
                            ? new q(t.type, e(t.content), t.alias)
                            : Array.isArray(t)
                            ? t.map(e)
                            : t
                                  .replace(/&/g, "&amp;")
                                  .replace(/</g, "&lt;")
                                  .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
                    },
                    clone: function n(e, i) {
                        var o, t;
                        switch (((i = i || {}), j.util.type(e))) {
                            case "Object":
                                if (((t = j.util.objId(e)), i[t])) return i[t];
                                for (var r in ((o = {}), (i[t] = o), e)) e.hasOwnProperty(r) && (o[r] = n(e[r], i));
                                return o;
                            case "Array":
                                return ((t = j.util.objId(e)), i[t])
                                    ? i[t]
                                    : ((o = []),
                                      (i[t] = o),
                                      e.forEach(function (e, t) {
                                          o[t] = n(e, i);
                                      }),
                                      o);
                            default:
                                return e;
                        }
                    },
                    getLanguage: function (e) {
                        for (; e; ) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement;
                        }
                        return "none";
                    },
                    setLanguage: function (e, t) {
                        (e.className = e.className.replace(RegExp(n, "gi"), "")), e.classList.add("language-" + t);
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error();
                        } catch (e) {
                            var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                            if (t) {
                                var n = document.getElementsByTagName("script");
                                for (var i in n) if (n[i].src == t) return n[i];
                            }
                            return null;
                        }
                    },
                    isActive: function (e, t, n) {
                        for (var i = "no-" + t; e; ) {
                            var o = e.classList;
                            if (o.contains(t)) return !0;
                            if (o.contains(i)) return !1;
                            e = e.parentElement;
                        }
                        return !!n;
                    },
                },
                languages: {
                    plain: e,
                    plaintext: e,
                    text: e,
                    txt: e,
                    extend: function (e, t) {
                        var n = j.util.clone(j.languages[e]);
                        for (var i in t) n[i] = t[i];
                        return n;
                    },
                    insertBefore: function (n, e, t, i) {
                        var o = (i = i || j.languages)[n],
                            r = {};
                        for (var a in o)
                            if (o.hasOwnProperty(a)) {
                                if (a == e) for (var s in t) t.hasOwnProperty(s) && (r[s] = t[s]);
                                t.hasOwnProperty(a) || (r[a] = o[a]);
                            }
                        var l = i[n];
                        return (
                            (i[n] = r),
                            j.languages.DFS(j.languages, function (e, t) {
                                t === l && e != n && (this[e] = r);
                            }),
                            r
                        );
                    },
                    DFS: function e(t, n, i, o) {
                        o = o || {};
                        var r,
                            a,
                            s = j.util.objId;
                        for (var l in t) {
                            t.hasOwnProperty(l) && (n.call(t, l, t[l], i || l), (r = t[l]), "Object" !== (a = j.util.type(r)) || o[s(r)] ? "Array" !== a || o[s(r)] || ((o[s(r)] = !0), e(r, n, l, o)) : ((o[s(r)] = !0), e(r, n, null, o)));
                        }
                    },
                },
                plugins: {},
                highlightAll: function (e, t) {
                    j.highlightAllUnder(document, e, t);
                },
                highlightAllUnder: function (e, t, n) {
                    var i = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                    j.hooks.run("before-highlightall", i), (i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector))), j.hooks.run("before-all-elements-highlight", i);
                    for (var o, r = 0; (o = i.elements[r++]); ) j.highlightElement(o, !0 === t, i.callback);
                },
                highlightElement: function (e, t, n) {
                    var i = j.util.getLanguage(e),
                        o = j.languages[i];
                    j.util.setLanguage(e, i);
                    var r = e.parentElement;
                    r && "pre" === r.nodeName.toLowerCase() && j.util.setLanguage(r, i);
                    var a,
                        s = { element: e, language: i, grammar: o, code: e.textContent };
                    function l(e) {
                        (s.highlightedCode = e), j.hooks.run("before-insert", s), (s.element.innerHTML = s.highlightedCode), j.hooks.run("after-highlight", s), j.hooks.run("complete", s), n && n.call(s.element);
                    }
                    if ((j.hooks.run("before-sanity-check", s), (r = s.element.parentElement) && "pre" === r.nodeName.toLowerCase() && !r.hasAttribute("tabindex") && r.setAttribute("tabindex", "0"), !s.code))
                        return j.hooks.run("complete", s), void (n && n.call(s.element));
                    j.hooks.run("before-highlight", s),
                        s.grammar
                            ? t && c.Worker
                                ? (((a = new Worker(j.filename)).onmessage = function (e) {
                                      l(e.data);
                                  }),
                                  a.postMessage(JSON.stringify({ language: s.language, code: s.code, immediateClose: !0 })))
                                : l(j.highlight(s.code, s.grammar, s.language))
                            : l(j.util.encode(s.code));
                },
                highlight: function (e, t, n) {
                    var i = { code: e, grammar: t, language: n };
                    if ((j.hooks.run("before-tokenize", i), !i.grammar)) throw new Error('The language "' + i.language + '" has no grammar.');
                    return (i.tokens = j.tokenize(i.code, i.grammar)), j.hooks.run("after-tokenize", i), q.stringify(j.util.encode(i.tokens), i.language);
                },
                tokenize: function (e, t) {
                    var n = t.rest;
                    if (n) {
                        for (var i in n) t[i] = n[i];
                        delete t.rest;
                    }
                    var o = new r();
                    return (
                        T(o, o.head, e),
                        (function e(t, n, i, o, r, a) {
                            for (var s in i)
                                if (i.hasOwnProperty(s) && i[s]) {
                                    var l = i[s];
                                    l = Array.isArray(l) ? l : [l];
                                    for (var c = 0; c < l.length; ++c) {
                                        if (a && a.cause == s + "," + c) return;
                                        var u,
                                            d = l[c],
                                            h = d.inside,
                                            f = !!d.lookbehind,
                                            p = !!d.greedy,
                                            g = d.alias;
                                        p && !d.pattern.global && ((u = d.pattern.toString().match(/[imsuy]*$/)[0]), (d.pattern = RegExp(d.pattern.source, u + "g")));
                                        for (var m = d.pattern || d, v = o.next, y = r; v !== n.tail && !(a && y >= a.reach); y += v.value.length, v = v.next) {
                                            var b = v.value;
                                            if (n.length > t.length) return;
                                            if (!(b instanceof q)) {
                                                var w,
                                                    k = 1;
                                                if (p) {
                                                    if (!(w = N(m, y, t, f)) || w.index >= t.length) break;
                                                    var x = w.index,
                                                        E = w.index + w[0].length,
                                                        S = y;
                                                    for (S += v.value.length; S <= x; ) (v = v.next), (S += v.value.length);
                                                    if (((S -= v.value.length), (y = S), v.value instanceof q)) continue;
                                                    for (var L = v; L !== n.tail && (S < E || "string" == typeof L.value); L = L.next) k++, (S += L.value.length);
                                                    k--, (b = t.slice(y, S)), (w.index -= y);
                                                } else if (!(w = N(m, 0, b, f))) continue;
                                                var x = w.index,
                                                    _ = w[0],
                                                    A = b.slice(0, x),
                                                    F = b.slice(x + _.length),
                                                    C = y + b.length;
                                                a && C > a.reach && (a.reach = C);
                                                var z = v.prev;
                                                A && ((z = T(n, z, A)), (y += A.length)), D(n, z, k);
                                                var O,
                                                    I = new q(s, h ? j.tokenize(_, h) : _, g, _);
                                                (v = T(n, z, I)), F && T(n, v, F), 1 < k && ((O = { cause: s + "," + c, reach: C }), e(t, n, i, v.prev, y, O), a && O.reach > a.reach && (a.reach = O.reach));
                                            }
                                        }
                                    }
                                }
                        })(e, o, t, o.head, 0),
                        (function (e) {
                            var t = [],
                                n = e.head.next;
                            for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                            return t;
                        })(o)
                    );
                },
                hooks: {
                    all: {},
                    add: function (e, t) {
                        var n = j.hooks.all;
                        (n[e] = n[e] || []), n[e].push(t);
                    },
                    run: function (e, t) {
                        var n = j.hooks.all[e];
                        if (n && n.length) for (var i, o = 0; (i = n[o++]); ) i(t);
                    },
                },
                Token: q,
            };
        function q(e, t, n, i) {
            (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (i || "").length);
        }
        function N(e, t, n, i) {
            e.lastIndex = t;
            var o,
                r = e.exec(n);
            return r && i && r[1] && ((o = r[1].length), (r.index += o), (r[0] = r[0].slice(o))), r;
        }
        function r() {
            var e = { value: null, prev: null, next: null },
                t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
        }
        function T(e, t, n) {
            var i = t.next,
                o = { value: n, prev: t, next: i };
            return (t.next = o), (i.prev = o), e.length++, o;
        }
        function D(e, t, n) {
            for (var i = t.next, o = 0; o < n && i !== e.tail; o++) i = i.next;
            ((t.next = i).prev = t), (e.length -= o);
        }
        if (
            ((c.Prism = j),
            (q.stringify = function t(e, n) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    var i = "";
                    return (
                        e.forEach(function (e) {
                            i += t(e, n);
                        }),
                        i
                    );
                }
                var o = { type: e.type, content: t(e.content, n), tag: "span", classes: ["token", e.type], attributes: {}, language: n },
                    r = e.alias;
                r && (Array.isArray(r) ? Array.prototype.push.apply(o.classes, r) : o.classes.push(r)), j.hooks.run("wrap", o);
                var a = "";
                for (var s in o.attributes) a += " " + s + '="' + (o.attributes[s] || "").replace(/"/g, "&quot;") + '"';
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + a + ">" + o.content + "</" + o.tag + ">";
            }),
            !c.document)
        )
            return (
                c.addEventListener &&
                    (j.disableWorkerMessageHandler ||
                        c.addEventListener(
                            "message",
                            function (e) {
                                var t = JSON.parse(e.data),
                                    n = t.language,
                                    i = t.code,
                                    o = t.immediateClose;
                                c.postMessage(j.highlight(i, j.languages[n], n)), o && c.close();
                            },
                            !1
                        )),
                j
            );
        var i,
            o = j.util.currentScript();
        function a() {
            j.manual || j.highlightAll();
        }
        return (
            o && ((j.filename = o.src), o.hasAttribute("data-manual") && (j.manual = !0)),
            j.manual ||
                ("loading" === (i = document.readyState) || ("interactive" === i && o && o.defer)
                    ? document.addEventListener("DOMContentLoaded", a)
                    : window.requestAnimationFrame
                    ? window.requestAnimationFrame(a)
                    : window.setTimeout(a, 16)),
            j
        );
    })(e);
"undefined" != typeof module && module.exports && (module.exports = g),
    "undefined" != typeof global && (global.Prism = g),
    (g.languages.markup = {
        comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
        prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
                "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
                string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/,
            },
        },
        cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
                tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
                "special-attr": [],
                "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } },
                punctuation: /\/?>/,
                "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
        },
        entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i],
    }),
    (g.languages.markup.tag.inside["attr-value"].inside.entity = g.languages.markup.entity),
    (g.languages.markup.doctype.inside["internal-subset"].inside = g.languages.markup),
    g.hooks.add("wrap", function (e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(g.languages.markup.tag, "addInlined", {
        value: function (e, t) {
            var n = {};
            (n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: g.languages[t] }), (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var i = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
            i["language-" + t] = { pattern: /[\s\S]+/, inside: g.languages[t] };
            var o = {};
            (o[e] = {
                pattern: RegExp(
                    /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                        return e;
                    }),
                    "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: i,
            }),
                g.languages.insertBefore("markup", "cdata", o);
        },
    }),
    Object.defineProperty(g.languages.markup.tag, "addAttribute", {
        value: function (e, t) {
            g.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, "language-" + t], inside: g.languages[t] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] },
                    },
                },
            });
        },
    }),
    (g.languages.html = g.languages.markup),
    (g.languages.mathml = g.languages.markup),
    (g.languages.svg = g.languages.markup),
    (g.languages.xml = g.languages.extend("markup", {})),
    (g.languages.ssml = g.languages.xml),
    (g.languages.atom = g.languages.xml),
    (g.languages.rss = g.languages.xml),
    (function (e) {
        var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" },
                    keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
                },
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } },
            },
            selector: { pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"), lookbehind: !0 },
            string: { pattern: t, greedy: !0 },
            property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/,
        }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
        var n = e.languages.markup;
        n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
    })(g),
    (g.languages.clike = {
        comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/,
    }),
    (g.languages.javascript = g.languages.extend("clike", {
        "class-name": [g.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }],
        keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
            },
        ],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
            pattern: RegExp(
                /(^|[^\w$])/.source +
                    "(?:" +
                    /NaN|Infinity/.source +
                    "|" +
                    /0[bB][01]+(?:_[01]+)*n?/.source +
                    "|" +
                    /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                    "|" +
                    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                    "|" +
                    /\d+(?:_\d+)*n/.source +
                    "|" +
                    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
                    ")" +
                    /(?![\w$])/.source
            ),
            lookbehind: !0,
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    })),
    (g.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    g.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
                    /\//.source +
                    "(?:" +
                    /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
                    "|" +
                    /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
                    ")" +
                    /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: g.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ },
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
        },
        parameter: [
            { pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: g.languages.javascript },
            { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: g.languages.javascript },
            { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: g.languages.javascript },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: g.languages.javascript,
            },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    g.languages.insertBefore("javascript", "string", {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: g.languages.javascript },
                },
                string: /[\s\S]+/,
            },
        },
        "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" },
    }),
    g.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }),
    g.languages.markup &&
        (g.languages.markup.tag.addInlined("script", "javascript"),
        g.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
            "javascript"
        )),
    (g.languages.js = g.languages.javascript),
    (function () {
        var d, h, f, p, e;
        void 0 !== g &&
            "undefined" != typeof document &&
            (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            (d = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" }),
            (p = "pre[data-src]:not([" + (h = "data-src-status") + '="loaded"]):not([' + h + '="' + (f = "loading") + '"])'),
            g.hooks.add("before-highlightall", function (e) {
                e.selector += ", " + p;
            }),
            g.hooks.add("before-sanity-check", function (e) {
                var r,
                    t,
                    n,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u = e.element;
                u.matches(p) &&
                    ((e.code = ""),
                    u.setAttribute(h, f),
                    ((r = u.appendChild(document.createElement("CODE"))).textContent = "Loading…"),
                    (t = u.getAttribute("data-src")),
                    "none" === (i = e.language) && ((n = (/\.(\w+)$/.exec(t) || [, "none"])[1]), (i = d[n] || n)),
                    g.util.setLanguage(r, i),
                    g.util.setLanguage(u, i),
                    (o = g.plugins.autoloader) && o.loadLanguages(i),
                    (a = t),
                    (s = function (e) {
                        u.setAttribute(h, "loaded");
                        var t,
                            n,
                            i,
                            o = (function (e) {
                                var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
                                if (t) {
                                    var n = Number(t[1]),
                                        i = t[2],
                                        o = t[3];
                                    return i ? (o ? [n, Number(o)] : [n, void 0]) : [n, n];
                                }
                            })(u.getAttribute("data-range"));
                        o &&
                            ((t = e.split(/\r\n?|\n/g)),
                            (n = o[0]),
                            (i = null == o[1] ? t.length : o[1]),
                            n < 0 && (n += t.length),
                            (n = Math.max(0, Math.min(n - 1, t.length))),
                            i < 0 && (i += t.length),
                            (i = Math.max(0, Math.min(i, t.length))),
                            (e = t.slice(n, i).join("\n")),
                            u.hasAttribute("data-start") || u.setAttribute("data-start", String(n + 1))),
                            (r.textContent = e),
                            g.highlightElement(r);
                    }),
                    (l = function (e) {
                        u.setAttribute(h, "failed"), (r.textContent = e);
                    }),
                    (c = new XMLHttpRequest()).open("GET", a, !0),
                    (c.onreadystatechange = function () {
                        4 == c.readyState && (c.status < 400 && c.responseText ? s(c.responseText) : 400 <= c.status ? l("✖ Error " + c.status + " while fetching file: " + c.statusText) : l("✖ Error: File does not exist or is empty"));
                    }),
                    c.send(null));
            }),
            (e = !(g.plugins.fileHighlight = {
                highlight: function (e) {
                    for (var t, n = (e || document).querySelectorAll(p), i = 0; (t = n[i++]); ) g.highlightElement(t);
                },
            })),
            (g.fileHighlight = function () {
                e || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), (e = !0)), g.plugins.fileHighlight.highlight.apply(this, arguments);
            }));
    })(),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).reframe = t());
    })(this, function () {
        "use strict";
        return function (e, t) {
            var n,
                i,
                o = "string" == typeof e ? document.querySelectorAll(e) : e,
                r = t || "js-reframe";
            "length" in o || (o = [o]);
            for (var a = 0; a < o.length; a += 1) {
                var s = o[a];
                if (-1 !== s.className.split(" ").indexOf(r) || -1 < s.style.width.indexOf("%")) return;
                var l = s.getAttribute("height") || s.offsetHeight,
                    c = s.getAttribute("width") || s.offsetWidth,
                    u = (("string" == typeof l ? parseInt(l) : l) / ("string" == typeof c ? parseInt(c) : c)) * 100,
                    d = document.createElement("div");
                d.className = r;
                var h = d.style;
                (h.position = "relative"), (h.width = "100%"), (h.paddingTop = "".concat(u, "%"));
                var f = s.style;
                (f.position = "absolute"),
                    (f.width = "100%"),
                    (f.height = "100%"),
                    (f.left = "0"),
                    (f.top = "0"),
                    null !== (n = s.parentNode) && void 0 !== n && n.insertBefore(d, s),
                    null !== (i = s.parentNode) && void 0 !== i && i.removeChild(s),
                    d.appendChild(s);
            }
        };
    });
var $ = (function (n) {
    var i = {};
    function o(e) {
        if (i[e]) return i[e].exports;
        var t = (i[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    return (
        (o.m = n),
        (o.c = i),
        (o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (t, e) {
            if ((1 & e && (t = o(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var i in t)
                    o.d(
                        n,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return n;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = ""),
        o((o.s = 1))
    );
})([
    function (e, t, n) {
        "use strict";
        function ie(e) {
            return (ie =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var r, a, i, o, s, l;
        (i = "FlexSearch"),
            (o = (function r(a) {
                function d(e, t) {
                    var n = t ? t.id : e && e.id;
                    (this.id = n || 0 === n ? n : u++),
                        this.init(e, t),
                        i(this, "index", function () {
                            return this.a ? Object.keys(this.a.index[this.a.keys[0]].c) : Object.keys(this.c);
                        }),
                        i(this, "length", function () {
                            return this.index.length;
                        });
                }
                function h(e, t, n, i) {
                    return this.u !== this.g && ((this.o = this.o.concat(n)), this.u++, i && this.o.length >= i && (this.u = this.g), this.u === this.g && (this.cache && this.j.set(t, this.o), this.F && this.F(this.o))), this;
                }
                function O(e, t) {
                    for (var n = e.length, i = H(t), o = [], r = 0, a = 0; r < n; r++) {
                        var s = e[r];
                        ((i && t(s)) || (!i && !t[s])) && (o[a++] = s);
                    }
                    return o;
                }
                function I(e, t, n, i, o, r, a, s, l, c) {
                    var u;
                    if (((n = N(n, a ? 0 : o, s, r, t, l, c)), s && ((s = n.page), (u = n.next), (n = n.result)), a)) t = this.where(a, null, o, n);
                    else {
                        for (t = n, n = this.l, o = t.length, r = Array(o), a = 0; a < o; a++) r[a] = n[t[a]];
                        t = r;
                    }
                    return (n = t), i && (H(i) || (i = 1 < (v = i.split(":")).length ? g : ((v = v[0]), p)), n.sort(i)), (n = q(s, u, n)), this.cache && this.j.set(e, n), n;
                }
                function i(e, t, n) {
                    Object.defineProperty(e, t, { get: n });
                }
                function f(e) {
                    return new RegExp(e, "g");
                }
                function o(e, t) {
                    for (var n = 0; n < t.length; n += 2) e = e.replace(t[n], t[n + 1]);
                    return e;
                }
                function x(e, t, n, i, o, r, a, s) {
                    return t[n] ? t[n] : ((o = o ? (s - (a || s / 1.5)) * r + (a || s / 1.5) * o : r), a <= (t[n] = o) && ((e = (e = e[s - ((o + 0.5) >> 0)])[n] || (e[n] = []))[e.length] = i), o);
                }
                function c(e, t) {
                    if (e)
                        for (var n = Object.keys(e), i = 0, o = n.length; i < o; i++) {
                            var r = n[i],
                                a = e[r];
                            if (a)
                                for (var s = 0, l = a.length; s < l; s++) {
                                    if (a[s] === t) {
                                        1 === l ? delete e[r] : a.splice(s, 1);
                                        break;
                                    }
                                    M(a[s]) && c(a[s], t);
                                }
                        }
                }
                function s(e) {
                    for (var t = "", n = "", i = "", o = 0; o < e.length; o++) {
                        var r = e[o];
                        r !== n &&
                            (o && "h" === r
                                ? ((i = "a" === i || "e" === i || "i" === i || "o" === i || "u" === i || "y" === i), ((("a" !== n && "e" !== n && "i" !== n && "o" !== n && "u" !== n && "y" !== n) || !i) && " " !== n) || (t += r))
                                : (t += r)),
                            (i = o === e.length - 1 ? "" : e[o + 1]),
                            (n = r);
                    }
                    return t;
                }
                function j(e, t) {
                    return (e = e.length - t.length) < 0 ? 1 : e ? -1 : 0;
                }
                function p(e, t) {
                    return (e = e[v]) < (t = t[v]) ? -1 : t < e ? 1 : 0;
                }
                function g(e, t) {
                    for (var n = v.length, i = 0; i < n; i++) (e = e[v[i]]), (t = t[v[i]]);
                    return e < t ? -1 : t < e ? 1 : 0;
                }
                function q(e, t, n) {
                    return e ? { page: e, next: t ? "" + t : null, result: n } : n;
                }
                function N(e, t, n, i, o, r, a) {
                    var s,
                        l = [];
                    S = !0 === n ? ((n = "0"), "") : n && n.split(":");
                    var c = e.length;
                    if (1 < c) {
                        var u,
                            d,
                            h,
                            f,
                            p,
                            g,
                            m,
                            v,
                            y,
                            b = $(),
                            w = [],
                            k = 0,
                            x = !0,
                            E = 0,
                            S = S && (2 === S.length ? ((m = S), !1) : (v = parseInt(S[0], 10)));
                        if (a) {
                            for (u = $(); k < c; k++)
                                if ("not" === o[k]) for (h = (d = e[k]).length, A = 0; A < h; A++) u["@" + d[A]] = 1;
                                else g = k + 1;
                            if (P(g)) return q(n, s, l);
                            k = 0;
                        } else p = T(o) && o;
                        for (; k < c; k++) {
                            var L = k === (g || c) - 1;
                            if (!p || !k)
                                if ((A = p || (o && o[k])) && "and" !== A) {
                                    if ("or" !== A) continue;
                                    y = !1;
                                } else y = r = !0;
                            if ((h = (d = e[k]).length)) {
                                if (x) {
                                    if (!f) {
                                        f = d;
                                        continue;
                                    }
                                    for (var _ = f.length, A = 0; A < _; A++) {
                                        var F = "@" + (x = f[A]);
                                        (a && u[F]) || ((b[F] = 1), r || (l[E++] = x));
                                    }
                                    (f = null), (x = !1);
                                }
                                for (F = !1, A = 0; A < h; A++) {
                                    var C = "@" + (_ = d[A]),
                                        z = r ? b[C] || 0 : k;
                                    if (!((!z && !i) || (a && u[C]) || (!r && b[C])))
                                        if (z === k) {
                                            if (L) {
                                                if ((!v || --v < E) && ((l[E++] = _), t && E === t)) return q(n, E + (S || 0), l);
                                            } else b[C] = k + 1;
                                            F = !0;
                                        } else i && ((C = w[z] || (w[z] = []))[C.length] = _);
                                }
                                if (y && !F && !i) break;
                            } else if (y && !i) return q(n, s, d);
                        }
                        if (f)
                            if (((k = f.length), a)) for (A = S ? parseInt(S, 10) : 0; A < k; A++) u["@" + (e = f[A])] || (l[E++] = e);
                            else l = f;
                        if (i)
                            for (E = l.length, A = m ? ((k = parseInt(m[0], 10) + 1), parseInt(m[1], 10) + 1) : ((k = w.length), 0); k--; )
                                if ((_ = w[k])) {
                                    for (h = _.length; A < h; A++) if (((i = _[A]), (!a || !u["@" + i]) && ((l[E++] = i), t && E === t))) return q(n, k + ":" + A, l);
                                    A = 0;
                                }
                    } else !c || (o && "not" === o[0]) || ((l = e[0]), (S = S && parseInt(S[0], 10)));
                    return t && ((a = l.length), S && a < S && (S = 0), (s = (S = S || 0) + t) < a ? (l = l.slice(S, s)) : ((s = 0), S && (l = l.slice(S)))), q(n, s, l);
                }
                function T(e) {
                    return "string" == typeof e;
                }
                function D(e) {
                    return e.constructor === Array;
                }
                function H(e) {
                    return "function" == typeof e;
                }
                function M(e) {
                    return "object" === ie(e);
                }
                function P(e) {
                    return void 0 === e;
                }
                function E(e) {
                    for (var t = Array(e), n = 0; n < e; n++) t[n] = $();
                    return t;
                }
                function $() {
                    return Object.create(null);
                }
                function l() {
                    var n, i;
                    self.onmessage = function (e) {
                        var t;
                        (e = e.data) &&
                            (e.search
                                ? ((t = i.search(e.content, e.threshold ? { limit: e.limit, threshold: e.threshold, where: e.where } : e.limit)), self.postMessage({ id: n, content: e.content, limit: e.limit, result: t }))
                                : e.add
                                ? i.add(e.id, e.content)
                                : e.update
                                ? i.update(e.id, e.content)
                                : e.remove
                                ? i.remove(e.id)
                                : e.clear
                                ? i.clear()
                                : e.info
                                ? (((e = i.info()).worker = n), console.log(e))
                                : e.register &&
                                  ((n = e.id),
                                  (e.options.cache = !1),
                                  (e.options.async = !1),
                                  (e.options.worker = !1),
                                  (i = new (i = new Function(e.register.substring(e.register.indexOf("{") + 1, e.register.lastIndexOf("}")))())(e.options))));
                    };
                }
                function m(e, t, n, i) {
                    e = a(
                        "flexsearch",
                        "id" + e,
                        l,
                        function (e) {
                            (e = e.data) && e.result && i(e.id, e.content, e.result, e.limit, e.where, e.cursor, e.suggest);
                        },
                        t
                    );
                    var o = r.toString();
                    return (n.id = t), e.postMessage({ register: o, options: n, id: t }), e;
                }
                var v,
                    y = { encode: "icase", f: "forward", split: /\W+/, cache: !1, async: !1, g: !1, D: !1, a: !1, b: 9, threshold: 0, depth: 0 },
                    b = {
                        memory: { encode: "extra", f: "strict", threshold: 0, b: 1 },
                        speed: { encode: "icase", f: "strict", threshold: 1, b: 3, depth: 2 },
                        match: { encode: "extra", f: "full", threshold: 1, b: 3 },
                        score: { encode: "extra", f: "strict", threshold: 1, b: 9, depth: 4 },
                        balance: { encode: "balance", f: "strict", threshold: 0, b: 3, depth: 3 },
                        fast: { encode: "icase", f: "strict", threshold: 8, b: 9, depth: 1 },
                    },
                    n = [],
                    u = 0,
                    w = {},
                    k = {};
                (d.create = function (e, t) {
                    return new d(e, t);
                }),
                    (d.registerMatcher = function (e) {
                        for (var t in e) e.hasOwnProperty(t) && n.push(f(t), e[t]);
                        return this;
                    }),
                    (d.registerEncoder = function (e, t) {
                        return (ee[e] = t.bind(ee)), this;
                    }),
                    (d.registerLanguage = function (e, t) {
                        return (w[e] = t.filter), (k[e] = t.stemmer), this;
                    }),
                    (d.encode = function (e, t) {
                        return ee[e](t);
                    }),
                    (d.prototype.init = function (e, t) {
                        var n, i, o;
                        if (((this.v = []), t ? ((n = t.preset), (e = t)) : (n = (e = e || y).preset), (t = {}), T(e) ? ((t = b[e]), (e = {})) : n && (t = b[n]), (n = e.worker)))
                            if ("undefined" == typeof Worker) (e.worker = !1), (this.m = null);
                            else {
                                var r = parseInt(n, 10) || 4;
                                (this.C = -1), (this.u = 0), (this.o = []), (this.F = null), (this.m = Array(r));
                                for (var a = 0; a < r; a++) this.m[a] = m(this.id, a, e, h.bind(this));
                            }
                        if (
                            ((this.f = e.tokenize || t.f || this.f || y.f),
                            (this.split = P((n = e.split)) ? this.split || y.split : T(n) ? f(n) : n),
                            (this.D = e.rtl || this.D || y.D),
                            (this.async = "undefined" == typeof Promise || P((n = e.async)) ? this.async || y.async : n),
                            (this.g = P((n = e.worker)) ? this.g || y.g : n),
                            (this.threshold = P((n = e.threshold)) ? t.threshold || this.threshold || y.threshold : n),
                            (this.b = P((n = e.resolution)) ? (n = t.b || this.b || y.b) : n),
                            n <= this.threshold && (this.b = this.threshold + 1),
                            (this.depth = "strict" !== this.f || P((n = e.depth)) ? t.depth || this.depth || y.depth : n),
                            (this.w = ((n = P((n = e.encode)) ? t.encode || y.encode : n) && ee[n] && ee[n].bind(ee)) || (H(n) ? n : this.w || !1)),
                            (n = e.matcher) && this.addMatcher(n),
                            (n = (t = e.lang) || e.filter))
                        ) {
                            if ((T(n) && (n = w[n]), D(n))) {
                                (r = this.w), (a = $());
                                for (var s = 0; s < n.length; s++) {
                                    var l = r ? r(n[s]) : n[s];
                                    a[l] = 1;
                                }
                                n = a;
                            }
                            this.filter = n;
                        }
                        if ((n = t || e.stemmer)) {
                            for (i in ((t = T(n) ? k[n] : n), (r = this.w), (a = []), t)) t.hasOwnProperty(i) && ((s = r ? r(i) : i), a.push(f(s + "($|\\W)"), r ? r(t[i]) : t[i]));
                            this.stemmer = i = a;
                        }
                        if (
                            ((this.a = a = (n = e.doc)
                                ? (function e(t) {
                                      var n,
                                          i = $();
                                      for (var o in t) {
                                          t.hasOwnProperty(o) && (D((n = t[o])) ? (i[o] = n.slice(0)) : M(n) ? (i[o] = e(n)) : (i[o] = n));
                                      }
                                      return i;
                                  })(n)
                                : this.a || y.a),
                            (this.i = E(this.b - (this.threshold || 0))),
                            (this.h = $()),
                            (this.c = $()),
                            a)
                        ) {
                            if (((this.l = $()), (e.doc = null), (i = a.index = {}), (t = a.keys = []), (r = a.field), (s = a.tag), (l = a.store), D(a.id) || (a.id = a.id.split(":")), l)) {
                                var c = $();
                                if (T(l)) c[l] = 1;
                                else if (D(l)) for (var u = 0; u < l.length; u++) c[l[u]] = 1;
                                else M(l) && (c = l);
                                a.store = c;
                            }
                            if (s) {
                                if (((this.G = $()), (l = $()), r))
                                    if (T(r)) l[r] = e;
                                    else if (D(r)) for (c = 0; c < r.length; c++) l[r[c]] = e;
                                    else M(r) && (l = r);
                                for (D(s) || (a.tag = s = [s]), r = 0; r < s.length; r++) this.G[s[r]] = $();
                                (this.I = s), (r = l);
                            }
                            if (r) for (D(r) || (M(r) ? ((o = r), (a.field = r = Object.keys(r))) : (a.field = r = [r])), a = 0; a < r.length; a++) D((s = r[a])) || (o && (e = o[s]), (t[a] = s), (r[a] = s.split(":"))), (i[s] = new d(e));
                            e.doc = n;
                        }
                        return (this.B = !0), (this.j = !!(this.cache = n = P((n = e.cache)) ? this.cache || y.cache : n) && new te(n)), this;
                    }),
                    (d.prototype.encode = function (e) {
                        return e && (n.length && (e = o(e, n)), this.v.length && (e = o(e, this.v)), this.w && (e = this.w(e)), this.stemmer && (e = o(e, this.stemmer))), e;
                    }),
                    (d.prototype.addMatcher = function (e) {
                        var t = this.v;
                        for (var n in e) e.hasOwnProperty(n) && t.push(f(n), e[n]);
                        return this;
                    }),
                    (d.prototype.add = function (t, n, e, i, o) {
                        if (this.a && M(t)) return this.A("add", t, n);
                        if (n && T(n) && (t || 0 === t)) {
                            var r = "@" + t;
                            if (this.c[r] && !i) return this.update(t, n);
                            if (this.g) return ++this.C >= this.m.length && (this.C = 0), this.m[this.C].postMessage({ add: !0, id: t, content: n }), (this.c[r] = "" + this.C), e && e(), this;
                            if (!o) {
                                if (this.async && "function" != typeof importScripts) {
                                    var a = this,
                                        r = new Promise(function (e) {
                                            setTimeout(function () {
                                                a.add(t, n, null, i, !0), (a = null), e();
                                            });
                                        });
                                    return e ? (r.then(e), this) : r;
                                }
                                if (e) return this.add(t, n, null, i, !0), e(), this;
                            }
                            if (!(n = this.encode(n)).length) return this;
                            (o = H((e = this.f)) ? e(n) : n.split(this.split)), this.filter && (o = O(o, this.filter));
                            var s = $();
                            s._ctx = $();
                            for (var l = o.length, c = this.threshold, u = this.depth, d = this.b, h = this.i, f = this.D, p = 0; p < l; p++) {
                                var g = o[p];
                                if (g) {
                                    var m = g.length,
                                        v = (f ? p + 1 : l - p) / l,
                                        y = "";
                                    switch (e) {
                                        case "reverse":
                                        case "both":
                                            for (var b = m; --b; ) x(h, s, (y = g[b] + y), t, f ? 1 : (m - b) / m, v, c, d - 1);
                                            y = "";
                                        case "forward":
                                            for (b = 0; b < m; b++) x(h, s, (y += g[b]), t, f ? (b + 1) / m : 1, v, c, d - 1);
                                            break;
                                        case "full":
                                            for (b = 0; b < m; b++) for (var w = (f ? b + 1 : m - b) / m, k = m; b < k; k--) x(h, s, (y = g.substring(b, k)), t, w, v, c, d - 1);
                                            break;
                                        default:
                                            if (((m = x(h, s, g, t, 1, v, c, d - 1)), u && 1 < l && c <= m))
                                                for (m = s._ctx[g] || (s._ctx[g] = $()), g = this.h[g] || (this.h[g] = E(d - (c || 0))), (v = p - u) < 0 && (v = 0), (y = p + u + 1) > l && (y = l); v < y; v++)
                                                    v !== p && x(g, m, o[v], t, 0, d - (v < p ? p - v : v - p), c, d - 1);
                                    }
                                }
                            }
                            (this.c[r] = 1), (this.B = !1);
                        }
                        return this;
                    }),
                    (d.prototype.A = function (e, t, n) {
                        if (D(t)) {
                            var i = t.length;
                            if (i--) {
                                for (var o = 0; o < i; o++) this.A(e, t[o]);
                                return this.A(e, t[i], n);
                            }
                        } else {
                            for (var r, a = this.a.index, s = this.a.keys, l = this.a.tag, o = this.a.store, c = this.a.id, i = t, u = 0; u < c.length; u++) i = i[c[u]];
                            if ("remove" === e && (delete this.l[i], (c = s.length), c--)) {
                                for (t = 0; t < c; t++) a[s[t]].remove(i);
                                return a[s[c]].remove(i, n);
                            }
                            if (l) {
                                for (r = 0; r < l.length; r++) {
                                    for (var d = l[r], h = t, c = d.split(":"), u = 0; u < c.length; u++) h = h[c[u]];
                                    h = "@" + h;
                                }
                                r = (r = this.G[d])[h] || (r[h] = []);
                            }
                            for (var f = 0, p = (c = this.a.field).length; f < p; f++) {
                                for (d = c[f], l = t, h = 0; h < d.length; h++) l = l[d[h]];
                                (d = a[s[f]]), (h = "add" === e ? d.add : d.update), f === p - 1 ? h.call(d, i, l, n) : h.call(d, i, l);
                            }
                            if (o) {
                                for (n = Object.keys(o), e = $(), a = 0; a < n.length; a++)
                                    if (o[(s = n[a])]) {
                                        s = s.split(":");
                                        var g = void 0,
                                            m = void 0;
                                        for (c = 0; c < s.length; c++) (g = (g || t)[(l = s[c])]), (m = (m || e)[l] = g);
                                    }
                                t = e;
                            }
                            r && (r[r.length] = t), (this.l[i] = t);
                        }
                        return this;
                    }),
                    (d.prototype.update = function (e, t, n) {
                        return this.a && M(e) ? this.A("update", e, t) : (this.c["@" + e] && T(t) && (this.remove(e), this.add(e, t, n, !0)), this);
                    }),
                    (d.prototype.remove = function (t, e, n) {
                        if (this.a && M(t)) return this.A("remove", t, e);
                        var i = "@" + t;
                        if (this.c[i]) {
                            if (this.g) return this.m[this.c[i]].postMessage({ remove: !0, id: t }), delete this.c[i], e && e(), this;
                            if (!n) {
                                if (this.async && "function" != typeof importScripts) {
                                    var o = this,
                                        i = new Promise(function (e) {
                                            setTimeout(function () {
                                                o.remove(t, null, !0), (o = null), e();
                                            });
                                        });
                                    return e ? (i.then(e), this) : i;
                                }
                                if (e) return this.remove(t, null, !0), e(), this;
                            }
                            for (e = 0; e < this.b - (this.threshold || 0); e++) c(this.i[e], t);
                            this.depth && c(this.h, t), delete this.c[i], (this.B = !1);
                        }
                        return this;
                    }),
                    (d.prototype.search = function (n, i, e, t) {
                        if (M(i)) {
                            if (D(i)) for (var o = 0; o < i.length; o++) i[o].query = n;
                            else i.query = n;
                            (n = i), (i = 1e3);
                        } else i && H(i) ? ((e = i), (i = 1e3)) : i || 0 === i || (i = 1e3);
                        if (!this.g) {
                            var r,
                                a,
                                s,
                                l = [],
                                c = n;
                            if ((M(n) && !D(n) && (e || ((e = n.callback) && (c.callback = null)), (r = n.sort), (a = n.page), (i = n.limit), (w = n.threshold), (s = n.suggest), (n = n.query)), this.a)) {
                                w = this.a.index;
                                var u,
                                    d,
                                    h = c.where,
                                    f = c.bool || "or",
                                    p = c.field,
                                    g = f;
                                if (p) D(p) || (p = [p]);
                                else if (D(c)) for (var m = c, p = [], g = [], v = 0; v < c.length; v++) (o = (t = c[v]).bool || f), (p[v] = t.field), "not" === (g[v] = o) ? (u = !0) : "and" === o && (d = !0);
                                else p = this.a.keys;
                                for (f = p.length, v = 0; v < f; v++) m && (c = m[v]), a && !T(c) && ((c.page = null), (c.limit = 0)), (l[v] = w[p[v]].search(c, 0));
                                if (e) return e(I.call(this, n, g, l, r, i, s, h, a, d, u));
                                if (this.async) {
                                    var y = this;
                                    return new Promise(function (t) {
                                        Promise.all(l).then(function (e) {
                                            t(I.call(y, n, g, e, r, i, s, h, a, d, u));
                                        });
                                    });
                                }
                                return I.call(this, n, g, l, r, i, s, h, a, d, u);
                            }
                            if (((w = w || this.threshold || 0), !t)) {
                                if (this.async && "function" != typeof importScripts) {
                                    var b = this,
                                        w = new Promise(function (e) {
                                            setTimeout(function () {
                                                e(b.search(c, i, null, !0)), (b = null);
                                            });
                                        });
                                    return e ? (w.then(e), this) : w;
                                }
                                if (e) return e(this.search(c, i, null, !0)), this;
                            }
                            if (!n || !T(n)) return l;
                            if (((c = n), this.cache))
                                if (this.B) {
                                    if ((e = this.j.get(n))) return e;
                                } else this.j.clear(), (this.B = !0);
                            if (!(c = this.encode(c)).length) return l;
                            (e = H((e = this.f)) ? e(c) : c.split(this.split)), this.filter && (e = O(e, this.filter)), (m = e.length), (t = !0), (o = []);
                            var k = $(),
                                x = 0;
                            if ((1 < m && (this.depth && "strict" === this.f ? (f = !0) : e.sort(j)), !f || (v = this.h)))
                                for (var E = this.b; x < m; x++) {
                                    var S = e[x];
                                    if (S) {
                                        if (f) {
                                            if (!p)
                                                if (v[S]) k[(p = S)] = 1;
                                                else if (!s) return l;
                                            if (s && x === m - 1 && !o.length) (f = !1), (k[(S = p || S)] = 0);
                                            else if (!p) continue;
                                        }
                                        if (!k[S]) {
                                            var L = [],
                                                _ = !1,
                                                A = 0,
                                                F = f ? v[p] : this.i;
                                            if (F) for (var C = void 0, z = 0; z < E - w; z++) (C = F[z] && F[z][S]) && ((L[A++] = C), (_ = !0));
                                            if (_) (p = S), (o[o.length] = 1 < A ? L.concat.apply([], L) : L[0]);
                                            else if (!s) {
                                                t = !1;
                                                break;
                                            }
                                            k[S] = 1;
                                        }
                                    }
                                }
                            else t = !1;
                            return t && (l = N(o, i, a, s)), this.cache && this.j.set(n, l), l;
                        }
                        (this.F = e), (this.u = 0), (this.o = []);
                        for (var w = 0; w < this.g; w++) this.m[w].postMessage({ search: !0, limit: i, content: n });
                    }),
                    (d.prototype.find = function (e, t) {
                        return this.where(e, t, 1)[0] || null;
                    }),
                    (d.prototype.where = function (e, t, n, i) {
                        var o,
                            r,
                            a = this.l,
                            s = [],
                            l = 0;
                        if (M(e)) {
                            n = n || t;
                            var c = Object.keys(e),
                                u = c.length,
                                d = !1;
                            if (1 === u && "id" === c[0]) return [a[e.id]];
                            if ((o = this.I) && !i)
                                for (var h = 0; h < o.length; h++) {
                                    var f = o[h],
                                        p = e[f];
                                    if (!P(p)) {
                                        if (((r = this.G[f]["@" + p]), 0 == --u)) return r;
                                        c.splice(c.indexOf(f), 1), delete e[f];
                                        break;
                                    }
                                }
                            for (o = Array(u), h = 0; h < u; h++) o[h] = c[h].split(":");
                        } else {
                            if (H(e)) {
                                for (n = (t = i || Object.keys(a)).length, c = 0; c < n; c++) e((u = a[t[c]])) && (s[l++] = u);
                                return s;
                            }
                            if (P(t)) return [a[e]];
                            if ("id" === e) return [a[t]];
                            (c = [e]), (u = 1), (o = [e.split(":")]), (d = !0);
                        }
                        for (h = (i = r || i || Object.keys(a)).length, f = 0; f < h; f++) {
                            p = r ? i[f] : a[i[f]];
                            for (var g = !0, m = 0; m < u; m++) {
                                d || (t = e[c[m]]);
                                var v = o[m],
                                    y = v.length,
                                    b = p;
                                if (1 < y) for (var w = 0; w < y; w++) b = b[v[w]];
                                else b = b[v[0]];
                                if (b !== t) {
                                    g = !1;
                                    break;
                                }
                            }
                            if (g && ((s[l++] = p), n && l === n)) break;
                        }
                        return s;
                    }),
                    (d.prototype.info = function () {
                        if (!this.g)
                            return {
                                id: this.id,
                                items: this.length,
                                cache: !(!this.cache || !this.cache.s) && this.cache.s.length,
                                matcher: n.length + (this.v ? this.v.length : 0),
                                worker: this.g,
                                threshold: this.threshold,
                                depth: this.depth,
                                resolution: this.b,
                                contextual: this.depth && "strict" === this.f,
                            };
                        for (var e = 0; e < this.g; e++) this.m[e].postMessage({ info: !0, id: this.id });
                    }),
                    (d.prototype.clear = function () {
                        return this.destroy().init();
                    }),
                    (d.prototype.destroy = function () {
                        if ((this.cache && (this.j.clear(), (this.j = null)), (this.i = this.h = this.c = null), this.a)) {
                            for (var e = this.a.keys, t = 0; t < e.length; t++) this.a.index[e[t]].destroy();
                            this.a = this.l = null;
                        }
                        return this;
                    }),
                    (d.prototype.export = function (e) {
                        var t = !e || P(e.serialize) || e.serialize;
                        if (this.a) {
                            var n = !e || P(e.doc) || e.doc,
                                i = !e || P(e.index) || e.index;
                            e = [];
                            var o = 0;
                            if (i)
                                for (i = this.a.keys; o < i.length; o++) {
                                    var r = this.a.index[i[o]];
                                    e[o] = [r.i, r.h, Object.keys(r.c)];
                                }
                            n && (e[o] = this.l);
                        } else e = [this.i, this.h, Object.keys(this.c)];
                        return t && (e = JSON.stringify(e)), e;
                    }),
                    (d.prototype.import = function (e, t) {
                        (t && !P(t.serialize) && !t.serialize) || (e = JSON.parse(e));
                        var n = $();
                        if (this.a) {
                            var i = !t || P(t.doc) || t.doc,
                                o = 0;
                            if (!t || P(t.index) || t.index) {
                                for (var r = (t = this.a.keys).length, a = e[0][2]; o < a.length; o++) n[a[o]] = 1;
                                for (o = 0; o < r; o++) {
                                    a = this.a.index[t[o]];
                                    var s = e[o];
                                    s && ((a.i = s[0]), (a.h = s[1]), (a.c = n));
                                }
                            }
                            i && (this.l = M(i) ? i : e[o]);
                        } else {
                            for (i = e[2], o = 0; o < i.length; o++) n[i[o]] = 1;
                            (this.i = e[0]), (this.h = e[1]), (this.c = n);
                        }
                    });
                var S,
                    e,
                    t,
                    L,
                    _,
                    A,
                    F,
                    C,
                    z,
                    B,
                    R,
                    W,
                    U,
                    G,
                    Z,
                    J,
                    Y,
                    V,
                    X,
                    K,
                    Q =
                        ((e = f("\\s+")),
                        (t = f("[^a-z0-9 ]")),
                        (L = [f("[-/]"), " ", t, "", e, " "]),
                        function (e) {
                            return s(o(e.toLowerCase(), L));
                        }),
                    ee = {
                        icase: function (e) {
                            return e.toLowerCase();
                        },
                        simple:
                            ((Y = f("\\s+")),
                            (V = f("[^a-z0-9 ]")),
                            (X = f("[-/]")),
                            (K = [f("[àáâãäå]"), "a", f("[èéêë]"), "e", f("[ìíîï]"), "i", f("[òóôõöő]"), "o", f("[ùúûüű]"), "u", f("[ýŷÿ]"), "y", f("ñ"), "n", f("[çc]"), "k", f("ß"), "s", f(" & "), " and ", X, " ", V, "", Y, " "]),
                            function (e) {
                                return " " === (e = o(e.toLowerCase(), K)) ? "" : e;
                            }),
                        advanced:
                            ((_ = f("ae")),
                            (A = f("ai")),
                            (F = f("ay")),
                            (C = f("ey")),
                            (z = f("oe")),
                            (B = f("ue")),
                            (R = f("ie")),
                            (W = f("sz")),
                            (U = f("zs")),
                            (G = f("ck")),
                            (Z = f("cc")),
                            (J = [_, "a", A, "ei", F, "ei", C, "ei", z, "o", B, "u", R, "i", W, "s", U, "s", f("sh"), "s", G, "k", Z, "k", f("th"), "t", f("dt"), "t", f("ph"), "f", f("pf"), "f", f("ou"), "o", f("uo"), "u"]),
                            function (e, t) {
                                return e && (2 < (e = this.simple(e)).length && (e = o(e, J)), t || (1 < e.length && (e = s(e)))), e;
                            }),
                        extra:
                            ((S = [f("p"), "b", f("z"), "s", f("[cgq]"), "k", f("n"), "m", f("d"), "t", f("[vw]"), "f", f("[aeiouy]"), ""]),
                            function (e) {
                                if (!e) return e;
                                if (1 < (e = this.advanced(e, !0)).length) {
                                    e = e.split(" ");
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        1 < n.length && (e[t] = n[0] + o(n.substring(1), S));
                                    }
                                    e = s((e = e.join(" ")));
                                }
                                return e;
                            }),
                        balance: Q,
                    },
                    te =
                        ((ne.prototype.clear = function () {
                            (this.cache = $()), (this.count = $()), (this.index = $()), (this.s = []);
                        }),
                        (ne.prototype.set = function (e, t) {
                            var n, i;
                            this.H && P(this.cache[e])
                                ? ((n = this.s.length) === this.H && (n--, (i = this.s[n]), delete this.cache[i], delete this.count[i], delete this.index[i]),
                                  (this.index[e] = n),
                                  (this.s[n] = e),
                                  (this.count[e] = -1),
                                  (this.cache[e] = t),
                                  this.get(e))
                                : (this.cache[e] = t);
                        }),
                        (ne.prototype.get = function (e) {
                            var t = this.cache[e];
                            if (this.H && t) {
                                var n = ++this.count[e],
                                    i = this.index,
                                    o = i[e];
                                if (0 < o) {
                                    for (var r = this.s, a = o; this.count[r[--o]] <= n && -1 !== o; );
                                    if (++o !== a) {
                                        for (n = a; o < n; n--) (a = r[n - 1]), (i[(r[n] = a)] = n);
                                        i[(r[o] = e)] = o;
                                    }
                                }
                            }
                            return t;
                        }),
                        ne);
                function ne(e) {
                    this.clear(), (this.H = !0 !== e && e);
                }
                return d;
            })(
                ((r = {}),
                (a = "undefined" != typeof Blob && "undefined" != typeof URL && URL.createObjectURL),
                function (e, t, n, i, o) {
                    return (n = a ? URL.createObjectURL(new Blob(["(" + n.toString() + ")()"], { type: "text/javascript" })) : e + ".min.js"), r[(e += "-" + t)] || (r[e] = []), (r[e][o] = new Worker(n)), (r[e][o].onmessage = i), r[e][o];
                })
            )),
            (l = (s = this).define) && l.amd
                ? l([], function () {
                      return o;
                  })
                : (l = s.modules)
                ? (l[i.toLowerCase()] = o)
                : "object" === ie(t)
                ? (e.exports = o)
                : (s[i] = o);
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "default", function () {
                return d;
            });
        var i = n(0),
            a = n.n(i);
        function s(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            (o = !0), (r = e);
                        } finally {
                            try {
                                i || null == s.return || s.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return n;
                    }
                })(e, t) ||
                (function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                    }
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var l,
            c,
            u,
            d =
                ((c = h),
                (u = [
                    {
                        key: "initConfig",
                        value: function (e) {
                            for (var n = this, t = 0, i = Object.entries(e); t < i.length; t++) {
                                var o = s(i[t], 2),
                                    r = o[0],
                                    a = o[1];
                                this.config[r] = a;
                            }
                            Array.isArray(this.config.inputId) || (this.config.inputId = [this.config.inputId]),
                                Array.isArray(this.config.outputId) || (this.config.outputId = [this.config.outputId]),
                                (this.config.searchOptions.limit = this.config.limit),
                                (this.originalPostsFields = this.config.postsFields),
                                this.config.postsFields.includes("updated_at") || this.config.postsFields.push("updated_at"),
                                this.config.inputId &&
                                    0 < this.config.inputId.length &&
                                    ((this.searchBarEls = []),
                                    this.config.inputId.forEach(function (e) {
                                        var t = document.getElementById(e);
                                        t ? (n.searchBarEls.push(t), n.addSearchListeners(t)) : n.error("Enable to find the input element #".concat(e, ", please check your configuration"));
                                    })),
                                this.config.outputId &&
                                    0 < this.config.outputId.length &&
                                    ((this.searchResultEls = []),
                                    this.config.outputId.forEach(function (e) {
                                        var t = document.getElementById(e);
                                        t ? n.searchResultEls.push(t) : n.error("Enable to find the output element #".concat(e, ", please check your configuration"));
                                    })),
                                (this.index = this.getNewSearchIndex());
                        },
                    },
                    {
                        key: "addSearchListeners",
                        value: function (t) {
                            var n = this,
                                e = t.closest("form");
                            switch (
                                (e &&
                                    e.addEventListener("submit", function (e) {
                                        e.preventDefault();
                                    }),
                                this.config.searchOn)
                            ) {
                                case "keyup":
                                    t.addEventListener("keyup", function () {
                                        var e = t.value.toLowerCase();
                                        n.search(e);
                                    });
                                    break;
                                case "submit":
                                    e.addEventListener("submit", function () {
                                        var e = t.value.toLowerCase();
                                        n.search(e);
                                    });
                                    break;
                                case !1:
                                case "none":
                                    break;
                                default:
                                    this.error('Unknown "searchOn" option: \''.concat(this.config.searchOn, "'"));
                            }
                        },
                    },
                    {
                        key: "triggerDataLoad",
                        value: function () {
                            var t = this;
                            switch (this.config.loadOn) {
                                case "focus":
                                    this.searchBarEls.forEach(function (e) {
                                        e.addEventListener("focus", function () {
                                            t.loadData();
                                        });
                                    });
                                    break;
                                case "page":
                                    window.addEventListener("load", function () {
                                        t.loadData();
                                    });
                                    break;
                                case !1:
                                case "none":
                                    break;
                                default:
                                    this.error('Unknown "loadOn" option: \''.concat(this.config.loadOn, "'"));
                            }
                        },
                    },
                    {
                        key: "loadData",
                        value: function () {
                            if (!this.dataLoaded) {
                                if (!this.storage) return this.log("No local storage available, switch to degraded mode"), void this.fetch();
                                var e = this.storage.getItem("SearchinGhost_index");
                                e
                                    ? (this.log("Found an index stored locally, loads it"), this.config.onIndexBuildStart(), this.index.import(e), (this.dataLoaded = !0), this.config.onIndexBuildEnd(this.index), this.validateCache())
                                    : (this.log("No already stored index found"), this.fetch());
                            }
                        },
                    },
                    {
                        key: "validateCache",
                        value: function () {
                            var i = this,
                                e = this.storage.getItem("SearchinGhost_cache_info");
                            if (!e) return this.log("No cache info local object found"), void this.fetch();
                            var t,
                                o = JSON.parse(e),
                                n = new Date(o.lastCacheCheck),
                                r = Math.round((new Date() - n) / 1e3);
                            r < this.config.cacheMaxAge
                                ? this.log("Skip cache refreshing, updated less than ".concat(this.config.cacheMaxAge, "s ago (").concat(r, "s)"))
                                : ((t = this.buildUrl({ limit: 1, fields: ["updated_at"], order: "updated_at DESC" })),
                                  fetch(t)
                                      .then(function (e) {
                                          return e.json();
                                      })
                                      .then(function (e) {
                                          var t = e.posts[0].updated_at,
                                              n = e.meta.pagination.total;
                                          t !== o.lastestPostUpdatedAt
                                              ? (i.log("Posts update found, purge outdated local cache"), i.fetch())
                                              : n < o.totalPosts
                                              ? (i.log("Deleted or unpublished posts found, purge outdated local cache"), i.fetch())
                                              : (i.log("Local cached data up to date"), (o.lastCacheCheck = new Date().toISOString()), i.storage.setItem("SearchinGhost_cache_info", JSON.stringify(o)));
                                      })
                                      .catch(function (e) {
                                          console.error("Unable to fetch the latest post information to check cache state", e);
                                      }));
                        },
                    },
                    {
                        key: "fetch",
                        value:
                            ((l = function () {
                                var i = this;
                                this.log("Fetching data from Ghost API"), this.config.onFetchStart();
                                var e = { limit: "all", fields: this.config.postsFields, order: "updated_at DESC" };
                                0 < this.config.postsExtraFields.length && (e.include = this.config.postsExtraFields), 0 < this.config.postsFormats.length && (e.formats = this.config.postsFormats);
                                var t = this.buildUrl(e);
                                fetch(t)
                                    .then(function (e) {
                                        return e.json();
                                    })
                                    .then(function (e) {
                                        var t,
                                            n = e.posts;
                                        i.config.onFetchEnd(n),
                                            i.config.onIndexBuildStart(),
                                            (i.index = i.getNewSearchIndex()),
                                            n.forEach(function (e) {
                                                var t = i.format(e);
                                                t && i.index.add(t);
                                            }),
                                            (i.dataLoaded = !0),
                                            i.config.onIndexBuildEnd(i.index),
                                            i.storage &&
                                                ((t = { lastCacheCheck: new Date().toISOString(), lastestPostUpdatedAt: n[0].updated_at, totalPosts: e.meta.pagination.total }),
                                                i.storage.setItem("SearchinGhost_index", i.index.export()),
                                                i.storage.setItem("SearchinGhost_cache_info", JSON.stringify(t))),
                                            i.log("Search index build complete");
                                    })
                                    .catch(function (e) {
                                        i.error("Unable to fetch Ghost data.\n", e);
                                    });
                            }),
                            (f.toString = function () {
                                return l.toString();
                            }),
                            f),
                    },
                    {
                        key: "format",
                        value: function (e) {
                            return (
                                (e.id = this.postsCount++),
                                (e.published_at = this.prettyDate(e.published_at)),
                                this.originalPostsFields.includes("updated_at") || delete e.updated_at,
                                e.custom_excerpt && ((e.excerpt = e.custom_excerpt), delete e.custom_excerpt),
                                this.config.customProcessing(e)
                            );
                        },
                    },
                    {
                        key: "search",
                        value: function (e) {
                            this.loadData(), this.config.onSearchStart();
                            var t = this.index.search(e, this.config.searchOptions);
                            return this.searchResultEls && 0 < this.searchResultEls.length && this.display(t), this.config.onSearchEnd(t), t;
                        },
                    },
                    {
                        key: "display",
                        value: function (e) {
                            var t = this;
                            this.searchResultEls.forEach(function (e) {
                                e.innerHTML = "";
                            }),
                                e.length < 1
                                    ? this.insertTemplate(this.config.emptyTemplate())
                                    : e.forEach(function (e) {
                                          t.insertTemplate(t.config.template(e));
                                      });
                        },
                    },
                    {
                        key: "insertTemplate",
                        value: function (n) {
                            var i = this;
                            n &&
                                this.searchResultEls.forEach(function (e) {
                                    var t;
                                    i.config.outputChildsType ? ((t = document.createElement(i.config.outputChildsType)).classList.add("".concat(e.id, "-item")), (t.innerHTML = n), e.appendChild(t)) : e.insertAdjacentHTML("beforeend", n);
                                });
                        },
                    },
                    {
                        key: "getNewSearchIndex",
                        value: function () {
                            for (
                                var e = { doc: { id: "id", field: this.config.indexedFields }, encode: "simple", tokenize: "forward", threshold: 0, resolution: 4, depth: 0 }, t = 0, n = Object.entries(this.config.indexOptions);
                                t < n.length;
                                t++
                            ) {
                                var i = s(n[t], 2),
                                    o = i[0],
                                    r = i[1];
                                e[o] = r;
                            }
                            return new a.a(e);
                        },
                    },
                    {
                        key: "buildUrl",
                        value: function (e) {
                            for (var t = "".concat(this.config.url, "/ghost/api/").concat(this.config.version, "/content/posts/?key=").concat(this.config.key), n = 0, i = Object.entries(e); n < i.length; n++) {
                                var o = s(i[n], 2),
                                    r = o[0],
                                    a = o[1];
                                t += "&".concat(r, "=").concat(a);
                            }
                            return encodeURI(t);
                        },
                    },
                    {
                        key: "prettyDate",
                        value: function (e) {
                            return new Date(e).toLocaleDateString(this.config.date.locale, this.config.date.options);
                        },
                    },
                    {
                        key: "getLocalStorageOption",
                        value: function () {
                            try {
                                return window.localStorage.setItem("storage-availability-test", ""), window.localStorage.removeItem("storage-availability-test"), window.localStorage;
                            } catch (e) {
                                return;
                            }
                        },
                    },
                    {
                        key: "log",
                        value: function (e, t) {
                            this.config.debug && (t ? console.log(e, t) : console.log(e));
                        },
                    },
                    {
                        key: "error",
                        value: function (e, t) {
                            t ? console.error(e, t) : console.error(e);
                        },
                    },
                ]),
                r(c.prototype, u),
                h);
        function h(e) {
            !(function (e) {
                if (!(e instanceof h)) throw new TypeError("Cannot call a class as a function");
            })(this),
                (this.config = {
                    url: window.location.origin,
                    key: "",
                    version: "v3",
                    loadOn: "focus",
                    searchOn: "keyup",
                    limit: 10,
                    inputId: ["search-bar"],
                    outputId: ["search-results"],
                    outputChildsType: "li",
                    postsFields: ["title", "url", "excerpt", "custom_excerpt", "published_at", "feature_image"],
                    postsExtraFields: ["tags"],
                    postsFormats: ["plaintext"],
                    indexedFields: ["title", "string_tags", "excerpt", "plaintext"],
                    template: function (e) {
                        var t = '<a href="'.concat(e.url, '">');
                        return (
                            e.feature_image && (t += '<img src="'.concat(e.feature_image, '">')),
                            (t += "<section>"),
                            0 < e.tags.length
                                ? (t += '<header>\n                            <span class="head-tags">'
                                      .concat(e.tags[0].name, '</span>\n                            <span class="head-date">')
                                      .concat(e.published_at, "</span>\n                          </header>"))
                                : (t += '<header>\n                            <span class="head-tags">UNKNOWN</span>\n                            <span class="head-date">'.concat(
                                      e.published_at,
                                      "</span>\n                          </header>"
                                  )),
                            (t += "<h2>".concat(e.title, "</h2>")) + "</section></a>"
                        );
                    },
                    emptyTemplate: function () {},
                    customProcessing: function (e) {
                        return (
                            e.tags &&
                                (e.string_tags = e.tags
                                    .map(function (e) {
                                        return e.name;
                                    })
                                    .join(" ")
                                    .toLowerCase()),
                            e
                        );
                    },
                    date: { locale: document.documentElement.lang || "en-US", options: { year: "numeric", month: "short", day: "numeric" } },
                    cacheMaxAge: 1800,
                    onFetchStart: function () {},
                    onFetchEnd: function (e) {},
                    onIndexBuildStart: function () {},
                    onIndexBuildEnd: function (e) {},
                    onSearchStart: function () {},
                    onSearchEnd: function (e) {},
                    indexOptions: {},
                    searchOptions: {},
                    debug: !1,
                }),
                (this.dataLoaded = !1),
                (this.postsCount = 0),
                (this.storage = this.getLocalStorageOption()),
                this.initConfig(e),
                this.triggerDataLoad();
        }
        function f() {
            return l.apply(this, arguments);
        }
    },
]).default;
document.addEventListener("DOMContentLoaded", function () {
    function u() {
        var e, t, n, i, o, r, a, s, l, c;
        document.documentElement.clientWidth < 768 ||
            ((e = document.querySelector(".nav-left .nav-list")),
            (t = document.querySelectorAll(".nav-left > .nav-list > li:not(.more-link)")),
            (i = (n = document.querySelector(".more-link > ul")).querySelectorAll("li")),
            (o = 0),
            t.forEach(function (e) {
                e.setAttribute("data-width", e.offsetWidth), (o += e.offsetWidth);
            }),
            (a = (r = e.getElementsByClassName("more-link")[0]).offsetWidth),
            (s = e.offsetWidth),
            (o < s && i.length < 1) ||
                (s < o + a && 0 < t.length
                    ? ((l = t[t.length - 1]), e.removeChild(l), n.insertAdjacentElement("afterbegin", l), u())
                    : ((c = i[0]), 0 < i.length && s > o + a + parseInt(c.getAttribute("data-width")) && (n.removeChild(c), e.insertBefore(c, r), u())),
                0 < r.querySelectorAll("li").length ? ((r.style.display = "list-item"), (e.style.overflow = "visible"), r.classList.add("visible")) : (r.classList.remove("visible"), (r.style.display = "none"))));
    }
    var i, o, r, a;
    u(),
        window.addEventListener(
            "resize",
            ((i = u),
            (o = 100),
            function () {
                var e = this,
                    t = arguments,
                    n = r && !a;
                clearTimeout(a),
                    (a = setTimeout(function () {
                        (a = null), r || i.apply(e, t);
                    }, o)),
                    n && i.apply(e, t);
            })
        );
    var n,
        s,
        l,
        c,
        e = document.documentElement.getAttribute("data-navbar"),
        t = document.querySelector(".site-header"),
        d = document.querySelector(".header-bottom"),
        h = window.pageYOffset + d.getBoundingClientRect().top;
    function f() {
        var e = window.pageYOffset;
        0 < e && (t.style.height = document.querySelector(".header-top").offsetHeight + document.querySelector(".header-middle").offsetHeight + d.offsetHeight + "px"),
            e >= h + d.offsetHeight ? d.classList.add("sticky") : d.classList.remove("sticky");
    }
    null != d &&
        "sticky" === e &&
        (f(),
        window.addEventListener(
            "scroll",
            ((n = f),
            (s = 50),
            function () {
                var e = this,
                    t = arguments;
                c
                    ? (clearTimeout(l),
                      (l = setTimeout(function () {
                          Date.now() - c >= s && (n.apply(e, t), (c = Date.now()));
                      }, s - (Date.now() - c))))
                    : (n.apply(e, t), (c = Date.now()));
            })
        )),
        reframe("iframe:not(.no-resize)");
    var p = document.getElementById("js-menu-toggle");
    (p.onclick = function (e) {
        e.preventDefault(), document.body.classList.toggle("js-mobile-menu-opened"), p.classList.toggle("menu-icon-close");
    }),
        (document.getElementById("backdrop").onclick = function () {
            document.body.classList.toggle("js-mobile-menu-opened"), p.classList.toggle("menu-icon-close");
        });
    var g = new LazyLoad({ elements_selector: ".lazy", threshold: 100 });
    (btnScrollTop = document.querySelector("#back-to-top")),
        null !== btnScrollTop &&
            (window.addEventListener("scroll", function () {
                200 < document.body.scrollTop || 200 < document.documentElement.scrollTop ? (btnScrollTop.style.opacity = 1) : (btnScrollTop.style.opacity = 0);
            }),
            btnScrollTop.addEventListener("click", function (e) {
                e.preventDefault(), window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }));
    var m,
        v,
        y,
        b,
        w,
        k,
        x,
        E,
        S,
        L,
        _ = document.querySelectorAll("table");
    function A() {
        var e;
        (w = window.scrollY), x <= w + k + b && !1 === y && ((y = !0), S.classList.add("visible"), ((e = new window.XMLHttpRequest()).responseType = "document"), e.addEventListener("load", F), e.open("GET", v), e.send(null));
    }
    function F() {
        404 !== this.status &&
            (this.response.querySelectorAll(".post-list-item").forEach(function (e) {
                L.appendChild(document.importNode(e, !0)), S.classList.remove("visible");
            }),
            (newNextLinkEl = this.response.querySelector("link[rel=next]")),
            g.update(),
            newNextLinkEl ? (v = newNextLinkEl.href) : (window.removeEventListener("scroll", A), (S.style.display = "none")),
            (y = !1),
            (x = L.clientHeight + L.offsetTop));
    }
    0 < _.length &&
        _.forEach(function (e) {
            var t = document.createElement("div");
            t.classList.add("table-responsive"), e.parentNode.insertBefore(t, e), t.appendChild(e);
        }),
        document.querySelector(".disqus-comment-wrap") &&
            ((m = {
                scriptUrl: "//" + disqus_shortname + ".disqus.com/embed.js",
                laziness: 1,
                disqusConfig: function () {
                    (this.page.url = pageUrl), (this.page.identifier = pageIdentifier);
                },
            }),
            disqusLoader(".disqus-comment-wrap", m)),
        document.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
            var t = e.closest(".kg-gallery-image"),
                n = e.attributes.width.value / e.attributes.height.value;
            t.style.flex = n + " 1 0%";
        }),
        mediumZoom(".kg-image-card img, .kg-gallery-image img", { margin: 30 }),
        (E = document.querySelector("link[rel=next]")),
        (S = document.getElementById("js-post-loding-indicator")),
        (L = document.querySelector(".post-list")),
        E && L && ((v = E.href), (y = !1), (b = 0), (w = window.scrollY), (k = window.innerHeight), (x = L.clientHeight + L.offsetTop), window.addEventListener("scroll", A, { passive: !0 }));
    var C = document.getElementById("js-search-button"),
        z = document.querySelector(".js-search-popup"),
        O = document.getElementById("search-close"),
        I = document.getElementById("search-input"),
        j = document.getElementById("search-results");
    C.addEventListener("click", function () {
        z.classList.add("visible"),
            document.body.classList.add("search-opened"),
            window.setTimeout(function () {
                I.focus();
            }, 200);
    });
    new $({
        key: apiKey,
        inputId: ["search-input"],
        outputId: ["search-results"],
        outputChildsType: "div",
        limit: 50,
        postsFields: ["title", "url", "excerpt", "custom_excerpt", "published_at"],
        postsExtraFields: ["tags"],
        template: function (e) {
            var t = "";
            return (
                (t += '<a href="' + e.url + '"><div class="content">'),
                (t += '<h3 class="title h5">' + e.title + '</h3> <div class="meta">'),
                0 < e.tags.length && (t += "<span> " + e.tags[0].name + "</span> - "),
                (t += "<time>" + e.published_at + "</time></div></div></a>")
            );
        },
        onSearchEnd: function (e) {
            j.scrollHeight > j.offsetHeight ? (j.style.paddingRight = "8px") : (j.style.paddingRight = "0px");
        },
    });
    function q() {
        z.classList.toggle("visible"), document.body.classList.toggle("search-opened"), (I.value = ""), (j.innerHTML = "");
    }
    function N(e, t) {
        (t = t || window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "") : null;
    }
    document.addEventListener("keyup", function (e) {
        document.body.classList.toggle("abcdefgh", !0), 27 == e.keyCode && z.classList.contains("visible") && document.body.classList.contains("search-opened") && (q(), C.focus());
    }),
        I.addEventListener("keyup", function (e) {
            27 == e.keyCode && (q(), C.focus());
        }),
        O.addEventListener("keyup", function (e) {
            13 == e.keyCode && (q(), C.focus());
        }),
        O.addEventListener("keyup", function (e) {
            13 == e.keyCode && (q(), C.focus());
        }),
        (O.onclick = q);
    var T = N("action"),
        D = N("stripe"),
        H = N("success");
    function M(e) {
        var t = document.querySelector("." + e);
        t.classList.add("visible"),
            t.querySelector(".notification-close").addEventListener("click", function () {
                t.classList.remove("visible"), (document.body.style.marginTop = "0px");
            });
    }
    function P() {
        var e,
            t = window.location.toString();
        0 < t.indexOf("?") && ((e = t.substring(0, t.indexOf("?"))), window.history.replaceState({}, document.title, e));
    }
    "subscribe" == T && (M("notification-subscribe"), P()),
        "signup" == T && (window.location = "/signup/?action=checkout"),
        "checkout" == T && (M("notification-signup"), P()),
        "signin" == T && (M("notification-signin"), P()),
        "signin" == T && "false" == H && (M("notification-signin-failure"), P()),
        "success" == D && (M("notification-checkout"), P()),
        "cancel" == D && (M("notification-checkout-cancel"), P()),
        "billing-update-success" == D && (M("notification-billing-success"), P()),
        "billing-update-cancel" == D && (M("notification-billing-cancel"), P());
});
