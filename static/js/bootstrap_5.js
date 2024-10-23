/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e());
})(this, function () {
    "use strict";
    const t = new Map(),
        e = {
            set(e, i, n) {
                t.has(e) || t.set(e, new Map());
                const s = t.get(e);
                s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
            },
            get: (e, i) => (t.has(e) && t.get(e).get(i)) || null,
            remove(e, i) {
                if (!t.has(e)) return;
                const n = t.get(e);
                n.delete(i), 0 === n.size && t.delete(e);
            },
        },
        i = "transitionend",
        n = (t) => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), t),
        s = (t) => {
            t.dispatchEvent(new Event(i));
        },
        o = (t) => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = (t) => (o(t) ? (t.jquery ? t[0] : t) : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null),
        a = (t) => {
            if (!o(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1;
            }
            return e;
        },
        l = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
        },
        h = () => {},
        d = (t) => {
            t.offsetHeight;
        },
        u = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
        f = [],
        p = () => "rtl" === document.documentElement.dir,
        m = (t) => {
            var e;
            (e = () => {
                const e = u();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    (e.fn[i] = t.jQueryInterface), (e.fn[i].Constructor = t), (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
                }
            }),
                "loading" === document.readyState
                    ? (f.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              for (const t of f) t();
                          }),
                      f.push(e))
                    : e();
        },
        g = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),
        _ = (t, e, n = !0) => {
            if (!n) return void g(t);
            const o =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s ? ((e = e.split(",")[0]), (i = i.split(",")[0]), 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
                })(e) + 5;
            let r = !1;
            const a = ({ target: n }) => {
                n === e && ((r = !0), e.removeEventListener(i, a), g(t));
            };
            e.addEventListener(i, a),
                setTimeout(() => {
                    r || s(e);
                }, o);
        },
        b = (t, e, i, n) => {
            const s = t.length;
            let o = t.indexOf(e);
            return -1 === o ? (!i && n ? t[s - 1] : t[0]) : ((o += i ? 1 : -1), n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
        },
        v = /[^.]*(?=\..*)\.|.*/,
        y = /\..*/,
        w = /::\d+$/,
        A = {};
    let E = 1;
    const T = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
        },
        C = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function O(t, e) {
        return (e && `${e}::${E++}`) || t.uidEvent || E++;
    }
    function x(t) {
        const e = O(t);
        return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
    }
    function k(t, e, i = null) {
        return Object.values(t).find((t) => t.callable === e && t.delegationSelector === i);
    }
    function L(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [n, s, o];
    }
    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = (t) =>
                function (e) {
                    if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return t.call(this, e);
                };
            r = t(r);
        }
        const l = x(t),
            c = l[a] || (l[a] = {}),
            h = k(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")),
            u = o
                ? (function (t, e, i) {
                      return function n(s) {
                          const o = t.querySelectorAll(e);
                          for (let { target: r } = s; r && r !== this; r = r.parentNode)
                              for (const a of o)
                                  if (a === r)
                                      return (
                                          P(s, {
                                              delegateTarget: r,
                                          }),
                                          n.oneOff && N.off(t, s.type, e, i),
                                          i.apply(r, [s])
                                      );
                      };
                  })(t, i, r)
                : (function (t, e) {
                      return function i(n) {
                          return (
                              P(n, {
                                  delegateTarget: t,
                              }),
                              i.oneOff && N.off(t, n.type, e),
                              e.apply(t, [n])
                          );
                      };
                  })(t, r);
        (u.delegationSelector = o ? i : null), (u.callable = r), (u.oneOff = s), (u.uidEvent = d), (c[d] = u), t.addEventListener(a, u, o);
    }
    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
    }
    function I(t) {
        return (t = t.replace(y, "")), T[t] || t;
    }
    const N = {
        on(t, e, i, n) {
            S(t, e, i, n, !1);
        },
        one(t, e, i, n) {
            S(t, e, i, n, !0);
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n),
                a = r !== e,
                l = x(t),
                c = l[r] || {},
                h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)) {
                    const s = i.replace(w, "");
                    (a && !e.includes(s)) || D(t, l, r, n.callable, n.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null);
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null,
                o = !0,
                r = !0,
                a = !1;
            e !== I(e) && n && ((s = n.Event(e, i)), n(t).trigger(s), (o = !s.isPropagationStopped()), (r = !s.isImmediatePropagationStopped()), (a = s.isDefaultPrevented()));
            const l = P(
                new Event(e, {
                    bubbles: o,
                    cancelable: !0,
                }),
                i
            );
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        },
    };
    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e))
            try {
                t[i] = n;
            } catch (e) {
                Object.defineProperty(t, i, {
                    configurable: !0,
                    get: () => n,
                });
            }
        return t;
    }
    function j(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function M(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const F = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${M(e)}`, i);
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${M(e)}`);
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter((t) => t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (e[i] = j(t.dataset[n]));
            }
            return e;
        },
        getDataAttribute: (t, e) => j(t.getAttribute(`data-bs-${M(e)}`)),
    };
    class H {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ...("object" == typeof i ? i : {}),
                ...(o(e) ? F.getDataAttributes(e) : {}),
                ...("object" == typeof t ? t : {}),
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)) {
                const e = t[n],
                    r = o(e)
                        ? "element"
                        : null == (i = e)
                        ? `${i}`
                        : Object.prototype.toString
                              .call(i)
                              .match(/\s([a-z]+)/i)[1]
                              .toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`);
            }
            var i;
        }
    }
    class W extends H {
        constructor(t, i) {
            super(), (t = r(t)) && ((this._element = t), (this._config = this._getConfig(i)), e.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i);
        }
        _getConfig(t) {
            return (t = this._mergeConfigObj(t, this._element)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.3";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const B = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), (e = i && "#" !== i ? i.trim() : null);
            }
            return e
                ? e
                      .split(",")
                      .map((t) => n(t))
                      .join(",")
                : null;
        },
        z = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode.closest(e);
                for (; n; ) i.push(n), (n = n.parentNode.closest(e));
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(",");
                return this.find(e, t).filter((t) => !l(t) && a(t));
            },
            getSelectorFromElement(t) {
                const e = B(t);
                return e && z.findOne(e) ? e : null;
            },
            getElementFromSelector(t) {
                const e = B(t);
                return e ? z.findOne(e) : null;
            },
            getMultipleElementsFromSelector(t) {
                const e = B(t);
                return e ? z.find(e) : [];
            },
        },
        R = (t, e = "hide") => {
            const i = `click.dismiss${t.EVENT_KEY}`,
                n = t.NAME;
            N.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
                if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this))) return;
                const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
                t.getOrCreateInstance(s)[e]();
            });
        },
        q = ".bs.alert",
        V = `close${q}`,
        K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert";
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t) => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle();
    }),
        m(Y);
    const U = ".bs.swipe",
        G = `touchstart${U}`,
        J = `touchmove${U}`,
        Z = `touchend${U}`,
        tt = `pointerdown${U}`,
        et = `pointerup${U}`,
        it = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null,
        },
        nt = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
        };
    class st extends H {
        constructor(t, e) {
            super(), (this._element = t), t && st.isSupported() && ((this._config = this._getConfig(e)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
        }
        static get Default() {
            return it;
        }
        static get DefaultType() {
            return nt;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            N.off(this._element, U);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            (this._deltaX = 0), e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents
                ? (N.on(this._element, tt, (t) => this._start(t)), N.on(this._element, et, (t) => this._end(t)), this._element.classList.add("pointer-event"))
                : (N.on(this._element, G, (t) => this._start(t)), N.on(this._element, J, (t) => this._move(t)), N.on(this._element, Z, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const ot = ".bs.carousel",
        rt = ".data-api",
        at = "next",
        lt = "prev",
        ct = "left",
        ht = "right",
        dt = `slide${ot}`,
        ut = `slid${ot}`,
        ft = `keydown${ot}`,
        pt = `mouseenter${ot}`,
        mt = `mouseleave${ot}`,
        gt = `dragstart${ot}`,
        _t = `load${ot}${rt}`,
        bt = `click${ot}${rt}`,
        vt = "carousel",
        yt = "active",
        wt = ".active",
        At = ".carousel-item",
        Et = wt + At,
        Tt = {
            ArrowLeft: ht,
            ArrowRight: ct,
        },
        Ct = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0,
        },
        Ot = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean",
        };
    class xt extends W {
        constructor(t, e) {
            super(t, e),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = z.findOne(".carousel-indicators", this._element)),
                this._addEventListeners(),
                this._config.ride === vt && this.cycle();
        }
        static get Default() {
            return Ct;
        }
        static get DefaultType() {
            return Ot;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(at);
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
        }
        prev() {
            this._slide(lt);
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, ut, () => this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? at : lt;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t) => this._keydown(t)),
                "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())),
                this._config.touch && st.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, (t) => t.preventDefault());
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(ct)),
                rightCallback: () => this._slide(this._directionToOrder(ht)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                },
            };
            this._swipeHelper = new st(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Tt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                n = t === at,
                s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s),
                r = (e) =>
                    N.trigger(this._element, e, {
                        relatedTarget: s,
                        direction: this._orderToDirection(t),
                        from: this._getItemIndex(i),
                        to: o,
                    });
            if (r(dt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = s);
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c),
                d(s),
                i.classList.add(l),
                s.classList.add(l),
                this._queueCallback(
                    () => {
                        s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), (this._isSliding = !1), r(ut);
                    },
                    i,
                    this._isAnimated()
                ),
                a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return z.findOne(Et, this._element);
        }
        _getItems() {
            return z.find(At, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return p() ? (t === ct ? lt : at) : t === ct ? at : lt;
        }
        _orderToDirection(t) {
            return p() ? (t === lt ? ct : ht) : t === lt ? ht : ct;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function (t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt)) return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e),
            n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }),
        N.on(window, _t, () => {
            const t = z.find('[data-bs-ride="carousel"]');
            for (const e of t) xt.getOrCreateInstance(e);
        }),
        m(xt);
    const kt = ".bs.collapse",
        Lt = `show${kt}`,
        St = `shown${kt}`,
        Dt = `hide${kt}`,
        $t = `hidden${kt}`,
        It = `click${kt}.data-api`,
        Nt = "show",
        Pt = "collapse",
        jt = "collapsing",
        Mt = `:scope .${Pt} .${Pt}`,
        Ft = '[data-bs-toggle="collapse"]',
        Ht = {
            parent: null,
            toggle: !0,
        },
        Wt = {
            parent: "(null|element)",
            toggle: "boolean",
        };
    class Bt extends W {
        constructor(t, e) {
            super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
            const i = z.find(Ft);
            for (const t of i) {
                const e = z.getSelectorFromElement(t),
                    i = z.find(e).filter((t) => t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return Ht;
        }
        static get DefaultType() {
            return Wt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                    (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                        .filter((t) => t !== this._element)
                        .map((t) =>
                            Bt.getOrCreateInstance(t, {
                                toggle: !1,
                            })
                        )),
                t.length && t[0]._isTransitioning)
            )
                return;
            if (N.trigger(this._element, Lt).defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(jt), (this._element.style[e] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1), this._element.classList.remove(jt), this._element.classList.add(Pt, Nt), (this._element.style[e] = ""), N.trigger(this._element, St);
                },
                this._element,
                !0
            ),
                (this._element.style[e] = `${this._element[i]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`), d(this._element), this._element.classList.add(jt), this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray) {
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
            }
            (this._isTransitioning = !0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1), this._element.classList.remove(jt), this._element.classList.add(Pt), N.trigger(this._element, $t);
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(Nt);
        }
        _configAfterMerge(t) {
            return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t) {
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(Mt, this._config.parent);
            return z.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return (
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                this.each(function () {
                    const i = Bt.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                        i[t]();
                    }
                })
            );
        }
    }
    N.on(document, It, Ft, function (t) {
        ("A" === t.target.tagName || (t.delegateTarget && "A" === t.delegateTarget.tagName)) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this))
            Bt.getOrCreateInstance(t, {
                toggle: !1,
            }).toggle();
    }),
        m(Bt);
    var zt = "top",
        Rt = "bottom",
        qt = "right",
        Vt = "left",
        Kt = "auto",
        Qt = [zt, Rt, qt, Vt],
        Xt = "start",
        Yt = "end",
        Ut = "clippingParents",
        Gt = "viewport",
        Jt = "popper",
        Zt = "reference",
        te = Qt.reduce(function (t, e) {
            return t.concat([e + "-" + Xt, e + "-" + Yt]);
        }, []),
        ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
            return t.concat([e, e + "-" + Xt, e + "-" + Yt]);
        }, []),
        ie = "beforeRead",
        ne = "read",
        se = "afterRead",
        oe = "beforeMain",
        re = "main",
        ae = "afterMain",
        le = "beforeWrite",
        ce = "write",
        he = "afterWrite",
        de = [ie, ne, se, oe, re, ae, le, ce, he];
    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function fe(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element;
    }
    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
    }
    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                me(s) &&
                    ue(s) &&
                    (Object.assign(s.style, i),
                    Object.keys(n).forEach(function (t) {
                        var e = n[t];
                        !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                    }));
            });
        },
        effect: function (t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: {
                        position: "absolute",
                    },
                    reference: {},
                };
            return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        me(n) &&
                            ue(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(s).forEach(function (t) {
                                n.removeAttribute(t);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function be(t) {
        return t.split("-")[0];
    }
    var ve = Math.max,
        ye = Math.min,
        we = Math.round;
    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
            ? t.brands
                  .map(function (t) {
                      return t.brand + "/" + t.version;
                  })
                  .join(" ")
            : navigator.userAgent;
    }
    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae());
    }
    function Te(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(),
            s = 1,
            o = 1;
        e && me(t) && ((s = (t.offsetWidth > 0 && we(n.width) / t.offsetWidth) || 1), (o = (t.offsetHeight > 0 && we(n.height) / t.offsetHeight) || 1));
        var r = (pe(t) ? fe(t) : window).visualViewport,
            a = !Ee() && i,
            l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
            c = (n.top + (a && r ? r.offsetTop : 0)) / o,
            h = n.width / s,
            d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c,
        };
    }
    function Ce(t) {
        var e = Te(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return (
            Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
            {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: i,
                height: n,
            }
        );
    }
    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function xe(t) {
        return fe(t).getComputedStyle(t);
    }
    function ke(t) {
        return ["table", "td", "th"].indexOf(ue(t)) >= 0;
    }
    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
    }
    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null;
    }
    function $e(t) {
        for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position; ) i = De(i);
        return i && ("html" === ue(i) || ("body" === ue(i) && "static" === xe(i).position))
            ? e
            : i ||
                  (function (t) {
                      var e = /firefox/i.test(Ae());
                      if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
                      var i = Se(t);
                      for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0; ) {
                          var n = xe(i);
                          if (
                              "none" !== n.transform ||
                              "none" !== n.perspective ||
                              "paint" === n.contain ||
                              -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                              (e && "filter" === n.willChange) ||
                              (e && n.filter && "none" !== n.filter)
                          )
                              return i;
                          i = i.parentNode;
                      }
                      return null;
                  })(t) ||
                  e;
    }
    function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    function Ne(t, e, i) {
        return ve(t, ye(e, i));
    }
    function Pe(t) {
        return Object.assign(
            {},
            {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            t
        );
    }
    function je(t, e) {
        return e.reduce(function (e, i) {
            return (e[i] = t), e;
        }, {});
    }
    const Me = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e,
                i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = be(i.placement),
                l = Ie(a),
                c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = (function (t, e) {
                        return Pe(
                            "number" !=
                                typeof (t =
                                    "function" == typeof t
                                        ? t(
                                              Object.assign({}, e.rects, {
                                                  placement: e.placement,
                                              })
                                          )
                                        : t)
                                ? t
                                : je(t, Qt)
                        );
                    })(s.padding, i),
                    d = Ce(o),
                    u = "y" === l ? zt : Vt,
                    f = "y" === l ? Rt : qt,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    m = r[l] - i.rects.reference[l],
                    g = $e(o),
                    _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                    b = p / 2 - m / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    A = Ne(v, w, y),
                    E = l;
                i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
            }
        },
        effect: function (t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function Fe(t) {
        return t.split("-")[1];
    }
    var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
    };
    function We(t) {
        var e,
            i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = t.isFixed,
            u = r.x,
            f = void 0 === u ? 0 : u,
            p = r.y,
            m = void 0 === p ? 0 : p,
            g =
                "function" == typeof h
                    ? h({
                          x: f,
                          y: m,
                      })
                    : {
                          x: f,
                          y: m,
                      };
        (f = g.x), (m = g.y);
        var _ = r.hasOwnProperty("x"),
            b = r.hasOwnProperty("y"),
            v = Vt,
            y = zt,
            w = window;
        if (c) {
            var A = $e(i),
                E = "clientHeight",
                T = "clientWidth";
            A === fe(i) && "static" !== xe((A = Le(i))).position && "absolute" === a && ((E = "scrollHeight"), (T = "scrollWidth")),
                (s === zt || ((s === Vt || s === qt) && o === Yt)) && ((y = Rt), (m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height), (m *= l ? 1 : -1)),
                (s !== Vt && ((s !== zt && s !== Rt) || o !== Yt)) || ((v = qt), (f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width), (f *= l ? 1 : -1));
        }
        var C,
            O = Object.assign(
                {
                    position: a,
                },
                c && He
            ),
            x =
                !0 === h
                    ? (function (t, e) {
                          var i = t.x,
                              n = t.y,
                              s = e.devicePixelRatio || 1;
                          return {
                              x: we(i * s) / s || 0,
                              y: we(n * s) / s || 0,
                          };
                      })(
                          {
                              x: f,
                              y: m,
                          },
                          fe(i)
                      )
                    : {
                          x: f,
                          y: m,
                      };
        return (
            (f = x.x),
            (m = x.y),
            l
                ? Object.assign({}, O, (((C = {})[y] = b ? "0" : ""), (C[v] = _ ? "0" : ""), (C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)"), C))
                : Object.assign({}, O, (((e = {})[y] = b ? m + "px" : ""), (e[v] = _ ? f + "px" : ""), (e.transform = ""), e))
        );
    }
    const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: be(e.placement),
                    variation: Fe(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy,
                };
            null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                    {},
                    e.styles.popper,
                    We(
                        Object.assign({}, c, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: r,
                            roundOffsets: l,
                        })
                    )
                )),
                null != e.modifiersData.arrow &&
                    (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        We(
                            Object.assign({}, c, {
                                offsets: e.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l,
                            })
                        )
                    )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement,
                }));
        },
        data: {},
    };
    var ze = {
        passive: !0,
    };
    const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = fe(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return (
                o &&
                    c.forEach(function (t) {
                        t.addEventListener("scroll", i.update, ze);
                    }),
                a && l.addEventListener("resize", i.update, ze),
                function () {
                    o &&
                        c.forEach(function (t) {
                            t.removeEventListener("scroll", i.update, ze);
                        }),
                        a && l.removeEventListener("resize", i.update, ze);
                }
            );
        },
        data: {},
    };
    var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
    };
    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return qe[t];
        });
    }
    var Ke = {
        start: "end",
        end: "start",
    };
    function Qe(t) {
        return t.replace(/start|end/g, function (t) {
            return Ke[t];
        });
    }
    function Xe(t) {
        var e = fe(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset,
        };
    }
    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft;
    }
    function Ue(t) {
        var e = xe(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ge(t) {
        return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t));
    }
    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = fe(n),
            r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)));
    }
    function Ze(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
        });
    }
    function ti(t, e, i) {
        return e === Gt
            ? Ze(
                  (function (t, e) {
                      var i = fe(t),
                          n = Le(t),
                          s = i.visualViewport,
                          o = n.clientWidth,
                          r = n.clientHeight,
                          a = 0,
                          l = 0;
                      if (s) {
                          (o = s.width), (r = s.height);
                          var c = Ee();
                          (c || (!c && "fixed" === e)) && ((a = s.offsetLeft), (l = s.offsetTop));
                      }
                      return {
                          width: o,
                          height: r,
                          x: a + Ye(t),
                          y: l,
                      };
                  })(t, i)
              )
            : pe(e)
            ? (function (t, e) {
                  var i = Te(t, !1, "fixed" === e);
                  return (
                      (i.top = i.top + t.clientTop),
                      (i.left = i.left + t.clientLeft),
                      (i.bottom = i.top + t.clientHeight),
                      (i.right = i.left + t.clientWidth),
                      (i.width = t.clientWidth),
                      (i.height = t.clientHeight),
                      (i.x = i.left),
                      (i.y = i.top),
                      i
                  );
              })(e, i)
            : Ze(
                  (function (t) {
                      var e,
                          i = Le(t),
                          n = Xe(t),
                          s = null == (e = t.ownerDocument) ? void 0 : e.body,
                          o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                          r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                          a = -n.scrollLeft + Ye(t),
                          l = -n.scrollTop;
                      return (
                          "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o),
                          {
                              width: o,
                              height: r,
                              x: a,
                              y: l,
                          }
                      );
                  })(Le(t))
              );
    }
    function ei(t) {
        var e,
            i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? be(s) : null,
            r = s ? Fe(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case zt:
                e = {
                    x: a,
                    y: i.y - n.height,
                };
                break;
            case Rt:
                e = {
                    x: a,
                    y: i.y + i.height,
                };
                break;
            case qt:
                e = {
                    x: i.x + i.width,
                    y: l,
                };
                break;
            case Vt:
                e = {
                    x: i.x - n.width,
                    y: l,
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y,
                };
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case Xt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Yt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.strategy,
            r = void 0 === o ? t.strategy : o,
            a = i.boundary,
            l = void 0 === a ? Ut : a,
            c = i.rootBoundary,
            h = void 0 === c ? Gt : c,
            d = i.elementContext,
            u = void 0 === d ? Jt : d,
            f = i.altBoundary,
            p = void 0 !== f && f,
            m = i.padding,
            g = void 0 === m ? 0 : m,
            _ = Pe("number" != typeof g ? g : je(g, Qt)),
            b = u === Jt ? Zt : Jt,
            v = t.rects.popper,
            y = t.elements[p ? b : u],
            w = (function (t, e, i, n) {
                var s =
                        "clippingParents" === e
                            ? (function (t) {
                                  var e = Je(Se(t)),
                                      i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                                  return pe(i)
                                      ? e.filter(function (t) {
                                            return pe(t) && Oe(t, i) && "body" !== ue(t);
                                        })
                                      : [];
                              })(t)
                            : [].concat(e),
                    o = [].concat(s, [i]),
                    r = o[0],
                    a = o.reduce(function (e, i) {
                        var s = ti(t, i, n);
                        return (e.top = ve(s.top, e.top)), (e.right = ye(s.right, e.right)), (e.bottom = ye(s.bottom, e.bottom)), (e.left = ve(s.left, e.left)), e;
                    }, ti(t, r, n));
                return (a.width = a.right - a.left), (a.height = a.bottom - a.top), (a.x = a.left), (a.y = a.top), a;
            })(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
            A = Te(t.elements.reference),
            E = ei({
                reference: A,
                element: v,
                strategy: "absolute",
                placement: s,
            }),
            T = Ze(Object.assign({}, v, E)),
            C = u === Jt ? T : A,
            O = {
                top: w.top - C.top + _.top,
                bottom: C.bottom - w.bottom + _.bottom,
                left: w.left - C.left + _.left,
                right: C.right - w.right + _.right,
            },
            x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach(function (t) {
                var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
                    i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? ee : l,
            h = Fe(n),
            d = h
                ? a
                    ? te
                    : te.filter(function (t) {
                          return Fe(t) === h;
                      })
                : Qt,
            u = d.filter(function (t) {
                return c.indexOf(t) >= 0;
            });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return (
                (e[i] = ii(t, {
                    placement: i,
                    boundary: s,
                    rootBoundary: o,
                    padding: r,
                })[be(i)]),
                e
            );
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e];
        });
    }
    const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (
                    var s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 === r || r,
                        l = i.fallbackPlacements,
                        c = i.padding,
                        h = i.boundary,
                        d = i.rootBoundary,
                        u = i.altBoundary,
                        f = i.flipVariations,
                        p = void 0 === f || f,
                        m = i.allowedAutoPlacements,
                        g = e.options.placement,
                        _ = be(g),
                        b =
                            l ||
                            (_ !== g && p
                                ? (function (t) {
                                      if (be(t) === Kt) return [];
                                      var e = Ve(t);
                                      return [Qe(t), e, Qe(e)];
                                  })(g)
                                : [Ve(g)]),
                        v = [g].concat(b).reduce(function (t, i) {
                            return t.concat(
                                be(i) === Kt
                                    ? ni(e, {
                                          placement: i,
                                          boundary: h,
                                          rootBoundary: d,
                                          padding: c,
                                          flipVariations: p,
                                          allowedAutoPlacements: m,
                                      })
                                    : i
                            );
                        }, []),
                        y = e.rects.reference,
                        w = e.rects.popper,
                        A = new Map(),
                        E = !0,
                        T = v[0],
                        C = 0;
                    C < v.length;
                    C++
                ) {
                    var O = v[C],
                        x = be(O),
                        k = Fe(O) === Xt,
                        L = [zt, Rt].indexOf(x) >= 0,
                        S = L ? "width" : "height",
                        D = ii(e, {
                            placement: O,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c,
                        }),
                        $ = L ? (k ? qt : Vt) : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($),
                        N = [];
                    if (
                        (o && N.push(D[x] <= 0),
                        a && N.push(D[$] <= 0, D[I] <= 0),
                        N.every(function (t) {
                            return t;
                        }))
                    ) {
                        (T = O), (E = !1);
                        break;
                    }
                    A.set(O, N);
                }
                if (E)
                    for (
                        var P = function (t) {
                                var e = v.find(function (e) {
                                    var i = A.get(e);
                                    if (i)
                                        return i.slice(0, t).every(function (t) {
                                            return t;
                                        });
                                });
                                if (e) return (T = e), "break";
                            },
                            j = p ? 3 : 1;
                        j > 0 && "break" !== P(j);
                        j--
                    );
                e.placement !== T && ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1,
        },
    };
    function oi(t, e, i) {
        return (
            void 0 === i &&
                (i = {
                    x: 0,
                    y: 0,
                }),
            {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x,
            }
        );
    }
    function ri(t) {
        return [zt, qt, Rt, Vt].some(function (e) {
            return t[e] >= 0;
        });
    }
    const ai = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = ii(e, {
                        elementContext: "reference",
                    }),
                    a = ii(e, {
                        altBoundary: !0,
                    }),
                    l = oi(r, n),
                    c = oi(a, s, o),
                    h = ri(l),
                    d = ri(c);
                (e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d,
                }),
                    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                        "data-popper-reference-hidden": h,
                        "data-popper-escaped": d,
                    }));
            },
        },
        li = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = ee.reduce(function (t, i) {
                        return (
                            (t[i] = (function (t, e, i) {
                                var n = be(t),
                                    s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                                    o =
                                        "function" == typeof i
                                            ? i(
                                                  Object.assign({}, e, {
                                                      placement: t,
                                                  })
                                              )
                                            : i,
                                    r = o[0],
                                    a = o[1];
                                return (
                                    (r = r || 0),
                                    (a = (a || 0) * s),
                                    [Vt, qt].indexOf(n) >= 0
                                        ? {
                                              x: a,
                                              y: r,
                                          }
                                        : {
                                              x: r,
                                              y: a,
                                          }
                                );
                            })(i, e.rects, o)),
                            t
                        );
                    }, {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += l), (e.modifiersData.popperOffsets.y += c)), (e.modifiersData[n] = r);
            },
        },
        ci = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = ei({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement,
                });
            },
            data: {},
        },
        hi = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = ii(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h,
                    }),
                    _ = be(e.placement),
                    b = Fe(e.placement),
                    v = !b,
                    y = Ie(_),
                    w = "x" === y ? "y" : "x",
                    A = e.modifiersData.popperOffsets,
                    E = e.rects.reference,
                    T = e.rects.popper,
                    C =
                        "function" == typeof m
                            ? m(
                                  Object.assign({}, e.rects, {
                                      placement: e.placement,
                                  })
                              )
                            : m,
                    O =
                        "number" == typeof C
                            ? {
                                  mainAxis: C,
                                  altAxis: C,
                              }
                            : Object.assign(
                                  {
                                      mainAxis: 0,
                                      altAxis: 0,
                                  },
                                  C
                              ),
                    x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    k = {
                        x: 0,
                        y: 0,
                    };
                if (A) {
                    if (o) {
                        var L,
                            S = "y" === y ? zt : Vt,
                            D = "y" === y ? Rt : qt,
                            $ = "y" === y ? "height" : "width",
                            I = A[y],
                            N = I + g[S],
                            P = I - g[D],
                            j = f ? -T[$] / 2 : 0,
                            M = b === Xt ? E[$] : T[$],
                            F = b === Xt ? -T[$] : -E[$],
                            H = e.elements.arrow,
                            W =
                                f && H
                                    ? Ce(H)
                                    : {
                                          width: 0,
                                          height: 0,
                                      },
                            B = e.modifiersData["arrow#persistent"]
                                ? e.modifiersData["arrow#persistent"].padding
                                : {
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      left: 0,
                                  },
                            z = B[S],
                            R = B[D],
                            q = Ne(0, E[$], W[$]),
                            V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis,
                            K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis,
                            Q = e.elements.arrow && $e(e.elements.arrow),
                            X = Q ? ("y" === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
                            Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
                            U = I + K - Y,
                            G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                        (A[y] = G), (k[y] = G - I);
                    }
                    if (a) {
                        var J,
                            Z = "x" === y ? zt : Vt,
                            tt = "x" === y ? Rt : qt,
                            et = A[w],
                            it = "y" === w ? "height" : "width",
                            nt = et + g[Z],
                            st = et - g[tt],
                            ot = -1 !== [zt, Vt].indexOf(_),
                            rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                            at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                            lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
                            ct =
                                f && ot
                                    ? (function (t, e, i) {
                                          var n = Ne(t, e, i);
                                          return n > i ? i : n;
                                      })(at, et, lt)
                                    : Ne(f ? at : nt, et, f ? lt : st);
                        (A[w] = ct), (k[w] = ct - et);
                    }
                    e.modifiersData[n] = k;
                }
            },
            requiresIfExists: ["offset"],
        };
    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n,
            s,
            o = me(e),
            r =
                me(e) &&
                (function (t) {
                    var e = t.getBoundingClientRect(),
                        i = we(e.width) / t.offsetWidth || 1,
                        n = we(e.height) / t.offsetHeight || 1;
                    return 1 !== i || 1 !== n;
                })(e),
            a = Le(e),
            l = Te(t, r, i),
            c = {
                scrollLeft: 0,
                scrollTop: 0,
            },
            h = {
                x: 0,
                y: 0,
            };
        return (
            (o || (!o && !i)) &&
                (("body" !== ue(e) || Ue(a)) &&
                    (c =
                        (n = e) !== fe(n) && me(n)
                            ? {
                                  scrollLeft: (s = n).scrollLeft,
                                  scrollTop: s.scrollTop,
                              }
                            : Xe(n)),
                me(e) ? (((h = Te(e, !0)).x += e.clientLeft), (h.y += e.clientTop)) : a && (h.x = Ye(a))),
            {
                x: l.left + c.scrollLeft - h.x,
                y: l.top + c.scrollTop - h.y,
                width: l.width,
                height: l.height,
            }
        );
    }
    function ui(t) {
        var e = new Map(),
            i = new Set(),
            n = [];
        function s(t) {
            i.add(t.name),
                [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                    if (!i.has(t)) {
                        var n = e.get(t);
                        n && s(n);
                    }
                }),
                n.push(t);
        }
        return (
            t.forEach(function (t) {
                e.set(t.name, t);
            }),
            t.forEach(function (t) {
                i.has(t.name) || s(t);
            }),
            n
        );
    }
    var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute",
    };
    function pi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function mi(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? fi : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
                r,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, fi, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e,
                    },
                    attributes: {},
                    styles: {},
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function (i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(),
                            (a.options = Object.assign({}, o, a.options, s)),
                            (a.scrollParents = {
                                reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                                popper: Je(e),
                            });
                        var r,
                            c,
                            u = (function (t) {
                                var e = ui(t);
                                return de.reduce(function (t, i) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((r = [].concat(n, a.options.modifiers)),
                                (c = r.reduce(function (t, e) {
                                    var i = t[e.name];
                                    return (
                                        (t[e.name] = i
                                            ? Object.assign({}, i, e, {
                                                  options: Object.assign({}, i.options, e.options),
                                                  data: Object.assign({}, i.data, e.data),
                                              })
                                            : e),
                                        t
                                    );
                                }, {})),
                                Object.keys(c).map(function (t) {
                                    return c[t];
                                }))
                            );
                        return (
                            (a.orderedModifiers = u.filter(function (t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function (t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: h,
                                        options: n,
                                    });
                                    l.push(o || function () {});
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (pi(e, i)) {
                                (a.rects = {
                                    reference: di(e, $e(i), "fixed" === a.options.strategy),
                                    popper: Ce(i),
                                }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (t) {
                                        return (a.modifiersData[t.name] = Object.assign({}, t.data));
                                    });
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o &&
                                            (a =
                                                o({
                                                    state: a,
                                                    options: l,
                                                    name: d,
                                                    instance: h,
                                                }) || a);
                                    } else (a.reset = !1), (n = -1);
                            }
                        }
                    },
                    update:
                        ((s = function () {
                            return new Promise(function (t) {
                                h.forceUpdate(), t(a);
                            });
                        }),
                        function () {
                            return (
                                r ||
                                    (r = new Promise(function (t) {
                                        Promise.resolve().then(function () {
                                            (r = void 0), t(s());
                                        });
                                    })),
                                r
                            );
                        }),
                    destroy: function () {
                        d(), (c = !0);
                    },
                };
            if (!pi(t, e)) return h;
            function d() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (
                h.setOptions(i).then(function (t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var gi = mi(),
        _i = mi({
            defaultModifiers: [Re, ci, Be, _e],
        }),
        bi = mi({
            defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai],
        });
    const vi = Object.freeze(
            Object.defineProperty(
                {
                    __proto__: null,
                    afterMain: ae,
                    afterRead: se,
                    afterWrite: he,
                    applyStyles: _e,
                    arrow: Me,
                    auto: Kt,
                    basePlacements: Qt,
                    beforeMain: oe,
                    beforeRead: ie,
                    beforeWrite: le,
                    bottom: Rt,
                    clippingParents: Ut,
                    computeStyles: Be,
                    createPopper: bi,
                    createPopperBase: gi,
                    createPopperLite: _i,
                    detectOverflow: ii,
                    end: Yt,
                    eventListeners: Re,
                    flip: si,
                    hide: ai,
                    left: Vt,
                    main: re,
                    modifierPhases: de,
                    offset: li,
                    placements: ee,
                    popper: Jt,
                    popperGenerator: mi,
                    popperOffsets: ci,
                    preventOverflow: hi,
                    read: ne,
                    reference: Zt,
                    right: qt,
                    start: Xt,
                    top: zt,
                    variationPlacements: te,
                    viewport: Gt,
                    write: ce,
                },
                Symbol.toStringTag,
                {
                    value: "Module",
                }
            )
        ),
        yi = "dropdown",
        wi = ".bs.dropdown",
        Ai = ".data-api",
        Ei = "ArrowUp",
        Ti = "ArrowDown",
        Ci = `hide${wi}`,
        Oi = `hidden${wi}`,
        xi = `show${wi}`,
        ki = `shown${wi}`,
        Li = `click${wi}${Ai}`,
        Si = `keydown${wi}${Ai}`,
        Di = `keyup${wi}${Ai}`,
        $i = "show",
        Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ni = `${Ii}.${$i}`,
        Pi = ".dropdown-menu",
        ji = p() ? "top-end" : "top-start",
        Mi = p() ? "top-start" : "top-end",
        Fi = p() ? "bottom-end" : "bottom-start",
        Hi = p() ? "bottom-start" : "bottom-end",
        Wi = p() ? "left-start" : "right-start",
        Bi = p() ? "right-start" : "left-start",
        zi = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle",
        },
        Ri = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)",
        };
    class qi extends W {
        constructor(t, e) {
            super(t, e), (this._popper = null), (this._parent = this._element.parentNode), (this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent)), (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return zi;
        }
        static get DefaultType() {
            return Ri;
        }
        static get NAME() {
            return yi;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element,
            };
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t);
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element,
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove($i),
                    this._element.classList.remove($i),
                    this._element.setAttribute("aria-expanded", "false"),
                    F.removeDataAttribute(this._menu, "popper"),
                    N.trigger(this._element, Oi, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? (t = this._parent) : o(this._config.reference) ? (t = r(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains($i);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Wi;
            if (t.classList.contains("dropstart")) return Bi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? (e ? Mi : ji) : e ? Hi : Fi;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary,
                        },
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset(),
                        },
                    },
                ],
            };
            return (
                (this._inNavbar || "static" === this._config.display) &&
                    (F.setDataAttribute(this._menu, "popper", "static"),
                    (t.modifiers = [
                        {
                            name: "applyStyles",
                            enabled: !1,
                        },
                    ])),
                {
                    ...t,
                    ...g(this._config.popperConfig, [t]),
                }
            );
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t) => a(t));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
            const e = z.find(Ni);
            for (const i of e) {
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(),
                    s = n.includes(e._menu);
                if (n.includes(e._element) || ("inside" === e._config.autoClose && !s) || ("outside" === e._config.autoClose && s)) continue;
                if (e._menu.contains(t.target) && (("keyup" === t.type && "Tab" === t.key) || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element,
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Ei, Ti].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
                o = qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler),
        N.on(document, Si, Pi, qi.dataApiKeydownHandler),
        N.on(document, Li, qi.clearMenus),
        N.on(document, Di, qi.clearMenus),
        N.on(document, Li, Ii, function (t) {
            t.preventDefault(), qi.getOrCreateInstance(this).toggle();
        }),
        m(qi);
    const Vi = "backdrop",
        Ki = "show",
        Qi = `mousedown.bs.${Vi}`,
        Xi = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body",
        },
        Yi = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)",
        };
    class Ui extends H {
        constructor(t) {
            super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
        }
        static get Default() {
            return Xi;
        }
        static get DefaultType() {
            return Yi;
        }
        static get NAME() {
            return Vi;
        }
        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e),
                e.classList.add(Ki),
                this._emulateAnimation(() => {
                    g(t);
                });
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(Ki),
                  this._emulateAnimation(() => {
                      this.dispose(), g(t);
                  }))
                : g(t);
        }
        dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className), this._config.isAnimated && t.classList.add("fade"), (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = r(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                N.on(t, Qi, () => {
                    g(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated);
        }
    }
    const Gi = ".bs.focustrap",
        Ji = `focusin${Gi}`,
        Zi = `keydown.tab${Gi}`,
        tn = "backward",
        en = {
            autofocus: !0,
            trapElement: null,
        },
        nn = {
            autofocus: "boolean",
            trapElement: "element",
        };
    class sn extends H {
        constructor(t) {
            super(), (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);
        }
        static get Default() {
            return en;
        }
        static get DefaultType() {
            return nn;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t) => this._handleFocusin(t)), N.on(document, Zi, (t) => this._handleKeydown(t)), (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), N.off(document, Gi));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward");
        }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        rn = ".sticky-top",
        an = "padding-right",
        ln = "margin-right";
    class cn {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e) => e + t), this._setElementAttributes(on, an, (e) => e + t), this._setElementAttributes(rn, ln, (e) => e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else for (const i of z.find(t, this._element)) e(i);
        }
    }
    const hn = ".bs.modal",
        dn = `hide${hn}`,
        un = `hidePrevented${hn}`,
        fn = `hidden${hn}`,
        pn = `show${hn}`,
        mn = `shown${hn}`,
        gn = `resize${hn}`,
        _n = `click.dismiss${hn}`,
        bn = `mousedown.dismiss${hn}`,
        vn = `keydown.dismiss${hn}`,
        yn = `click${hn}.data-api`,
        wn = "modal-open",
        An = "show",
        En = "modal-static",
        Tn = {
            backdrop: !0,
            focus: !0,
            keyboard: !0,
        },
        Cn = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
        };
    class On extends W {
        constructor(t, e) {
            super(t, e),
                (this._dialog = z.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new cn()),
                this._addEventListeners();
        }
        static get Default() {
            return Tn;
        }
        static get DefaultType() {
            return Cn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                N.trigger(this._element, pn, {
                    relatedTarget: t,
                }).defaultPrevented ||
                ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            this._isShown &&
                !this._isTransitioning &&
                (N.trigger(this._element, dn).defaultPrevented ||
                    ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ui({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element,
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
                d(this._element),
                this._element.classList.add(An),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            N.trigger(this._element, mn, {
                                relatedTarget: t,
                            });
                    },
                    this._dialog,
                    this._isAnimated()
                );
        }
        _addEventListeners() {
            N.on(this._element, vn, (t) => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }),
                N.on(window, gn, () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog();
                }),
                N.on(this._element, bn, (t) => {
                    N.one(this._element, _n, (e) => {
                        this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                    });
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
                });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e ||
                this._element.classList.contains(En) ||
                (t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(En),
                this._queueCallback(() => {
                    this._element.classList.remove(En),
                        this._queueCallback(() => {
                            this._element.style.overflowY = e;
                        }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
        const e = z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            N.one(e, pn, (t) => {
                t.defaultPrevented ||
                    N.one(e, fn, () => {
                        a(this) && this.focus();
                    });
            });
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
    }),
        R(On),
        m(On);
    const xn = ".bs.offcanvas",
        kn = ".data-api",
        Ln = `load${xn}${kn}`,
        Sn = "show",
        Dn = "showing",
        $n = "hiding",
        In = ".offcanvas.show",
        Nn = `show${xn}`,
        Pn = `shown${xn}`,
        jn = `hide${xn}`,
        Mn = `hidePrevented${xn}`,
        Fn = `hidden${xn}`,
        Hn = `resize${xn}`,
        Wn = `click${xn}${kn}`,
        Bn = `keydown.dismiss${xn}`,
        zn = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1,
        },
        Rn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean",
        };
    class qn extends W {
        constructor(t, e) {
            super(t, e), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
        }
        static get Default() {
            return zn;
        }
        static get DefaultType() {
            return Rn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                N.trigger(this._element, Nn, {
                    relatedTarget: t,
                }).defaultPrevented ||
                ((this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new cn().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(Dn),
                this._queueCallback(
                    () => {
                        (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),
                            this._element.classList.add(Sn),
                            this._element.classList.remove(Dn),
                            N.trigger(this._element, Pn, {
                                relatedTarget: t,
                            });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
                (N.trigger(this._element, jn).defaultPrevented ||
                    (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.add($n),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N.trigger(this._element, Fn);
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t
                    ? () => {
                          "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Mn);
                      }
                    : null,
            });
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element,
            });
        }
        _addEventListeners() {
            N.on(this._element, Bn, (t) => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Mn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = z.getElementFromSelector(this);
        if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this))) return;
        N.one(e, Fn, () => {
            a(this) && this.focus();
        });
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this);
    }),
        N.on(window, Ln, () => {
            for (const t of z.find(In)) qn.getOrCreateInstance(t).show();
        }),
        N.on(window, Hn, () => {
            for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide();
        }),
        R(qn),
        m(qn);
    const Vn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            dd: [],
            div: [],
            dl: [],
            dt: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Xn = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
        },
        Yn = {
            allowList: Vn,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>",
        },
        Un = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string",
        },
        Gn = {
            entry: "(string|element|function|null)",
            selector: "(string|element)",
        };
    class Jn extends H {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return Yn;
        }
        static get DefaultType() {
            return Un;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return (
                this._checkContent(t),
                (this._config.content = {
                    ...this._config.content,
                    ...t,
                }),
                this
            );
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))
                super._typeCheckConfig(
                    {
                        selector: e,
                        entry: i,
                    },
                    Gn
                );
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? (o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? (n.innerHTML = this._maybeSanitize(e)) : (n.textContent = e)) : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize
                ? (function (t, e, i) {
                      if (!t.length) return t;
                      if (i && "function" == typeof i) return i(t);
                      const n = new window.DOMParser().parseFromString(t, "text/html"),
                          s = [].concat(...n.body.querySelectorAll("*"));
                      for (const t of s) {
                          const i = t.nodeName.toLowerCase();
                          if (!Object.keys(e).includes(i)) {
                              t.remove();
                              continue;
                          }
                          const n = [].concat(...t.attributes),
                              s = [].concat(e["*"] || [], e[i] || []);
                          for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName);
                      }
                      return n.body.innerHTML;
                  })(t, this._config.allowList, this._config.sanitizeFn)
                : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [this]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return (e.innerHTML = ""), void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ts = "fade",
        es = "show",
        is = ".modal",
        ns = "hide.bs.modal",
        ss = "hover",
        os = "focus",
        rs = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left",
        },
        as = {
            allowList: Vn,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        ls = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class cs extends W {
        constructor(t, e) {
            if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
        }
        static get Default() {
            return as;
        }
        static get DefaultType() {
            return ls;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout),
                N.off(this._element.closest(is), ns, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))),
                (this._popper = this._createPopper(i)),
                i.classList.add(es),
                "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
            this._queueCallback(
                () => {
                    N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
            );
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if ((this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)) for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                (this._activeTrigger.click = !1),
                    (this._activeTrigger[os] = !1),
                    (this._activeTrigger[ss] = !1),
                    (this._isHovered = null),
                    this._queueCallback(
                        () => {
                            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
                        },
                        this.tip,
                        this._isAnimated()
                    );
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t) => {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e;
        }
        setContent(t) {
            (this._newContent = t), this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory
                    ? this._templateFactory.changeContent(t)
                    : (this._templateFactory = new Jn({
                          ...this._config,
                          content: t,
                          extraClass: this._resolvePossibleFunction(this._config.customClass),
                      })),
                this._templateFactory
            );
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle(),
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || (this.tip && this.tip.classList.contains(ts));
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(es);
        }
        _createPopper(t) {
            const e = g(this._config.placement, [this, t, this._element]),
                i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t) => Number.parseInt(t, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return g(t, [this._element]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset(),
                        },
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary,
                        },
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`,
                        },
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t) => {
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        },
                    },
                ],
            };
            return {
                ...e,
                ...g(this._config.popperConfig, [e]),
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t) => {
                        this._initializeOnDelegatedTarget(t).toggle();
                    });
                else if ("manual" !== e) {
                    const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                        i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    N.on(this._element, t, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusin" === t.type ? os : ss] = !0), e._enter();
                    }),
                        N.on(this._element, i, this._config.selector, (t) => {
                            const e = this._initializeOnDelegatedTarget(t);
                            (e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget)), e._leave();
                        });
                }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
                N.on(this._element.closest(is), ns, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                      this._isHovered && this.show();
                  }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                    this._isHovered || this.hide();
                }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
            return (
                (t = {
                    ...e,
                    ...("object" == typeof t && t ? t : {}),
                }),
                (t = this._mergeConfigObj(t)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        _configAfterMerge(t) {
            return (
                (t.container = !1 === t.container ? document.body : r(t.container)),
                "number" == typeof t.delay &&
                    (t.delay = {
                        show: t.delay,
                        hide: t.delay,
                    }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
            return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(cs);
    const hs = {
            ...cs.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        ds = {
            ...cs.DefaultType,
            content: "(null|string|element|function)",
        };
    class us extends cs {
        static get Default() {
            return hs;
        }
        static get DefaultType() {
            return ds;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent(),
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    m(us);
    const fs = ".bs.scrollspy",
        ps = `activate${fs}`,
        ms = `click${fs}`,
        gs = `load${fs}.data-api`,
        _s = "active",
        bs = "[href]",
        vs = ".nav-link",
        ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
        ws = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [0.1, 0.5, 1],
        },
        As = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array",
        };
    class Es extends W {
        constructor(t, e) {
            super(t, e),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0,
                }),
                this.refresh();
        }
        static get Default() {
            return ws;
        }
        static get DefaultType() {
            return As;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values()) this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.target = r(t.target) || document.body), (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin), "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t) => Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
                (N.off(this._config.target, ms),
                N.on(this._config.target, ms, bs, (t) => {
                    const e = this._observableSections.get(t.target.hash);
                    if (e) {
                        t.preventDefault();
                        const i = this._rootElement || window,
                            n = e.offsetTop - this._element.offsetTop;
                        if (i.scrollTo)
                            return void i.scrollTo({
                                top: n,
                                behavior: "smooth",
                            });
                        i.scrollTop = n;
                    }
                }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
            };
            return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                i = (t) => {
                    (this._previousScrollData.visibleEntryTop = t.target.offsetTop), this._process(e(t));
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if ((i(o), !n)) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()), (this._observableSections = new Map());
            const t = z.find(bs, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = t),
                t.classList.add(_s),
                this._activateParents(t),
                N.trigger(this._element, ps, {
                    relatedTarget: t,
                }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
            else for (const e of z.parents(t, ".nav, .list-group")) for (const t of z.prev(e, ys)) t.classList.add(_s);
        }
        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e) t.classList.remove(_s);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(window, gs, () => {
        for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t);
    }),
        m(Es);
    const Ts = ".bs.tab",
        Cs = `hide${Ts}`,
        Os = `hidden${Ts}`,
        xs = `show${Ts}`,
        ks = `shown${Ts}`,
        Ls = `click${Ts}`,
        Ss = `keydown${Ts}`,
        Ds = `load${Ts}`,
        $s = "ArrowLeft",
        Is = "ArrowRight",
        Ns = "ArrowUp",
        Ps = "ArrowDown",
        js = "Home",
        Ms = "End",
        Fs = "active",
        Hs = "fade",
        Ws = "show",
        Bs = ".dropdown-toggle",
        zs = `:not(${Bs})`,
        Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
        Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
        constructor(t) {
            super(t), (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t) => this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e
                    ? N.trigger(e, Cs, {
                          relatedTarget: t,
                      })
                    : null;
            N.trigger(t, xs, {
                relatedTarget: e,
            }).defaultPrevented ||
                (i && i.defaultPrevented) ||
                (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t &&
                (t.classList.add(Fs),
                this._activate(z.getElementFromSelector(t)),
                this._queueCallback(
                    () => {
                        "tab" === t.getAttribute("role")
                            ? (t.removeAttribute("tabindex"),
                              t.setAttribute("aria-selected", !0),
                              this._toggleDropDown(t, !0),
                              N.trigger(t, ks, {
                                  relatedTarget: e,
                              }))
                            : t.classList.add(Ws);
                    },
                    t,
                    t.classList.contains(Hs)
                ));
        }
        _deactivate(t, e) {
            t &&
                (t.classList.remove(Fs),
                t.blur(),
                this._deactivate(z.getElementFromSelector(t)),
                this._queueCallback(
                    () => {
                        "tab" === t.getAttribute("role")
                            ? (t.setAttribute("aria-selected", !1),
                              t.setAttribute("tabindex", "-1"),
                              this._toggleDropDown(t, !1),
                              N.trigger(t, Os, {
                                  relatedTarget: e,
                              }))
                            : t.classList.remove(Ws);
                    },
                    t,
                    t.classList.contains(Hs)
                ));
        }
        _keydown(t) {
            if (![$s, Is, Ns, Ps, js, Ms].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t) => !l(t));
            let i;
            if ([js, Ms].includes(t.key)) i = e[t.key === js ? 0 : e.length - 1];
            else {
                const n = [Is, Ps].includes(t.key);
                i = b(e, t.target, n, !0);
            }
            i &&
                (i.focus({
                    preventScroll: !0,
                }),
                Ks.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return z.find(qs, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
                i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
                e || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Fs);
        }
        _getInnerElement(t) {
            return t.matches(qs) ? t : z.findOne(qs, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    N.on(document, Ls, Rs, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
    }),
        N.on(window, Ds, () => {
            for (const t of z.find(Vs)) Ks.getOrCreateInstance(t);
        }),
        m(Ks);
    const Qs = ".bs.toast",
        Xs = `mouseover${Qs}`,
        Ys = `mouseout${Qs}`,
        Us = `focusin${Qs}`,
        Gs = `focusout${Qs}`,
        Js = `hide${Qs}`,
        Zs = `hidden${Qs}`,
        to = `show${Qs}`,
        eo = `shown${Qs}`,
        io = "hide",
        no = "show",
        so = "showing",
        oo = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number",
        },
        ro = {
            animation: !0,
            autohide: !0,
            delay: 5e3,
        };
    class ao extends W {
        constructor(t, e) {
            super(t, e), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
        }
        static get Default() {
            return ro;
        }
        static get DefaultType() {
            return oo;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            N.trigger(this._element, to).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(io),
                d(this._element),
                this._element.classList.add(no, so),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this.isShown() &&
                (N.trigger(this._element, Js).defaultPrevented ||
                    (this._element.classList.add(so),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(no);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            N.on(this._element, Xs, (t) => this._onInteraction(t, !0)),
                N.on(this._element, Ys, (t) => this._onInteraction(t, !1)),
                N.on(this._element, Us, (t) => this._onInteraction(t, !0)),
                N.on(this._element, Gs, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        R(ao),
        m(ao),
        {
            Alert: Q,
            Button: Y,
            Carousel: xt,
            Collapse: Bt,
            Dropdown: qi,
            Modal: On,
            Offcanvas: qn,
            Popover: us,
            ScrollSpy: Es,
            Tab: Ks,
            Toast: ao,
            Tooltip: cs,
        }
    );
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */
!(function (n, t) {
    "function" == typeof define && define.amd
        ? define(function () {
              return t(n, n.document, undefined);
          })
        : "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t(n, n.document, undefined))
        : t(n, n.document, undefined);
})("undefined" != typeof window ? window : this, function (vi, hi, di) {
    "use strict";
    var o,
        l,
        a,
        u,
        pi = "object",
        bi = "function",
        mi = "array",
        gi = "string",
        wi = "boolean",
        yi = "number",
        f = "undefined",
        n = "null",
        xi = {
            c: "class",
            s: "style",
            i: "id",
            l: "length",
            p: "prototype",
            ti: "tabindex",
            oH: "offsetHeight",
            cH: "clientHeight",
            sH: "scrollHeight",
            oW: "offsetWidth",
            cW: "clientWidth",
            sW: "scrollWidth",
            hOP: "hasOwnProperty",
            bCR: "getBoundingClientRect",
        },
        _i =
            ((o = {}),
            (l = {}),
            {
                e: (a = ["-webkit-", "-moz-", "-o-", "-ms-"]),
                u: (u = ["WebKit", "Moz", "O", "MS"]),
                v: function (n) {
                    var t = l[n];
                    if (l[xi.hOP](n)) return t;
                    for (var r, e, i, o = c(n), u = hi.createElement("div")[xi.s], f = 0; f < a.length; f++)
                        for (i = a[f].replace(/-/g, ""), r = [n, a[f] + n, i + o, c(i) + o], e = 0; e < r[xi.l]; e++)
                            if (u[r[e]] !== di) {
                                t = r[e];
                                break;
                            }
                    return (l[n] = t);
                },
                d: function (n, t, r) {
                    var e = n + " " + t,
                        i = l[e];
                    if (l[xi.hOP](e)) return i;
                    for (var o, u = hi.createElement("div")[xi.s], f = t.split(" "), a = r || "", c = 0, s = -1; c < f[xi.l]; c++)
                        for (; s < _i.e[xi.l]; s++)
                            if (((o = s < 0 ? f[c] : _i.e[s] + f[c]), (u.cssText = n + ":" + o + a), u[xi.l])) {
                                i = o;
                                break;
                            }
                    return (l[e] = i);
                },
                m: function (n, t, r) {
                    var e = 0,
                        i = o[n];
                    if (!o[xi.hOP](n)) {
                        for (i = vi[n]; e < u[xi.l]; e++) i = i || vi[(t ? u[e] : u[e].toLowerCase()) + c(n)];
                        o[n] = i;
                    }
                    return i || r;
                },
            });
    function c(n) {
        return n.charAt(0).toUpperCase() + n.slice(1);
    }
    var Oi = {
        wW: r(t, 0, !0),
        wH: r(t, 0),
        mO: r(_i.m, 0, "MutationObserver", !0),
        rO: r(_i.m, 0, "ResizeObserver", !0),
        rAF: r(_i.m, 0, "requestAnimationFrame", !1, function (n) {
            return vi.setTimeout(n, 1e3 / 60);
        }),
        cAF: r(_i.m, 0, "cancelAnimationFrame", !1, function (n) {
            return vi.clearTimeout(n);
        }),
        now: function () {
            return (Date.now && Date.now()) || new Date().getTime();
        },
        stpP: function (n) {
            n.stopPropagation ? n.stopPropagation() : (n.cancelBubble = !0);
        },
        prvD: function (n) {
            n.preventDefault && n.cancelable ? n.preventDefault() : (n.returnValue = !1);
        },
        page: function (n) {
            var t = ((n = n.originalEvent || n).target || n.srcElement || hi).ownerDocument || hi,
                r = t.documentElement,
                e = t.body;
            if (n.touches === di)
                return !n.pageX && n.clientX && null != n.clientX
                    ? {
                          x: n.clientX + ((r && r.scrollLeft) || (e && e.scrollLeft) || 0) - ((r && r.clientLeft) || (e && e.clientLeft) || 0),
                          y: n.clientY + ((r && r.scrollTop) || (e && e.scrollTop) || 0) - ((r && r.clientTop) || (e && e.clientTop) || 0),
                      }
                    : {
                          x: n.pageX,
                          y: n.pageY,
                      };
            var i = n.touches[0];
            return {
                x: i.pageX,
                y: i.pageY,
            };
        },
        mBtn: function (n) {
            var t = n.button;
            return n.which || t === di ? n.which : 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0;
        },
        inA: function (n, t) {
            for (var r = 0; r < t[xi.l]; r++)
                try {
                    if (t[r] === n) return r;
                } catch (e) {}
            return -1;
        },
        isA: function (n) {
            var t = Array.isArray;
            return t ? t(n) : this.type(n) == mi;
        },
        type: function (n) {
            return n === di || null === n
                ? n + ""
                : Object[xi.p].toString
                      .call(n)
                      .replace(/^\[object (.+)\]$/, "$1")
                      .toLowerCase();
        },
        bind: r,
    };
    function t(n) {
        return n ? vi.innerWidth || hi.documentElement[xi.cW] || hi.body[xi.cW] : vi.innerHeight || hi.documentElement[xi.cH] || hi.body[xi.cH];
    }
    function r(n, t) {
        if (typeof n != bi) throw "Can't bind function!";
        var r = xi.p,
            e = Array[r].slice.call(arguments, 2),
            i = function () {},
            o = function () {
                return n.apply(this instanceof i ? this : t, e.concat(Array[r].slice.call(arguments)));
            };
        return n[r] && (i[r] = n[r]), (o[r] = new i()), o;
    }
    var s,
        v,
        h,
        k,
        I,
        T,
        d,
        p,
        Si = Math,
        zi = vi.jQuery,
        A =
            ((s = {
                p: Si.PI,
                c: Si.cos,
                s: Si.sin,
                w: Si.pow,
                t: Si.sqrt,
                n: Si.asin,
                a: Si.abs,
                o: 1.70158,
            }),
            {
                swing: function (n, t, r, e, i) {
                    return 0.5 - s.c(n * s.p) / 2;
                },
                linear: function (n, t, r, e, i) {
                    return n;
                },
                easeInQuad: function (n, t, r, e, i) {
                    return e * (t /= i) * t + r;
                },
                easeOutQuad: function (n, t, r, e, i) {
                    return -e * (t /= i) * (t - 2) + r;
                },
                easeInOutQuad: function (n, t, r, e, i) {
                    return (t /= i / 2) < 1 ? (e / 2) * t * t + r : (-e / 2) * (--t * (t - 2) - 1) + r;
                },
                easeInCubic: function (n, t, r, e, i) {
                    return e * (t /= i) * t * t + r;
                },
                easeOutCubic: function (n, t, r, e, i) {
                    return e * ((t = t / i - 1) * t * t + 1) + r;
                },
                easeInOutCubic: function (n, t, r, e, i) {
                    return (t /= i / 2) < 1 ? (e / 2) * t * t * t + r : (e / 2) * ((t -= 2) * t * t + 2) + r;
                },
                easeInQuart: function (n, t, r, e, i) {
                    return e * (t /= i) * t * t * t + r;
                },
                easeOutQuart: function (n, t, r, e, i) {
                    return -e * ((t = t / i - 1) * t * t * t - 1) + r;
                },
                easeInOutQuart: function (n, t, r, e, i) {
                    return (t /= i / 2) < 1 ? (e / 2) * t * t * t * t + r : (-e / 2) * ((t -= 2) * t * t * t - 2) + r;
                },
                easeInQuint: function (n, t, r, e, i) {
                    return e * (t /= i) * t * t * t * t + r;
                },
                easeOutQuint: function (n, t, r, e, i) {
                    return e * ((t = t / i - 1) * t * t * t * t + 1) + r;
                },
                easeInOutQuint: function (n, t, r, e, i) {
                    return (t /= i / 2) < 1 ? (e / 2) * t * t * t * t * t + r : (e / 2) * ((t -= 2) * t * t * t * t + 2) + r;
                },
                easeInSine: function (n, t, r, e, i) {
                    return -e * s.c((t / i) * (s.p / 2)) + e + r;
                },
                easeOutSine: function (n, t, r, e, i) {
                    return e * s.s((t / i) * (s.p / 2)) + r;
                },
                easeInOutSine: function (n, t, r, e, i) {
                    return (-e / 2) * (s.c((s.p * t) / i) - 1) + r;
                },
                easeInExpo: function (n, t, r, e, i) {
                    return 0 == t ? r : e * s.w(2, 10 * (t / i - 1)) + r;
                },
                easeOutExpo: function (n, t, r, e, i) {
                    return t == i ? r + e : e * (1 - s.w(2, (-10 * t) / i)) + r;
                },
                easeInOutExpo: function (n, t, r, e, i) {
                    return 0 == t ? r : t == i ? r + e : (t /= i / 2) < 1 ? (e / 2) * s.w(2, 10 * (t - 1)) + r : (e / 2) * (2 - s.w(2, -10 * --t)) + r;
                },
                easeInCirc: function (n, t, r, e, i) {
                    return -e * (s.t(1 - (t /= i) * t) - 1) + r;
                },
                easeOutCirc: function (n, t, r, e, i) {
                    return e * s.t(1 - (t = t / i - 1) * t) + r;
                },
                easeInOutCirc: function (n, t, r, e, i) {
                    return (t /= i / 2) < 1 ? (-e / 2) * (s.t(1 - t * t) - 1) + r : (e / 2) * (s.t(1 - (t -= 2) * t) + 1) + r;
                },
                easeInElastic: function (n, t, r, e, i) {
                    var o = s.o,
                        u = 0,
                        f = e;
                    return 0 == t ? r : 1 == (t /= i) ? r + e : ((u = u || 0.3 * i), (o = f < s.a(e) ? ((f = e), u / 4) : (u / (2 * s.p)) * s.n(e / f)), -(f * s.w(2, 10 * --t) * s.s(((t * i - o) * (2 * s.p)) / u)) + r);
                },
                easeOutElastic: function (n, t, r, e, i) {
                    var o = s.o,
                        u = 0,
                        f = e;
                    return 0 == t ? r : 1 == (t /= i) ? r + e : ((u = u || 0.3 * i), (o = f < s.a(e) ? ((f = e), u / 4) : (u / (2 * s.p)) * s.n(e / f)), f * s.w(2, -10 * t) * s.s(((t * i - o) * (2 * s.p)) / u) + e + r);
                },
                easeInOutElastic: function (n, t, r, e, i) {
                    var o = s.o,
                        u = 0,
                        f = e;
                    return 0 == t
                        ? r
                        : 2 == (t /= i / 2)
                        ? r + e
                        : ((u = u || i * (0.3 * 1.5)),
                          (o = f < s.a(e) ? ((f = e), u / 4) : (u / (2 * s.p)) * s.n(e / f)),
                          t < 1 ? f * s.w(2, 10 * --t) * s.s(((t * i - o) * (2 * s.p)) / u) * -0.5 + r : f * s.w(2, -10 * --t) * s.s(((t * i - o) * (2 * s.p)) / u) * 0.5 + e + r);
                },
                easeInBack: function (n, t, r, e, i, o) {
                    return e * (t /= i) * t * (((o = o || s.o) + 1) * t - o) + r;
                },
                easeOutBack: function (n, t, r, e, i, o) {
                    return e * ((t = t / i - 1) * t * (((o = o || s.o) + 1) * t + o) + 1) + r;
                },
                easeInOutBack: function (n, t, r, e, i, o) {
                    return (o = o || s.o), (t /= i / 2) < 1 ? (e / 2) * (t * t * ((1 + (o *= 1.525)) * t - o)) + r : (e / 2) * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + r;
                },
                easeInBounce: function (n, t, r, e, i) {
                    return e - this.easeOutBounce(n, i - t, 0, e, i) + r;
                },
                easeOutBounce: function (n, t, r, e, i) {
                    var o = 7.5625;
                    return (t /= i) < 1 / 2.75
                        ? e * (o * t * t) + r
                        : t < 2 / 2.75
                        ? e * (o * (t -= 1.5 / 2.75) * t + 0.75) + r
                        : t < 2.5 / 2.75
                        ? e * (o * (t -= 2.25 / 2.75) * t + 0.9375) + r
                        : e * (o * (t -= 2.625 / 2.75) * t + 0.984375) + r;
                },
                easeInOutBounce: function (n, t, r, e, i) {
                    return t < i / 2 ? 0.5 * this.easeInBounce(n, 2 * t, 0, e, i) + r : 0.5 * this.easeOutBounce(n, 2 * t - i, 0, e, i) + 0.5 * e + r;
                },
            }),
        Ci =
            ((v = /[^\x20\t\r\n\f]+/g),
            (h = " "),
            (k = "scrollLeft"),
            (I = "scrollTop"),
            (T = []),
            (d = Oi.type),
            (p = {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            }),
            (M[xi.p] = {
                on: function (t, r) {
                    var e,
                        i = (t = (t || "").match(v) || [""])[xi.l],
                        o = 0;
                    return this.each(function () {
                        e = this;
                        try {
                            if (e.addEventListener) for (; o < i; o++) e.addEventListener(t[o], r);
                            else if (e.detachEvent) for (; o < i; o++) e.attachEvent("on" + t[o], r);
                        } catch (n) {}
                    });
                },
                off: function (t, r) {
                    var e,
                        i = (t = (t || "").match(v) || [""])[xi.l],
                        o = 0;
                    return this.each(function () {
                        e = this;
                        try {
                            if (e.removeEventListener) for (; o < i; o++) e.removeEventListener(t[o], r);
                            else if (e.detachEvent) for (; o < i; o++) e.detachEvent("on" + t[o], r);
                        } catch (n) {}
                    });
                },
                one: function (n, i) {
                    return (
                        (n = (n || "").match(v) || [""]),
                        this.each(function () {
                            var e = M(this);
                            M.each(n, function (n, t) {
                                var r = function (n) {
                                    i.call(this, n), e.off(t, r);
                                };
                                e.on(t, r);
                            });
                        })
                    );
                },
                trigger: function (n) {
                    var t, r;
                    return this.each(function () {
                        (t = this), hi.createEvent ? ((r = hi.createEvent("HTMLEvents")).initEvent(n, !0, !1), t.dispatchEvent(r)) : t.fireEvent("on" + n);
                    });
                },
                append: function (n) {
                    return this.each(function () {
                        i(this, "beforeend", n);
                    });
                },
                prepend: function (n) {
                    return this.each(function () {
                        i(this, "afterbegin", n);
                    });
                },
                before: function (n) {
                    return this.each(function () {
                        i(this, "beforebegin", n);
                    });
                },
                after: function (n) {
                    return this.each(function () {
                        i(this, "afterend", n);
                    });
                },
                remove: function () {
                    return this.each(function () {
                        var n = this.parentNode;
                        null != n && n.removeChild(this);
                    });
                },
                unwrap: function () {
                    var n,
                        t,
                        r,
                        e = [];
                    for (
                        this.each(function () {
                            -1 === H((r = this.parentNode), e) && e.push(r);
                        }),
                            n = 0;
                        n < e[xi.l];
                        n++
                    ) {
                        for (t = e[n], r = t.parentNode; t.firstChild; ) r.insertBefore(t.firstChild, t);
                        r.removeChild(t);
                    }
                    return this;
                },
                wrapAll: function (n) {
                    for (var t, r = this, e = M(n)[0], i = e, o = r[0].parentNode, u = r[0].previousSibling; 0 < i.childNodes[xi.l]; ) i = i.childNodes[0];
                    for (t = 0; r[xi.l] - t; i.firstChild === r[0] && t++) i.appendChild(r[t]);
                    var f = u ? u.nextSibling : o.firstChild;
                    return o.insertBefore(e, f), this;
                },
                wrapInner: function (r) {
                    return this.each(function () {
                        var n = M(this),
                            t = n.contents();
                        t[xi.l] ? t.wrapAll(r) : n.append(r);
                    });
                },
                wrap: function (n) {
                    return this.each(function () {
                        M(this).wrapAll(n);
                    });
                },
                css: function (n, t) {
                    var r,
                        e,
                        i,
                        o = vi.getComputedStyle;
                    return d(n) == gi
                        ? t === di
                            ? ((r = this[0]), (i = o ? o(r, null) : r.currentStyle[n]), o ? (null != i ? i.getPropertyValue(n) : r[xi.s][n]) : i)
                            : this.each(function () {
                                  y(this, n, t);
                              })
                        : this.each(function () {
                              for (e in n) y(this, e, n[e]);
                          });
                },
                hasClass: function (n) {
                    for (var t, r, e = 0, i = h + n + h; (t = this[e++]); ) {
                        if ((r = t.classList) && r.contains(n)) return !0;
                        if (1 === t.nodeType && -1 < (h + g(t.className + "") + h).indexOf(i)) return !0;
                    }
                    return !1;
                },
                addClass: function (n) {
                    var t,
                        r,
                        e,
                        i,
                        o,
                        u,
                        f,
                        a,
                        c = 0,
                        s = 0;
                    if (n)
                        for (t = n.match(v) || []; (r = this[c++]); )
                            if (((a = r.classList), f === di && (f = a !== di), f)) for (; (o = t[s++]); ) a.add(o);
                            else if (((i = r.className + ""), (e = 1 === r.nodeType && h + g(i) + h))) {
                                for (; (o = t[s++]); ) e.indexOf(h + o + h) < 0 && (e += o + h);
                                i !== (u = g(e)) && (r.className = u);
                            }
                    return this;
                },
                removeClass: function (n) {
                    var t,
                        r,
                        e,
                        i,
                        o,
                        u,
                        f,
                        a,
                        c = 0,
                        s = 0;
                    if (n)
                        for (t = n.match(v) || []; (r = this[c++]); )
                            if (((a = r.classList), f === di && (f = a !== di), f)) for (; (o = t[s++]); ) a.remove(o);
                            else if (((i = r.className + ""), (e = 1 === r.nodeType && h + g(i) + h))) {
                                for (; (o = t[s++]); ) for (; -1 < e.indexOf(h + o + h); ) e = e.replace(h + o + h, h);
                                i !== (u = g(e)) && (r.className = u);
                            }
                    return this;
                },
                hide: function () {
                    return this.each(function () {
                        this[xi.s].display = "none";
                    });
                },
                show: function () {
                    return this.each(function () {
                        this[xi.s].display = "block";
                    });
                },
                attr: function (n, t) {
                    for (var r, e = 0; (r = this[e++]); ) {
                        if (t === di) return r.getAttribute(n);
                        r.setAttribute(n, t);
                    }
                    return this;
                },
                removeAttr: function (n) {
                    return this.each(function () {
                        this.removeAttribute(n);
                    });
                },
                offset: function () {
                    var n = this[0][xi.bCR](),
                        t = vi.pageXOffset || hi.documentElement[k],
                        r = vi.pageYOffset || hi.documentElement[I];
                    return {
                        top: n.top + r,
                        left: n.left + t,
                    };
                },
                position: function () {
                    var n = this[0];
                    return {
                        top: n.offsetTop,
                        left: n.offsetLeft,
                    };
                },
                scrollLeft: function (n) {
                    for (var t, r = 0; (t = this[r++]); ) {
                        if (n === di) return t[k];
                        t[k] = n;
                    }
                    return this;
                },
                scrollTop: function (n) {
                    for (var t, r = 0; (t = this[r++]); ) {
                        if (n === di) return t[I];
                        t[I] = n;
                    }
                    return this;
                },
                val: function (n) {
                    var t = this[0];
                    return n ? ((t.value = n), this) : t.value;
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (n) {
                    return M(this[0 <= n ? n : this[xi.l] + n]);
                },
                find: function (t) {
                    var r,
                        e = [];
                    return (
                        this.each(function () {
                            var n = this.querySelectorAll(t);
                            for (r = 0; r < n[xi.l]; r++) e.push(n[r]);
                        }),
                        M(e)
                    );
                },
                children: function (n) {
                    var t,
                        r,
                        e,
                        i = [];
                    return (
                        this.each(function () {
                            for (r = this.children, e = 0; e < r[xi.l]; e++) (t = r[e]), (!n || (t.matches && t.matches(n)) || w(t, n)) && i.push(t);
                        }),
                        M(i)
                    );
                },
                parent: function (n) {
                    var t,
                        r = [];
                    return (
                        this.each(function () {
                            (t = this.parentNode), (n && !M(t).is(n)) || r.push(t);
                        }),
                        M(r)
                    );
                },
                is: function (n) {
                    var t, r;
                    for (r = 0; r < this[xi.l]; r++) {
                        if (((t = this[r]), ":visible" === n)) return _(t);
                        if (":hidden" === n) return !_(t);
                        if ((t.matches && t.matches(n)) || w(t, n)) return !0;
                    }
                    return !1;
                },
                contents: function () {
                    var n,
                        t,
                        r = [];
                    return (
                        this.each(function () {
                            for (n = this.childNodes, t = 0; t < n[xi.l]; t++) r.push(n[t]);
                        }),
                        M(r)
                    );
                },
                each: function (n) {
                    return e(this, n);
                },
                animate: function (n, t, r, e) {
                    return this.each(function () {
                        x(this, n, t, r, e);
                    });
                },
                stop: function (n, t) {
                    return this.each(function () {
                        !(function f(n, t, r) {
                            for (var e, i, o, u = 0; u < T[xi.l]; u++)
                                if ((e = T[u]).el === n) {
                                    if (0 < e.q[xi.l]) {
                                        if ((((i = e.q[0]).stop = !0), Oi.cAF()(i.frame), e.q.splice(0, 1), r)) for (o in i.props) W(n, o, i.props[o]);
                                        t ? (e.q = []) : N(e, !1);
                                    }
                                    break;
                                }
                        })(this, n, t);
                    });
                },
            }),
            b(M, {
                extend: b,
                inArray: H,
                isEmptyObject: L,
                isPlainObject: R,
                each: e,
            }),
            M);
    function b() {
        var n,
            t,
            r,
            e,
            i,
            o,
            u = arguments[0] || {},
            f = 1,
            a = arguments[xi.l],
            c = !1;
        for (d(u) == wi && ((c = u), (u = arguments[1] || {}), (f = 2)), d(u) != pi && !d(u) == bi && (u = {}), a === f && ((u = M), --f); f < a; f++)
            if (null != (i = arguments[f]))
                for (e in i) (n = u[e]), u !== (r = i[e]) && (c && r && (R(r) || (t = Oi.isA(r))) ? ((o = t ? ((t = !1), n && Oi.isA(n) ? n : []) : n && R(n) ? n : {}), (u[e] = b(c, o, r))) : r !== di && (u[e] = r));
        return u;
    }
    function H(n, t, r) {
        for (var e = r || 0; e < t[xi.l]; e++) if (t[e] === n) return e;
        return -1;
    }
    function E(n) {
        return d(n) == bi;
    }
    function L(n) {
        for (var t in n) return !1;
        return !0;
    }
    function R(n) {
        if (!n || d(n) != pi) return !1;
        var t,
            r = xi.p,
            e = Object[r].hasOwnProperty,
            i = e.call(n, "constructor"),
            o = n.constructor && n.constructor[r] && e.call(n.constructor[r], "isPrototypeOf");
        if (n.constructor && !i && !o) return !1;
        for (t in n);
        return d(t) == f || e.call(n, t);
    }
    function e(n, t) {
        var r = 0;
        if (m(n)) for (; r < n[xi.l] && !1 !== t.call(n[r], r, n[r]); r++);
        else for (r in n) if (!1 === t.call(n[r], r, n[r])) break;
        return n;
    }
    function m(n) {
        var t = !!n && [xi.l] in n && n[xi.l],
            r = d(n);
        return !E(r) && (r == mi || 0 === t || (d(t) == yi && 0 < t && t - 1 in n));
    }
    function g(n) {
        return (n.match(v) || []).join(h);
    }
    function w(n, t) {
        for (var r = (n.parentNode || hi).querySelectorAll(t) || [], e = r[xi.l]; e--; ) if (r[e] == n) return 1;
    }
    function i(n, t, r) {
        if (Oi.isA(r)) for (var e = 0; e < r[xi.l]; e++) i(n, t, r[e]);
        else d(r) == gi ? n.insertAdjacentHTML(t, r) : n.insertAdjacentElement(t, r.nodeType ? r : r[0]);
    }
    function y(n, t, r) {
        try {
            n[xi.s][t] !== di &&
                (n[xi.s][t] = (function e(n, t) {
                    p[n.toLowerCase()] || d(t) != yi || (t += "px");
                    return t;
                })(t, r));
        } catch (i) {}
    }
    function N(n, t) {
        var r, e;
        !1 !== t && n.q.splice(0, 1), 0 < n.q[xi.l] ? ((e = n.q[0]), x(n.el, e.props, e.duration, e.easing, e.complete, !0)) : -1 < (r = H(n, T)) && T.splice(r, 1);
    }
    function W(n, t, r) {
        t === k || t === I ? (n[t] = r) : y(n, t, r);
    }
    function x(n, t, r, e, i, o) {
        var u,
            f,
            a,
            c,
            s,
            l,
            v = R(r),
            h = {},
            d = {},
            p = 0;
        for (l = v ? ((e = r.easing), r.start, (a = r.progress), (c = r.step), (s = r.specialEasing), (i = r.complete), r.duration) : r, s = s || {}, l = l || 400, e = e || "swing", o = o || !1; p < T[xi.l]; p++)
            if (T[p].el === n) {
                f = T[p];
                break;
            }
        for (u in (f ||
            ((f = {
                el: n,
                q: [],
            }),
            T.push(f)),
        t))
            h[u] = u === k || u === I ? n[u] : M(n).css(u);
        for (u in h) h[u] !== t[u] && t[u] !== di && (d[u] = t[u]);
        if (L(d)) o && N(f);
        else {
            var b,
                m,
                g,
                w,
                y,
                x,
                _,
                O,
                S,
                z = o ? 0 : H(C, f.q),
                C = {
                    props: d,
                    duration: v ? r : l,
                    easing: e,
                    complete: i,
                };
            if ((-1 === z && ((z = f.q[xi.l]), f.q.push(C)), 0 === z))
                if (0 < l)
                    (_ = Oi.now()),
                        (O = function () {
                            for (u in ((b = Oi.now()), (S = b - _), (m = C.stop || l <= S), (g = 1 - (Si.max(0, _ + l - b) / l || 0)), d))
                                (w = parseFloat(h[u])),
                                    (y = parseFloat(d[u])),
                                    (x = (y - w) * A[s[u] || e](g, g * l, 0, 1, l) + w),
                                    W(n, u, x),
                                    E(c) &&
                                        c(x, {
                                            elem: n,
                                            prop: u,
                                            start: w,
                                            now: x,
                                            end: y,
                                            pos: g,
                                            options: {
                                                easing: e,
                                                speacialEasing: s,
                                                duration: l,
                                                complete: i,
                                                step: c,
                                            },
                                            startTime: _,
                                        });
                            E(a) && a({}, g, Si.max(0, l - S)), m ? (N(f), E(i) && i()) : (C.frame = Oi.rAF()(O));
                        }),
                        (C.frame = Oi.rAF()(O));
                else {
                    for (u in d) W(n, u, d[u]);
                    N(f);
                }
        }
    }
    function _(n) {
        return !!(n[xi.oW] || n[xi.oH] || n.getClientRects()[xi.l]);
    }
    function M(n) {
        if (0 === arguments[xi.l]) return this;
        var t,
            r,
            e = new M(),
            i = n,
            o = 0;
        if (d(n) == gi) for (i = [], t = "<" === n.charAt(0) ? (((r = hi.createElement("div")).innerHTML = n), r.children) : hi.querySelectorAll(n); o < t[xi.l]; o++) i.push(t[o]);
        if (i) {
            for (d(i) == gi || (m(i) && i !== vi && i !== i.self) || (i = [i]), o = 0; o < i[xi.l]; o++) e[o] = i[o];
            e[xi.l] = i[xi.l];
        }
        return e;
    }
    var O,
        S,
        ki,
        z,
        C,
        D,
        F,
        P,
        j,
        B,
        Q,
        U,
        V,
        $,
        Ii,
        Ti =
            ((O = []),
            (S = "__overlayScrollbars__"),
            function (n, t) {
                var r = arguments[xi.l];
                if (r < 1) return O;
                if (t) (n[S] = t), O.push(n);
                else {
                    var e = Oi.inA(n, O);
                    if (-1 < e) {
                        if (!(1 < r)) return O[e][S];
                        delete n[S], O.splice(e, 1);
                    }
                }
            }),
        q =
            (($ = []),
            (D = Oi.type),
            (U = {
                className: ["os-theme-dark", [n, gi]],
                resize: ["none", "n:none b:both h:horizontal v:vertical"],
                sizeAutoCapable: (P = [!0, wi]),
                clipAlways: P,
                normalizeRTL: P,
                paddingAbsolute: (j = [!(F = [wi, yi, gi, mi, pi, bi, n]), wi]),
                autoUpdate: [null, [n, wi]],
                autoUpdateInterval: [33, yi],
                updateOnLoad: [["img"], [gi, mi, n]],
                nativeScrollbarsOverlaid: {
                    showNativeScrollbars: j,
                    initialize: P,
                },
                overflowBehavior: {
                    x: ["scroll", (Q = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden")],
                    y: ["scroll", Q],
                },
                scrollbars: {
                    visibility: ["auto", "v:visible h:hidden a:auto"],
                    autoHide: ["never", "n:never s:scroll l:leave m:move"],
                    autoHideDelay: [800, yi],
                    dragScrolling: P,
                    clickScrolling: j,
                    touchSupport: P,
                    snapHandle: j,
                },
                textarea: {
                    dynWidth: j,
                    dynHeight: j,
                    inheritedAttrs: [
                        ["style", "class"],
                        [gi, mi, n],
                    ],
                },
                callbacks: {
                    onInitialized: (B = [null, [n, bi]]),
                    onInitializationWithdrawn: B,
                    onDestroyed: B,
                    onScrollStart: B,
                    onScroll: B,
                    onScrollStop: B,
                    onOverflowChanged: B,
                    onOverflowAmountChanged: B,
                    onDirectionChanged: B,
                    onContentSizeChanged: B,
                    onHostSizeChanged: B,
                    onUpdated: B,
                },
            }),
            (Ii = {
                g: (V = function (i) {
                    var o = function (n) {
                        var t, r, e;
                        for (t in n) n[xi.hOP](t) && ((r = n[t]), (e = D(r)) == mi ? (n[t] = r[i ? 1 : 0]) : e == pi && (n[t] = o(r)));
                        return n;
                    };
                    return o(Ci.extend(!0, {}, U));
                })(),
                _: V(!0),
                O: function (n, t, I, r) {
                    var e = {},
                        i = {},
                        o = Ci.extend(!0, {}, n),
                        T = Ci.inArray,
                        A = Ci.isEmptyObject,
                        H = function (n, t, r, e, i, o) {
                            for (var u in t)
                                if (t[xi.hOP](u) && n[xi.hOP](u)) {
                                    var f,
                                        a,
                                        c,
                                        s,
                                        l,
                                        v,
                                        h,
                                        d,
                                        p = !1,
                                        b = !1,
                                        m = t[u],
                                        g = D(m),
                                        w = g == pi,
                                        y = Oi.isA(m) ? m : [m],
                                        x = r[u],
                                        _ = n[u],
                                        O = D(_),
                                        S = o ? o + "." : "",
                                        z = 'The option "' + S + u + "\" wasn't set, because",
                                        C = [],
                                        k = [];
                                    if (((x = x === di ? {} : x), w && O == pi))
                                        (e[u] = {}),
                                            (i[u] = {}),
                                            H(_, m, x, e[u], i[u], S + u),
                                            Ci.each([n, e, i], function (n, t) {
                                                A(t[u]) && delete t[u];
                                            });
                                    else if (!w) {
                                        for (v = 0; v < y[xi.l]; v++)
                                            if (((l = y[v]), (c = (g = D(l)) == gi && -1 === T(l, F))))
                                                for (C.push(gi), f = l.split(" "), k = k.concat(f), h = 0; h < f[xi.l]; h++) {
                                                    for (s = (a = f[h].split(":"))[0], d = 0; d < a[xi.l]; d++)
                                                        if (_ === a[d]) {
                                                            p = !0;
                                                            break;
                                                        }
                                                    if (p) break;
                                                }
                                            else if ((C.push(l), O === l)) {
                                                p = !0;
                                                break;
                                            }
                                        p
                                            ? ((b = _ !== x) && (e[u] = _), (c ? T(x, a) < 0 : b) && (i[u] = c ? s : _))
                                            : I &&
                                              console.warn(
                                                  z +
                                                      " it doesn't accept the type [ " +
                                                      O.toUpperCase() +
                                                      ' ] with the value of "' +
                                                      _ +
                                                      '".\r\nAccepted types are: [ ' +
                                                      C.join(", ").toUpperCase() +
                                                      " ]." +
                                                      (0 < k[length] ? "\r\nValid strings are: [ " + k.join(", ").split(":").join(", ") + " ]." : "")
                                              ),
                                            delete n[u];
                                    }
                                }
                        };
                    return (
                        H(o, t, r || {}, e, i),
                        !A(o) && I && console.warn("The following options are discarded due to invalidity:\r\n" + vi.JSON.stringify(o, null, 2)),
                        {
                            S: e,
                            z: i,
                        }
                    );
                },
            }),
            ((ki = vi.OverlayScrollbars = function (n, r, e) {
                if (0 === arguments[xi.l]) return this;
                var i,
                    t,
                    o = [],
                    u = Ci.isPlainObject(r);
                return n
                    ? ((n = n[xi.l] != di ? n : [n[0] || n]),
                      X(),
                      0 < n[xi.l] &&
                          (u
                              ? Ci.each(n, function (n, t) {
                                    (i = t) !== di && o.push(K(i, r, e, z, C));
                                })
                              : Ci.each(n, function (n, t) {
                                    (i = Ti(t)), (("!" === r && ki.valid(i)) || (Oi.type(r) == bi && r(t, i)) || r === di) && o.push(i);
                                }),
                          (t = 1 === o[xi.l] ? o[0] : o)),
                      t)
                    : u || !r
                    ? t
                    : o;
            }).globals = function () {
                X();
                var n = Ci.extend(!0, {}, z);
                return delete n.msie, n;
            }),
            (ki.defaultOptions = function (n) {
                X();
                var t = z.defaultOptions;
                if (n === di) return Ci.extend(!0, {}, t);
                z.defaultOptions = Ci.extend(!0, {}, t, Ii.O(n, Ii._, !0, t).S);
            }),
            (ki.valid = function (n) {
                return n instanceof ki && !n.getState().destroyed;
            }),
            (ki.extension = function (n, t, r) {
                var e = Oi.type(n) == gi,
                    i = arguments[xi.l],
                    o = 0;
                if (i < 1 || !e)
                    return Ci.extend(
                        !0,
                        {
                            length: $[xi.l],
                        },
                        $
                    );
                if (e)
                    if (Oi.type(t) == bi)
                        $.push({
                            name: n,
                            extensionFactory: t,
                            defaultOptions: r,
                        });
                    else
                        for (; o < $[xi.l]; o++)
                            if ($[o].name === n) {
                                if (!(1 < i)) return Ci.extend(!0, {}, $[o]);
                                $.splice(o, 1);
                            }
            }),
            ki);
    function X() {
        (z = z || new Y(Ii.g)), (C = C || new G(z));
    }
    function Y(n) {
        var _ = this,
            i = "overflow",
            O = Ci("body"),
            S = Ci('<div id="os-dummy-scrollbar-size"><div></div></div>'),
            o = S[0],
            e = Ci(S.children("div").eq(0));
        O.append(S), S.hide().show();
        var t,
            r,
            u,
            f,
            a,
            c,
            s,
            l,
            v,
            h = z(o),
            d = {
                x: 0 === h.x,
                y: 0 === h.y,
            },
            p =
                ((r = vi.navigator.userAgent),
                (f = "substring"),
                (a = r[(u = "indexOf")]("MSIE ")),
                (c = r[u]("Trident/")),
                (s = r[u]("Edge/")),
                (l = r[u]("rv:")),
                (v = parseInt),
                0 < a ? (t = v(r[f](a + 5, r[u](".", a)), 10)) : 0 < c ? (t = v(r[f](l + 3, r[u](".", l)), 10)) : 0 < s && (t = v(r[f](s + 5, r[u](".", s)), 10)),
                t);
        function z(n) {
            return {
                x: n[xi.oH] - n[xi.cH],
                y: n[xi.oW] - n[xi.cW],
            };
        }
        Ci.extend(_, {
            defaultOptions: n,
            msie: p,
            autoUpdateLoop: !1,
            autoUpdateRecommended: !Oi.mO(),
            nativeScrollbarSize: h,
            nativeScrollbarIsOverlaid: d,
            nativeScrollbarStyling: (function () {
                var n = !1;
                S.addClass("os-viewport-native-scrollbars-invisible");
                try {
                    n = ("none" === S.css("scrollbar-width") && (9 < p || !p)) || "none" === vi.getComputedStyle(o, "::-webkit-scrollbar").getPropertyValue("display");
                } catch (t) {}
                return n;
            })(),
            overlayScrollbarDummySize: {
                x: 30,
                y: 30,
            },
            cssCalc: _i.d("width", "calc", "(1px)") || null,
            restrictedMeasuring: (function () {
                S.css(i, "hidden");
                var n = o[xi.sW],
                    t = o[xi.sH];
                S.css(i, "visible");
                var r = o[xi.sW],
                    e = o[xi.sH];
                return n - r != 0 || t - e != 0;
            })(),
            rtlScrollBehavior: (function () {
                S.css({
                    "overflow-y": "hidden",
                    "overflow-x": "scroll",
                    direction: "rtl",
                }).scrollLeft(0);
                var n = S.offset(),
                    t = e.offset();
                S.scrollLeft(-999);
                var r = e.offset();
                return {
                    i: n.left === t.left,
                    n: t.left !== r.left,
                };
            })(),
            supportTransform: !!_i.v("transform"),
            supportTransition: !!_i.v("transition"),
            supportPassiveEvents: (function () {
                var n = !1;
                try {
                    vi.addEventListener(
                        "test",
                        null,
                        Object.defineProperty({}, "passive", {
                            get: function () {
                                n = !0;
                            },
                        })
                    );
                } catch (t) {}
                return n;
            })(),
            supportResizeObserver: !!Oi.rO(),
            supportMutationObserver: !!Oi.mO(),
        }),
            S.removeAttr(xi.s).remove(),
            (function () {
                if (!d.x || !d.y) {
                    var m = Si.abs,
                        g = Oi.wW(),
                        w = Oi.wH(),
                        y = x();
                    Ci(vi).on("resize", function () {
                        if (0 < Ti().length) {
                            var n = Oi.wW(),
                                t = Oi.wH(),
                                r = n - g,
                                e = t - w;
                            if (0 == r && 0 == e) return;
                            var i,
                                o = Si.round(n / (g / 100)),
                                u = Si.round(t / (w / 100)),
                                f = m(r),
                                a = m(e),
                                c = m(o),
                                s = m(u),
                                l = x(),
                                v = 2 < f && 2 < a,
                                h = !(function b(n, t) {
                                    var r = m(n),
                                        e = m(t);
                                    return r !== e && r + 1 !== e && r - 1 !== e;
                                })(c, s),
                                d = v && h && l !== y && 0 < y,
                                p = _.nativeScrollbarSize;
                            d &&
                                (O.append(S),
                                (i = _.nativeScrollbarSize = z(S[0])),
                                S.remove(),
                                (p.x === i.x && p.y === i.y) ||
                                    Ci.each(Ti(), function () {
                                        Ti(this) && Ti(this).update("zoom");
                                    })),
                                (g = n),
                                (w = t),
                                (y = l);
                        }
                    });
                }
                function x() {
                    var n = vi.screen.deviceXDPI || 0,
                        t = vi.screen.logicalXDPI || 1;
                    return vi.devicePixelRatio || n / t;
                }
            })();
    }
    function G(r) {
        var c,
            e = Ci.inArray,
            s = Oi.now,
            l = "autoUpdate",
            v = xi.l,
            h = [],
            d = [],
            p = !1,
            b = 33,
            m = s(),
            g = function () {
                if (0 < h[v] && p) {
                    c = Oi.rAF()(function () {
                        g();
                    });
                    var n,
                        t,
                        r,
                        e,
                        i,
                        o,
                        u = s(),
                        f = u - m;
                    if (b < f) {
                        (m = u - (f % b)), (n = 33);
                        for (var a = 0; a < h[v]; a++)
                            (t = h[a]) !== di &&
                                ((e = (r = t.options())[l]), (i = Si.max(1, r.autoUpdateInterval)), (o = s()), (!0 === e || null === e) && o - d[a] > i && (t.update("auto"), (d[a] = new Date((o += i)))), (n = Si.max(1, Si.min(n, i))));
                        b = n;
                    }
                } else b = 33;
            };
        (this.add = function (n) {
            -1 === e(n, h) && (h.push(n), d.push(s()), 0 < h[v] && !p && ((p = !0), (r.autoUpdateLoop = p), g()));
        }),
            (this.remove = function (n) {
                var t = e(n, h);
                -1 < t && (d.splice(t, 1), h.splice(t, 1), 0 === h[v] && p && ((p = !1), (r.autoUpdateLoop = p), c !== di && (Oi.cAF()(c), (c = -1))));
            });
    }
    function K(r, n, t, xt, _t) {
        var cn = Oi.type,
            sn = Ci.inArray,
            h = Ci.each,
            Ot = new ki(),
            e = Ci[xi.p];
        if (ht(r)) {
            if (Ti(r)) {
                var i = Ti(r);
                return i.options(n), i;
            }
            var St,
                zt,
                Ct,
                kt,
                D,
                It,
                Tt,
                At,
                F,
                ln,
                w,
                T,
                d,
                Ht,
                Et,
                Lt,
                Rt,
                y,
                p,
                Nt,
                Wt,
                Mt,
                Dt,
                Ft,
                Pt,
                jt,
                Bt,
                Qt,
                Ut,
                o,
                u,
                Vt,
                $t,
                qt,
                f,
                P,
                c,
                j,
                Xt,
                Yt,
                Gt,
                Kt,
                Jt,
                Zt,
                nr,
                tr,
                rr,
                er,
                ir,
                a,
                s,
                l,
                v,
                b,
                m,
                x,
                A,
                or,
                ur,
                fr,
                H,
                ar,
                cr,
                sr,
                lr,
                vr,
                hr,
                dr,
                pr,
                br,
                mr,
                gr,
                wr,
                yr,
                xr,
                _r,
                E,
                Or,
                Sr,
                zr,
                Cr,
                kr,
                Ir,
                Tr,
                Ar,
                g,
                _,
                Hr,
                Er,
                Lr,
                Rr,
                Nr,
                Wr,
                Mr,
                Dr,
                Fr,
                Pr,
                jr,
                Br,
                Qr,
                Ur,
                O,
                S,
                z,
                C,
                Vr,
                $r,
                k,
                I,
                qr,
                Xr,
                Yr,
                Gr,
                Kr,
                B,
                Q,
                Jr,
                Zr,
                ne,
                te,
                re = {},
                vn = {},
                hn = {},
                ee = {},
                ie = {},
                L = "-hidden",
                oe = "margin-",
                ue = "padding-",
                fe = "border-",
                ae = "top",
                ce = "right",
                se = "bottom",
                le = "left",
                ve = "min-",
                he = "max-",
                de = "width",
                pe = "height",
                be = "float",
                me = "",
                ge = "auto",
                dn = "sync",
                we = "scroll",
                ye = "100%",
                pn = "x",
                bn = "y",
                R = ".",
                xe = " ",
                N = "scrollbar",
                W = "-horizontal",
                M = "-vertical",
                _e = we + "Left",
                Oe = we + "Top",
                U = "mousedown touchstart",
                V = "mouseup touchend touchcancel",
                $ = "mousemove touchmove",
                q = "mouseenter",
                X = "mouseleave",
                Y = "keydown",
                G = "keyup",
                K = "selectstart",
                J = "transitionend webkitTransitionEnd oTransitionEnd",
                Z = "__overlayScrollbarsRO__",
                nn = "os-",
                tn = "os-html",
                rn = "os-host",
                en = rn + "-foreign",
                on = rn + "-textarea",
                un = rn + "-" + N + W + L,
                fn = rn + "-" + N + M + L,
                an = rn + "-transition",
                Se = rn + "-rtl",
                ze = rn + "-resize-disabled",
                Ce = rn + "-scrolling",
                ke = rn + "-overflow",
                Ie = (ke = rn + "-overflow") + "-x",
                Te = ke + "-y",
                mn = "os-textarea",
                gn = mn + "-cover",
                wn = "os-padding",
                yn = "os-viewport",
                Ae = yn + "-native-scrollbars-invisible",
                xn = yn + "-native-scrollbars-overlaid",
                _n = "os-content",
                He = "os-content-arrange",
                Ee = "os-content-glue",
                Le = "os-size-auto-observer",
                On = "os-resize-observer",
                Sn = "os-resize-observer-item",
                zn = Sn + "-final",
                Cn = "os-text-inherit",
                kn = nn + N,
                In = kn + "-track",
                Tn = In + "-off",
                An = kn + "-handle",
                Hn = An + "-off",
                En = kn + "-unusable",
                Ln = kn + "-" + ge + L,
                Rn = kn + "-corner",
                Re = Rn + "-resize",
                Ne = Re + "-both",
                We = Re + W,
                Me = Re + M,
                Nn = kn + W,
                Wn = kn + M,
                Mn = "os-dragging",
                De = "os-theme-none",
                Dn = [Ae, xn, Tn, Hn, En, Ln, Re, Ne, We, Me, Mn].join(xe),
                Fn = [],
                Pn = [xi.ti],
                jn = {},
                Fe = {},
                Pe = 42,
                Bn = "load",
                Qn = [],
                Un = {},
                Vn = ["wrap", "cols", "rows"],
                $n = [xi.i, xi.c, xi.s, "open"].concat(Pn),
                qn = [];
            return (
                (Ot.sleep = function () {
                    Ut = !0;
                }),
                (Ot.update = function (n) {
                    var t, r, e, i, o;
                    if (!Et)
                        return (
                            cn(n) == gi
                                ? n === ge
                                    ? ((t = (function u() {
                                          if (!Ut && !Vr) {
                                              var r,
                                                  e,
                                                  i,
                                                  o = [],
                                                  n = [
                                                      {
                                                          C: Yt,
                                                          k: $n.concat(":visible"),
                                                      },
                                                      {
                                                          C: Lt ? Xt : di,
                                                          k: Vn,
                                                      },
                                                  ];
                                              return (
                                                  h(n, function (n, t) {
                                                      (r = t.C) &&
                                                          h(t.k, function (n, t) {
                                                              (e = ":" === t.charAt(0) ? r.is(t) : r.attr(t)), (i = Un[t]), fi(e, i) && o.push(t), (Un[t] = e);
                                                          });
                                                  }),
                                                  it(o),
                                                  0 < o[xi.l]
                                              );
                                          }
                                      })()),
                                      (r = (function a() {
                                          if (Ut) return !1;
                                          var n,
                                              t,
                                              r,
                                              e,
                                              i = oi(),
                                              o = Lt && br && !Fr ? Xt.val().length : 0,
                                              u = !Vr && br && !Lt,
                                              f = {};
                                          return (
                                              u && ((n = nr.css(be)), (f[be] = Qt ? ce : le), (f[de] = ge), nr.css(f)),
                                              (e = {
                                                  w: i[xi.sW] + o,
                                                  h: i[xi.sH] + o,
                                              }),
                                              u && ((f[be] = n), (f[de] = ye), nr.css(f)),
                                              (t = Ve()),
                                              (r = fi(e, g)),
                                              (g = e),
                                              r || t
                                          );
                                      })()),
                                      (e = t || r) &&
                                          qe({
                                              I: r,
                                              T: Ht ? di : Vt,
                                          }))
                                    : n === dn
                                    ? Vr
                                        ? ((i = z(O.takeRecords())), (o = C(S.takeRecords())))
                                        : (i = Ot.update(ge))
                                    : "zoom" === n &&
                                      qe({
                                          A: !0,
                                          I: !0,
                                      })
                                : ((n = Ut || n),
                                  (Ut = !1),
                                  (Ot.update(dn) && !n) ||
                                      qe({
                                          H: n,
                                      })),
                            Xe(),
                            e || i || o
                        );
                }),
                (Ot.options = function (n, t) {
                    var r,
                        e = {};
                    if (Ci.isEmptyObject(n) || !Ci.isPlainObject(n)) {
                        if (cn(n) != gi) return u;
                        if (!(1 < arguments.length)) return bt(u, n);
                        !(function a(n, t, r) {
                            for (var e = t.split(R), i = e.length, o = 0, u = {}, f = u; o < i; o++) u = u[e[o]] = o + 1 < i ? {} : r;
                            Ci.extend(n, f, !0);
                        })(e, n, t),
                            (r = ot(e));
                    } else r = ot(n);
                    Ci.isEmptyObject(r) ||
                        qe({
                            T: r,
                        });
                }),
                (Ot.destroy = function () {
                    if (!Et) {
                        for (var n in (_t.remove(Ot), Qe(), je(Kt), je(Gt), jn)) Ot.removeExt(n);
                        for (; 0 < qn[xi.l]; ) qn.pop()();
                        Ue(!0), rr && gt(rr), tr && gt(tr), Wt && gt(Gt), at(!0), st(!0), ut(!0);
                        for (var t = 0; t < Qn[xi.l]; t++) Ci(Qn[t]).off(Bn, rt);
                        (Qn = di), (Ut = Et = !0), Ti(r, 0), ti("onDestroyed");
                    }
                }),
                (Ot.scroll = function (n, t, r, e) {
                    if (0 === arguments.length || n === di) {
                        var i = Wr && Qt && Ct.i,
                            o = Wr && Qt && Ct.n,
                            u = vn.L,
                            f = vn.R,
                            a = vn.N;
                        return (
                            (f = i ? 1 - f : f),
                            (u = i ? a - u : u),
                            (a *= o ? -1 : 1),
                            {
                                position: {
                                    x: (u *= o ? -1 : 1),
                                    y: hn.L,
                                },
                                ratio: {
                                    x: f,
                                    y: hn.R,
                                },
                                max: {
                                    x: a,
                                    y: hn.N,
                                },
                                handleOffset: {
                                    x: vn.W,
                                    y: hn.W,
                                },
                                handleLength: {
                                    x: vn.M,
                                    y: hn.M,
                                },
                                handleLengthRatio: {
                                    x: vn.D,
                                    y: hn.D,
                                },
                                trackLength: {
                                    x: vn.F,
                                    y: hn.F,
                                },
                                snappedHandleOffset: {
                                    x: vn.P,
                                    y: hn.P,
                                },
                                isRTL: Qt,
                                isRTLNormalized: Wr,
                            }
                        );
                    }
                    Ot.update(dn);
                    var c,
                        s,
                        l,
                        v,
                        h,
                        g,
                        w,
                        d,
                        p,
                        y = Wr,
                        b = [pn, le, "l"],
                        m = [bn, ae, "t"],
                        x = ["+=", "-=", "*=", "/="],
                        _ = cn(t) == pi,
                        O = _ ? t.complete : e,
                        S = {},
                        z = {},
                        C = "begin",
                        k = "nearest",
                        I = "never",
                        T = "ifneeded",
                        A = xi.l,
                        H = [pn, bn, "xy", "yx"],
                        E = [C, "end", "center", k],
                        L = ["always", I, T],
                        R = n[xi.hOP]("el"),
                        N = R ? n.el : n,
                        W = !!(N instanceof Ci || zi) && N instanceof zi,
                        M = !W && ht(N),
                        D = function () {
                            s && Je(!0), l && Je(!1);
                        },
                        F =
                            cn(O) != bi
                                ? di
                                : function () {
                                      D(), O();
                                  };
                    function P(n, t) {
                        for (c = 0; c < t[A]; c++) if (n === t[c]) return 1;
                    }
                    function j(n, t) {
                        var r = n ? b : m;
                        if (((t = cn(t) == gi || cn(t) == yi ? [t, t] : t), Oi.isA(t))) return n ? t[0] : t[1];
                        if (cn(t) == pi) for (c = 0; c < r[A]; c++) if (r[c] in t) return t[r[c]];
                    }
                    function B(n, t) {
                        var r,
                            e,
                            i,
                            o,
                            u = cn(t) == gi,
                            f = n ? vn : hn,
                            a = f.L,
                            c = f.N,
                            s = Qt && n,
                            l = s && Ct.n && !y,
                            v = "replace",
                            h = eval;
                        if (
                            (e = u
                                ? (2 < t[A] && ((o = t.substr(0, 2)), -1 < sn(o, x) && (r = o)),
                                  (t = (t = r ? t.substr(2) : t)
                                      [v](/min/g, 0)
                                      [v](/</g, 0)
                                      [v](/max/g, (l ? "-" : me) + ye)
                                      [v](/>/g, (l ? "-" : me) + ye)
                                      [v](/px/g, me)
                                      [v](/%/g, " * " + (c * (s && Ct.n ? -1 : 1)) / 100)
                                      [v](/vw/g, " * " + ee.w)
                                      [v](/vh/g, " * " + ee.h)),
                                  ii(isNaN(t) ? ii(h(t), !0).toFixed() : t))
                                : t) !== di &&
                            !isNaN(e) &&
                            cn(e) == yi
                        ) {
                            var d = y && s,
                                p = a * (d && Ct.n ? -1 : 1),
                                b = d && Ct.i,
                                m = d && Ct.n;
                            switch (((p = b ? c - p : p), r)) {
                                case "+=":
                                    i = p + e;
                                    break;
                                case "-=":
                                    i = p - e;
                                    break;
                                case "*=":
                                    i = p * e;
                                    break;
                                case "/=":
                                    i = p / e;
                                    break;
                                default:
                                    i = e;
                            }
                            (i = b ? c - i : i), (i *= m ? -1 : 1), (i = s && Ct.n ? Si.min(0, Si.max(c, i)) : Si.max(0, Si.min(c, i)));
                        }
                        return i === a ? di : i;
                    }
                    function Q(n, t, r, e) {
                        var i,
                            o,
                            u = [r, r],
                            f = cn(n);
                        if (f == t) n = [n, n];
                        else if (f == mi) {
                            if (2 < (i = n[A]) || i < 1) n = u;
                            else
                                for (1 === i && (n[1] = r), c = 0; c < i; c++)
                                    if (((o = n[c]), cn(o) != t || !P(o, e))) {
                                        n = u;
                                        break;
                                    }
                        } else n = f == pi ? [n[pn] || r, n[bn] || r] : u;
                        return {
                            x: n[0],
                            y: n[1],
                        };
                    }
                    function U(n) {
                        var t,
                            r,
                            e = [],
                            i = [ae, ce, se, le];
                        for (c = 0; c < n[A] && c !== i[A]; c++) (t = n[c]), (r = cn(t)) == wi ? e.push(t ? ii(p.css(oe + i[c])) : 0) : e.push(r == yi ? t : 0);
                        return e;
                    }
                    if (W || M) {
                        var V,
                            $ = R ? n.margin : 0,
                            q = R ? n.axis : 0,
                            X = R ? n.scroll : 0,
                            Y = R ? n.block : 0,
                            G = [0, 0, 0, 0],
                            K = cn($);
                        if (0 < (p = W ? N : Ci(N))[A]) {
                            ($ = K == yi || K == wi ? U([$, $, $, $]) : K == mi ? (2 === (V = $[A]) ? U([$[0], $[1], $[0], $[1]]) : 4 <= V ? U($) : G) : K == pi ? U([$[ae], $[ce], $[se], $[le]]) : G),
                                (h = P(q, H) ? q : "xy"),
                                (g = Q(X, gi, "always", L)),
                                (w = Q(Y, gi, C, E)),
                                (d = $);
                            var J = vn.L,
                                Z = hn.L,
                                nn = Jt.offset(),
                                tn = p.offset(),
                                rn = {
                                    x: g.x == I || h == bn,
                                    y: g.y == I || h == pn,
                                };
                            (tn[ae] -= d[0]), (tn[le] -= d[3]);
                            var en = {
                                x: Si.round(tn[le] - nn[le] + J),
                                y: Si.round(tn[ae] - nn[ae] + Z),
                            };
                            if ((Qt && (Ct.n || Ct.i || (en.x = Si.round(nn[le] - tn[le] + J)), Ct.n && y && (en.x *= -1), Ct.i && y && (en.x = Si.round(nn[le] - tn[le] + (vn.N - J)))), w.x != C || w.y != C || g.x == T || g.y == T || Qt)) {
                                var on = p[0],
                                    un = ln
                                        ? on[xi.bCR]()
                                        : {
                                              width: on[xi.oW],
                                              height: on[xi.oH],
                                          },
                                    fn = {
                                        w: un[de] + d[3] + d[1],
                                        h: un[pe] + d[0] + d[2],
                                    },
                                    an = function (n) {
                                        var t = ni(n),
                                            r = t.j,
                                            e = t.B,
                                            i = t.Q,
                                            o = w[i] == (n && Qt ? C : "end"),
                                            u = "center" == w[i],
                                            f = w[i] == k,
                                            a = g[i] == I,
                                            c = g[i] == T,
                                            s = ee[r],
                                            l = nn[e],
                                            v = fn[r],
                                            h = tn[e],
                                            d = u ? 2 : 1,
                                            p = h + v / 2,
                                            b = l + s / 2,
                                            m = v <= s && l <= h && h + v <= l + s;
                                        a ? (rn[i] = !0) : rn[i] || ((f || c) && ((rn[i] = c && m), (o = v < s ? b < p : p < b)), (en[i] -= o || u ? (s / d - v / d) * (n && Qt && y ? -1 : 1) : 0));
                                    };
                                an(!0), an(!1);
                            }
                            rn.y && delete en.y, rn.x && delete en.x, (n = en);
                        }
                    }
                    (S[_e] = B(!0, j(!0, n))),
                        (S[Oe] = B(!1, j(!1, n))),
                        (s = S[_e] !== di),
                        (l = S[Oe] !== di),
                        (s || l) && (0 < t || _)
                            ? _
                                ? ((t.complete = F), Zt.animate(S, t))
                                : ((v = {
                                      duration: t,
                                      complete: F,
                                  }),
                                  Oi.isA(r) || Ci.isPlainObject(r) ? ((z[_e] = r[0] || r.x), (z[Oe] = r[1] || r.y), (v.specialEasing = z)) : (v.easing = r),
                                  Zt.animate(S, v))
                            : (s && Zt[_e](S[_e]), l && Zt[Oe](S[Oe]), D());
                }),
                (Ot.scrollStop = function (n, t, r) {
                    return Zt.stop(n, t, r), Ot;
                }),
                (Ot.getElements = function (n) {
                    var t = {
                        target: or,
                        host: ur,
                        padding: ar,
                        viewport: cr,
                        content: sr,
                        scrollbarHorizontal: {
                            scrollbar: a[0],
                            track: s[0],
                            handle: l[0],
                        },
                        scrollbarVertical: {
                            scrollbar: v[0],
                            track: b[0],
                            handle: m[0],
                        },
                        scrollbarCorner: ir[0],
                    };
                    return cn(n) == gi ? bt(t, n) : t;
                }),
                (Ot.getState = function (n) {
                    function t(n) {
                        if (!Ci.isPlainObject(n)) return n;
                        var r = ai({}, n),
                            t = function (n, t) {
                                r[xi.hOP](n) && ((r[t] = r[n]), delete r[n]);
                            };
                        return t("w", de), t("h", pe), delete r.c, r;
                    }
                    var r = {
                        destroyed: !!t(Et),
                        sleeping: !!t(Ut),
                        autoUpdate: t(!Vr),
                        widthAuto: t(br),
                        heightAuto: t(mr),
                        padding: t(wr),
                        overflowAmount: t(kr),
                        hideOverflow: t(pr),
                        hasOverflow: t(dr),
                        contentScrollSize: t(vr),
                        viewportSize: t(ee),
                        hostSize: t(lr),
                        documentMixed: t(y),
                    };
                    return cn(n) == gi ? bt(r, n) : r;
                }),
                (Ot.ext = function (n) {
                    var t,
                        r = "added removed on contract".split(" "),
                        e = 0;
                    if (cn(n) == gi) {
                        if (jn[xi.hOP](n)) for (t = ai({}, jn[n]); e < r.length; e++) delete t[r[e]];
                    } else for (e in ((t = {}), jn)) t[e] = ai({}, Ot.ext(e));
                    return t;
                }),
                (Ot.addExt = function (n, t) {
                    var r,
                        e,
                        i,
                        o,
                        u = ki.extension(n),
                        f = !0;
                    if (u) {
                        if (jn[xi.hOP](n)) return Ot.ext(n);
                        if ((r = u.extensionFactory.call(Ot, ai({}, u.defaultOptions), Ci, Oi)) && ((i = r.contract), cn(i) == bi && ((o = i(vi)), (f = cn(o) == wi ? o : f)), f))
                            return (e = (jn[n] = r).added), cn(e) == bi && e(t), Ot.ext(n);
                    } else console.warn('A extension with the name "' + n + "\" isn't registered.");
                }),
                (Ot.removeExt = function (n) {
                    var t,
                        r = jn[n];
                    return !!r && (delete jn[n], (t = r.removed), cn(t) == bi && t(), !0);
                }),
                ki.valid(
                    (function yt(n, t, r) {
                        var e, i;
                        return (
                            (o = xt.defaultOptions),
                            (It = xt.nativeScrollbarStyling),
                            (At = ai({}, xt.nativeScrollbarSize)),
                            (St = ai({}, xt.nativeScrollbarIsOverlaid)),
                            (zt = ai({}, xt.overlayScrollbarDummySize)),
                            (Ct = ai({}, xt.rtlScrollBehavior)),
                            ot(ai({}, o, t)),
                            (Tt = xt.cssCalc),
                            (D = xt.msie),
                            (kt = xt.autoUpdateRecommended),
                            (F = xt.supportTransition),
                            (ln = xt.supportTransform),
                            (w = xt.supportPassiveEvents),
                            (T = xt.supportResizeObserver),
                            (d = xt.supportMutationObserver),
                            xt.restrictedMeasuring,
                            (P = Ci(n.ownerDocument)),
                            (A = P[0]),
                            (f = Ci(A.defaultView || A.parentWindow)),
                            (x = f[0]),
                            (c = wt(P, "html")),
                            (j = wt(c, "body")),
                            (Xt = Ci(n)),
                            (or = Xt[0]),
                            (Lt = Xt.is("textarea")),
                            (Rt = Xt.is("body")),
                            (y = A !== hi),
                            (p = Lt ? Xt.hasClass(mn) && Xt.parent().hasClass(_n) : Xt.hasClass(rn) && Xt.children(R + wn)[xi.l]),
                            St.x && St.y && !Vt.nativeScrollbarsOverlaid.initialize
                                ? (ti("onInitializationWithdrawn"), p && (ut(!0), at(!0), st(!0)), (Ut = Et = !0))
                                : (Rt &&
                                      (((e = {}).l = Si.max(Xt[_e](), c[_e](), f[_e]())),
                                      (e.t = Si.max(Xt[Oe](), c[Oe](), f[Oe]())),
                                      (i = function () {
                                          Zt.removeAttr(xi.ti), Xn(Zt, U, i, !0, !0);
                                      })),
                                  ut(),
                                  at(),
                                  st(),
                                  ft(),
                                  ct(!0),
                                  ct(!1),
                                  (function s() {
                                      var r,
                                          t = x.top !== x,
                                          e = {},
                                          i = {},
                                          o = {};
                                      function u(n) {
                                          if (a(n)) {
                                              var t = c(n),
                                                  r = {};
                                              (ne || Zr) && (r[de] = i.w + (t.x - e.x) * o.x), (te || Zr) && (r[pe] = i.h + (t.y - e.y) * o.y), Yt.css(r), Oi.stpP(n);
                                          } else f(n);
                                      }
                                      function f(n) {
                                          var t = n !== di;
                                          Xn(P, [K, $, V], [tt, u, f], !0), si(j, Mn), ir.releaseCapture && ir.releaseCapture(), t && (r && Be(), Ot.update(ge)), (r = !1);
                                      }
                                      function a(n) {
                                          var t = (n.originalEvent || n).touches !== di;
                                          return !Ut && !Et && (1 === Oi.mBtn(n) || t);
                                      }
                                      function c(n) {
                                          return D && t
                                              ? {
                                                    x: n.screenX,
                                                    y: n.screenY,
                                                }
                                              : Oi.page(n);
                                      }
                                      Yn(ir, U, function (n) {
                                          a(n) &&
                                              !Jr &&
                                              (Vr && ((r = !0), Qe()),
                                              (e = c(n)),
                                              (i.w = ur[xi.oW] - (Nt ? 0 : Mt)),
                                              (i.h = ur[xi.oH] - (Nt ? 0 : Dt)),
                                              (o = vt()),
                                              Xn(P, [K, $, V], [tt, u, f]),
                                              ci(j, Mn),
                                              ir.setCapture && ir.setCapture(),
                                              Oi.prvD(n),
                                              Oi.stpP(n));
                                      });
                                  })(),
                                  Gn(),
                                  je(Kt, Kn),
                                  Rt && (Zt[_e](e.l)[Oe](e.t), hi.activeElement == n && cr.focus && (Zt.attr(xi.ti, "-1"), cr.focus(), Xn(Zt, U, i, !1, !0))),
                                  Ot.update(ge),
                                  (Ht = !0),
                                  ti("onInitialized"),
                                  h(Fn, function (n, t) {
                                      ti(t.n, t.a);
                                  }),
                                  (Fn = []),
                                  cn(r) == gi && (r = [r]),
                                  Oi.isA(r)
                                      ? h(r, function (n, t) {
                                            Ot.addExt(t);
                                        })
                                      : Ci.isPlainObject(r) &&
                                        h(r, function (n, t) {
                                            Ot.addExt(n, t);
                                        }),
                                  setTimeout(function () {
                                      F && !Et && ci(Yt, an);
                                  }, 333)),
                            Ot
                        );
                    })(r, n, t)
                ) && Ti(r, Ot),
                Ot
            );
        }
        function Xn(n, t, r, e, i) {
            var o = Oi.isA(t) && Oi.isA(r),
                u = e ? "removeEventListener" : "addEventListener",
                f = e ? "off" : "on",
                a = !o && t.split(xe),
                c = 0,
                s = Ci.isPlainObject(i),
                l = (w && (s ? i.U : i)) || !1,
                v = s && (i.V || !1),
                h = w
                    ? {
                          passive: l,
                          capture: v,
                      }
                    : v;
            if (o) for (; c < t[xi.l]; c++) Xn(n, t[c], r[c], e, i);
            else for (; c < a[xi.l]; c++) w ? n[0][u](a[c], r, h) : n[f](a[c], r);
        }
        function Yn(n, t, r, e) {
            Xn(n, t, r, !1, e), qn.push(Oi.bind(Xn, 0, n, t, r, !0, e));
        }
        function je(n, t) {
            if (n) {
                var r = Oi.rO(),
                    e = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",
                    i = "childNodes",
                    o = 3333333,
                    u = function () {
                        n[Oe](o)[_e](Qt ? (Ct.n ? -o : Ct.i ? 0 : o) : o), t();
                    };
                if (t) {
                    if (T) ((k = n.addClass("observed").append(ui(On)).contents()[0])[Z] = new r(u)).observe(k);
                    else if (9 < D || !kt) {
                        n.prepend(
                            ui(
                                On,
                                ui(
                                    {
                                        c: Sn,
                                        dir: "ltr",
                                    },
                                    ui(Sn, ui(zn)) +
                                        ui(
                                            Sn,
                                            ui({
                                                c: zn,
                                                style: "width: 200%; height: 200%",
                                            })
                                        )
                                )
                            )
                        );
                        var f,
                            a,
                            c,
                            s,
                            l = n[0][i][0][i][0],
                            v = Ci(l[i][1]),
                            h = Ci(l[i][0]),
                            d = Ci(h[0][i][0]),
                            p = l[xi.oW],
                            b = l[xi.oH],
                            m = xt.nativeScrollbarSize,
                            g = function () {
                                h[_e](o)[Oe](o), v[_e](o)[Oe](o);
                            },
                            w = function () {
                                (a = 0), f && ((p = c), (b = s), u());
                            },
                            y = function (n) {
                                return (c = l[xi.oW]), (s = l[xi.oH]), (f = c != p || s != b), n && f && !a ? (Oi.cAF()(a), (a = Oi.rAF()(w))) : n || w(), g(), n && (Oi.prvD(n), Oi.stpP(n)), !1;
                            },
                            x = {},
                            _ = {};
                        ri(_, me, [-2 * (m.y + 1), -2 * m.x, -2 * m.y, -2 * (m.x + 1)]),
                            Ci(l).css(_),
                            h.on(we, y),
                            v.on(we, y),
                            n.on(e, function () {
                                y(!1);
                            }),
                            (x[de] = o),
                            (x[pe] = o),
                            d.css(x),
                            g();
                    } else {
                        var O = A.attachEvent,
                            S = D !== di;
                        if (O) n.prepend(ui(On)), wt(n, R + On)[0].attachEvent("onresize", u);
                        else {
                            var z = A.createElement(pi);
                            z.setAttribute(xi.ti, "-1"),
                                z.setAttribute(xi.c, On),
                                (z.onload = function () {
                                    var n = this.contentDocument.defaultView;
                                    n.addEventListener("resize", u), (n.document.documentElement.style.display = "none");
                                }),
                                (z.type = "text/html"),
                                S && n.prepend(z),
                                (z.data = "about:blank"),
                                S || n.prepend(z),
                                n.on(e, u);
                        }
                    }
                    if (n[0] === H) {
                        var C = function () {
                            var n = Yt.css("direction"),
                                t = {},
                                r = 0,
                                e = !1;
                            return n !== E && ((r = "ltr" === n ? ((t[le] = 0), (t[ce] = ge), o) : ((t[le] = ge), (t[ce] = 0), Ct.n ? -o : Ct.i ? 0 : o)), Kt.children().eq(0).css(t), Kt[_e](r)[Oe](o), (E = n), (e = !0)), e;
                        };
                        C(),
                            Yn(n, we, function (n) {
                                return C() && qe(), Oi.prvD(n), Oi.stpP(n), !1;
                            });
                    }
                } else if (T) {
                    var k,
                        I = (k = n.contents()[0])[Z];
                    I && (I.disconnect(), delete k[Z]);
                } else gt(n.children(R + On).eq(0));
            }
        }
        function Gn() {
            if (d) {
                var o,
                    u,
                    f,
                    a,
                    c,
                    s,
                    r,
                    e,
                    i,
                    l,
                    n = Oi.mO(),
                    v = Oi.now();
                (C = function (n) {
                    var t = !1;
                    return (
                        Ht &&
                            !Ut &&
                            (h(n, function () {
                                return !(t = (function o(n) {
                                    var t = n.attributeName,
                                        r = n.target,
                                        e = n.type,
                                        i = "closest";
                                    if (r === sr) return null === t;
                                    if ("attributes" === e && (t === xi.c || t === xi.s) && !Lt) {
                                        if (t === xi.c && Ci(r).hasClass(rn)) return et(n.oldValue, r.className);
                                        if (typeof r[i] != bi) return !0;
                                        if (null !== r[i](R + On) || null !== r[i](R + kn) || null !== r[i](R + Rn)) return !1;
                                    }
                                    return !0;
                                })(this));
                            }),
                            t &&
                                ((e = Oi.now()),
                                (i = mr || br),
                                (l = function () {
                                    Et || ((v = e), Lt && $e(), i ? qe() : Ot.update(ge));
                                }),
                                clearTimeout(r),
                                11 < e - v || !i ? l() : (r = setTimeout(l, 11)))),
                        t
                    );
                }),
                    (O = new n(
                        (z = function (n) {
                            var t,
                                r = !1,
                                e = !1,
                                i = [];
                            return (
                                Ht &&
                                    !Ut &&
                                    (h(n, function () {
                                        (o = (t = this).target),
                                            (u = t.attributeName),
                                            (f = u === xi.c),
                                            (a = t.oldValue),
                                            (c = o.className),
                                            p &&
                                                f &&
                                                !e &&
                                                -1 < a.indexOf(en) &&
                                                c.indexOf(en) < 0 &&
                                                ((s = lt(!0)),
                                                (ur.className = c
                                                    .split(xe)
                                                    .concat(
                                                        a.split(xe).filter(function (n) {
                                                            return n.match(s);
                                                        })
                                                    )
                                                    .join(xe)),
                                                (r = e = !0)),
                                            (r = r || (f ? et(a, c) : u !== xi.s || a !== o[xi.s].cssText)),
                                            i.push(u);
                                    }),
                                    it(i),
                                    r && Ot.update(e || ge)),
                                r
                            );
                        })
                    )),
                    (S = new n(C));
            }
        }
        function Be() {
            d &&
                !Vr &&
                (O.observe(ur, {
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: $n,
                }),
                S.observe(Lt ? or : sr, {
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !Lt,
                    childList: !Lt,
                    characterData: !Lt,
                    attributeFilter: Lt ? Vn : $n,
                }),
                (Vr = !0));
        }
        function Qe() {
            d && Vr && (O.disconnect(), S.disconnect(), (Vr = !1));
        }
        function Kn() {
            if (!Ut) {
                var n,
                    t = {
                        w: H[xi.sW],
                        h: H[xi.sH],
                    };
                (n = fi(t, _)),
                    (_ = t),
                    n &&
                        qe({
                            A: !0,
                        });
            }
        }
        function Jn() {
            Kr && Ge(!0);
        }
        function Zn() {
            Kr && !j.hasClass(Mn) && Ge(!1);
        }
        function nt() {
            Gr &&
                (Ge(!0),
                clearTimeout(I),
                (I = setTimeout(function () {
                    Gr && !Et && Ge(!1);
                }, 100)));
        }
        function tt(n) {
            return Oi.prvD(n), !1;
        }
        function rt(n) {
            var r = Ci(n.target);
            mt(function (n, t) {
                r.is(t) &&
                    qe({
                        I: !0,
                    });
            });
        }
        function Ue(n) {
            n || Ue(!0), Xn(Yt, $.split(xe)[0], nt, !Gr || n, !0), Xn(Yt, [q, X], [Jn, Zn], !Kr || n, !0), Ht || n || Yt.one("mouseover", Jn);
        }
        function Ve() {
            var n = {};
            return Rt && tr && ((n.w = ii(tr.css(ve + de))), (n.h = ii(tr.css(ve + pe))), (n.c = fi(n, Ur)), (n.f = !0)), !!(Ur = n).c;
        }
        function et(n, t) {
            var r,
                e,
                i = typeof t == gi ? t.split(xe) : [],
                o = (function f(n, t) {
                    var r,
                        e,
                        i = [],
                        o = [];
                    for (r = 0; r < n.length; r++) i[n[r]] = !0;
                    for (r = 0; r < t.length; r++) i[t[r]] ? delete i[t[r]] : (i[t[r]] = !0);
                    for (e in i) o.push(e);
                    return o;
                })(typeof n == gi ? n.split(xe) : [], i),
                u = sn(De, o);
            if ((-1 < u && o.splice(u, 1), 0 < o[xi.l])) for (e = lt(!0, !0), r = 0; r < o.length; r++) if (!o[r].match(e)) return !0;
            return !1;
        }
        function it(n) {
            h((n = n || Pn), function (n, t) {
                if (-1 < Oi.inA(t, Pn)) {
                    var r = Xt.attr(t);
                    cn(r) == gi ? Zt.attr(t, r) : Zt.removeAttr(t);
                }
            });
        }
        function $e() {
            if (!Ut) {
                var n,
                    t,
                    r,
                    e,
                    i = !Fr,
                    o = ee.w,
                    u = ee.h,
                    f = {},
                    a = br || i;
                return (
                    (f[ve + de] = me),
                    (f[ve + pe] = me),
                    (f[de] = ge),
                    Xt.css(f),
                    (n = or[xi.oW]),
                    (t = a ? Si.max(n, or[xi.sW] - 1) : 1),
                    (f[de] = br ? ge : ye),
                    (f[ve + de] = ye),
                    (f[pe] = ge),
                    Xt.css(f),
                    (r = or[xi.oH]),
                    (e = Si.max(r, or[xi.sH] - 1)),
                    (f[de] = t),
                    (f[pe] = e),
                    er.css(f),
                    (f[ve + de] = o),
                    (f[ve + pe] = u),
                    Xt.css(f),
                    {
                        $: n,
                        X: r,
                        Y: t,
                        G: e,
                    }
                );
            }
        }
        function qe(n) {
            clearTimeout(qt), (n = n || {}), (Fe.A |= n.A), (Fe.I |= n.I), (Fe.H |= n.H);
            var t,
                r = Oi.now(),
                e = !!Fe.A,
                i = !!Fe.I,
                o = !!Fe.H,
                u = n.T,
                f = 0 < Pe && Ht && !Et && !o && !u && r - $t < Pe && !mr && !br;
            if ((f && (qt = setTimeout(qe, Pe)), !(Et || f || (Ut && !u) || (Ht && !o && (t = Yt.is(":hidden"))) || "inline" === Yt.css("display")))) {
                ($t = r),
                    (Fe = {}),
                    !It || (St.x && St.y) ? (At = ai({}, xt.nativeScrollbarSize)) : ((At.x = 0), (At.y = 0)),
                    (ie = {
                        x: 3 * (At.x + (St.x ? 0 : 3)),
                        y: 3 * (At.y + (St.y ? 0 : 3)),
                    }),
                    (u = u || {});
                var a = function () {
                        return fi.apply(this, [].slice.call(arguments).concat([o]));
                    },
                    c = {
                        x: Zt[_e](),
                        y: Zt[Oe](),
                    },
                    s = Vt.scrollbars,
                    l = Vt.textarea,
                    v = s.visibility,
                    h = a(v, Hr),
                    d = s.autoHide,
                    p = a(d, Er),
                    b = s.clickScrolling,
                    m = a(b, Lr),
                    g = s.dragScrolling,
                    w = a(g, Rr),
                    y = Vt.className,
                    x = a(y, Mr),
                    _ = Vt.resize,
                    O = a(_, Nr) && !Rt,
                    S = Vt.paddingAbsolute,
                    z = a(S, Or),
                    C = Vt.clipAlways,
                    k = a(C, Sr),
                    I = Vt.sizeAutoCapable && !Rt,
                    T = a(I, Ar),
                    A = Vt.nativeScrollbarsOverlaid.showNativeScrollbars,
                    H = a(A, Ir),
                    E = Vt.autoUpdate,
                    L = a(E, Tr),
                    R = Vt.overflowBehavior,
                    N = a(R, Cr, o),
                    W = l.dynWidth,
                    M = a(Qr, W),
                    D = l.dynHeight,
                    F = a(Br, D);
                if (
                    ((Xr = "n" === d),
                    (Yr = "s" === d),
                    (Gr = "m" === d),
                    (Kr = "l" === d),
                    (qr = s.autoHideDelay),
                    (Dr = Mr),
                    (Jr = "n" === _),
                    (Zr = "b" === _),
                    (ne = "h" === _),
                    (te = "v" === _),
                    (Wr = Vt.normalizeRTL),
                    (A = A && St.x && St.y),
                    (Hr = v),
                    (Er = d),
                    (Lr = b),
                    (Rr = g),
                    (Mr = y),
                    (Nr = _),
                    (Or = S),
                    (Sr = C),
                    (Ar = I),
                    (Ir = A),
                    (Tr = E),
                    (Cr = ai({}, R)),
                    (Qr = W),
                    (Br = D),
                    (dr = dr || {
                        x: !1,
                        y: !1,
                    }),
                    x && (si(Yt, Dr + xe + De), ci(Yt, y !== di && null !== y && 0 < y.length ? y : De)),
                    L && (!0 === E || (null === E && kt) ? (Qe(), _t.add(Ot)) : (_t.remove(Ot), Be())),
                    T)
                )
                    if (I)
                        if ((rr ? rr.show() : ((rr = Ci(ui(Ee))), Jt.before(rr)), Wt)) Gt.show();
                        else {
                            (Gt = Ci(ui(Le))), (fr = Gt[0]), rr.before(Gt);
                            var P = {
                                w: -1,
                                h: -1,
                            };
                            je(Gt, function () {
                                var n = {
                                    w: fr[xi.oW],
                                    h: fr[xi.oH],
                                };
                                fi(n, P) && ((Ht && mr && 0 < n.h) || (br && 0 < n.w) || (Ht && !mr && 0 === n.h) || (!br && 0 === n.w)) && qe(), (P = n);
                            }),
                                (Wt = !0),
                                null !== Tt && Gt.css(pe, Tt + "(100% + 1px)");
                        }
                    else Wt && Gt.hide(), rr && rr.hide();
                o && (Kt.find("*").trigger(we), Wt && Gt.find("*").trigger(we)), (t = t === di ? Yt.is(":hidden") : t);
                var j,
                    B = !!Lt && "off" !== Xt.attr("wrap"),
                    Q = a(B, Fr),
                    U = Yt.css("direction"),
                    V = a(U, _r),
                    $ = Yt.css("box-sizing"),
                    q = a($, gr),
                    X = ei(ue);
                try {
                    j = Wt ? fr[xi.bCR]() : null;
                } catch (wt) {
                    return;
                }
                Nt = "border-box" === $;
                var Y = (Qt = "rtl" === U) ? le : ce,
                    G = Qt ? ce : le,
                    K = !1,
                    J = !(!Wt || "none" === Yt.css(be)) && 0 === Si.round(j.right - j.left) && (!!S || 0 < ur[xi.cW] - Mt);
                if (I && !J) {
                    var Z = ur[xi.oW],
                        nn = rr.css(de);
                    rr.css(de, ge);
                    var tn = ur[xi.oW];
                    rr.css(de, nn), (K = Z !== tn) || (rr.css(de, Z + 1), (tn = ur[xi.oW]), rr.css(de, nn), (K = Z !== tn));
                }
                var rn = (J || K) && I && !t,
                    en = a(rn, br),
                    on = !rn && br,
                    un = !(!Wt || !I || t) && 0 === Si.round(j.bottom - j.top),
                    fn = a(un, mr),
                    an = !un && mr,
                    cn = ei(fe, "-" + de, !((rn && Nt) || !Nt), !((un && Nt) || !Nt)),
                    sn = ei(oe),
                    ln = {},
                    vn = {},
                    hn = function () {
                        return {
                            w: ur[xi.cW],
                            h: ur[xi.cH],
                        };
                    },
                    dn = function () {
                        return {
                            w: ar[xi.oW] + Si.max(0, sr[xi.cW] - sr[xi.sW]),
                            h: ar[xi.oH] + Si.max(0, sr[xi.cH] - sr[xi.sH]),
                        };
                    },
                    pn = (Mt = X.l + X.r),
                    bn = (Dt = X.t + X.b);
                if (
                    ((pn *= S ? 1 : 0),
                    (bn *= S ? 1 : 0),
                    (X.c = a(X, wr)),
                    (Ft = cn.l + cn.r),
                    (Pt = cn.t + cn.b),
                    (cn.c = a(cn, yr)),
                    (jt = sn.l + sn.r),
                    (Bt = sn.t + sn.b),
                    (sn.c = a(sn, xr)),
                    (Fr = B),
                    (_r = U),
                    (gr = $),
                    (br = rn),
                    (mr = un),
                    (wr = X),
                    (yr = cn),
                    (xr = sn),
                    V && Wt && Gt.css(be, G),
                    X.c || V || z || en || fn || q || T)
                ) {
                    var mn = {},
                        gn = {},
                        wn = [X.t, X.r, X.b, X.l];
                    ri(vn, oe, [-X.t, -X.r, -X.b, -X.l]), S ? (ri(mn, me, wn), ri(Lt ? gn : ln, ue)) : (ri(mn, me), ri(Lt ? gn : ln, ue, wn)), Jt.css(mn), Xt.css(gn);
                }
                ee = dn();
                var yn = !!Lt && $e(),
                    xn = Lt && a(yn, jr),
                    _n =
                        Lt && yn
                            ? {
                                  w: W ? yn.Y : yn.$,
                                  h: D ? yn.G : yn.X,
                              }
                            : {};
                if (
                    ((jr = yn),
                    un && (fn || z || q || X.c || cn.c) ? (ln[pe] = ge) : (fn || z) && (ln[pe] = ye),
                    rn && (en || z || q || X.c || cn.c || V) ? ((ln[de] = ge), (vn[he + de] = ye)) : (en || z) && ((ln[de] = ye), (ln[be] = me), (vn[he + de] = me)),
                    rn ? ((vn[de] = ge), (ln[de] = _i.d(de, "max-content intrinsic") || ge), (ln[be] = G)) : (vn[de] = me),
                    (vn[pe] = un ? _n.h || sr[xi.cH] : me),
                    I && rr.css(vn),
                    nr.css(ln),
                    (ln = {}),
                    (vn = {}),
                    e || i || xn || V || q || z || en || rn || fn || un || H || N || k || O || h || p || w || m || M || F || Q)
                ) {
                    var On = "overflow",
                        Sn = On + "-x",
                        zn = On + "-y";
                    if (!It) {
                        var Cn = {},
                            kn = dr.y && pr.ys && !A ? (St.y ? Zt.css(Y) : -At.y) : 0,
                            In = dr.x && pr.xs && !A ? (St.x ? Zt.css(se) : -At.x) : 0;
                        ri(Cn, me), Zt.css(Cn);
                    }
                    var Tn = oi(),
                        An = {
                            w: _n.w || Tn[xi.cW],
                            h: _n.h || Tn[xi.cH],
                        },
                        Hn = Tn[xi.sW],
                        En = Tn[xi.sH];
                    It || ((Cn[se] = an ? me : In), (Cn[Y] = on ? me : kn), Zt.css(Cn)), (ee = dn());
                    var Ln = hn(),
                        Rn = {
                            w: Ln.w - jt - Ft - (Nt ? 0 : Mt),
                            h: Ln.h - Bt - Pt - (Nt ? 0 : Dt),
                        },
                        Nn = {
                            w: Si.max((rn ? An.w : Hn) + pn, Rn.w),
                            h: Si.max((un ? An.h : En) + bn, Rn.h),
                        };
                    if (((Nn.c = a(Nn, zr)), (zr = Nn), I)) {
                        (Nn.c || un || rn) &&
                            ((vn[de] = Nn.w),
                            (vn[pe] = Nn.h),
                            Lt ||
                                (An = {
                                    w: Tn[xi.cW],
                                    h: Tn[xi.cH],
                                }));
                        var Wn = {},
                            Mn = function (n) {
                                var t = ni(n),
                                    r = t.j,
                                    e = t.K,
                                    i = n ? rn : un,
                                    o = n ? Ft : Pt,
                                    u = n ? Mt : Dt,
                                    f = n ? jt : Bt,
                                    a = ee[r] - o - f - (Nt ? 0 : u);
                                (i && (i || !cn.c)) || (vn[e] = Rn[r] - 1), !(i && An[r] < a) || (n && Lt && B) || (Lt && (Wn[e] = ii(er.css(e)) - 1), --vn[e]), 0 < An[r] && (vn[e] = Si.max(1, vn[e]));
                            };
                        Mn(!0), Mn(!1), Lt && er.css(Wn), rr.css(vn);
                    }
                    rn && (ln[de] = ye), !rn || Nt || Vr || (ln[be] = "none"), nr.css(ln), (ln = {});
                    var Dn = {
                        w: Tn[xi.sW],
                        h: Tn[xi.sH],
                    };
                    (Dn.c = i = a(Dn, vr)), (vr = Dn), (ee = dn()), (e = a((Ln = hn()), lr)), (lr = Ln);
                    var Fn = Lt && (0 === ee.w || 0 === ee.h),
                        Pn = kr,
                        jn = {},
                        Bn = {},
                        Qn = {},
                        Un = {},
                        Vn = {},
                        $n = {},
                        qn = {},
                        Xn = ar[xi.bCR](),
                        Yn = function (n) {
                            var t = ni(n),
                                r = ni(!n).Q,
                                e = t.Q,
                                i = t.j,
                                o = t.K,
                                u = we + t.J + "Max",
                                f = Xn[o] ? Si.abs(Xn[o] - ee[i]) : 0,
                                a = Pn && 0 < Pn[e] && 0 === cr[u];
                            (jn[e] = "v-s" === R[e]),
                                (Bn[e] = "v-h" === R[e]),
                                (Qn[e] = "s" === R[e]),
                                (Un[e] = Si.max(0, Si.round(100 * (Dn[i] - ee[i])) / 100)),
                                (Un[e] *= Fn || (a && 0 < f && f < 1) ? 0 : 1),
                                (Vn[e] = 0 < Un[e]),
                                ($n[e] = jn[e] || Bn[e] ? Vn[r] && !jn[r] && !Bn[r] : Vn[e]),
                                ($n[e + "s"] = !!$n[e] && (Qn[e] || jn[e])),
                                (qn[e] = Vn[e] && $n[e + "s"]);
                        };
                    if ((Yn(!0), Yn(!1), (Un.c = a(Un, kr)), (kr = Un), (Vn.c = a(Vn, dr)), (dr = Vn), ($n.c = a($n, pr)), (pr = $n), St.x || St.y)) {
                        var Gn,
                            Kn = {},
                            Jn = {},
                            Zn = o;
                        (Vn.x || Vn.y) && ((Jn.w = St.y && Vn.y ? Dn.w + zt.y : me), (Jn.h = St.x && Vn.x ? Dn.h + zt.x : me), (Zn = a(Jn, hr)), (hr = Jn)),
                            (Vn.c || $n.c || Dn.c || V || en || fn || rn || un || H) &&
                                ((ln[oe + G] = ln[fe + G] = me),
                                (Gn = function (n) {
                                    var t = ni(n),
                                        r = ni(!n),
                                        e = t.Q,
                                        i = n ? se : Y,
                                        o = n ? un : rn;
                                    St[e] && Vn[e] && $n[e + "s"] ? ((ln[oe + i] = !o || A ? me : zt[e]), (ln[fe + i] = (n && o) || A ? me : zt[e] + "px solid transparent")) : ((Jn[r.j] = ln[oe + i] = ln[fe + i] = me), (Zn = !0));
                                }),
                                It ? li(Zt, Ae, !A) : (Gn(!0), Gn(!1))),
                            A && ((Jn.w = Jn.h = me), (Zn = !0)),
                            Zn && !It && ((Kn[de] = $n.y ? Jn.w : me), (Kn[pe] = $n.x ? Jn.h : me), tr || ((tr = Ci(ui(He))), Zt.prepend(tr)), tr.css(Kn)),
                            nr.css(ln);
                    }
                    var nt,
                        tt = {};
                    mn = {};
                    if (
                        (e || Vn.c || $n.c || Dn.c || N || q || H || V || k || fn) &&
                        ((tt[G] = me),
                        (nt = function (n) {
                            var t = ni(n),
                                r = ni(!n),
                                e = t.Q,
                                i = t.Z,
                                o = n ? se : Y,
                                u = function () {
                                    (tt[o] = me), (re[r.j] = 0);
                                };
                            Vn[e] && $n[e + "s"] ? ((tt[On + i] = we), A || It ? u() : ((tt[o] = -(St[e] ? zt[e] : At[e])), (re[r.j] = St[e] ? zt[r.Q] : 0))) : ((tt[On + i] = me), u());
                        })(!0),
                        nt(!1),
                        !It && (ee.h < ie.x || ee.w < ie.y) && ((Vn.x && $n.x && !St.x) || (Vn.y && $n.y && !St.y))
                            ? ((tt[ue + ae] = ie.x), (tt[oe + ae] = -ie.x), (tt[ue + G] = ie.y), (tt[oe + G] = -ie.y))
                            : (tt[ue + ae] = tt[oe + ae] = tt[ue + G] = tt[oe + G] = me),
                        (tt[ue + Y] = tt[oe + Y] = me),
                        (Vn.x && $n.x) || (Vn.y && $n.y) || Fn ? Lt && Fn && (mn[Sn] = mn[zn] = "hidden") : (!C || Bn.x || jn.x || Bn.y || jn.y) && (Lt && (mn[Sn] = mn[zn] = me), (tt[Sn] = tt[zn] = "visible")),
                        Jt.css(mn),
                        Zt.css(tt),
                        (tt = {}),
                        (Vn.c || q || en || fn) && (!St.x || !St.y))
                    ) {
                        var rt = sr[xi.s];
                        (rt.webkitTransform = "scale(1)"), (rt.display = "run-in"), sr[xi.oH], (rt.display = me), (rt.webkitTransform = me);
                    }
                    if (((ln = {}), V || en || fn))
                        if (Qt && rn) {
                            var et = nr.css(be),
                                it = Si.round(nr.css(be, me).css(le, me).position().left);
                            nr.css(be, et), it !== Si.round(nr.position().left) && (ln[le] = it);
                        } else ln[le] = me;
                    if ((nr.css(ln), Lt && i)) {
                        var ot = (function yt() {
                            var n = or.selectionStart;
                            if (n === di) return;
                            var t,
                                r,
                                e = Xt.val(),
                                i = e[xi.l],
                                o = e.split("\n"),
                                u = o[xi.l],
                                f = e.substr(0, n).split("\n"),
                                a = 0,
                                c = 0,
                                s = f[xi.l],
                                l = f[f[xi.l] - 1][xi.l];
                            for (r = 0; r < o[xi.l]; r++) (t = o[r][xi.l]), c < t && ((a = r + 1), (c = t));
                            return {
                                nn: s,
                                tn: l,
                                rn: u,
                                en: c,
                                in: a,
                                un: n,
                                an: i,
                            };
                        })();
                        if (ot) {
                            var ut = Pr === di || ot.rn !== Pr.rn,
                                ft = ot.nn,
                                at = ot.tn,
                                ct = ot["in"],
                                st = ot.rn,
                                lt = ot.en,
                                vt = ot.un,
                                ht = ot.an <= vt && $r,
                                dt = {
                                    x: B || at !== lt || ft !== ct ? -1 : kr.x,
                                    y: (B ? ht || (ut && Pn && c.y === Pn.y) : (ht || ut) && ft === st) ? kr.y : -1,
                                };
                            (c.x = -1 < dt.x ? (Qt && Wr && Ct.i ? 0 : dt.x) : c.x), (c.y = -1 < dt.y ? dt.y : c.y);
                        }
                        Pr = ot;
                    }
                    Qt && Ct.i && St.y && Vn.x && Wr && (c.x += re.w || 0), rn && Yt[_e](0), un && Yt[Oe](0), Zt[_e](c.x)[Oe](c.y);
                    var pt = "v" === v,
                        bt = "h" === v,
                        mt = "a" === v,
                        gt = function (n, t) {
                            (t = t === di ? n : t), Ye(!0, n, qn.x), Ye(!1, t, qn.y);
                        };
                    li(Yt, ke, $n.x || $n.y),
                        li(Yt, Ie, $n.x),
                        li(Yt, Te, $n.y),
                        V && !Rt && li(Yt, Se, Qt),
                        Rt && ci(Yt, ze),
                        O && (li(Yt, ze, Jr), li(ir, Re, !Jr), li(ir, Ne, Zr), li(ir, We, ne), li(ir, Me, te)),
                        (h || N || $n.c || Vn.c || H) && (A ? H && (si(Yt, Ce), A && gt(!1)) : mt ? gt(qn.x, qn.y) : pt ? gt(!0) : bt && gt(!1)),
                        (p || H) && (Ue(!Kr && !Gr), Ge(Xr, !Xr)),
                        (e || Un.c || fn || en || O || q || z || H || V) && (Ke(!0), Je(!0), Ke(!1), Je(!1)),
                        m && Ze(!0, b),
                        w && Ze(!1, g),
                        ti(
                            "onDirectionChanged",
                            {
                                isRTL: Qt,
                                dir: U,
                            },
                            V
                        ),
                        ti(
                            "onHostSizeChanged",
                            {
                                width: lr.w,
                                height: lr.h,
                            },
                            e
                        ),
                        ti(
                            "onContentSizeChanged",
                            {
                                width: vr.w,
                                height: vr.h,
                            },
                            i
                        ),
                        ti(
                            "onOverflowChanged",
                            {
                                x: Vn.x,
                                y: Vn.y,
                                xScrollable: $n.xs,
                                yScrollable: $n.ys,
                                clipped: $n.x || $n.y,
                            },
                            Vn.c || $n.c
                        ),
                        ti(
                            "onOverflowAmountChanged",
                            {
                                x: Un.x,
                                y: Un.y,
                            },
                            Un.c
                        );
                }
                Rt && Ur && (dr.c || Ur.c) && (Ur.f || Ve(), St.y && dr.x && nr.css(ve + de, Ur.w + zt.y), St.x && dr.y && nr.css(ve + pe, Ur.h + zt.x), (Ur.c = !1)),
                    Ht && u.updateOnLoad && Xe(),
                    ti("onUpdated", {
                        forced: o,
                    });
            }
        }
        function Xe() {
            Lt ||
                mt(function (n, t) {
                    nr.find(t).each(function (n, t) {
                        Oi.inA(t, Qn) < 0 && (Qn.push(t), Ci(t).off(Bn, rt).on(Bn, rt));
                    });
                });
        }
        function ot(n) {
            var t = Ii.O(n, Ii._, !0, u);
            return (u = ai({}, u, t.S)), (Vt = ai({}, Vt, t.z)), t.z;
        }
        function ut(e) {
            var n = "parent",
                t = mn + xe + Cn,
                r = Lt ? xe + Cn : me,
                i = Vt.textarea.inheritedAttrs,
                o = {},
                u = function () {
                    var r = e ? Xt : Yt;
                    h(o, function (n, t) {
                        cn(t) == gi && (n == xi.c ? r.addClass(t) : r.attr(n, t));
                    });
                },
                f = [rn, en, on, ze, Se, un, fn, an, Ce, ke, Ie, Te, De, mn, Cn, Mr].join(xe),
                a = {};
            (Yt = Yt || (Lt ? (p ? Xt[n]()[n]()[n]()[n]() : Ci(ui(on))) : Xt)),
                (nr = nr || pt(_n + r)),
                (Zt = Zt || pt(yn + r)),
                (Jt = Jt || pt(wn + r)),
                (Kt = Kt || pt("os-resize-observer-host")),
                (er = er || (Lt ? pt(gn) : di)),
                p && ci(Yt, en),
                e && si(Yt, f),
                (i = cn(i) == gi ? i.split(xe) : i),
                Oi.isA(i) &&
                    Lt &&
                    h(i, function (n, t) {
                        cn(t) == gi && (o[t] = e ? Yt.attr(t) : Xt.attr(t));
                    }),
                e
                    ? (p && Ht
                          ? (Kt.children().remove(),
                            h([Jt, Zt, nr, er], function (n, t) {
                                t && si(t.removeAttr(xi.s), Dn);
                            }),
                            ci(Yt, Lt ? on : rn))
                          : (gt(Kt), nr.contents().unwrap().unwrap().unwrap(), Lt && (Xt.unwrap(), gt(Yt), gt(er), u())),
                      Lt && Xt.removeAttr(xi.s),
                      Rt && si(c, tn))
                    : (Lt && (Vt.sizeAutoCapable || ((a[de] = Xt.css(de)), (a[pe] = Xt.css(pe))), p || Xt.addClass(Cn).wrap(Yt), (Yt = Xt[n]().css(a))),
                      p || (ci(Xt, Lt ? t : rn), Yt.wrapInner(nr).wrapInner(Zt).wrapInner(Jt).prepend(Kt), (nr = wt(Yt, R + _n)), (Zt = wt(Yt, R + yn)), (Jt = wt(Yt, R + wn)), Lt && (nr.prepend(er), u())),
                      It && ci(Zt, Ae),
                      St.x && St.y && ci(Zt, xn),
                      Rt && ci(c, tn),
                      (H = Kt[0]),
                      (ur = Yt[0]),
                      (ar = Jt[0]),
                      (cr = Zt[0]),
                      (sr = nr[0]),
                      it());
        }
        function ft() {
            var r,
                t,
                e = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144],
                i = [],
                n = "focus";
            function o(n) {
                $e(), Ot.update(ge), n && kt && clearInterval(r);
            }
            Lt
                ? (9 < D || !kt
                      ? Yn(Xt, "input", o)
                      : Yn(
                            Xt,
                            [Y, G],
                            [
                                function u(n) {
                                    var t = n.keyCode;
                                    sn(t, e) < 0 && (i[xi.l] || (o(), (r = setInterval(o, 1e3 / 60))), sn(t, i) < 0 && i.push(t));
                                },
                                function f(n) {
                                    var t = n.keyCode,
                                        r = sn(t, i);
                                    sn(t, e) < 0 && (-1 < r && i.splice(r, 1), i[xi.l] || o(!0));
                                },
                            ]
                        ),
                  Yn(
                      Xt,
                      [we, "drop", n, n + "out"],
                      [
                          function a(n) {
                              return Xt[_e](Ct.i && Wr ? 9999999 : 0), Xt[Oe](0), Oi.prvD(n), Oi.stpP(n), !1;
                          },
                          function c(n) {
                              setTimeout(function () {
                                  Et || o();
                              }, 50);
                          },
                          function s() {
                              ($r = !0), ci(Yt, n);
                          },
                          function l() {
                              ($r = !1), (i = []), si(Yt, n), o(!0);
                          },
                      ]
                  ))
                : Yn(nr, J, function v(n) {
                      !0 !== Tr &&
                          (function l(n) {
                              if (!Ht) return 1;
                              var t = "flex-grow",
                                  r = "flex-shrink",
                                  e = "flex-basis",
                                  i = [de, ve + de, he + de, oe + le, oe + ce, le, ce, "font-weight", "word-spacing", t, r, e],
                                  o = [ue + le, ue + ce, fe + le + de, fe + ce + de],
                                  u = [pe, ve + pe, he + pe, oe + ae, oe + se, ae, se, "line-height", t, r, e],
                                  f = [ue + ae, ue + se, fe + ae + de, fe + se + de],
                                  a = "s" === Cr.x || "v-s" === Cr.x,
                                  c = !1,
                                  s = function (n, t) {
                                      for (var r = 0; r < n[xi.l]; r++) if (n[r] === t) return !0;
                                      return !1;
                                  };
                              return ("s" === Cr.y || "v-s" === Cr.y) && ((c = s(u, n)) || Nt || (c = s(f, n))), a && !c && ((c = s(i, n)) || Nt || (c = s(o, n))), c;
                          })((n = n.originalEvent || n).propertyName) &&
                          Ot.update(ge);
                  }),
                Yn(
                    Zt,
                    we,
                    function h(n) {
                        Ut ||
                            (t !== di ? clearTimeout(t) : ((Yr || Gr) && Ge(!0), dt() || ci(Yt, Ce), ti("onScrollStart", n)),
                            Q || (Je(!0), Je(!1)),
                            ti("onScroll", n),
                            (t = setTimeout(function () {
                                Et || (clearTimeout(t), (t = di), (Yr || Gr) && Ge(!1), dt() || si(Yt, Ce), ti("onScrollStop", n));
                            }, 175)));
                    },
                    !0
                );
        }
        function at(i) {
            var n,
                t,
                o = function (n) {
                    var t = pt(kn + xe + (n ? Nn : Wn), !0),
                        r = pt(In, t),
                        e = pt(An, t);
                    return (
                        p || i || (t.append(r), r.append(e)),
                        {
                            cn: t,
                            sn: r,
                            ln: e,
                        }
                    );
                };
            function r(n) {
                var t = ni(n),
                    r = t.cn,
                    e = t.sn,
                    i = t.ln;
                p && Ht
                    ? h([r, e, i], function (n, t) {
                          si(t.removeAttr(xi.s), Dn);
                      })
                    : gt(r || o(n).cn);
            }
            i ? (r(!0), r()) : ((n = o(!0)), (t = o()), (a = n.cn), (s = n.sn), (l = n.ln), (v = t.cn), (b = t.sn), (m = t.ln), p || (Jt.after(v), Jt.after(a)));
        }
        function ct(S) {
            var z,
                i,
                C,
                k,
                e = ni(S),
                I = e.vn,
                t = x.top !== x,
                T = e.Q,
                r = e.Z,
                A = we + e.J,
                o = "active",
                u = "snapHandle",
                f = "click",
                H = 1,
                a = [16, 17];
            function c(n) {
                return D && t ? n["screen" + r] : Oi.page(n)[T];
            }
            function s(n) {
                return Vt.scrollbars[n];
            }
            function l() {
                H = 0.5;
            }
            function v() {
                H = 1;
            }
            function h(n) {
                Oi.stpP(n);
            }
            function E(n) {
                -1 < sn(n.keyCode, a) && l();
            }
            function L(n) {
                -1 < sn(n.keyCode, a) && v();
            }
            function R(n) {
                var t = (n.originalEvent || n).touches !== di;
                return !(Ut || Et || dt() || !Rr || (t && !s("touchSupport"))) && (1 === Oi.mBtn(n) || t);
            }
            function d(n) {
                if (R(n)) {
                    var t = I.F,
                        r = I.M,
                        e = I.N * (((c(n) - C) * k) / (t - r));
                    (e = isFinite(e) ? e : 0), Qt && S && !Ct.i && (e *= -1), Zt[A](Si.round(i + e)), Q && Je(S, i + e), w || Oi.prvD(n);
                } else N(n);
            }
            function N(n) {
                if (
                    ((n = n || n.originalEvent),
                    Xn(P, [$, V, Y, G, K], [d, N, E, L, tt], !0),
                    Oi.rAF()(function () {
                        Xn(P, f, h, !0, {
                            V: !0,
                        });
                    }),
                    Q && Je(S, !0),
                    (Q = !1),
                    si(j, Mn),
                    si(e.ln, o),
                    si(e.sn, o),
                    si(e.cn, o),
                    (k = 1),
                    v(),
                    z !== (C = i = di) && (Ot.scrollStop(), clearTimeout(z), (z = di)),
                    n)
                ) {
                    var t = ur[xi.bCR]();
                    (n.clientX >= t.left && n.clientX <= t.right && n.clientY >= t.top && n.clientY <= t.bottom) || Zn(), (Yr || Gr) && Ge(!1);
                }
            }
            function W(n) {
                (i = Zt[A]()),
                    (i = isNaN(i) ? 0 : i),
                    ((Qt && S && !Ct.n) || !Qt) && (i = i < 0 ? 0 : i),
                    (k = vt()[T]),
                    (C = c(n)),
                    (Q = !s(u)),
                    ci(j, Mn),
                    ci(e.ln, o),
                    ci(e.cn, o),
                    Xn(P, [$, V, K], [d, N, tt]),
                    Oi.rAF()(function () {
                        Xn(P, f, h, !1, {
                            V: !0,
                        });
                    }),
                    (!D && y) || Oi.prvD(n),
                    Oi.stpP(n);
            }
            Yn(e.ln, U, function p(n) {
                R(n) && W(n);
            }),
                Yn(
                    e.sn,
                    [U, q, X],
                    [
                        function M(n) {
                            if (R(n)) {
                                var h,
                                    t = e.vn.M / Math.round(Si.min(1, ee[e.j] / vr[e.j]) * e.vn.F),
                                    d = Si.round(ee[e.j] * t),
                                    p = 270 * t,
                                    b = 400 * t,
                                    m = e.sn.offset()[e.B],
                                    r = n.ctrlKey,
                                    g = n.shiftKey,
                                    w = g && r,
                                    y = !0,
                                    x = function (n) {
                                        Q && Je(S, n);
                                    },
                                    _ = function () {
                                        x(), W(n);
                                    },
                                    O = function () {
                                        if (!Et) {
                                            var n = (C - m) * k,
                                                t = I.W,
                                                r = I.F,
                                                e = I.M,
                                                i = I.N,
                                                o = I.L,
                                                u = p * H,
                                                f = y ? Si.max(b, u) : u,
                                                a = i * ((n - e / 2) / (r - e)),
                                                c = Qt && S && ((!Ct.i && !Ct.n) || Wr),
                                                s = c ? t < n : n < t,
                                                l = {},
                                                v = {
                                                    easing: "linear",
                                                    step: function (n) {
                                                        Q && (Zt[A](n), Je(S, n));
                                                    },
                                                };
                                            (a = isFinite(a) ? a : 0),
                                                (a = Qt && S && !Ct.i ? i - a : a),
                                                g
                                                    ? (Zt[A](a),
                                                      w
                                                          ? ((a = Zt[A]()),
                                                            Zt[A](o),
                                                            (a = c && Ct.i ? i - a : a),
                                                            (a = c && Ct.n ? -a : a),
                                                            (l[T] = a),
                                                            Ot.scroll(
                                                                l,
                                                                ai(v, {
                                                                    duration: 130,
                                                                    complete: _,
                                                                })
                                                            ))
                                                          : _())
                                                    : ((h = y ? s : h),
                                                      (c ? (h ? n <= t + e : t <= n) : h ? t <= n : n <= t + e)
                                                          ? (clearTimeout(z), Ot.scrollStop(), (z = di), x(!0))
                                                          : ((z = setTimeout(O, f)),
                                                            (l[T] = (h ? "-=" : "+=") + d),
                                                            Ot.scroll(
                                                                l,
                                                                ai(v, {
                                                                    duration: u,
                                                                })
                                                            )),
                                                      (y = !1));
                                        }
                                    };
                                r && l(), (k = vt()[T]), (C = Oi.page(n)[T]), (Q = !s(u)), ci(j, Mn), ci(e.sn, o), ci(e.cn, o), Xn(P, [V, Y, G, K], [N, E, L, tt]), O(), Oi.prvD(n), Oi.stpP(n);
                            }
                        },
                        function b(n) {
                            (B = !0), (Yr || Gr) && Ge(!0);
                        },
                        function m(n) {
                            (B = !1), (Yr || Gr) && Ge(!1);
                        },
                    ]
                ),
                Yn(e.cn, U, function g(n) {
                    Oi.stpP(n);
                }),
                F &&
                    Yn(e.cn, J, function (n) {
                        n.target === e.cn[0] && (Ke(S), Je(S));
                    });
        }
        function Ye(n, t, r) {
            var e = n ? a : v;
            li(Yt, n ? un : fn, !t), li(e, En, !r);
        }
        function Ge(n, t) {
            if ((clearTimeout(k), n)) si(a, Ln), si(v, Ln);
            else {
                var r,
                    e = function () {
                        B || Et || (!(r = l.hasClass("active") || m.hasClass("active")) && (Yr || Gr || Kr) && ci(a, Ln), !r && (Yr || Gr || Kr) && ci(v, Ln));
                    };
                0 < qr && !0 !== t ? (k = setTimeout(e, qr)) : e();
            }
        }
        function Ke(n) {
            var t = {},
                r = ni(n),
                e = r.vn,
                i = Si.min(1, ee[r.j] / vr[r.j]);
            (t[r.K] = Si.floor(100 * i * 1e6) / 1e6 + "%"), dt() || r.ln.css(t), (e.M = r.ln[0]["offset" + r.hn]), (e.D = i);
        }
        function Je(n, t) {
            var r,
                e,
                i = cn(t) == wi,
                o = Qt && n,
                u = ni(n),
                f = u.vn,
                a = "translate(",
                c = _i.v("transform"),
                s = _i.v("transition"),
                l = n ? Zt[_e]() : Zt[Oe](),
                v = t === di || i ? l : t,
                h = f.M,
                d = u.sn[0]["offset" + u.hn],
                p = d - h,
                b = {},
                m = (cr[we + u.hn] - cr["client" + u.hn]) * (Ct.n && o ? -1 : 1),
                g = function (n) {
                    return isNaN(n / m) ? 0 : Si.max(0, Si.min(1, n / m));
                },
                w = function (n) {
                    var t = p * n;
                    return (t = isNaN(t) ? 0 : t), (t = o && !Ct.i ? d - h - t : t), (t = Si.max(0, t));
                },
                y = g(l),
                x = w(g(v)),
                _ = w(y);
            (f.N = m),
                (f.L = l),
                (f.R = y),
                ln
                    ? ((r = o ? -(d - h - x) : x),
                      (e = n ? a + r + "px, 0)" : a + "0, " + r + "px)"),
                      (b[c] = e),
                      F &&
                          (b[s] =
                              i && 1 < Si.abs(x - f.W)
                                  ? (function O(n) {
                                        var t = _i.v("transition"),
                                            r = n.css(t);
                                        if (r) return r;
                                        for (
                                            var e,
                                                i,
                                                o,
                                                u = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*",
                                                f = new RegExp(u),
                                                a = new RegExp("^(" + u + ")+$"),
                                                c = "property duration timing-function delay".split(" "),
                                                s = [],
                                                l = 0,
                                                v = function (n) {
                                                    if (((e = []), !n.match(a))) return n;
                                                    for (; n.match(f); ) e.push(RegExp.$1), (n = n.replace(f, me));
                                                    return e;
                                                };
                                            l < c[xi.l];
                                            l++
                                        )
                                            for (i = v(n.css(t + "-" + c[l])), o = 0; o < i[xi.l]; o++) s[o] = (s[o] ? s[o] + xe : me) + i[o];
                                        return s.join(", ");
                                    })(u.ln) +
                                    ", " +
                                    (c + xe + 250) +
                                    "ms"
                                  : me))
                    : (b[u.B] = x),
                dt() ||
                    (u.ln.css(b),
                    ln &&
                        F &&
                        i &&
                        u.ln.one(J, function () {
                            Et || u.ln.css(s, me);
                        })),
                (f.W = x),
                (f.P = _),
                (f.F = d);
        }
        function Ze(n, t) {
            var r = t ? "removeClass" : "addClass",
                e = n ? b : m,
                i = n ? Tn : Hn;
            (n ? s : l)[r](i), e[r](i);
        }
        function ni(n) {
            return {
                K: n ? de : pe,
                hn: n ? "Width" : "Height",
                B: n ? le : ae,
                J: n ? "Left" : "Top",
                Q: n ? pn : bn,
                Z: n ? "X" : "Y",
                j: n ? "w" : "h",
                dn: n ? "l" : "t",
                sn: n ? s : b,
                ln: n ? l : m,
                cn: n ? a : v,
                vn: n ? vn : hn,
            };
        }
        function st(n) {
            (ir = ir || pt(Rn, !0)), n ? (p && Ht ? si(ir.removeAttr(xi.s), Dn) : gt(ir)) : p || Yt.append(ir);
        }
        function ti(n, t, r) {
            if (!1 !== r)
                if (Ht) {
                    var e,
                        i = Vt.callbacks[n],
                        o = n;
                    "on" === o.substr(0, 2) && (o = o.substr(2, 1).toLowerCase() + o.substr(3)),
                        cn(i) == bi && i.call(Ot, t),
                        h(jn, function () {
                            cn((e = this).on) == bi && e.on(o, t);
                        });
                } else
                    Et ||
                        Fn.push({
                            n: n,
                            a: t,
                        });
        }
        function ri(n, t, r) {
            (r = r || [me, me, me, me]), (n[(t = t || me) + ae] = r[0]), (n[t + ce] = r[1]), (n[t + se] = r[2]), (n[t + le] = r[3]);
        }
        function ei(n, t, r, e) {
            return (
                (t = t || me),
                (n = n || me),
                {
                    t: e ? 0 : ii(Yt.css(n + ae + t)),
                    r: r ? 0 : ii(Yt.css(n + ce + t)),
                    b: e ? 0 : ii(Yt.css(n + se + t)),
                    l: r ? 0 : ii(Yt.css(n + le + t)),
                }
            );
        }
        function lt(n, t) {
            var r,
                e,
                i,
                o = function (n, t) {
                    if (((i = ""), t && typeof n == gi)) for (e = n.split(xe), r = 0; r < e[xi.l]; r++) i += "|" + e[r] + "$";
                    return i;
                };
            return new RegExp("(^" + rn + "([-_].+|)$)" + o(Mr, n) + o(Dr, t), "g");
        }
        function vt() {
            var n = ar[xi.bCR]();
            return {
                x: (ln && 1 / (Si.round(n.width) / ar[xi.oW])) || 1,
                y: (ln && 1 / (Si.round(n.height) / ar[xi.oH])) || 1,
            };
        }
        function ht(n) {
            var t = "ownerDocument",
                r = "HTMLElement",
                e = (n && n[t] && n[t].parentWindow) || vi;
            return typeof e[r] == pi ? n instanceof e[r] : n && typeof n == pi && null !== n && 1 === n.nodeType && typeof n.nodeName == gi;
        }
        function ii(n, t) {
            var r = t ? parseFloat(n) : parseInt(n, 10);
            return isNaN(r) ? 0 : r;
        }
        function dt() {
            return Ir && St.x && St.y;
        }
        function oi() {
            return Lt ? er[0] : sr;
        }
        function ui(r, n) {
            return (
                "<div " +
                (r
                    ? cn(r) == gi
                        ? 'class="' + r + '"'
                        : (function () {
                              var n,
                                  t = me;
                              if (Ci.isPlainObject(r)) for (n in r) t += ("c" === n ? "class" : n) + '="' + r[n] + '" ';
                              return t;
                          })()
                    : me) +
                ">" +
                (n || me) +
                "</div>"
            );
        }
        function pt(n, t) {
            var r = cn(t) == wi,
                e = (!r && t) || Yt;
            return p && !e[xi.l] ? null : p ? e[r ? "children" : "find"](R + n.replace(/\s/g, R)).eq(0) : Ci(ui(n));
        }
        function bt(n, t) {
            for (var r, e = t.split(R), i = 0; i < e.length; i++) {
                if (!n[xi.hOP](e[i])) return;
                (r = n[e[i]]), i < e.length && cn(r) == pi && (n = r);
            }
            return r;
        }
        function mt(n) {
            var t = Vt.updateOnLoad;
            (t = cn(t) == gi ? t.split(xe) : t), Oi.isA(t) && !Et && h(t, n);
        }
        function fi(n, t, r) {
            if (r) return r;
            if (cn(n) != pi || cn(t) != pi) return n !== t;
            for (var e in n)
                if ("c" !== e) {
                    if (!n[xi.hOP](e) || !t[xi.hOP](e)) return !0;
                    if (fi(n[e], t[e])) return !0;
                }
            return !1;
        }
        function ai() {
            return Ci.extend.apply(this, [!0].concat([].slice.call(arguments)));
        }
        function ci(n, t) {
            return e.addClass.call(n, t);
        }
        function si(n, t) {
            return e.removeClass.call(n, t);
        }
        function li(n, t, r) {
            return (r ? ci : si)(n, t);
        }
        function gt(n) {
            return e.remove.call(n);
        }
        function wt(n, t) {
            return e.find.call(n, t).eq(0);
        }
    }
    return (
        zi &&
            zi.fn &&
            (zi.fn.overlayScrollbars = function (n, t) {
                return zi.isPlainObject(n)
                    ? (zi.each(this, function () {
                          q(this, n, t);
                      }),
                      this)
                    : q(this, n);
            }),
        q
    );
});

/**
 * Social - Network, Community and Event Theme
 *
 * @author Webestica (https://www.webestica.com/)
 * @version 1.1.2
 **/

/* ===================
Table Of Content
======================
01 PRELOADER
02 NAVBAR DROPDOWN HOVER
03 TINY SLIDER
04 TOOLTIP
05 POPOVER
06 VIDEO PLAYER
07 GLIGHTBOX
08 SIDEBAR TOGGLE START
09 SIDEBAR TOGGLE END
10 CHOICES
11 AUTO RESIZE TEXTAREA
12 DROP ZONE
13 FLAT PICKER
14 AVATAR IMAGE
15 CUSTOM SCROLLBAR
16 TOASTS
17 PSWMETER
18 FAKE PASSWORD
====================== */

("use strict");
!(function () {
    (window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }),
        (window.Element.prototype.addClass = function () {
            let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                selectors = this;
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            if (this.isVariableDefined(selectors) && className) {
                selectors.classList.add(className);
            }
            return this;
        }),
        (window.Element.prototype.toggleClass = function () {
            let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                selectors = this;
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            if (this.isVariableDefined(selectors) && className) {
                selectors.classList.toggle(className);
            }
            return this;
        }),
        (window.Element.prototype.isVariableDefined = function () {
            return !!this && typeof this != "undefined" && this != null;
        });
})();

var e = {
    init: function () {
        e.preLoader(),
            e.navbarDropdownHover(),
            e.tinySlider(),
            e.toolTipFunc(),
            e.popOverFunc(),
            e.videoPlyr(),
            e.lightBox(),
            e.sidebarToggleStart(),
            e.sidebarToggleEnd(),
            e.choicesSelect(),
            e.autoResize(),
            e.DropZone(),
            e.flatPicker(),
            e.avatarImg(),
            e.customScrollbar(),
            e.toasts(),
            e.pswMeter(),
            e.fakePwd();
    },
    isVariableDefined: function (el) {
        return typeof !!el && el != "undefined" && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }
        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if (!filter || filter(el)) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;
                }
            }
        } while ((nextElem = nextElem.nextSibling));
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(",") > -1) {
                    let types = type.split(",");
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }
            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }
    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    // START: 01 Preloader
    preLoader: function () {
        window.onload = function () {
            var preloader = e.select(".preloader");
            if (e.isVariableDefined(preloader)) {
                preloader.className += " animate__animated animate__fadeOut";
                setTimeout(function () {
                    preloader.style.display = "none";
                }, 200);
            }
        };
    },
    // END: Preloader

    // START: 02 Navbar dropdown hover
    navbarDropdownHover: function () {
        e.onAll(".dropdown-menu a.dropdown-item.dropdown-toggle", "click", function (event) {
            var element = this;
            event.preventDefault();
            event.stopImmediatePropagation();
            if (e.isVariableDefined(element.nextElementSibling) && !element.nextElementSibling.classList.contains("show")) {
                const parents = e.getParents(element, ".dropdown-menu");
                e.removeClass(parents.querySelector(".show"), "show");
                if (e.isVariableDefined(parents.querySelector(".dropdown-opened"))) {
                    e.removeClass(parents.querySelector(".dropdown-opened"), "dropdown-opened");
                }
            }
            var $subMenu = e.getNextSiblings(element, ".dropdown-menu");
            e.toggleClass($subMenu, "show");
            $subMenu.previousElementSibling.toggleClass("dropdown-opened");
            var parents = e.getParents(element, "li.nav-item.dropdown.show");
            if (e.isVariableDefined(parents) && parents.length > 0) {
                e.on(parents, "hidden.bs.dropdown", function (event) {
                    e.removeAllClass(".dropdown-submenu .show");
                });
            }
        });
    },
    // END: Navbar dropdown hover

    // START: 03 Tiny Slider
    tinySlider: function () {
        var $carousel = e.select(".tiny-slider-inner");
        if (e.isVariableDefined($carousel)) {
            var tnsCarousel = e.selectAll(".tiny-slider-inner");
            tnsCarousel.forEach((slider) => {
                var slider1 = slider;
                var sliderMode = slider1.getAttribute("data-mode") ? slider1.getAttribute("data-mode") : "carousel";
                var sliderAxis = slider1.getAttribute("data-axis") ? slider1.getAttribute("data-axis") : "horizontal";
                var sliderSpace = slider1.getAttribute("data-gutter") ? slider1.getAttribute("data-gutter") : 30;
                var sliderEdge = slider1.getAttribute("data-edge") ? slider1.getAttribute("data-edge") : 0;

                var sliderItems = slider1.getAttribute("data-items") ? slider1.getAttribute("data-items") : 4; //option: number (items in all device)
                var sliderItemsXl = slider1.getAttribute("data-items-xl") ? slider1.getAttribute("data-items-xl") : Number(sliderItems); //option: number (items in 1200 to end )
                var sliderItemsLg = slider1.getAttribute("data-items-lg") ? slider1.getAttribute("data-items-lg") : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
                var sliderItemsMd = slider1.getAttribute("data-items-md") ? slider1.getAttribute("data-items-md") : Number(sliderItemsLg); //option: number (items in 768 to 991 )
                var sliderItemsSm = slider1.getAttribute("data-items-sm") ? slider1.getAttribute("data-items-sm") : Number(sliderItemsMd); //option: number (items in 576 to 767 )
                var sliderItemsXs = slider1.getAttribute("data-items-xs") ? slider1.getAttribute("data-items-xs") : Number(sliderItemsSm); //option: number (items in start to 575 )

                var sliderSpeed = slider1.getAttribute("data-speed") ? slider1.getAttribute("data-speed") : 500;
                var sliderautoWidth = slider1.getAttribute("data-autowidth") === "true"; //option: true or false
                var sliderArrow = slider1.getAttribute("data-arrow") !== "false"; //option: true or false
                var sliderDots = slider1.getAttribute("data-dots") !== "false"; //option: true or false

                var sliderAutoPlay = slider1.getAttribute("data-autoplay") !== "false"; //option: true or false
                var sliderAutoPlayTime = slider1.getAttribute("data-autoplaytime") ? slider1.getAttribute("data-autoplaytime") : 4000;
                var sliderHoverPause = slider1.getAttribute("data-hoverpause") === "true"; //option: true or false
                if (e.isVariableDefined(e.select(".custom-thumb"))) {
                    var sliderNavContainer = e.select(".custom-thumb");
                }
                var sliderLoop = slider1.getAttribute("data-loop") !== "false"; //option: true or false
                var sliderRewind = slider1.getAttribute("data-rewind") === "true"; //option: true or false
                var sliderAutoHeight = slider1.getAttribute("data-autoheight") === "true"; //option: true or false
                var sliderfixedWidth = slider1.getAttribute("data-fixedwidth") === "true"; //option: true or false
                var sliderTouch = slider1.getAttribute("data-touch") !== "false"; //option: true or false
                var sliderDrag = slider1.getAttribute("data-drag") !== "false"; //option: true or false
                // Check if document DIR is RTL
                var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
                var sliderDirection;
                if (ifRtl === "rtl") {
                    sliderDirection = "rtl";
                }

                var tnsSlider = tns({
                    container: slider,
                    mode: sliderMode,
                    axis: sliderAxis,
                    gutter: sliderSpace,
                    edgePadding: sliderEdge,
                    speed: sliderSpeed,
                    autoWidth: sliderautoWidth,
                    controls: sliderArrow,
                    nav: sliderDots,
                    autoplay: sliderAutoPlay,
                    autoplayTimeout: sliderAutoPlayTime,
                    autoplayHoverPause: sliderHoverPause,
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    controlsPosition: top,
                    navContainer: sliderNavContainer,
                    navPosition: top,
                    autoplayPosition: top,
                    controlsText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
                    loop: sliderLoop,
                    rewind: sliderRewind,
                    autoHeight: sliderAutoHeight,
                    fixedWidth: sliderfixedWidth,
                    touch: sliderTouch,
                    mouseDrag: sliderDrag,
                    arrowKeys: true,
                    items: sliderItems,
                    textDirection: sliderDirection,
                    lazyload: true,
                    lazyloadSelector: ".lazy",
                    responsive: {
                        0: {
                            items: Number(sliderItemsXs),
                        },
                        576: {
                            items: Number(sliderItemsSm),
                        },
                        768: {
                            items: Number(sliderItemsMd),
                        },
                        992: {
                            items: Number(sliderItemsLg),
                        },
                        1200: {
                            items: Number(sliderItemsXl),
                        },
                    },
                });
            });
        }
    },
    // END: Tiny Slider

    // START: 04 Tooltip
    // Enable tooltips everywhere via data-toggle attribute
    toolTipFunc: function () {
        var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    },
    // END: Tooltip

    // START: 05 Popover
    // Enable popover everywhere via data-toggle attribute
    popOverFunc: function () {
        var popoverTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    },
    // END: Popover

    // START: 06 Video player
    videoPlyr: function () {
        var vdp = e.select(".player-wrapper");
        if (e.isVariableDefined(vdp)) {
            // youtube
            const playerYoutube = Plyr.setup(".player-youtube", {});
            window.player = playerYoutube;

            // Vimeo
            const playerVimeo = Plyr.setup(".player-vimeo", {});
            window.player = playerVimeo;

            // HTML video
            const playerHtmlvideo = Plyr.setup(".player-html", {
                captions: { active: true },
            });
            window.player = playerHtmlvideo;

            // HTML audio
            const playerHtmlaudio = Plyr.setup(".player-audio", {});
            window.player = playerHtmlaudio;
        }
    },
    // END: Video player

    // START: 07 GLightbox
    lightBox: function () {
        var light = e.select("[data-glightbox]");
        if (e.isVariableDefined(light)) {
            var lb = GLightbox({
                selector: "*[data-glightbox]",
                openEffect: "fade",
                touchFollowAxis: "true",
                closeEffect: "fade",
            });
        }
    },
    // END: GLightbox

    // START: 08 Sidebar Toggle start
    sidebarToggleStart: function () {
        var sidebar = e.select(".sidebar-start-toggle");
        if (e.isVariableDefined(sidebar)) {
            var sb = e.select(".sidebar-start-toggle");
            var mode = document.getElementsByTagName("BODY")[0];
            sb.addEventListener("click", function () {
                mode.classList.toggle("sidebar-start-enabled");
            });
        }
    },
    // END: Sidebar Toggle

    // START: 09 Sidebar Toggle end
    sidebarToggleEnd: function () {
        var sidebar = e.select(".sidebar-end-toggle");
        if (e.isVariableDefined(sidebar)) {
            var sb = e.select(".sidebar-end-toggle");
            var mode = document.getElementsByTagName("BODY")[0];
            sb.addEventListener("click", function () {
                mode.classList.toggle("sidebar-end-enabled");
            });
        }
    },
    // END: Sidebar Toggle end

    // START: 10 Choices
    choicesSelect: function () {
        var choice = e.select(".js-choice");
        if (e.isVariableDefined(choice)) {
            var element = e.selectAll(".js-choice");
            element.forEach(function (item) {
                var removeItemBtn = item.getAttribute("data-remove-item-button") == "true" ? true : false;
                var placeHolder = item.getAttribute("data-placeholder") == "false" ? false : true;
                var placeHolderVal = item.getAttribute("data-placeholder-val") ? item.getAttribute("data-placeholder-val") : "Type and hit enter";
                var maxItemCount = item.getAttribute("data-max-item-count") ? item.getAttribute("data-max-item-count") : 3;
                var searchEnabled = item.getAttribute("data-search-enabled") == "true" ? true : false;
                var position = item.getAttribute("data-position") ? item.getAttribute("data-position") : "auto";
                var choices = new Choices(item, {
                    removeItemButton: removeItemBtn,
                    placeholder: placeHolder,
                    placeholderValue: placeHolderVal,
                    maxItemCount: maxItemCount,
                    searchEnabled: searchEnabled,
                    position: position,
                });
            });
        }
    },
    // END: Choices

    // START: 11 Auto resize textarea
    autoResize: function () {
        e.selectAll("[data-autoresize]").forEach(function (element) {
            var offset = element.offsetHeight - element.clientHeight;
            element.addEventListener("input", function (event) {
                event.target.style.height = "auto";
                event.target.style.height = event.target.scrollHeight + offset + "px";
            });
        });
    },
    // END: Auto resize textarea

    // START: 12 Drop Zone
    DropZone: function () {
        if (e.isVariableDefined(e.select("[data-dropzone]"))) {
            window.Dropzone.autoDiscover = false;

            // 1. Default Dropzone Initialization
            if (e.isVariableDefined(e.select(".dropzone-default"))) {
                e.selectAll(".dropzone-default").forEach((e) => {
                    const a = e.dataset.dropzone ? JSON.parse(e.dataset.dropzone) : {},
                        b = {
                            url: "/upload", // Change this URL to your actual image upload code
                            // Fake the file upload, since GitHub does not handle file uploads
                            // and returns a 404
                            // https://docs.dropzone.dev/getting-started/setup/server-side-implementation
                            init: function () {
                                this.on("error", function (file, errorMessage) {
                                    if (file.accepted) {
                                        var mypreview = document.getElementsByClassName("dz-error");
                                        mypreview = mypreview[mypreview.length - 1];
                                        mypreview.classList.toggle("dz-error");
                                        mypreview.classList.toggle("dz-success");
                                    }
                                });
                            },
                        },
                        c = {
                            ...b,
                            ...a,
                        };
                    new Dropzone(e, c);
                });
            }

            // 2. Custom cover and list previews Dropzone Initialization
            if (e.isVariableDefined(e.select(".dropzone-custom"))) {
                e.selectAll(".dropzone-custom").forEach((d) => {
                    const j = d.dataset.dropzone ? JSON.parse(d.dataset.dropzone) : {},
                        o = {
                            addRemoveLinks: true,
                            previewsContainer: d.querySelector(".dz-preview"),
                            previewTemplate: d.querySelector(".dz-preview").innerHTML,
                            url: "/upload", // Change this URL to your actual image upload code
                            // Now fake the file upload, since GitHub does not handle file uploads
                            // and returns a 404
                            // https://docs.dropzone.dev/getting-started/setup/server-side-implementation
                            init: function () {
                                this.on("error", function (file, errorMessage) {
                                    if (file.accepted) {
                                        var mypreview = document.getElementsByClassName("dz-error");
                                        mypreview = mypreview[mypreview.length - 1];
                                        mypreview.classList.toggle("dz-error");
                                        mypreview.classList.toggle("dz-success");
                                    }
                                });
                            },
                        },
                        x = {
                            ...o,
                            ...j,
                        };
                    d.querySelector(".dz-preview").innerHTML = "";
                    new Dropzone(d, x);
                });
            }
        }
    },
    // END: Drop Zone

    // START: 13 Flat picker
    flatPicker: function () {
        var picker = e.select(".flatpickr");
        if (e.isVariableDefined(picker)) {
            var element = e.selectAll(".flatpickr");
            element.forEach(function (item) {
                var mode = item.getAttribute("data-mode") == "multiple" ? "multiple" : item.getAttribute("data-mode") == "range" ? "range" : "single";
                var enableTime = item.getAttribute("data-enableTime") == "true" ? true : false;
                var noCalendar = item.getAttribute("data-noCalendar") == "true" ? true : false;
                var inline = item.getAttribute("data-inline") == "true" ? true : false;
                var dateFormat = item.getAttribute("data-date-format") ? item.getAttribute("data-date-format") : item.getAttribute("data-enableTime") == "true" ? "h:i K" : "d M";

                flatpickr(item, {
                    mode: mode,
                    enableTime: enableTime,
                    noCalendar: noCalendar,
                    inline: inline,
                    animate: "false",
                    position: "top",
                    dateFormat: "D-m-Y", //Check supported characters here: https://flatpickr.js.org/formatting/
                    disableMobile: "true",
                });
            });
        }
    },
    // END: Flat picker

    // START: 14 Avatar Image
    avatarImg: function () {
        if (e.isVariableDefined(e.select("#avatarUpload"))) {
            var avtInput = e.select("#avatarUpload"),
                avtReset = e.select("#avatar-reset-img"),
                avtPreview = e.select("#avatar-preview");

            // Avatar upload and replace
            avtInput.addEventListener("change", readURL, true);
            function readURL() {
                const file = avtInput.files[0];
                const files = avtInput.files;
                const reader = new FileReader();
                reader.onloadend = function () {
                    avtPreview.src = reader.result;
                };

                if (file && files) {
                    reader.readAsDataURL(file);
                } else {
                }

                avtInput.value = "";
            }

            // Avatar remove functionality
            avtReset.addEventListener("click", function () {
                avtPreview.src = "/assets/images/avatar/placeholder.jpg";
            });
        }
    },
    // END: Avatar Image

    // START: 15 Custom Scrollbar
    customScrollbar: function () {
        if (e.isVariableDefined(e.select(".custom-scrollbar"))) {
            document.addEventListener("DOMContentLoaded", function () {
                var instances = OverlayScrollbars(e.selectAll(".custom-scrollbar"), {
                    resize: "none",
                    scrollbars: {
                        autoHide: "leave",
                        autoHideDelay: 200,
                    },
                    overflowBehavior: {
                        x: "visible-hidden",
                        y: "scroll",
                    },
                });
            });
        }

        if (e.isVariableDefined(e.select(".custom-scrollbar-y"))) {
            document.addEventListener("DOMContentLoaded", function () {
                var instances = OverlayScrollbars(e.selectAll(".custom-scrollbar-y"), {
                    resize: "none",
                    scrollbars: {
                        autoHide: "leave",
                        autoHideDelay: 200,
                    },
                    overflowBehavior: {
                        x: "scroll",
                        y: "scroll",
                    },
                });
            });
        }
    },
    // END: Custom Scrollbar

    // START: 16 Toasts
    toasts: function () {
        if (e.isVariableDefined(e.select(".toast-btn"))) {
            window.addEventListener("DOMContentLoaded", (event) => {
                e.selectAll(".toast-btn").forEach((t) => {
                    t.addEventListener("click", function () {
                        var toastTarget = document.getElementById(t.dataset.target);
                        var toast = new bootstrap.Toast(toastTarget);
                        toast.show();
                    });
                });
            });
        }
    },
    // END: Toasts

    // START: 17 pswMeter
    pswMeter: function () {
        if (e.isVariableDefined(e.select("#pswmeter"))) {
            const myPassMeter = passwordStrengthMeter({
                containerElement: "#pswmeter",
                passwordInput: "#psw-input",
                showMessage: true,
                messageContainer: "#pswmeter-message",
                messagesList: ["Write your password...", "Easy peasy!", "That is a simple one", "That is better", "Yeah! that password rocks ;)"],
                height: 8,
                borderRadius: 4,
                pswMinLength: 8,
                colorScore1: "#dc3545",
                colorScore2: "#f7c32e",
                colorScore3: "#4f9ef8",
                colorScore4: "#0cbc87",
            });
        }
    },
    // END: pswMeter

    // START: 18 Fake Password
    fakePwd: function () {
        if (e.isVariableDefined(e.select(".fakepassword"))) {
            var password = e.select(".fakepassword");
            var toggler = e.select(".fakepasswordicon");

            var showHidePassword = () => {
                if (password.type == "password") {
                    password.setAttribute("type", "text");
                    toggler.classList.add("fa-eye");
                } else {
                    toggler.classList.remove("fa-eye");
                    password.setAttribute("type", "password");
                }
            };

            toggler.addEventListener("click", showHidePassword);
        }
    },
    // END: Fake Password
};
e.init();
