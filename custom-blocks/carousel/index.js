(() => {
    var e, t = {
        269: (e, t, l) => {
            "use strict";
            const o = window.wp.blocks,
                n = window.React,
                s = window.wp.i18n,
                r = window.wp.element,
                a = window.wp.blockEditor,
                i = window.wp.components,
                d = window.wp.data;
            var p = l(942),
                c = l.n(p);
            const u = ["cb/slide"],
                b = [{
                    attributes: {
                        slides: {
                            type: "number",
                            default: 4
                        },
                        slidesToShow: {
                            type: "number",
                            default: 3
                        },
                        scrollGroup: {
                            type: "boolean",
                            default: !1
                        },
                        slidesToScroll: {
                            type: "number",
                            default: 1
                        },
                        speed: {
                            type: "number",
                            default: 300
                        },
                        slidePadding: {
                            type: "boolean",
                            default: !0
                        },
                        vertical: {
                            type: "boolean",
                            default: !1
                        },
                        arrows: {
                            type: "boolean",
                            default: !0
                        },
                        dots: {
                            type: "boolean",
                            default: !0
                        },
                        autoplay: {
                            type: "boolean",
                            default: !1
                        },
                        autoplaySpeed: {
                            type: "number",
                            default: 3e3
                        },
                        infinite: {
                            type: "boolean",
                            default: !1
                        },
                        rtl: {
                            type: "boolean"
                        },
                        responsiveWidth: {
                            type: "number",
                            default: 768
                        },
                        responsiveSlides: {
                            type: "number",
                            default: 1
                        },
                        variableWidth: {
                            type: "boolean",
                            default: !1
                        },
                        adaptiveHeight: {
                            type: "boolean",
                            default: false
                        },
                        fade: {
                            type: "boolean",
                            default: false
                        }
                    },
                    save({
                        attributes: e
                    }) {
                        const {
                            slides: t,
                            slidesToShow: l,
                            scrollGroup: o,
                            slidesToScroll: s,
                            speed: r,
                            slidePadding: i,
                            arrows: d,
                            dots: p,
                            infinite: u,
                            autoplay: b,
                            autoplaySpeed: h,
                            rtl: v,
                            responsiveWidth: m,
                            responsiveSlides: f,
                            vertical: k,
                            variableWidth: W,
                            adaptiveHeight: A,
                            fade: fa 
                        } = e, g = {
                            slidesToShow: l,
                            slidesToScroll: s,
                            speed: r,
                            arrows: d,
                            dots: p,
                            autoplay: b,
                            autoplaySpeed: h,
                            infinite: u,
                            rtl: v,
                            vertical: k,
                            variableWidth: W,
                            adaptiveHeight: A,
                            fade: fa,
                            responsive: [{
                                ...m ? {
                                    breakpoint: m + 1
                                } : {
                                    breakpoint: 993
                                },
                                settings: {
                                    ...f ? {
                                        slidesToShow: f
                                    } : {
                                        slidesToShow: 1
                                    }
                                }
                            }]
                        }, S = a.useBlockProps.save({
                            className: c()({
                                "cb-single-slide": 1 == l,
                                "slick-vertical": !!k,
                                "variable-width": !!W
                            }),
                            "data-slick": JSON.stringify(g),
                            dir: v ? "rtl" : void 0
                        });
                        return (0, n.createElement)("div", {
                            ...S
                        }, (0, n.createElement)(a.InnerBlocks.Content, null))
                    }
                }, {
                    attributes: {
                        slides: {
                            type: "number",
                            default: 4
                        },
                        slidesToShow: {
                            type: "number",
                            default: 3
                        },
                        scrollGroup: {
                            type: "boolean",
                            default: !1
                        },
                        slidesToScroll: {
                            type: "number",
                            default: 1
                        },
                        speed: {
                            type: "number",
                            default: 300
                        },
                        slidePadding: {
                            type: "boolean",
                            default: !0
                        },
                        arrows: {
                            type: "boolean",
                            default: !0
                        },
                        dots: {
                            type: "boolean",
                            default: !0
                        },
                        infinite: {
                            type: "boolean",
                            default: !1
                        },
                        responsiveWidth: {
                            type: "number",
                            default: 768
                        },
                        responsiveSlides: {
                            type: "number",
                            default: 1
                        }
                    },
                    save({
                        attributes: e
                    }) {
                        const {
                            slides: t,
                            slidesToShow: l,
                            scrollGroup: o,
                            slidesToScroll: s,
                            speed: r,
                            slidePadding: i,
                            arrows: d,
                            dots: p,
                            responsiveWidth: u,
                            responsiveSlides: b,
                        } = e, h = {
                            slidesToShow: l,
                            slidesToScroll: s,
                            speed: r,
                            arrows: d,
                            dots: p,
                            infinite: !1,
                            responsive: [{
                                ...u ? {
                                    breakpoint: u + 1
                                } : {
                                    breakpoint: 993
                                },
                                settings: {
                                    ...b ? {
                                        slidesToShow: b
                                    } : {
                                        slidesToShow: 1
                                    }
                                }
                            }]
                        };
                        return (0, n.createElement)("div", {
                            className: c()({
                                "cb-single-slide": 1 == l,
                                "cb-padding": i
                            }),
                            "data-slick": JSON.stringify(h)
                        }, (0, n.createElement)(a.InnerBlocks.Content, null))
                    }
                }],
                h = (0, n.createElement)("svg", {
                    width: "24",
                    height: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    role: "img",
                    "aria-hidden": "true",
                    focusable: "false"
                }, (0, n.createElement)("path", {
                    d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
                }), (0, n.createElement)("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }));
            (0, o.registerBlockType)("cb/carousel", {
                icon: h,
                edit: function ({
                    attributes: e,
                    setAttributes: t,
                    clientId: l
                }) {
                    const {
                        slidesToShow: o,
                        slidesToScroll: p,
                        speed: b,
                        arrows: h,
                        dots: v,
                        infinite: m,
                        autoplay: f,
                        autoplaySpeed: g,
                        rtl: S,
                        responsiveWidth: w,
                        responsiveSlides: y,
                        responsiveSlidesToScroll: T,
                        vertical: k,
                        variableWidth: W,
                        adaptiveHeight: A,
                        fade: fa
                    } = e, _ = (0, d.useSelect)((e => e("core/block-editor").getBlock(l).innerBlocks)), C = (0, a.useBlockProps)({
                        className: c()(`cb-shows-${o}-slides`, _.length + 1 > o ? "cb-show-scrollbar" : "cb-hide-scrollbar")
                    }), x = (0, n.createElement)("div", {
                        className: "cb-carousel-placeholder"
                    }, (0, s.__)("Click plus (+) to add slides"));
                    return (0, n.createElement)(r.Fragment, null, (0, n.createElement)(a.InspectorControls, null, (0, n.createElement)(i.PanelBody, {
                        title: (0, s.__)("Carousel Settings"),
                        initialOpen: !0
                    }, (0, n.createElement)(i.RangeControl, {
                        label: (0, s.__)("Slides to show"),
                        value: o,
                        onChange: e => t({
                            slidesToShow: e
                        }),
                        min: 1,
                        max: 10
                    }), (0, n.createElement)(i.RangeControl, {
                        label: (0, s.__)("Slides to scroll at a time"),
                        value: p,
                        onChange: e => t({
                            slidesToScroll: e
                        }),
                        min: 1,
                        max: 10
                    }), (0, n.createElement)(i.RangeControl, {
                        label: (0, s.__)("Slide animation speed (ms)"),
                        value: b,
                        onChange: e => t({
                            speed: e
                        }),
                        step: 50,
                        min: 0,
                        max: 1e3
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Prev/Next arrows"),
                        checked: !!h,
                        onChange: e => t({
                            arrows: e
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Dots navigation"),
                        checked: !!v,
                        onChange: e => t({
                            dots: e
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Infinite loop sliding"),
                        checked: !!m,
                        onChange: e => t({
                            infinite: e
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Autoplay"),
                        checked: !!f,
                        onChange: e => t({
                            autoplay: e
                        })
                    }), f && (0, n.createElement)(i.TextControl, {
                        type: "number",
                        label: (0, s.__)("Autoplay speed (ms)"),
                        value: g,
                        onChange: e => t({
                            autoplaySpeed: parseInt(e, 10)
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("RTL"),
                        checked: !!S,
                        onChange: e => t({
                            rtl: e
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Vertical"),
                        checked: !!k,
                        onChange: e => t({
                            vertical: e
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Variable Width"),
                        checked: !!W,
                        onChange: e => t({
                            variableWidth: e
                        })
                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Fade"),
                        checked: !!fa,
                        onChange: e => t({
                            fade: e
                        })

                    }), (0, n.createElement)(i.ToggleControl, {
                        label: (0, s.__)("Adaptive Height"),
                        checked: !!e.adaptiveHeight,
                        onChange: v => t({ adaptiveHeight: v })
                    })), (0, n.createElement)(i.PanelBody, {
                        title: (0, s.__)("Responsive Settings"),
                        initialOpen: !1
                    }, (0, n.createElement)(i.TextControl, {
                        type: "number",
                        label: (0, s.__)("Screen width (px)", "cb"),
                        value: w,
                        onChange: e => t({
                            responsiveWidth: parseInt(e, 10)
                        })
                    }), (0, n.createElement)(i.RangeControl, {
                        label: (0, s.__)("Slides to show", "cb"),
                        value: y,
                        help: (0, s.__)("# of slides to show at given screen width", "cb"),
                        onChange: e => t({
                            responsiveSlides: e
                        }),
                        min: 1,
                        max: 6
                    }), (0, n.createElement)(i.RangeControl, {
                        label: (0, s.__)("Slides to scroll at a time"),
                        value: T,
                        onChange: e => t({
                            responsiveSlidesToScroll: e
                        }),
                        min: 1,
                        max: 10
                    }))), (0, n.createElement)("div", {
                        ...C
                    }, (0, n.createElement)(a.InnerBlocks, {
                        orientation: "horizontal",
                        allowedBlocks: u,
                        templateLock: !1,
                        renderAppender: a.InnerBlocks.ButtonBlockAppender,
                        placeholder: x
                    })))
                },
                save: function ({
                    attributes: e
                }) {
                    const {
                        slidesToShow: t,
                        slidesToScroll: l,
                        speed: o,
                        arrows: s,
                        dots: r,
                        infinite: i,
                        autoplay: d,
                        autoplaySpeed: p,
                        rtl: u,
                        responsiveWidth: b,
                        responsiveSlides: h,
                        responsiveSlidesToScroll: v,
                        vertical: m,
                        variableWidth: W,
                        adaptiveHeight: A,
                        fade: fa,
                    } = e, f = {
                        slidesToShow: t,
                        slidesToScroll: l,
                        speed: o,
                        arrows: s,
                        dots: r,
                        autoplay: d,
                        autoplaySpeed: p,
                        infinite: i,
                        rtl: u,
                        vertical: m,
                        variableWidth: W,
                        adaptiveHeight: A,
                        fade: fa,
                        responsive: [{
                            ...b ? {
                                breakpoint: b + 1
                            } : {
                                breakpoint: 993
                            },
                            settings: {
                                ...h ? {
                                    slidesToShow: h
                                } : {
                                    slidesToShow: 1
                                },
                                ...v ? {
                                    slidesToScroll: v
                                } : {
                                    slidesToScroll: 1
                                }
                            }
                        }]
                    }, g = a.useBlockProps.save({
                        className: c()({
                            "cb-single-slide": 1 == t,
                            "slick-vertical": !!m,
                            "variable-width": !!W
                        }),
                        "data-slick": JSON.stringify(f),
                        dir: u ? "rtl" : void 0
                    });
                    return (0, n.createElement)("div", {
                        ...g
                    }, (0, n.createElement)(a.InnerBlocks.Content, null))
                },
                deprecated: b
            })
        },
        942: (e, t) => {
            var l;
            ! function () {
                "use strict";
                var o = {}.hasOwnProperty;

                function n() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var l = arguments[t];
                        l && (e = r(e, s(l)))
                    }
                    return e
                }

                function s(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return n.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var l in e) o.call(e, l) && e[l] && (t = r(t, l));
                    return t
                }

                function r(e, t) {
                    return t ? e ? e + " " + t : t : e
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 === (l = function () {
                    return n
                }.apply(t, [])) || (e.exports = l)
            }()
        }
    },
    l = {};

    function o(e) {
        var n = l[e];
        if (void 0 !== n) return n.exports;
        var s = l[e] = {
            exports: {}
        };
        return t[e](s, s.exports, o), s.exports
    }
    o.m = t, e = [], o.O = (t, l, n, s) => {
        if (!l) {
            var r = 1 / 0;
            for (p = 0; p < e.length; p++) {
                for (var [l, n, s] = e[p], a = !0, i = 0; i < l.length; i++)(!1 & s || r >= s) && Object.keys(o.O).every((e => o.O[e](l[i]))) ? l.splice(i--, 1) : (a = !1, s < r && (r = s));
                if (a) {
                    e.splice(p--, 1);
                    var d = n();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        s = s || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > s; p--) e[p] = e[p - 1];
        e[p] = [l, n, s]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var l in t) o.o(t, l) && !o.o(e, l) && Object.defineProperty(e, l, {
            enumerable: !0,
            get: t[l]
        })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {
            704: 0,
            200: 0
        };
        o.O.j = t => 0 === e[t];
        var t = (t, l) => {
            var n, s, [r, a, i] = l, d = 0;
            if (r.some((t => 0 !== e[t]))) {
                for (n in a) o.o(a, n) && (o.m[n] = a[n]);
                if (i) var p = i(o)
            }
            for (t && t(l); d < r.length; d++) s = r[d], o.o(e, s) && e[s] && e[s][0](), e[s] = 0;
            return o.O(p)
        },
        l = globalThis.webpackChunkcarousel_slider_block = globalThis.webpackChunkcarousel_slider_block || [];
        l.forEach(t.bind(null, 0)), l.push = t.bind(null, l.push.bind(l))
    })();
    var n = o.O(void 0, [200], (() => o(269)));
    n = o.O(n)
})();